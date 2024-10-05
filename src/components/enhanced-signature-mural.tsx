"use client";
import React, { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Stage, Layer, Image } from "react-konva";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Trash2, ZoomIn, ZoomOut, Move, Undo, Download } from "lucide-react";

interface Signature {
  id: string;
  dataURL: string;
  x: number;
  y: number;
  color: string;
  scale: number;
  rotation: number;
}

export function EnhancedSignatureMuralComponent() {
  const [signatures, setSignatures] = useState<Signature[]>([]);
  const [selectedSignature, setSelectedSignature] = useState<string | null>(
    null,
  );
  const [color, setColor] = useState<string>("#000000");
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sigPad = useRef<SignatureCanvas>(null);
  const stageRef = useRef<any>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 });
  const { toast } = useToast();

  useEffect(() => {
    const savedSignatures = localStorage.getItem("mural-signatures");
    if (savedSignatures) {
      setSignatures(JSON.parse(savedSignatures));
    }

    const updateCanvasSize = () => {
      setCanvasSize({
        width: Math.min(800, window.innerWidth - 40),
        height: Math.min(400, (window.innerHeight - 300) / 2),
      });
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    localStorage.setItem("mural-signatures", JSON.stringify(signatures));
  }, [signatures]);

  const handleClear = () => {
    if (sigPad.current) {
      sigPad.current.clear();
    }
  };

  const handleSubmit = () => {
    if (sigPad.current) {
      const dataURL = sigPad.current.toDataURL();
      console.log("Signature dataURL:", dataURL); // Debugging log
      const newSignature: Signature = {
        id: Date.now().toString(),
        dataURL,
        x: Math.random() * (canvasSize.width - 100),
        y: Math.random() * (canvasSize.height - 50),
        color,
        scale: 1,
        rotation: Math.random() * 30 - 15,
      };
      setSignatures((prevSignatures) => {
        console.log("Adding new signature:", newSignature); // Debugging log
        return [...prevSignatures, newSignature];
      });
      setSelectedSignature(newSignature.id);
      sigPad.current.clear();
      toast({
        title: "Signature added",
        description: "Your signature has been added to the mural.",
      });
    }
  };

  const handleDelete = () => {
    if (selectedSignature) {
      setSignatures(signatures.filter((sig) => sig.id !== selectedSignature));
      setSelectedSignature(null);
      toast({
        title: "Signature deleted",
        description: "The selected signature has been removed from the mural.",
      });
    }
  };

  const handleZoom = (direction: "in" | "out") => {
    setScale((prevScale) => {
      const newScale = direction === "in" ? prevScale * 1.2 : prevScale / 1.2;
      return Math.max(0.5, Math.min(newScale, 3));
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scaleBy = 1.1;
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };
    const newScale = e.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    setScale(newScale);
    setPosition({
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    });
  };

  const handleUndoLastSignature = () => {
    if (signatures.length > 0) {
      const newSignatures = [...signatures];
      newSignatures.pop();
      setSignatures(newSignatures);
      setSelectedSignature(null);
      toast({
        title: "Undo",
        description: "Last signature has been removed.",
      });
    }
  };

  const handleDownloadMural = () => {
    const dataURL = stageRef.current.toDataURL();
    const link = document.createElement("a");
    link.download = "signature-mural.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Ernesto Signature Mural</h1>
      <div className="relative w-full max-w-3xl border border-gray-300 rounded-lg overflow-hidden">
        <Stage
          width={canvasSize.width}
          height={canvasSize.height}
          scaleX={scale}
          scaleY={scale}
          x={position.x}
          y={position.y}
          draggable={isDragging}
          onWheel={handleWheel}
          ref={stageRef}
        >
          <Layer>
            {signatures.map((sig) => {
              const img = new window.Image();
              img.src = sig.dataURL;
              return (
                <Image
                  key={sig.id}
                  image={img}
                  x={sig.x}
                  y={sig.y}
                  width={100 * sig.scale}
                  height={50 * sig.scale}
                  opacity={selectedSignature === sig.id ? 1 : 0.7}
                  onClick={() => setSelectedSignature(sig.id)}
                  onTap={() => setSelectedSignature(sig.id)}
                  rotation={sig.rotation}
                />
              );
            })}
          </Layer>
        </Stage>
        {/* <div className="absolute bottom-2 right-2 flex space-x-2">
          <Button size="sm" variant="secondary" onClick={() => handleZoom('in')}><ZoomIn className="w-4 h-4" /></Button>
          <Button size="sm" variant="secondary" onClick={() => handleZoom('out')}><ZoomOut className="w-4 h-4" /></Button>
          <Button size="sm" variant="secondary" onClick={() => setIsDragging(!isDragging)}>
            <Move className="w-4 h-4" />
            {isDragging ? 'Disable' : 'Enable'} Pan
          </Button>
        </div> */}
      </div>
      <div className="w-full max-w-md space-y-4">
        <div className="border border-gray-300 rounded-md p-4">
          <SignatureCanvas
            ref={sigPad}
            canvasProps={{
              className:
                "signature-canvas w-full border border-gray-400 rounded-md",
              width: 400,
              height: 350,
            }}
            penColor={color}
          />
          <div className="flex justify-between mt-4">
            <Button onClick={handleClear} variant="outline">
              Clear
            </Button>
            <Select onValueChange={setColor} defaultValue={color}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="#000000">Black</SelectItem>
                <SelectItem value="#FF0000">Red</SelectItem>
                <SelectItem value="#0000FF">Blue</SelectItem>
                <SelectItem value="#008000">Green</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            onClick={handleDelete}
            disabled={!selectedSignature}
            variant="destructive"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Selected
          </Button>
          {/* <Button onClick={handleUndoLastSignature} disabled={signatures.length === 0} variant="outline">
            <Undo className="w-4 h-4 mr-2" />
            Undo Last
          </Button> */}
          <Button onClick={handleDownloadMural} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Mural
          </Button>
          {/* <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Zoom:</span>
            <Slider
              min={0.5}
              max={3}
              step={0.1}
              value={[scale]}
              onValueChange={([value]) => setScale(value)}
              className="w-32"
            />
          </div> */}
        </div>
      </div>
      <div>
        <p>Debug: Total signatures: {signatures.length}</p>
        {signatures.map((sig, index) => (
          <p key={sig.id}>
            Signature {index + 1}: ID={sig.id}, X={sig.x.toFixed(2)}, Y=
            {sig.y.toFixed(2)}
          </p>
        ))}
      </div>
    </div>
  );
}

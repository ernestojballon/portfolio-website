"use client"
import React, { useState, useRef, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Stage, Layer, Image, Rect } from 'react-konva'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Trash2, ZoomIn, ZoomOut, Move, Undo, Download } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface Signature {
  id: string
  dataURL: string
  x: number
  y: number
  color: string
  scale: number
  rotation: number
}

const SignatureMural = () => {
  const [signatures, setSignatures] = useState<Signature[]>([])
  const [selectedSignatureId, setSelectedSignatureId] = useState<string | null>(null)
  const [color, setColor] = useState<string>("#00FFFF")
  const [scale, setScale] = useState<number>(1)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const sigPad = useRef<SignatureCanvas>(null)
  const stageRef = useRef<any>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 })
  const { toast } = useToast()
  const isMobile = useMediaQuery('(max-width: 640px)')

  useEffect(() => {
    const savedSignatures = localStorage.getItem('mural-signatures')
    if (savedSignatures) {
      setSignatures(JSON.parse(savedSignatures))
    }

    const updateCanvasSize = () => {
      setCanvasSize({
        width: Math.min(800, window.innerWidth - 40),
        height: Math.min(400, (window.innerHeight - 300) / 2)
      })
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    return () => window.removeEventListener('resize', updateCanvasSize)
  }, [])

  useEffect(() => {
    localStorage.setItem('mural-signatures', JSON.stringify(signatures))
  }, [signatures])

  const handleClear = () => {
    if (sigPad.current) {
      sigPad.current.clear()
    }
  }

  const handleSubmit = () => {
    if (sigPad.current) {
      const dataURL = sigPad.current.toDataURL()
      const newSignature: Signature = {
        id: Date.now().toString(),
        dataURL,
        x: Math.random() * (canvasSize.width - 100),
        y: Math.random() * (canvasSize.height - 150),
        color,
        scale: (Math.random() * 2) + 1,
        rotation: Math.random() * 30 - 15
      }
      setSignatures(prevSignatures => {
        console.log("Adding new signature:", newSignature) // Debugging log
        return [...prevSignatures, newSignature]
      })
      setSelectedSignatureId(newSignature.id)
      sigPad.current.clear()
      //ramdom color
      setColor("#" + Math.floor(Math.random() * 16777215).toString(16))
      toast({
        title: "Signature added",
        description: "Your signature has been added to the mural.",
      })

    }
  }

  const handleDelete = () => {
    if (selectedSignatureId) {
      setSignatures(signatures.filter(sig => sig.id !== selectedSignatureId))
      setSelectedSignatureId(null)
      toast({
        title: "Signature deleted",
        description: "The selected signature has been removed from the mural.",
      })
    }
  }

  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prevScale => {
      const newScale = direction === 'in' ? prevScale * 1.2 : prevScale / 1.2
      return Math.max(0.5, Math.min(newScale, 3))
    })
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const scaleBy = 1.1
    const stage = stageRef.current
    const oldScale = stage.scaleX()
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    }
    const newScale = e.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy
    setScale(newScale)
    setPosition({
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    })
  }

  const handleUndoLastSignature = () => {
    if (signatures.length > 0) {
      const newSignatures = [...signatures]
      newSignatures.pop()
      setSignatures(newSignatures)
      setSelectedSignatureId(null)
      toast({
        title: "Undo",
        description: "Last signature has been removed.",
      })
    }
  }

  const handleDownloadMural = () => {
    const dataURL = stageRef.current.toDataURL()
    const link = document.createElement('a')
    link.download = 'signature-mural.png'
    link.href = dataURL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const selectedSignature = signatures.find(sig => sig.id === selectedSignatureId)

  return (
    <div className="flex flex-col items-center space-y-4 p-4 mt-16 ">
      <h1 className="text-2xl font-bold">Ernesto's Signature Mural</h1>
      <div className="relative w-full max-w-3xl border border-gray-300  rounded-lg overflow-hidden">
        <Stage
          width={canvasSize.width}
          height={canvasSize.height}
          scaleX={1}
          scaleY={1}
          x={position.x}
          y={position.y}
          // draggable={isDragging}
          // onWheel={handleWheel}
          ref={stageRef}
          style={{ backgroundColor: '#1A1A2E' }}
        >
          <Layer>
            {signatures.map((sig) => {
              const img = new window.Image()
              img.src = sig.dataURL
              const isSelected = selectedSignatureId === sig.id
              return (
                <React.Fragment key={sig.id}>
                  {isSelected && (
                    <Rect
                      x={sig.x - 5}
                      y={sig.y - 5}
                      width={110 * sig.scale}
                      height={60 * sig.scale}
                      fill="transparent"
                      stroke={"red"}
                      strokeWidth={0.3}
                      shadowColor={"red"}
                      shadowBlur={1}
                      shadowOpacity={0.5}
                      rotation={sig.rotation}
                    />
                  )}
                  <Image
                    image={img}
                    x={sig.x}
                    y={sig.y}
                    width={100 * sig.scale}
                    height={50 * sig.scale}
                    opacity={isSelected ? 1 : 0.7}
                    onClick={() => setSelectedSignatureId(sig.id)}
                    onTap={() => setSelectedSignatureId(sig.id)}
                    rotation={sig.rotation}
                  />
                </React.Fragment>
              )
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
      <div className="flex justify-between items-center  gap-2">
        <Button onClick={handleDelete} disabled={!selectedSignatureId} variant="destructive">
          <Trash2 className=" h-4 mr-2" />
          Delete Selected
        </Button>

        <Button onClick={handleDownloadMural} variant="outline">
          <Download className=" h-4 mr-2" />
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
      <div className="w-full max-w-md space-y-4 ">
        <div className="border border-gray-300 rounded-md p-4">
          <SignatureCanvas
            key={isMobile ? 'mobile' : 'desktop'}
            ref={sigPad}
            canvasProps={{
              className: `w-full h-full border border-solid border-color-gray-30`,
              height: isMobile ? 550 : 250
            }}
            penColor={color}
            clearOnResize={true}
          />

          <div className="flex justify-between mt-4 flex-wrap gap-2">
            <Button className='w-[30%]' onClick={handleClear} variant="outline">Clear</Button>

            <Button className='w-[30%]' onClick={handleSubmit}>Submit</Button>
            <Select onValueChange={setColor} defaultValue={color}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="#00FFFF">Electric Blue</SelectItem>
                <SelectItem value="#FF6EC7">Neon Pink</SelectItem>
                <SelectItem value="#CCFF00">Lime Green</SelectItem>
                <SelectItem value="#FF9933">Neon Orange</SelectItem>
                <SelectItem value="#BF00FF">Electric Purple</SelectItem>
                <SelectItem value="#FFFF00">Neon Yellow</SelectItem>
                <SelectItem value="#FF00FF">Hot Magenta</SelectItem>
                <SelectItem value="#FF3131">Neon Red</SelectItem>
                <SelectItem value="#00FFBF">Aqua</SelectItem>
                <SelectItem value="#39FF14">Neon Green</SelectItem>
                <SelectItem value="#6600FF">Electric Indigo</SelectItem>
                <SelectItem value="#FC0FC0">Shocking Pink</SelectItem>
                <SelectItem value="#08E8DE">Bright Turquoise</SelectItem>
                <SelectItem value="#FF7F50">Neon Coral</SelectItem>
                <SelectItem value="#FFFF66">Laser Lemon</SelectItem>
              </SelectContent>
            </Select>
            <Button className='ml-auto' onClick={handleUndoLastSignature} disabled={signatures.length === 0} variant="outline">
              <Undo className=" h-4 mr-2" />
              Undo Last
            </Button>
          </div>
        </div>

      </div>
      {/* <div>
        <p>Debug: Total signatures: {signatures.length}</p>
        {signatures.map((sig, index) => (
          <p key={sig.id}>Signature {index + 1}: ID={sig.id}, X={sig.x.toFixed(2)}, Y={sig.y.toFixed(2)}</p>
        ))}
      </div> */}
    </div>
  )
}


export default SignatureMural;
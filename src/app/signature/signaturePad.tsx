'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from '@/components/ui/button';

const Signature = () => {
  // const { setSignatureImageURL, setCurrentPage } = useStore();

  const [signature, setSignature] = useState(false);

  const padRef = useRef<SignatureCanvas>(null);

  const clear = () => {
    padRef?.current?.clear();
    setSignature(false);
  };

  const confirmSignature = () => {
    console.log(
      padRef.current?.toDataURL('image/png')
        ? padRef.current?.toDataURL('image/png')
        : ''
    );
    // setSignatureImageURL(
    //   padRef.current?.toDataURL('image/png') ? padRef.current?.toDataURL('image/png') : '',
    // );
    // setCurrentPage('checkout');
  };

  const syncPad = useCallback(() => {
    if (padRef?.current && !signature) {
      const ratio = Math.max(window.devicePixelRatio ?? 1, 1);
      const canvas = padRef.current?.getCanvas();
      canvas.width = canvas?.offsetWidth * ratio;
      canvas.height = canvas?.offsetHeight * ratio;
      canvas.getContext('2d')!.scale(ratio, ratio);
      padRef?.current?.clear();
    }
  }, [signature]);

  useEffect(() => {
    syncPad();
  }, [syncPad]);

  const onCancelModal = () => {
    padRef?.current?.clear();
    setSignature(false);
    // setCurrentPage('equipments');
  };

  return (
    <div
      data-testid="signatureCanvas"
      className="fixed left-0 top-0 flex h-screen w-screen flex-col gap-8 bg-white p-8"
    >
      <div className="h-5/6">
        <SignatureCanvas
          canvasProps={{
            className: `w-full h-full border border-solid border-color-gray-30`,
          }}
          ref={padRef}
          penColor="black"
          onEnd={() => setSignature(true)}
          clearOnResize={true}
        />
      </div>

      <div className="flex h-1/6 items-center justify-between">
        <Button data-testid="cancelButton" onClick={() => onCancelModal()}>
          Cancel
        </Button>
        <Button data-testid="clearButton" onClick={() => clear()}>
          Clear Signature
        </Button>
        <Button
          data-testid="confirmButton"
          disabled={!signature}
          onClick={() => confirmSignature()}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Signature;

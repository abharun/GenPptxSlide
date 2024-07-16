import React, { useRef } from "react";
import { DragElement } from "./DragElement";
import { domToPng } from "modern-screenshot";

export const Dashboard: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const downloadImage = async () => {
    if (imgRef.current) {
      try {
        const dataUrl = await domToPng(imgRef.current);
        return dataUrl;
      }
      catch (e) {
        console.error('Error capturing image:', e);
        return null;
      }
    }
  };

  const export2pptx = async () => {
    const dataUrl = await downloadImage();
    if (dataUrl) {
      const base64Data = dataUrl.split(',')[1];
      console.log(base64Data);
    }
  };

  return <div className="MainBoard">
    <img ref={imgRef} src="https://campussuite-storage.s3.amazonaws.com/prod/1559029/da50a146-938b-11ea-9ce3-0abf9590ab1b/2655419/eba87f66-4cf3-11ee-a3cc-0a58a9feac02/optimizations/16" />
    <button style={{ border: "2px solid #ff0000" }} onClick={export2pptx}>Download to pptx</button>
  </div>;
};

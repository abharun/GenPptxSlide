import React, { useRef, useState } from "react";
import { DragElement } from "./DragElement";
import { domToPng } from "modern-screenshot";
import PptxGenJS from "pptxgenjs";

export const Dashboard: React.FC = () => {
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const downloadImage = async (
    ref: React.RefObject<HTMLImageElement>,
  ): Promise<string | null> => {
    if (ref.current) {
      try {
        const dataUrl = await domToPng(ref.current);
        return dataUrl;
      } catch (error) {
        console.error('Error capturing image:', error);
        return null;
      }
    } else {
      console.log('Waiting for images to load');
      return null;
    }
  };

  const export2pptx = async () => {
    const dataUrl = await downloadImage(imgRef);
    if (dataUrl) {
      const pptx = new PptxGenJS();
      const slide = pptx.addSlide();
      slide.addImage({
        data: dataUrl,
        x: 0,
        y: 0,
        w: 466 / 96,
        h: 583 / 96,
      });

      pptx.writeFile({ fileName: "presentation.pptx" });
    }
  };

  return <div className="MainBoard">
    <div>
      <img
        ref={imgRef}
        src="https://i.pinimg.com/originals/92/95/f5/9295f5ba3c7491bd971dc8fc15ea2487.png" />
    </div>
    <button style={{ border: "2px solid #ff0000" }} onClick={export2pptx}>Download to pptx</button>
  </div>;
};

import pptxgen from "pptxgenjs";

export const generatePPTX = () => {
  // 1. Create a Presentation
  let pres = new pptxgen();

  // 2. Add a Slide to the presentation
  let slide = pres.addSlide();

  // 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide
  slide.addText("Hello World from PptxGenJS...", {
    x: 1,
    y: 1,
    w: 4.86,
    h: 0.4,
    color: "363636",
    fill: { color: "#FF0000", transparency: 100 },
  });

  slide.addImage({
    x: 1,
    y: 2,
    path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
  });

  slide.addShape("rect", {
    x: 4,
    y: 2,
    w: 2,
    h: 2,
    fill: { color: "#00FF00", transparency: 50 },
  });

  slide.addShape("roundRect", {
    x: 7,
    y: 2,
    w: 2,
    h: 2,
    rectRadius: 0.5,
    fill: { color: "#00FF00", transparency: 50 },
  });

  // 4. Save the Presentation
  pres.writeFile({ fileName: "Sample Presentation.pptx" });
};

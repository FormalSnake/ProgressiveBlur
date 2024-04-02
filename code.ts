// FormalSnake Progressive Blur
// const numberOfSteps = 10; // Het aantal stappen in de gradient
// const maxBlur = 100; // De maximale blur-waarde
figma.showUI(__html__, { themeColors: true /* other options */ });
figma.ui.resize(500, 500);
figma.ui.onmessage = (message) => {
  const numbersArray: number[] = message.split(",").map(Number);
  console.log(numbersArray);
  Create(numbersArray[0], numbersArray[1], numbersArray[2]);
};

function Create(startingBlur: number, maxBlur: number, blurIncrement: number) {
  const numberOfSteps = Math.ceil((maxBlur - startingBlur) / blurIncrement / 2);

  const frame = figma.createFrame();
  frame.resize(400, 300); // Adjust the size as desired
  frame.fills = []; // Transparent background
  frame.layoutMode = "VERTICAL";
  frame.itemSpacing = 0; // No space between items
  frame.primaryAxisSizingMode = "AUTO"; // Automatically adjust height
  frame.counterAxisSizingMode = "AUTO"; // Automatically adjust width
  frame.clipsContent = false; // Prevent the frame from clipping its contents

  // Voeg rechthoeken toe met toenemende blur en afnemende dekking
  for (let i = 0; i < numberOfSteps; i++) {
    const rect = figma.createRectangle();

    rect.fills = [
      { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.01 },
    ];
    rect.blendMode = "PASS_THROUGH";

    // Stel de blur-effecten in
    rect.effects = [
      {
        type: "BACKGROUND_BLUR",
        visible: true,
        radius: startingBlur + blurIncrement * i,
      },
      {
        type: "LAYER_BLUR",
        visible: true,
        radius: (startingBlur + blurIncrement * i) / 2,
      },
    ];
    //  rect.effects = [
    //    {
    //      type: "BACKGROUND_BLUR",
    //      visible: true,
    //      radius: maxBlur * ((i + 1) / numberOfSteps),
    //    },
    //    {
    //      type: "LAYER_BLUR",
    //      visible: true,
    //      radius: maxBlur * ((i + 0.1) / numberOfSteps),
    //    },
    //  ];
    // Zorg dat de rechthoeken horizontaal en verticaal het frame huggen
    rect.layoutAlign = "STRETCH"; // Dit zorgt ervoor dat de rechthoek zich uitstrekt om de parent te vullen
    rect.layoutGrow = 1;

    // Voeg de rechthoek toe aan het frame
    frame.appendChild(rect);
  }
  // Selecteer het frame en zoom in op het canvas
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
}

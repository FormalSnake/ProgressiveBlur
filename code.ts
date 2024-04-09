/* FormalSnake's Progressive Blur                            */
/* Made April 2 2024                                         */
/* Do not redistribute this in a way that breaks the license */

figma.showUI(__html__, { themeColors: true /* other options */ });
figma.ui.resize(552, 600);
figma.ui.onmessage = (message) => {
  const numbersArray: number[] = message.split(",").map(Number);
  console.log(numbersArray);
  Create(
    numbersArray[0],
    numbersArray[1],
    numbersArray[2],
    numbersArray[3],
    numbersArray[4],
    numbersArray[5]
  );
};

function Create(
  startingLayerBlur: number,
  maxLayerBlur: number,
  layerBlurIncrement: number,
  startingBackgroundBlur: number,
  maxBackgroundBlur: number,
  backgroundBlurIncrement: number
) {
  // Calculate the number of steps needed, based on the larger set of differences
  const numberOfSteps = Math.max(
    Math.ceil((maxLayerBlur - startingLayerBlur) / layerBlurIncrement),
    Math.ceil((maxBackgroundBlur - startingBackgroundBlur) / backgroundBlurIncrement)
  );

  const frame = figma.createFrame();
  frame.resize(400, 300); // Adjust the size as desired
  frame.fills = []; // Transparent background
  frame.layoutMode = "VERTICAL";
  frame.itemSpacing = 0; // No space between items
  frame.primaryAxisSizingMode = "AUTO"; // Automatically adjust height
  frame.counterAxisSizingMode = "AUTO"; // Automatically adjust width
  frame.clipsContent = false; // Prevent the frame from clipping its contents

  for (let i = 0; i < numberOfSteps; i++) {
    const rect = figma.createRectangle();

    rect.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.01 }];
    rect.blendMode = "PASS_THROUGH";

    // Calculate current blurs
    let currentLayerBlur = startingLayerBlur + layerBlurIncrement * i;
    let currentBackgroundBlur = startingBackgroundBlur + backgroundBlurIncrement * i;

    // Ensure the current blurs do not exceed their max values
    currentLayerBlur = Math.min(currentLayerBlur, maxLayerBlur);
    currentBackgroundBlur = Math.min(currentBackgroundBlur, maxBackgroundBlur);

    rect.effects = [
      { type: "BACKGROUND_BLUR", visible: true, radius: currentBackgroundBlur },
      { type: "LAYER_BLUR", visible: true, radius: currentLayerBlur },
    ];
    // Old formula
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

    rect.layoutAlign = "STRETCH";
    rect.layoutGrow = 1;

    frame.appendChild(rect);
  }
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

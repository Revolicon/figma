figma.showUI(__html__, { themeColors: true, height: 550, width: 280 });

figma.ui.onmessage = (message) => {
  console.log(message);
};

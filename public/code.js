/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 500, height: 400, title: 'My Vue Plugin built with Vite' });

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
      const nodes = [];
      for (let i = 0; i < msg.count; i++) {
          const rect = figma.createRectangle();
          rect.x = i * 150;
          rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
          figma.currentPage.appendChild(rect);
          nodes.push(rect);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

  figma.closePlugin();
};

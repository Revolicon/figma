import createIcon from "./methods/createIcon"
import Icons from "./icons"

function setUIType(type: string) {
  type UiTypes = "default" | "wide"

  let uiType = {
    wide: {
      width: 560,
      height: 512,
    },
    default: {
      width: 280,
      height: 512,
    },
  }
  let uiTypeSelected = uiType[type as UiTypes]

  figma.ui.resize(uiTypeSelected.width, uiTypeSelected.height)
}

figma.on("run", ({ parameters }) => {
  if (parameters) {
    let iconSlug: string = parameters?.icon.name
    let iconStyle: IconStyle = parameters?.style?.name ?? "line"
    // @ts-ignore
    let iconObject: object = Icons?.[iconSlug]

    createIcon({
      slug: iconSlug,
      style: iconStyle,
      overlay: 1,
      version: "1.0.0",
      // @ts-ignore
      svg: iconObject.svgs?.[iconStyle]?.raw,
    })
    return figma.closePlugin()
  }
  figma.showUI(__html__, {
    title: "Revolicon",
    height: 512,
    width: 280,
    themeColors: false,
  })

  setUIType("default")

  figma.ui.onmessage = (message) => {
    if (message.type === "create-icon") {
      createIcon({
        slug: "test",
        style: "line",
        overlay: 1.5,
        version: "1.0.0",
      })
    }
    if (message.type === "used-icon-list") {
      const nodes = figma.root.findAll((n) => {
        let nodeType = n.type === "COMPONENT"
        let nodeData = n.getPluginDataKeys().includes("revolicon")

        return nodeType && nodeData
      })
      // console.log(nodes);
      console.log(nodes.map((l) => l.getPluginData("icon_slug")))
    }
  }
})
figma.on("run", ({ parameters }) => {
  if (parameters) return

  // UI detect is click relaunch button
  if (figma.command === "open") {
    // Open In Revolicon Button

    setUIType("wide")
    for (const node of figma.currentPage.selection) {
      const nodeData = node.getPluginData("icon_slug")
      console.log(nodeData)
    }
  }
})

// Import Events
import "./events/parameters"

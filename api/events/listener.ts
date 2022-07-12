import Notify from "../methods/notify";

figma.ui.onmessage = (options: ListenerOptions) => {
  const { event } = options

  if (event === "notify") Notify(options)
}

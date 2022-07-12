import Notify from "../methods/notify"
import User from "../methods/user"

figma.ui.onmessage = (options: ListenerOptions) => {
  const { event } = options

  if (event === "notify") Notify(options)
  if (event === "user") User(options)
}

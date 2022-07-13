import Notify from "../methods/notify"
import User from "../methods/user"
import Settings from "../methods/settings"

figma.ui.onmessage = (options: ListenerOptions) => {
  const { event } = options

  if (event === "notify") Notify(options)
  if (event === "user") User(options)
  if (event === "settings") Settings(options)
}

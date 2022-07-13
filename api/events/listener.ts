import Settings from "../methods/settings"
import Notify from "../methods/notify"
import User from "../methods/user"

figma.ui.onmessage = (options: ListenerOptions) => {
  const { event } = options

  if (event.startsWith("settings")) Settings(options)
  if (event.startsWith("notify")) Notify(options)
  if (event.startsWith("user")) User(options)
}

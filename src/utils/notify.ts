import { postMessage } from "@/utils/message"

interface NotificationOptions {
  timeout?: number
  error?: boolean
}

const setNotify = (
  message: string,
  { error, timeout }: NotificationOptions = {}
) => {
  if (!message) return
  postMessage("notify", { message, error, timeout })
}
export default setNotify

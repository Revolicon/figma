import post from "@/utils/post"

interface NotificationOptions {
  timeout?: number
  error?: boolean
}

const setNotify = (
  message: string,
  { error, timeout }: NotificationOptions = {}
) => {
  if (!message) return
  post("notify", { message, error, timeout })
}
export default setNotify

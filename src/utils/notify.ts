interface NotificationOptions {
  timeout?: number
  error?: boolean
}

const notify = (message: string, { error = false, timeout = 4000 }: NotificationOptions = {}) => {
  if (!message) return;
  parent.postMessage({
    pluginMessage: {
      event: "notify",
      data: {
        message: message,
        error,
        timeout,
      }
    }
  }, '*')
}
export default notify

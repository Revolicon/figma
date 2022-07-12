interface NotificationOptions {
  timeout?: number
  error?: boolean
}

const notify = (message: string, { error, timeout }: NotificationOptions = {}) => {
  return alert(`[${error ? "Error" : "Alert"}] ${message}`)
}
export default notify

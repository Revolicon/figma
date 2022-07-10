interface NotificationOptions {
  timeout?: number
  error?: boolean
}

const Alert = (message: string, { error, timeout }: NotificationOptions) => {
  return alert(`[${error ? "Error" : "Alert"}] ${message}`)
}
export default Alert

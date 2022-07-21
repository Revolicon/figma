interface postMessageOptions {
  (event: string, callback?: Function): void
  (event: string, data?: Object, callback?: Function): void
}

export const postMessage: postMessageOptions = (
  event: string,
  data?: Object,
  callback?: Function
) => {
  if (!event) return

  parent.postMessage(
    {
      pluginMessage: {
        event,
        data: (typeof data !== "function" && data) || {},
      },
    },
    "*"
  )

  if (typeof data === "function") callback = data
  if (callback) getMessage(event, callback)
}
export const getMessage = (event: string, callback: Function) => {
  onmessage = (result) => {
    let { event: receivedEvent, data: receivedData } = result.data.pluginMessage
    if (event !== "*" && event === receivedEvent) callback(receivedData)
  }
}

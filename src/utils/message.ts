export const postMessage = (event: string, data?: any) => {
  if (!event) return
  parent.postMessage(
    {
      pluginMessage: {
        event,
        data,
      },
    },
    "*"
  )
}
export const getMessage = (event: string, callback: Function) => {
  onmessage = (result) => {
    let { event: receivedEvent, data: receivedData } = result.data.pluginMessage
    if (receivedEvent === event) callback(receivedData)
  }
}

interface postMessageOptions {
  (event: string, callback?: Function): void
  (event: string, data?: Object, callback?: Function): void
}

export const postMessage: postMessageOptions = (event: string, data?: Object, callback?: Function) => {
  if (!event) return

  parent.postMessage(
    {
      pluginMessage: {
        event,
        data: (typeof data !== 'function' && data) || {},
      },
    },
    '*'
  )

  if (typeof data === 'function') callback = data
  if (callback) getMessage(event, callback)
}
export const getMessage = (event: string, callback: Function) => {
  addEventListener('message', (result) => {
    let { event: receivedEvent, data: receivedData } = result.data.pluginMessage
    if (event === '*' || event === receivedEvent) callback(receivedData, receivedEvent, result)
  })
}
export const getRaw = (data: Object | Array<any>) => {
  return JSON.parse(JSON.stringify(data))
}

export const $post = postMessage
export const $listen = getMessage
export const $raw = getRaw

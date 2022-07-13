const post = (event: string, data?: any) => {
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
export default post

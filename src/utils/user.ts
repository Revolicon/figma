const getUser = (callback: Function) => {
  parent.postMessage({
    pluginMessage: {
      event: "user"
    }
  }, '*')

  onmessage = (result) => {
    let { event, data } = result.data.pluginMessage
    if (event === "user") callback(data)
  }
}
export default getUser

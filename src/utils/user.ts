import post from "@/utils/post"

const getUser = (callback: Function) => {
  post("user")

  onmessage = (result) => {
    let { event, data } = result.data.pluginMessage
    if (event === "user") callback(data)
  }
}
export default getUser

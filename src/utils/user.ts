import { getMessage, postMessage } from "@/utils/message"

const getUser = (callback: Function) => {
  postMessage("user")
  getMessage("user", callback)
}
export default getUser

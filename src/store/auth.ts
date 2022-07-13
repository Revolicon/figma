import { useState } from "react"

export const AuthStore = () => {
  const [isLogin, setIsLogin] = useState(true)
  return { isLogin, setIsLogin }
}

import { useState } from "react"

export const AuthStore = () => {
  const [isLogin, setIsLogin] = useState(false)
  return { isLogin, setIsLogin }
}

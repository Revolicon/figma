import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

import { useStore } from "@/store"

// Pages
import Welcome from "@/pages/Welcome"
import Settings from "@/pages/Settings"

// Auth
let isSingedIn = false

const Router = () => {
  let { auth } = useStore()

  return (
    <RouterProvider>
      {!auth.isLogin && (
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      )}
      {auth.isLogin && (
        <Routes>
          <Route path="/" element={<Settings />} />
        </Routes>
      )}
    </RouterProvider>
  )
}

export default Router

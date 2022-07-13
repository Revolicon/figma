import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

// Pages
import Welcome from "@/pages/Welcome"
import { useStore } from "@/store"

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
      {auth.isLogin && <div>a</div>}
    </RouterProvider>
  )
}

export default Router

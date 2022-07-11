import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

// Pages
import Welcome from "@/pages/Welcome"

// Auth
let isSingedIn = false

const Router = () => {
  return (
    <RouterProvider>
      {!isSingedIn && (
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      )}
      {isSingedIn && <Routes></Routes>}
    </RouterProvider>
  )
}

export default Router

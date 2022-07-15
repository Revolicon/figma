import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

import { useStore } from "@/store"

// Pages
import Welcome from "@/pages/Welcome"
import Settings from "@/pages/Settings"
import Loading from "@/pages/Loading"

// Auth
const Router = () => {
  let { settings } = useStore()

  if (!settings.isLoading) return <Loading />

  return (
    <RouterProvider>
      {!settings.betaKey && (
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      )}
      {settings.betaKey && (
        <Routes>
          <Route path="/" element={<Settings />} />
        </Routes>
      )}
    </RouterProvider>
  )
}

export default Router

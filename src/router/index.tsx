import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

import { useStore } from "@/store"

// Pages
import Loading from "@/pages/Loading"

import Welcome from "@/pages/Welcome"

import Test from "@/pages/Test"
import Settings from "@/pages/Settings"

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
          <Route path="/" element={<Test />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      )}
    </RouterProvider>
  )
}

export default Router

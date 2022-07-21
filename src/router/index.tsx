import { MemoryRouter as RouterProvider, Routes, Route } from "react-router-dom"

import { useStore } from "@/store"
import { postMessage } from "@/utils/message"

// Pages
import Loading from "@/pages/Loading"

import Welcome from "@/pages/Welcome"

import Finder from "@/pages/Finder"
import Settings from "@/pages/Settings"
import Test from "@/pages/Test"

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
          <Route path="/" element={<Finder />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      )}
    </RouterProvider>
  )
}

export default Router

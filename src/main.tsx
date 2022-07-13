import React from "react"
import ReactDOM from "react-dom/client"

import Router from "@/router"
import { StoreProvider } from "@/store"

import "@/styles/main.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>
)

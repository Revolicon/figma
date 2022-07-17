import React from "react"
import ReactDOM from "react-dom/client"

import Router from "@/router"
import { StoreProvider } from "@/store"

import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"

import "@/styles/main.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <SimpleBar>
        <Router />
      </SimpleBar>
    </StoreProvider>
  </React.StrictMode>
)

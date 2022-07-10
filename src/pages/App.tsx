import React, { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: 12,
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <Link
          to="/"
          style={{
            color: "var(--figma-color-text)",
          }}
        >
          Icons
        </Link>
        <Link to="/categories">Categories</Link>
        <Link to="/settings" style={{ marginLeft: "auto" }}>
          Settings
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

import React from "react"
import { useNavigate } from "react-router-dom"

export default function Settings() {
  let navigate = useNavigate()

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
        <button style={{ border: 0, padding: 0 }} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div>Settings Page</div>
    </>
  )
}

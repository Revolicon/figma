import React from "react"

interface Props {
  children: React.ReactNode
}

const Tabs: React.FC<Props> = ({ children }) => {
  return <div className="tabs">{children}</div>
}

export default Tabs

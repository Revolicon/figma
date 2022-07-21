import React from "react"

interface Props {
  children?: React.ReactNode
}

export const Accessory: React.FC<Props> = ({ children }) => {
  return <div className="navigations-accessory">{children}</div>
}

const Navigations: React.FC<Props> = ({ children }) => {
  return <div className="navigations">{children}</div>
}

export default Navigations

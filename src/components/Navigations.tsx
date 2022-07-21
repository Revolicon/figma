import React from "react"

interface Props {
  children?: React.ReactNode
}

const Navigations: React.FC<Props> = ({ children }) => {
  return <div className="navigations">{children}</div>
}

export default Navigations

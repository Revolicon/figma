import React from "react"
import classNames from "classnames"

import Icons from "@/components/Icons"

interface Props {
  [key: string]: any
  icon: string
  className?: string
}

const Icon: React.FC<Props> = ({ icon, className, ...rest }) => {
  return (
    <button {...rest} className={classNames("button-icon", className)}>
      <Icons name={icon} size={16} />
    </button>
  )
}

export default Icon

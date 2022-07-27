import React from "react"
import classNames from "classnames"

import Icons from "@/components/Icons"

interface Props {
  [key: string]: any
  icon: string
  className?: string
  href?: string
}

const Icon: React.FC<Props> = ({ href, icon, className, ...rest }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        {...rest}
        className={classNames("button-icon", className)}
      >
        <Icons name={icon} size={16} />
      </a>
    )
  }
  return (
    <button {...rest} className={classNames("button-icon", className)}>
      <Icons name={icon} size={16} />
    </button>
  )
}

export default Icon

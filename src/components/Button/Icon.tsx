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
  const ButtonTag = href ? "a" : "button"

  return (
    <ButtonTag
      href={href}
      target={href && "_blank"}
      {...rest}
      className={classNames("button-icon", className)}
    >
      <Icons name={icon} size={16} />
    </ButtonTag>
  )
}

export default Icon

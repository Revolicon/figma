import React, { RefObject } from "react"
import classNames from "classnames"

interface Props {
  [key: string]: any
  children: React.ReactNode
  active?: Boolean
  innerRef?: RefObject<any>
  className?: string
}

const Tab: React.FC<Props> = (props) => {
  const { active = false, children, className, innerRef } = props
  return (
    <button
      {...props}
      ref={innerRef}
      className={classNames(
        "tab",
        {
          "tab--active": active,
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Tab

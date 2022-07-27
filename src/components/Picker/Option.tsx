import React from "react"
import classNames from "classnames"

interface Props {
  [key: string]: any
  type: string
  isActive?: boolean
  children?: React.ReactNode
}

const Option: React.FC<Props> = ({ children, isActive, type, ...rest }) => {
  return (
    <button
      className={classNames(
        "picker-option",
        {
          "picker-option--active": isActive,
        },
        [`picker-option--type-${type}`]
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Option

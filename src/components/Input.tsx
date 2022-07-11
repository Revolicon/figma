import React, { RefObject } from "react"
import classNames from "classnames"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any
  innerRef?: RefObject<any>
  className?: string
  center?: boolean
  full?: boolean
}

const Input: React.FC<Props> = (props) => {
  const { innerRef, className, center, full } = props

  return (
    <input
      {...props}
      ref={innerRef}
      className={classNames(
        "input",
        {
          "input--center": center,
          "input--full": full,
        },
        className
      )}
    />
  )
}

export default Input

import React, { RefObject } from "react"
import classNames from "classnames"

type InputSize = "small" | "default"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any
  innerRef?: RefObject<any>
  className?: string
  center?: boolean
  full?: boolean
  size?: any | InputSize
}

const Input: React.FC<Props> = (props) => {
  const { innerRef, className, center, full, size = "default" } = props

  return (
    <input
      {...props}
      ref={innerRef}
      className={classNames(
        "input",
        [`input--size-${size}`],
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

import React, { RefObject } from "react"
import classNames from "classnames"

type Variant = "small" | "default"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any
  innerRef?: RefObject<any>
  className?: string
  center?: boolean
  full?: boolean
  variant?: Variant
}

const Input: React.FC<Props> = (props) => {
  const { innerRef, className, center, full, variant = "default" } = props

  return (
    <input
      {...props}
      ref={innerRef}
      className={classNames(
        "input",
        [`input--size-${variant}`],
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

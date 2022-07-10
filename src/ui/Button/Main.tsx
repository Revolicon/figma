import React from "react"
import classNames from "classnames"

type Type = "solid" | "outline"

type Variant = "primary" | "secondary" | "destructive"

interface Props {
  children: React.ReactNode | string
  type?: Type
  variant?: Variant
  disabled?: boolean
  full?: boolean
  className?: string
  onClick?: (e: React.MouseEvent) => void
  loading?: boolean
}

const Main: React.FC<Props> = ({
  children,
  type = "solid",
  variant = "primary",
  disabled,
  full,
  className,
  loading,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button",
        `button--${type}`,
        `button--${variant}`,
        {
          "button--disabled": disabled,
          "button--full": full,
          "button--loading": loading,
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Main

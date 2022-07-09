import React from "react";
import classNames from "classnames"

type ButtonType =
  | "solid"
  | "outline"

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"

interface ButtonProps {
  children: React.ReactNode | string
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
  full?: boolean
  className?: string
}

const Main = ({
  children,
  type = "solid",
  variant = "primary",
  disabled,
  full,
  className
}: ButtonProps) => {
  return (
    <button className={classNames(
      "button",
      `button--${type}`,
      `button--${variant}`,
      {
        "button--disabled": disabled,
        "button--full": full
      },
      className
    )}>
      {children}
    </button>
  )
}

export default Main;

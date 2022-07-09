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
  className?: string
}

const Main = ({
  children,
  type = "solid",
  variant = "primary",
  disabled,
  className
}: ButtonProps) => {
  return (
    <button className={classNames(
      "button",
      `button--${type}`,
      `button--${variant}`,
      { "button--disabled": disabled },
      className
    )}>
      {children}
    </button>
  )
}

export default Main;

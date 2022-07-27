import React from "react"
import classNames from "classnames"

type Type = "solid" | "outline"

type Variant = "primary" | "secondary" | "destructive"

interface Props {
  [key: string]: any
  children: React.ReactNode | string
  type?: Type
  variant?: Variant
  disabled?: boolean
  full?: boolean
  className?: string
  loading?: boolean
  href?: string
}

const Main: React.FC<Props> = ({
  children,
  type = "solid",
  variant = "primary",
  disabled,
  full,
  className,
  loading,
  href,
  ...rest
}) => {
  const ButtonTag = href ? "a" : "button"

  return (
    <ButtonTag
      {...rest}
      href={href}
      target={href && "_blank"}
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
    </ButtonTag>
  )
}

export default Main

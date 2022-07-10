import React, {InputHTMLAttributes, HTMLInputTypeAttribute} from "react";
import classNames from "classnames"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  center?: boolean
  full?: boolean
}

const Input: React.FC<Props> = (props) => {
  const {
    className,
    center,
    full,
  } = props;

  return (
    <input
      {...props}
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

export default Input;

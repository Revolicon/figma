import React from "react";
import classNames from "classnames"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any
  className?: string
  center?: boolean
  full?: boolean
}

const Input = (props, ref) => {
  const {
    className,
    center,
    full,
  } = props;

  return (
    <input
      {...props}
      ref={ref}
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
};

export default React.forwardRef<HTMLInputElement, Props>(Input);

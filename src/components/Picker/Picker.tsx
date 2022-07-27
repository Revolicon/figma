import React, { useState } from "react"
import Option from "./Option"
import classNames from "classnames"

type PickerType = "icon" | "text"

interface Props {
  children: React.ReactNode
  type: PickerType
}

interface SubComponent {
  Option: React.FC<any>
}

const Picker: React.FC<Props> & SubComponent = ({ type, children }) => {
  const [active, setActive] = useState(0)
  let childrenList: Array<any> = []

  React.Children.map(children, (child: any) => {
    child.props = {
      ...child.props,
      type,
      isActive: active === child.props.value,
      onClick: () => setActive(child.props.value),
    }

    childrenList.push(child)
  })

  return (
    <div className={classNames("picker", [`picker--type-${type}`])}>
      <div className={classNames("picker__effect")}></div>
      <div className="picker__options">{childrenList}</div>
    </div>
  )
}

Picker.Option = Option

export default Picker

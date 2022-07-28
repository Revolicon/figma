import React, { Children, useEffect, useRef, useState } from "react"
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
  const [active, setActive] = useState(null)
  const [activeIndex, setActiveIndex] = useState(1)

  const [effectStyle, setEffectStyle]: any = useState([])

  const pickerRef: any = useRef(null)
  const optionRef: any = useRef([])

  let childrenList: Array<any> = []

  useEffect(() => {
    let pickerChildren = pickerRef.current.children
    for (let i = 0; i < pickerChildren.length; i++) {
      optionRef.current[i] = pickerChildren[i]
    }
  }, [])

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = optionRef.current[activeIndex]
      setEffectStyle([currentTab?.offsetLeft, currentTab?.clientWidth])
    }

    setTabPosition()
  }, [activeIndex])

  Children.map(children, (child: any, index: number) => {
    child.props = {
      ...child.props,
      type,
      isActive: activeIndex === index,
      onClick: () => {
        setActive(child.props.value)
        setActiveIndex(index)
      },
    }

    childrenList.push(child)
  })

  return (
    <div className={classNames("picker", [`picker--type-${type}`])}>
      <div
        className={classNames("picker__effect")}
        style={{
          left: effectStyle[0] && effectStyle[0],
          width: effectStyle[1] && effectStyle[1],
        }}
      />
      <div className="picker__options" ref={pickerRef}>
        {childrenList}
      </div>
    </div>
  )
}

Picker.Option = Option

export default Picker

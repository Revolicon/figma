import React, { useState } from "react"

import styles from "./styles.module.scss"

import Section from "@/pages/Settings/Section"

const Input: React.FC = () => {
  const [color, setColor] = useState("000000")
  const [opacity, setOpacity] = useState(100)

  const [colorInput, setColorInput] = useState("#000000")
  const [opacityInput, setOpacityInput] = useState("100%")

  const colorHandler = (inputColor: string) => {
    let colorInput = inputColor.replace("#", "")
    let colorRegex = /^([A-Fa-f\d]{1,6})$/i
    let colorTest = colorRegex.test(colorInput)
    let colorExec = colorRegex.exec(colorInput)

    let colorValue = colorTest
      ? colorExec?.[0].padEnd(6, colorExec?.[0])
      : color

    setColor(colorValue ?? color)
    setColorInput(`#${colorValue ?? color}`.toUpperCase())
  }
  const opacityHandler = (inputOpacity: string) => {
    let opacityValue = parseInt(inputOpacity.replace(/^\D*$/, ""))
    if (isNaN(opacityValue)) opacityValue = opacity
    if (opacityValue > 100) opacityValue = 100
    if (opacityValue < 0) opacityValue = 0

    setOpacity(opacityValue ?? opacity)
    setOpacityInput(`${opacityValue ?? opacity}%`)
  }

  return (
    <div className={styles.input}>
      <input
        type="tel"
        value={colorInput}
        onFocus={(e) => e.target.select()}
        onBlur={(e) => colorHandler(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
        onChange={(e) => setColorInput(e.target.value)}
        style={{ flex: 1 }}
      />
      <input
        type="tel"
        value={opacityInput}
        onFocus={(e) => e.target.select()}
        onBlur={(e) => opacityHandler(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
        onChange={(e) => setOpacityInput(e.target.value)}
        style={{ width: 40, flex: "none" }}
      />
    </div>
  )
}

const Color: React.FC = () => {
  return (
    <Section title="Color" icon="color" actions={<Input />}>
      d
    </Section>
  )
}

export default Color

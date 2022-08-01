import React from "react"
import classNames from "classnames"

import styles from "./styles.module.scss"

// Icons
import DarkSize from "@/images/settings/sections/dark/size.svg?raw"
import DarkAppearance from "@/images/settings/sections/dark/appearance.svg?raw"
import DarkColor from "@/images/settings/sections/dark/color.svg?raw"
import DarkFinder from "@/images/settings/sections/dark/finder.svg?raw"
import DarkFrame from "@/images/settings/sections/dark/frame.svg?raw"
import DarkQuickActions from "@/images/settings/sections/dark/quickactions.svg?raw"

import LightSize from "@/images/settings/sections/light/size.svg?raw"
import LightAppearance from "@/images/settings/sections/light/appearance.svg?raw"
import LightColor from "@/images/settings/sections/light/color.svg?raw"
import LightFinder from "@/images/settings/sections/light/finder.svg?raw"
import LightFrame from "@/images/settings/sections/light/frame.svg?raw"
import LightQuickActions from "@/images/settings/sections/light/quickactions.svg?raw"

interface Props {
  [key: string]: any
  children?: React.ReactNode
  icon: string
  title: string
  actions?: React.ReactNode
}

const icons: { [key: string]: any } = {
  dark: {
    size: DarkSize,
    appearance: DarkAppearance,
    color: DarkColor,
    finder: DarkFinder,
    frame: DarkFrame,
    quickactions: DarkQuickActions,
  },
  light: {
    size: LightSize,
    appearance: LightAppearance,
    color: LightColor,
    finder: LightFinder,
    frame: LightFrame,
    quickactions: LightQuickActions,
  },
}

const Section: React.FC<Props> = ({ title, icon, children, actions }) => {
  return (
    <div
      className={classNames(styles.section, {
        [styles["section--actions"]]: actions,
      })}
    >
      <div className={classNames(styles.section__header)}>
        <div
          className={classNames(styles["section__header-icon"])}
          dangerouslySetInnerHTML={{ __html: icons["dark"][icon] }}
        />
        <div className={classNames(styles["section__header-title"])}>
          {title}
        </div>
        {actions && (
          <div className={classNames(styles["section__header-actions"])}>
            {actions}
          </div>
        )}
      </div>
      <div className={classNames(styles.section__content)}>{children}</div>
    </div>
  )
}

export default Section

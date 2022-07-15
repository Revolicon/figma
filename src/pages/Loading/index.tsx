import React from "react"
import styles from "./styles.module.scss"

import { Loading as LoadingIcon } from "@/components/Icons"

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <LoadingIcon />
    </div>
  )
}

export default Loading

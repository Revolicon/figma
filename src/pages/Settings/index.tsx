import React from "react"

import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"

import { IconButton } from "@/components/Button"

import Navigations from "@/components/Navigations"

const Settings: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.settings}>
      <Navigations>
        <IconButton icon="back" onClick={() => navigate(-1)} />
      </Navigations>
    </div>
  )
}

export default Settings

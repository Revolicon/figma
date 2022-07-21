import React from "react"

import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"

import Button, { IconButton } from "@/components/Button"

import Navigations from "@/components/Navigations"
import { postMessage } from "@/utils/message"

const Settings: React.FC = () => {
  const navigate = useNavigate()
  const logout = () => {
    postMessage("settings/removeData", "betaKey")
    navigate("/", { replace: true })
  }

  return (
    <div className={styles.settings}>
      <Navigations>
        <IconButton icon="back" onClick={() => navigate(-1)} />
        <IconButton icon="help" />
      </Navigations>

      <div className={styles.settings__content}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button full={true} variant="destructive" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Settings

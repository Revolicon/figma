import React from "react"
import SimpleBar from "simplebar-react"

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
        <IconButton icon="back" onClick={() => navigate("/")} />
        <div>Settings</div>
        <IconButton icon="help" />
      </Navigations>
      <SimpleBar className={styles.settings__content}>
        <Button full={true} variant="primary" onClick={() => navigate("/test")}>
          Test Page
        </Button>
        <br />
        <br />
        <Button full={true} variant="destructive" onClick={() => logout()}>
          Logout
        </Button>
      </SimpleBar>
    </div>
  )
}

export default Settings

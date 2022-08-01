import React from "react"
import SimpleBar from "simplebar-react"

import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"

import Button, { IconButton } from "@/components/Button"
import Navigations, { Accessory } from "@/components/Navigations"

import { postMessage } from "@/utils/message"

import Section from "@/pages/Settings/Section"
import Color from "@/pages/Settings/Color"

const Settings: React.FC = () => {
  const navigate = useNavigate()
  const logout = () => {
    postMessage("settings/removeData", "betaKey")
    navigate("/", { replace: true })
  }

  return (
    <div className={styles.settings}>
      <Navigations>
        <Accessory>
          <IconButton icon="back" onClick={() => navigate("/")} />
          <div>Settings</div>
        </Accessory>
        <IconButton icon="help" href="https://revolicon.com/help" />
      </Navigations>
      <SimpleBar className={styles.settings__content}>
        <Section title="Size" icon="size">
          d
        </Section>
        <Section title="Frame" icon="frame">
          d
        </Section>
        <Color />
        <Section title="Finder" icon="finder">
          d
        </Section>
        <Section title="Quick actions" icon="quickactions">
          d
        </Section>
        <Section title="Appearance" icon="appearance">
          d
        </Section>
        <Section title="Other" icon="">
          <Button
            full={true}
            variant="primary"
            onClick={() => navigate("/test")}
          >
            Test Page
          </Button>
          <Button full={true} variant="destructive" onClick={() => logout()}>
            Logout
          </Button>
        </Section>
      </SimpleBar>
    </div>
  )
}

export default Settings

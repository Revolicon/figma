import React from "react"

import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"

import { Tab, Tabs } from "@/components/Tabs"
import { IconButton } from "@/components/Button"

import Navigations from "@/components/Navigations"

const Finder: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.finder}>
      <Navigations>
        <Tabs>
          <Tab active={true}>Icons</Tab>
          <Tab>Categories</Tab>
        </Tabs>
        <IconButton icon="adjust" onClick={() => navigate("/settings")} />
      </Navigations>
    </div>
  )
}

export default Finder

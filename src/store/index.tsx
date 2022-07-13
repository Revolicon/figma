import React, { createContext, useContext, useState } from "react"

import { AuthStore } from "@/store/auth"
import { SettingsStore } from "@/store/settings"

interface Props {
  children: React.ReactNode
}

export const StoreData = () => {
  return {
    auth: AuthStore(),
    settings: SettingsStore(),
  }
}

export const Store = createContext<any>({})

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Store.Provider value={StoreData()}>{children}</Store.Provider>
}

export const useStore = () => useContext(Store)

import React, { createContext, useContext } from "react"

import { SettingsStore } from "@/store/settings"

interface Props {
  children: React.ReactNode
}

export const StoreData = () => {
  return {
    settings: SettingsStore(),
  }
}

export const Store = createContext<any>({})

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Store.Provider value={StoreData()}>{children}</Store.Provider>
}

export const useStore = () => useContext(Store)

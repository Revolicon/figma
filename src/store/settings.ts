import { useEffect, useState } from "react"
import { postMessage } from "@/utils/message"

interface SettingsItem {
  [key: string]: any
}

export const SettingsStore = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [settingsList, setSettingsList] = useState({})

  useEffect(() => {
    postMessage("settings/getMultipleData", (data: any) => {
      if (!data) return
      setSettingsList(data)
      setIsLoading(true)
    })
  }, [])

  const setSettings = (data: any) => {
    let list: any = []

    Object.keys(data).map((key) => {
      list.push({
        key,
        value: data[key],
      })
    })

    postMessage("settings/setMultipleData", list)
    setSettingsList(data)
  }

  return {
    isLoading,
    ...settingsList,
    setSettings,
    setIsLoading,
  }
}

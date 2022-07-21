import { useEffect, useState } from "react"
import { postMessage } from "@/utils/message"

export const SettingsStore = () => {
  const [isSync, setIsSync] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [settingsList, setSettingsList] = useState({})

  const syncSettings = () => {
    postMessage("settings/getMultipleData", (data: any) => {
      if (!data) return
      setSettingsList(data)
      if (!isLoading) setIsLoading(true)
    })
  }

  const setSettings = (data: any) => {
    let list: any = []

    Object.keys(data).map((key) => {
      list.push({
        key,
        value: data[key],
      })
    })

    postMessage("settings/setMultipleData", list)
    setSettingsList({ ...settingsList, data })
  }

  useEffect(() => {
    syncSettings()
    setIsSync(true)
  }, [isSync])

  window.addEventListener("message", (event) => {
    if (event.data.pluginMessage.event === "settings/getMultipleData") return
    setIsSync(false)
  })

  return {
    isLoading,
    isSync,
    ...settingsList,

    syncSettings,
    setSettings,
    setIsLoading,
    setIsSync,
  }
}

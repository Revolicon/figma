interface Settings {
  [key: string]: SettingsItem | string
}
interface SettingsItem {
  key: string
  value: SettingsValue | string
}
interface SettingsValue {
  data: string
  type?: string
}

const setMultipleData = (settings: Settings) => {
  Object.keys(settings).map((key) => {
    figma.root.setPluginData(key, settings[key].toString())
  })
}
const getMultipleData = () => {
  let dataKeyList = figma.root.getPluginDataKeys()

  let dataValueList = {}
  dataKeyList.map((key) => {
    ;(dataValueList as any)[key] = figma.root.getPluginData(key)
  })

  figma.ui.postMessage({
    event: "settings/getMultipleData",
    data: dataValueList,
  })

  return dataValueList
}

const setData = ({ key, value }: SettingsItem) => {
  if (!key) return
  let optionsValue = value.toString()
  if (typeof value === "object") optionsValue = JSON.stringify(value)

  figma.root.setPluginData(
    key,
    JSON.stringify({
      data: optionsValue,
      type: typeof value,
    })
  )
}
const getData = (key: any) => {
  let data = figma.root.getPluginData(key)
  if (!data) return

  try {
    let dataObject = JSON.parse(data)
    let dataValue = dataObject.data

    switch (dataObject.type) {
      case "object":
        dataValue = JSON.parse(dataValue)
        break
      case "boolean":
        dataValue = dataValue === "true"
        break
      case "number":
        dataValue = Number(dataValue)
        break
    }

    figma.ui.postMessage({
      event: "settings/getData",
      data: dataValue ?? null,
    })

    return dataValue
  } catch (err) {
    figma.ui.postMessage({
      event: "settings/getData",
      data: data ?? null,
    })

    return data
  }
}
const removeData = (key: any) => {
  if (!key) return
  figma.root.setPluginData(key, "")
}

const Settings = ({ event, data }: ListenerOptions) => {
  let runnerName = event.split("/")[1]
  let runnerList: any = {
    setData,
    getData,
    removeData,
    setMultipleData,
    getMultipleData,
  }

  ;(runnerList[runnerName] as any)(data)
}

export default Settings

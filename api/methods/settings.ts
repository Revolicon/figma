interface SettingsItem {
  key: string
  value: SettingsValue | any
}
interface SettingsValue {
  data: string
  type?: string
}

const callback = (event: string, data: any) => {
  figma.ui.postMessage({
    event,
    data: data ?? null,
  })
}

const setMultipleData = (settings: Array<SettingsItem>) => {
  settings.map((value) => {
    setData(value)
  })

  callback("settings/setMultipleData", true)
}
const getMultipleData = () => {
  let dataKeyList = figma.root.getPluginDataKeys()

  let dataValueList = {}
  dataKeyList.map((key) => {
    ;(dataValueList as any)[key] = getItem(key)
  })

  callback("settings/getMultipleData", dataValueList)

  return dataValueList
}
const removeMultipleData = (keys: Array<string>) => {
  if (!keys) return
  keys.map((key) => removeData(key))

  callback("settings/removeMultipleData", true)
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

  callback("settings/setData", true)
}
const getData = (key: any) => {
  if (!key) return
  let data = getItem(key)

  callback("settings/getData", data)
}
const removeData = (key: any) => {
  if (!key) return
  figma.root.setPluginData(key, "")

  callback("settings/removeData", true)
}

const getItem = (key: any) => {
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

    return dataValue ?? dataObject
  } catch (error) {
    return data
  }
}

const removeAllData = () => {
  let dataKeyList = figma.root.getPluginDataKeys()
  dataKeyList.map((key) => {
    removeData(key)
  })

  callback("settings/removeAllData", true)
}

const Settings = ({ event, data }: ListenerOptions) => {
  let runnerName = event.split("/")[1]
  let runnerList: any = {
    getItem,
    setData,
    getData,
    removeData,
    setMultipleData,
    getMultipleData,
    removeMultipleData,
    removeAllData,
  }

  ;(runnerList[runnerName] as any)(data)
}

export default Settings

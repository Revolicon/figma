interface Settings {
  [key: string]: SettingsOptions | string
}
interface SettingsOptions {
  value: string
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
// const setData = ({}: SettingsOptions) => {}
// const getData = (slug: string) => {}

const Settings = ({ event, data }: ListenerOptions) => {
  let runnerName = event.split("/")[1]
  let runnerList: any = {
    setMultipleData,
    getMultipleData,
  }

  ;(runnerList[runnerName] as any)({ ...data })
}

export default Settings

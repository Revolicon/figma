interface SettingsItem {
  key: string
  value: SettingsValue | any
  isCallback?: boolean
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

/**
 * Set Mutliple Data
 *
 * ```js
 * $post('settings/setMultipleData', [
 *   { key: 'key1', value: 'value1' },
 *   { key: 'key2', value: 'value2' },
 * ])
 * ```
 * */
const setMultipleData = (settings: Array<SettingsItem>) => {
  settings.map((value) => {
    value.isCallback = false
    setData(value)
  })

  callback('settings/setMultipleData', true)
}
const getMultipleData = async () => {
  const dataKeyList = await figma.clientStorage.keysAsync()
  let dataValueList = {}
  await Promise.all(
    dataKeyList.map(async (key) => {
      dataValueList[key] = await getItem(key)
    })
  )

  callback('settings/getMultipleData', dataValueList)
}
const removeMultipleData = (keys: Array<string>) => {
  if (!keys) return
  keys.map((key) => removeData(key))

  callback('settings/removeMultipleData', true)
}

const setData = async ({ key, value, isCallback = true }: SettingsItem) => {
  if (!key) return
  let optionsValue = value.toString()
  if (typeof value === 'object') optionsValue = JSON.stringify(value)

  await figma.clientStorage.setAsync(
    key,
    JSON.stringify({
      data: optionsValue,
      type: typeof value,
    })
  )

  isCallback && callback('settings/setData', true)
}
const getData = async (key: any) => {
  if (!key) return
  let data = await getItem(key)

  callback('settings/getData', data)
}
const removeData = async (key: any) => {
  if (!key) return
  await figma.clientStorage.deleteAsync(key)

  callback('settings/removeData', true)
}

const getItem = (key: any) => {
  return Promise.resolve(figma.clientStorage.getAsync(key)).then((data) => {
    if (!data) return

    try {
      let dataObject = JSON.parse(data)
      let dataValue = dataObject.data

      switch (dataObject.type) {
        case 'object':
          dataValue = JSON.parse(dataValue)
          break
        case 'boolean':
          dataValue = dataValue === 'true'
          break
        case 'number':
          dataValue = Number(dataValue)
          break
      }

      return dataValue ?? dataObject
    } catch (error) {
      return data
    }
  })
}

const removeAllData = async () => {
  let dataKeyList = await figma.clientStorage.keysAsync()
  dataKeyList.map((key) => {
    removeData(key)
  })

  callback('settings/removeAllData', true)
}

const Settings = ({ event, data }: ListenerOptions) => {
  let runnerName = event.split('/')[1]
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

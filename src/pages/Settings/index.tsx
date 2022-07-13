import React, { useMemo, useState } from "react"
import { getMessage, postMessage } from "@/utils/message"

import Button from "@/components/Button"

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState()

  const setTestDataFunction = () => {
    postMessage("settings/setData", {
      key: "setTestDataFunction",
      value: "TEST!",
    })
    postMessage("settings/getMultipleData", (data: any) => {
      console.log(data)
    })
  }

  // useMemo(() => {
  //   postMessage("settings/getMultipleData")
  //   getMessage("settings/getMultipleData", (data: any) => {
  //     setState(data)
  //     setLoading(false)
  //   })
  // }, [])
  //
  // if (loading) {
  //   return <div>loading</div>
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 20,
      }}
    >
      <Button full={true} onClick={() => setTestDataFunction()}>
        Set Test Data
      </Button>
    </div>
  )
}

export default Settings

import React, { useEffect, useMemo, useState } from "react"
import { postMessage } from "@/utils/message"

import Button from "@/components/Button"

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState()

  const setTestDataFunction = () => {
    postMessage("settings/setData", {
      key: "testDataFunction",
      value: "TEST!",
    })
  }
  const getTestDataFunction = () => {
    postMessage("settings/getData", "testDataFunction", (data: any) => {
      console.log(data)
    })
  }
  const removeTestDataFunction = () => {
    postMessage("settings/removeData", "testDataFunction")
  }

  const getMultipleDataFunction = () => {
    postMessage("settings/getMultipleData", (data: any) => {
      console.log(data)
    })
  }

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
      <Button full={true} onClick={() => getTestDataFunction()}>
        Get Test Data
      </Button>
      <Button full={true} onClick={() => removeTestDataFunction()}>
        Remove Test Data
      </Button>
      <hr />
      <Button full={true} onClick={() => getMultipleDataFunction()}>
        Get Multiple Data
      </Button>
    </div>
  )
}

export default Settings

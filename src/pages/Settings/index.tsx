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
  const setMultipleDataFunction = () => {
    postMessage("settings/setMultipleData", [
      { key: "setMultipleDataTest1", value: "TEST-1-!" },
      { key: "setMultipleDataTest2", value: "TEST-2-!" },
      { key: "setMultipleDataTest3", value: [1, 2, 3, 4, 5] },
      { key: "setMultipleDataTest4", value: true },
      { key: "setMultipleDataTest5", value: false },
      { key: "setMultipleDataTest6", value: 23462364 },
      { key: "setMultipleDataTest7", value: 1.4151 },
      { key: "setMultipleDataTest8", value: { test: "a", test2: 2 } },
    ])
  }
  const removeMultipleDataFunction = () => {
    postMessage("settings/removeMultipleData", [
      "setMultipleDataTest1",
      "setMultipleDataTest2",
      "setMultipleDataTest3",
      "setMultipleDataTest4",
      "setMultipleDataTest5",
      "setMultipleDataTest6",
      "setMultipleDataTest7",
      "setMultipleDataTest8",
    ])
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 12,
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

      <hr style={{ margin: "10px 0" }} />

      <Button full={true} onClick={() => setMultipleDataFunction()}>
        Set Multiple Data
      </Button>
      <Button full={true} onClick={() => getMultipleDataFunction()}>
        Get Multiple Data
      </Button>
      <Button full={true} onClick={() => removeMultipleDataFunction()}>
        Remove Multiple Data
      </Button>

      <hr style={{ margin: "10px 0" }} />

      <Button full={true} onClick={() => postMessage("settings/removeAllData")}>
        Remove All Data
      </Button>
    </div>
  )
}

export default Settings

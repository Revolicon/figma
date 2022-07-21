import React, { useState } from "react"

import { postMessage } from "@/utils/message"

import { Tabs, Tab } from "@/components/Tabs"
import Icons from "@/components/Icons"
import Button, { IconButton } from "@/components/Button"
import Navigations from "@/components/Navigations"

const Database: React.FC = () => {
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
    <>
      <h2>Database</h2>

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
    </>
  )
}
const IconList: React.FC = () => {
  return (
    <>
      <h2>Icon List</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Icons name="loading" size={16} />
        <Icons name="search" size={16} />
        <Icons name="adjust" size={16} />
        <Icons name="back" size={16} />
        <Icons name="help" size={16} />
      </div>
    </>
  )
}
const TabList: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <h2>Tab List</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Tabs>
          {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
            <Tab
              onClick={() => setActiveTab(index)}
              active={index === activeTab}
            >
              {tab}
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  )
}
const NavigationsTest: React.FC = () => {
  return (
    <>
      <h2>Navigations Test</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Navigations>
          <Tabs>
            <Tab active={true}>Icons</Tab>
            <Tab>Categories</Tab>
          </Tabs>
          <IconButton icon="adjust" />
        </Navigations>
      </div>
    </>
  )
}

const Test: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 12,
      }}
    >
      <NavigationsTest />
      <br />
      <TabList />
      <br />
      <Database />
      <br />
      <IconList />
    </div>
  )
}

export default Test

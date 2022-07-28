import React, { useState } from "react"

import { postMessage } from "@/utils/message"

import { Tabs, Tab } from "@/components/Tabs"
import Icons from "@/components/Icons"
import Button, { IconButton } from "@/components/Button"
import Navigations from "@/components/Navigations"
import Picker from "@/components/Picker"

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
const PickerTest: React.FC = () => {
  return (
    <>
      <Picker type="icon" onChange={(e) => console.log(e)}>
        <Picker.Option value="line">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M7.08865 0.525472C7.45418 0.152109 8.00879 -0.0465947 8.52811 0.00931701C8.89492 0.0488087 9.18151 0.213919 9.42246 0.402442C9.63951 0.572268 9.87265 0.805175 10.1229 1.05517L13.7233 4.65103C14.0032 4.93058 14.2447 5.17179 14.4274 5.38665C14.6201 5.61343 14.7911 5.85983 14.8897 6.16286C15.0368 6.61495 15.0368 7.10198 14.8897 7.55407C14.7911 7.85711 14.6201 8.10351 14.4274 8.33028C14.2447 8.54515 14.0032 8.78632 13.7233 9.06589L10.9053 11.8819C11.0809 12.3896 11.0123 12.9609 10.6996 13.419C10.6069 13.5549 10.4814 13.68 10.3623 13.7987L10.3306 13.8304L10.2989 13.8622C10.1802 13.9813 10.055 14.1068 9.91925 14.1995C9.34772 14.5896 8.60022 14.5998 8.0195 14.2301C8.00391 14.2201 7.98844 14.2099 7.9731 14.1995C7.83731 14.1068 7.71218 13.9813 7.59346 13.8622L7.56591 13.8346L6.89912 13.1885L5.87447 14.8537C5.43613 15.5661 4.6596 16 3.8232 16C2.26399 16 1 14.7359 1 13.1766C1 12.3402 1.43391 11.5636 2.14624 11.1252L3.81128 10.1005L3.16528 9.43367L3.13767 9.40613C3.01859 9.28739 2.89308 9.16223 2.8004 9.02643C2.78994 9.0111 2.77975 8.99564 2.76984 8.98007C2.53832 8.61638 2.4558 8.18729 2.52224 7.77697C2.55393 7.58127 2.61951 7.38984 2.71898 7.21181C2.74399 7.16705 2.77114 7.12313 2.80043 7.0802C2.89311 6.94441 3.0186 6.81928 3.13767 6.70055L3.16943 6.66885L3.20109 6.63713C3.31986 6.518 3.44497 6.39252 3.58076 6.29983C3.62366 6.27054 3.66756 6.2434 3.7123 6.21839C3.89033 6.1189 4.08177 6.05331 4.27747 6.02161C4.46046 5.99197 4.64718 5.99197 4.83017 6.02161C4.85432 6.02552 4.87841 6.02995 4.90242 6.03489C4.97524 5.9474 5.07256 5.81636 5.18951 5.63444C5.37939 5.33909 5.58497 4.9671 5.77833 4.56585C6.17744 3.7376 6.47018 2.89756 6.51766 2.40586L6.52135 2.36762C6.55597 2.00873 6.58804 1.67621 6.64753 1.40437C6.71317 1.10443 6.82875 0.790949 7.08865 0.525472ZM12.6427 8.02506C12.9489 7.71928 13.1463 7.52127 13.2845 7.35871C13.417 7.20282 13.4504 7.12945 13.4633 7.08997C13.5122 6.93949 13.5122 6.77744 13.4633 6.62697C13.4504 6.58748 13.417 6.51411 13.2845 6.35822C13.1742 6.22847 13.0262 6.07622 12.8153 5.86455C12.3887 6.20895 11.9303 6.48137 11.5052 6.67245C11.0533 6.87561 10.6109 6.99944 10.2727 6.99944C10.1745 6.99944 10.0838 6.95472 10.0354 6.88237C9.98699 6.81001 9.98831 6.72122 10.0389 6.64992C10.7605 5.63224 11.0477 4.737 11.0863 4.13744L9.09014 2.14377C8.80323 1.85721 8.63478 1.6908 8.49817 1.58391C8.43623 1.53545 8.3999 1.51492 8.38174 1.50634C8.37341 1.5024 8.36865 1.501 8.36865 1.501L8.36755 1.50079C8.30484 1.49404 8.20483 1.52994 8.1608 1.57458C8.1608 1.57458 8.15791 1.57909 8.15427 1.58689C8.14544 1.6058 8.13013 1.64608 8.11285 1.72508C8.07489 1.89851 8.05033 2.13982 8.01071 2.55006C7.9367 3.3165 7.54559 4.35383 7.1296 5.21708C6.91541 5.66159 6.68063 6.08888 6.45123 6.4457C6.35678 6.59261 6.25497 6.74086 6.14818 6.87876L9.96755 10.6984L12.6427 8.02506ZM9.43517 12.6016C9.45204 12.5832 9.46056 12.5728 9.46333 12.5694C9.51222 12.4944 9.51222 12.3975 9.46334 12.3225C9.46057 12.3191 9.45205 12.3087 9.43517 12.2903C9.40387 12.2562 9.36675 12.2188 9.30324 12.1555L4.84477 7.69672C4.78147 7.63323 4.74359 7.59559 4.70945 7.56429C4.69104 7.54742 4.68066 7.5389 4.67723 7.53612C4.60224 7.48725 4.5054 7.48726 4.43041 7.53614C4.42698 7.53891 4.4166 7.54743 4.39818 7.56432C4.36403 7.59562 4.32666 7.63275 4.26331 7.69629L4.22905 7.73062L4.19729 7.76232C4.13377 7.82565 4.09614 7.86354 4.06484 7.89768C4.04797 7.91608 4.03945 7.92646 4.03667 7.9299C3.98779 8.00493 3.98781 8.1018 4.03665 8.17674C4.03942 8.18018 4.04795 8.19057 4.06485 8.20901C4.09615 8.24315 4.13328 8.28054 4.19677 8.34384L4.22475 8.37177L4.24261 8.38988L4.88861 9.05673C5.20505 9.38338 5.35622 9.83596 5.29962 10.2872C5.24301 10.7385 4.98475 11.1397 4.59743 11.3781L2.93238 12.4028C2.66369 12.5681 2.5 12.8611 2.5 13.1766C2.5 13.9075 3.09241 14.4999 3.8232 14.4999C4.13872 14.4999 4.43164 14.3362 4.59698 14.0675L5.62163 12.4023C5.85998 12.015 6.26117 11.7567 6.71242 11.7001C7.16366 11.6435 7.61621 11.7947 7.94284 12.1111L8.60963 12.7572L8.62774 12.775L8.6553 12.8026C8.71862 12.8662 8.75638 12.9037 8.79052 12.935C8.80894 12.9519 8.81932 12.9604 8.82275 12.9632C8.89769 13.012 8.99457 13.012 9.0696 12.9631C9.07304 12.9604 9.08342 12.9518 9.10182 12.935C9.13597 12.9037 9.17384 12.866 9.23717 12.8025L9.27094 12.7687L9.30269 12.737C9.36621 12.6737 9.40387 12.6357 9.43517 12.6016Z"
            />
          </svg>
        </Picker.Option>
        <Picker.Option value="solid">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M7.08865 0.525472C7.45418 0.152109 8.00879 -0.0465946 8.52811 0.009317C8.89492 0.0488087 9.1815 0.213918 9.42245 0.402442C9.63951 0.572269 9.87266 0.805178 10.1229 1.05517L12.2263 3.15589C11.9486 4.60952 11.1766 5.68879 10.601 6.3937C10.3709 6.67548 10.5587 7.05957 10.9158 6.99151C12.3146 6.72489 13.3644 5.85021 14.0515 4.98117C14.1941 5.12689 14.3208 5.26125 14.4274 5.38665C14.6201 5.61342 14.7911 5.85982 14.8897 6.16285C15.0368 6.61495 15.0368 7.10197 14.8897 7.55407C14.7911 7.8571 14.6201 8.1035 14.4274 8.33027C14.2447 8.54516 14.0032 8.78634 13.7233 9.06593L11.6451 11.1426C11.6079 11.077 11.5677 11.0126 11.5247 10.9495C11.3772 10.7334 11.1924 10.5495 11.0839 10.4416L11.0665 10.4242L6.57506 5.93248L6.55817 5.91552C6.45025 5.80704 6.2664 5.62223 6.05031 5.47474C5.86535 5.34848 5.66874 5.24738 5.46514 5.17142C5.5702 4.98245 5.67598 4.77825 5.77833 4.56585C6.17744 3.7376 6.47018 2.89756 6.51766 2.40586L6.52135 2.36761C6.55597 2.00871 6.58804 1.67622 6.64753 1.40437C6.71317 1.10443 6.82875 0.790949 7.08865 0.525472Z M10.6987 11.5132C10.7806 11.6331 10.8457 11.7608 10.8942 11.893C11.0838 12.4098 11.0186 12.9966 10.6987 13.4653C10.6723 13.504 10.6424 13.5401 10.6093 13.5732L10.5775 13.605C10.4584 13.7245 10.3329 13.8504 10.1967 13.9433C9.60808 14.3451 8.83338 14.3451 8.24474 13.9433C8.10856 13.8504 7.98307 13.7245 7.86397 13.605L7.83519 13.5762L6.62997 12.3983L4.71472 15.1843C4.36367 15.6949 3.78374 16 3.1641 16C1.9689 16 1 15.031 1 13.8358C1 13.2161 1.30506 12.6361 1.81567 12.2851L4.6015 10.3697L3.42367 9.16439L3.39483 9.13561C3.27538 9.01651 3.14952 8.89101 3.05657 8.75482C2.6548 8.16615 2.6548 7.3914 3.05657 6.80273C3.14953 6.66653 3.27538 6.54104 3.39483 6.42193L3.42668 6.39014C3.45977 6.35705 3.49587 6.32712 3.53452 6.30074C3.94048 6.02364 4.43494 5.93764 4.89584 6.04275C5.10325 6.09004 5.30387 6.17603 5.48656 6.30073C5.62275 6.39369 5.74823 6.51955 5.86733 6.63901L10.3605 11.1324C10.4799 11.2515 10.6058 11.377 10.6987 11.5132Z"
            />
          </svg>
        </Picker.Option>
      </Picker>
      <Picker type="text">
        <Picker.Option value={10}>10</Picker.Option>
        <Picker.Option value={12}>12</Picker.Option>
        <Picker.Option value={14}>14</Picker.Option>
        <Picker.Option value={16}>16</Picker.Option>
        <Picker.Option value={20}>20</Picker.Option>
        <Picker.Option value={24}>24</Picker.Option>
        <Picker.Option value={32}>32</Picker.Option>
      </Picker>
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
      <PickerTest />
      <br />
      <NavigationsTest />
      <br />
      <TabList />
      <br />
      <Database />
      <br />
      <IconList />,
    </div>
  )
}

export default Test

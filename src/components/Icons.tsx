import React from "react"

type iconProps = JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
interface iconsProps {
  [key: string]: any
  name: string
  size?: number
}

export const Loading = (props: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        style={{
          opacity: 0.25,
        }}
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        style={{
          opacity: 0.75,
        }}
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
export const Search = (props: iconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.1644 10.8715C9.30243 11.5768 8.20064 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.20063 11.5768 9.30243 10.8715 10.1644L14 13.2929L13.2929 14L10.1644 10.8715ZM11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11C9.20914 11 11 9.20914 11 7Z"
        fill="currentColor"
      />
    </svg>
  )
}
export const Adjust = (props: iconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8.05001V1H5V8.05001C6.14112 8.28164 7 9.29052 7 10.5C7 11.7095 6.14112 12.7184 5 12.95V15H4V12.95C2.85888 12.7184 2 11.7095 2 10.5C2 9.29052 2.85888 8.28164 4 8.05001ZM6 10.5C6 9.67157 5.32843 9 4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5Z"
        fill="currentColor"
      />
      <path
        d="M11 15H12V7.94999C13.1411 7.71836 14 6.70948 14 5.5C14 4.29052 13.1411 3.28164 12 3.05001V1H11V3.05001C9.85888 3.28164 9 4.29052 9 5.5C9 6.70948 9.85888 7.71836 11 7.94999V15ZM11.5 7C10.6716 7 10 6.32843 10 5.5C10 4.67157 10.6716 4 11.5 4C12.3284 4 13 4.67157 13 5.5C13 6.32843 12.3284 7 11.5 7Z"
        fill="currentColor"
      />
    </svg>
  )
}
export const Back = (props: iconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 4L6 8L10 12" stroke="currentColor" />
    </svg>
  )
}
export const Help = (props: iconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25 11.5C7.25 11.0858 7.58579 10.75 8 10.75C8.41421 10.75 8.75 11.0858 8.75 11.5C8.75 11.9142 8.41421 12.25 8 12.25C7.58579 12.25 7.25 11.9142 7.25 11.5Z"
        fill="currentColor"
      />
      <path
        d="M8.09651 4C7.45291 4 6.80216 4.18715 6.30486 4.62304C5.79707 5.06812 5.49995 5.72866 5.49995 6.56599L6.49995 6.56599C6.49995 5.97946 6.69938 5.607 6.96401 5.37505C7.23912 5.13392 7.63666 5 8.09651 5C8.53821 5 8.88746 5.14415 9.12163 5.3618C9.3528 5.57666 9.49995 5.88836 9.49995 6.2868C9.49995 6.59949 9.43334 6.82314 9.3225 7.00815C9.20758 7.19998 9.02557 7.38286 8.7449 7.58221C8.30444 7.89505 7.95358 8.19067 7.73431 8.59206C7.51183 8.99931 7.45858 9.4518 7.45858 10H8.45858C8.45858 9.50058 8.51204 9.25427 8.6119 9.07148C8.71495 8.88283 8.90202 8.69718 9.32397 8.39749C9.6679 8.1532 9.96865 7.87543 10.1803 7.52207C10.3961 7.1619 10.5 6.75584 10.5 6.2868C10.5 5.62433 10.2471 5.04263 9.80242 4.62932C9.36073 4.21879 8.75825 4 8.09651 4Z"
        fill="currentColor"
      />
      <path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z"
        fill="currentColor"
      />
    </svg>
  )
}
export const Plus = (props: iconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 8.5V12H8.5V8.5H12V7.5H8.5V4H7.5V7.5H4V8.5H7.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Icons = (props: iconsProps) => {
  const { name, size } = props
  const iconList: any = {
    loading: Loading,
    adjust: Adjust,
    back: Back,
    help: Help,
    search: Search,
    plus: Plus,
  }

  return iconList[name.toLowerCase()]({ ...props, width: size, height: size })
}

export default Icons

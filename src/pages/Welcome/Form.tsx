import React, { useRef, useState } from "react"

import styles from "./styles.module.scss"

import Input from "@/components/Input"
import Button from "@/components/Button"
import { Loading } from "@/components/Icons"

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [key, setKey] = useState("")

  const keyRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!key) return keyRef?.current?.focus()
    setLoading(true)

    // Alert("info", {
    //   error: true
    // });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="key">
        <Input
          innerRef={keyRef}
          type="text"
          name="key"
          id="key"
          placeholder="Private Beta Key"
          autoFocus={true}
          full={true}
          center={true}
          disabled={loading}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <div className={styles.form__actions}>
        <Button variant="primary" type="solid" full={true} loading={loading}>
          {!loading && "Continue"}
          {loading && <Loading height={16} width={16} />}
        </Button>
        <Button
          variant="secondary"
          type="outline"
          full={true}
          onClick={(e) => {
            e.preventDefault()
            window.open("https://revolicon.com", "_blank")
          }}
        >
          Join the waitlist
        </Button>
      </div>
    </form>
  )
}

export default Form

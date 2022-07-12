import React, { useRef, useState } from "react"
import axios from "axios"

import styles from "./styles.module.scss"

import Input from "@/components/Input"
import Button from "@/components/Button"

import { Loading } from "@/components/Icons"

import notify from "@/utils/notify";

type messagesType = {
  [key: string]: string
}

const messages: messagesType = {
  KEY_NOT_FOUND: "Your key is invalid, please try again.",
  FORM_NOT_VALIDATE: "An error occurred while submitting your data.",
  DATABASE_ERROR: "An unexpected error occurred in the database.",
  LOGIN_SUCCESS: "Beta key activation was successful."
}

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [key, setKey] = useState("")

  const keyRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!key || key.length !== 19) return keyRef?.current?.focus()
    setLoading(true)

    axios
      .post("https://api.revolicon.com/invite", {
        key,
        figmaId: "0000000000",
        figmaName: "John Doe",
        figmaData: {},
      })
      .then((response) => {
        notify(messages[response.data.message])
      })
      .catch((error) => {
        notify(messages[error.response.data.message], {
          error: true,
        })
      })
      .finally(() => setLoading(false))
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
          maxLength={19}
          minLength={19}
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

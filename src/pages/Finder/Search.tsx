import React, { PropsWithChildren } from "react"

import styles from "./styles.module.scss"

import { connectSearchBox } from "react-instantsearch-dom"

import Icons from "@/components/Icons"

const Input = connectSearchBox(({ currentRefinement, refine }) => (
  <input
    className={styles.search__input}
    type="search"
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
    autoFocus={true}
    placeholder="Search"
  />
))

const SearchBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.search}>
      <Icons className={styles.search__icon} name="search" size={16} />
      <Input />
      {children && <div className={styles.search__content}>{children}</div>}
    </div>
  )
}

export default SearchBox

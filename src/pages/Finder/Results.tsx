import React from "react"

import styles from "@/pages/Finder/styles.module.scss"

import { connectHits } from "react-instantsearch-dom"
import { FixedSizeList as InnerList } from "react-window"

import SimpleBar from "simplebar-react"

import Icons from "@/components/Icons"
import Button from "@/components/Button"
import classNames from "classnames"

const Empty = () => {
  return (
    <div className={styles.results__empty}>
      <div className={styles["results__empty-title"]}>No icons found</div>
      <Button>Request icon</Button>
    </div>
  )
}

const List = connectHits(({ hits }) => {
  return (
    <>
      {hits.length < 1 && <Empty />}
      <SimpleBar>
        {({ scrollableNodeRef, contentNodeRef }) => (
          <div
            ref={scrollableNodeRef}
            className={styles["results__list-wrapper"]}
          >
            <div
              ref={contentNodeRef}
              className={classNames(
                styles.results__list,
                styles["results__list--groups-3"]
              )}
            >
              {hits.map((hit) => (
                <ListItem {...hit} key={hit.objectID} />
              ))}
            </div>
          </div>
        )}
      </SimpleBar>
    </>
  )
})
const ListItem = ({ objectID, name }: any) => {
  return (
    <div key={objectID} className={styles.item} title={name}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 7C6.16421 7 6.5 6.55228 6.5 6C6.5 5.44772 6.16421 5 5.75 5C5.33579 5 5 5.44772 5 6C5 6.55228 5.33579 7 5.75 7Z"
          fill="black"
        />
        <path
          d="M11 6C11 6.55228 10.6642 7 10.25 7C9.83579 7 9.5 6.55228 9.5 6C9.5 5.44772 9.83579 5 10.25 5C10.6642 5 11 5.44772 11 6Z"
          fill="black"
        />
        <path
          d="M3.14404 8.64888C3.26228 8.52901 3.43291 8.4767 3.59802 8.50971L3.60409 8.51091L3.62417 8.51485L3.70428 8.53021C3.77471 8.54353 3.87815 8.56269 4.00877 8.58574C4.27014 8.63187 4.63964 8.69345 5.07071 8.75503C5.93714 8.87881 7.03501 9.00001 8 9.00001C8.965 9.00001 10.0629 8.87881 10.9293 8.75503C11.3604 8.69345 11.7299 8.63187 11.9912 8.58574C12.1219 8.56269 12.2253 8.54353 12.2957 8.53021L12.3758 8.51485L12.3959 8.51091L12.4007 8.50996L12.402 8.50971C12.5671 8.4767 12.7377 8.52901 12.856 8.64888C12.9742 8.76877 13.0242 8.94012 12.9889 9.10477L12.9878 9.10948C12.9849 9.12195 12.9791 9.14694 12.9757 9.16058C12.9679 9.192 12.9563 9.23573 12.9406 9.29002C12.909 9.39849 12.8603 9.54979 12.7896 9.72971C12.6487 10.0883 12.4178 10.5679 12.0563 11.05C11.3234 12.0271 10.0599 13 8 13C5.94008 13 4.67658 12.0271 3.94375 11.05C3.5822 10.5679 3.35127 10.0883 3.21041 9.72971C3.13973 9.54979 3.09099 9.39849 3.05944 9.29002C3.04366 9.23573 3.03212 9.192 3.02427 9.16058C3.02034 9.14487 3.01329 9.11414 3.01113 9.10477C2.97584 8.94012 3.02578 8.76877 3.14404 8.64888ZM4.76959 10.4729C5.51637 11.1346 6.47961 11.5 7.4774 11.5H8.5226C9.52039 11.5 10.4836 11.1346 11.2304 10.4729C11.2476 10.4577 11.2632 10.4408 11.2769 10.4223C11.4765 10.1516 11.6273 9.88086 11.7388 9.6428C11.5407 9.6751 11.3153 9.71004 11.0707 9.74498C10.1871 9.87121 9.03501 10 8 10C6.965 10 5.81286 9.87121 4.92929 9.74498C4.68469 9.71004 4.45935 9.6751 4.26115 9.6428C4.37274 9.88086 4.52349 10.1516 4.72315 10.4223C4.73677 10.4408 4.75241 10.4577 4.76959 10.4729Z"
          fill="black"
        />
        <path
          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8Z"
          fill="black"
        />
      </svg>
      <span className={styles.item__text}>{name}</span>
    </div>
  )
}

const Results: React.FC = () => {
  return (
    <div className={styles.results}>
      <List />
    </div>
  )
}

export default Results

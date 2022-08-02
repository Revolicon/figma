import React from "react"

import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom"

import { Tab, Tabs } from "@/components/Tabs"
import { IconButton } from "@/components/Button"

import Navigations from "@/components/Navigations"

import algoliasearch from "algoliasearch/lite"
import { Configure, InstantSearch } from "react-instantsearch-dom"

import Search from "@/pages/Finder/Search"
import Results from "@/pages/Finder/Results"

const searchClient = algoliasearch(
  "VOW5LML328",
  "22f7f3f67abdc32c66b9c672a931b2d7"
)

const Algolia = () => (
  <InstantSearch searchClient={searchClient} indexName="icons">
    <Configure facetFilters={[["style:line", "style:brands"]]} />
    <Search />
    <Results />
  </InstantSearch>
)

const Finder: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.finder}>
      <Navigations>
        <Tabs>
          <Tab active={true}>Icons</Tab>
          <Tab>Categories</Tab>
        </Tabs>
        <IconButton
          icon="adjust"
          onClick={() => navigate("/settings", { replace: true })}
        />
      </Navigations>
      <Algolia />
    </div>
  )
}

export default Finder

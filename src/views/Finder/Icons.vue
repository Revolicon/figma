<template>
  <ais-instant-search :search-client="searchClient" index-name="icons">
    <ais-configure :facetFilters="[['style:line', 'style:brands']]" />
    <ais-search-box>
      <template v-slot="{ currentRefinement, isSearchStalled, refine }">
        <SearchBox :value="currentRefinement" :loading="isSearchStalled" :refine="refine" />
      </template>
    </ais-search-box>

    <ais-hits class="content">
      <template v-slot="{ items, sendEvent }">
        <ul>
          <li v-for="item in items" :key="item.objectID">
            <h1>{{ item.name }}</h1>
            <button type="button">Add to cart</button>
          </li>
        </ul>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script setup>
  import algoliasearch from 'algoliasearch/lite'

  import SearchBox from '@/components/Finder/Search.vue'

  const searchClient = algoliasearch('VOW5LML328', '22f7f3f67abdc32c66b9c672a931b2d7')
</script>

<style scoped lang="scss"></style>

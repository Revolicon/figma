<template>
  <Navigations>
    <template #accessory>
      <Tabs :options="tabs">
        <Tab value="icons">Icons</Tab>
        <Tab value="categories">Categories</Tab>
      </Tabs>
    </template>
    <IconButton icon="Adjust" @click="router.push({ name: 'settings' })" />
  </Navigations>
  <div class="finder">
    <KeepAlive>
      <component :is="tabsComponent[tabs.active]" />
    </KeepAlive>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'

  import { IconButton } from '@/components/Button'
  import { Tabs, Tab } from '@/components/Tabs'

  import Navigations from '@/components/Navigations.vue'
  import Icons from '@/views/Finder/Icons.vue'
  import Categories from '@/views/Finder/Categories.vue'

  const router = useRouter()

  const tabs = reactive({
    active: 'icons',
  })
  const tabsComponent = {
    icons: Icons,
    categories: Categories,
  }
</script>

<style scoped lang="scss">
  .finder {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    height: 100%;
  }
</style>

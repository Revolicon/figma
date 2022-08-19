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
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" class="finder" />
    </KeepAlive>
  </RouterView>
</template>

<script setup>
  import { reactive, watch } from 'vue'
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

  watch(tabs, (newValue) => {
    router.push({ name: `finder-${newValue.active}` })
  })
</script>

<style scoped lang="scss">
  .finder {
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>

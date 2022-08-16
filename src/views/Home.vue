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
  <div class="content">
    <SimpleBar data-simplebar-auto-hide="false">
      <RouterView />
    </SimpleBar>
  </div>
</template>

<script setup>
  import { reactive, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  import { SimpleBar } from 'simplebar-vue3'

  import { IconButton } from '@/components/Button'
  import { Tabs, Tab } from '@/components/Tabs'

  import Navigations from '@/components/Navigations.vue'

  const router = useRouter()

  const tabs = reactive({
    active: 'icons',
  })
</script>

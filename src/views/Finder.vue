<template>
  <div class="finder">
    <div class="finder__content">
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
          <component :is="Component" class="finder__browse" />
        </KeepAlive>
      </RouterView>
    </div>
    <div class="finder__detail" v-if="icon">
      {{ icon }}
    </div>
  </div>
</template>

<script setup>
  import { computed, reactive, watch } from 'vue'
  import { useRouter } from 'vue-router'

  import { $post } from '@/utils/message'

  import { IconButton } from '@/components/Button'
  import { Tabs, Tab } from '@/components/Tabs'

  import Navigations from '@/components/Navigations.vue'

  const router = useRouter()

  const tabs = reactive({
    active: 'icons',
  })
  const icon = computed(() => router.currentRoute.value.query?.icon)

  watch(tabs, (newValue) => {
    router.push({ name: `finder-${newValue.active}` })
  })
  watch(icon, (newValue) => {
    console.log(newValue)

    newValue && $post('screen', 'wide')
  })
</script>

<style scoped lang="scss">
  .finder {
    display: flex;
    height: 100%;

    &__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__detail {
      flex: 1;
      border-left: 1px solid var(--figma-color-bg-tertiary);
    }
    &__browse {
      height: 100%;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }
  }
</style>

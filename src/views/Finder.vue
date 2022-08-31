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
        <IconButton icon="Adjust" @click="goSettings" />
      </Navigations>
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" class="finder__browse" />
        </KeepAlive>
      </RouterView>
    </div>
    <div class="finder__detail" v-if="icon">
      <pre>{{ router.currentRoute.value.query }}</pre>
    </div>
  </div>
</template>

<script setup>
  import { computed, reactive, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { $post } from '@/utils/message'

  import { IconButton } from '@/components/Button'
  import { Tabs, Tab } from '@/components/Tabs'

  import Navigations from '@/components/Navigations.vue'

  const router = useRouter()
  const route = useRoute()

  const tabs = reactive({
    active: 'icons',
  })
  const icon = computed(() => router.currentRoute.value.query?.icon)

  const goSettings = async () => {
    $post('screen', 'default')
    await router.push({ name: 'settings', query: undefined })
  }

  watch(tabs, (newValue) => {
    router.push({ name: `finder-${newValue.active}`, query: route.query })
  })
  watch(icon, (newValue) => {
    if (newValue) {
      $post('screen', 'wide')
    } else {
      $post('screen', 'default')
    }
  })
</script>

<style scoped lang="scss">
  .finder {
    display: flex;
    height: 100%;

    &__content {
      flex: 0 0 280px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__detail {
      flex: 1;
      border-left: 1px solid var(--figma-color-bg-tertiary);
      padding: 12px;
    }
    &__browse {
      height: 100%;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }
  }
</style>

<template>
  <RouterView v-if="isLoading" />
  <div class="loading" v-else>
    <Icons name="Loading" size="16" spin />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { RouterView, useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { $post, $listen } from '@/utils/message'

  import Icons from '@/components/Icons'

  let settings = useSettingsStore()
  const router = useRouter()

  const isLoading = ref(false)

  onMounted(() => {
    $post('settings/getMultipleData')
    $listen('*', (data, event) => {
      if (event === 'settings/getMultipleData') {
        settings.setState(data)
        isLoading.value = true

        console.log('[Revolicon Store] Update settings store', { ...settings.state })
      } else {
        $post('settings/getMultipleData')
        console.log('[Revolicon Store] Update signal')
      }
    })
  })
  settings.$subscribe((data) => {
    if (settings.state.betaKey) {
      router.push({ name: 'settings' })
    } else {
      router.push({ name: 'welcome' })
    }
  })
</script>

<style scoped lang="scss">
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

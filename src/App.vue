<template>
  <RouterView v-if="isLoading" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter, RouterView } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { $post, $listen } from '@/utils/message'

  const settings = useSettingsStore()
  const router = useRouter()

  const isLoading = ref(false)

  onMounted(() => {
    $post('settings/getMultipleData')
    $listen('*', (data, event) => {
      if (event === 'settings/getMultipleData') {
        console.log('[Revolicon Store] Update settings store')
        settings.$patch(data)

        isLoading.value = true
      } else {
        $post('settings/getMultipleData')
        console.log('[Revolicon Store] Get settings store signal')
      }
    })
  })
</script>

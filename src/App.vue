<template>
  <RouterView v-if="isLoading" />
  <div class="loading" v-else>
    <Icons name="Loading" size="16" />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { RouterView } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { $post, $listen } from '@/utils/message'

  import Icons from '@/components/Icons'

  const settings = useSettingsStore()

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

<style scoped lang="scss">
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    svg {
      animation: spin 1s linear infinite;
    }
  }
</style>

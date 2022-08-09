<template>
  <RouterView v-if="isLoading" />
  <div class="loading" v-else>
    <Icons name="Loading" size="16" spin />
  </div>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { RouterView, useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { useColorMode } from '@/utils/theme'
  import { $listen, $post } from '@/utils/message'

  import Icons from '@/components/Icons'

  let settings = useSettingsStore()
  let router = useRouter()

  let isLoading = ref(false)

  onMounted(() => {
    $post('settings/getMultipleData')
    $listen('*', (data, event) => {
      if (event === 'settings/getMultipleData') {
        settings.setState(data)
        isLoading.value = true

        console.log('[Revolicon Store] Update settings store', { ...settings.state })
      } else {
        $post('settings/getMultipleData')
        console.log(`[Revolicon Store] Update signal (${event})`)
      }
    })
  })
  settings.$subscribe(() => {
    // Login Actions
    if (settings.state.betaKey) {
      router.push({ name: 'settings' })
    } else {
      router.push({ name: 'welcome' })
    }

    if (isLoading.value) {
      const htmlElement = document.getElementsByTagName('html')[0]
      const htmlTheme = () => {
        settings.state.app.theme = htmlElement.className.split('-')[1]

        htmlElement.setAttribute('data-theme', useColorMode(settings))
      }

      htmlTheme()

      let mutation = new MutationObserver(() => htmlTheme())
      mutation.observe(htmlElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
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

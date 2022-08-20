<template>
  <RouterView v-if="isLoad" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>
  <Loader v-else />
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { useColorMode } from '@/utils/theme'
  import { $listen, $post } from '@/utils/message'

  import Loader from '@/components/Loader.vue'

  let settings = useSettingsStore()
  let router = useRouter()

  let isLoad = ref(false)
  let isStart = ref(false)

  onMounted(() => {
    $post('settings/getMultipleData')
    $listen('*', (data, event) => {
      if (event === 'settings/getMultipleData') {
        settings.setState(data)
        isLoad.value = true

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
      !isStart.value && router.push({ name: 'finder-icons' })
      isStart.value = true
    } else {
      router.push({ name: 'welcome' })
      isStart.value = false
    }

    if (isLoad.value) {
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

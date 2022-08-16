<template>
  <RouterView v-if="isLoad" />
  <div class="loading" v-else>
    <Icons name="Loading" size="16" spin />
  </div>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'
  import { useColorMode } from '@/utils/theme'
  import { $listen, $post } from '@/utils/message'

  import Icons from '@/components/Icons'

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
      !isStart.value && router.push({ name: 'finder' })
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

<style scoped lang="scss">
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

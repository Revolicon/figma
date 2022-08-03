<template>
  <br />
  <hr />

  <Test :myprop="message" />

  <div>
    Original Props:
    {{ message }}
  </div>

  <hr />
  <br />

  <button @click="clickTestButton()">Tıkla ve Test Et</button>

  <pre>
    {{ settings.$state }}
  </pre>

  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import { useSettingsStore } from '@/stores/settings'

  import Test from '@/components/Test.vue'
  import { reactive } from 'vue'

  const settings = useSettingsStore()

  const clickTestButton = () => {
    settings.$patch({
      betaKey: '123456789',
    })
  }

  const message = reactive({
    test: 'Hello World!',
  })

  parent.postMessage(
    {
      pluginMessage: {
        event: 'settings/getMultipleData',
      },
    },
    '*'
  )

  onmessage = (result) => {
    let { event: receivedEvent, data: receivedData } = result.data.pluginMessage
    if (receivedEvent === 'settings/getMultipleData') settings.$patch(receivedData)
  }
</script>

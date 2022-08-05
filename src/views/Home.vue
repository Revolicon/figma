<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: 10,
    }"
  >
    <input type="text" v-model="betaKey" :style="{ flex: 1, minWidth: 1, textAlign: 'center' }" />
    <div>-</div>
    <div :style="{ flex: 1, textAlign: 'center' }">{{ betaKey }}</div>
  </div>
  <Button variant="destructive" full @click="removeBetaKey">Logout</Button>
  <hr />

  <pre>{{ settings.state }}</pre>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useSettingsStore } from '@/stores/settings'
  import { $post } from '@/utils/message'

  import Button from '@/components/Button'

  const settings = useSettingsStore()

  const removeBetaKey = () => {
    $post('settings/removeData', 'betaKey')
  }

  const betaKey = ref(settings.state.betaKey)

  watch(betaKey, (newValue) => {
    $post('settings/setData', {
      key: 'betaKey',
      value: newValue,
    })
  })
</script>

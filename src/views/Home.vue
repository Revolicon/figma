<template>
  <input type="text" v-model="betaKey" style="width: 50%" />
  - {{ betaKey }}

  <hr />

  <pre>{{ settings.$state }}</pre>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useSettingsStore } from '@/stores/settings'
  import { $post } from '@/utils/message'

  const settings = useSettingsStore()

  const betaKey = ref(settings.$state.betaKey)

  watch(betaKey, (newValue) => {
    $post('settings/setData', {
      key: 'betaKey',
      value: newValue,
    })
  })
</script>

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const state = ref({})

  return {
    state,
    setState: (newState: any) => (state.value = newState),
  }
})

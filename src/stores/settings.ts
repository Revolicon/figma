import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const defaultState = {
    color: [
      {
        color: '000000',
        opacity: 100,
        active: true,
      },
      {
        color: 'FF2F64',
        opacity: 100,
        active: false,
      },
      {
        color: 'FFA800',
        opacity: 100,
        active: false,
      },
      {
        color: '00CC64',
        opacity: 100,
        active: false,
      },
      {
        color: '1696FF',
        opacity: 50,
        active: false,
      },
    ],
  }
  const state = ref({})

  return {
    state,
    setState: (newState: any) => (state.value = { ...defaultState, ...newState }),
  }
})

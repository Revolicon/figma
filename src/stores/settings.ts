import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const defaultState = {
    color: [
      {
        id: 'DEFAULT_COLOR_1',
        color: '000000',
        opacity: 100,
      },
      {
        id: 'DEFAULT_COLOR_2',
        color: 'FF2F64',
        opacity: 100,
      },
      {
        id: 'DEFAULT_COLOR_3',
        color: 'FFA800',
        opacity: 100,
      },
      {
        id: 'DEFAULT_COLOR_4',
        color: '00CC64',
        opacity: 100,
      },
      {
        id: 'DEFAULT_COLOR_5',
        color: '1696FF',
        opacity: 100,
      },
      {
        id: 'DEFAULT_COLOR_6',
        color: '1696FF',
        opacity: 50,
      },
    ],
    activeColor: 'DEFAULT_COLOR_1',
  }
  const state = ref({})

  return {
    state,
    setState: (newState: any) => (state.value = { ...defaultState, ...newState }),
  }
})

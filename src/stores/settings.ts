import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const defaultState = {
    // Icon Size
    size: 16,

    // Icon Color
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
      {
        id: 'DEFAULT_COLOR_7',
        color: 'F5F5F5',
        opacity: 100,
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

<template>
  <Section icon="appearance" title="Appearance">
    <button @click="changeAppearance('light')">
      Light
      <span v-if="activeAppearance === 'light'">(Active)</span>
    </button>
    <button @click="changeAppearance('dark')">
      Dark
      <span v-if="activeAppearance === 'dark'">(Active)</span>
    </button>
    <button @click="changeAppearance('auto')">
      Auto
      <span v-if="activeAppearance === 'auto'">(Active)</span>
    </button>
  </Section>
</template>

<script setup>
  import { computed } from 'vue'
  import { $post } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'

  const settings = useSettingsStore()

  const activeAppearance = computed(() => settings.state.appearance)
  const changeAppearance = (appearance) => {
    $post('settings/setData', {
      key: 'appearance',
      value: appearance,
    })
  }

  // $post('settings/removeMultipleData', ['appearance'])
</script>

<style scoped lang="scss">
  .appearance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
</style>

<template>
  <Section icon="appearance" title="Appearance">
    <div class="appearance">
      <Option
        v-for="(mode, index) in appearances"
        :key="index"
        :active="activeAppearance === mode"
        @click="changeAppearance(mode)"
      >
        <template #title>{{ mode }}</template>
      </Option>
    </div>
  </Section>
</template>

<script setup>
  import { computed } from 'vue'
  import { $post } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'
  import Option from '@/components/Option.vue'

  const settings = useSettingsStore()

  const appearances = ['light', 'dark', 'auto']

  const activeAppearance = computed(() => settings.state.appearance)
  const changeAppearance = (appearance) => {
    if (appearance === activeAppearance.value) return
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
    align-items: center;
    gap: 8px;
  }
</style>

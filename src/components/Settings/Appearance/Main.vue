<template>
  <Section icon="appearance" title="Appearance">
    <div class="appearance">
      <Option
        v-for="(mode, index) in options"
        :key="index"
        :active="activeOption === mode.slug"
        @click="changeOption(mode.slug)"
      >
        <template #icon>
          <component :is="mode.icon" class="appearance__icon" />
        </template>
        <template #title>{{ mode.slug }}</template>
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

  import ThemeLight from '@/components/Settings/Color/Icons/Light.vue'
  import ThemeDark from '@/components/Settings/Color/Icons/Dark.vue'
  import ThemeAuto from '@/components/Settings/Color/Icons/Auto.vue'

  const settings = useSettingsStore()

  const options = [
    {
      slug: 'light',
      icon: ThemeLight,
    },
    {
      slug: 'dark',
      icon: ThemeDark,
    },
    {
      slug: 'auto',
      icon: ThemeAuto,
    },
  ]

  const activeOption = computed(() => settings.state.appearance)
  const changeOption = (option) => {
    if (option === activeOption.value) return
    $post('settings/setData', {
      key: 'appearance',
      value: option,
    })
  }

  // $post('settings/removeMultipleData', ['appearance'])
</script>

<style scoped lang="scss">
  .appearance {
    display: flex;
    align-items: center;
    gap: 8px;

    &__icon {
      border-radius: 4px;
      box-shadow: 0 0.5px 2px 0.5px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.08);
    }
  }
</style>

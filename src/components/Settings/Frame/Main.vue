<template>
  <Section icon="frame" title="Frame">
    <div class="frame">
      <Option
        v-for="(mode, index) in options"
        :key="index"
        :active="activeOption === mode.slug"
        @click="changeOption(mode.slug)"
      >
        <template #icon>
          <component :is="mode.icon" class="frame__icon" />
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

  import ThemeDark from '@/images/settings/appearance/dark.svg?component'
  import ThemeLight from '@/images/settings/appearance/light.svg?component'
  import ThemeAuto from '@/images/settings/appearance/auto.svg?component'

  const settings = useSettingsStore()

  const options = [
    {
      slug: 'fixed',
      icon: ThemeLight,
    },
    {
      slug: 'hug',
      icon: ThemeDark,
    },
    {
      slug: 'bounding',
      icon: ThemeAuto,
    },
  ]

  const activeOption = computed(() => settings.state.frame)
  const changeOption = (frame) => {
    if (frame === activeOption.value) return
    $post('settings/setData', {
      key: 'frame',
      value: frame,
    })
  }

  // $post('settings/removeMultipleData', ['appearance'])
</script>

<style scoped lang="scss">
  .frame {
    display: flex;
    align-items: center;
    gap: 8px;

    &__icon {
    }
  }
</style>

<template>
  <div class="layout">
    <Option
      v-for="(mode, index) in options"
      :key="index"
      :active="activeOption === mode.slug"
      @click="changeOption(mode.slug)"
    >
      <template #icon>
        <component :is="mode.icon" :type="mode.slug" />
      </template>
      <template #title>{{ mode.slug }}</template>
    </Option>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { $post } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Option from '@/components/Option.vue'
  import Small from '@/components/Settings/Finder/Icon.vue'

  const settings = useSettingsStore()

  const options = [
    {
      slug: 'small',
      icon: Small,
    },
    {
      slug: 'medium',
      icon: Small,
    },
    {
      slug: 'large',
      icon: Small,
    },
  ]

  const activeOption = computed(() => settings.state.finderLayout)
  const changeOption = (option) => {
    if (option === activeOption.value) return
    $post('settings/setData', {
      key: 'finderLayout',
      value: option,
    })
  }

  // $post('settings/removeMultipleData', ['finderLayout'])
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>

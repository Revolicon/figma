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
          <component :is="mode.icon" class="frame__icon" :hover="hoverOption === mode.slug" />
        </template>
        <template #title>{{ mode.slug }}</template>
      </Option>
    </div>
  </Section>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { $post } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'
  import Option from '@/components/Option.vue'

  import IconFixed from '@/components/Settings/Frame/Icons/Fixed.vue'
  import IconHug from '@/components/Settings/Frame/Icons/Hug.vue'
  import IconBounding from '@/components/Settings/Frame/Icons/Bounding.vue'

  const settings = useSettingsStore()

  const options = [
    {
      slug: 'fixed',
      icon: IconFixed,
    },
    {
      slug: 'hug',
      icon: IconHug,
    },
    {
      slug: 'bounding',
      icon: IconBounding,
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
  }
</style>

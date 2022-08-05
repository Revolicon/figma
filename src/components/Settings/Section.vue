<template>
  <div
    class="section"
    :class="{
      'section--actions': slots.actions,
    }"
  >
    <div class="section__header">
      <div class="section__header-icon" v-html="icons['dark'][icon]" v-if="icons['dark'][icon]" />
      <div class="section__header-title">{{ title }}</div>
      <div class="section__header-actions" v-if="slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="section__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSlots } from 'vue'

  import DarkSize from '@/images/settings/sections/dark/size.svg?raw'
  import DarkAppearance from '@/images/settings/sections/dark/appearance.svg?raw'
  import DarkColor from '@/images/settings/sections/dark/color.svg?raw'
  import DarkFinder from '@/images/settings/sections/dark/finder.svg?raw'
  import DarkFrame from '@/images/settings/sections/dark/frame.svg?raw'
  import DarkQuickActions from '@/images/settings/sections/dark/quickactions.svg?raw'

  import LightSize from '@/images/settings/sections/light/size.svg?raw'
  import LightAppearance from '@/images/settings/sections/light/appearance.svg?raw'
  import LightColor from '@/images/settings/sections/light/color.svg?raw'
  import LightFinder from '@/images/settings/sections/light/finder.svg?raw'
  import LightFrame from '@/images/settings/sections/light/frame.svg?raw'
  import LightQuickActions from '@/images/settings/sections/light/quickactions.svg?raw'

  const icons: { [key: string]: any } = {
    dark: {
      size: DarkSize,
      appearance: DarkAppearance,
      color: DarkColor,
      finder: DarkFinder,
      frame: DarkFrame,
      quickactions: DarkQuickActions,
    },
    light: {
      size: LightSize,
      appearance: LightAppearance,
      color: LightColor,
      finder: LightFinder,
      frame: LightFrame,
      quickactions: LightQuickActions,
    },
  }

  const slots = useSlots()
  const props = defineProps<{
    icon: string
    title: string
  }>()
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .section {
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 8px;

    &__header {
      display: flex;
      align-items: center;
      gap: 8px;

      &-icon {
        width: 20px;
        height: 20px;
        flex: none;
      }
      &-title {
        @extend .text-sm;
        font-weight: 500;
        color: var(--figma-color-text);
      }
      &-actions {
        margin-left: auto;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &--actions {
      gap: 12px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid var(--figma-color-bg-secondary);
    }
  }
</style>

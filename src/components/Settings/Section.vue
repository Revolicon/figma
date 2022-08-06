<template>
  <div
    class="section"
    :class="{
      'section--actions': slots.actions,
      'section--error': props.error,
    }"
  >
    <div class="section__header">
      <div class="section__header-icon" v-html="getIcon(icon)" v-if="getIcon(icon)" />
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

  const slots = useSlots()
  const props = defineProps<{
    title: string
    icon?: string
    error?: boolean
  }>()

  const getIcon: any = (icon: string) => {
    return (
      import.meta.globEager(`/src/images/settings/sections/**/*.svg`, {
        as: 'raw',
      }) as any
    )[`/src/images/settings/sections/dark/${icon}.svg`]
  }
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

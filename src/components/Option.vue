<template>
  <button
    class="option"
    :class="{
      'option--active': active,
    }"
  >
    <span class="option__icon">
      <slot name="icon" />
    </span>
    <span class="option__title">
      <slot name="title">{{ title }}</slot>
    </span>
  </button>
</template>

<script setup>
  const props = defineProps({
    title: String,
    active: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .option {
    --border-width: 1px;
    --border-color: var(--figma-color-bg-secondary);
    --background-color: var(--figma-color-bg);
    --text-color: var(--figma-color-text);

    background: var(--background-color);
    box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
    padding: 6px 0;
    border: none;
    outline: none;
    flex: 1;
    border-radius: 6px;
    gap: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
    }
    &__title {
      @extend .text-sm;
      font-weight: 400;
      color: var(--text-color);
      text-transform: capitalize;
    }

    &:not(&--active):hover {
      --border-color: var(--figma-color-bg-tertiary);
    }
    &--active {
      --border-width: 2px;
      --border-color: var(--figma-color-bg-brand);
      --background-color: var(--figma-color-bg-selected);
      --text-color: var(--figma-color-bg-brand);
    }
  }
</style>

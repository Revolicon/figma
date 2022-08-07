<template>
  <div class="navigations">
    <div class="navigations__accessory" v-if="slots.accessory">
      <slot name="accessory" />
    </div>
    <div class="navigations__actions">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { useSlots } from 'vue'

  let slots = useSlots()
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .navigations {
    @extend .text-sm;
    font-weight: 600;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 4px;
    flex: none;
    border-bottom: 1px solid var(--figma-color-bg-tertiary);

    &__accessory {
      @extend .text-sm;
      font-weight: 600;
      color: var(--figma-color-text);
      background: transparent;
      border: none;
      outline: none;
      padding: 0;
    }
    &__actions,
    &__accessory {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
</style>

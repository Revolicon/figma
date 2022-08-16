<template>
  <button
    class="tab"
    :class="{
      'tab--active': active,
    }"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Tab',
  }
</script>
<script setup>
  const props = defineProps({
    value: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  })
  console.log(props)
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .tab {
    @extend .text-sm;
    font-weight: 500;
    color: var(--figma-color-text-secondary);
    background: transparent;
    border: none;
    outline: none;
    padding: 0;

    &--active {
      color: var(--figma-color-text);
      font-weight: 600;
    }
  }
</style>

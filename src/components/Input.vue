<template>
  <input
    v-bind="props"
    :class="[
      'input',
      `input--size-${variant}`,
      {
        'input--center': center,
        'input--full': full,
      },
    ]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  type Variant = 'small' | 'default'

  interface Props {
    center?: boolean
    full?: boolean
    variant?: Variant
    modelValue?: string
  }

  const props = defineProps<Props>()

  // const input = computed({
  //   get: () => modelValue,
  //   set: (value) => emit('update:modelValue', value),
  // })
</script>

<style scoped lang="scss">
  @import '../src/styles/variables';

  .input {
    --border-width: 1px;
    --border-color: var(--figma-color-bg-secondary);

    @extend .text-sm;
    width: fit-content;
    display: flex;
    padding: 8px;
    transition: all 0.1s ease-in-out;
    background: var(--figma-color-bg);
    border-radius: 6px;
    color: var(--figma-color-text);
    box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
    border: 0;
    outline: none;

    &::placeholder {
      color: var(--figma-color-text-secondary);
    }
    &:not([disabled]) {
      &:hover {
        --border-color: var(--figma-color-bg-tertiary);
      }
      &:focus {
        --border-width: 2px;
        --border-color: var(--figma-color-bg-brand);
      }
    }

    &--center {
      justify-content: center;
      text-align: center;
    }
    &--full {
      width: 100%;
    }
    &--size {
      &-small {
        height: 28px;
      }
      &-default {
        height: 32px;
      }
    }
  }
</style>

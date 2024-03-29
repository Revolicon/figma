<template>
  <input
    v-bind="props"
    v-model="input"
    ref="inputRef"
    :class="[
      'input',

      {
        [`input--size-${variant}`]: variant,
        'input--center': center,
        'input--full': full,
      },
    ]"
  />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  type Variant = 'small' | 'default'

  interface Props {
    center?: boolean
    full?: boolean
    variant?: Variant
    modelValue?: string
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
  }>()

  const input = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:modelValue', value)
    },
  })

  const inputRef: any = ref(null)

  defineExpose({
    setFocus: () => inputRef.value.focus(),
    setBlur: () => inputRef.value.blur(),
    innerRef: () => inputRef.value,
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .input {
    --border-width: 1px;
    --border-color: var(--figma-color-bg-secondary);

    @extend .text-sm;
    width: fit-content;
    display: flex;
    padding: 8px;
    transition: all 0s;
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

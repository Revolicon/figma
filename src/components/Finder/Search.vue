<template>
  <div class="search">
    <div class="search__icon">
      <Icons name="Loading" size="16" spin v-if="loading" />
      <Icons name="Search" size="16" v-else />
    </div>
    <input
      class="search__input"
      type="search"
      placeholder="Search"
      v-model="inputValue"
      :autoFocus="true"
      @input="refine(inputValue)"
    />
    <div class="search__actions" v-if="slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, useSlots } from 'vue'

  import Icons from '@/components/Icons'

  const props = defineProps({
    value: {
      type: String,
      default: '',
    },
    refine: {
      type: Function,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  })

  const slots = useSlots()

  const inputValue = ref(props.value)
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .search {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid var(--figma-color-bg-tertiary);
    gap: 6px;
    padding: 6px;
    height: 41px;
    flex: none;

    &__icon {
      flex: none;
      color: var(--figma-color-text);
      margin-left: 6px;
    }
    &__input {
      @extend .text-sm;
      display: flex;
      background: transparent;
      width: 100%;
      min-width: 1px;
      border: none;
      outline: none;
      flex: 1;
      height: 100%;
      padding: 0;
      margin: 0;
      color: var(--figma-color-text);
      appearance: none;
      &::placeholder {
        color: var(--figma-color-text-secondary);
      }
      &::-webkit-search-cancel-button {
        appearance: none;
        opacity: 0;
        pointer-events: none;
      }
    }
    &__actions {
      display: flex;
      flex: none;
      align-items: center;
      gap: 6px;
    }
  }
</style>

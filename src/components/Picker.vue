<template>
  <div
    class="picker"
    :class="{
      [`picker--type-${type}`]: type,
    }"
  >
    <div class="picker__effect" :style="optionsEffect" />
    <div class="picker__options">
      <button
        class="picker-option"
        v-for="(option, index) in options"
        :class="{
          [`picker-option--type-${type}`]: type,
          'picker-option--active': activeOption(index),
        }"
        :key="index"
        ref="optionsRef"
        @click="selectOption(option.value, index)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { computed, effect, effectScope, onMounted, reactive, ref, watch, watchEffect } from 'vue'

  const emit = defineEmits(['change'])
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
      required: true,
      verify: (value) => ['text', 'color'].includes(value),
    },
    options: {
      type: Array,
      required: true,
    },
    active: {
      required: true,
    },
  })

  const optionsRef = ref([])
  const optionsEffect = reactive({
    left: 0,
    width: 0,
  })

  const activeIndex = computed(() => {
    return props.options.findIndex((option) => option.value.toString() === props.active.toString())
  })
  const activeOption = (index) => {
    return props.options[index].value.toString() === props.active.toString()
  }
  const selectOption = (value, index) => {
    emit('change', value)
    optionsEffect.left = optionsRef.value[index].offsetLeft
    optionsEffect.width = optionsRef.value[index].offsetWidth
  }

  watchEffect(() => {
    optionsEffect.left = optionsRef.value[activeIndex.value].offsetLeft
    optionsEffect.width = optionsRef.value[activeIndex.value].offsetWidth
  })
  watch(activeIndex, () => {
    optionsEffect.left = optionsRef.value[activeIndex.value].offsetLeft
    optionsEffect.width = optionsRef.value[activeIndex.value].offsetWidth
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .picker {
    width: fit-content;
    border-radius: 6px;
    background: var(--figma-color-bg-secondary);
    height: 28px;
    position: relative;
    padding: 2px;
    overflow: hidden;

    &__effect {
      height: 24px;
      border-radius: 4px;
      position: absolute;
      z-index: 0;
      transition: all 0.15s ease-in-out;
      margin: 2px;
      pointer-events: none;
      top: 0;
      bottom: 0;
    }
    &__options {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    &--type-icon & {
      &__options {
        gap: 0;
      }
      &__effect {
        background: var(--figma-color-bg);
        min-width: 40px;
      }
    }
    &--type-text & {
      &__options {
        gap: 6px;
      }
      &__effect {
        background: var(--figma-color-bg-brand);
        min-width: 24px;
      }
    }
  }
  .picker-option {
    @extend .text-sm;
    background: transparent;
    border: none;
    outline: none;
    height: 24px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--figma-color-text);
    transition: all 0.15s ease-in-out;

    svg {
      transition: all 0.15s ease-in-out;
    }
    &--type-icon {
      padding: 4px 12px;
      min-width: 40px;

      svg {
        color: var(--figma-color-text-secondary);
      }
    }
    &--type-text {
      min-width: 24px;
      padding: 4px 2px;
    }
    &--active {
      // Dark and white theme always use the same color for the active option
      color: #ffffff;

      svg {
        color: var(--figma-color-text);
      }
    }
  }
</style>

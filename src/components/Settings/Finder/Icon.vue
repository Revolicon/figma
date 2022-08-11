<template>
  <div class="icon" :class="[`icon--type-${type}`]">
    <div class="icon__card">
      <div class="icon__card-title" />
      <div class="icon__card-list">
        <div v-for="i in activeType.grid" :key="i" />
      </div>
    </div>
    <div class="icon__badge">{{ activeType.count }}</div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    type: {
      type: String,
      default: 'medium',
    },
  })
  const types = {
    small: {
      count: 5,
      grid: 25,
    },
    medium: {
      count: 3,
      grid: 9,
    },
    large: {
      count: 2,
      grid: 6,
    },
  }
  const activeType = computed(() => types[props.type])
</script>

<style scoped lang="scss">
  @import '../../../styles/variables';

  .icon {
    --grid-gap: 2px;
    --grid-width: 5px;
    --grid-height: 5px;
    --grid-rounded: 1.5px;

    width: 32px;
    height: 32px;
    position: relative;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08));

    &__card {
      width: 23px;
      height: 28px;
      padding: 2px;
      position: absolute;
      bottom: 0;
      left: 4px;
      display: flex;
      flex-direction: column;
      gap: 3px;

      background-image: conic-gradient(
        from 150deg at 50% 100%,
        rgba(#ffffff, 0.15) 0deg,
        rgba(#ffffff, 0.15) 110deg,
        rgba(#00b2ff, 0.15) 154deg,
        rgba(#e8eef0, 0.15) 225deg,
        rgba(#ff8000, 0.15) 260deg,
        rgba(#ffffff, 0.15) 360deg
      );
      background-color: #ffffff;
      border-radius: 4px;

      &-title {
        width: 8px;
        height: 2px;
        background: rgba(0, 0, 0, 0.24);
        border-radius: 6px;
      }
      &-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--grid-width), 1fr));
        gap: var(--grid-gap);

        div {
          width: var(--grid-width);
          height: var(--grid-height);
          background: rgba(0, 0, 0, 0.12);
          border-radius: var(--grid-rounded);
          display: flex;
        }
      }
    }
    &__badge {
      @extend .text-sm;
      top: 0;
      right: 0;
      background: var(--figma-color-bg-brand);
      border-radius: 100%;
      position: absolute;
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      z-index: 1;
    }

    &--type {
      &-small {
        --grid-gap: 1px;
        --grid-width: 3px;
        --grid-height: 3px;
        --grid-rounded: 1px;
      }
      &-large {
        --grid-gap: 2px 1px;
        --grid-width: 9px;
      }
    }
  }
  [data-theme='dark'] .icon {
    &__card {
      background-image: conic-gradient(
        from 150deg at 50% 100%,
        rgba(#ffffff, 0.08) 0deg,
        rgba(#ffffff, 0.08) 110deg,
        rgba(#00b2ff, 0.08) 154deg,
        rgba(#e8eef0, 0.08) 225deg,
        rgba(#ff8000, 0.08) 260deg,
        rgba(#ffffff, 0.08) 360deg
      );
      background-color: #404040;

      &-title {
        background: rgba(255, 255, 255, 0.24);
      }
      &-list {
        div {
          background: rgba(255, 255, 255, 0.12);
        }
      }
    }
  }
</style>

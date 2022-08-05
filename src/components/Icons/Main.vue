<template>
  <component :is="List[name]" v-bind="iconProps" :class="{ spin }" />
</template>

<script setup>
  import * as List from './List'

  const props = defineProps({
    name: {
      type: undefined,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    spin: Boolean,
  })
  const iconProps = {
    width: props.size,
    height: props.size,
    ...props,
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 1s linear infinite;
  }
</style>

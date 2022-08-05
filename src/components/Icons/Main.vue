<template>
  <component :is="List[name]" v-bind="iconProps" />
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
  })
  const iconProps = {
    width: props.size,
    height: props.size,
    ...props,
  }
</script>

<style scoped lang="scss"></style>

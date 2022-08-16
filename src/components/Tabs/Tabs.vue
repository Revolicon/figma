<template>
  <div class="tabs">
    <component
      :is="tab"
      v-for="(tab, key) in tabs"
      :key="key"
      :active="options.active === tab.props.value"
      @click="options.active = tab.props.value"
    />
  </div>
</template>

<script setup>
  import { computed, ref, useSlots } from 'vue'

  const props = defineProps({
    options: {
      type: Object,
      default: {},
    },
  })

  const slots = useSlots()
  const tabs = computed(() => {
    return slots.default().filter((slot) => slot.type.name === 'Tab') || []
  })
</script>

<style scoped lang="scss">
  .tabs {
    display: inline-flex;
    flex-wrap: nowrap;
    overflow: auto;
    align-items: center;
    gap: 16px;
    padding: 8px;
  }
</style>

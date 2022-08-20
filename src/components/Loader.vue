<template>
  <div class="loader">
    <Icons name="Loading" size="16" spin />
  </div>
</template>

<script setup>
  import Icons from '@/components/Icons'
</script>

<style scoped lang="scss">
  .loader {
    height: 100%;
    width: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
</style>

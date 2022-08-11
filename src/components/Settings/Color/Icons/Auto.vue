<template>
  <div class="icon">
    <div class="icon__theme">
      <Light class="icon__theme-icon" :style="{ left: 0 }" />
    </div>
    <div class="icon__theme">
      <Dark class="icon__theme-icon" :style="{ right: 0 }" />
    </div>
  </div>
</template>

<script setup>
  import Light from '@/components/Settings/Color/Icons/Light.vue'
  import Dark from '@/components/Settings/Color/Icons/Dark.vue'
</script>

<style scoped lang="scss">
  .icon {
    display: flex;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 0.5px 2px 0.5px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.08);

    &__theme {
      overflow: hidden;
      width: 20px;
      height: 32px;
      position: relative;

      &-icon {
        box-shadow: none;
        border-radius: 0;
        position: absolute;
        top: 0;
      }
    }
  }
</style>

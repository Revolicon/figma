<template>
  <div class="icon">
    <div
      class="icon__line"
      :style="{
        background:
          'linear-gradient(180deg, var(--line-light-color) 35%, var(--line-dark-color) 50%, var(--line-light-color) 64%)',
        width: 1,
        height: '100%',
        left: 7,
        top: 2,
        zIndex: 1,
      }"
    />
    <div
      class="icon__line"
      :style="{
        background:
          'linear-gradient(180deg, rgba(13, 153, 255, 0.2) 35%, rgba(13, 153, 255, 0.6) 50%, rgba(13, 153, 255, 0.2) 64%)',
        width: 1,
        height: '100%',
        right: 7,
        top: 2,

        zIndex: 1,
      }"
    />
    <div
      class="icon__line"
      :style="{
        background: 'rgba(13, 153, 255, 0.2)',
        width: '100%',
        height: 1,
        top: 7,
        left: 2,
      }"
    />
    <div
      class="icon__line"
      :style="{
        background: 'rgba(13, 153, 255, 0.2)',
        width: '100%',
        height: 1,
        bottom: 7,
        left: 2,
      }"
    />

    <div
      class="icon__block"
      :class="{
        'icon__block--hover': hover,
      }"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    hover: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped lang="scss">
  .icon {
    --line-light-color: rgba(13, 153, 255, 0.2);
    --line-dark-color: rgba(13, 153, 255, 0.6);
    --card-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    position: relative;
    -webkit-mask-image: radial-gradient(50% 50% at 50% 50%, #000000 75%, rgba(0, 0, 0, 0) 100%);
    mask-image: radial-gradient(50% 50% at 50% 50%, #000000 75%, rgba(0, 0, 0, 0) 100%);

    &__line {
      position: absolute;
      max-width: 32px;
      max-height: 32px;
    }
    &__block {
      position: relative;
      z-index: 2;
      width: 10px;
      height: 16px;
      border-radius: 3px;
      background-image: conic-gradient(
        from 150deg at 50% 100%,
        rgba(#ffffff, 0.15) 0deg,
        rgba(#ffffff, 0.15) 110deg,
        rgba(#00b2ff, 0.15) 154deg,
        rgba(#e8eef0, 0.15) 225deg,
        rgba(#ff8000, 0.15) 260deg,
        rgba(#ffffff, 0.15) 360deg
      );
      box-shadow: 0 0.5px 2px 0.5px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.08);
      background-color: var(--card-color);

      &--hover {
        @keyframes block {
          0% {
            width: 10px;
          }
          50% {
            width: 16px;
          }
          100% {
            width: 20px;
          }
        }

        //animation: block 0.8s infinite;
        //animation-delay: 1s;
        //animation-direction: alternate;
      }
    }
    @at-root {
      [data-theme='dark'] & {
        --line-light-color: rgba(12, 140, 233, 0.3);
        --line-dark-color: rgba(12, 140, 233, 0.8);
        --card-color: #646464;
      }
    }
  }
</style>

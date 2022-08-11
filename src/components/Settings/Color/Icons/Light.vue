<template>
  <div class="icon">
    <div class="icon__title" />
    <div class="icon__content">
      <div
        class="icon__block"
        :style="{
          background: 'rgba(13, 153, 255, 0.08)',
          borderColor: 'rgba(13, 153, 255, 0.4)',
        }"
      />
      <div
        class="icon__block"
        :style="{
          borderColor: 'rgba(0, 0, 0, 0.12)',
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .icon {
    width: 40px;
    height: 32px;

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
    box-shadow: 0 0.5px 2px 0.5px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 4px;

    &__title {
      width: 14px;
      height: 3px;

      background: rgba(0, 0, 0, 0.12);
      border-radius: 6px;
    }
    &__content {
      display: flex;
      gap: 2px;
      flex-wrap: nowrap;
    }
    &__block {
      width: 24px;
      height: 17px;
      display: flex;
      flex: none;
      border: 1px solid;
      border-radius: 2px;
    }
  }
</style>

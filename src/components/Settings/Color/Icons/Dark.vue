<template>
  <div class="icon">
    <div class="icon__title" />
    <div class="icon__content">
      <div
        class="icon__block"
        :style="{
          background: 'rgba(12, 140, 233, 0.08)',
          borderColor: 'rgba(12, 140, 233, 0.6)',
        }"
      />
      <div
        class="icon__block"
        :style="{
          borderColor: 'rgba(255, 255, 255, 0.12)',
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
      rgba(#ffffff, 0.08) 0deg,
      rgba(#ffffff, 0.08) 110deg,
      rgba(#00b2ff, 0.08) 154deg,
      rgba(#e8eef0, 0.08) 225deg,
      rgba(#ff8000, 0.08) 260deg,
      rgba(#ffffff, 0.08) 360deg
    );
    background-color: #404040;
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

      background: rgba(255, 255, 255, 0.12);
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

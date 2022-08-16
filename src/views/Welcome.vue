<template>
  <div class="welcome">
    <div class="content">
      <Logo class="content__logo" />
      <div class="content__title">Welcome to Revolicon</div>
      <div class="content__text">Enter your private beta key to continue</div>
      <div class="content__form">
        <Form />
      </div>
    </div>
    <Feature />
  </div>
</template>

<script setup>
  import Feature from '@/components/Welcome/Feature.vue'
  import Form from '@/components/Welcome/Form.vue'

  import Logo from '@/images/logo.svg?component'
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .welcome {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  .content {
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__logo {
      margin-bottom: 16px;
    }
    &__title {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.006em;
      color: var(--figma-color-text);
      margin-bottom: 4px;
    }
    &__text {
      @extend .text-sm;
      text-align: center;
      letter-spacing: 0.005em;
      color: var(--figma-color-text-secondary);
      margin-bottom: 16px;
    }
    &__form {
      width: 100%;
    }
  }
</style>

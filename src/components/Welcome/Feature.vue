<template>
  <div class="feature">
    <a target="_blank" :href="item.link" class="feature__item" :key="index" v-for="(item, index) in list">
      <img :src="item.icon" :alt="item.title" draggable="false" />
      <span>{{ item.title }}</span>
    </a>
    <img class="feature__effect" :src="FeatureEffect" alt="Effect" />
  </div>
</template>

<script setup>
  import FeatureIcon1 from '@/images/welcome/beautiful.png'
  import FeatureIcon2 from '@/images/welcome/easy-to-use.png'
  import FeatureIcon3 from '@/images/welcome/open-source.png'
  import FeatureEffect from '@/images/welcome/effect.png'

  let list = [
    {
      icon: FeatureIcon1,
      title: 'Beautiful',
      link: 'https://twitter.com/revolicon',
    },
    {
      icon: FeatureIcon2,
      title: 'Easy to Use',
      link: 'https://revolicon.com',
    },
    {
      icon: FeatureIcon3,
      title: 'Open Source',
      link: 'https://github.com/revolicon',
    },
  ]
</script>

<style scoped lang="scss">
  @import '../src/styles/variables';

  .feature {
    padding: 24px;
    flex: none;
    display: flex;
    gap: 8px;
    position: relative;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
      flex: 1;
      position: relative;
      z-index: 1;
      outline: none;

      img {
        height: 36px;
        width: 36px;
        pointer-events: none;
      }
      span {
        @extend .text-sm;
        text-align: center;
        color: var(--figma-color-text-secondary);
      }
      &:focus-within {
        span {
          color: var(--figma-color-text);
        }
      }
    }
    &__effect {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 200px;
      display: flex;
      z-index: -1;
      pointer-events: none;
    }
  }
</style>

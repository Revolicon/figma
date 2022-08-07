<template>
  <component :is="ButtonTag" :href="href" :target="href && '_blank'" class="button">
    <Icons :name="icon" size="16" />
  </component>
</template>

<script setup>
  import Icons from '@/components/Icons'

  let props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    href: String,
  })

  const ButtonTag = props.href ? 'a' : 'button'
</script>

<style scoped lang="scss">
  .button {
    color: var(--figma-color-text);
    background: transparent;
    height: 32px;
    width: 32px;
    border-radius: 4px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--figma-color-text);
    }
    &:hover {
      background: var(--figma-color-bg-secondary);
    }
  }
</style>

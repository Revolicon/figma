<template>
  <component
    :is="ButtonTag"
    :href="href"
    :target="href && '_blank'"
    :class="[
      'button',
      `button--${type}`,
      `button--${variant}`,
      {
        'button--disabled': disabled,
        'button--full': full,
        'button--loading': loading,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  type Type = 'solid' | 'outline'
  type Variant = 'primary' | 'secondary' | 'destructive'

  interface Props {
    [key: string]: any
    type?: Type
    variant?: Variant
    disabled?: boolean
    full?: boolean
    loading?: boolean
    href?: string
  }

  const props = defineProps<Props>()

  const ButtonTag = props.href ? 'a' : 'button'
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .button {
    @extend .text-sm;
    width: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    margin: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 500;
    letter-spacing: 0.005em;
    outline: none;
    text-decoration: none;

    // Variants
    &--primary {
      --solid-background: var(--figma-color-bg-brand);

      --outline-border: var(--figma-color-bg-brand);
      --outline-border-focus: var(--outline-border);
    }
    &--secondary {
      --solid-background: var(--figma-color-text);

      --outline-border: var(--figma-color-text);
      --outline-border-focus: #18a0fb;
    }
    &--destructive {
      --solid-background: var(--figma-color-bg-danger);

      --outline-border: var(--figma-color-bg-danger);
      --outline-border-focus: var(--outline-border);
    }

    // Types
    &--solid {
      background: var(--solid-background);
      color: var(--solid-color, #ffffff);

      &:focus,
      &:focus-within,
      &:active {
        box-shadow: inset 0 0 0 2px var(--figma-color-text-secondary);
      }
    }
    &--outline {
      box-shadow: inset 0 0 0 1px var(--outline-border);
      color: var(--color, var(--figma-color-text));

      &:focus,
      &:focus-within,
      &:active {
        box-shadow: inset 0 0 0 2px var(--outline-border-focus);
      }
    }

    // States
    &--full {
      width: 100%;
    }
    &--disabled {
      --solid-background: var(--figma-color-text-secondary);

      --outline-border: var(--figma-color-text-secondary);
      --outline-border-focus: var(--outline-border);
      --outline-color: var(--figma-color-bg);
      cursor: not-allowed !important;
    }
    &--loading {
      pointer-events: none;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      svg {
        animation: spin 1s linear infinite;
      }
      &:focus {
        box-shadow: inherit;
      }
    }
  }
</style>

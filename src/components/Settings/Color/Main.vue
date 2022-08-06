<template>
  <Section icon="color" title="Color">
    <template #actions>
      <Input v-bind="color" />
    </template>
    <div class="list">
      <button
        v-for="(option, index) in color.list"
        @click="selectColor(option.id)"
        @contextmenu="removeColor(index)"
        class="list-color"
        :class="{
          'list-color--active': option.id === color.active,
        }"
        :style="{
          '--color': `#${option.color}`,
          '--opacity': `${option.opacity}%`,
        }"
        :key="index"
      >
        <span class="list-color__hex" />
        <span class="list-color__opacity" />
      </button>
      <button class="list-new" @click="createColor">
        <Icons name="Plus" size="16" />
      </button>
    </div>
  </Section>
</template>

<script setup>
  import { computed, reactive, watch } from 'vue'
  import { v4 as uuidv4 } from 'uuid'

  import { $post, $raw } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'
  import Input from '@/components/Settings/Color/Input.vue'
  import Icons from '@/components/Icons'

  const settings = useSettingsStore()

  let color = reactive({
    list: settings.state.color,
    active: settings.state.activeColor,
  })

  const selectColor = (id) => {
    color.active = id
  }
  const removeColor = (index) => {
    let list = color.list
    if (list[index].id === color.active) {
      color.active = 'NULL'
    }

    list.splice(index, 1)
    color.list = list
  }
  const createColor = () => {
    color.list.push({
      id: uuidv4(),
      color: (~~(Math.random() * 2 ** 24)).toString(16).padStart(6, '0'),
      opacity: 100,
    })
  }

  watch(color, () => {
    $post('settings/setMultipleData', [
      { key: 'color', value: $raw(color.list) },
      { key: 'activeColor', value: color.active },
    ])
  })
  // $post('settings/removeMultipleData', ['color', 'activeColor'])
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 2px;
  }
  .list-color {
    --border-width: 0;
    cursor: pointer;
    width: 18px;
    height: 18px;
    flex: none;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H4V4H0V0Z' fill='%23E1E1E1'/%3E%3Cpath d='M4 0H8V4H4V0Z' fill='white'/%3E%3Cpath d='M0 4H4V8H0V4Z' fill='white'/%3E%3Cpath d='M4 4H8V8H4V4Z' fill='%23E1E1E1'/%3E%3C/svg%3E%0A");
    background-repeat: repeat;
    box-shadow: inset 0 0 0 var(--border-width, 0) var(--figma-color-bg-secondary);
    position: relative;
    overflow: hidden;
    outline: none;
    border: none;
    padding: 0;

    &__hex {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 18px 0 0 18px;
      border-color: transparent transparent transparent var(--color);
      display: flex;
    }
    &__opacity {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      display: block;
      background: var(--color);
      opacity: var(--opacity);
      bottom: 0;
    }

    &--active {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 6px;
        height: 6px;
        background: #ffffff;
        z-index: 10;
        display: block;
        border-radius: 50%;
      }
    }
  }
  .list-new {
    height: 18px;
    width: 18px;
    flex: none;
    border-radius: 50%;
    background: var(--figma-color-bg-tertiary);
    color: var(--figma-color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    outline: none;
  }
</style>

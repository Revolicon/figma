<template>
  <Section icon="color" title="Color">
    <template #actions>
      <Input v-bind="color" />
    </template>
    <div class="list">
      <button
        v-for="(option, index) in color.list"
        @click="selectColor(index)"
        @contextmenu.prevent.stop="contextRef.showMenu($event, index)"
        class="list-color"
        :class="{
          'list-color--active': option.id === color.active,
        }"
        :style="{
          '--dot-color': tinycolor(option.color).getLuminance() > 0.75 ? '#808080CC' : '#ffffffCC',
          '--border-width': tinycolor(option.color).getLuminance() > 0.75 ? '1px' : '0',
          '--color': `#${option.color}`,
          '--opacity': `${option.opacity}%`,
        }"
        :key="index"
      >
        <span class="list-color__hex" />
        <span class="list-color__opacity" />
      </button>
      <button class="list-new" @click="createColor()">
        <Icons name="Plus" size="16" />
      </button>
    </div>
    <vue-simple-context-menu
      element-id="myFirstMenu"
      ref="contextRef"
      :options="contextOptions"
      @option-clicked="contextHandle"
    />
  </Section>
</template>

<script setup>
  import { reactive, ref, watch } from 'vue'
  import { copyText } from 'vue3-clipboard'
  import { v4 as uuidv4 } from 'uuid'
  import tinycolor from 'tinycolor2'

  import VueSimpleContextMenu from 'vue-simple-context-menu'

  import { $post, $raw } from '@/utils/message'
  import $notify from '@/utils/notify'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'
  import Input from '@/components/Settings/Color/Input.vue'
  import Icons from '@/components/Icons'

  const settings = useSettingsStore()

  let color = reactive({
    list: settings.state.color,
    active: settings.state.activeColor,
  })

  const copyColor = (index) => {
    const item = color.list[index]
    copyText(
      tinycolor(item.color)
        .setAlpha(item.opacity / 100)
        .toRgbString(),
      undefined,
      (error, event) => {
        if (error) {
          $notify('An error occurred in color copying', {
            error: true,
          })
        } else {
          $notify('Color copied successfully')
        }
      }
    )
  }
  const selectColor = (index) => {
    color.active = color.list[index].id
  }
  const removeColor = (index) => {
    let list = color.list

    // Remove active item
    if (list[index].id === color.active) {
      if (index !== 0) {
        color.active = list[0].id
      } else {
        if (list.length > 1) color.active = list[1].id
        if (list.length === 1) {
          createColor('000000')
          color.active = list[1].id
        }
      }
    }

    list.splice(index, 1)
    color.list = list
  }
  const createColor = (hex = null, opacity = 100) => {
    color.list.push({
      id: uuidv4(),
      color: hex || (~~(Math.random() * 2 ** 24)).toString(16).padStart(6, '0'),
      opacity: opacity,
    })
  }

  const contextRef = ref(null)
  const contextOptions = ref([
    {
      name: 'Copy color',
      slug: copyColor,
    },
    {
      name: 'Select color',
      slug: selectColor,
    },
    {
      name: 'Delete color',
      slug: removeColor,
    },
  ])
  const contextHandle = ({ item, option }) => {
    option.slug(item)
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
    --dot-color: #fff;

    cursor: pointer;
    width: 18px;
    height: 18px;
    flex: none;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H4V4H0V0Z' fill='%23E1E1E1'/%3E%3Cpath d='M4 0H8V4H4V0Z' fill='white'/%3E%3Cpath d='M0 4H4V8H0V4Z' fill='white'/%3E%3Cpath d='M4 4H8V8H4V4Z' fill='%23E1E1E1'/%3E%3C/svg%3E%0A");
    background-repeat: repeat;
    border: var(--border-width, 0) solid var(--figma-color-bg-secondary);
    position: relative;
    overflow: hidden;
    outline: none;
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
        background: var(--dot-color);
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

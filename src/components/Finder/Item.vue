<template>
  <div
    class="item"
    :class="[
      [`item--${settings.state.finderLayout}`],
      {
        'item--selected': iconActive,
      },
    ]"
    :title="label ?? name"
    draggable="true"
    @click="iconHandler"
  >
    <div class="item__icon">
      <svg
        :width="iconSvg.width"
        :height="iconSvg.height"
        :viewBox="iconSvg.viewBox.join(' ')"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="iconSvg.path" fill="currentColor" />
      </svg>
    </div>
    <div class="item__text">{{ name }}</div>
  </div>
</template>

<script setup>
  import { computed, getCurrentInstance, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'

  import IconList from '@/icons'

  const router = useRouter()
  const settings = useSettingsStore()

  const settingsColor = computed(() => settings.state.color.find((item) => item.id === settings.state.activeColor))

  const props = defineProps({
    objectID: String,
    name: String,
    label: String,
    type: String,
    unicode: String,
  })

  const iconSvg = computed(() => IconList[props?.name]?.svgs?.[props?.type])
  const iconActive = computed(() => router.currentRoute.value.query?.icon === props.name)
  const iconHandler = () => {
    router.push({
      query: !iconActive.value ? { icon: props.name } : undefined,
    })
  }

  onMounted(() => {
    let element = getCurrentInstance().subTree.el
    element.addEventListener('dragstart', (e) => {
      let dragElement = document.createElement('div')
      dragElement.style.width = `${iconSvg.value.width}px`
      dragElement.style.height = `${iconSvg.value.height}px`
      dragElement.style.position = 'absolute'
      dragElement.style.top = '-100px'
      dragElement.classList.add('drag-element')

      let dragIcon = document.createElement('svg')
      dragIcon.style.color = '#' + settingsColor.value.color
      dragIcon.style.opacity = settingsColor.value.opacity.toString() + '%'
      dragIcon.setAttribute('height', `${iconSvg.value.height}px`)
      dragIcon.setAttribute('viewBox', iconSvg.value.viewBox.join(' '))
      dragIcon.setAttribute('fill', 'currentColor')
      dragIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      dragIcon.innerHTML = `<path d="${iconSvg.value.path}" fill="currentColor" />`

      dragElement.innerHTML = dragIcon.outerHTML
      document.body.appendChild(dragElement)
      e.dataTransfer.setDragImage(dragElement, 0, 0)
    })
    element.addEventListener('dragend', (e) => {
      document.getElementsByClassName('drag-element')[0].remove()
    })
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .item {
    --border-width: 1px;
    --border-color: var(--figma-color-bg-secondary);

    height: 56px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 12px 6px 6px;
    gap: 6px;
    cursor: pointer;

    &__icon {
      height: 16px;
    }
    &__text {
      @extend .text-sm;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      color: var(--figma-color-text-secondary);
      width: 100%;
      text-align: center;
    }

    &--small {
      height: 40px;
      padding: 6px;
    }
    &--small &__text {
      display: none;
    }
    &--selected {
      --border-width: 2px;
      --border-color: var(--figma-color-bg-brand);
    }
    &:hover {
      background: var(--figma-color-bg-secondary);
    }
  }
</style>

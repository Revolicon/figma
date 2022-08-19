<template>
  <div class="item" :title="label ?? name" draggable="true">
    <div class="item__icon">
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.11942 0.343961C4.25747 0.129564 4.495 0 4.75 0H6.77612C7.301 0 7.79817 0.235597 8.13055 0.641834L12.1054 5.5H15.5C16.8807 5.5 18 6.61929 18 8C18 9.38071 16.8807 10.5 15.5 10.5H12.1054L8.13055 15.3582C7.79817 15.7644 7.301 16 6.77612 16H4.75C4.495 16 4.25747 15.8704 4.11942 15.656C3.98137 15.4416 3.96171 15.1718 4.06723 14.9396L6.11678 10.4306L3.61847 10.2745L2.90942 11.2672C2.58092 11.7271 2.05055 12 1.48538 12H1.25C0.559644 12 0 11.4404 0 10.75V5.25C0 4.55964 0.559644 4 1.25 4H1.48538C2.05055 4 2.58092 4.27294 2.90942 4.73283L3.61847 5.72551L6.11678 5.56936L4.06723 1.06035C3.96171 0.82821 3.98137 0.558357 4.11942 0.343961ZM5.91475 1.5L7.93278 5.93965C8.03486 6.16424 8.01997 6.42467 7.89294 6.63616C7.76592 6.84766 7.54301 6.98315 7.29678 6.99854L3.29678 7.24854C3.03849 7.26468 2.79012 7.14652 2.6397 6.93593L1.68882 5.60469C1.64473 5.54297 1.5752 5.50482 1.5 5.50043V10.4996C1.5752 10.4952 1.64473 10.457 1.68882 10.3953L2.6397 9.06407C2.79012 8.85348 3.03849 8.73532 3.29678 8.75146L7.29678 9.00146C7.54301 9.01685 7.76592 9.15234 7.89294 9.36384C8.01997 9.57533 8.03486 9.83576 7.93278 10.0604L5.91475 14.5H6.77612C6.85111 14.5 6.92213 14.4663 6.96961 14.4083L11.1695 9.27507C11.312 9.10097 11.5251 9 11.75 9H15.5C16.0523 9 16.5 8.55228 16.5 8C16.5 7.44772 16.0523 7 15.5 7H11.75C11.5251 7 11.312 6.89903 11.1695 6.72493L6.96961 1.59169C6.92213 1.53366 6.8511 1.5 6.77612 1.5H5.91475Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div class="item__text">{{ name }}</div>
  </div>
</template>

<script setup>
  import { computed, getCurrentInstance, onMounted, ref } from 'vue'
  import { useSettingsStore } from '@/stores/settings'

  const settings = useSettingsStore()
  const settingsColor = computed(() => settings.state.color.find((item) => item.id === settings.state.activeColor))

  const props = defineProps({
    objectID: String,
    name: String,
    label: String,
    type: String,
    unicode: String,
  })

  onMounted(() => {
    let element = getCurrentInstance().subTree.el
    element.addEventListener('dragstart', (e) => {
      let dragElement = document.createElement('div')
      dragElement.style.width = '18px'
      dragElement.style.height = '16px'
      dragElement.style.position = 'absolute'
      dragElement.style.top = '-100px'

      let dragIcon = document.createElement('svg')
      dragIcon.style.color = '#' + settingsColor.value.color
      dragIcon.style.opacity = settingsColor.value.opacity.toString() + '%'
      dragIcon.setAttribute('height', '16px')
      dragIcon.setAttribute('viewBox', '0 0 18 16')
      dragIcon.setAttribute('fill', 'currentColor')
      dragIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      dragIcon.innerHTML =
        '<path d="M4.11942 0.343961C4.25747 0.129564 4.495 0 4.75 0H6.77612C7.301 0 7.79817 0.235597 8.13055 0.641834L12.1054 5.5H15.5C16.8807 5.5 18 6.61929 18 8C18 9.38071 16.8807 10.5 15.5 10.5H12.1054L8.13055 15.3582C7.79817 15.7644 7.301 16 6.77612 16H4.75C4.495 16 4.25747 15.8704 4.11942 15.656C3.98137 15.4416 3.96171 15.1718 4.06723 14.9396L6.11678 10.4306L3.61847 10.2745L2.90942 11.2672C2.58092 11.7271 2.05055 12 1.48538 12H1.25C0.559644 12 0 11.4404 0 10.75V5.25C0 4.55964 0.559644 4 1.25 4H1.48538C2.05055 4 2.58092 4.27294 2.90942 4.73283L3.61847 5.72551L6.11678 5.56936L4.06723 1.06035C3.96171 0.82821 3.98137 0.558357 4.11942 0.343961ZM5.91475 1.5L7.93278 5.93965C8.03486 6.16424 8.01997 6.42467 7.89294 6.63616C7.76592 6.84766 7.54301 6.98315 7.29678 6.99854L3.29678 7.24854C3.03849 7.26468 2.79012 7.14652 2.6397 6.93593L1.68882 5.60469C1.64473 5.54297 1.5752 5.50482 1.5 5.50043V10.4996C1.5752 10.4952 1.64473 10.457 1.68882 10.3953L2.6397 9.06407C2.79012 8.85348 3.03849 8.73532 3.29678 8.75146L7.29678 9.00146C7.54301 9.01685 7.76592 9.15234 7.89294 9.36384C8.01997 9.57533 8.03486 9.83576 7.93278 10.0604L5.91475 14.5H6.77612C6.85111 14.5 6.92213 14.4663 6.96961 14.4083L11.1695 9.27507C11.312 9.10097 11.5251 9 11.75 9H15.5C16.0523 9 16.5 8.55228 16.5 8C16.5 7.44772 16.0523 7 15.5 7H11.75C11.5251 7 11.312 6.89903 11.1695 6.72493L6.96961 1.59169C6.92213 1.53366 6.8511 1.5 6.77612 1.5H5.91475Z" fill="currentColor" />'

      dragElement.innerHTML = dragIcon.outerHTML
      document.body.appendChild(dragElement)
      e.dataTransfer.setDragImage(dragElement, 0, 0)
    })
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .item {
    height: 56px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--figma-color-bg-secondary);
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

    &:hover {
      background: var(--figma-color-bg-secondary);
    }
  }
</style>

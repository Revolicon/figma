<template>
  <ul :id="elementId" class="vue-simple-context-menu" v-click-outside="onClickOutside">
    <li
      v-for="(option, index) in options"
      :key="index"
      @click.stop="optionClicked(option)"
      class="vue-simple-context-menu__item"
      :class="[option.class, option.type === 'divider' ? 'vue-simple-context-menu__divider' : '']"
    >
      <span v-html="option.name" />
    </li>
  </ul>
</template>

<script>
  import vClickOutside from 'click-outside-vue3'

  export default {
    props: {
      elementId: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
    },
    emits: ['menu-closed', 'option-clicked'],
    directives: {
      'click-outside': vClickOutside.directive,
    },
    data() {
      return {
        item: null,
        menuHeight: null,
        menuWidth: null,
      }
    },
    computed: {
      onClickOutside() {
        return {
          handler: this.hideContextMenu,
          events: ['contextmenu', 'click'],
        }
      },
    },
    methods: {
      showMenu(event, item) {
        this.item = item

        let menu = document.getElementById(this.elementId)
        if (!menu) {
          return
        }

        if (!this.menuWidth || !this.menuHeight) {
          menu.style.visibility = 'hidden'
          menu.style.display = 'block'
          this.menuWidth = menu.offsetWidth
          this.menuHeight = menu.offsetHeight
          menu.removeAttribute('style')
        }

        if (this.menuWidth + event.pageX >= window.innerWidth) {
          menu.style.left = event.pageX - this.menuWidth + 2 + 'px'
        } else {
          menu.style.left = event.pageX - 2 + 'px'
        }

        let navigationHeight = event?.path?.find((p) => p.className === 'content')?.offsetTop ?? 0
        if (this.menuHeight + event.pageY >= window.innerHeight) {
          menu.style.top = event.pageY - this.menuHeight - navigationHeight + 2 + 'px'
        } else {
          menu.style.top = event.pageY - navigationHeight - 2 + 'px'
        }

        menu.classList.add('vue-simple-context-menu--active')
      },
      hideContextMenu() {
        const element = document.getElementById(this.elementId)
        if (element) {
          element.classList.remove('vue-simple-context-menu--active')
          this.$emit('menu-closed')
        }
      },
      optionClicked(option) {
        this.hideContextMenu()
        this.$emit('option-clicked', {
          item: this.item,
          option: option,
        })
      },
      onEscKeyRelease(event) {
        if (event.keyCode === 27) {
          this.hideContextMenu()
        }
      },
    },
    mounted() {
      document.body.addEventListener('keyup', this.onEscKeyRelease)
    },
    beforeUnmount() {
      document.removeEventListener('keyup', this.onEscKeyRelease)
    },
  }
</script>

<style lang="scss">
  .vue-simple-context-menu {
    background: #1e1e1e;
    //border: 0.5px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15), 0 5px 17px rgba(0, 0, 0, 0.2), inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: none;
    left: 0;
    list-style: none;
    margin: 0;
    position: absolute;
    top: 0;
    z-index: 1000000;
    padding: 6px 0;
    min-width: 140px;

    &__item {
      color: #ffffff;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 16px;
      height: 24px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.005em;

      &:hover {
        background: var(--figma-color-bg-brand);
      }
    }
    &__divider {
      background-color: rgba(255, 255, 255, 0.1);
      height: 1px;
      width: 100%;
      margin: 8px 0;
      pointer-events: none;
    }

    &--active {
      display: block;
    }
  }
</style>

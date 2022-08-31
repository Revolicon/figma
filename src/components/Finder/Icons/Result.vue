<template>
  <div class="result" ref="result">
    <template v-if="state">
      <div class="result-empty" v-if="state.hits.length < 1">
        <svg
          style="color: var(--figma-color-text-secondary)"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 14C12.3284 14 13 13.1046 13 12C13 10.8954 12.3284 10 11.5 10C10.6716 10 10 10.8954 10 12C10 13.1046 10.6716 14 11.5 14Z"
            fill="currentColor"
          />
          <path
            d="M22 12C22 13.1046 21.3284 14 20.5 14C19.6716 14 19 13.1046 19 12C19 10.8954 19.6716 10 20.5 10C21.3284 10 22 10.8954 22 12Z"
            fill="currentColor"
          />
          <path
            d="M10.0805 23.2462C10.8486 21.957 12.5781 20 16 20C19.4219 20 21.1514 21.957 21.9195 23.2462C22.1839 23.6901 21.754 24.1278 21.2548 23.9654C21.0581 23.9014 20.8807 23.7924 20.715 23.6708C20.1745 23.2742 18.6952 22.4175 16 22.4175C13.3048 22.4175 11.8255 23.2742 11.285 23.6708C11.1193 23.7924 10.9419 23.9014 10.7452 23.9654C10.246 24.1278 9.81608 23.6901 10.0805 23.2462Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z"
            fill="currentColor"
          />
        </svg>
        <div class="icons-empty__title">No icons found</div>
        <Button href="https://revolicon.com">Request icon</Button>
      </div>
      <template v-else>
        <div v-observe-visibility="visibilityPrevious" />
        <div class="result-list" :class="`result-list--${settings.state.finderLayout}`">
          <Item v-for="item in state.hits" v-bind="item" :type="item.style" :key="item.objectID" />
        </div>
        <div v-observe-visibility="visibilityMore" />
      </template>
    </template>
  </div>
</template>

<script setup>
  import { onMounted, getCurrentInstance, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'

  import Item from '@/components/Finder/Icons/Item.vue'

  const settings = useSettingsStore()
  const router = useRouter()
  const route = useRoute()

  const result = ref(null)

  onMounted(() => {
    const element = getCurrentInstance().subTree.el
    element.addEventListener('scroll', () => {
      router.push({
        query: {
          ...route.query,
          scroll: element.scrollTop,
        },
      })
    })
  })
</script>
<script>
  import { createWidgetMixin } from 'vue-instantsearch/vue3/es'
  import { connectInfiniteHits } from 'instantsearch.js/es/connectors'

  export default {
    mixins: [createWidgetMixin({ connector: connectInfiniteHits })],
    methods: {
      visibilityPrevious(isVisible, e) {
        if (isVisible && !this.state.isFirstPage) {
          this.state.showPrevious()
        }
      },
      visibilityMore(isVisible, e) {
        if (isVisible && !this.state.isLastPage) {
          this.state.showMore()
        }
      },
    },
    watch: {
      $route(newValue, oldValue) {
        this.$nextTick(() => {
          this.$refs.result.scrollTop = newValue.query.scroll ?? 0
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .result {
    height: 100%;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: grid;
    padding: 6px;

    &-list {
      display: grid;
      align-content: baseline;
      height: 100%;
      width: 100%;
      gap: 8px;

      &--small {
        grid-template-columns: repeat(5, 1fr);
      }
      &--medium {
        grid-template-columns: repeat(3, 1fr);
      }
      &--large {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &-empty {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;

      &__title {
        @extend .text-md;
        font-weight: 500;
        color: var(--figma-color-text);
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>

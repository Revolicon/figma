<template>
  <Section icon="size" title="Size">
    <div class="size">
      <Input
        class="size__input"
        variant="small"
        v-model="input.size"
        @focus="$event.currentTarget.select()"
        @blur="inputHandler(input.size)"
        @keydown.enter="$event.currentTarget.blur()"
      />
    </div>
  </Section>
</template>

<script setup>
  import { reactive, ref, watch } from 'vue'

  import { $post, $raw } from '@/utils/message'

  import { useSettingsStore } from '@/stores/settings'

  import Section from '@/components/Settings/Section.vue'
  import Input from '@/components/Input.vue'

  const settings = useSettingsStore()

  const size = ref(settings.state.size)
  const input = reactive({
    size: `${size.value}px`,
  })

  const inputHandler = (inputSize) => {
    let sizeValue = inputSize
    try {
      sizeValue = new Function('return ' + sizeValue.replace(/[^-()\d/*+.]/g, ''))()
    } catch (e) {
      sizeValue = size.value
    }
    if (isNaN(sizeValue)) sizeValue = size.value
    if (sizeValue <= 0) sizeValue = 1
    if (sizeValue % 1 !== 0) sizeValue = sizeValue.toFixed(2)

    // Only integer value is allowed
    // sizeValue = parseInt(sizeValue)

    size.value = sizeValue
    input.size = `${sizeValue}px`
  }

  watch(size, (newValue) => {
    $post('settings/setData', {
      key: 'size',
      value: newValue,
    })
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .size {
    display: flex;
    align-items: center;

    &__input {
      flex: 1;
      min-width: 1px;
      text-align: center;
    }
  }
</style>

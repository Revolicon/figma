<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label for="key">
      <Input
        full
        center
        type="text"
        name="key"
        id="key"
        ref="input"
        placeholder="Private Beta Key"
        maxLength="19"
        minLength="19"
        v-bind="{ disabled: loading }"
        v-model="key"
      />
    </label>
    <div class="form__actions">
      <Button full variant="primary" type="solid" :loading="loading">Continue</Button>
      <Button full variant="secondary" type="outline" href="https://revolicon.com">Join the waitlist</Button>
    </div>
  </form>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import { useSettingsStore } from '@/stores/settings'

  import Button from '@/components/Button'
  import Input from '@/components/Input.vue'

  const settings = useSettingsStore()
  const router = useRouter()

  const loading = ref(false)
  const input = ref(null)
  const key = ref('')

  const handleSubmit = () => {
    loading.value = true
  }

  onMounted(() => {
    input.value.innerRef().focus()
  })
</script>

<style scoped lang="scss">
  @import '/src/styles/variables';

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;

    &__actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>

<template>
  <form class="form" onSubmit="{handleSubmit}">
    <label for="key">
      <Input
        autoFocus
        full
        center
        type="text"
        name="key"
        id="key"
        placeholder="Private Beta Key"
        maxLength="19"
        minLength="19"
        :disabled="loading"
        v-model="key"
      />
      -
      {{ key }}
    </label>
    <div class="form__actions">
      <Button full variant="primary" type="solid" :loading="loading">Continue</Button>
      <Button full variant="secondary" type="outline" href="https://revolicon.com">Join the waitlist</Button>
    </div>
  </form>
</template>

<script setup>
  import { computed, ref } from 'vue'

  import { useSettingsStore } from '@/stores/settings'

  import Button from '@/components/Button'
  import Input from '@/components/Input.vue'

  const settings = useSettingsStore()

  const loading = ref(false)
  const key = ref('')
</script>

<style scoped lang="scss">
  @import '../src/styles/variables';

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

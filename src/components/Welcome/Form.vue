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
      <Button full variant="primary" type="solid" :loading="loading">
        <template v-if="!loading">Continue</template>
        <Icons name="Loading" size="16" spin v-else />
      </Button>
      <Button full variant="secondary" type="outline" href="https://revolicon.com">Join the waitlist</Button>
    </div>
  </form>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import axios from 'axios'

  import { useSettingsStore } from '@/stores/settings'
  import setNotify from '@/utils/notify'
  import { $post } from '@/utils/message'

  import Icons from '@/components/Icons'
  import Button from '@/components/Button'
  import Input from '@/components/Input.vue'

  const { settings } = useSettingsStore()
  const router = useRouter()

  const loading = ref(false)
  const input = ref(null)
  const key = ref('')

  const messages = {
    KEY_NOT_FOUND: 'Your key is invalid, please try again.',
    FORM_NOT_VALIDATE: 'An error occurred while submitting your data.',
    DATABASE_ERROR: 'An unexpected error occurred in the database.',
    LOGIN_SUCCESS: 'Beta key activation was successful.',
  }

  const handleSubmit = () => {
    if (!key || key.value.length !== 19) return input.value.setFocus()
    loading.value = true
    $post('user', (userData) => {
      axios
        .post('https://api.revolicon.com/invite', {
          key: key.value,
          figmaId: userData.id,
          figmaName: userData.name,
          figmaData: userData,
        })
        .then((response) => {
          // setNotify(messages[response.data.message])
          $post('settings/setData', {
            key: 'betaKey',
            value: key.value,
          })
        })
        .catch((error) => {
          setNotify(messages[error.response.data.message], {
            error: true,
          })
        })
        .finally(() => (loading.value = false))
    })
  }

  onMounted(() => {
    input.value.setFocus()
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

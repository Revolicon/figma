<template>
  <Navigations>
    <template #accessory>
      <IconButton icon="Back" />
      <div>Settings</div>
    </template>
    <IconButton icon="Help" href="https://revolicon.com/help" />
  </Navigations>
  <div class="content">
    <SimpleBar data-simplebar-auto-hide="false">
      <Section icon="size" title="Size"></Section>
      <Section icon="frame" title="Frame"></Section>
      <Color />
      <Section icon="finder" title="Finder"></Section>
      <Section icon="quickactions" title="Quick actions"></Section>
      <Section icon="appearance" title="Appearance"></Section>
      <Section title="Other">
        <Button full @click="removeBetaKey">Logout</Button>
        <Button variant="destructive" full @click="removeAllData">
          <template v-if="!sure">Reset All Settings</template>
          <template v-else>Are You Sure</template>
        </Button>
      </Section>
    </SimpleBar>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { SimpleBar } from 'simplebar-vue3'

  import { $post } from '@/utils/message'

  import Button, { IconButton } from '@/components/Button'

  import Navigations from '@/components/Navigations.vue'
  import Section from '@/components/Settings/Section.vue'
  import Color from '@/components/Settings/Color'

  const sure = ref(false)

  const removeBetaKey = () => $post('settings/removeData', 'betaKey')
  const removeAllData = () => {
    if (sure.value) $post('settings/removeAllData')
    sure.value = !sure.value
  }
</script>

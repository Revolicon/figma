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
        <Button variant="destructive" full @click="removeBetaKey">Logout</Button>
      </Section>
    </SimpleBar>
  </div>
</template>

<script setup>
  import { SimpleBar } from 'simplebar-vue3'

  import { $post } from '@/utils/message'

  import Button, { IconButton } from '@/components/Button'

  import Navigations from '@/components/Navigations.vue'
  import Section from '@/components/Settings/Section.vue'
  import Color from '@/components/Settings/Color'

  const removeBetaKey = () => {
    $post('settings/removeData', 'betaKey')
  }
</script>

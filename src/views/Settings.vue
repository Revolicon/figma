<template>
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
</template>

<script setup>
  import { SimpleBar } from 'simplebar-vue3'

  import { $post } from '@/utils/message'

  import Button from '@/components/Button'

  import Section from '@/components/Settings/Section.vue'
  import Color from '@/components/Settings/Color'

  const removeBetaKey = () => {
    $post('settings/removeData', 'betaKey')
  }
</script>

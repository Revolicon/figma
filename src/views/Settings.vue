<template>
  <Navigations>
    <template #accessory>
      <IconButton icon="Back" @click="router.back()" />
      <div>Settings</div>
    </template>
    <IconButton icon="Help" href="https://revolicon.com/help" />
  </Navigations>
  <div class="content">
    <SimpleBar data-simplebar-auto-hide="false">
      <Size />
      <Frame />
      <Color />
      <Finder />
      <QuickActions />
      <Appearance />
      <Section title="Other">
        <Button full @click="downloadAllData">Export All Data</Button>
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
  import { useRouter } from 'vue-router'

  import FileSaver from 'file-saver'
  import { SimpleBar } from 'simplebar-vue3'

  import { $post } from '@/utils/message'

  import Button, { IconButton } from '@/components/Button'

  import Navigations from '@/components/Navigations.vue'
  import Section from '@/components/Settings/Section.vue'

  import Size from '@/components/Settings/Size'
  import Frame from '@/components/Settings/Frame'
  import Color from '@/components/Settings/Color'
  import Finder from '@/components/Settings/Finder'
  import QuickActions from '@/components/Settings/QuickActions'
  import Appearance from '@/components/Settings/Appearance'

  const router = useRouter()

  const sure = ref(false)

  const removeBetaKey = () => $post('settings/removeData', 'betaKey')
  const removeAllData = () => {
    if (sure.value) $post('settings/removeAllData')
    sure.value = !sure.value
  }
  const downloadAllData = () => {
    $post('settings/getMultipleData', function (data) {
      FileSaver.saveAs(
        new File([JSON.stringify(data, undefined, 2)], 'Revolicon Backup.json', { type: 'text/plain;charset=utf-8' })
      )
    })
  }
</script>

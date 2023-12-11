<script setup>
import { useClipboard } from '@vueuse/core'

const source = ref('')
const { text, copy } = useClipboard({ source })
const { entities } = useEntities()

function ourCopy() {
  let values
  if (store.isSparse) {
    values = sparseEntities(entities)
  } else {
    values = entities
  }
  copy(JSON.stringify(values))
  toastEm('Copied Entities')
  setTimeout(() => {
    text.value = 'Done'
  }, 1500)
}
</script>
<template>
  <div>
    <VPreviewer />
    <div @click="store.showLeft = !store.showLeft" id="showLeft"></div>
    <div @click="store.showRight = !store.showRight" id="showRight"></div>
    <div @click="toggleTheme" id="themeToggler"></div>
    <div id="showOverlay" @click="store.showOverlay = !store.showOverlay" />
    <div @click="ourCopy()" id="copyEntities"></div>
    <div @click="store.isSparse = !store.isSparse" id="toggleSparse"></div>
  </div>
</template>

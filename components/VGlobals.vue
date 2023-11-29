<script setup>
import { useDark, useToggle, useClipboard } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const source = ref('')
const { text, copy, copied } = useClipboard({ source })
const { entities } = useEntities()

const handleToggle = () => {
  var htmlElement = document.getElementsByTagName('html')[0]
  const newColor = isDark.value ? 'var(--background-color-light)' : 'var(--background-color-dark)'
  document.body.style.background = newColor
  htmlElement.style.backgroundColor = newColor
  toggleDark()
}

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
    <div @click="handleToggle" id="dark"></div>

    <div id="showOverlay" @click="store.showOverlay = !store.showOverlay" />
    <div @click="ourCopy()" id="copyEntities"></div>
    <div @click="store.isSparse = !store.isSparse" id="toggleSparse"></div>
  </div>
</template>

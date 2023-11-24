<script setup>
import { useDark, useToggle } from '@vueuse/core'

const hidden = ref(true)
const isDark = useDark()
const toggleDark = useToggle(isDark)

function toggleHidden() {
  hidden.value = !hidden.value
}

function handleToggle() {
  var htmlElement = document.getElementsByTagName('html')[0]
  const theme = isDark.value
    ? 'var(--background-color-light)'
    : 'var(--background-color-dark)'
  document.body.style.background = theme
  htmlElement.style.backgroundColor = theme
  toggleDark()
}
</script>
<template>
  <div
    class="absolute left-5 bottom-5 h-1/2 w-1/2 bg-white rounded-lg p-2 border"
    :class="{
      hidden: hidden,
    }"
  >
    <h1>Light/Dark Mode</h1>
    <VToggle @change="handleToggle" :enabled="isDark"/>
    <div
      id="devTools"
      @click="toggleHidden"
    />
  </div>
</template>
<style></style>

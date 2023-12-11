<script setup>
// import { useDark, useToggle } from '@vueuse/core'
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
const handleToggle = () => {
  if (process.client) {
    const isDark = document.getElementsByTagName('html')[0].classList.contains('dark')
    let html = document.getElementsByTagName('html')[0]
    if (isDark) {
      localStorage.theme = 'light'
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
      localStorage.theme = 'dark'
    }
    html.classList.toggle('dark')
    html.classList.toggle('dark-mode')
  }
}

const hidden = ref(true)
// const isDark = useDark()
// const toggleDark = useToggle(isDark)

function toggleHidden() {
  hidden.value = !hidden.value
}
</script>
<template>
  <div
    class="absolute left-5 bottom-5 h-1/2 w-1/2 bg-white dark:bg-slate-900 rounded-lg p-2 border"
    :class="{
      hidden: hidden,
    }"
  >
    <h1 class="dark:text-white">Light/Dark Mode</h1>
    <VToggle @change="handleToggle" :enabled="isDark" />
    <div id="devTools" @click="toggleHidden" />
  </div>
</template>
<style></style>

<!-- Info Ignore warning
    https://github.com/nuxt/nuxt/issues/15240
    "Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application.
    Consider removing <NuxtLayout> from app.vue and using it in your pages."
 -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Enable global dark
// import { useDark, useToggle } from '@vueuse/core'
// const isDark = useDark()

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css',
    },
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js',
      defer: true,
    },
    {
      src: 'https://unpkg.com/vue@3/dist/vue.global.js',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js',
      tagPosition: 'head',
    },
    {
      src: 'https://unpkg.com/hotkeys-js/dist/hotkeys.min.js',
      tagPosition: 'head',
    },
    // Inline
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Hello There")',
      tagPosition: 'bodyClose',
    },
    // Public folder
    {
      type: 'text/javascript',
      src: 'js/AppScript.js',
      tagPosition: 'bodyClose',
    },
  ],
})
</script>

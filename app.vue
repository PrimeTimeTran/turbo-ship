<script>
import { createHead, useHead } from 'unhead'
createHead()

useHead({
  script: [
    {
      innerHTML: 'console.log("App.vue Loading")',
      tagPosition: 'head',
    },
  ],
})
</script>

<!-- Info: Ignore Warning
  https://github.com/nuxt/nuxt/issues/15240
  "Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application.
  Consider removing <NuxtLayout> from app.vue and using it in your pages."
-->
<template>
  <!-- Hello World -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

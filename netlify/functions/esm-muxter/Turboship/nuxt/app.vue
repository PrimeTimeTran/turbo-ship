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
  <!-- document.getElementById('globalModal').click() to toggle() -->
  <label for="globalModal"></label>
  <input type="checkbox" id="globalModal" class="modal-toggle" />
  <div class="modal w-screen h-screen flex justify-center items-center">
    <div class="flex justify-center items-center">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

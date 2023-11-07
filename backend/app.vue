<!-- 
  Ignore warning
    "Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application.
    Consider removing <NuxtLayout> from app.vue and using it in your pages."
  
  https://github.com/nuxt/nuxt/issues/15240
 -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/Chart.min.css',
    },
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js',
      tagPosition: 'head',
    },
  ],
})
</script>

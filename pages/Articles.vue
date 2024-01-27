<script setup>
definePageMeta({
  layout: 'articles-layout',
})

useHead({
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
})
</script>
<template>
  <NuxtPage />
</template>

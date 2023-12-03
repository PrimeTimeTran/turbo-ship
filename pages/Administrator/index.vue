<template>
  <ContentDoc class="prose dark:prose-invert pb-32 w-11/12 nuxt-content" />
</template>

<script setup>
import { useHead } from 'unhead'
useHead({
  script: [
    {
      innerHTML: 'console.log("Admin Index loading...")',
      tagPosition: 'head',
    },
  ],
})

definePageMeta({
  layout: 'admin-layout',
})
</script>

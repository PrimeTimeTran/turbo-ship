<template>
  <h1>Admin</h1>
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

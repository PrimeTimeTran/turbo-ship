<template>
  <div class="pt-24">
    <ContentDoc class="prose dark:prose-invert" />
  </div>
</template>

<script setup>
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'NuxtOverflow',
  screen_name: 'Tags',
})
</script>

<script setup>
definePageMeta({
  layout: 'blog-layout',
})
// const route = useRoute()
// // const { gtag } = useGtag()
// // gtag('event', 'screen_view', {
// //   app_name: 'NuxtOverflow',
// //   screen_name: route.fullPath,
// // })

// let data = await queryContent(route.fullPath).find()

// const weird = data[data.length - 1]._path == route.fullPath
// if (weird) {
//   const currentLast = data.pop()
//   data.unshift(currentLast)
// }
// let thumbnail = ''
// const setupThumbnail = () => {
//   const article = data.find((i) => i._path == route.fullPath)
//   if (article) {
//     thumbnail = article.thumbnail?.slice(7)
//   }
// }
// setupThumbnail()
</script>

<template>
  <ContentDoc class="prose dark:prose-invert" />
</template>

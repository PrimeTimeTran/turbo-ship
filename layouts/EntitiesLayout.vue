<script setup>
useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Entity scripts loading...")',
      tagPosition: 'head',
    },
    {
      type: 'public/js/Hotkeys.js',
      tagPosition: 'bodyClose',
    },
  ],
})
// Maybe SSR makes this break?
// ensureLoad(scriptUrls.hotkeys)
</script>
<template>
  <TheNavbar />
  <div class="flex flex-row max-w-screen w-screen bg-base-100">
    <div v-if="store.showLeft" class="lg:min-w-72 lg:max-w-72 lg:w-72 h-screen overflow-auto scrollbar-hide">
      <EntitiesTheLeft />
    </div>
    <div class="flex flex-1 h-screen max-h-screen overflow-auto">
      <slot />
    </div>
    <div
      v-if="store.showRight"
      class="hidden xl:flex xl:min-w-64 xl:max-w-64 xl:w-64 h-screen overflow-auto scrollbar-hide"
    >
      <EntitiesTheRight />
    </div>
  </div>
  <VDevTools />
</template>

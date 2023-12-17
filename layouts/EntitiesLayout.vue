<script setup>
// Doesn't work =(
useHead({
  link: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css',
    //   tagPosition: 'head',
    // },
  ],
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Entity scripts loading...")',
      tagPosition: 'head',
    },
    {
      type: 'public/js/TShortcuts.js',
      tagPosition: 'bodyClose',
    },
  ],
})
// ensureLoad(scriptUrls.hotkeys)
</script>
<template>
  <TheNavbar />
  <div
    class="flex flex-row justify-center align-middle items-center bg-white dark:bg-slate-950 h-screen overflow-hidden scrollbar-hide min-w-max"
  >
    <div v-if="store.showLeft" class="lg:min-w-72 lg:max-w-72 lg:w-72 h-screen overflow-auto scrollbar-hide">
      <EntitiesTheLeft />
    </div>
    <div class="flex grow h-screen overflow-hidden scrollbar-hide justify-center items-center min-w-[40%]">
      <slot />
    </div>
    <div
      v-if="store.showRight"
      class="hidden lg:flex lg:min-w-64 lg:max-w-64 lg:w-64 h-screen overflow-auto scrollbar-hide"
    >
      <EntitiesTheRight />
    </div>
  </div>
  <VDevTools />
  <VGlobals />
</template>

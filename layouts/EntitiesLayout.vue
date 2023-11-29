<script setup>
useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Entity scripts loading...")',
      tagPosition: 'head',
    },
  ],
})
ensureLoad(scriptUrls.hotkeys)
</script>
<template>
  <TheNavbar />
  <div
    class="flex flex-row justify-center align-middle items-center dark:bg-slate-950 h-screen overflow-hidden scrollbar-hide pt-24 min-w-max"
  >
    <div v-if="store.showLeft" class="lg:min-w-72 lg:max-w-72 lg:w-72 h-screen overflow-auto scrollbar-hide">
      <EntitiesBodyLeft />
    </div>
    <div class="flex grow h-screen overflow-hidden scrollbar-hide justify-center items-center min-w-[40%]">
      <slot />
    </div>
    <div
      v-if="store.showRight"
      class="hidden lg:flex lg:min-w-64 lg:max-w-64 lg:w-64 h-screen overflow-auto scrollbar-hide"
    >
      <EntitiesBodyRight />
    </div>
  </div>
  <VDevTools />
  <VGlobals />
</template>

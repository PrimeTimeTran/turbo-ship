<script setup>
useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Entity scripts loading...")',
      tagPosition: 'head',
    },
    // {
    //   src: 'https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js',
    //   tagPosition: 'head',
    // },
    {
      type: 'text/javascript',
      src: 'js/Hotkeys.js',
      tagPosition: 'head',
    },
    // {
    //   type: 'text/javascript',
    //   src: 'js/Hotkeys.js',
    //   tagPosition: 'head',
    // },
  ],
})
ensureLoad('https://unpkg.com/hotkeys-js@3.12.0/dist/hotkeys.min.js')
</script>
<template>
  <TheNavbar />
  <div class="flex flex-row dark:bg-slate-950 pt-12 h-screen overflow-hidden scrollbar-hide">
    <!-- class="absolute left-0 grid grid-cols-12 w-screen h-screen dark:bg-slate-950 pt-12" -->
    <div class="hidden md:flex md:flex-2 md:visible h-screen overflow-auto scrollbar-hide">
      <!-- class="p-2 hidden invisible md:flex md:visible md:col-span-2 lg:col-span-2 border-r dark:border-r-gray-600 overflow-auto scrollbar-hide" -->
      <EntitiesBodyLeft />
    </div>
    <div class="flex flex-4 h-screen overflow-hidden scrollbar-hide">
      <!-- class="col-span-12 md:col-span-10 lg:col-span-7 overflow-auto scrollbar-hide flex flex-col" -->
      <slot />
    </div>
    <div class="hidden md:flex md:flex-3 md:visible h-screen overflow-auto scrollbar-hide">
      <!-- class="p-2 hidden invisible col-span-0 lg:col-span-3 lg:flex lg:flex-col lg:visible lg:justify-start lg:items-start overflow-auto scrollbar-hide border-l dark:border-l-gray-600" -->
      <EntitiesBodyRight />
    </div>
    <VDevTools />
    <VGlobals />
  </div>
</template>

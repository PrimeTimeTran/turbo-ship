<!-- I is Internal to Turboship -->
<script setup>
// useHead({
//   script: [
//     {
//       type: 'text/javascript',
//       innerHTML: 'console.log("Entity scripts loading...")',
//       tagPosition: 'head',
//     },
//     {
//       type: 'public/js/Hotkeys.js',
//       tagPosition: 'bodyClose',
//     },
//   ],
// })
// ensureLoad(scriptUrls.hotkeys)
</script>
<template>
  <TGlobalContainer>
    <template v-slot:navbar>
      <IEntitiesNavbar />
    </template>
    <template v-slot:drawer-left>
      <TDrawerLeft />
    </template>
    <template v-slot:left-sidebar>
      <div v-if="store.showLeft" class="lg:min-w-72 lg:max-w-72 lg:w-72 h-screen overflow-auto scrollbar-hide">
        <EntitiesTheLeft />
      </div>
    </template>
    <template v-slot:drawer-right>
      <TDrawerRight />
      <div
        v-if="store.showRight"
        class="hidden xl:flex xl:min-w-64 xl:max-w-64 xl:w-64 h-screen overflow-auto scrollbar-hide"
      >
        <EntitiesTheRight />
      </div>
    </template>
    <template v-slot:scripts>
      <TDevTools />
    </template>
    <template v-slot:default>
      <slot />
    </template>
  </TGlobalContainer>
</template>

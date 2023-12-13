<script setup>
useHead({
  link: [],
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("TMainLayout")',
      tagPosition: 'bodyClose',
    },
  ],
})
</script>
<template>
  <TTheLeftDrawer>
    <template v-slot:navbar>
      <TTheNavbar />
    </template>
    <template v-slot:sidebar>
      <TTheLeftDrawerContent />
    </template>
    <template v-slot:scripts>
      <TGlobalShortcuts />
    </template>
    <template v-slot:default>
      <TTheRightDrawer>
        <slot />
      </TTheRightDrawer>
    </template>
  </TTheLeftDrawer>
</template>

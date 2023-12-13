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
    <!-- 
      Feels convoluted but by taking a dependency injection approach we add a lot of flexibility
    -->
    <template v-slot:navbar>
      <TTheNavbar />
    </template>
    <template v-slot:left-drawer>
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

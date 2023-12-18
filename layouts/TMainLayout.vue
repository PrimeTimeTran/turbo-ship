<script setup>
useHead({
  link: [],
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("TMainLayout")',
      tagPosition: 'bodyClose',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js',
      tagPosition: 'head',
    },
  ],
})
ensureLoad('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js')
</script>
<template>
  <!-- 
    Feels convoluted but by taking a dependency injection approach we add a lot of flexibility
  -->
  <TGlobalContainer>
    <template v-slot:navbar>
      <TNavbar />
    </template>
    <template v-slot:drawer-left>
      <TDrawerLeft />
    </template>
    <template v-slot:left-sidebar>
      <AdminTheLeftSidebar />
    </template>
    <template v-slot:drawer-right>
      <TDrawerRight />
    </template>
    <template v-slot:scripts></template>
    <template v-slot:default>
      <slot />
    </template>
  </TGlobalContainer>
</template>

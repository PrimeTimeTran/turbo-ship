<template>
  <TGlobalContainer>
    <template v-slot:navbar>
      <!-- <TNavbar /> -->
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

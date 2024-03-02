<script setup></script>
<template>
  <div>
    <TGlobalContainer>
      <template v-slot:navbar>
        <!-- <TNavbar /> -->
      </template>
      <template v-slot:left-drawer>
        <TDrawerLeft />
      </template>
      <template v-slot:left-sidebar>
        <AdminTheLeftSidebar />
      </template>
      <template v-slot:right-drawer>
        <TDrawerRight />
      </template>
      <template v-slot:default>
        <slot />
        <ChatBar />
      </template>
      <template v-slot:scripts></template>
    </TGlobalContainer>
  </div>
</template>

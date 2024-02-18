<script setup>
definePageMeta({
  layoutTransition: true,
})
</script>
<template>
  <div class="dark:bg-base-100">
    <TheNavbar />
    <slot />
  </div>
</template>

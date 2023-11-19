<!-- https://content.nuxt.com/usage/markdown -->
<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
</script>

<template>
  <div
    v-if="slots.info"
    class="flex flex-row items-center text-center p-0 px-2 border bg-blue-400 text-white dark:bg-blue-900 dark:border-gray-700 rounded-lg mt-3"
  >
    <font-awesome-icon
      class="mr-2"
      color="white"
      icon="fa-solid fa-circle-info"
    />
    <slot name="info" />
  </div>
</template>

<script setup>
const props = defineProps(['state', 'text', 'icon'])
</script>
<template>
  <button
    @click="emit('click')"
    class="btn btn-ghost flex text-black/75 dark:text-white hover:text-green-400 dark:hover:text-green-400"
    :class="{
      'justify-start': state.leftOpen,
    }"
  >
    <span v-if="icon" class="h-6 w-6">
      <component :is="icon" />
    </span>
    <span v-text="text" v-if="state.leftOpen" />
  </button>
</template>

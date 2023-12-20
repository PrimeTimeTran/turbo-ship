<script setup>
const props = defineProps(['state', 'text', 'icon', 'focused'])
const emit = defineEmits(['click'])
</script>
<template>
  <button
    @click="emit('click')"
    class="btn btn-ghost flex primary-content hover:text-green-400 dark:hover:text-green-400"
    :class="{
      'text-green-400': focused,
      'hover:text-white': focused,
      'justify-start': state.leftOpen,
    }"
  >
    <span v-if="icon" class="h-6 w-6">
      <component :is="icon" />
    </span>
    <span v-text="text" v-if="state.leftOpen" />
  </button>
</template>

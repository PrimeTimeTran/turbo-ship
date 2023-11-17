<script setup>
const props = defineProps(['showRelationships', 'onToggleRelationships'])
</script>
<template>
  <div
    v-if="showRelationships"
    class="flex flex-grow bg-white rounded shadow-md mt-2 p-1"
  >
    <label class="ml-2 font-bold text-gray-500 text-sm"> Relationships </label>
  </div>
</template>

<script setup>
const { entities } = useEntities()
</script>
<template>
  <div class="bg-white dark:bg-slate-950 dark:text-white overflow-auto scrollbar-hide">
    <div role="group" class="align-middle items-center text-center ml-6 rounded-md hidden"></div>
    <pre class="font-sm" v-if="store.isSparse">{{ sparseEntities(entities) }}</pre>
    <pre class="font-sm" v-else>{{ entities }}</pre>
  </div>
</template>

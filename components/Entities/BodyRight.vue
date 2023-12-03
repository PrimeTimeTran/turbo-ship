<script setup>
const { entities } = useEntities()
</script>
<template>
  <div class="bg-white dark:bg-slate-950 dark:text-white overflow-auto scrollbar-hide pt-8">
    <pre class="font-sm" v-if="store.isSparse" v-text="sparseEntities(entities)" />
    <pre class="font-sm" v-else v-text="entities" />
  </div>
</template>

<script setup>
const { entities } = useEntities()

</script>
<template>
  <div v-if="store.showRight" class="bg-white dark:bg-slate-950 dark:text-white right">
    <div role="group" class="align-middle items-center text-center ml-6 rounded-md hidden">
    </div>
    <pre v-if="store.isSparse">{{ sparseEntities(entities) }}</pre>
    <pre v-else>{{ entities }}</pre>
  </div>
</template>

<style>
.right {
  width: 100%;
  min-width: 100%;
}
.editor {
  width: 100%;
  min-width: 100%;
}
</style>
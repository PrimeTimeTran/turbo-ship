<script setup>
const { entities } = useEntities()
</script>
<template>
  <div class="bg-base-100 overflow-auto scrollbar-hide pt-8 break-normal max-w-screen-lg">
    <pre class="break-words font-sm" v-if="store.isSparse" v-text="sparseEntities(entities)" />
    <pre class="break-words font-sm" v-else v-text="entities" />
  </div>
</template>

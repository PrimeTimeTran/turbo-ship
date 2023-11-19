<script setup>
definePageMeta({
  layout: 'entities-layout',
})
const { entities } = useEntities()
</script>
<template>
  <EntitiesBodyCenter :entities="entities" />
</template>

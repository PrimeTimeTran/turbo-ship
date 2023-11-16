<script setup>
const props = defineProps(['entity', 'idx'])
</script>
<template>
  <section
    :key="entity._id"
    :id="`${entity.name}-${idx}`"
    class="mb-1 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 p-2 mt-2 shadow"
    :class="{
      'bg-opacity-100': entity.showAttributeForm || entity.showAttributes,
    }"
  >
    <EntitiesEntityBody
      :entity="entity"
      :idx="idx + '.'"
    />
    <EntitiesEntityAttributes :entity="entity" />
  </section>
</template>

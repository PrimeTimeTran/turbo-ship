<script setup>
const props = defineProps(['entity', 'entities'])
</script>
<template>
  <section
    :id="entity.name"
    class="mb-1 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 p-2 mt-2 shadow"
    :class="{
      'bg-opacity-100': entity.showAddAttribute || entity.showAttributes,
    }"
  >
    <ModelsEntityComposer
      :entity="entity"
      :entities="entities"
    />
    <ModelsEntityAttributesList
      :key="entity._id"
      :entity="entity"
      :entities="entities"
    />
  </section>
</template>

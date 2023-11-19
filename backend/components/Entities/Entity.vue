<script setup>
const props = defineProps(['entity'])
const entity = ref(props.entity)

const showRelationships = ref(false)
const toggleRelationships = () => {
  showRelationships.value = !showRelationships.value
}
</script>
<template>
  <section
    :key="entity._id"
    :id="`${entity.name}-${entity._id}`"
    class="p-2 m-2 rounded border even:bg-slate-100 odd:bg-zinc-100 shadow"
  >
    <EntitiesEntityTabs
      :entity="entity"
      :toggleRelationships="toggleRelationships"
    />
  </section>
</template>

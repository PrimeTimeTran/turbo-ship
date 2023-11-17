<script setup>
const props = defineProps(['entity', 'idx'])
const entity = ref(props.entity)

const attribute = ref('')

const focusAttr = (item) => {
  if (attribute?.value?._id === item._id) {
    attribute.value = ''
    return
  }
  console.log({ item })
  attribute.value = item
}

const close = (items) => {
  const a = entity.value.attributes.filter(
    (a) => a._id === attribute.value._id
  )[0]
  a.validators = items
}
const showRelationships = ref(false)
const toggleRelationships = (item) => {
  showRelationships.value = !showRelationships.value
}
</script>
<template>
  <div>
    <EntitiesEntityControl
      :idx="idx"
      :entity="entity"
      :focusAttr="focusAttr"
      :toggleRelationships="toggleRelationships"
    />
    <EntitiesEntityAttributeForm
      :entity="entity"
      :focusAttr="focusAttr"
      :focusedAttribute="attribute"
      :selectedType="attribute.type"
      :toggleRelationships="toggleRelationships"
    />
    <EntitiesAttributeDetails
      :focusAttr="focusAttr"
      @close="close"
      :entity="entity"
      :selectedType="attribute.type"
      :focusedAttribute="attribute"
    />
    <EntitiesEntityRelationships :showRelationships="showRelationships" />
  </div>
</template>

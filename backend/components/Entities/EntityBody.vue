<script setup>
const props = defineProps(['entity'])
const entity = ref(props.entity)
const { toggleAttributes } = useEntity()

const attribute = ref('')

const focusAttr = (item) => {
  if (attribute?.value?._id === item._id) {
    attribute.value = ''
    return
  }
  attribute.value = item
}

const close = (items) => {
  const a = entity.value.attributes.filter(
    (a) => a._id === attribute.value._id
  )[0]
  a.validators = items
}
const showRelationships = ref(false)
const toggleRelationships = () => {
  showRelationships.value = !showRelationships.value
}
</script>
<template>
  <div>
    <EntitiesEntityTabs
      :entity="entity"
      :focusAttr="focusAttr"
      :toggleAttributes="toggleAttributes"
      :toggleRelationships="toggleRelationships"
    />
    <EntitiesEntityRelationships :showRelationships="showRelationships" />
  </div>
</template>

<script setup>
const props = defineProps(['attribute'])
const attributeRef = ref(props.attribute)
const type = computed(() => focusedKey)
const focusedKey = computed(() => {
  return attributeRef.value.type === 'relation'
    ? attributeRef.value.relation.type
    : attributeRef.value.type
})

// WIP. Update attribute type from list on click
function onChange(e) {
  const selected = e.target.value
  if (Validator.relationTypes.includes(selected)) {
    props.attribute.relation.type = selected
    props.attribute.type = 'relation'
    attributeRef.value.relation.type = selected
    attributeRef.value.type = 'relation'
  } else {
    props.attribute.type = selected
  }
}
</script>
<template>
  <div
    :key="dataType"
    v-for="dataType of Validator.types"
    class="flex flex-grow odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
  >
    <label class="text-sm rounded p-2 w-full">
      <input
        type="radio"
        class="mr-3"
        v-model="focusedKey"
        @change="onChange"
        name="attributeName"
        :value="Validator.labeledTypes[dataType]?.value"
        :checked="Validator.labeledTypes[dataType]?.value === type"
      />
      {{ Validator.labeledTypes[dataType]?.label }}
    </label>
  </div>
</template>

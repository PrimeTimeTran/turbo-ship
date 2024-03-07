<script setup>
const props = defineProps(['attribute', 'focusedType'])
const attributeRef = ref(props.attribute)
const focusedKey = computed(() => {
  return props.attribute.type === 'relation' ? props.attribute.relation.type : props.attribute.type
})

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
    class="flex flex-grow text-xs hover:cursor-pointer odd:bg-base-200 even:bg-base-300"
  >
    <label class="text-sm rounded p-2 w-full">
      <input
        type="radio"
        @click="onChange"
        v-model="focusedKey"
        name="attributeName"
        class="radio radio-xs radio-success"
        :value="Validator.labeledTypes[dataType]?.value"
        :checked="Validator.labeledTypes[dataType]?.value === focusedType"
      />
      <span class="ml-2" v-text="Validator.labeledTypes[dataType]?.label"></span>
    </label>
  </div>
</template>

<style>
.radio:checked,
.radio[aria-checked='true'] {
  box-shadow: none;
}
</style>

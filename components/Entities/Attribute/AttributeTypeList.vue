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
    class="flex flex-grow text-xs border hover:opacity-90 hover:bg-slate-100 odd:bg-gray-200 odd:hover:bg-slate-200 hover:cursor-pointer dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white dark:hover:brightness-200 dark:border-gray-800"
  >
    <label class="text-sm rounded p-2 w-full">
      <input
        type="radio"
        class="overflow-x-scroll radio radio-xs radio-info"
        @change="onChange"
        v-model="focusedKey"
        name="attributeName"
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

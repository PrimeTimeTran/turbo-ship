<script setup>
const props = defineProps([
  'entity',
  'protectedAttributes',
  'attr',
  'attrIdx',
  'attributeTypes',
  'selectedAttribute',
  'selectedType',
])
console.log({
  selectedType: props.selectedType,
  gogogog: props.selectedAttribute,
})
</script>
<template>
  <div
    class="flex flex-row p-2 my-1 rounded"
    :id="'entityAttributeType' + entity._id + attr.name"
  >
    <div
      v-for="dataType of attributeTypes"
      :key="dataType"
      class="flex flex-grow justify-between space-x-3 rounded bg-white border-2 border-opacity-10 px-2 py-1"
      :class="{
        'hover:border-opacity-100': !protectedAttributes.includes(attr.name),
        'hover:bg-slate-300': !protectedAttributes.includes(attr.name),
      }"
    >
      <label v-if="!protectedAttributes.includes(attr.name)">
        <input
          type="radio"
          name="attributeName"
          :checked="selectedType === dataType"
          :disabled="protectedAttributes.includes(attr.name)"
          @click="$emit('onEditAttr', entity._id, attr.name, dataType)"
        />
        {{ dataType }}
      </label>
      <label
        v-if="dataType === attr.type && protectedAttributes.includes(attr.name)"
        class="text-gray-400 flex-grow"
      >
        <input
          type="radio"
          name="attributeName"
          :checked="selectedType === dataType"
          :disabled="protectedAttributes.includes(attr.name)"
          @click="$emit('onEditAttr', entity._id, attr.name, dataType)"
        />
        {{ dataType }}
        <span class="mx-2">(protected)</span>
      </label>
    </div>
  </div>
</template>

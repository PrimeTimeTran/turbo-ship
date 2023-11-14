<script setup>
const props = defineProps([
  'entity',
  'protectedAttributes',
  'attr',
  'attrIdx',
  'attributeTypes',
  'selectedType',
])
</script>
<template>
  <div
    class="flex flex-row p-2 my-1 rounded"
    :id="'entityAttributeType' + entity._id + attr.name"
  >
    <div
      :key="entity._id + attr.name"
      v-for="dataType of attributeTypes"
      class="flex flex-grow justify-between px-2 py-1 space-x-3 bg-white rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
      :class="{
        'hover:border-opacity-100': !protectedAttributes.includes(attr.name),
      }"
    >
      <label v-if="!protectedAttributes.includes(attr.name)">
        <input
          type="radio"
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

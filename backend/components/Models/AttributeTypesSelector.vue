<script setup>
const props = defineProps(['entity', 'attr', 'selectedType'])
</script>
<template>
  <div
    class="flex flex-row p-2 my-1 rounded flex-wrap"
    :id="'entityAttributeType' + entity._id + attr.name"
  >
    <div
      :key="entity._id + attr.name"
      v-for="[_, { label, value }] of Object.entries(attributeTypesWithLabels)"
      class="flex flex-grow justify-between px-2 py-1 space-x-3 rounded border-2 border-slate-200 border-opacity-30 hover:bg-slate-100 hover:border-blue-100"
      :class="{
        'bg-blue-100': selectedType === value,
      }"
    >
      <label v-if="!protectedAttributes.includes(attr.name)">
        <input
          type="radio"
          :checked="selectedType === value"
          :disabled="protectedAttributes.includes(attr.name)"
          @click="$emit('onEditAttr', entity._id, attr.name, value)"
        />
        {{ label }}
      </label>
      <label
        v-if="value === attr.type && protectedAttributes.includes(attr.name)"
        class="text-gray-400 flex-grow hover:bg-slate-100"
      >
        <input
          type="radio"
          :checked="selectedType === value"
          :disabled="protectedAttributes.includes(attr.name)"
          @click="$emit('onEditAttr', entity._id, attr.name, value)"
        />
        {{ label }}
        <span class="mx-2">(protected)</span>
      </label>
    </div>
  </div>
</template>

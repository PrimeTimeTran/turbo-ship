<script setup>
const props = defineProps(['entity', 'attr', 'selectedType'])
</script>
<template>
  <div
    class="flex flex-row flex-wrap p-2 rounded"
    :id="'entityAttributeType' + entity._id + attr.name"
  >
    <div
      :key="entity._id + attr.name"
      @click="$emit('onEditAttr', entity._id, attr.name, value)"
      v-for="[_, { label, value }] of Object.entries(AttributeValidator.list)"
      class="flex flex-grow justify-between rounded border-2 border-slate-200 border-opacity-30 hover:bg-slate-100 hover:border-blue-100 mr-1"
      :class="{
        'bg-blue-100': selectedType === value,
      }"
    >
      <label class="text-sm text-center align-middle items-middle">
        <input
          type="radio"
          :checked="selectedType === value"
          :disabled="protectedAttributes.includes(attr.name)"
        />
        {{ label }}
      </label>
    </div>
  </div>
</template>

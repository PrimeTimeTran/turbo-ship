<script setup>
import SelectGroup from './SelectGroup.vue'
const props = defineProps([
  'attr',
  'entity',
  'protectedAttributes',
  'attrIdx',
  'onEditAttr',
  'onToggleAttrName',
  'attributeTypes',
  'onAttrSave',
])
</script>
<template>
  <div class="mb-1 p-2 rounded">
    <div class="flex">
      <span
        v-text="attrIdx + 1 + '.'"
        class="text-gray-400 py-1 mr-2"
      />
      <input
        v-if="attr.editing"
        v-model="attr.name"
        v-text="attr.name"
        :id="entity._id + attr.name"
        @click="onToggleAttrName(entity._id, attr.name)"
        class="flex flex-grow px-2 py-1 bg-white border-2 border-slate-200 border-opacity-50 hover:border-opacity-100 rounded"
        @keyup.enter="onAttrSave(entity._id, attr.name, attr.name)"
        :class="{
          'border-0': entity.editing,
          'hover:border-opacity-100': entity.editing,
        }"
      />
      <span
        v-else
        v-text="attr.name"
        class="flex flex-grow px-2 py-1 bg-white border-2 border-slate-200 border-opacity-50 hover:border-opacity-100 rounded"
        @click="onToggleAttrName(entity._id, attr.name)"
        :class="{
          ['hover:border-opacity-100']: !protectedAttributes.includes(
            attr.name
          ),
        }"
      />
    </div>
    <SelectGroup
      :key="entity._id + attr.name"
      :attr="attr"
      :attrIdx="attrIdx"
      :selectedType="entity.attributes[attrIdx].type"
      :entity="entity"
      :attributeTypes="attributeTypes"
      @onEditAttr="onEditAttr"
      :protectedAttributes="protectedAttributes"
    />
  </div>
</template>

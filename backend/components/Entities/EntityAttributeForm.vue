<script setup>
import { faker } from '@faker-js/faker'
const props = defineProps(['entity'])

const focused = ref('')
const attributeName = ref('')
const attributeType = ref('string')

const invalidName = ref(false)

const entity = ref(props.entity)

const onAddAttribute = () => {
  if (attributeName.value == '') invalidName.value = true
  if (attributeName.value == '' || attributeType.value == '') return
  invalidName.value = false
  props.entity.attributes.push({
    validators: [],
    valid: false,
    name: attributeName.value,
    type: attributeType.value,
    _id: faker.database.mongodbObjectId(),
  })
  attributeName.value = ''
}

const onToggle = (id) => {
  document.getElementById(id)?.classList.toggle('hidden')
  focused.value = id
}
const onPick = (newValue, id) => {
  const attr = entity.value.attributes.filter((attr) => attr._id === id)[0]
  attr.type = newValue
  closeAll(id)
}

const closeAll = (id) => {
  entity.value.attributes.forEach((_, idx) => {
    document.getElementById(id + idx)?.classList?.add('hidden')
  })
}

const attrRemove = (id) => {
  const idx = entity.value.attributes.findIndex((a) => a._id === id)
  entity.value.attributes.splice(idx, 1)
}
</script>
<!-- <div class="flex flex-row justify-between">
      <label class="ml-3 font-bold text-gray-500">New Attribute</label>
      <button
        type="submit"
        class="border-2 border-gray-300 py-1 px-2 rounded bg-green-500 text-white"
        @click="onAddAttribute()"
      >
        Save
      </button>
    </div> -->
<template>
  <div class="flex flex-row space-x-4">
    <div class="flex flex-1 flex-col px-2">
      <label class="font-bold text-gray-500">Name</label>
      <input
        v-model="attributeName"
        placeholder="firstName, lastName..."
        :id="'attributeInput' + entity._id"
        @keyup.enter="onAddAttribute()"
        class="flex-auto p-4 rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 shadow-md hover:bg-slate-100"
        :class="{
          'border-2': invalidName,
          'border-blue-500': invalidName,
          'border-opacity-100': invalidName,
        }"
      />
      <label class="mt-6 font-bold text-gray-500">Type</label>
      <div
        :id="'attributeType' + entity._id"
        class="flex-auto rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide shadow-md"
      >
        <div
          v-for="dataType of attributeTypes"
          class="flex flex-grow rounded odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
        >
          <label class="text-sm rounded p-2 w-full">
            <input
              :id="dataType"
              type="radio"
              :value="dataType"
              v-model="attributeType"
              name="attributeName"
              :checked="dataType == attributeType"
            />
            {{ attributeTypesWithLabels[dataType]?.label }}
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col px-2"></div>
    <div class="flex flex-1">
      <EntitiesAttributesTable :entity="entity" />
    </div>
  </div>
</template>

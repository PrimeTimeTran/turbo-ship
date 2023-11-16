<script setup>
import { faker } from '@faker-js/faker'
const props = defineProps(['entity', 'entities'])

const attributeName = ref('')
const attributeType = ref('')
const focused = ref('')

const invalidName = ref(false)
const invalidType = ref(false)
const entities = ref(props.entities)
const entity = ref(props.entity)

const onAddAttribute = (id) => {
  if (attributeName.value == '') invalidName.value = true
  if (attributeType.value == '') invalidType.value = true
  if (attributeName.value == '' || attributeType.value == '') return
  invalidName.value = false
  invalidType.value = false
  const idx = entities.value.findIndex((item) => item._id == id)
  const entity = entities.value[idx]
  entity.attributes.push({
    validators: [],
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
const onPick = (newValue, attrId) => {
  const attr = entity.value.attributes.filter((attr) => attr._id === attrId)[0]
  attr.type = newValue
  closeAll(attrId)
}

const closeAll = (attrId) => {
  // Close all of them just in case
  entity.value.attributes.forEach((_, idx) => {
    document.getElementById(attrId + idx)?.classList?.add('hidden')
  })
}
</script>

<template>
  <div
    v-if="entity.showAddAttribute"
    class="pt-1"
  >
    <div class="flex flex-row justify-between">
      <label class="ml-3 font-bold text-gray-500">New Attribute</label>
      <button
        type="submit"
        class="border-2 border-gray-300 py-1 px-2 rounded bg-green-500 text-white"
        @click="onAddAttribute(entity._id)"
      >
        Save
      </button>
    </div>
    <div class="grid grid-cols-12 space-x-4 items-start m-2 bg-white rounded">
      <div
        class="flex flex-col col-span-4 p-2 rounded border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 shadow"
      >
        <label class="font-bold text-gray-500">Name</label>
        <input
          v-model="attributeName"
          placeholder="firstName, lastName..."
          :id="'attributeInput' + entity._id"
          @keyup.enter="onAddAttribute(entity._id)"
          class="flex-auto p-4 rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 shadow-md hover:bg-slate-100"
          :class="{
            'border-2': invalidName,
            'border-red-200': invalidName,
            'border-opacity-100': invalidName,
          }"
        />
        <label class="mt-6 font-bold text-gray-500">Type</label>
        <div
          :id="'attributeType' + entity._id"
          class="flex-auto rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide shadow-md"
          :class="{
            'border-2': invalidName,
            'border-red-200': invalidName,
            'border-opacity-100': invalidName,
          }"
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
              />
              {{ dataType }}
            </label>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col col-span-8 px-6 py-2 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 h-96 shadow overflow-auto"
      >
        <label class="font-bold text-gray-500">
          Current({{ AttributeValidator.safeAttributes(entity).length }})
        </label>
        <div
          class="scrollbar-hide bg-neutral-50 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 relative shadow-md"
        >
          <div
            :key="attribute._id"
            v-for="(attribute, attrIdx) of AttributeValidator.safeAttributes(
              entity
            )"
          >
            <div
              class="grid grid-cols-4 hover:bg-slate-100 p-2 rounded min-w-100 relative"
            >
              <div class="col-span-2">
                {{ attrIdx + 1 + '. ' + attribute.name + ' ' }}
              </div>
              <div @click="onToggle(attribute._id + attrIdx)">
                {{ attribute.type }}
              </div>
              <div
                :id="attribute._id + attrIdx"
                class="absolute hidden mt-2 ml-72 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 space-y-1 w-100 bg-white z-10"
              >
                <a
                  v-for="dataType of attributeTypes"
                  @click="onPick(dataType, attribute._id)"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                >
                  {{ dataType }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

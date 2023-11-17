<script setup>
import { faker } from '@faker-js/faker'
const props = defineProps(['entity', 'focusAttr', 'focusedAttribute'])

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

<template>
  <div
    v-if="entity.showAttributeForm"
    class="pt-1"
  >
    <div class="flex flex-row justify-between">
      <label class="ml-3 font-bold text-gray-500">New Attribute</label>
      <button
        type="submit"
        class="border-2 border-gray-300 py-1 px-2 rounded bg-green-500 text-white"
        @click="onAddAttribute()"
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
              {{ dataType }}
            </label>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col col-span-8 px-6 py-2 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 h-96 shadow overflow-auto"
      >
        <label class="font-bold text-gray-500">
          <span
            v-text="entity.label"
            class="text-blue-400"
          />
          attributes({{ AttributeValidator.safeAttributes(entity).length }})
        </label>

        <table class="overflow-auto scrollbar-hide">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Type</th>
              <th class="text-right">Remove</th>
            </tr>
          </thead>
          <tbody class="overflow-auto scrollbar-hide">
            <tr
              :key="attribute._id"
              class="odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 pl-2 cursor-pointer"
              v-for="(attribute, attrIdx) of AttributeValidator.safeAttributes(
                entity
              )"
            >
              <td @click="() => focusAttr(attribute)">
                <span
                  v-text="attrIdx + 1 + '. ' + attribute.name"
                  :class="{
                    'text-blue-400': focusedAttribute.name === attribute.name,
                  }"
                />
              </td>
              <td @click="onToggle(attribute._id + attrIdx)">
                <span
                  v-text="attribute.type"
                  :class="{
                    'text-blue-400': focusedAttribute.name === attribute.name,
                  }"
                />
              </td>
              <td class="flex justify-end align-middle px-2">
                <span @click="attrRemove(attribute._id)">
                  <div
                    :class="{
                      'text-blue-400': focusedAttribute.name === attribute.name,
                    }"
                  >
                    <font-awesome-icon
                      color="gray"
                      icon="fa-solid fa-circle-xmark"
                    />
                  </div>
                </span>
                <div
                  :id="attribute._id + attrIdx"
                  class="absolute w-32 right-1/3 hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-100 bg-white z-50"
                >
                  <a
                    v-for="dataType of attributeTypes"
                    @click="onPick(dataType, attribute._id)"
                    class="block py-1 px-2 text-sm text-gray-700 odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 cursor-pointer"
                  >
                    {{ dataType }}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

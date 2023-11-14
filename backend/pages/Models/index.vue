<script setup>
import { faker } from '@faker-js/faker'
import AttributeForm from './AttributeForm.vue'

const protectedAttributes = ['_id']
let entities = ref([...original])
let entityName = ref('')
let attributeName = ref('')
let attributeType = ref('')
let attributeTypes = ref(['string', 'number', 'boolean', 'enumerator', 'date'])

const reset = () => {
  entities.value = [...original]
}
const onAdd = () => {
  if (entityName.value == '') return
  const _id = faker.database.mongodbObjectId()
  entities.value.push({
    _id,
    editing: false,
    name: entityName.value,
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
      },
    ],
  })
  entityName.value = ''
}
const onEntityNameSave = (val, id) => {
  if (val === '') return
  const idx = entities.value.findIndex((e) => e._id == id)
  const e = entities.value[idx]
  e.name = val
  onToggleEntityName(id)
  entityName.value = ''
}
const onToggleEntityAdd = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.showAddAttribute = !e.showAddAttribute
}
const onToggleEntityAttributesShow = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.showAttributes = !e.showAttributes
}
const onToggleEntityName = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.editing = !e.editing
  setTimeout(() => {
    document.getElementById(e._id).focus()
  }, 100)
}
const onAddAttribute = (id) => {
  if (attributeName.value == '') {
    const item = 'attributeInput' + id
    document.getElementById(item).classList.add('border-red-200')
    document.getElementById(item).classList.add('border-opacity-100')
  }
  if (attributeType.value == '') {
    const item = 'attributeType' + id
    document.getElementById(item).classList.add('border-red-200')
    document.getElementById(item).classList.add('border-opacity-100')
  }
  if (attributeName.value == '' || attributeType.value == '') {
    return
  } else {
    let item = 'attributeInput' + id
    document.getElementById(item).classList.remove('border-2')
    document.getElementById(item).classList.remove('border-opacity-100')
    item = 'attributeType' + id
    document.getElementById(item).classList.remove('border-2')
    document.getElementById(item).classList.remove('border-opacity-100')
  }
  let idx = entities.value.findIndex((item) => item._id == id)
  let entity = entities.value[idx]
  entity.attributes.push({
    name: attributeName.value,
    type: attributeType.value,
    _id: faker.database.mongodbObjectId(),
  })
  attributeName.value = ''
}
const getAttr = (id, name) => {
  let idx = entities.value.findIndex((e) => e._id === id)
  const e = entities.value[idx]
  idx = e.attributes.findIndex((a) => a.name == name)
  return e.attributes[idx]
}
const onToggleAttrName = (entityId, attrName) => {
  if (protectedAttributes.includes(attrName)) return
  const attr = getAttr(entityId, attrName)
  attr.editing = !attr.editing
  setTimeout(() => {
    document.getElementById(entityId + attrName).focus()
  }, 100)
}
const onAttrSave = (entityId, attrName, value) => {
  const attr = getAttr(entityId, attrName)
  attr.name = value
  attr.editing = !attr.editing
}
const onEditAttr = (entityId, attrName, value) => {
  console.log('onEditAttr')
  if (protectedAttributes.includes(attrName)) return
  const attr = getAttr(entityId, attrName)
  attr.type = value
}
</script>
<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
    <div class="col-span-2 border-r-2">
      <h1 class="text-2xl">New Entity</h1>
      <input
        autofocus
        v-model="entityName"
        @keyup.enter="onAdd(idx)"
        placeholder="banks, accounts, users..."
        class="border-2 border-red-100 text-black p-2 min-w-100 text-sm"
      />
      <button
        type="button"
        @click="onAdd"
        class="m-3 border-2 rounded border-gray-300 px-3 py-1 text-lg"
      >
        Add Entity
      </button>
      <button
        type="button"
        @click="reset"
        class="m-3 border-2 rounded border-gray-300 px-3 py-1 text-lg"
      >
        Reset
      </button>
    </div>
    <div class="col-span-8 overflow-auto scrollbar-hide">
      <div class="sticky top-0 shadow p-2 bg-white z-10">
        <div class="flex justify-between p-1">
          <div class="text-2xl">Entities</div>
          <div class="flex justify-center p-1">
            <span>Total: ({{ entities.length }})</span>
          </div>
        </div>
        <div class="flex flex-row justify-end">
          {{ entities.map((e) => e.name) }}
        </div>
      </div>
      <br />
      <div v-for="(entity, idx) of entities">
        <div
          class="bg-slate-50 mb-1 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 p-2 hover:bg-slate-100"
          :class="{
            'bg-opacity-100': entity.showAddAttribute || entity.showAttributes,
          }"
        >
          <div>
            <div class="flex justify-between items-center">
              <div class="flex flex-row flex-grow">
                <span class="p-1">
                  <font-awesome-icon
                    icon="fa-solid fa-clipboard"
                    class="text-gray-400 mr-2"
                  />
                </span>
                <div
                  v-if="entity.editing"
                  @click="onToggleEntityName(entity._id)"
                  class="flex flex-grow px-2 py-0 rounded border-2 border-opacity-0 border-slate-200"
                  :class="{
                    'border-0': entity.editing,
                    'hover:border-opacity-100': !entity.editing,
                  }"
                >
                  <span class="text-gray-400 py-1 mr-2">{{ idx + 1 }}.</span>
                  <input
                    :id="entity._id"
                    v-model="entity.name"
                    placeholder="customers, transactions, statements..."
                    class="flex flex-grow px-2 py-0 rounded border-2 border-opacity-0 border-slate-200"
                    @keyup.enter="onEntityNameSave(entity.name, entity._id)"
                    :class="{
                      'hover:border-opacity-100': !entity.editing,
                    }"
                  />
                </div>
                <div
                  v-else
                  @click="onToggleEntityName(entity._id)"
                  class="flex flex-grow px-2 py-0 rounded border-2 border-opacity-0 border-slate-200 bg-white"
                  :class="{
                    'hover:border-opacity-100': !entity.editing,
                  }"
                >
                  <span class="text-gray-400 mr-2">{{ idx + 1 }}.</span>
                  <span class="text-gray-400">{{ entity.name }}</span>
                </div>
              </div>
              <div class="ml-1">
                <button
                  type="button"
                  class="px-2 rounded border-2 border-opacity-0 border-slate-200 hover:border-opacity-100"
                  @click="onToggleEntityAttributesShow(entity._id)"
                >
                  <font-awesome-icon
                    v-if="entity.showAttributes"
                    icon="fa-solid fa-eye-slash"
                    class="text-gray-400 mr-2"
                  />
                  <font-awesome-icon
                    v-else
                    icon="fa-solid fa-eye"
                    class="text-gray-400 mr-2"
                  />
                  Total Attributes: ({{ entity.attributes.length + 1 }})
                </button>
                <button
                  type="button"
                  class="px-2 rounded border-2 border-opacity-0 border-slate-200 hover:border-opacity-100"
                  @click="onToggleEntityAdd(entity._id)"
                >
                  <font-awesome-icon
                    v-if="entity.showAddAttribute"
                    icon="fa-solid fa-rectangle-xmark"
                    class="text-gray-400 dark:text-white mr-2"
                  />
                  <font-awesome-icon
                    v-else
                    icon="fa-solid fa-pen-to-square"
                    class="text-gray-400 dark:text-white mr-2"
                  />
                  {{ entity.showAddAttribute ? 'Hide' : 'Add' }}
                </button>
              </div>
            </div>
            <div
              v-if="entity.showAddAttribute"
              class="grid grid-cols-4 space-x-1 items-start p-2"
            >
              <div
                class="flex flex-col col-span-2 px-6 py-2 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
              >
                <label class="font-bold text-gray-500">New Attribute</label>
                <input
                  v-model="attributeName"
                  placeholder="firstName, lastName..."
                  :id="'attributeInput' + entity._id"
                  class="flex-auto px-2 py-1 bg-white rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
                  @keyup.enter="onAddAttribute(entity._id)"
                />
                <label class="font-bold text-gray-500">Type</label>
                <div
                  :id="'attributeType' + entity._id"
                  class="flex-auto p-2 my-1 bg-white rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
                >
                  <div>
                    <div v-for="dataType of attributeTypes">
                      <label class="text-lg">
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
                <div>
                  <button
                    type="submit"
                    class="border-2 border-gray-300 p-2 mt-2 rounded bg-slate-500 text-white"
                    @click="onAddAttribute(entity._id)"
                  >
                    Add Attribute
                  </button>
                </div>
              </div>
              <div
                class="grid flex-grow rounded min-w-max p-2 px-6 border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
              >
                <label class="font-bold text-gray-500">
                  Current({{ entity.attributes.length + 1 }})
                </label>
                <div
                  class="overflow-auto min-w-max scrollbar-hide max-h-64 bg-white p-4 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100"
                >
                  <div v-for="(attribute, attrIdx) of entity.attributes">
                    <div class="grid grid-cols-4">
                      <div class="col-span-3">
                        {{ attrIdx + 1 + '. ' + attribute.name + ' ' }}
                      </div>
                      <div class="">
                        {{ attribute.type }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="!entity.showAddAttribute"
              class="flex justify-between items-center px-8"
            >
              <div class="my-2">
                <span class="font-bold text-gray-400 mr-2">Attributes:</span>
                <span
                  class="text-gray-500"
                  v-for="(attribute, attrIdx) of entity.attributes"
                  v-text="attrIdx + 1 + '. ' + attribute.name + ' '"
                />
              </div>
            </div>
          </div>
          <div
            class="min-h-32 p-2"
            v-if="entity.showAttributes"
          >
            <div
              v-for="(attr, attrIdx) of entity.attributes"
              class="my-2 border-2 border-gray-300 border-opacity-50 hover:border-opacity-100 rounded"
            >
              <attribute-form
                :attr="attr"
                :entity="entity"
                :attrIdx="attrIdx"
                :onEditAttr="onEditAttr"
                :onAttrSave="onAttrSave"
                :attributeTypes="attributeTypes"
                :onToggleAttrName="onToggleAttrName"
                :protectedAttributes="protectedAttributes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-2 overflow-auto scrollbar-hide border-l-2">
      <pre>{{ entities }}</pre>
    </div>
  </div>
</template>

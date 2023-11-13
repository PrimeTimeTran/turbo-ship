<script setup>
import { faker } from '@faker-js/faker'
const original = [
  {
    _id: faker.database.mongodbObjectId(),
    name: 'users',
    label: 'User',
    plural: 'Users',
    lowerPlural: 'users',
    showAttributes: false,
    showOptions: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'firstName',
        type: 'string',
      },
      {
        name: 'lastName',
        type: 'string',
      },
      {
        name: 'age',
        type: 'number',
      },
      {
        name: 'owner',
        type: 'boolean',
      },
    ],
  },
]
let entities = ref([...original])
let entityName = ref('')
let attributeName = ref('')
let attributeType = ref('')
let attributeTypes = ref(['string', 'number', 'boolean', 'enumerator'])

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
    showOptions: false,
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
  toggleEntityNameEdit(id)
  entityName.value = ''
}

const toggleEntityOptions = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.showOptions = !e.showOptions
}
const toggleEntityAttributes = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.showAttributes = !e.showAttributes
}

const toggleEntityNameEdit = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  let e = entities.value[idx]
  e.editing = !e.editing
  setTimeout(() => {
    document.getElementById(e._id).focus()
  }, 250)
}

const onAddAttribute = (id) => {
  if (attributeName.value == '') return
  let idx = entities.value.findIndex((item) => item._id == id)
  let entity = entities.value[idx]
  entity.attributes.push({
    name: attributeName.value,
    type: attributeType.value,
  })
  attributeName.value = ''
}

const getAttrKeys = (attr) => {
  const go = Object.entries(attr)
  return go
}
</script>
<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 pt-24">
    <div class="col-span-2">
      <h1 class="text-3xl">Entity Name</h1>
      <input
        autofocus
        v-model="entityName"
        @keyup.enter="onAdd(idx)"
        class="border-2 border-red-100 text-black"
      />
      <button
        type="button"
        class="m-3 border-2 border-green-300 text-lg"
        @click="onAdd"
      >
        Add Entity
      </button>
      <button
        type="button"
        class="m-3 border-2 border-green-300 text-lg"
        @click="reset"
      >
        Reset
      </button>
    </div>
    <div class="col-span-8 overflow-auto no-scrollbar">
      <div
        class="fixed top-0 shadow p-2 left-0 right-0 bg-white flex flex-grow min-w-100 flex-row justify-between text-3xl"
      >
        <div class="text-2xl">Entities</div>
        <div>Total: ({{ entities.length }})</div>
      </div>
      <div class="fixed top-0 shadow p-2 left-50 right-50 bg-red-200">
        {{ entities.map((e) => e.name) }}
      </div>
      <div
        v-for="(entity, idx) of entities"
        class="bg-green-100 mb-1 rounded"
      >
        <div class="p-2">
          <div>
            <div class="flex justify-between items-center">
              <div class="flex flex-row text-2xl m-2">
                <font-awesome-icon
                  icon="fa-solid fa-database"
                  class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400 mr-2"
                />
                <div
                  v-if="!entity.editing"
                  @click="toggleEntityNameEdit(entity._id)"
                >
                  {{ idx + 1 }}. {{ entity.name }}
                </div>
                <div
                  v-else
                  @click="toggleEntityNameEdit(entity._id)"
                >
                  <input
                    :id="entity._id"
                    v-model="entity.name"
                    @keyup.enter="onEntityNameSave(entity.name, entity._id)"
                  />
                </div>
              </div>
              <button
                type="button"
                class="border-2 px-2 rounded"
                @click="toggleEntityOptions(entity._id)"
              >
                <font-awesome-icon
                  v-if="entity.showAttributes"
                  icon="fa-solid fa-eye-slash"
                  class="text-gray-400 dark:text-whitemr-2"
                />
                <font-awesome-icon
                  v-else
                  icon="fa-solid fa-eye"
                  class="text-gray-400 dark:text-whitemr-2"
                />
                {{ entity.showOptions ? 'Hide Options' : 'Show Options' }}
              </button>
            </div>
            <div
              v-if="entity.showOptions"
              class="flex flex-col space-x-1 items-start p-2"
            >
              <input
                v-model="attributeName"
                @keyup.enter="onAddAttribute(entity._id)"
                class="text-black"
              />

              <div class="flex flex-col border-2 border-red-50 p-2 m-2">
                <h1 class="text-3xl">Data Type</h1>
                <div>
                  <div v-for="(type, idx) of attributeTypes">
                    <label class="text-2xl">
                      <input
                        :id="type"
                        type="radio"
                        :value="type"
                        v-model="attributeType"
                        name="attributeName"
                      />
                      {{ type }}
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  @click="onAddAttribute(entity._id)"
                >
                  Add Attribute
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <span class="font-bold mr-2">Attributes:</span>
                <span
                  v-for="(attribute, attrIdx) of entity.attributes"
                  v-text="attrIdx + 1 + '. ' + attribute.name + ' '"
                  class="text-gray-500"
                />
              </div>
              <button
                type="button"
                class="px-2 rounded"
                @click="toggleEntityAttributes(entity._id)"
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
                Total: ({{ entity.attributes.length }})
              </button>
            </div>
          </div>
          <div
            v-if="entity.showAttributes"
            class="min-h-32"
          >
            <div class="p-2">
              <div v-for="(attr, attrIdx) of entity.attributes">
                <div class="mb-1 p-2">
                  <h4 class="text-xl">
                    <span v-text="attrIdx + 1" /> . {{ attr.name }}
                  </h4>
                  <div v-for="([key, value], propIdx) of getAttrKeys(attr)">
                    <div class="grid grid-cols-2 mb-1 p-2 bg-orange-100">
                      <div class="cols-span-1">Property: {{ key }}</div>
                      <div class="cols-span-1">Value: {{ value }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <pre>{{ entities }}</pre>
    </div>
  </div>
</template>

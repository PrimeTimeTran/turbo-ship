<!-- 
  1. When to use defineEmits
      - $emit isn't defined inside of setup.
  2. Formkit
      - Intro
      - Update reactively
      - Listen for input events
      - Update a changes b
      - Submit asynchronously
      - Reset
  3. Reactive
      - C fields in script/template
      - R fields in script/template
      - U fields in script/template
      - D fields in script/template
 -->
<script setup>
import _ from 'lodash'

import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import { getValidationMessages } from '@formkit/validation'
const emit = defineEmits(['onAdd'])
const { entities, addEntity } = useEntities()
const messages = ref([])

function showErrors(node) {
  const validations = getValidationMessages(node)
  messages.value = []
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    )
  })
}

const aleast = () => {
  return !(entity.attributes.length === 0)
}

const name = ref('New Entity')
const plural = ref('')
const label = ref('')

const _id = faker.database.mongodbObjectId()

const attributes = ref([])
const entity = reactive({
  _id,
  name,
  label,
  plural,
  attributes,
})

const attrName = ref('New Attribute')
const attrType = ref('string')
const attrEnums = ref([])

const newAttribute = reactive({
  name: attrName,
  type: attrType,
  enums: attrEnums,
})

const submit = () => {
  if (entity.attributes.length === 0) {
    return
  }
  const _id = faker.database.mongodbObjectId()
  entity._id = _id
  const clonedEntity = _.cloneDeep(entity)

  addEntity(clonedEntity)
}
const addAttribute = () => {
  if (
    ((newAttribute.type == 'enumerator' ||
      newAttribute.type == 'enumeratorMulti') &&
      newAttribute.enums.length === 0) ||
    newAttribute.name.length < 2
  ) {
    return
  }
  const attrId = faker.database.mongodbObjectId()
  attributes.value.push({
    _id: attrId,
    name: newAttribute.name,
    type: newAttribute.type,
  })
}
const attrRemove = (id) => {
  const idx = attributes.value.findIndex((a) => a._id === id)
  attributes.value.splice(idx, 1)
}

const onTypeSelect = (type) => {
  console.log({
    type,
  })
  newAttribute.type = type
  if (type === 'enumerator' || type === 'enumeratorMulti') {
    if (process.browser) {
      setTimeout(() => {
        document.getElementById('enumInput').focus()
      }, 200)
    }
  }
}

const inputClasses =
  'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-sm mr-2 w-full'
</script>
<template>
  <div class="col-span-3 border-r-2 overflow-auto scrollbar-hide">
    <div class="flex flex-col px-2">
      <div class="text-md font-bold">
        New Entity(<span v-text="entities.length" />)
      </div>
      <ul
        class="validation-errors"
        v-if="messages.length"
      >
        <li v-for="message in messages">{{ message }}</li>
      </ul>
      <FormKit
        id="form"
        type="form"
        :actions="false"
        @submit="submit"
        @submit-invalid="showErrors"
        :classes="{
          message: 'text-red-400 text-sm',
        }"
      >
        <div class="p-2 rounded border shadow">
          <FormKit
            name="name"
            type="text"
            label="Name"
            placeholder="bank"
            :value="entity.name"
            validation="required|length:3"
            :classes="{
              label: 'font-semibold',
              input: inputClasses,
              message: 'text-red-400',
            }"
            @input="
              (e) => {
                entity.name = e
                entity.plural = e + 's'
                entity.label =
                  e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
                if (e == '') entity.plural = e + ''
              }
            "
          />
          <FormKit
            type="text"
            name="plural"
            label="Plural"
            placeholder="banks"
            v-model="entity.plural"
            @input="(e) => (entity.plural = e)"
            :classes="{
              outer: 'mt-4',
              label: 'font-semibold',
              input: inputClasses,
            }"
          />
          <FormKit
            type="text"
            name="label"
            label="Label"
            placeholder="Bank"
            v-model="entity.label"
            :classes="{
              outer: 'mt-4',
              label: 'font-semibold',
              input: inputClasses,
            }"
            @input="
              (e) => {
                entity.label =
                  e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
              }
            "
          />
        </div>
        <div class="text-md font-bold mt-5">
          New Attribute(<span v-text="attributes.length" />)
        </div>

        <div class="mt-2 p-2 rounded border shadow">
          <div class="flex flex-row justify-between">
            <div></div>
          </div>

          <FormKit
            label="Name"
            name="attrName"
            validation="required|length:2"
            placeholder="branch, transaction, statement..."
            validation-label="Attribute"
            v-model="newAttribute.name"
            :validation-rules="{ aleast }"
            :classes="{
              label: 'font-semibold',
              input: inputClasses,
              message: 'text-red-400',
            }"
          />
          <div
            v-text="attributeTypesWithLabels[newAttribute.type].label"
            class="mt-5 font-bold text-blue-400"
          />
          <div class="flex flex-col flex-grow border rounded shadow my-2">
            <label
              v-for="fieldType of attributeTypes"
              class="px-2 py-1 w-full text-sm odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
            >
              <input
                class="mr-2"
                type="radio"
                name="fieldType"
                :checked="newAttribute.type === fieldType"
                @click="() => onTypeSelect(fieldType)"
              />
              <span v-text="attributeTypesWithLabels[fieldType].label" />
            </label>
          </div>

          <div
            class="mt-5"
            v-if="
              newAttribute.type == 'enumerator' ||
              newAttribute.type == 'enumeratorMulti'
            "
          >
            <FormKit
              id="enumInput"
              type="text"
              name="enums"
              label="Enumerator"
              help="Comma seperated list"
              v-model="newAttribute.enums"
              validation="required|length:2"
              placeholder="(transaction)... credit, debit, award, deduction..."
              :classes="{
                input: 'border px-2 py-1 w-full',
                message: 'text-red-400 text-sm',
              }"
            />
          </div>

          <div @click="addAttribute">
            <FormKit
              type="button"
              :classes="{
                outer:
                  'border-2 border-green-500 text-center p-2 rounded font-bold text-green-500 shadow-md',
              }"
            >
              <span class="text-sm">Add</span>
              <span
                class="text-sm"
                v-text="
                  newAttribute.name
                    ? ` ${newAttribute.name} (${newAttribute.type})`
                    : ''
                "
              />
            </FormKit>
          </div>
        </div>

        <h2 class="text-md font-bold mt-5">Summary:</h2>
        <div class="mt-2 p-2 rounded border shadow">
          <h3 class="text-md">Name: <span v-text="entity.name" /></h3>
          <h4 class="text-md">Label: <span v-text="entity.label" /></h4>
          <h4 class="text-md">Pluralized: <span v-text="entity.plural" /></h4>
          <h4 class="mt-4 text-md">
            Attributes (<span v-text="attributes.length" />)
          </h4>
          <div
            v-if="attributes.length > 0"
            class="border rounded p-2 mt-2 overflow-auto scrollbar-hide"
          >
            <li
              class="grid grid-cols-12 justify-between odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 scrollbar-hide"
              v-for="(attr, idx) of entity.attributes"
            >
              <span
                class="col-span-1 ml-1 text-sm"
                @click="attrRemove(attr._id)"
              >
                <div>
                  <font-awesome-icon
                    color="red"
                    icon="fa-solid fa-circle-xmark"
                  />
                </div>
              </span>
              <span
                class="col-span-6 ml-2 text-sm"
                v-text="idx + 1 + '. ' + attr.name"
              />
              <span
                class="col-span-5 text-sm text-right pr-1"
                v-text="attributeTypesWithLabels[attr.type].label"
              />
            </li>
          </div>
          <FormKit
            type="submit"
            :classes="{
              outer:
                'bg-green-500 mt-2 text-center p-2 rounded text-white font-bold  shadow-md',
            }"
          >
            Create
          </FormKit>
        </div>
      </FormKit>
    </div>
  </div>
</template>

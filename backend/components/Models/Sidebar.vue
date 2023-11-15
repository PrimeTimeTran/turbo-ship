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

const name = ref('')
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

const attrName = ref('')
const attrType = ref('string')

const newAttribute = reactive({
  name: attrName,
  type: attrType,
})

const submit = () => {
  if (entity.attributes.length === 0) {
    return
  }
  // reset('form')
  emit('onAdd', entity)
}
const addAttribute = () => {
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
</script>
<template>
  <div class="col-span-2 border-r-2 overflow-auto scrollbar-hide">
    <div class="flex flex-col px-2">
      <h1 class="text-md font-bold">New Entity</h1>
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
          message: 'text-red-400',
        }"
      >
        <div class="p-2 rounded border shadow">
          <FormKit
            autofocus
            name="name"
            type="text"
            label="Name"
            placeholder="bank"
            :value="entity.name"
            validation="required|length:3"
            :classes="{
              label: 'font-bold',
              input:
                'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
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
              label: 'font-bold',
              input:
                'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
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
              label: 'font-bold',
              input:
                'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
            }"
            @input="
              (e) => {
                entity.label =
                  e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
              }
            "
          />
        </div>
        <div class="mt-2 p-2 rounded border shadow">
          <h5>Attributes (<span v-text="attributes.length" />)</h5>

          <FormKit
            name="name"
            label="Name"
            validation="required"
            :validation-rules="{ aleast }"
            placeholder="description"
            validation-label="Attribute"
            v-model="newAttribute.name"
            :classes="{
              label: 'font-bold',
              input:
                'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
              message: 'text-red-400',
            }"
          />
          <FormKit
            name="type"
            label="Type"
            v-model="newAttribute.type"
            :disabled="true"
            :classes="{
              label: 'font-bold',
              input:
                'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2 bg-blue-100 text-blue-600',
            }"
          />
          <div class="flex flex-col flex-grow border rounded shadow my-2">
            <label
              v-for="fieldType of attributeTypes"
              class="hover:bg-slate-100 px-2 py-1 rounded w-full"
            >
              <input
                class="mr-2"
                type="radio"
                name="fieldType"
                :checked="newAttribute.type === fieldType"
                @click="
                  (e) => {
                    newAttribute.type = fieldType
                  }
                "
              />
              <span v-text="fieldType" />
            </label>
          </div>

          <div @click="addAttribute">
            <FormKit
              type="button"
              :classes="{
                outer:
                  'border-2 border-green-500 text-center p-2 rounded font-bold text-green-500 shadow-md',
              }"
            >
              Add
              <span
                v-text="
                  newAttribute.name
                    ? `(${newAttribute.name + ' type ' + newAttribute.type})`
                    : ''
                "
              />
            </FormKit>
          </div>
        </div>

        <div class="mt-2 p-2 rounded border shadow">
          <h2 class="text-lg font-bold">Summary:</h2>
          <h3 class="text-md">Name: <span v-text="entity.name" /></h3>
          <h4 class="text-md">Label: <span v-text="entity.label" /></h4>
          <h4 class="text-md">Pluralized: <span v-text="entity.plural" /></h4>
          <h4 class="mt-4 text-md">
            Attributes (<span v-text="attributes.length" />)
          </h4>
          <div
            v-if="attributes.length > 0"
            class="border rounded p-2 mt-2"
          >
            <li
              class="flex justify-between"
              v-for="(attr, idx) of entity.attributes"
            >
              <span v-text="idx + 1 + '. ' + attr.name" />
              <span v-text="attr.type" />
              <span @click="attrRemove(attr._id)">
                <font-awesome-icon icon="fa-solid fa-circle-xmark" />
              </span>
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

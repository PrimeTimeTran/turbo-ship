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
import { FormKitMessages } from '@formkit/vue'
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

const label = ref('')
const plural = ref('')
const input = ref()

const name = ref('New Entity')
const attributes = ref([])

const entity = reactive({
  _id: faker.database.mongodbObjectId(),
  name,
  label,
  plural,
  attributes,
})

const attrEnums = ref([])
const attrType = ref('string')
const attrName = ref('New Attribute')

const newAttribute = reactive({
  name: attrName,
  type: attrType,
  enums: attrEnums,
})
const submit = () => {
  const _id = faker.database.mongodbObjectId()
  entity._id = _id
  const clonedEntity = _.cloneDeep(entity)
  notify(entity.name + ' added')
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
  const attribute = {
    _id: attrId,
    name: newAttribute.name,
    type: newAttribute.type,
  }
  attributes.value.push(attribute)
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
  <div class="col-span-2 border-r-2 overflow-auto scrollbar-hide">
    <div class="flex flex-col px-2">
      <div class="text-md font-bold">
        New Entity(<span v-text="entities.length" />)
      </div>
      <ul
        class="validation-errors"
        v-if="messages.length"
      >
        <li
          :key="message"
          v-for="message in messages"
        >
          {{ message }}
        </li>
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
            :classes="{
              label: 'font-semibold',
              input: inputClasses,
              message: 'text-red-400',
            }"
          />
          <div
            v-text="Validator.labeledTypes[newAttribute.type].label"
            class="mt-5 font-bold text-blue-400"
          />
          <div class="flex flex-col flex-grow border rounded shadow my-2">
            <label
              :key="fieldType"
              v-for="fieldType of Validator.types"
              class="px-2 py-1 w-full text-sm odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
            >
              <input
                class="mr-2"
                type="radio"
                name="fieldType"
                :checked="newAttribute.type === fieldType"
                @click="() => onTypeSelect(fieldType)"
              />
              <span v-text="Validator.labeledTypes[fieldType].label" />
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
          <FormKitMessages :node="input?.node" />

          <div class="flex flex-col flex-grow overflow-auto scrollbar-hide">
            <table class="table-auto">
              <tr class="bg-gray-500">
                <th></th>
                <th class="text-white text-left pl-2">Type</th>
                <th class="text-white text-left">Name</th>
              </tr>
              <tbody>
                <FormKit
                  ref="input"
                  type="list"
                  name="Attributes"
                  v-model="attributes"
                  validation="required"
                  validation-label="At least 1 attribute "
                >
                  <tr
                    :key="attr"
                    v-for="attr of attributes"
                    class="full-width-row odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 pl-2 cursor-pointer h-8"
                  >
                    <td
                      class="pl-1"
                      @click="attrRemove(attr._id)"
                    >
                      <font-awesome-icon
                        color="red"
                        icon="fa-solid fa-circle-xmark"
                      />
                    </td>
                    <td>
                      <span
                        class="mx-2 font-semibold"
                        v-text="Validator.labeledTypes[attr.type].label"
                      />
                    </td>
                    <td class="pr-2">
                      <span
                        class="overflow-auto scrollbar-hide"
                        v-text="attr.name"
                        style="white-space: nowrap"
                      />
                    </td>
                  </tr>
                </FormKit>
              </tbody>
            </table>
          </div>
          <FormKit
            type="submit"
            :classes="{
              outer:
                'bg-green-500 mt-2 text-center p-2 rounded text-white font-bold shadow-lg text-2xl',
            }"
          >
            Create Entity
          </FormKit>
        </div>
      </FormKit>
    </div>
  </div>
</template>

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
import { reset, clearErrors } from '@formkit/core'
import _ from 'lodash'

import { faker } from '@faker-js/faker'
import { FormKitMessages } from '@formkit/vue'
// import { getValidationMessages } from '@formkit/validation'

// Leaving it here so I don't forget.
// const emit = defineEmits(['onAdd'])
const { entities, addEntity } = useEntities()

// const messages = ref([])

// function showErrors(node) {
//   const validations = getValidationMessages(node)
//   messages.value = []
//   validations.forEach((inputMessages) => {
//     messages.value = messages.value.concat(
//       inputMessages.map((message) => message.value)
//     )
//   })
// }

const input = ref()
const attributeRef = ref()
const newAttribute = reactive({
  name: ref(''),
  enums: ref([]),
  type: ref('string'),
})
const entity = reactive({
  name: ref(''),
  label: ref(''),
  plural: ref(''),
  attributes: ref([]),
  _id: faker.database.mongodbObjectId(),
})
const resetForm = () => {
  reset()
  entity.name = ''
  entity.label = ''
  entity.plural = ''
  entity.attributes = []
  newAttribute.name = ''
  newAttribute.enums = ''
  newAttribute.type = 'string'
  document.getElementById('inputRef').focus()
  // No success clearing attribute errors after using clearErrors, targeting with id, etc
  setTimeout(() => {
    clearErrors('attributeInput', true)
  }, 200)
}
const submit = () => {
  entity._id = faker.database.mongodbObjectId()
  const clonedEntity = _.cloneDeep({ ...entity, name: camelize(entity.name) })
  notify(clonedEntity.name + ' added')
  addEntity(clonedEntity)
  resetForm()
}
const addAttribute = (e) => {
  e.preventDefault()
  if (!attributeValid) return
  const attribute = {
    validators: [],
    validations: [],
    type: newAttribute.type,
    name: camelize(newAttribute.name),
    _id: faker.database.mongodbObjectId(),
  }
  entity.attributes.push(attribute)
  // newAttribute.name = ''
  document.getElementById('attributeInput').focus()
}
const attrRemove = (id) => {
  const idx = entity.attributes.findIndex((a) => a._id === id)
  entity.attributes.splice(idx, 1)
}
const onTypeSelect = (type) => {
  newAttribute.type = type
  if (Validator.enumTypes(type)) {
    if (process.browser) {
      setTimeout(() => {
        document.getElementById('enumInput').focus()
      }, 200)
    }
  }
}
const validAttributeName = computed(() => newAttribute.name.length > 2)
const attributeValid = computed(() => {
  if (!validAttributeName.value) return false
  if (
    newAttribute.enums.length === 0 &&
    Validator.enumTypes.includes(newAttribute.type)
  )
    return false
  return true
})
const entityValid = computed(() => {
  if (
    !attributeValid.value ||
    entity.name.length < 3 ||
    entity.attributes.length === 0
  )
    return false
  return true
})
const inputClasses =
  'flex-1 justify-center border-2 rounded border-gray-300 px-3 py-1 text-sm mr-2 w-full'
</script>
<template>
  <div class="flex-1 flex-col px-2 max-h-screen">
    <FormKit
      id="form"
      type="form"
      :actions="false"
      @submit="submit"
      :classes="{
        message: 'text-red-400 text-sm',
      }"
    >
      <div class="flex flex-col">
        <div class="text-md font-bold text-slate-500">
          New Entity(<span v-text="entities.length" />)
        </div>
        <div class="flex flex-col rounded border shadow top hover:shadow-lg">
          <div class="p-2">
            <label class="text-slate-500"
              ><u class="text-slate-500">N</u>ame</label
            >
            <FormKit
              id="inputRef"
              name="name"
              type="text"
              placeholder="bank"
              :value="entity.name"
              validation="required|length:3"
              :classes="{
                input: inputClasses,
                label: 'font-semibold text-slate-500',
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
                input: inputClasses,
                label: 'font-semibold text-slate-500',
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
                label: 'font-semibold text-slate-500',
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
        </div>
        <div
          class="flex flex-col overflow-auto scrollbar-hide middle hover:shadow-lg"
        >
          <div class="text-md font-bold mt-5 text-slate-500">
            New Attribute(<span v-text="entity.attributes.length" />)
          </div>
          <div class="mt-2 p-2 rounded border shadow">
            <!-- Unable to clear errors after targeting by id & calling function -->
            <label class="text-slate-500"
              ><u class="text-slate-500">A</u>ttribute</label
            >
            <FormKit
              name="attrName"
              id="attributeInput"
              v-model="newAttribute.name"
              validation-label="Attribute"
              validation="required|length:2"
              placeholder="branch, transaction, statement..."
              :classes="{
                input: inputClasses,
                label: 'font-semibold text-slate-500',
                message: 'text-red-400',
              }"
            />
            <div
              class="mt-5 font-bold text-blue-400"
              v-text="Validator.labeledTypes[newAttribute.type].label"
            />
            <div
              class="flex flex-col flex-grow border rounded shadow my-2 h-52 max-h-52 overflow-scroll scrollbar-hide"
            >
              <label
                :key="fieldType"
                v-for="fieldType of Validator.types"
                class="px-2 py-1 w-full text-sm odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
              >
                <input
                  class="mr-2"
                  type="radio"
                  name="fieldType"
                  :value="newAttribute.type"
                  @click="onTypeSelect(fieldType)"
                  :checked="newAttribute.type === fieldType"
                />
                <span v-text="Validator.labeledTypes[fieldType].label" />
              </label>
            </div>
            <div
              class="mt-5"
              v-if="Validator.enumTypes.includes(newAttribute.type)"
            >
              <FormKit
                type="text"
                name="enums"
                id="enumInput"
                label="Enumerator"
                help="Comma seperated list"
                v-model="newAttribute.enums"
                validation="required|length:2"
                placeholder="(transaction)... credit, debit, award, deduction..."
                :classes="{
                  input: 'border px-2 py-1 w-full rounded',
                  message: 'text-red-400 text-sm',
                }"
              />
            </div>
            <button
              @click="addAttribute"
              class="w-full flex text-center rounded py-2 justify-center text-white font-bold hover:shadow-lg"
              v-text="'Add'"
              :class="{
                'bg-gray-300': !attributeValid,
                'bg-opacity-80': !attributeValid,
                'cursor-not-allowed': !attributeValid,
                'bg-green-500': attributeValid,
              }"
            />
          </div>
        </div>
        <div class="flex flex-col bottom rounded border shadow mt-2">
          <div class="mt-2 p-2">
            <h2 class="text-md font-bold mt-5 text-slate-500">Summary:</h2>
            <h3 class="text-md text-slate-500">
              Name: <span v-text="entity.name" />
            </h3>
            <h3 class="text-md text-slate-500">
              Label: <span v-text="entity.label" />
            </h3>
            <h3 class="text-md text-slate-500">
              Pluralized: <span v-text="entity.plural" />
            </h3>
            <h3 class="mt-4 text-md">
              Attributes (<span v-text="entity.attributes.length" />)
            </h3>
            <FormKitMessages :node="input?.node" />
            <div class="flex flex-col flex-grow overflow-auto scrollbar-hide">
              <table class="table-auto">
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="bg-gray-500">
                    <th></th>
                    <th class="text-white text-left pl-2">Type</th>
                    <th class="text-white text-left">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <FormKit
                    type="list"
                    name="Attributes"
                    ref="attributeRef"
                    v-model="entity.attributes"
                    validation="required"
                    validation-label="At least 1 attribute "
                  >
                    <tr
                      :key="attr"
                      v-for="attr of entity.attributes"
                      class="full-width-row odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 pl-2 cursor-pointer h-8"
                    >
                      <td
                        class="pl-1"
                        @click="attrRemove(attr._id)"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-circle-xmark"
                          class="text-red-400"
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
                          v-text="attr.name"
                          style="white-space: nowrap"
                          class="overflow-auto scrollbar-hide"
                        />
                      </td>
                    </tr>
                  </FormKit>
                </tbody>
              </table>
            </div>
            <!-- The button clases won't combine if we try to use string adding, computed, interpolation with nested tertiary  -->
            <FormKit
              type="submit"
              :classes="{
                input: entityValid ? '' : 'cursor-not-allowed',
                outer: entityValid
                  ? 'mt-2 text-center p-2 rounded text-white font-bold shadow-lg text-xl bg-green-500'
                  : 'mt-2 text-center p-2 rounded text-white font-bold shadow-lg text-xl bg-gray-300 opacity-80',
              }"
            >
              Create Entity
            </FormKit>
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>
<style>
.top {
  max-height: 30vh;
}
.middle {
  max-height: 50vh;
}
.bottom {
  max-height: 20vh;
}
</style>

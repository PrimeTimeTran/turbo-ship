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
import { reset } from '@formkit/core'

import { faker } from '@faker-js/faker'
import { FormKitMessages } from '@formkit/vue'
const { addEntity } = useEntities()

const newAttribute = reactive({
  name: ref(''),
  enums: ref([]),
  type: ref('string'),
})
const entity = reactive({
  name: ref(''),
  label: ref(''),
  plural: ref(''),
  pluralL: ref(''),
  attributes: ref([]),
  _id: faker.database.mongodbObjectId(),
})
function resetEntity() {
  // No success clearing attribute errors after using clearErrors, targeting with id, etc
  reset()
  entity.name = ''
  entity.label = ''
  entity.plural = ''
  entity.pluralL = ''
  entity.attributes = []
  resetAttribute()
  document.getElementById('inputRef').value = ''
  document.getElementById('inputRef').focus()
  setTimeout(() => {
    document.getElementById('attributeInput-rule_required').remove()
  }, 100)
}
function resetAttribute() {
  newAttribute.name = ''
  newAttribute.enums = ''
  newAttribute.type = 'string'
  document.getElementById('attributeInput').value = ''
  document.getElementById('attributeInput').focus()
  setTimeout(() => {
    document.getElementById('attributeInput-rule_required').remove()
  }, 100)
}
const submit = () => {
  entity._id = faker.database.mongodbObjectId()
  const clonedEntity = _.cloneDeep({ ...entity, name: camelize(entity.name) })
  toastEm(clonedEntity.name + ' added')
  addEntity(clonedEntity)
  resetEntity()
}
const addAttribute = (e) => {
  e.preventDefault()
  if (!validAttributeName.value) return
  let type = newAttribute.type
  let relation = {
    name: null,
    type: '',
  }
  if (Validator.relationTypes.includes(newAttribute.type)) {
    type = 'relation'
    relation.type = newAttribute.type
  }
  const attribute = {
    validators: [],
    validations: [],
    type: type,
    name: camelize(newAttribute.name),
    label: camelize(newAttribute.name),
    _id: faker.database.mongodbObjectId(),
    placeholder: '',
    relation: relation,
  }

  entity.attributes.push(attribute)
  resetAttribute()
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
  if (newAttribute.enums.length === 0 && Validator.enumTypes.includes(newAttribute.type)) return false
  return true
})
const entityValid = computed(() => {
  if (entity.attributes.length > 0 && entity.name.length > 2) return true
  if (!attributeValid.value || entity.name.length < 3 || entity.attributes.length === 0) return false
  return true
})

const inputClasses =
  'flex-1 justify-center bg-gray-100 dark:border-r-gray-600 rounded hover:bg-slate-100 rounded border-gray-300 dark:hover:border-white dark:border-gray-500 dark:bg-slate-800 px-3 py-1 text-sm mr-2 w-full dark:text-white border-gray-200 hover:border-opacity-100 dark:hover:opacity-80 overflow-auto'
</script>

<template>
  <div class="join join-vertical w-full flex-col px-2 max-h-screen w-100 pt-16 overflow-auto scrollbar-hide">
    <FormKit
      id="form"
      type="form"
      :actions="false"
      @submit="submit"
      :classes="{
        message: 'text-red-400 text-sm',
      }"
    >
      <section tabindex="0" class="collapse collapse-arrow join-item border">
        <input type="checkbox" checked="checked" />
        <div class="collapse-title text-md font-medium">
          New Entity <span v-if="entity.name" v-text="`(${entity.name})`" />
        </div>
        <div class="collapse-content">
          <FormKit
            type="text"
            id="inputRef"
            name="name"
            label="Name"
            placeholder="bank"
            :value="entity.name"
            validation="required|length:3"
            :classes="{
              input: inputClasses,
              message: 'text-red-400 max-w-32 overflow-x-auto scrollbar-hide',
              label: 'font-semibold text-slate-500',
            }"
            @input="
              (e) => {
                entity.name = e
                entity.plural = e + 's'
                entity.label = capitalize(e)
                entity.pluralL = capitalize(e) + 's'
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
            :value="entity.plural"
            @input="
              (e) => {
                entity.plural = e
                entity.pluralL = capitalize(e) + 's'
              }
            "
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
              input: inputClasses,
              label: 'font-semibold text-slate-500',
            }"
            @input="
              (e) => {
                entity.label = e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
              }
            "
          />
          <FormKit
            id="pluralL"
            type="text"
            name="label"
            label="Plural Label"
            placeholder="Banks"
            v-model="entity.pluralL"
            :classes="{
              outer: 'mt-4',
              input: inputClasses,
              label: 'font-semibold text-slate-500',
            }"
            @input="
              (e) => {
                entity.pluralL = e
              }
            "
          />
        </div>
      </section>
      <section tabindex="0" class="collapse collapse-arrow join-item border">
        <input type="checkbox" checked="checked" />
        <div class="collapse-title text-md font-medium">New Attribute(<span v-text="entity.attributes.length" />)</div>
        <div class="collapse-content">
          <FormKit
            type="text"
            id="attributeInput"
            name="attrName"
            label="Name"
            ref="inputRef"
            tabindex="0"
            v-model="newAttribute.name"
            validation-label="Attribute"
            validation="required|length:2"
            validation-visibility="dirty"
            placeholder="branch, transaction, statement..."
            :classes="{
              input: inputClasses,
              label: 'font-semibold text-slate-500',
              message: 'text-red-400 max-w-32 overflow-x-auto scrollbar-hide',
            }"
          />
          <div class="mt-5 font-bold text-blue-400" v-text="Validator.labeledTypes[newAttribute.type].label" />
          <div
            class="flex flex-col flex-grow border shadow rounded my-1 h-96 overflow-scroll scrollbar-hide dark:border-gray-600"
          >
            <label
              :key="fieldType"
              v-for="fieldType of Validator.types"
              class="px-2 py-1 w-full text-sm hover:opacity-90 hover:bg-slate-100 odd:bg-gray-200 odd:hover:bg-slate-200 hover:cursor-pointer border dark:border-gray-800 dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white dark:hover:brightness-200"
            >
              <input
                type="radio"
                tabindex="0"
                name="fieldType"
                placeholder="bg-white"
                class="mr-2 radio radio-xs radio-info"
                :value="newAttribute.type"
                @click="onTypeSelect(fieldType)"
                :checked="newAttribute.type === fieldType"
              />
              <span class="text-xs" v-text="Validator.labeledTypes[fieldType].label" />
            </label>
          </div>
          <div class="mt-5" v-if="Validator.enumTypes.includes(newAttribute.type)">
            <FormKit
              type="text"
              name="enums"
              id="enumInput"
              label="Enumerator"
              help="Comma separated list"
              v-model="newAttribute.enums"
              validation="required|length:2"
              placeholder="(transaction)... credit, debit, award, deduction..."
              :classes="{
                help: 'italic',
                message: 'text-red-400 text-sm',
                input: 'border bg-white shadow-md px-2 py-1 w-full rounded',
              }"
            />
          </div>
          <button
            @click="addAttribute"
            class="w-full flex text-center text-md rounded p-1 justify-center text-white font-bold hover:shadow-lg dark:bg-gray-800"
            v-text="'Add'"
            :class="{
              'bg-gray-300': !attributeValid,
              'bg-opacity-80': !attributeValid,
              'bg-green-500': attributeValid,
              'dark:bg-green-500': attributeValid,
              'cursor-not-allowed': !attributeValid,
            }"
          />
        </div>
      </section>
      <section tabindex="0" class="collapse collapse-arrow join-item border">
        <input type="checkbox" checked="checked" />
        <div class="collapse-title text-md font-medium">Review</div>
        <div class="collapse-content">
          <h2 class="text-md font-bold text-slate-500">Summary:</h2>
          <h3 class="text-sm text-slate-500 limit-width overflow-x-auto scrollbar-hide">
            Name: <span class="limit-width overflow-x-auto scrollbar-hide" v-text="entity.name" />
          </h3>
          <h3 class="text-sm text-slate-500 limit-width overflow-x-auto scrollbar-hide">
            Label: <span class="limit-width overflow-x-auto scrollbar-hide" v-text="entity.label" />
          </h3>
          <h3 class="text-sm text-slate-500 limit-width overflow-x-auto scrollbar-hide">
            Plural: <span class="limit-width overflow-x-auto scrollbar-hide" v-text="entity.plural" />
          </h3>
          <h3 class="text-sm text-slate-500 limit-width overflow-x-auto scrollbar-hide">
            Plural(Label): <span class="limit-width overflow-x-auto scrollbar-hide" v-text="entity.pluralL" />
          </h3>
          <h3 class="mt-4 text-md">Attributes (<span v-text="entity.attributes.length" />)</h3>
          <FormKitMessages :node="input?.node" />
          <div class="flex flex-col flex-grow overflow-y-auto scrollbar-hide">
            <table class="table-auto">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="bg-gray-500">
                  <th></th>
                  <th class="text-white text-xs text-left">Name</th>
                  <th class="text-white text-xs text-left pl-2">Type</th>
                </tr>
              </thead>
              <tbody class="border dark:border-gray-800 rounded-lg">
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
                    class="full-width-row odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 pl-2 cursor-pointer h-8 dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white dark:hover:brightness-200 border dark:border-gray-800"
                  >
                    <td class="pl-1" @click="attrRemove(attr._id)">
                      <FontAwesomeIcon icon="fa-solid fa-circle-xmark text-xs" class="text-red-400" />
                    </td>
                    <td class="pr-2">
                      <span
                        v-text="attr.name"
                        style="white-space: nowrap"
                        class="overflow-auto scrollbar-hide text-xs"
                      />
                    </td>
                    <td>
                      <span class="mx-2 font-semibold text-xs" v-text="Validator.labeledTypes[attr.type].label" />
                    </td>
                  </tr>
                </FormKit>
              </tbody>
            </table>
          </div>
          <FormKit
            tabindex="0"
            type="submit"
            :classes="{
              input: entityValid ? '' : 'cursor-not-allowed',
              outer: entityValid
                ? 'mt-1 text-center p-1 rounded text-white font-bold text-lg dark:bg-green-500 bg-green-500 hover:shadow-lg'
                : 'mt-1 text-center p-1 rounded text-white font-bold text-lg bg-gray-300 dark:bg-gray-800 opacity-80 shadow',
            }"
          >
            Create Entity
          </FormKit>
        </div>
      </section>
    </FormKit>
  </div>
</template>

<style scoped>
.left {
  min-width: 300px !important;
}
.radio:checked,
.radio[aria-checked='true'] {
  box-shadow: none;
}
.limit-width {
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 100% !important;
}
:deep(input.formkit-input) {
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 100% !important;
}

:deep(.formkit-message) {
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 100% !important;
}
</style>

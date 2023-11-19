<script setup>
import _ from 'lodash'
import { faker } from '@faker-js/faker'
const props = defineProps(['entity'])
const { entities } = useEntities()
// Consider leaving messy so we don't forget all the little gotcha about computed properties later.
// Everytime you refactor to be clean you forget simple rules =).

const nameRef = ref(null)
const focused = ref('')
const newAttribute = reactive({
  name: ref(''),
  type: ref(''),
  options: ref(''),
  relatedEntity: ref(''),
  relation: reactive({
    type: ref(''),
    name: ref(''),
  }),
})

const onFocus = (id) => {
  if (id === focused.value) {
    focused.value = ''
  } else {
    focused.value = id
  }
}
const attribute = computed(() =>
  focused.value != ''
    ? props.entity.attributes.find((e) => e._id === focused.value)
    : newAttribute
)
const attributeNames = computed(() =>
  props.entity.attributes.map((a) => a.name)
)
const editingAttribute = computed(() =>
  attributeNames.value.includes(attribute.value.name)
)
const reset = () => {
  focused.value = ''
  newAttribute.type = ''
  newAttribute.name = ''
  newAttribute.options = ''
  newAttribute.relation.name = ''
  newAttribute.relation.type = ''
  nameRef.value.focus()
  notify('Attribute saved')
}

const onAdd = () => {
  if (!valid.value) return
  if (editingAttribute.value) return reset()
  const item = {
    valid: false,
    validators: [],
    validations: [],
    name: attribute.value.name,
    type: attribute.value.type,
    _id: faker.database.mongodbObjectId(),
  }

  if (Validator.relationTypes.includes(attribute.value.type)) {
    item.relation = {
      type: attribute.value.type,
      name: attribute.value.relation.name,
    }
    // Many to one next
    //
    if (attribute.value.type === 'otm') {
      let item = {
        validators: [],
        validations: [],
        type: 'mto',
        name: props.entity.name,
        _id: faker.database.mongodbObjectId(),
      }
      relatedEntity.value.attributes.push(item)
    }
    item.type = 'relation'
  }
  if (Validator.enumTypes.includes(newAttribute.type)) {
    item.options = enumOptions.value.join(',')
  }

  props.entity.attributes.push(item)
  reset()
}
const valid = computed(() => {
  if (attribute.value.name == '') return false
  if (attribute.value.type == '') return false
  if (
    Validator.enumTypes.includes(attribute.value.type) &&
    attribute.value.options == ''
  )
    return false
  return true
})
const enumOptions = computed(() => {
  return attribute.value.options
    ? _.compact(attribute.value.options.split(','))
    : _.compact(newAttribute.options.split(','))
})
const relatedEntity = computed(
  () =>
    entities.value.filter(
      (e) =>
        e.name !== props.entity.name && e.name === attribute.value.relation.name
    )[0]
)
const relatedOptions = computed(() =>
  entities.value.filter((e) => e.name != props.entity.name)
)
</script>
<template>
  <div class="flex flex-1 flex-row">
    <EntitiesAttributesTable
      :entity="entity"
      :focused="focused"
      :onFocus="onFocus"
    />

    <div class="flex flex-1 flex-col px-2">
      {{ attribute }}
      <label class="font-bold text-gray-500">Name</label>
      <input
        ref="nameRef"
        v-model="attribute.name"
        placeholder="firstName, lastName..."
        @keyup.enter="onAdd"
        class="p-4 rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 shadow-md hover:bg-slate-100"
      />
      <label class="mt-6 font-bold text-gray-500">Type</label>
      <div
        :id="'attributeType' + entity._id"
        class="flex-auto rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide shadow-md"
      >
        <div
          :key="dataType"
          v-for="dataType of Validator.types"
          class="flex flex-grow odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
        >
          <label class="text-sm rounded p-2 w-full">
            <!-- 
              Must use both value & v-model in this case. 
              Initial checked fails despite
                dataType === attributeType 
              evaluating true on string.
            -->
            <input
              :id="dataType"
              type="radio"
              name="attributeName"
              v-model="attribute.type"
              :checked="dataType === attribute.type"
              :value="Validator.labeledTypes[dataType]?.value"
            />
            {{ Validator.labeledTypes[dataType]?.label }}
          </label>
        </div>
      </div>
      <button
        type="submit"
        :disabled="!valid"
        class="mt-2 border-2 border-gray-300 py-1 px-2 rounded w-full"
        @click="onAdd"
        :class="{
          'opacity-50': !valid,
          'text-white': valid,
          'bg-green-400': valid,
          'bg-gray-300': !valid,
          'cursor-not-allowed': !valid,
        }"
      >
        <span v-text="editingAttribute ? 'Save' : 'Add'" />
      </button>
    </div>
    <div class="flex flex-1 px-2">
      <div
        v-if="Validator.enumTypes.includes(attribute.type)"
        class="flex flex-col space-y-4"
      >
        <h1 class="mb-2 text-lg">Enumerator</h1>

        <label>Options:</label>
        <input
          type="text"
          class="rounded"
          v-model="attribute.options"
        />
        <div v-if="attribute.options">
          <label v-text="attribute.name + ' options'"></label>
          <select
            :multiple="attribute.type === 'enumeratorMulti'"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
          >
            <label></label>
            <option
              v-text="option"
              v-for="option of enumOptions"
            />
          </select>
        </div>
      </div>

      <div
        v-if="Validator.relationTypes.includes(attribute.type)"
        class="flex flex-col"
      >
        <h1 class="mb-2 text-lg">Relations</h1>
        <label
          v-text="
            Validator.labeledTypes[
              attribute?.type === 'relation'
                ? attribute.relation.type
                : attribute?.type
            ].label
          "
        />
        <select
          v-model="attribute.relation.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
        >
          <option
            v-for="option of relatedOptions"
            v-text="option.name"
          />
        </select>

        <div
          class="mt-1 rounded"
          v-if="attribute.relation.name"
        >
          <h1>This</h1>
          <input
            type="text"
            disabled="true"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :value="entity.name + '.' + attribute.name"
          />
        </div>
        <div
          class="mt-1 rounded"
          v-if="attribute.relation.name"
        >
          <h1>Other</h1>
          <input
            type="text"
            disabled="true"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :value="relatedEntity.name + '.' + entity.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { faker } from '@faker-js/faker'
const props = defineProps(['entity'])
const { entities } = useEntities()
const nameInputRef = ref(null)

// Consider leaving messy so we don't forget all the little gotcha about computed properties later.
// Everytime you refactor to be clean you forget simple rules =).
const focused = ref('')
const onFocus = (id) => {
  if (id === focused.value) {
    focused.value = ''
  } else {
    focused.value = id
  }
}
const focusedAttribute = computed(() =>
  focused.value != ''
    ? props.entity.attributes.find((e) => e._id === focused.value)
    : newAttribute
)
const newAttribute = reactive({
  name: ref(''),
  type: ref(''),
  options: ref(''),
  relatedEntity: ref(''),
})

// Will contain _id, etc...
const entity = ref(props.entity)

const reset = () => {
  newAttribute.type = ''
  newAttribute.name = ''
  newAttribute.options = ''
  newAttribute.relatedEntity = ''
  focused.value = ''
  notify('Attribute saved')
  nameInputRef.value.focus()
}
const attributeNames = computed(() =>
  props.entity.attributes.map((a) => a.name)
)
const editingAttribute = computed(() =>
  attributeNames.value.includes(focusedAttribute.value.name)
)
const onAddAttribute = () => {
  if (!validAttribute.value) return
  if (attributeNames.value.includes(focusedAttribute.value.name)) {
    reset()
    return
  }
  const item = {
    valid: false,
    validators: [],
    validations: [],
    name: focusedAttribute.value.name,
    type: focusedAttribute.value.type,
    _id: faker.database.mongodbObjectId(),
  }

  if (Validator.relationTypes.includes(focusedAttribute.value.type)) {
    item.relation = {
      type: focusedAttribute.value.type,
      name: focusedAttribute.value.relatedEntity,
    }
    if (focusedAttribute.value.type === 'otm') {
      let item = {
        validators: [],
        validations: [],
        type: 'mto',
        name: props.entity.name,
        _id: faker.database.mongodbObjectId(),
      }
      relatedEntity.value.attributes.push(item)
    }
  }
  if (Validator.enumTypes.includes(newAttribute.type)) {
    item.options = enumOptions.value
  }

  props.entity.attributes.push(item)
  reset()
}
const validAttribute = computed(() => {
  if (focusedAttribute.value.name == '') return false
  if (focusedAttribute.value.type == '') return false
  if (
    Validator.enumTypes.includes(focusedAttribute.value.type) &&
    focusedAttribute.value.options == ''
  )
    return false
  return true
})
const enumOptions = computed(() => {
  return focusedAttribute.value.options
    ? _.compact(focusedAttribute.value.options.split(','))
    : _.compact(newAttribute.options.split(','))
})
const relatedEntityOptions = computed(() =>
  entities.value.filter((e) => e.name != props.entity.name)
)
const relatedEntity = computed(
  () =>
    entities.value.filter(
      (e) =>
        e.name !== props.entity.name &&
        e.name === focusedAttribute.relatedEntity
    )[0]
)
</script>
<template>
  <div class="flex flex-row">
    <EntitiesAttributesTable
      :entity="entity"
      :focused="focused"
      :onFocus="onFocus"
    />
    <div class="flex flex-1 flex-col px-2">
      <label class="font-bold text-gray-500">Name</label>
      <input
        ref="nameInputRef"
        v-model="focusedAttribute.name"
        placeholder="firstName, lastName..."
        @keyup.enter="onAddAttribute"
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
              :value="dataType"
              v-model="focusedAttribute.type"
              :checked="dataType === focusedAttribute.type"
            />
            {{ Validator.labeledTypes[dataType]?.label }}
          </label>
        </div>
      </div>
      <button
        type="submit"
        :disabled="!validAttribute"
        class="mt-2 border-2 border-gray-300 py-1 px-2 rounded w-full"
        @click="onAddAttribute"
        :class="{
          'opacity-50': !validAttribute,
          'text-white': validAttribute,
          'bg-green-400': validAttribute,
          'bg-gray-300': !validAttribute,
          'cursor-not-allowed': !validAttribute,
        }"
      >
        <span v-text="editingAttribute ? 'Save' : 'Add'" />
      </button>
    </div>
    <div class="flex flex-1 px-2">
      <div
        v-if="Validator.enumTypes.includes(focusedAttribute.type)"
        class="flex flex-col space-y-4"
      >
        <h1 class="mb-2 text-lg">Enumerator</h1>

        <label>Options:</label>
        <input
          type="text"
          class="rounded"
          v-model="focusedAttribute.options"
        />
        <div v-if="focusedAttribute.options">
          <label v-text="focusedAttribute.name + ' options'"></label>
          <select
            :multiple="focusedAttribute.type === 'enumeratorMulti'"
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
        v-if="Validator.relationTypes.includes(focusedAttribute.type)"
        class="flex flex-col"
      >
        <div
          class="flex flex-col"
          v-if="false"
        >
          {{ focusedAttribute.type }}
          {{ focusedAttribute.relatedEntity }}
        </div>

        <div
          v-if="
            Validator.labeledTypes[newAttribute?.type] ||
            Validator.enumTypes[newAttribute?.type]
          "
        >
          <h1 class="mb-2 text-lg">Relations</h1>
          <label v-text="Validator.labeledTypes[newAttribute?.type].label" />
          <select
            v-model="focusedAttribute.relatedEntity"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
          >
            <option
              v-for="option of relatedEntityOptions"
              v-text="option.name"
            />
          </select>

          <div
            class="mt-1 rounded"
            v-if="focusedAttribute.relatedEntity"
          >
            <h1>This</h1>
            <input
              type="text"
              disabled="true"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :value="entity.name + '.' + focusedAttribute.name"
            />
          </div>
          <div
            class="mt-1 rounded"
            v-if="focusedAttribute.relatedEntity && relatedEntity"
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
  </div>
</template>

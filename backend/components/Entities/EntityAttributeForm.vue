<script setup>
import _ from 'lodash'
import { faker } from '@faker-js/faker'
const props = defineProps(['entity'])
const { entities } = useEntities()
const nameInputRef = ref(null)

const attribute = reactive({
  name: ref(''),
  type: ref(''),
  options: ref(''),
  relatedEntity: ref(''),
})

// Will contain _id, etc...
const invalidName = ref(false)
const entity = ref(props.entity)

const onAddAttribute = () => {
  if (!validAttribute.value) return
  invalidName.value = false
  const item = {
    valid: false,
    validators: [],
    validations: [],
    name: attribute.name,
    type: attribute.type,
    _id: faker.database.mongodbObjectId(),
  }

  if (Validator.relationTypes.includes(attribute.type)) {
    item.relation = {
      type: attribute.type,
      name: attribute.relatedEntity,
    }
    if (attribute.type === 'otm') {
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
  console.log({
    gogo: Validator.relationTypes.includes(attribute.type),
  })
  if (Validator.enumTypes.includes(attribute.type)) {
    item.enumOptions = enumOptions.value
  }

  props.entity.attributes.push(item)
  attribute.type = ''
  attribute.name = ''
  attribute.options = ''
  attribute.relatedEntity = ''
  nameInputRef.value.focus()
}

const validAttribute = computed(() => {
  if (attribute.name == '') return false
  if (attribute.type == '') return false
  if (Validator.enumTypes.includes(attribute.type) && attribute.options == '')
    return false

  return true
})

const enumOptions = computed(() => _.compact(attribute.options.split(',')))
const relatedEntityOptions = computed(() =>
  entities.value.filter((e) => e.name != props.entity.name)
)
const relatedEntity = computed(
  () =>
    entities.value.filter(
      (e) => e.name !== props.entity.name && e.name === attribute.relatedEntity
    )[0]
)
</script>
<template>
  <div class="flex flex-row">
    <EntitiesAttributesTable :entity="entity" />
    <div class="flex flex-1 flex-col px-2">
      <label class="font-bold text-gray-500">Name</label>
      <input
        ref="nameInputRef"
        v-model="attribute.name"
        placeholder="firstName, lastName..."
        @keyup.enter="onAddAttribute"
        class="p-4 rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 shadow-md hover:bg-slate-100"
        :class="{
          'border-2': invalidName,
          'border-red-500': invalidName,
          'border-opacity-100': invalidName,
        }"
      />
      <label class="mt-6 font-bold text-gray-500">Type</label>
      <div
        :id="'attributeType' + entity._id"
        class="flex-auto rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide shadow-md"
      >
        <div
          :key="dataType"
          v-for="dataType of attributeTypes"
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
              v-model="attribute.type"
              :checked="dataType === attribute.type"
            />
            {{ attributeTypesWithLabels[dataType]?.label }}
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
        Save
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
            name="ssooso"
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
        <div
          class="flex flex-col"
          v-if="false"
        >
          {{ attribute.type }}
          {{ attribute.relatedEntity }}
        </div>
        <h1 class="mb-2 text-lg">Relations</h1>
        <label v-text="Validator.labeledAttributes[attribute?.type].label" />
        <select
          v-model="attribute.relatedEntity"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
        >
          <option
            v-for="option of relatedEntityOptions"
            v-text="option.name"
          />
        </select>

        <div
          class="mt-1 rounded"
          v-if="attribute.relatedEntity"
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
          v-if="attribute.relatedEntity && relatedEntity"
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

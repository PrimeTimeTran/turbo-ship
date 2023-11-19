<script setup>
import _ from 'lodash'
const props = defineProps(['entity'])

const { entities } = useEntities()
const {
  save,
  valid,
  entity,
  focused,
  onFocus,
  editing,
  attribute,
  newAttribute,
  relatedEntityOptions,
} = useEntity(props.entity, entities)
// Consider leaving messy so we don't forget all the little gotcha about computed properties later.
// Everytime you refactor to be clean you forget simple rules =).
const nameRef = ref(null)

const onAdd = () => {
  if (!valid.value) return
  const newAttribute = _.cloneDeep({ ...attribute.value })

  save(newAttribute)
}

const enumOptions = computed(() => {
  return attribute.value.options
    ? _.compact(attribute.value.options.split(','))
    : _.compact(newAttribute.options.split(','))
})
function otherRelationMethod() {
  const a = attribute.value
  let add = ''
  if (a.type === 'mto') add = 's'
  if (a.relation.type === 'mto') add = 's'
  if (a.relation.type === 'mtm') add = 's'
  return `${a.relation.name}.${entity.name}${add}`
}
function thisRelationMethod() {
  let add = ''
  if (attribute.value.type === 'otm') add = 's'
  if (attribute.value.relation.type === 'otm') add = 's'
  if (attribute.value.relation.type === 'mtm') add = 's'
  return `${props.entity.name}.${attribute.value.relation.name}${add}`
}
function requiresSubField() {
  const a = attribute.value
  return (
    Validator.enumTypes.includes(a.type) ||
    Validator.relationTypes.includes(a.type)
  )
}
const showEnumTab = computed(() => {
  const a = attribute.value
  return (
    (editing.value && Validator.enumTypes.includes(a.type)) ||
    Validator.enumTypes.includes(a.type)
  )
})
const showRelationTab = computed(() => {
  const a = attribute.value
  if (Validator.enumTypes.includes(a.type)) return false
  if (Validator.relationTypes.includes(a.relation.type)) return true
})
</script>
<template>
  <div class="grid grid-cols-12 flex-1 flex-row gap-2">
    <div class="col-span-4 flex flex-col">
      <EntitiesAttributesTable
        :entity="entity"
        :focused="focused"
        :onFocus="onFocus"
      />
    </div>
    <div class="col-span-4 flex flex-col">
      <label class="font-bold text-gray-500">Name</label>
      <input
        ref="nameRef"
        @keyup.enter="onAdd"
        v-model="attribute.name"
        placeholder="firstName, lastName..."
        class="p-4 rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 shadow-md hover:bg-slate-100"
      />
      <label class="mt-6 font-bold text-gray-500">Type</label>
      <div
        :id="'attributeType' + entity._id"
        class="flex-auto rounded bg-neutral-50 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide hover:shadow-lg"
      >
        <EntitiesAttributeTypeList :attribute="attribute" />
      </div>
      <button
        type="submit"
        v-if="!editing || Validator.relationTypes.includes(attribute.type)"
        @click="onAdd"
        :disabled="!valid"
        class="mt-2 border-2 border-gray-300 py-1 px-2 rounded w-full"
        :class="{
          'opacity-50': !valid,
          'text-white': valid,
          'bg-green-400': valid,
          'bg-gray-300': !valid,
          'cursor-not-allowed': !valid,
        }"
      >
        <span v-text="editing ? 'Save' : 'Add'" />
      </button>
    </div>
    <div
      class="col-span-4 flex flex-col"
      v-if="requiresSubField"
    >
      <div
        class="flex flex-col space-y-4"
        v-if="showEnumTab"
      >
        <label class="font-bold text-gray-500">Enumerator</label>
        <label>Options:</label>
        <input
          type="text"
          class="rounded-lg border-gray-300 dark:border-gray-600 dark:placeholder-gray-400 hover:shadow-lg"
          v-model="attribute.options"
        />
        <div v-if="attribute.options">
          <label v-text="attribute.name + ' options'"></label>
          <select
            :multiple="attribute.type === 'enumeratorMulti'"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
          >
            <option
              v-text="option"
              v-for="option of enumOptions"
            />
          </select>
        </div>
      </div>

      <div
        class="flex flex-col"
        v-if="showRelationTab"
      >
        <label class="font-bold text-gray-500">Relations</label>
        <label
          v-text="
            Validator.labeledTypes[
              attribute?.type === 'relation'
                ? attribute.relation.type
                : attribute?.type
            ]?.label
          "
        />

        <select
          v-model="attribute.relation.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
        >
          <option
            v-text="option.name"
            v-for="option of relatedEntityOptions"
          />
        </select>
        <div v-if="attribute.relation.name">
          <div class="mt-1 rounded">
            <h1>This</h1>
            <input
              type="text"
              disabled="true"
              :value="thisRelationMethod()"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mt-1 rounded">
            <h1>Other</h1>
            <input
              type="text"
              disabled="true"
              :value="otherRelationMethod()"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      key="1"
      v-html="tips[0]"
      class="flex flex-1 flex-col justify-center items-center text-center"
    />
  </div>
</template>

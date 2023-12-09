<script setup>
import _ from 'lodash'
const props = defineProps(['entity'])

const { entities } = useEntities()
const { save, valid, entity, focused, onFocus, editing, attribute, focusedType, newAttribute, relatedEntityOptions } =
  useEntity(props.entity, entities)
// Consider leaving messy so we don't forget all the little gotcha about computed properties later.
// Every time you refactor to be clean you forget simple rules =).

const nameRef = ref(null)
const onAdd = () => {
  if (!valid.value) return
  const newAttribute = _.cloneDeep({ ...attribute.value, placeholder: 'placeholder...' })

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
  return Validator.enumTypes.includes(a.type) || Validator.relationTypes.includes(a.type)
}
const showEnumTab = computed(() => {
  const a = attribute.value
  return (editing.value && Validator.enumTypes.includes(a.type)) || Validator.enumTypes.includes(a.type)
})
const showRelationTab = computed(() => {
  const a = attribute.value
  if (Validator.enumTypes.includes(a.type)) return false
  if (Validator.relationTypes.includes(a.relation.type)) return true
})
</script>
<template>
  <div class="grid grid-cols-12 gap-2 max-w-6xl">
    <div class="col-span-7 flex flex-col">
      <EntitiesEntityAttributesTable :entity="entity" :focused="focused" :onFocus="onFocus" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label class="font-bold text-gray-500">Name</label>
      <input
        ref="nameRef"
        @keyup.enter="onAdd"
        v-model="attribute.name"
        placeholder="firstName, lastName..."
        class="p-4 rounded border bg-white border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 dark:text-white dark:hover:border-white dark:border-gray-500 dark:bg-slate-800 shadow-md hover:shadow-lg"
      />
      <label class="mt-2 font-bold text-gray-500">Type</label>
      <div
        :id="'attributeType' + entity._id"
        class="flex-auto rounded border dark:border-gray-800 border-opacity-0 hover:border-opacity-100 h-96 overflow-auto scrollbar-hide hover:shadow-lg"
      >
        <EntitiesEntityAttributeTypeList :attribute="attribute" :focusedType="focusedType" />
      </div>
      <button
        type="submit"
        v-if="!editing || Validator.relationTypes.includes(attribute.type)"
        @click="onAdd"
        :disabled="!valid"
        class="mt-2 border border-gray-300 py-1 px-2 rounded w-full dark:text-white dark:bg-gray-800 dark:border-gray-800"
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
      v-if="requiresSubField"
      class="col-span-3 flex flex-col"
      :class="{
        'justify-center': !showEnumTab && !showRelationTab,
      }"
    >
      <div class="flex flex-col space-y-4" v-if="showEnumTab">
        <label class="font-bold text-gray-500">Enumerator</label>
        <label class="dark:text-white">Options:</label>
        <input
          type="text"
          placeholder="gryffindor, slytherin, hufflepuff..."
          class="p-4 pl-2 rounded bg-white border border-gray-200 border-opacity-0 hover:border-opacity-100 text-sm h-0 dark:text-white dark:hover:border-white dark:border-gray-500 dark:bg-slate-800 shadow-md hover:shadow-lg"
          v-model="attribute.options"
        />
        <div v-if="attribute.options">
          <label class="dark:text-white" v-text="attribute.name + ' options'"></label>
          <select
            :multiple="attribute.type === 'enumeratorMulti'"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
          >
            <option v-text="option" v-for="option of enumOptions" />
          </select>
        </div>
      </div>
      <div class="flex flex-col" v-else-if="showRelationTab">
        <label class="font-bold text-gray-500 dark:text-white">Relations</label>
        <label class="dark:text-white" v-text="Validator.labeledTypes[focusedType]?.label" />
        <select
          v-model="attribute.relation.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-hide"
        >
          <option v-text="option.name" v-for="option of relatedEntityOptions" />
        </select>
        <div v-if="attribute.relation.name">
          <div class="mt-1 rounded">
            <h1 class="dark:text-white">This</h1>
            <input
              type="text"
              disabled="true"
              :value="thisRelationMethod()"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mt-1 rounded">
            <h1 class="dark:text-white">Other</h1>
            <input
              type="text"
              disabled="true"
              :value="otherRelationMethod()"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div
        v-html="tips[0]"
        v-if="!showEnumTab && !showRelationTab"
        class="col-span-3 flex flex-col dark:text-gray-600"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.col-span-2 {
  flex: 1;
  min-width: 158px !important;
}
</style>
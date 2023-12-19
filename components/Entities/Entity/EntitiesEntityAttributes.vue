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
  const newAttribute = _.cloneDeep({
    ...attribute.value,
  })

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
  <div class="flex flex-row overflow-x-auto w-full min-w-fit space-x-2">
    <div class="flex flex-col w-100">
      <EntitiesEntityAttributesTable :entity="entity" :focused="focused" :onFocus="onFocus" />
    </div>
    <div class="flex w-100">
      <div class="col-span-2 flex flex-none flex-col">
        <label class="font-bold">Name</label>
        <input
          ref="nameRef"
          @keyup.enter="onAdd"
          v-model="attribute.name"
          placeholder="firstName, lastName..."
          class="input input-bordered w-full max-w-xs input-sm"
        />
        <label class="mt-2 font-bold">Type</label>
        <div :id="'attributeType' + entity._id" class="flex-auto rounded h-96 overflow-auto scrollbar-hide">
          <EntitiesEntityAttributeTypeList :attribute="attribute" :focusedType="focusedType" />
        </div>
        <button
          type="submit"
          v-if="!editing || Validator.relationTypes.includes(attribute.type)"
          @click="onAdd"
          :disabled="!valid"
          class="mt-2 border py-1 px-2 rounded w-full dark:text-white"
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
    </div>
    <div class="flex flex-col px-2 w-100 overflow-clip flex-shrink grow">
      <div
        v-if="requiresSubField"
        class="col-span-3 flex flex-col px-2"
        :class="{
          'justify-center': !showEnumTab && !showRelationTab,
        }"
      >
        <div class="flex flex-col space-y-4" v-if="showEnumTab">
          <label class="font-bold">Enumerator</label>
          <label class="">Options:</label>
          <input
            type="text"
            placeholder="gryffindor, slytherin, hufflepuff..."
            class="input input-bordered max-w-xs input-sm w-100"
            v-model="attribute.options"
          />
          <div v-if="attribute.options">
            <label class="" v-text="attribute.name + ' options'"></label>
            <select
              :multiple="attribute.type === 'enumeratorMulti'"
              class="text-sm rounded-lg block w-full p-2.5 overflow-auto scrollbar-hide"
            >
              <option v-text="option" v-for="option of enumOptions" />
            </select>
          </div>
        </div>
        <div class="flex flex-col" v-else-if="showRelationTab">
          <label class="font-bold">Relations</label>
          <label class="" v-text="Validator.labeledTypes[focusedType]?.label" />
          <select
            v-model="attribute.relation.name"
            class="text-sm rounded-lg block w-full p-2.5 overflow-auto scrollbar-hide"
          >
            <option v-text="option.name" v-for="option of relatedEntityOptions" />
          </select>
          <div v-if="attribute.relation.name">
            <div class="mt-1 rounded">
              <h1 class="">This</h1>
              <input
                type="text"
                disabled="true"
                :value="thisRelationMethod()"
                class="text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div class="mt-1 rounded">
              <h1 class="">Other</h1>
              <input
                type="text"
                disabled="true"
                :value="otherRelationMethod()"
                class="text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>
        </div>
        <div
          v-html="tips[0]"
          v-if="!showEnumTab && !showRelationTab"
          class="hidden lg:flex flex-col text-center w-72 overflow-clip px-2"
        ></div>
      </div>
    </div>
  </div>
</template>

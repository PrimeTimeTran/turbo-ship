<script setup>
import Multiselect from 'vue-multiselect'

const props = defineProps(['attribute', 'entity', 'entities'])
const selected = ref('validations')
const validationsVal = ref('')

const onSelect = (item) => {
  if (item._id == selected.value._id) {
    selected.value = ''
  }
  selected.value = item
}

// Must use a ref.
// Vue tries to be smart and reuse otherwise.
const entities = ref(props.entities)

const getAttr = (id, name) => {
  let idx = entities.value.findIndex((e) => e._id === id)
  const e = entities.value[idx]
  idx = e.attributes.findIndex((a) => a.name == name)
  return e.attributes[idx]
}

const onEditAttr = (entityId, attrName, value) => {
  if (protectedAttributes.includes(attrName)) return
  const attr = getAttr(entityId, attrName)
  attr.type = value
}

const getTabText = (tab) => {
  if (tab === 'validations')
    return `validators (${props?.attribute?.validators?.length || 0})`
  if (tab === 'type') return getType(tab)
  return tab
}
const getType = (tab) => {
  if (tab === 'type') return `type (${props?.attribute?.type})`
  return tab
}
</script>
<!-- HTML: String text, textarea -->
<!-- HTML: Boolean switch, checkbox, radio -->
<!-- HTML: Enumerator select, radio -->
<!-- 
  Comma-separated options:
    Those values are the ones that will be saved on the database. 
    Labels should be defined on the Internationalization (I18n) file later. 
    No spaces or special characters are allowed. 
    Example: open, in_progress, closed 
-->
<template>
  <div class="p-2 bg-white rounded min-h-full shadow-md">
    <ul
      class="flex flex-wrap p-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded"
    >
      <li class="">
        <input
          v-model="attribute.name"
          placeholder="firstName, lastName..."
          class="flex-auto p-4 text-md bg-white rounded border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-0 text-blue-500 dark:text-blue-500"
        />
      </li>
      <li
        class="me-2 hover:text-blue-600"
        v-for="tab of tabs"
      >
        <a
          aria-current="page"
          @click="onSelect(tab)"
          class="inline-block p-1 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          :class="{ 'text-blue-600': tab === selected }"
        >
          <span v-text="getTabText(tab)" />
        </a>
      </li>
    </ul>

    <div
      class="pt-1"
      v-if="selected == 'validations'"
    >
      <div class="grid grid-cols-4 auto-cols-max grid-flow-row-dense gap-x-4">
        <div class="col-span-2">
          <multiselect
            v-if="attribute.type != 'boolean'"
            :multiple="true"
            v-model="validationsVal"
            :close-on-select="false"
            :clear-on-select="false"
            placeholder="Select validations"
            :options="AttributeValidator[attribute.type]()"
            @select="$emit('close', validationsVal)"
            @close="$emit('close', validationsVal)"
          />
        </div>
        <div class="col-span-2 flex justify-start flex-grow p-2 rounded">
          <div></div>
        </div>
      </div>
    </div>
    <div v-if="selected == 'type'">
      <EntitiesAttributeTypesSelector
        :entity="entity"
        :attr="attribute"
        @onEditAttr="onEditAttr"
        :selectedType="attribute.type"
      />
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style></style>

<script setup>
import Multiselect from 'vue-multiselect'

const { entities } = useEntities()

const props = defineProps(['focusedAttribute', 'entity'])
const selected = ref('validations')
const selectedValidations = ref('')

const onSelect = (item) => {
  if (item._id == selected.value._id) {
    selected.value = ''
  }
  selected.value = item
}

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
    return `validators (${props?.focusedAttribute?.validators?.length || 0})`
  if (tab === 'type') return getType(tab)
  return tab
}
const getType = (tab) => {
  if (tab === 'type') return `type (${props?.focusedAttribute?.type})`
  return tab
}

const invalid = (val) => {
  return (
    validationFields[val].requiresValue && validationFields[val].value == null
  )
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
  <div class="p-2 my-2 bg-white rounded min-h-full shadow-md">
    <ul
      class="flex flex-wrap p-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 rounded"
    >
      <li>
        <label class="mt-6 font-bold text-gray-500"> Details: </label>
        <input
          v-model="focusedAttribute.name"
          placeholder="firstName, lastName..."
          class="flex-auto py-3 px-2 text-md rounded bg-slate-100 border-2 border-gray-200 border-opacity-0 hover:border-opacity-100 h-0 text-blue-500 dark:text-blue-500"
        />
      </li>
      <li
        v-for="tab of tabs"
        class="me-2 hover:text-blue-600"
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
    <EntitiesAttributeTypeGroup
      :entity="entity"
      :attr="focusedAttribute"
      @onEditAttr="onEditAttr"
      :selectedType="focusedAttribute.type"
    />
    <div class="pt-1 h-96">
      <div class="grid grid-cols-8 auto-cols-max grid-flow-row-dense gap-x-4">
        <div class="col-span-3">
          <multiselect
            v-if="focusedAttribute.type != 'boolean'"
            :multiple="true"
            v-model="selectedValidations"
            :close-on-select="false"
            :clear-on-select="false"
            placeholder="Select validations"
            :options="AttributeValidator[focusedAttribute.type]()"
            @select="$emit('close', selectedValidations)"
            @close="$emit('close', selectedValidations)"
          />
        </div>
        <div class="col-span-5 flex flex-grow flex-col">
          <table class="overflow-auto scrollbar-hide w-100">
            <thead>
              <tr>
                <th class="text-left pl-2">Name</th>
                <th class="text-left">Value</th>
                <th class="text-right pr-2">Valid</th>
              </tr>
            </thead>
            <tbody class="overflow-auto scrollbar-hide">
              <tr
                v-for="val of selectedValidations"
                class="odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200"
              >
                <td
                  class="pl-2"
                  :class="{
                    'text-red-800': invalid(val),
                  }"
                >
                  <span v-text="val" />
                </td>
                <td>
                  <input
                    v-if="validationFields[val].requiresValue"
                    class="bg-transparent rounded border-2 border-opacity-0 hover:border-opacity-100 px-2"
                    :class="{
                      'border-gray-400': !invalid(val),
                      'border-red-800': invalid(val),
                      'border-opacity-100': invalid(val),
                    }"
                  />
                </td>
                <td
                  class="flex justify-end pr-2"
                  :class="{
                    'text-red-800': invalid(val),
                  }"
                >
                  <span
                    v-text="
                      !validationFields[val].requiresValue ||
                      validationFields[val].value != null
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

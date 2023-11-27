<script setup>
import Multiselect from 'vue-multiselect'
const props = defineProps(['entity'])
const focused = ref('')
const onFocus = (idx) => (focused.value = idx)
const focusedAttribute = computed(() => {
  if (!props.entity || !props.entity.attributes) {
    return null
  }

  const item = props.entity.attributes.find((a) => a._id === focused.value)
  return item
})
function valid(attribute) {
  const a = attribute

  if (a.validators?.length == 0) {
    return true
  }

  if (Validator.enumTypes.includes(a.name)) {
    if (!a.options) a.options = []
    return false
  }

  if (a.type === 'enum') return a.validations?.every((validator) => validator.valid)
}
function close(items) {
  if (focusedAttribute.value) {
    focusedAttribute.value.validations = []
  }
  items.forEach((i) => {
    if (Validator.requiresValues.includes(i)) {
      const item = {
        name: i,
        valid: false,
        value: null,
      }
      focusedAttribute.value.validations.push(item)
    }
  })
}
</script>
<template>
  <div class="flex flex-5">
    <div class="flex flex-col w-fit">
      <table>
        <thead>
          <tr>
            <th class="text-gray-500 text-left pl-4">Name</th>
            <th class="text-gray-500 text-left">Type</th>
            <th class="text-left text-slate-500">Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="attribute._id"
            :set="(isValid = valid(attribute))"
            @click="onFocus(attribute._id)"
            v-for="(attribute, idx) of Validator.attributes(entity)"
            class="hover:cursor-pointer border odd:bg-gray-200 odd:hover:bg-slate-200 dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white dark:hover:brightness-200 dark:border-gray-800 text-xs"
            :class="{
              'bg-blue-200': focusedAttribute?._id === attribute._id,
            }"
          >
            <td class="flex flex-row items-center pl-1">
              <span v-text="`${idx + 1}. `" />
              <input
                v-model="attribute.name"
                class="text-gray-900 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'text-red-600': !isValid,
                  'text-green-600': isValid && focusedAttribute?._id !== attribute._id,
                }"
              />≈
            </td>
            <td>
              <EntitiesAttributeTypeSelect :attribute="attribute" />
            </td>
            <td>
              <FontAwesomeIcon
                class="px-2"
                color="grey"
                icon="fa-solid fa-circle-info"
                :class="{
                  'text-blue-600': focusedAttribute?._id == attribute._id,
                }"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-1 flex-col px-2" v-if="focusedAttribute">
      <div class="flex flex-row justify-between mb-2">
        <div class="font-medium text-slate-500">
          {{ focusedAttribute.name }}
        </div>
        <div for="countries_multiple" class="font-medium text-slate-500 dark:text-white">Select an option</div>
      </div>
      <div>
        <multiselect
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          placeholder="Select validations"
          v-model="focusedAttribute.validators"
          :options="Validator.optionalValidators[focusedAttribute.type]"
          @close="close(focusedAttribute.validators, focusedAttribute)"
        />
        <div :key="val" class="flex flex-col" v-for="val of focusedAttribute?.validations">
          <label class="font-medium text-slate-500" v-text="val.name"></label>
          <input type="text" :name="val.name" v-model="val.value" :oninput="(e) => Validator.validate(e, val)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

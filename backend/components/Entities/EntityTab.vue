<script setup>
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
  return Math.random() < 0.5

  return attribute.value?.validators?.every((validator) => true)
}
</script>
<template>
  <div class="flex flex-row space-x-2">
    <table class="flex-1 overflow-auto scrollbar-hide w-100">
      <thead>
        <tr>
          <th class="text-center pl-2 mx-2 px-4">Valid</th>
          <th class="text-left">Name</th>
          <th class="text-left">Type</th>
          <th class="">Focus</th>
        </tr>
      </thead>
      <tbody class="overflow-auto scrollbar-hide over rounded">
        <tr
          :key="attribute._id"
          :set="(isValid = valid(attribute))"
          @click="onFocus(attribute._id)"
          v-for="(attribute, idx) of AttributeValidator.safeAttributes(entity)"
          class="hover:cursor-pointer hover:bg-slate-300 border-2"
          :class="{
            'bg-blue-200': focusedAttribute?._id == attribute._id,
          }"
        >
          <td class="pl-1 text-center">
            <font-awesome-icon
              v-if="isValid"
              color="green"
              icon="fa-regular fa-circle-check"
            />
            <font-awesome-icon
              v-else
              color="red"
              icon="fa-solid fa-circle-xmark"
            />
          </td>
          <td class="flex flex-row items-center pl-1">
            <span v-text="`${idx + 1}. `" />
            <input
              v-model="attribute.name"
              class="text-gray-900 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :class="{
                'text-green-600': isValid,
                'text-red-600': !isValid,
              }"
            />
          </td>
          <td>
            <select
              @change="notify"
              v-model="attribute.type"
              class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
              :class="{
                'text-green-600': isValid,
                'text-red-600': !isValid,
              }"
            >
              <option
                :value="dataType"
                v-for="dataType of attributeTypes"
              >
                {{ attributeTypesWithLabels[dataType]?.label }}
              </option>
            </select>
          </td>
          <td>
            <font-awesome-icon
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
    <div
      class="flex flex-1"
      v-if="focused == ''"
    >
      ss
    </div>
    <div
      class="flex flex-1 flex-col px-2"
      v-if="focusedAttribute"
    >
      <div class="flex flex-row justify-between mb-2">
        <div class="font-medium">{{ focusedAttribute.name }}</div>
        <div
          for="countries_multiple"
          class="font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </div>
      </div>
      <div>
        <select
          multiple
          v-model="focusedAttribute.validations"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option
            :value="dataType"
            v-for="dataType of AttributeValidator[focusedAttribute.type]()"
          >
            {{ dataType }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['attribute'])
</script>

<template>
  <select
    v-if="attribute.type === 'relation'"
    v-model="attribute.relation.type"
    class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
  >
    <option
      :key="dataType"
      :value="dataType"
      v-for="dataType of Validator.types"
    >
      <span v-text="Validator.labeledTypes[dataType]?.label" />
    </option>
  </select>

  <select
    v-else
    v-model="attribute.type"
    class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
  >
    <option
      :key="dataType"
      :value="dataType"
      v-for="dataType of Validator.types"
    >
      <span v-text="Validator.labeledTypes[dataType]?.label" />
    </option>
  </select>
</template>

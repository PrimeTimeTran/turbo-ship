<script setup>
const props = defineProps(['attribute'])
const focusedKey = computed(() => {
  return props.attribute.type === 'relation'
    ? props.attribute.relation.type
    : props.attribute.type
})
</script>

<template>
  <div>
    {{ Validator.labeledTypes[focusedKey]?.label }}
    <!-- <select
      v-model="focusedKey"
      @click="onFocus(props.attribute._id)"
      class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
    >
      <option
        v-for="dataType of Validator.types"
        :value="Validator.labeledTypes[dataType].value"
      >
        {{ Validator.labeledTypes[dataType].label }}
      </option>
    </select> -->
  </div>
</template>

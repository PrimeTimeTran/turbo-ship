<script setup>
const props = defineProps(['name', 'label'])

const inputClasses =
  'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700'
const messageClasses = 'text-red-500 dark:text-red-300 absolute'
const outerClasses = 'flex flex-grow flex-col rounded'
const allClasses = {
  outer: outerClasses,
  input: inputClasses,
  label: 'dark:text-white',
  message: messageClasses,
}
</script>
<template>
  <FormKit
    type="text"
    :name="name"
    :label="label"
    placeholder="Yes"
    :options="{
      true: 'Yes',
      false: 'No',
    }"
    :classes="allClasses"
  />
</template>

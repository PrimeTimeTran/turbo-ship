<script setup>
const props = defineProps({
  min: { type: String },
  max: { type: String },
  type: { type: String },
  help: { type: String },
  name: { type: String },
  label: { type: String },
  validation: { type: String },
  placeholder: { type: String },
  multiple: { type: Boolean, default: false },
  options: {
    validator: (value) => {
      return typeof value === 'string' || typeof value === 'object'
    },
  },
})

const inputClasses =
  'min-w-full p-1 rounded border dark:text-white border dark:border-gray-700 bg-white dark:bg-base-300'
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
  <input
    :label="label"
    :classes="allClasses"
    :placeholder="placeholder"
    :options="options"
    v-if="type === 'boolean'"
    type="checkbox"
    class="toggle"
    checked
    :name="name"
  />
  <FormKit
    v-else-if="type === 'string'"
    type="text"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  />
  <FormKit
    v-else-if="type === 'textarea'"
    type="textarea"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  />
  <FormKit
    v-else-if="type === 'integer'"
    :min="min"
    :max="max"
    type="number"
    number="integer"
    step="1"
    :name="name"
    :label="label"
    :classes="allClasses"
    :placeholder="placeholder"
  />
  <FormKit
    v-else-if="type === 'decimal'"
    :min="min"
    :max="max"
    type="number"
    number
    :name="name"
    :label="label"
    :classes="allClasses"
    :placeholder="placeholder"
  />
  <FormKit
    v-else-if="type === 'date'"
    type="date"
    :help="help"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  />
  <FormKit
    v-else-if="type === 'datetime-local'"
    type="datetime-local"
    :help="help"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  />
  <!-- <FormKit
    v-else-if="type === 'array'"
    type="array"
    :help="help"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  /> -->
  <!-- <FormKit
    v-else-if="type === map"
    type="map"
    :help="help"
    :name="name"
    :label="label"
    :classes="allClasses"
    :validation="validation"
    :placeholder="placeholder"
  /> -->
  <FormKit
    v-else-if="type === 'select' && multiple"
    type="select"
    :name="name"
    :label="label"
    :multiple="multiple"
    :placeholder="placeholder"
    :classes="allClasses"
    :options="options"
  />
  <FormKit
    v-else-if="type === 'select' && !multiple"
    type="select"
    :name="name"
    :label="label"
    :multiple="multiple"
    :placeholder="placeholder"
    :classes="allClasses"
    :options="options"
  />
</template>

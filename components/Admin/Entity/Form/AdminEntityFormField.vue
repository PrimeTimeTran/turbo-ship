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
  entityType: { type: String },
  multiple: { type: Boolean, default: false },
  options: {
    validator: (value) => {
      return typeof value === 'string' || typeof value === 'object' || typeof value === 'array'
    },
  },
  value: {
    validator: (value) => {
      return true
    },
  },
  field: {
    validator: (value) => {
      return true
    },
  },
  fooValue: {
    validator: (value) => {
      return true
    },
  },
})
const messageClasses = 'text-red-500 dark:text-red-300 absolute'
const outerClasses = 'min-w-100 w-100 '
const allClasses = {
  wrapper: 'w-100',
  outer: outerClasses,
  input: 'input w-100 max-w-xs',
  label: 'dark:text-white font-semibold',
  message: messageClasses,
}
</script>
<template>
  <div>
    <div v-if="type === 'boolean'" class="flex grow pt-6">
      <label class="mr-2" v-text="label" />
      <input
        checked
        :placeholder="placeholder"
        :options="options"
        type="checkbox"
        class="toggle"
        :classes="allClasses"
        :name="name"
        @change="(e) => (props.value = e.target.checked)"
      />
    </div>
    <FormKit
      v-else-if="type === 'string'"
      type="text"
      :name="name"
      :label="label"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <FormKit
      v-else-if="type === 'textarea'"
      type="textarea"
      :name="name"
      :label="label"
      :classes="allClasses"
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
      number
      :min="min"
      :max="max"
      type="number"
      :name="name"
      :label="label"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <FormKit
      v-else-if="type === 'date'"
      type="date"
      :help="help"
      :label="label"
      :value="value"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <FormKit
      v-else-if="type === 'datetime-local'"
      type="datetime-local"
      :help="help"
      :label="label"
      :value="value"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <FormKit
      v-else-if="type === 'enumeratorMulti' && multiple"
      multiple
      type="select"
      :name="name"
      :label="label"
      :value="value"
      :options="options"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <FormKit
      v-else-if="type === 'enumerator' && !multiple"
      type="select"
      :name="name"
      :label="label"
      :options="options"
      :value="value"
      :classes="allClasses"
      :placeholder="placeholder"
    />
    <div v-else-if="fooValue && field.type === 'relation' && fooValue.length > 0">
      <label>{{ field.name }}</label>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Pick the best JS framework</option>
        <option v-for="option of fooValue">{{ option }}</option>
      </select>
    </div>
    <div v-else>{{ field }}</div>
    {{ field.value }}
    {{ fooValue }}
  </div>
</template>

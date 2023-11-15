<!-- 
  1. When to use defineEmits
      - $emit isn't defined inside of setup.
  2. Formkit
      - Intro
      - Update reactively
      - Listen for input events
      - Update a changes b
      - Submit asynchronously
      - Reset
  3. Reactive
      - C fields in script/template
      - R fields in script/template
      - U fields in script/template
      - D fields in script/template
 -->
<script setup>
import { reset } from '@formkit/core'
const emit = defineEmits(['onAdd'])

const name = ref('')
const plural = ref('')
const modelData = reactive({
  name: name,
  plural: plural,
})
const submit = (fields) => {
  console.log({
    fields,
    name: modelData.name,
    plural: modelData.plural,
  })
  reset('form')
  emit('onAdd', 'sosos')
}
</script>
<template>
  <div class="col-span-2 border-r-2 p-2">
    <div class="flex flex-col flex-grow">
      <h1 class="text-2xl">Create Entity</h1>
      <FormKit
        id="form"
        type="form"
        @submit="submit"
      >
        <FormKit
          autofocus
          name="name"
          type="text"
          label="Name"
          help="Entity's name"
          placeholder="bank"
          :value="modelData.name"
          @input="
            (e) => {
              modelData.name = e
              modelData.plural = e + 's'
              if (e == '') modelData.plural = e + ''
            }
          "
          :classes="{
            label: 'font-bold',
            input:
              'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
          }"
        />
        <FormKit
          type="text"
          name="plural"
          label="Plural"
          placeholder="banks"
          help="Entity's plural"
          v-model="modelData.plural"
          @input="(e) => (modelData.plural = e)"
          :classes="{
            outer: 'mt-4',
            label: 'font-bold',
            input:
              'flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2',
          }"
        />
      </FormKit>
      <pre class="mt-16">{{ modelData }}</pre>
    </div>
  </div>
</template>

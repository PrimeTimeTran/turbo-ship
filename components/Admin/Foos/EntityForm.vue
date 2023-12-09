<script setup>
import { reset } from '@formkit/core'
const props = defineProps(['searching', 'fetchFilteredFoos', 'createForm', 'clear'])
const { addFoo } = useFoos()

async function submit(fields) {
  if (props.searching) {
    await props.fetchFilteredFoos(fields)
    return
  }
  const foo = addFoo(fields)
  if (foo) {
    reset('fooForm')
  }
}
</script>

<template>
  <div class="relative">
    <FormKit
      id="fooForm"
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ value }"
      :classes="{
        help: 'dark:text-white',
        message: 'text-red-500 dark:text-red-300 absolute',
      }"
    >
      <div id="Foo" class="form-items-container grid grid-cols-4 gap-x-7 gap-y-7 px-3">
        <!-- <div class="item">
          <AdminFormField name="fooBoolean" type="boolean" label="fooBoolean" placeholder="" :options="{}" />
        </div> -->
        <div class="item">
          <AdminFormField
            type="text"
            name="fooString"
            label="fooString"
            placeholder=""
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            type="textarea"
            name="fooText"
            label="fooText"
            placeholder=""
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooInteger"
            type="number"
            min="undefined"
            max="undefined"
            label="fooInteger"
            placeholder=""
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooDecimal"
            type="float"
            min="undefined"
            max="undefined"
            label="fooDecimal"
            placeholder=""
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooDate"
            type="date"
            :multiple="searching"
            label="fooDate"
            :placeholder="searching ? 'Select house/houses' : 'Select placeholder'"
            :validation="searching ? '' : ''"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooDateTime"
            type="datetime-local"
            :multiple="searching"
            label="fooDateTime"
            :placeholder="searching ? 'Select house/houses' : 'Select placeholder'"
            :validation="searching ? '' : ''"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooArray"
            type="array"
            :multiple="searching"
            label="fooArray"
            :placeholder="searching ? 'Select house/houses' : 'Select placeholder'"
            :validation="searching ? '' : ''"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooMap"
            type="map"
            label="fooMap"
            :placeholder="searching ? 'Select house/houses' : 'Select placeholder'"
            :validation="searching ? '' : ''"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>
        <div class="item">
          <AdminFormField
            name="foodEnumeratorMulti"
            type="select"
            label="foodEnumeratorMulti"
            placeholder=""
            :options="{
              a: 'A',
              b: 'B',
              c: 'C',
            }"
            :multiple="searching"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooEnumerator"
            type="select"
            label="fooEnumerator"
            placeholder=""
            :options="{
              a: 'A',
              b: 'B',
              c: 'C',
            }"
            :multiple="searching"
            :validation="searching ? '' : ''"
          />
        </div>
      </div>
      <div class="flex flex-row space-x-1 mt-6">
        <FormKit
          type="button"
          label="Clear"
          @click="clear"
          :classes="{
            outer: 'bg-red-500 rounded basis-1/4',
            input: 'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        />
        <FormKit
          type="submit"
          :disabled="disabled"
          :classes="{
            outer: 'bg-green-500 rounded basis-3/4',
            input: 'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        >
          Submit
        </FormKit>
      </div>
    </FormKit>
  </div>
</template>
<style></style>

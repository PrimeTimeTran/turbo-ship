<script setup>
import { reset } from '@formkit/core'
const props = defineProps(['clear', 'searching', 'createForm', 'fetchFilteredFoos'])
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
        <div class="item">
          <AdminFormField
            name="fooBoolean"
            type="boolean"
            label="fooBoolean"
            placeholder="fooPlaceBoolean"
            :options="{}"
          />
        </div>
        <div class="item">
          <AdminFormField
            type="string"
            name="fooString"
            label="fooString"
            placeholder="fooPlaceString"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            type="textarea"
            name="fooText"
            label="fooText"
            placeholder="fooPlaceText"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooInteger"
            type="integer"
            label="fooInteger"
            placeholder="fooPlaceInteger"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooDecimal"
            type="decimal"
            label="fooDecimal"
            placeholder="fooPlaceDecimal"
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
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooMap"
            type="map"
            label="fooMap"
            :placeholder="searching ? 'Select house/houses' : 'Select placeholder'"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="foodEnumeratorMulti"
            type="select"
            label="foodEnumeratorMulti"
            placeholder="a,b,c"
            :options="{
              a: 'A',
              b: 'B',
              c: 'C',
            }"
            multiple
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            multiple
            type="select"
            name="relation-fooOTM"
            label="fooOTM"
            placeholder="one-to-many"
            :options="{}"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            multiple
            type="select"
            name="relation-fooMTO"
            label="fooMTO"
            placeholder="many-to-one"
            :options="{}"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            multiple
            type="select"
            name="relation-fooOTO"
            label="fooOTO"
            placeholder="one-to-one"
            :options="{}"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            multiple
            type="select"
            name="relation-fooMTM"
            label="fooMTM"
            placeholder="many-to-many"
            :options="{}"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="fooEnumerator"
            type="select"
            label="fooEnumerator"
            placeholder="a,b,c,"
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

<script setup>
import _ from 'lodash'
const props = defineProps(['entity', 'entityType'])
const cols = ref([])
const items = ref([])
cols.value = GlobalState.formSortedFields(props.entityType)
function setup() {
  items.value = TFormHelper.setupFormFields(props.entity, props.entityType)
  cols.value.forEach((att) => {
    let attribute = items.value.filter((item) => item.name === att.name)
    att.value = attribute.value
  })
}

function getField(field) {
  return GlobalState.entities[props.entityType][field.name]
}
function onSubmit(e) {
  e.preventDefault()
  e.stopPropagation()
  toastEm({ val: 'Clicked' })
}
watch(() => props.entity._id, setup)

onMounted(() => {
  console.log('Type: ', props.entityType)
  console.log('Cols: ', cols.value.length)
  console.log('Items: ', items.value.length)
})
</script>
<template>
  <div>
    <h1 class="text-4xl">
      {{ capitalize(entityType) }} <span class="text-md">{{ entity._id }}</span>
    </h1>
    <FormKit
      :id="`entityForm-${entity._id}`"
      :key="`entityForm-${entity._id}`"
      type="form"
      @submit="submit"
      :actions="false"
      :value="entity"
      #default="{ value }"
      :classes="{
        wrapper: 'bg-red-300',
        help: 'dark:text-white',
        message: 'text-red-500 dark:text-red-300',
      }"
    >
      <div class="grid grid-cols-3 gap-3">
        <div v-for="field of cols" class="flex grow">
          <AdminEntityFormField
            :help="''"
            :field="field"
            :type="field.type"
            :name="field.name"
            :fooValue="entity[field.name]"
            :options="getField(field)?.options"
            :multiple="getField(field)?.type === 'enumeratorMulti'"
            :value="field.type != 'date' ? entity[field.name] : TFormHelper.makeDate(entity[field.name])"
            :placeholder="field.placeholder"
            :label="`${getField(field)?.label} ${`${
              getField(field)?.options?.length > 1 ? `(${getField(field)?.options.length})` : ``
            }`}`"
          />
        </div>
      </div>
      <div class="flex mt-16">
        <div class="flex flex-1"></div>
        <div class="flex flex-1 justify-center items-center h-12">
          <div
            @click="onSubmit"
            class="flex grow justify-center items-center bg-success h-100 min-h-full hover:cursor-pointer mx-16 rounded text-white"
          >
            <FormKit type="submit" @click="onSubmit" :classes="{ inner: 'text-white font-bold' }"> Save </FormKit>
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>

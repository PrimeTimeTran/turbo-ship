<script setup>
const props = defineProps(['entity', 'entityType'])
let cols = ref([])

function setupAttributes() {
  cols.value = GlobalState.formSortedFields(props.entityType)
}
setupAttributes()
</script>
<template>
  <div class="p-6">
    <h1 class="text-4xl">{{ capitalize(entityType) }}</h1>
    <FormKit
      :id="`entityForm-${entity._id}`"
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ value }"
      :classes="{
        help: 'dark:text-white',
        message: 'text-red-500 dark:text-red-300',
      }"
    >
      {{ value }}
      <div class="grid grid-cols-3 gap-3">
        <div v-for="field of cols" class="flex">
          <AdminEntityFormField
            v-if="field.type != 'date'"
            :help="''"
            :field="field"
            :type="field.type"
            :value="field.value"
            :entityType="entityType"
            v-model="entity[field.name]"
            :fooValue="entity[field.name]"
            :placeholder="field.placeholder"
            :label="GlobalState.entities[entityType][field.name]?.label"
            :options="GlobalState.entities[entityType][field.name]?.options"
            :multiple="GlobalState.entities[entityType][field.name]?.type === 'enumeratorMulti'"
          />
          <AdminEntityFormField
            v-else
            :help="''"
            :field="field"
            :type="field.type"
            :entityType="entityType"
            :fooValue="entity[field.name]"
            :placeholder="field.placeholder"
            :value="TFormHelper.makeDate(entity[field.name])"
            :v-model="TFormHelper.makeDate(entity[field.name])"
            :label="GlobalState.entities[entityType][field.name]?.label"
            :options="GlobalState.entities[entityType][field.name]?.options"
          />
        </div>
      </div>
    </FormKit>
  </div>
</template>
<style></style>

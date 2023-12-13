<script setup>
const { enumColor, turboCopy } = useHelpers()
const props = defineProps(['document', 'field', 'state', 'deleteItem', 'entityType', 'toggleSelect'])
const text = computed(() => props.document[props.field.name])
const dropDownTypes = ['text', 'map', 'string']

function copy(field, text) {
  if (field.type != 'relation') {
    turboCopy(text)
  }
}
</script>
<template>
  <AdminEntityTableRowEllipsis
    v-if="field.name === ''"
    :item="document"
    :deleteItem="deleteItem"
    :entityType="entityType"
  />
  <span v-else>
    <AdminEntityTablePreviewCard v-if="property?._id" :item="document" :field="field" />
    <input
      v-else-if="field.name === '_id'"
      type="checkbox"
      class="checkbox checkbox-sm"
      @click="toggleSelect(document._id)"
      :checked="state.selected.includes(document._id)"
    />
    <div v-else-if="field.name !== ''">
      <AdminEntityTableDocList
        v-if="field.type === 'relation'"
        :document="document"
        :field="field"
        :items="document[field.name]"
      />
      <span v-else-if="Type.dates.includes(field.type)" v-text="parseDate(text)" @click="copy(field, text)" />
      <span v-else-if="Type.floats.includes(field.type)" @click="copy(field, text)">
        {{ formatMoney(text) }}
      </span>
      <AdminEntityTableDropdown v-else-if="dropDownTypes.includes(field.type)" :text="text" />
      <span v-else-if="!Type.enums.includes(field.type)" v-text="property" />
      <span v-else-if="field.type === 'enumeratorMulti'" class="space-x-1 space-y-1">
        <span
          v-for="item of document[field.name]"
          @click="copy(field, item)"
          class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
          :class="{ [`bg-${enumColor(entityType, field, item, item)}-500`]: true }"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-white" />
          <span v-text="item" class="text-white" />
          <FontAwesomeIcon
            v-if="text"
            size="sm"
            color="grey"
            icon="fa-solid fa-copy"
            class="ml-2 shadow hover:shadow-md"
          />
        </span>
      </span>
      <span
        @click="copy(field, text)"
        v-else-if="field.type === 'enumerator'"
        class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
        :class="{ [`bg-${enumColor(entityType, field, document, text)}-500`]: true }"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-white" />
        <span v-text="text" class="text-white" />
        <FontAwesomeIcon
          v-if="text"
          size="sm"
          color="grey"
          icon="fa-solid fa-copy"
          class="ml-2 shadow hover:shadow-md"
        />
      </span>
    </div>
  </span>
</template>
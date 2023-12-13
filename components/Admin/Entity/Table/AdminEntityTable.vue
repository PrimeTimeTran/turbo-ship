<script setup>
import _ from 'lodash'
import draggable from 'vuedraggable'
import { useClipboard } from '@vueuse/core'
const source = ref('')
const { copy } = useClipboard({ source })
const route = useRoute()
const entityType = route.path.split('/administrator/')[1]
const { users: data, fetchPage, meta } = useBars(entityType)

const state = reactive({
  data: ref(data),
  hidden: ref([]),
  selected: ref([]),
  localSort: ref([]),
  attributesWithTypes: ref([]),
})
function setupAttributes() {
  let cols = GlobalState.entityCols(entityType)
  cols = cols.filter((col) => !state.hidden.includes(col.name))
  state.localSort = cols
  state.data = state.data.sort((a, b) => {
    return state.localSort.indexOf(a.name) - state.localSort.indexOf(b.name)
  })
  state.attributesWithTypes = state.localSort
}
setupAttributes()
function selectAll(e) {
  if (e.target.checked) {
    state.data.forEach((i) => {
      state.selected.push(i._id)
    })
  } else {
    state.selected = []
  }
}
function toggleSelect(id) {
  if (state.selected.includes(id)) {
    _.pull(state.selected, id)
  } else {
    state.selected.push(id)
  }
}
function turboCopy(val) {
  copy(val)
  toastEm('Copied: ' + val)
}
function deleteItem(id) {
  state.data = state.data.filter((i) => i._id !== id)
  toastEm('Deleted: ' + id, 1500, 'danger')
}
const sortableTypes = ['string', 'decimal', 'integer']
function createSortFields() {
  const fields = {}
  state.attributesWithTypes.forEach((attribute) => {
    if (sortableTypes.includes(attribute.type)) {
      fields[attribute.name] = ref('')
    }
  })
  return fields
}
const sortFields = reactive(createSortFields())
function toggleSort(field, dir) {
  if (sortFields[field] === dir) return
  sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
  sort(field, sortFields[field])
}
const sort = (field, dir) => {
  const isAsc = dir === 'ASC'
  let left = isAsc ? 1 : -1
  let right = isAsc ? -1 : 1
  state.data = state.data.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? left : right))
}
function enumColor(attribute, item) {
  return `${colors[GlobalState.entities[entityType][attribute.name].options.indexOf(item[attribute.name])]}`
}
function hideColumn(attribute) {
  state.hidden.push(attribute)
  state.localSort = state.localSort.filter((a) => a.name !== attribute.name)
}
const visibleColumns = computed(() => {
  return state.localSort.filter((attribute) => !state.hidden.includes(attribute.name))
})
</script>
<template>
  <VTable />
</template>

<style>
tr td:nth-child(n + 3) {
  min-width: 150px !important;
}
tr td:nth-child(n + 3) {
  max-width: 500px !important;
}
</style>

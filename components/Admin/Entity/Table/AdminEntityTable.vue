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
  <table class="overflow-x-auto mb-12 text-left text-sm w-full min-w-full">
    <thead class="w-full min-w-full bg-base-100">
      <draggable tag="tr" item-key="name" class="w-full min-w-full" :list="state.localSort" draggable=".item">
        <template #item="{ element, index }">
          <template v-if="index === 0">
            <th class="w-6" :data-draggable="false"></th>
          </template>
          <template v-else-if="!state.hidden.includes(element.name)">
            <th
              :key="element.name"
              :class="{
                item: index > 1,
                'w-6': element.name === '_id',
                'p-2': !element.name === '_id',
              }"
            >
              <input v-if="index === 1" @click="selectAll" type="checkbox" class="checkbox checkbox-sm" />
              <AdminEntityTableHeaderDropdown
                v-else
                :state="state"
                :attribute="element"
                @toggleSort="toggleSort"
                @hideColumn="hideColumn"
              />
            </th>
          </template>
        </template>
      </draggable>
    </thead>
    <tbody class="bg-base-200 dark:bg-base-200 w-full min-w-full">
      <tr
        :key="item._id"
        v-for="item of state.data"
        class="w-full min-w-full odd:bg-base-200 even:bg-base-300 hover:text-green-500 dark:hover:text-green-400 h-16 max-h-16 text-clip"
      >
        <td v-for="(attribute, idx) of visibleColumns" :class="{ ['p-2']: idx > 1 }">
          <AdminEntityTableRowEllipsis
            v-if="attribute.name === ''"
            :item="item"
            :deleteItem="deleteItem"
            :entityType="entityType"
          />
          <div v-else="!state.hidden.includes(attribute.name)">
            <AdminEntityTablePreviewCard v-if="item[attribute.name]?._id" :item="item" :attribute="attribute" />
            <input
              v-else-if="attribute.name === '_id'"
              type="checkbox"
              class="checkbox checkbox-sm"
              @click="toggleSelect(item._id)"
              :checked="state.selected.includes(item._id)"
            />
            <div
              v-else-if="attribute.name !== ''"
              @click="
                () => {
                  if (attribute.type != 'relation') {
                    turboCopy(item[attribute.name])
                  }
                }
              "
            >
              <span v-if="Type.dates.includes(attribute.type)" v-text="parseDate(item[attribute.name])" />
              <span v-else-if="Type.floats.includes(attribute.type)">
                {{ formatMoney(item[attribute.name]) }}
              </span>
              <div
                v-else-if="attribute.type === 'string'"
                class="dropdown dropdown-hover w-64 max-w-64 truncate whitespace-normal"
              >
                <div class="m-1 line-clamp-2" v-text="item[attribute.name]" />
                <div
                  class="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box"
                  v-text="item[attribute.name]"
                />
              </div>
              <div
                v-else-if="attribute.type === 'text'"
                class="dropdown dropdown-hover w-64 max-w-64 truncate whitespace-normal"
              >
                <div class="m-1 line-clamp-2" v-text="item[attribute.name]" />
                <div
                  class="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box"
                  v-text="item[attribute.name]"
                />
              </div>
              <AdminEntityTableDocList
                v-else-if="attribute.type === 'relation'"
                :item="item"
                :attribute="attribute"
                :items="item[attribute.name]"
              />
              <span v-else-if="!Type.enums.includes(attribute.type)" v-text="item[attribute.name]" />
              <span
                v-text="item[attribute.name]"
                v-else-if="attribute.type === 'enumeratorMulti'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-gray-300 dark:bg-slate-900"
              >
              </span>
              <span
                v-else-if="attribute.type === 'enumerator'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-neutral dark:bg-slate-900"
              >
                <span class="h-1.5 w-1.5 rounded-full" :class="{ [`bg-${enumColor(attribute, item)}-500`]: true }" />
                <span v-text="item[attribute.name]" :class="{ [`text-${enumColor(attribute, item)}-500`]: true }" />
                <FontAwesomeIcon
                  v-if="item[attribute.name]"
                  size="sm"
                  class="ml-2"
                  color="grey"
                  icon="fa-solid fa-copy"
                />
              </span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <AdminEntityPagination :meta="meta" :fetchPage="fetchPage" />
</template>

<style>
tr td:nth-child(n + 3) {
  min-width: 150px !important;
}
tr td:nth-child(n + 3) {
  max-width: 500px !important;
}
</style>

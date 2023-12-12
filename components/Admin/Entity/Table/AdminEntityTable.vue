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
  let values = Object.keys(globalMeta[entityType])
  values = values.filter((str) => !str.includes('_id'))
  // We want the checkbox on the far left
  values.unshift('_id')
  // Farther left we want the ellipsis
  values.unshift('')
  values = values.map((a) => ({ name: a, ...globalMeta[entityType][a] }))
  state.localSort = values
  state.data = state.data.sort((a, b) => {
    return state.localSort.indexOf(a.name) - state.localSort.indexOf(b.name)
  })
  state.attributesWithTypes = values
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
</script>
<template>
  <table class="overflow-x-auto mb-12 text-left text-sm w-full min-w-full">
    <thead class="w-full min-w-full bg-base-100">
      <draggable tag="tr" item-key="name" class="w-full min-w-full" v-model="state.localSort" draggable=".item">
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
              <AdminEntityTableHeaderDropdown v-else :state="state" :attribute="element" @toggleSort="toggleSort" />
            </th>
          </template>
        </template>
      </draggable>
    </thead>
    <tbody class="bg-base-200 dark:bg-base-200 w-full min-w-full">
      <tr
        :key="item._id"
        v-for="item of state.data"
        class="w-full min-w-full odd:bg-base-200 even:bg-base-300 hover:text-green-500 dark:hover:text-green-400"
      >
        <td v-for="(attribute, idx) of state.localSort" :class="{ ['p-2']: idx > 1 }">
          <AdminEntityTableRowEllipsis
            v-if="attribute.name === ''"
            :item="item"
            :deleteItem="deleteItem"
            :entityType="entityType"
          />
          <div v-else="!state.hidden.includes(attribute.name)">
            <input
              v-if="attribute.name === '_id'"
              type="checkbox"
              class="checkbox checkbox-sm"
              @click="toggleSelect(item._id)"
              :checked="state.selected.includes(item._id)"
            />
            <div v-else-if="attribute.name !== ''" @click="turboCopy(item[attribute.name])">
              <span v-text="item[attribute.name]" />
              <FontAwesomeIcon size="sm" class="ml-2" color="grey" icon="fa-solid fa-copy" />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <AdminEntityPagination :meta="meta" :fetchPage="fetchPage" />
</template>

<script setup>
import _ from 'lodash'
import { useClipboard } from '@vueuse/core'
const source = ref('')
const { copy } = useClipboard({ source })

const attributesWithTypes = [
  { type: 'ObjectId', name: '_id', label: '' },
  { type: 'string', name: 'email', label: 'Email' },
  { type: 'string', name: 'firstName', label: 'First Name' },
  { type: 'string', name: 'lastName', label: 'Last Name' },
  { type: 'enumeratorMulti', name: 'bookAppearances', label: 'Book Appearances' },
  { type: 'enumerator', name: 'status', label: 'Status' },
]
const { meta, fetchPage } = useUsers()
const route = useRoute()
// const entityType = route.path.split('/administrator/')[1]
const entityType = 'wizards'
// Need to map available types with the fields from data
const { apiUrl } = useAPI()
// const url = `${apiUrl}/${path}`
const url = `${apiUrl}/wizards`
const { data, pending, error, refresh } = await useFetch(url, {
  onRequest({ request, options }) {},
  onRequestError({ request, options, error }) {
    console.log({
      errorRequest: error,
    })
  },
  onResponse({ request, response, options }) {
    console.log({ fields: response._data.data[0] })
  },
  onResponseError({ request, response, options }) {
    console.log({
      errorResponse: error,
    })
  },
})

let localData = ref(data.value.data)
const state = reactive({
  selected: ref([]),
  hidden: ref([]),
})
function selectAll(e) {
  if (e.target.checked) {
    localData.value.forEach((i) => {
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
  localData.value = localData.value.filter((i) => i._id !== id)
  toastEm('Deleted: ' + id, 1500, 'danger')
}
const sortableTypes = ['string', 'decimal', 'integer']
function createSortFields() {
  const fields = {}
  attributesWithTypes.forEach((attribute) => {
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
  localData.value = localData.value.sort((a, b) => ((a[field] ?? '') > (b[field] ?? '') ? left : right))
}
</script>
<template>
  <table class="overflow-x-auto mb-12 text-left text-sm w-full min-w-full">
    <thead class="w-full min-w-full bg-base-100">
      <tr class="w-full min-w-full">
        <th class="w-6"></th>
        <th v-for="attribute of attributesWithTypes" class="p-2" :class="{ 'w-6': attribute.name === '_id' }">
          <input v-if="attribute.name === '_id'" @click="selectAll" type="checkbox" class="checkbox checkbox-sm" />
          <AdminEntityTableHeaderDropdown
            v-else
            :attribute="attribute"
            @toggleSort="toggleSort"
            :state="state"
            v-if="!state.hidden.includes(attribute.name)"
          />
        </th>
      </tr>
    </thead>
    <tbody class="bg-base-200 dark:bg-base-200 w-full min-w-full">
      <tr
        :key="item._id"
        v-for="item of localData"
        class="w-full min-w-full odd:bg-base-200 even:bg-base-300 hover:text-green-500 dark:hover:text-green-400"
      >
        <AdminEntityTableRowEllipsis :deleteItem="deleteItem" :item="item" :entityType="entityType" />
        <td v-for="attribute of attributesWithTypes" class="p-2">
          <div v-if="item[attribute.name] && !state.hidden.includes(attribute.name)">
            <input
              v-if="attribute.name === '_id'"
              @click="toggleSelect(item._id)"
              type="checkbox"
              class="checkbox checkbox-sm"
              :checked="state.selected.includes(item._id)"
            />
            <div v-else @click="turboCopy(item[attribute.name])">
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

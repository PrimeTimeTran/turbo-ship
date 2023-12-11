<script setup>
const props = defineProps(['searching'])

const { foos, sort, meta, fetchPage, fetchFilteredFoos } = useFoos()

const sortFields = reactive({
  fooBoolean: ref('ASC'),
  fooString: ref('ASC'),
  fooText: ref('ASC'),
  fooInteger: ref('ASC'),
  fooDecimal: ref('ASC'),
  fooDate: ref('ASC'),
  fooDateTime: ref('ASC'),
  fooArray: ref('ASC'),
  fooMap: ref('ASC'),
  fooEnumerator: ref('ASC'),
  foodEnumeratorMulti: ref('ASC'),
  fooOTM: ref('ASC'),
  fooMTO: ref('ASC'),
  fooOTO: ref('ASC'),
  fooMTM: ref('ASC'),
})

function toggleSort(field) {
  sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
  sort(field, sortFields[field])
}

function getSortingIcon(field) {
  const order = sortFields[field]
  return order === 'ASC' ? '▼' : '▲'
}

function getFooEnumeratorColor(field, key) {
  key = isNaN(key) ? key?.toString()?.toLowerCase() : key
  const weight = field == 'bg' ? 500 : 400
  const kolors = {
    a: `${field}-red-${weight}`,
    b: `${field}-pink-${weight}`,
    c: `${field}-purple-${weight}`,
  }
  return {
    [kolors[key]]: true,
  }
}
</script>
<template>
  <div
    class="flex flex-col overflow-scroll justify-center rounded-lg border border-gray-200 dark:border-gray-600 shadow-md pb-12 bg-white dark:bg-slate-950"
  >
    <AdminFoosForm :searching="searching" :fetchFilteredFoos="fetchFilteredFoos" />
    <table
      class="overflow-x-auto mb-12 border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
    >
      <thead class="bg-gray-200 dark:bg-neutral-950">
        <tr class="dark:text-black">
          <th
            scope="col"
            @click="toggleSort('fooBoolean')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooBoolean <span v-text="getSortingIcon('fooBoolean')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooString')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooString <span v-text="getSortingIcon('fooString')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooText')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooText <span v-text="getSortingIcon('fooText')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooInteger')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooInteger <span v-text="getSortingIcon('fooInteger')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooDecimal')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooDecimal <span v-text="getSortingIcon('fooDecimal')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooDate')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooDate <span v-text="getSortingIcon('fooDate')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooDateTime')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooDateTime <span v-text="getSortingIcon('fooDateTime')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooArray')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooArray <span v-text="getSortingIcon('fooArray')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooMap')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooMap <span v-text="getSortingIcon('fooMap')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooEnumerator')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooEnumerator <span v-text="getSortingIcon('fooEnumerator')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('foodEnumeratorMulti')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            foodEnumeratorMulti
            <span v-text="getSortingIcon('foodEnumeratorMulti')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooOTM')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooOTM <span v-text="getSortingIcon('fooOTM')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooMTO')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooMTO <span v-text="getSortingIcon('fooMTO')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooOTO')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooOTO <span v-text="getSortingIcon('fooOTO')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fooMTM')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            fooMTM <span v-text="getSortingIcon('fooMTM')" />
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-800 dark:border-gray-600">
        <tr
          :key="foo._id"
          v-for="foo in foos"
          class="hover:bg-gray-200 odd:bg-neutral-100 even:bg-neutral-50 dark:hover:bg-neutral-950 dark:border-t-gray-600 odd:dark:bg-neutral-950 even:dark:bg-neutral-950"
        >
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooBoolean" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooString" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooText" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooInteger" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooDecimal" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooDate" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooDateTime" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooArray" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooMap" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-6 py-4" v-if="foo.fooEnumerator">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold"
              :class="getFooEnumeratorColor('text', foo.fooEnumerator)"
            >
              <span class="h-1.5 w-1.5 rounded-full" :class="getFooEnumeratorColor('bg', foo.fooEnumerator)" />
              <span v-text="foo.fooEnumerator" />
            </span>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.foodEnumeratorMulti" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooOTM" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooMTO" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooOTO" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="foo.fooMTM" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AdminPagination :meta="meta" :fetchPage="fetchPage" />
  </div>
</template>

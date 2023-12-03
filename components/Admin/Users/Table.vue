<script setup>
const props = defineProps(['searching'])

const { users, sort, meta, fetchPage, fetchFilteredUsers } = useUsers()

const sortFields = reactive({
  status: ref('ASC'),
  standing: ref('ASC'),
  email: ref('ASC'),
  firstName: ref('ASC'),
  lastName: ref('ASC'),
  role: ref('ASC'),
  accounts: ref('ASC'),
  transactions: ref('ASC'),
  banks: ref('ASC'),
  age: ref('ASC'),
  owner: ref('ASC'),
  netWorth: ref('ASC'),
  messages: ref('ASC'),
})

function getSortingIcon(field) {
  const order = sortFields[field]
  return order === 'ASC' ? '▼' : '▲'
}

function toggleSort(field) {
  sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
  sort(field, sortFields[field])
}
function getStatusColor(field, key) {
  key = isNaN(key) ? key?.toString()?.toLowerCase() : key
  const weight = field == 'bg' ? 500 : 400
  const kolors = {
    pending: `${field}-red-${weight}`,
    open: `${field}-pink-${weight}`,
    closed: `${field}-purple-${weight}`,
  }
  return {
    [kolors[key]]: true,
  }
}
function getStandingColor(field, key) {
  key = isNaN(key) ? key?.toString()?.toLowerCase() : key
  const weight = field == 'bg' ? 500 : 400
  const kolors = { current: `${field}-red-${weight}`, behind: `${field}-pink-${weight}` }
  return {
    [kolors[key]]: true,
  }
}
</script>
<template>
  <div
    class="flex flex-col overflow-scroll justify-center rounded-lg border border-gray-200 dark:border-gray-600 shadow-md pb-12 bg-white dark:bg-slate-950"
  >
    <AdminUsersForm :searching="searching" :fetchFilteredUsers="fetchFilteredUsers" />
    <table
      class="overflow-x-auto mb-12 border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
    >
      <thead class="bg-gray-200 dark:bg-neutral-950">
        <tr class="dark:text-black">
          <th
            scope="col"
            @click="toggleSort('status')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            status <span v-text="getSortingIcon('status')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('standing')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            standing <span v-text="getSortingIcon('standing')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('email')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            email <span v-text="getSortingIcon('email')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('lastName')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            lastName <span v-text="getSortingIcon('lastName')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('role')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            role <span v-text="getSortingIcon('role')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('accounts')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            accounts <span v-text="getSortingIcon('accounts')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('transactions')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            transactions <span v-text="getSortingIcon('transactions')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('banks')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            banks <span v-text="getSortingIcon('banks')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('age')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            age <span v-text="getSortingIcon('age')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('owner')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            owner <span v-text="getSortingIcon('owner')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('netWorth')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            netWorth <span v-text="getSortingIcon('netWorth')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('messages')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            messages <span v-text="getSortingIcon('messages')" />
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-800 dark:border-gray-600">
        <tr
          :key="user._id"
          v-for="user in users"
          class="hover:bg-gray-200 odd:bg-neutral-100 even:bg-neutral-50 dark:hover:bg-neutral-950 dark:border-t-gray-600 odd:dark:bg-neutral-950 even:dark:bg-neutral-950"
        >
          <td class="px-6 py-4" v-if="user.status">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold"
              :class="getStatusColor('text', user.status)"
            >
              <span class="h-1.5 w-1.5 rounded-full" :class="getStatusColor('bg', user.status)" />
              <span v-text="user.status" />
            </span>
          </td>
          <td class="px-6 py-4" v-if="user.standing">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold"
              :class="getStandingColor('text', user.standing)"
            >
              <span class="h-1.5 w-1.5 rounded-full" :class="getStandingColor('bg', user.standing)" />
              <span v-text="user.standing" />
            </span>
          </td>
          <th class="flex gap-3 px-3 py-4 font-normal text-gray-900">
            <div class="h-10 w-10">
              <img
                :src="user.avatarUrl || 'https://i.pravatar.cc/150?img=4'"
                class="h-full rounded-full object-cover object-center"
              />
              <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
            </div>
            <div class="text-sm">
              <span v-text="user.firstName" class="font-medium text-gray-700 dark:text-white" />
              <div>
                <span v-text="user.email" class="text-gray-400" />
              </div>
            </div>
          </th>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.lastName" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.role" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="user.accounts"
                class="font-medium text-gray-700 dark:text-white"
                :onclick="`my_modal_${user._id}.showModal()`"
              />
              <dialog :id="`my_modal_${user._id}`" class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg" v-text="user.email"></h3>
                  <p class="py-4">Things about this user</p>
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.transactions" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.banks" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.age" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.owner" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.netWorth" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div v-text="user.messages" class="font-medium text-gray-700 dark:text-white" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <AdminFormPagination :meta="meta" :fetchPage="fetchPage" />
  </div>
</template>

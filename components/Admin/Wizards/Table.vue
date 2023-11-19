<script setup>
const props = defineProps(['searching'])

let { wizards, sort, meta, fetchPage, fetchFilteredWizards } = useWizards()

const sortFields = reactive({
  email: ref('ASC'),
  firstName: ref('ASC'),
  lastName: ref('ASC'),
  house: ref('ASC'),
  city: ref('ASC'),
  country: ref('ASC'),
  jobTitle: ref('ASC'),
  industry: ref('ASC'),
  patronus: ref('ASC'),
  potions: ref('ASC'),
  charms: ref('ASC'),
  dada: ref('ASC'),
  gender: ref('ASC'),
  apparition: ref('ASC'),
  fanScore: ref('ASC'),
  avatarUrl: ref('ASC'),
  topSpells: ref('ASC'),
  bookAppearances: ref('ASC'),
})

function getSortingIcon(field) {
  const order = sortFields[field]
  return order === 'ASC' ? '▼' : '▲'
}

function toggleSort(field) {
  sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
  sort(field, sortFields[field])
}

function getHouseColor(field, key) {
  key = makeLowerCase(key)
  const weight = field == 'bg' ? 500 : 400
  const kolors = {
    gryffindor: `${field}-red-${weight}`,
    slytherin: `${field}-green-${weight}`,
    hufflepuff: `${field}-pink-${weight}`,
    ravenclaw: `${field}-purple-${weight}`,
    unknown: `${field}-yellow-${weight}`,
  }
  return {
    [kolors[key]]: true,
  }
}

function getTopSpellsColor(field, key) {
  const weight = field == 'bg' ? 500 : 400
  const kolors = {
    jinxes: `${field}-rose-${weight}`,
    hexes: `${field}-pink-${weight}`,
    charms: `${field}-purple-${weight}`,
    curses: `${field}-violet-${weight}`,
    spells: `${field}-indigo-${weight}`,
    counters: `${field}-blue-${weight}`,
    healing: `${field}-sky-${weight}`,
    transfigurations: `${field}-teal-${weight}`,
  }
  return {
    [kolors[key]]: true,
  }
}

function getBookAppearancesColor(field, key) {
  const weight = field == 'bg' ? 500 : 400
  const kolors = {
    1: `${field}-rose-${weight}`,
    2: `${field}-pink-${weight}`,
    3: `${field}-purple-${weight}`,
    4: `${field}-violet-${weight}`,
    5: `${field}-indigo-${weight}`,
    6: `${field}-blue-${weight}`,
    7: `${field}-sky-${weight}`,
    8: `${field}-teal-${weight}`,
  }
  return {
    [kolors[key]]: true,
  }
}
</script>
<template>
  <div
    class="flex flex-col overflow-scroll justify-center rounded-lg border border-gray-200 dark:border-gray-600 shadow-md pb-12"
  >
    <!-- Info: Destructuring fetchFilteredWizards from useWizards() breaks it.
            The result is this table doesn't rerender when the API request completes regardless of outcome.
          -->
    <admin-wizards-form
      :searching="searching"
      :fetchFilteredWizards="fetchFilteredWizards"
    />
    <admin-form-pagination
      :meta="meta"
      :fetchPage="fetchPage"
    />
    <table
      class="overflow-x-auto my-6 border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
    >
      <thead class="bg-gray-200 dark:bg-neutral-950">
        <tr class="dark:text-black">
          <th
            scope="col"
            @click="toggleSort('email')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Email <span v-text="getSortingIcon('email')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('lastName')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Last Name <span v-text="getSortingIcon('lastName')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('house')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            House <span v-text="getSortingIcon('house')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('topSpells')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Top Spells <span v-text="getSortingIcon('topSpells')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('bookAppearances')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Book Appearances <span v-text="getSortingIcon('bookAppearances')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('city')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            City <span v-text="getSortingIcon('city')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('country')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Country <span v-text="getSortingIcon('country')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('jobTitle')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Role <span v-text="getSortingIcon('jobTitle')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('industry')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Industry <span v-text="getSortingIcon('industry')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('patronus')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Patronus <span v-text="getSortingIcon('patronus')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('potions')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Potions <span v-text="getSortingIcon('potions')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('charms')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Charms <span v-text="getSortingIcon('charms')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('apparition')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Apparate? <span v-text="getSortingIcon('apparition')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('dada')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            D.A.D.A <span v-text="getSortingIcon('dada')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('gender')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Gender <span v-text="getSortingIcon('gender')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('fanScore')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Fan Score <span v-text="getSortingIcon('fanScore')" />
          </th>
        </tr>
      </thead>
      <tbody
        class="divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-800 dark:border-gray-600"
      >
        <tr
          :key="wizard._id"
          v-for="wizard in wizards"
          class="hover:bg-gray-200 odd:bg-neutral-100 even:bg-neutral-50 dark:hover:bg-neutral-950 dark:border-t-gray-600 odd:dark:bg-neutral-950 even:dark:bg-neutral-950"
        >
          <th class="flex gap-3 px-3 py-4 font-normal text-gray-900">
            <div class="relative h-10 w-10">
              <img
                :src="wizard.avatarUrl || 'https://i.pravatar.cc/150?img=4'"
                class="h-full rounded-full object-cover object-center"
              />
              <span
                class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
              />
            </div>
            <div class="text-sm">
              <span
                v-text="wizard.firstName"
                class="font-medium text-gray-700 dark:text-white"
              />
              <div>
                <span
                  v-text="wizard.email"
                  class="text-gray-400"
                />
              </div>
            </div>
          </th>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.lastName"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td
            class="px-6 py-4"
            v-if="wizard.house"
          >
            <span
              class="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold"
              :class="getHouseColor('text', wizard.house)"
            >
              <span
                class="h-1.5 w-1.5 rounded-full"
                :class="getHouseColor('bg', wizard.house)"
              />
              <span v-text="wizard.house" />
            </span>
          </td>
          <td
            class="px-6 py-4"
            v-if="wizard.topSpells"
          >
            <div class="flex justify-center gap-1">
              <span
                :key="item"
                v-for="item of wizard.topSpells"
                v-text="item"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white"
                :class="getTopSpellsColor('bg', item)"
              />
            </div>
          </td>
          <td
            class="px-6 py-4"
            v-if="wizard.bookAppearances"
          >
            <div class="flex justify-center gap-1">
              <span
                :key="item"
                v-for="item of wizard.bookAppearances"
                v-text="item"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white"
                :class="getBookAppearancesColor('bg', item)"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.city"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.country"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.jobTitle"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.industry"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.patronus"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.potions"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.charms"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.apparition"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.dada"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.gender"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
          <td class="px-3 py-4">
            <div class="text-sm">
              <div
                v-text="wizard.fanScore"
                class="font-medium text-gray-700 dark:text-white"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

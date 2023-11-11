<script setup>
const props = defineProps(['searching'])

const { wizards, sort, meta, fetchFilteredWizards } = useWizards()

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
  gender: ref('ASC'),
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
  const valueColors = {
    gryffindor: `${field}-red-${weight}`,
    slytherin: `${field}-green-${weight}`,
    hufflepuff: `${field}-pink-${weight}`,
    ravenclaw: `${field}-purple-${weight}`,
    unknown: `${field}-yellow-${weight}`,
  }
  return {
    [valueColors[key]]: true,
  }
}

function getTopSpellsColor(field, key) {
  key = makeLowerCase(key)
  const weight = field == 'bg' ? 500 : 400
  const valueColors = {
    hexes: `${field}-green-${weight}`,
    charms: `${field}-green-${weight}`,
    curses: `${field}-green-${weight}`,
    spells: `${field}-green-${weight}`,
    jinxes: `${field}-green-${weight}`,
    healing: `${field}-green-${weight}`,
    counters: `${field}-green-${weight}`,
    transfigurations: `${field}-green-${weight}`,
  }
  return {
    [valueColors[key]]: true,
  }
}

function getBookAppearancesColor(field, key) {
  key = makeLowerCase(key)
  const weight = field == 'bg' ? 500 : 400
  const valueColors = {
    one: `${field}-green-${weight}`,
    two: `${field}-green-${weight}`,
    four: `${field}-green-${weight}`,
    three: `${field}-green-${weight}`,
    five: `${field}-green-${weight}`,
    six: `${field}-green-${weight}`,
    seven: `${field}-green-${weight}`,
    eight: `${field}-green-${weight}`,
  }
  return {
    [valueColors[key]]: true,
  }
}
</script>
<template>
  <div
    class="flex flex-col overflow-auto justify-center rounded-lg border border-gray-200 dark:border-gray-600 shadow-md pb-12"
  >
    <!-- Info: Destructuring fetchFilteredWizards from useWizards() breaks it.
            The result is this table doesn't rerender when the API request completes regardless of outcome.
          -->
    <admin-Wizards-form
      :searching="searching"
      :fetchFilteredWizards="fetchFilteredWizards"
    />
    <table
      class="mb-12 border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
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
                  class="text-gray-600"
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
          <td
            class="px-6 py-4"
            v-if="wizard.topSpells"
          >
            <div class="flex justify-center gap-1">
              <span
                v-if="wizard.topSpells[0]"
                v-text="'hexes'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-rose-400 dark:bg-rose-950"
              />
              <span
                v-if="wizard.topSpells[1]"
                v-text="'charms'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-pink-400 dark:bg-pink-950"
              />
              <span
                v-if="wizard.topSpells[2]"
                v-text="'curses'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-fuchsia-400 dark:bg-fuchsia-950"
              />
              <span
                v-if="wizard.topSpells[3]"
                v-text="'spells'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-purple-400 dark:bg-purple-950"
              />
              <span
                v-if="wizard.topSpells[4]"
                v-text="'jinxes'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-violet-400 dark:bg-violet-950"
              />
              <span
                v-if="wizard.topSpells[5]"
                v-text="'healing'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-indigo-400 dark:bg-indigo-950"
              />
              <span
                v-if="wizard.topSpells[6]"
                v-text="'counters'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-blue-400 dark:bg-blue-950"
              />
              <span
                v-if="wizard.topSpells[7]"
                v-text="'transfigurations'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-sky-400 dark:bg-sky-950"
              />
            </div>
          </td>
          <td
            class="px-6 py-4"
            v-if="wizard.bookAppearances"
          >
            <div class="flex justify-center gap-1">
              <span
                v-if="wizard.bookAppearances[0]"
                v-text="'one'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-rose-400 dark:bg-rose-950"
              />
              <span
                v-if="wizard.bookAppearances[1]"
                v-text="'two'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-pink-400 dark:bg-pink-950"
              />
              <span
                v-if="wizard.bookAppearances[2]"
                v-text="'four'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-fuchsia-400 dark:bg-fuchsia-950"
              />
              <span
                v-if="wizard.bookAppearances[3]"
                v-text="'three'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-purple-400 dark:bg-purple-950"
              />
              <span
                v-if="wizard.bookAppearances[4]"
                v-text="'five'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-violet-400 dark:bg-violet-950"
              />
              <span
                v-if="wizard.bookAppearances[5]"
                v-text="'six'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-indigo-400 dark:bg-indigo-950"
              />
              <span
                v-if="wizard.bookAppearances[6]"
                v-text="'seven'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-blue-400 dark:bg-blue-950"
              />
              <span
                v-if="wizard.bookAppearances[7]"
                v-text="'eight'"
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-white bg-sky-400 dark:bg-sky-950"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <admin-form-pagination :meta="meta" />
  </div>
</template>

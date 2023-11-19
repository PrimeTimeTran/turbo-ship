<script setup>
const props = defineProps(['searching'])

const { wizards, sort, fetchFilteredWizards } = useWizards()

const sortFields = reactive({
  firstName: ref('ASC'),
  lastName: ref('ASC'),
  house: ref('ASC'),
  jobTitle: ref('ASC'),
  potions: ref('ASC'),
  charms: ref('ASC'),
  dada: ref('ASC'),
  apparition: ref('ASC'),
})

function getSortingIcon(field) {
  const order = sortFields[field]
  return order === 'ASC' ? '▼' : '▲'
}

function toggleSort(field) {
  sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
  sort(field, sortFields[field])
}

const getColor = (field, house) => {
  const weight = field == 'bg' ? 500 : 400
  const houseColors = {
    Slytherin: `${field}-green-${weight}`,
    Gryffindor: `${field}-red-${weight}`,
    Ravenclaw: `${field}-purple-${weight}`,
    Hufflepuff: `${field}-pink-${weight}`,
  }
  return {
    [houseColors[house]]: true,
  }
}
</script>
<template>
  <div class="rounded-lg border border-gray-200 dark:border-gray-600 shadow-md">
    <!-- Info Destructuring fetchFilteredWizards from useWizards() breaks it.
      The result is this table doesn't rerender when the API request completes regardless of outcome.
    -->
    <admin-users-form
      :searching="searching"
      :fetchFilteredWizards="fetchFilteredWizards"
    />
    <table
      class="w-full border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
    >
      <thead class="bg-gray-200 dark:bg-neutral-950">
        <tr class="dark:text-black">
          <th
            scope="col"
            @click="toggleSort('firstName')"
            class="px-3 py-4 font-medium text-gray-500 dark:text-gray-600"
          >
            First Name <span v-text="getSortingIcon('firstName')" />
          </th>

          <th
            scope="col"
            @click="toggleSort('lastName')"
            class="py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
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
            @click="toggleSort('jobTitle')"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Role <span v-text="getSortingIcon('jobTitle')" />
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Team
          </th>
          <th
            scope="col"
            @click="toggleSort('charms')"
            class="px-2 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Charms <span v-text="getSortingIcon('charms')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('potions')"
            class="px-2 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Potions <span v-text="getSortingIcon('potions')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('dada')"
            class="px-2 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            DADA <span v-text="getSortingIcon('dada')" />
          </th>
          <th
            scope="col"
            @click="toggleSort('apparition')"
            class="px-2 py-4 font-medium text-gray-500 dark:text-gray-600 truncate"
          >
            Apparition <span v-text="getSortingIcon('apparition')" />
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
          <td class="py-4">
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
              :class="getColor('text', wizard.house)"
            >
              <span
                class="h-1.5 w-1.5 rounded-full"
                :class="getColor('bg', wizard.house)"
              />
              <span v-text="wizard.house" />
            </span>
          </td>

          <td
            class="px-6 py-4 dark:text-white"
            v-if="wizard.jobTitle"
          >
            <span v-text="wizard.jobTitle" />
          </td>
          <td
            class="px-3 py-4"
            v-if="wizard.topSpells.length > 0"
          >
            <div class="flex justify-center gap-1">
              <span
                v-text="wizard.topSpells[0]"
                class="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-slate-900 px-2 py-1 text-xs font-semibold text-blue-600"
              />
              <span
                v-text="wizard.topSpells[1]"
                class="inline-flex items-center gap-1 rounded-full bg-indigo-100 dark:bg-zinc-900 px-2 py-1 text-xs font-semibold text-indigo-600"
              />
              <span
                v-text="wizard.topSpells[2]"
                class="inline-flex items-center gap-1 rounded-full bg-violet-100 dark:bg-gray-900 px-2 py-1 text-xs font-semibold text-violet-600"
              />
            </div>
          </td>
          <td class="px-3 py-4"><span v-text="wizard.charms" /></td>
          <td class="px-3 py-4"><span v-text="wizard.potions" /></td>
          <td class="px-3 py-4"><span v-text="wizard.DADA" /></td>
          <td class="px-3 py-4">
            <span
              v-if="wizard.apparition !== ''"
              v-text="wizard.apparition"
              class="inline-flex items-center bg-gray-100 dark:bg-slate-900 gap-1 rounded-full px-2 py-1 text-xs font-semibold"
              :class="{
                'text-green-400': wizard.apparition,
                'text-red-400': !wizard.apparition,
              }"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

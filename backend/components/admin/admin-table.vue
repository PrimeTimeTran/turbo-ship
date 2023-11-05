<script setup>
import { faker } from '@faker-js/faker'
const props = defineProps(['items'])
const wizards = ref(props.items)
watch(() => {
  wizards.value = props.items
})
</script>
<template>
  <div
    class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 shadow-md"
  >
    <table
      class="w-full border-collapse bdark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
    >
      <thead class="bg-gray-200 dark:bg-neutral-950">
        <tr class="dark:text-black">
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            House
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            State
          </th>

          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Role
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Team
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Charms
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Potions
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            DADA
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Apparition
          </th>
        </tr>
      </thead>
      <tbody
        class="w-full divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-800 dark:border-gray-600"
      >
        <tr
          :key="wizard._id"
          v-for="wizard in wizards"
          class="w-full hover:bg-gray-200 odd:bg-neutral-100 even:bg-neutral-50 dark:hover:bg-neutral-950 dark:border-t-gray-600 odd:dark:bg-neutral-800 even:dark:bg-neutral-900"
        >
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="relative h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                :src="`https://randomuser.me/api/portraits/${
                  wizard.gender == 'male' ? 'men' : 'women'
                }/${faker.number.int({ min: 1, max: 100 })}.jpg`"
                alt=""
              />
              <span
                class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
              ></span>
            </div>
            <div class="text-sm">
              <div class="font-medium text-gray-700 dark:text-white">
                {{ wizard.firstName }}
              </div>
              <div class="text-gray-400">{{ wizard.email }}</div>
            </div>
          </th>
          <td class="px-6 py-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-slate-900 px-2 py-1 text-xs font-semibold"
              :class="{
                'text-green-400': wizard.house == 'Slytherin',
                'text-red-400': wizard.house == 'Gryffindor',
                'text-violet-400': wizard.house == 'Ravenclaw',
                'text-pink-400': wizard.house == 'Hufflepuff',
              }"
            >
              <span
                class="h-1.5 w-1.5 rounded-full"
                :class="{
                  'bg-green-500': wizard.house == 'Slytherin',
                  'bg-red-500': wizard.house == 'Gryffindor',
                  'bg-violet-500': wizard.house == 'Ravenclaw',
                  'bg-pink-500': wizard.house == 'Hufflepuff',
                }"
              ></span>
              {{ wizard.house }}
            </span>
          </td>
          <td class="px-6 py-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-slate-900 px-2 py-1 text-xs font-semibold text-green-600"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              Active
            </span>
          </td>

          <td class="px-6 py-4 dark:text-white">{{ wizard.jobTitle }}</td>
          <td class="px-6 py-4">
            <div class="flex gap-2">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-slate-900 px-2 py-1 text-xs font-semibold text-blue-600"
              >
                Design
              </span>
              <span
                class="inline-flex items-center gap-1 rounded-full bg-indigo-50 dark:bg-zinc-900 px-2 py-1 text-xs font-semibold text-indigo-600"
              >
                Product
              </span>
              <span
                class="inline-flex items-center gap-1 rounded-full bg-violet-50 dark:bg-neutral-900 px-2 py-1 text-xs font-semibold text-violet-600"
              >
                Develop
              </span>
            </div>
          </td>
          <td class="px-6 py-4">{{ wizard.charms }}</td>
          <td class="px-6 py-4">{{ wizard.potions }}</td>
          <td class="px-6 py-4">{{ wizard.DADA }}</td>
          <td class="px-6 py-4">{{ wizard.apparition }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

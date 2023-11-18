<script setup>
const props = defineProps(['entity'])
</script>
<template>
  <div class="flex flex-1 h-full">
    <div class="flex flex-col w-fit overflow-auto scrollbar-hide h-5/6">
      <table class="overflow-auto">
        <thead>
          <tr>
            <th class="text-gray-500 text-center pl-2 mx-2 px-4">Valid</th>
            <th class="text-gray-500 text-left">Name</th>
            <th class="text-gray-500 text-left">Type</th>
            <th class="text-gray-500">Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="attribute"
            v-for="(attribute, idx) of Validator.attributes(entity)"
            class="odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 hover:cursor-pointer border-2"
          >
            <td class="text-center">
              <font-awesome-icon
                v-if="attribute.valid"
                color="green"
                icon="fa-regular fa-circle-check"
              />
              <font-awesome-icon
                v-else
                color="red"
                icon="fa-solid fa-circle-xmark"
              />
            </td>
            <td class="flex flex-row items-center pl-1">
              <span v-text="`${idx + 1}. `" />
              <input
                v-model="attribute.name"
                class="text-gray-900 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td>
              <select
                v-model="attribute.type"
                class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
              >
                <option
                  :key="dataType"
                  :value="dataType"
                  v-for="dataType of Validator.types"
                >
                  {{ Validator.labeledTypes[dataType]?.label }}
                </option>
              </select>
            </td>
            <td>
              <font-awesome-icon
                class="px-2"
                color="grey"
                icon="fa-solid fa-circle-info"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

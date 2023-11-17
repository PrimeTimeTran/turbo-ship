<script setup>
const props = defineProps(['entity'])
</script>
<template>
  <table class="flex-1 overflow-auto scrollbar-hide w-100">
    <thead>
      <tr>
        <th class="text-center pl-2 mx-2 px-4">Valid</th>
        <th class="text-left">Name</th>
        <th class="text-left">Type</th>
        <th class="">Focus</th>
      </tr>
    </thead>
    <tbody class="overflow-auto scrollbar-hide over rounded">
      <!-- @click="onFocus(attribute._id)" -->
      <tr
        v-for="(attribute, idx) of Validator.safeAttributes(entity)"
        class="odd:bg-slate-200 hover:cursor-pointer hover:bg-slate-300 border-2"
      >
        <td class="pl-1 text-center">
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
            :class="{
              // 'text-green-600': focused == attribute._id,
            }"
          />
        </td>
        <td>
          <select
            v-model="attribute.type"
            class="bg-transparent border-0 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
            :class="{
              // 'text-green-600': focused == attribute._id,
            }"
          >
            <option
              :value="dataType"
              v-for="dataType of attributeTypes"
            >
              {{ attributeTypesWithLabels[dataType]?.label }}
            </option>
          </select>
        </td>
        <td>
          <font-awesome-icon
            class="px-2"
            color="grey"
            icon="fa-solid fa-circle-info"
            :class="{
              // 'text-green-600': focused == attribute._id,
            }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

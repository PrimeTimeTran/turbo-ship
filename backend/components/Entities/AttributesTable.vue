<script setup>
const props = defineProps(['entity', 'onFocus', 'focused'])
const entity = ref(props.entity)
const onRemove = (id) => {
  const attributes = entity.value.attributes.filter(
    (a) => a.name !== '_id' && a.name != 'relation'
  )
  if (attributes.length == 1) return
  const idx = props.entity.attributes.findIndex((a) => a._id === id)
  props.entity.attributes.splice(idx, 1)
}
</script>
<template>
  <div class="flex flex-1 h-full">
    <div class="flex flex-col w-fit overflow-auto scrollbar-hide h-5/6">
      <table class="overflow-auto">
        <thead>
          <tr>
            <!-- <th class="text-gray-500 text-center pl-2 mx-2 px-4">Valid</th> -->
            <th class="text-gray-500 text-left">Name</th>
            <th class="text-gray-500 text-left">Type</th>
            <th class="text-gray-500"></th>
            <th class="text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="attribute"
            v-for="(attribute, idx) of Validator.attributes(entity)"
            class="odd:bg-gray-200 hover:bg-slate-100 odd:hover:bg-slate-200 hover:cursor-pointer border-2"
          >
            <td class="flex flex-row items-center pl-1">
              <span v-text="`${idx + 1}. `" />
              <input
                v-model="attribute.name"
                class="bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </td>
            <td>
              <EntitiesRelationSelect :attribute="attribute" />
            </td>
            <td
              class="text-center px-1"
              @click="onFocus(attribute._id)"
            >
              <font-awesome-icon
                class="px-2"
                color="grey"
                icon="fa-solid fa-pen-to-square"
                :class="{
                  'text-blue-500': focused === attribute._id,
                }"
              />
            </td>
            <td
              class="text-center px-1"
              @click="onRemove(attribute._id)"
            >
              <font-awesome-icon
                color="red"
                icon="fa-solid fa-circle-xmark"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

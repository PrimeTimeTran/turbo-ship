<script setup>
const props = defineProps(['entity', 'onFocus', 'focused'])
const entity = ref(props.entity)
const onRemove = (id) => {
  const attributes = entity.value.attributes.filter((a) => a.name !== '_id' && a.name != 'relation')
  if (attributes.length <= 1) return
  const idx = entity.value.attributes.findIndex((a) => a._id === id)
  entity.value.attributes.splice(idx, 1)
}
</script>

<!-- Troubleshooting hot reload works sometimes with bun run dev. -->
<!-- Let's try with VSCode debugger -->
<!-- Looks like you need to change app.vue once to get it working? -->
<!-- Check back later to confirm what the issue is. The first time it doens't work -->
<!-- <th class="text-gray-500 text-center pl-2 mx-2 px-4">Valid</th> -->
<template>
  <div class="flex flex-5 h-full hover:shadow-lg">
    <div class="flex flex-col w-fit">
      <table>
        <thead>
          <tr>
            <th class="text-gray-500 text-left pl-4">Name</th>
            <th class="text-gray-500 text-left">Label</th>
            <th class="text-gray-500 text-left">Placeholder</th>
            <th class="text-gray-500"></th>
            <th class="text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="attribute"
            v-for="(attribute, idx) of Validator.attributes(entity)"
            class="hover:cursor-pointer odd:bg-gray-200 odd:hover:bg-slate-200 dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white dark:hover:brightness-200 text-xs"
          >
            <td class="flex flex-row items-center pl-1" @click="onFocus(attribute._id)">
              <span
                v-text="`${idx + 1}. `"
                :class="{
                  ['text-green-400']: focused === attribute._id,
                }"
              />
              <div class="ml-1">
                <input v-model="attribute.name" class="bg-transparent text-lg -full px-2 placeholder-blue-400" />
                <EntitiesAttributeTypeSelect :attribute="attribute" />
              </div>
            </td>
            <td @click="onFocus(attribute._id)">
              <input
                placeholder="..."
                v-model="attribute.label"
                class="bg-transparent text-sm p-2.5 placeholder-blue-400"
              />
            </td>
            <td @click="onFocus(attribute._id)">
              <input
                placeholder="..."
                v-model="attribute.placeholder"
                class="bg-transparent text-sm p-2.5 placeholder-blue-400"
              />
            </td>
            <td class="text-center px-1" @click="onFocus(attribute._id)">
              <FontAwesomeIcon
                class="px-2"
                color="grey"
                icon="fa-solid fa-pen-to-square"
                :class="{
                  'text-green-400': focused === attribute._id,
                }"
              />
            </td>
            <td class="text-center px-1" @click="onRemove(attribute._id)">
              <FontAwesomeIcon icon="fa-solid fa-circle-xmark" class="text-red-400" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

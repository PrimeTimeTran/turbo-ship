<script setup>
const props = defineProps(['entity'])
const { removeEntity } = useEntities()
</script>
<template>
  <div class="flex flex-grow justify-between my-2 dark:text-white dark:placeholder-white border-gray-200">
    <div class="flex flex-grow">
      <input
        :id="entity._id"
        v-model="entity.name"
        placeholder="customer, transaction, statement..."
        class="flex flex-grow py-1 px-2 text-md rounded border bg-white font-bold text-blue-500 hover:shadow-lg entity-input hover:bg-slate-100 dark:text-white dark:placeholder-white border-gray-200 border-opacity-0 hover:border-opacity-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:border-white"
      />
    </div>
    <div class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center ml-auto">
      <div role="group" class="align-middle items-center text-center ml-6 rounded-md">
        <button
          type="button"
          :id="`attributes-tab-${entity._id}`"
          :aria-controls="`attributes-tab-${entity._id}`"
          class="rounded-l-lg px-4 py-1 hover:bg-blue-50 dark:hover:bg-blue-950"
        >
          Attributes ({{ entity.attributes.length }})
        </button>
        <button
          type="button"
          :id="`validations-tab-${entity._id}`"
          :aria-controls="`validations-tab-${entity._id}`"
          class="px-4 py-1 hover:bg-blue-50 dark:hover:bg-blue-950"
        >
          Validations
        </button>
        <button
          type="button"
          :id="`settings-tab-${entity._id}`"
          :aria-controls="`settings-tab-${entity._id}`"
          class="px-4 py-1 hover:bg-blue-50 dark:hover:bg-blue-950"
        >
          Settings
        </button>
        <button
          type="button"
          @click="removeEntity(entity._id)"
          class="rounded-r-lg px-4 py-1 hover:bg-red-50 dark:hover:bg-red-950 text-red-400"
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark text-xs" class="text-red-400" />
        </button>
      </div>
    </div>
  </div>
</template>

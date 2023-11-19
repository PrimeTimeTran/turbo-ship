<script setup>
const props = defineProps(['entity'])
const { removeEntity } = useEntities()
</script>
<template>
  <div class="flex flex-grow justify-between my-2">
    <div class="flex flex-grow">
      <input
        :id="entity._id"
        v-model="entity.name"
        placeholder="customer, transaction, statement..."
        class="flex flex-grow py-1 px-2 text-md rounded-lg border border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:shadow-lg entity-input"
      />
    </div>
    <div
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center ml-auto"
    >
      <div
        role="group"
        class="align-middle items-center text-center ml-6 rounded-md"
      >
        <button
          type="button"
          @click="removeEntity(entity._id)"
          class="rounded-l-lg border-0 px-4 py-1 hover:bg-red-50 text-red-400 hover:border"
        >
          Remove
        </button>
        <button
          type="button"
          :id="`attributes-tab-${entity._id}`"
          :aria-controls="`attributes-tab-${entity._id}`"
          class="border px-4 py-1 hover:bg-gray-100"
        >
          Attributes
        </button>
        <button
          type="button"
          :id="`validations-tab-${entity._id}`"
          :aria-controls="`validations-tab-${entity._id}`"
          class="border px-4 py-1 hover:bg-gray-100"
        >
          Validations
        </button>
        <button
          type="button"
          :id="`settings-tab-${entity._id}`"
          :aria-controls="`settings-tab-${entity._id}`"
          class="rounded-r-lg border px-4 py-1 hover:bg-gray-100"
        >
          Settings
        </button>
      </div>
    </div>
  </div>
</template>

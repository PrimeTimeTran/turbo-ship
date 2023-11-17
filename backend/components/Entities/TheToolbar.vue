<script setup>
const emit = defineEmits(['toggleSortView'])
const { entities } = useEntities()
const { setFocusedContent } = useToolbar()
const closed = ref(false)

const onCollapse = () => {
  const newValue = !closed.value
  entities.value.map((e) => {
    e.editing = newValue
    e.showAttributes = newValue
    e.showAttributeForm = newValue
  })
  closed.value = !closed.value
}
</script>
<template>
  <div class="sticky top-0 bg-white shadow p-2 z-10">
    <div class="flex p-1 justify-between items-center">
      <div class="text-md">
        Entities
        <span
          v-text="`(${entities.length})`"
          class="text-gray-400"
        />
      </div>
      <div class="flex flex-row justify-end flex-wrap">
        <div
          class="mr-1"
          v-for="(e, idx) of entities"
        >
          <a
            class="text-sm hover:bg-gray-100 rounded py-1 px-2"
            v-text="idx + 1 + `. ${e.name} (${e.attributes.length - 1})`"
            :href="`/entities#${e.name}-${idx + 1}`"
          ></a>
        </div>
      </div>
    </div>

    <div
      role="group"
      class="align-middle items-center text-center ml-6 rounded-md"
    >
      <button
        type="button"
        @click="store.view = 'Sorter'"
        class="rounded-l-lg border px-4 py-2 hover:bg-gray-100"
      >
        Sort
        <font-awesome-icon icon="fa-solid fa-sort"></font-awesome-icon>
      </button>
      <button
        type="button"
        @click="store.view = 'Entities'"
        class="border-t border-b border px-4 py-2 hover:bg-gray-100 text-gray-400"
      >
        Entities
        <font-awesome-icon icon="fa-solid fa-square-minus"></font-awesome-icon>
      </button>
      <button
        type="button"
        class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
        @click="store.view = 'Relationships'"
      >
        <u>R</u>elationships
        <font-awesome-icon
          icon="fa-solid fa-database"
          class="text-gray-400 dark:text-white"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const { entities } = useEntities()
</script>
<template>
  <div class="sticky top-0 bg-white shadow py-1 p-2 z-10">
    <div class="flex p-1 justify-between items-center">
      <div class="text-md">
        Entities
        <span
          v-text="`(${entities.length})`"
          class="text-gray-400"
        />
      </div>
      <div
        role="group"
        class="align-middle items-center text-center ml-6 rounded-md"
      >
        <button
          type="button"
          @click="store.view = 'Sorter'"
          class="rounded-l-lg border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          Sort
          <font-awesome-icon
            class="ml-1 hover:bg-gray-100 text-gray-400"
            icon="fa-solid fa-sort"
          />
        </button>

        <button
          type="button"
          @click="store.view = 'Entities'"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          Entities
          <font-awesome-icon
            icon="fa-solid fa-cubes"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="store.stateViewer = store.stateViewer ? false : true"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          Toggle Store
          <font-awesome-icon
            icon="fa-solid fa-cubes"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
        </button>
        <button
          type="button"
          class="rounded-r-md border px-4 py-1 hover:bg-gray-100 text-gray-400"
          @click="store.view = 'Relationships'"
        >
          <u>R</u>elationships
          <font-awesome-icon
            class="ml-1 hover:bg-gray-100 text-gray-400"
            color="grey"
            icon="fa-solid fa-database"
          />
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-end flex-wrap">
      <div
        :key="e._id"
        class="mr-1"
        v-for="(e, idx) of entities"
      >
        <a
          class="text-sm hover:bg-gray-100 rounded py-1 px-2"
          v-text="idx + 1 + `. ${e.name} (${e.attributes.length - 1})`"
          :href="`/entities#${e.name}-${e._id}`"
        ></a>
      </div>
    </div>
  </div>
</template>

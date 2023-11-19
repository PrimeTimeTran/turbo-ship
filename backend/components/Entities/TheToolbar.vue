<script setup>
const { entities } = useEntities()
function collapse() {
  store.view = 'composer'
  store.collapsed = !store.collapsed
}

const isFocused = (name) => {
  return store.view === name
}
</script>
<template>
  <div class="sticky top-0 bg-white shadow py-1 p-2 z-10">
    <div class="flex p-1 justify-between items-center">
      <div class="text-md text-slate-500">
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
          @click="collapse"
          class="rounded-l-lg border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          Collapse
          <font-awesome-icon
            v-if="store.collapsed"
            icon="fa-solid fa-caret-down"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-caret-up"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="store.stateViewer = store.stateViewer ? false : true"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          Store
          <font-awesome-icon
            icon="fa-solid fa-store"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="store.view = 'sorter'"
          class="border px-4 py-1 hover:bg-gray-100"
          :class="{
            'text-gray-400': !isFocused('sorter'),
            'text-blue-500': isFocused('sorter'),
            'border-blue-500': isFocused('sorter'),
          }"
        >
          Sort
          <font-awesome-icon
            icon="fa-solid fa-sort"
            class="ml-1 hover:bg-gray-100"
            :class="{
              'text-gray-400': !isFocused('sorter'),
              'text-blue-500': isFocused('sorter'),
              'border-blue-500': isFocused('sorter'),
            }"
          />
        </button>
        <button
          type="button"
          @click="store.view = 'composer'"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100"
          :class="{
            'text-gray-400': !isFocused('composer'),
            'text-blue-500': isFocused('composer'),
            'border-blue-500': isFocused('composer'),
          }"
        >
          Composer
          <font-awesome-icon
            icon="fa-solid fa-cubes"
            class="ml-1 hover:bg-gray-100"
            :class="{
              'text-gray-400': !isFocused('composer'),
              'text-blue-500': isFocused('composer'),
              'border-blue-500': isFocused('composer'),
            }"
          />
        </button>
        <button
          type="button"
          class="rounded-r-md border px-4 py-1 hover:bg-gray-100"
          @click="store.view = 'relationships'"
          :class="{
            'text-gray-400': !isFocused('relationships'),
            'text-blue-500': isFocused('relationships'),
            'border-blue-500': isFocused('relationships'),
          }"
        >
          <u>R</u>elationships
          <font-awesome-icon
            color="grey"
            class="ml-1 hover:bg-gray-100"
            icon="fa-solid fa-database"
            :class="{
              'text-gray-400': !isFocused('relationships'),
              'text-blue-500': isFocused('relationships'),
              'border-blue-500': isFocused('relationships'),
            }"
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
          v-text="idx + 1 + `. ${e.name} (${e.attributes.length})`"
          :href="`/entities#${e.name}-${e._id}`"
        ></a>
      </div>
    </div>
  </div>
</template>

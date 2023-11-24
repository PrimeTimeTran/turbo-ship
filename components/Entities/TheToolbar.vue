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
  <div
    class="flex flex-col justify-between items-center sticky top-0 shadow py-1 z-10 bg-white dark:bg-slate-900 dark:text-white"
  >
    <div class="flex">
      <div
        role="group"
        class="align-middle items-center text-center rounded-md"
      >
        <button
          id="actionCollapse"
          type="button"
          @click="collapse"
          class="border px-4 py-1 hover:bg-gray-100 text-slate-500 dark:hover:bg-slate-700"
        >
          <u>C</u>ollapse
          <FontAwesomeIcon
            v-if="store.collapsed"
            icon="fa-solid fa-caret-down"
            class="ml-1 hover:bg-gray-100 text-slate-500"
          />
          <FontAwesomeIcon
            v-else
            icon="fa-solid fa-caret-up"
            class="ml-1 hover:bg-gray-100 text-slate-500"
          />
        </button>
        <button
          id="actionStore"
          type="button"
          @click="store.stateViewer = store.stateViewer ? false : true"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100 text-slate-500 dark:hover:bg-slate-700"
        >
          S<u>t</u>ore
          <FontAwesomeIcon
            icon="fa-solid fa-store"
            class="ml-1 hover:bg-gray-100 text-slate-500"
          />
        </button>
        <button
          id="viewSort"
          type="button"
          @click="store.view = 'sorter'"
          class="border px-4 py-1 hover:bg-gray-100 dark:hover:bg-slate-700"
          :class="{
            'text-slate-500': !isFocused('sorter'),
            'text-blue-500': isFocused('sorter'),
            'border-blue-500': isFocused('sorter'),
          }"
        >
          <u>S</u>ort
          <FontAwesomeIcon
            icon="fa-solid fa-sort"
            class="ml-1 hover:bg-gray-100"
            :class="{
              'text-slate-500': !isFocused('sorter'),
              'text-blue-500': isFocused('sorter'),
              'border-blue-500': isFocused('sorter'),
            }"
          />
        </button>
        <button
          id="viewEntities"
          type="button"
          @click="store.view = 'composer'"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100"
          :class="{
            'text-slate-500': !isFocused('composer'),
            'text-blue-500': isFocused('composer'),
            'border-blue-500': isFocused('composer'),
          }"
        >
          <u>E</u>ntities
          <FontAwesomeIcon
            icon="fa-solid fa-cubes"
            class="ml-1 hover:bg-gray-100"
            :class="{
              'text-slate-500': !isFocused('composer'),
              'text-blue-500': isFocused('composer'),
              'border-blue-500': isFocused('composer'),
            }"
          />
        </button>
        <button
          id="viewRelationships"
          type="button"
          class="border px-4 py-1 hover:bg-gray-100 dark:hover:bg-slate-700"
          @click="store.view = 'relationships'"
          :class="{
            'text-slate-500': !isFocused('relationships'),
            'text-blue-500': isFocused('relationships'),
            'border-blue-500': isFocused('relationships'),
          }"
        >
          <u>R</u>elationships
          <FontAwesomeIcon
            color="grey"
            class="ml-1 hover:bg-gray-100"
            icon="fa-solid fa-database"
            :class="{
              'text-slate-500': !isFocused('relationships'),
              'text-blue-500': isFocused('relationships'),
              'border-blue-500': isFocused('relationships'),
            }"
          />
        </button>
        <button
          type="button"
          id="viewFeedback"
          @click="store.view = 'feedback'"
          class="border px-4 py-1 hover:bg-gray-100 text-slate-500 dark:hover:bg-slate-700"
        >
          <u>F</u>eedback
          <FontAwesomeIcon
            class="ml-1 text-slate-500"
            icon="fa-regular fa-message"
          />
        </button>
        <button
          type="button"
          id="viewHelp"
          @click="store.view = 'help'"
          class="rounded-r-md border px-4 py-1 hover:bg-gray-100 text-slate-500 dark:hover:bg-slate-700"
        >
          <u>H</u>elp
          <FontAwesomeIcon
            icon="fa-solid fa-question"
            class="ml-1 text-slate-500"
          />
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-between flex-wrap">
      <div class="text-md text-slate-500 mr-auto">
        Entities
        <span
          v-text="`(${entities.length})`"
          class="text-gray-400 text-sm"
        />
      </div>
      <div
        :key="e._id"
        class="mr-1"
        v-for="(e, idx) of entities"
      >
        <a
          class="text-sm dark:hover:opacity-80 rounded py-1 px-2"
          v-text="idx + 1 + `. ${e.name} (${e.attributes.length})`"
          :href="`/entities#${e.name}-${e._id}`"
        ></a>
      </div>
    </div>
  </div>
</template>

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
          id="actionCollapse"
          type="button"
          @click="collapse"
          class="rounded-l-lg border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          <u>C</u>ollapse
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
          id="actionStore"
          type="button"
          @click="store.stateViewer = store.stateViewer ? false : true"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100 text-gray-400"
        >
          S<u>t</u>ore
          <font-awesome-icon
            icon="fa-solid fa-store"
            class="ml-1 hover:bg-gray-100 text-gray-400"
          />
        </button>
        <button
          id="viewSort"
          type="button"
          @click="store.view = 'sorter'"
          class="border px-4 py-1 hover:bg-gray-100"
          :class="{
            'text-gray-400': !isFocused('sorter'),
            'text-blue-500': isFocused('sorter'),
            'border-blue-500': isFocused('sorter'),
          }"
        >
          <u>S</u>ort
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
          id="viewEntities"
          type="button"
          @click="store.view = 'composer'"
          class="border-t border-b border px-4 py-1 hover:bg-gray-100"
          :class="{
            'text-gray-400': !isFocused('composer'),
            'text-blue-500': isFocused('composer'),
            'border-blue-500': isFocused('composer'),
          }"
        >
          <u>E</u>ntities
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
          id="viewRelationships"
          type="button"
          class="border px-4 py-1 hover:bg-gray-100"
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
        <button
          type="button"
          id="viewFeedback"
          @click="store.view = 'feedback'"
          class="border px-4 py-1 hover:bg-gray-100 text-slate-500"
        >
          <u>F</u>eedback
          <font-awesome-icon
            class="ml-1 hover:bg-gray-100 text-slate-500"
            icon="fa-regular fa-message"
          />
        </button>
        <button
          type="button"
          id="viewHelp"
          @click="store.view = 'help'"
          class="rounded-r-md border px-4 py-1 hover:bg-gray-100 text-slate-500"
        >
          <u>H</u>elp
          <font-awesome-icon
            icon="fa-solid fa-question"
            class="ml-1 hover:bg-gray-100 text-slate-500"
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

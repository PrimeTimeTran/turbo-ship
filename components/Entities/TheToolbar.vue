<script setup>
const { entities } = useEntities()
function collapse() {
  store.view = 'composer'
  store.collapsed = !store.collapsed
}
const viewItems = [
  {
    name: 'Collapse',
    click: collapse,
    underline: 'C'
  },
  {
    name: 'Sort',
    click: collapse,
    underline: 'S'
  },
  {
    name: 'Entities',
    click: collapse,
    underline: 'E'
  },
  {
    name: 'Relationships',
    click: collapse,
    underline: 'R'
  },
  {
    name: 'Feedback',
    click: collapse,
    underline: 'F'
  },
  {
    name: 'Help',
    click: collapse,
    underline: 'H'
  },
]
</script>
<template>
  <div
    class="flex flex-col sticky top-0 shadow px-2 border-b border-b-black/70 py-1 z-10 bg-white dark:bg-slate-950 dark:text-white"
  >
    <div class="flex flex-row">
      <VDropdown
        left="true"
        title="File"
        underline="F"
      />
      <VDropdown
        title="View"
        underline="V"
        :items="viewItems"
      />
      <VDropdown
        title="Edit"
        underline="E"
      />
      <VDropdown
        title="Relationships"
        underline="R"
      />
      <VDropdown
        title="Entities"
        underline="E"
      />
      <VDropdown
        title="Feedback"
        underline="F"
      />
      <VDropdown
        right="true"
        title="Help"
        underline="H"
      />
    </div>
    <div class="flex text-center rounded-md">
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
            class="text-sm dark:hover:opacity-80 rounded py-1 px-2 dark:text-white/60 dark:hover:text-white"
            v-text="idx + 1 + `. ${e.name} (${e.attributes.length})`"
            :href="`/entities#${e.name}-${e._id}`"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

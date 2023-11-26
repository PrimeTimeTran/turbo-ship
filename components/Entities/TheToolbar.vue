<script setup>
const { entities, setEntities, clearEntities } = useEntities()
function collapse() {
  store.view = views.entities
  store.collapsed = !store.collapsed
}
function sort() {
  store.view = views.sort
}
function onEntities() {
  store.view = views.entities
}
function help() {
  store.view = views.help
}
function relationships() {
  store.view = views.relationships
}
function feedback() {
  store.view = views.feedback
}
async function generate() {
  try {
    const { apiUrl } = useAPI()
    const baseURL = `${apiUrl}/entities`
    const resp = await $fetch(baseURL, {
      method: 'post',
      body: entities.value,
    })

    console.log({ resp })
    
  } catch (error) {
    console.log('Error: ', error)
  }
}
const fileItems = [
  {
    name: 'Generate',
    click: generate,
    underline: 'G',
  },
  {
    name: 'Clear',
    click: generate,
    underline: '',
  },
  {
    name: 'Quit',
    click: generate,
    underline: 'Q',
  },
]
const viewItems = [
  {
    name: 'Collapse',
    click: collapse,
    underline: 'C',
  },
  {
    name: 'Sort',
    click: sort,
    underline: 'S',
  },
  {
    name: 'Overview',
    click: onEntities,
    underline: 'O',
  },
  {
    name: 'New Entity',
    click: onEntities,
    underline: 'O',
  },
  {
    name: 'Entities',
    click: onEntities,
    underline: 'E',
  },
  {
    name: 'Relationships',
    click: relationships,
    underline: 'R',
  },
  {
    name: 'Feedback',
    click: feedback,
    underline: 'b',
  },
  {
    name: 'Help',
    click: help,
    underline: 'H',
  },
]
const editItems = [
  {
    name: 'New Entity',
    click: generate,
    underline: 'G',
  },
  {
    name: 'Clear Entities',
    click: clearEntities,
    underline: '',
  },
]
const entitiesItems = [
  {
    name: 'Copy Entities',
    click: generate,
    underline: 'o',
  },
  {
    name: 'Toggle Sparse',
    click: generate,
    underline: 'p',
  },
]
const templateItems = [
  {
    name: 'Mint',
    click: () => setEntities('mint'),
    underline: '',
  },
  // {
  //   name: 'Bank',
  //   click: () => setEntities('bank'),
  //   underline: '',
  // },
  // {
  //   name: 'CRM',
  //   click: () => setEntities('crm'),
  //   underline: '',
  // },
  {
    name: 'Delivery',
    click: () => setEntities('delivery'),
    underline: '',
  },
  // {
  //   name: 'Forum',
  //   click: () => setEntities('forum'),
  //   underline: '',
  // },
  // {
  //   name: 'LMS',
  //   click: () => setEntities('lms'),
  //   underline: '',
  // },
  {
    name: 'Social',
    click: () => setEntities('social'),
    underline: '',
  },
]
</script>
<template>
  <div class="flex flex-col px-2 bg-white dark:bg-slate-950 dark:text-white">
    <div class="flex flex-row">
      <VDropdown
        left="true"
        title="File"
        underline="F"
        :items="fileItems"
      />
      <VDropdown
        title="View"
        underline="V"
        :items="viewItems"
      />
      <VDropdown
        title="Edit"
        underline="E"
        :items="editItems"
      />
      <VDropdown
        underline="R"
        title="Relationships"
      />
      <VDropdown
        underline="E"
        title="Entities"
        :items="entitiesItems"
      />
      <VDropdown
        title="Templates"
        underline="T"
        :items="templateItems"
      />
      <VDropdown
        underline="b"
        title="Feedback"
      />
      <VDropdown
        right="true"
        title="Help"
        underline="H"
      />
    </div>
  </div>
</template>

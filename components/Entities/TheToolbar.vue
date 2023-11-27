<script setup>
import { faker } from '@faker-js/faker'
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
    id: faker.database.mongodbObjectId(),
    name: 'Generate',
    click: generate,
    underline: 'G',
    tip: 'Generate project source files',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Clear',
    click: generate,
    underline: '',
    tip: 'Clear entities',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Quit',
    click: generate,
    underline: 'Q',
    tip: 'Quite entity builder',
  },
]

const viewItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Collapse',
    click: collapse,
    underline: 'C',
    tip: 'Toggle collapsed view of entities',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Sort',
    click: sort,
    underline: 'S',
    tip: 'Switch to sort view of entities',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Overview',
    click: onEntities,
    underline: 'O',
    tip: 'View overview of entities',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Entities',
    click: onEntities,
    underline: 'E',
    tip: 'View entities editor',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Relationships',
    click: relationships,
    underline: 'R',
    tip: 'View relationships overview',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Feedback',
    click: feedback,
    underline: 'b',
    tip: 'View feedback window',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Help',
    click: help,
    underline: 'H',
    tip: 'View help window',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Left',
    click: () => (store.leftSidebar = !store.leftSidebar),
    underline: 'L',
    tip: 'Toggle Left sidebar open/closed',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Right',
    click: () => (store.leftSidebar = !store.leftSidebar),
    underline: 'R',
    tip: 'Toggle Right sidebar open/closed',
  },
]
const editItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'New Entity',
    click: generate,
    underline: 'G',
    tip: 'Quite entity builder',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Clear Entities',
    click: clearEntities,
    underline: '',
    tip: 'Clear entities',
  },
]
const entitiesItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Copy Entities',
    click: generate,
    underline: 'o',
    tip: 'Copy entities to clipboard',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Sparse',
    click: generate,
    underline: 'p',
    tip: 'Toggle sparse view of right sidebar',
  },
]
const templateItems = [
  {
    id: faker.database.mongodbObjectId(),
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
    id: faker.database.mongodbObjectId(),
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
    id: faker.database.mongodbObjectId(),
    name: 'Social',
    click: () => setEntities('social'),
    underline: '',
  },
]
</script>
<template>
  <div class="flex flex-col px-2 bg-white dark:bg-slate-950 dark:text-white">
    <div class="flex flex-row w-64">
      <VDropdown left="true" title="File" underline="F" :items="fileItems" />
      <VDropdown title="View" underline="V" :items="viewItems" />
      <VDropdown title="Edit" underline="E" :items="editItems" />
      <VDropdown underline="R" title="Relationships" />
      <VDropdown underline="E" title="Entities" :items="entitiesItems" />
      <VDropdown title="Templates" underline="T" :items="templateItems" />
      <VDropdown underline="b" title="Feedback" />
      <VDropdown right="true" title="Help" underline="H" />
    </div>
  </div>
</template>

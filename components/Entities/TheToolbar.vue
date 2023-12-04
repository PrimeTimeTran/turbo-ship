<script setup>
import _ from 'lodash'
import { faker } from '@faker-js/faker'
const runtimeConfig = useRuntimeConfig()
const isDeveloping = runtimeConfig.public.generateUrl.includes('localhost')

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
const { fbEvent } = useAnalytics()

async function generate() {
  try {
    fbEvent('entities_generate_start')
    let { generateUrl } = useAPI()
    if (isDeveloping) {
      // Testing package
      generateUrl = 'http://localhost:3005/api/entities'
      // Testing Netlify function
      // generateUrl = 'http://localhost:8888/.netlify/functions/esm-muxter'
    }

    let newEntities = _.cloneDeep([...entities])
    newEntities.unshift(seeds.lms[0])
    toastEm('Processing build... Your project will download once done.', 5000)
    const resp = await $fetch(generateUrl, {
      method: 'post',
      body: newEntities,
    })

    if (isDeveloping) {
      console.log('Gen src is dev')
      const byteCharacters = atob(resp)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)

      const blob = new Blob([byteArray], { type: 'application/zip' })

      const blobUrl = URL.createObjectURL(blob)
      const downloadLink = document.createElement('a')
      downloadLink.href = blobUrl
      downloadLink.download = 'muxter-source.zip'
      document.body.appendChild(downloadLink)

      downloadLink.click()

      document.body.removeChild(downloadLink)
      URL.revokeObjectURL(blobUrl)
    } else {
      console.log('Gen src is prod')
      const blobUrl = URL.createObjectURL(resp)
      const downloadLink = document.createElement('a')
      downloadLink.href = blobUrl
      downloadLink.download = 'muxter-source.zip'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      URL.revokeObjectURL(blobUrl)
    }

    fbEvent('entities_generate_success')
  } catch (error) {
    fbEvent('entities_generate_error', error)
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
    name: 'Clear Entities',
    click: clearEntities,
    underline: '',
    tip: 'Clear all entities',
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
    name: 'Dark',
    click: () => document.getElementById('dark').click(),
    underline: 'D',
    tip: 'Toggle Dark Mode',
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
  {
    id: faker.database.mongodbObjectId(),
    name: 'Entities',
    click: onEntities,
    underline: 'E',
    tip: 'View entities editor',
    groupStart: true,
  },
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
    groupEnd: true,
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
    name: 'Relationships',
    click: relationships,
    underline: 'a',
    doubleKey: 'cmd+a',
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
]
const editItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'New Entity',
    click: () => {},
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
    click: () => {},
    underline: 'o',
    tip: 'Copy entities to clipboard',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Sparse',
    click: () => document.getElementById('toggleSparse').click(),
    underline: 'p',
    tip: 'Toggle sparse view of right sidebar',
  },
]
const templateItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Bank',
    click: () => setEntities('bank'),
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
    <div class="flex flex-row">
      <VDropdown left="true" title="File" underline="F" :items="fileItems" />
      <VDropdown title="View" underline="V" :items="viewItems" />
      <VDropdown underline="E" title="Entities" :items="entitiesItems" />
      <VDropdown title="Templates" underline="T" :items="templateItems" />
      <VDropdown underline="a" title="Relationships" :items="templateItems" />
      <VDropdown underline="b" title="Feedback" :items="templateItems" />
      <VDropdown right="true" title="Help" underline="H" :items="templateItems" />
    </div>
  </div>
</template>

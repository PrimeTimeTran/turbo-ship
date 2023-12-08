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
    newEntities.unshift(seeds.lms.entities[0])
    toastEm('Processing build... Your project will download once done.', 5000, 'info')
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

function getShortString(shortcut) {
  return `<span class='end-0'><kbd class="kbd kbd-xs [--fallback-b2:gray] text-white dark:[--fallback-b2:gray]">⌥</kbd>+<kbd class="kbd kbd-xs [--fallback-b2:gray] text-white dark:[--fallback-b2:gray]">${shortcut}</kbd></span>`
}

const fileItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Generate',
    click: generate,
    underline: 'G',
    tip: 'Generate project source files',
    shortcut: getShortString('G'),
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
    shortcut: getShortString('Q'),
  },
]
const viewItems = [
  {
    name: 'Dark',
    underline: 'D',
    tip: 'Toggle Dark Mode',
    id: faker.database.mongodbObjectId(),
    click: () => document.getElementById('dark').click(),
    shortcut: getShortString('D'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Left',
    click: () => document.getElementById('showLeft').click(),
    underline: 'L',
    tip: 'Toggle Left sidebar open/closed',
    shortcut: getShortString('L'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Right',
    click: () => document.getElementById('showRight').click(),
    underline: 'R',
    tip: 'Toggle Right sidebar open/closed',
    shortcut: getShortString('R'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Entities',
    click: onEntities,
    shortcut: getShortString('E'),
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
    shortcut: getShortString('C'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Sort',
    click: sort,
    underline: 'S',
    tip: 'Switch to sort view of entities',
    groupEnd: true,
    shortcut: getShortString('S'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Overview',
    click: () => document.getElementById('CollapseSubmenu').click(),
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
    shortcut: getShortString('A'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Feedback',
    click: feedback,
    underline: 'b',
    tip: 'View feedback window',
    shortcut: getShortString('b'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Help',
    click: help,
    underline: 'H',
    tip: 'View help window',
    shortcut: getShortString('H'),
  },
]
const entitiesList = entities.map((e) => ({ name: e.name, id: e._id, click: () => {}, tip: '', underline: '' }))
const entitiesItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Copy Entities',
    click: () => {},
    underline: 'o',
    tip: 'Copy entities to clipboard',
    shortcut: getShortString('o'),
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Toggle Sparse',
    click: () => document.getElementById('toggleSparse').click(),
    underline: 'p',
    tip: 'Toggle sparse view of right sidebar',
    shortcut: getShortString('p'),
    groupEnd: true,
  },
  ...entitiesList,
]
const templateItems = [
  {
    id: faker.database.mongodbObjectId(),
    name: 'Bank',
    click: () => setEntities('bank'),
    underline: '',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Delivery',
    click: () => setEntities('delivery'),
    underline: '',
  },
  {
    name: 'Hotel',
    click: () => setEntities('hotel'),
    underline: '',
  },
  {
    id: faker.database.mongodbObjectId(),
    name: 'Social',
    click: () => setEntities('social'),
    underline: '',
  },
]
</script>
<template>
  <div class="flex flex-col px-2 bg-white dark:bg-slate-950 dark:text-white z-50">
    <div class="flex flex-row">
      <VDropdown left="true" title="File" underline="F" :items="fileItems" />
      <VDropdown title="View" underline="V" :items="viewItems" />
      <VDropdown underline="E" title="Entities" :items="entitiesItems" />
      <VDropdown title="Templates" underline="T" :items="templateItems" />
      <VDropdown underline="a" title="Relationships" :items="[]" />
      <VDropdown underline="b" title="Feedback" :items="[]" />
      <VDropdown right="true" title="Help" underline="H" :items="[]" />
    </div>
  </div>
</template>

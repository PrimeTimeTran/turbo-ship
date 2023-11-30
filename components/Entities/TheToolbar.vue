<script setup>
import { faker } from '@faker-js/faker'
// import JSZip from 'jszip'
// import TurboShip, { seeds } from '@turboship/muxter'

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

// async function test() {
//   try {
//     console.log('Starting src gen...')
//     // await new Turboship('/tmp/turboship', entities)
//     // console.log('Zipping...')
//     // const zip = new JSZip()
//     // await addFolderToZip(zip, '/tmp/turboship/flutter', 'flutter')
//     // await addFolderToZip(zip, '/tmp/turboship/nuxt', 'nuxt')

//     // const zipFile = await zip.generateAsync({ type: 'base64' })
//     // return zipFile

//     // const response = {
//     //   headers: {
//     //     'Content-Type': 'application/zip, application/octet-stream',
//     //     'Content-disposition': `attachment; filename=${`muxter_${new Date().toJSON()}.zip`}`,
//     //   },
//     //   body: zipFile,
//     //   statusCode: 200,
//     //   isBase64Encoded: true,
//     // }

//     // return response
//   } catch (error) {
//     console.error(error)
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: 'Internal Server Error' }),
//     }
//   }
// }

async function generate() {
  try {
    fbEvent('entities_generate_start')
    const { apiUrl, generateUrl } = useAPI()
    // const baseURL = `${apiUrl}/entities`
    // Works locally with netlify dev on
    // const baseURL = `http://localhost:8888/.netlify/functions/build-muxter`

    // Testing on Netlify
    // const baseURL = `https://turboship.ltran.net/.netlify/functions/build-muxter`
    const resp = await $fetch(generateUrl, {
      method: 'post',
      body: entities,
    })
    const blobUrl = URL.createObjectURL(resp)
    const downloadLink = document.createElement('a')
    downloadLink.href = blobUrl
    downloadLink.download = 'muxter-source.zip'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    URL.revokeObjectURL(blobUrl)
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
    click: help,
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
      <!-- <VDropdown title="Edit" underline="E" :items="editItems" /> -->
      <VDropdown underline="a" title="Relationships" />
      <VDropdown underline="E" title="Entities" :items="entitiesItems" />
      <VDropdown title="Templates" underline="T" :items="templateItems" />
      <VDropdown underline="b" title="Feedback" />
      <VDropdown right="true" title="Help" underline="H" />
    </div>
  </div>
</template>

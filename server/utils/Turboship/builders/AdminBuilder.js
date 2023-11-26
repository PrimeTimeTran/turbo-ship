import fs from 'fs'
import path from 'path'
// import { log, capitalize, writeToFile } from '../helpers.js'
import { log } from '../helpers.js'

import {
  buildEnumeratorHelpers,
  buildTableHeaders,
  buildSortFields,
  buildTableRows,
  buildQueryHook,
  buildEntityForm,
  buildForm,
} from './AdminHelpers.js'

export class AdminBuilder {
  constructor(entities, options) {
    this.entities = entities
    this.options = options
    this.root = path.join(this.options.root, 'Admin')

    this.buildAdminDirectories()
  }

  buildAdminDirectories() {
    this.entities.map((e) => {
      const name = `${this.root}/${e.label}`
      fs.mkdir(name, (err) => {
        if (err) {
        } else {
          log('Create: ', name, 'yellow')
        }
      })
    })
  }

  buildEntities() {
    this.entities.map((e) => {
      this.e = e
      this.path = `${this.root}/${e.label}`
      this.buildIndexPage()
      this.buildTable()
      this.buildForm()
      this.buildEntityForm()
      this.buildEntityUseHook()
      // admin.buildEntityUseQueryHook()
    })
  }

  buildIndexPage() {
    const content = `
      <script setup>
        definePageMeta({
          layout: 'admin-layout',
        })

        useHead({
          title: '${this.e.label} | Turboship Admin',
          meta: [{ name: 'description', content: 'Great admin panels' }],
        })

        let tab = ref(0)

        const changeTab = (i) => {
          tab.value = i
        }

        const activeClasses = (currentTab) => {
          if (currentTab == tab.value)
            return 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 opacity-100 hover:opacity-75'
        }

        let searching = ref(false)

        const toggleSearch = () => {
          changeTab(0)
          searching.value = !searching.value
        }
        </script>

        <template>
          <div class="flex flex-col overflow-y-none overflow-y-hidden">
            <div class="flex flex-col">
              <div
                class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
              >
                <div class="flex">
                  <div class="mr-16">
                    <div
                      @click="toggleSearch"
                      class="flex p-4 opacity-75 hover:opacity-100"
                    >
                      <p class="mr-3 text-md">Users</p>
                      <div>
                        <font-awesome-icon
                          class="text-gray-400 mr-2"
                          v-bind:icon="
                            searching
                              ? 'fa-solid fa-circle-xmark'
                              : 'fa-solid fa-magnifying-glass'
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    @click="() => changeTab(0)"
                    class="p-4 border-b-2 border-transparent rounded-t-lg opacity-75 hover:opacity-100"
                    :class="activeClasses(0)"
                  >
                    Records
                  </div>

                  <div
                    @click="() => changeTab(1)"
                    class="p-4 border-b-2 border-transparent rounded-t-lg opacity-75 hover:opacity-100"
                    :class="activeClasses(1)"
                  >
                    Overview
                  </div>

                  <div
                    @click="() => changeTab(2)"
                    class="p-4 border-b-2 border-transparent rounded-t-lg opacity-75 hover:opacity-100"
                    :class="activeClasses(2)"
                  >
                    Create/New
                  </div>

                  <div
                    @click="() => changeTab(3)"
                    class="p-4 border-b-2 border-transparent rounded-t-lg opacity-75 hover:opacity-100"
                    :class="activeClasses(3)"
                  >
                    Settings
                  </div>
                </div>
              </div>
            </div>
            <div
              class="min-w-full min-h-full pt-2"
              :class="{
                hidden: tab != 0,
              }"
            >
              <admin-${this.e.pluralSM}-table :searching="searching" />
            </div>
            <div
              class="min-w-full min-h-full pt-1"
              :class="{
                hidden: tab != 1,
              }"
            >
              <admin-${this.e.pluralSM}-overview />
            </div>
            <div
              class="min-w-full min-h-full pt-1"
              :class="{
                hidden: tab != 2,
              }"
            >
              <admin-form :createForm="true" />
            </div>
            <div
              class="min-w-full min-h-full pt-1"
              :class="{
                hidden: tab != 3,
              }"
            >
              <h1>Contacts</h1>
            </div>
            <div
              class="min-w-full min-h-full pt-1"
              :class="{
                hidden: tab != 4,
              }"
            >
              <h1>Disabled</h1>
            </div>
          </div>
        </template>
    `
    // writeToFile(`${this.path}/index.vue`, content)
    return content
  }

  buildTable() {
    const e = this.e
    const content = `
    <script setup>
      const props = defineProps(['searching'])

      const { ${e.pluralSM}, sort, meta, fetchFiltered${e.plural} } = use${e.plural}()

      const sortFields = reactive(${buildSortFields(e)})

      function getSortingIcon(field) {
        const order = sortFields[field]
        return order === 'ASC' ? '▼' : '▲'
      }

      function toggleSort(field) {
        sortFields[field] = sortFields[field] === 'ASC' ? 'DESC' : 'ASC'
        sort(field, sortFields[field])
      }
      ${buildEnumeratorHelpers(e)}
      </script>
      <template>
        <div
          class="flex flex-col overflow-scroll justify-center rounded-lg border border-gray-200 dark:border-gray-600 shadow-md pb-12"
        >
          <!-- Info: Destructuring fetchFiltered${e.plural} from use${e.plural}() breaks it.
            The result is this table doesn't rerender when the API request completes regardless of outcome.
          -->
          <admin-${e.pluralSM}-form
            :searching="searching"
            :fetchFiltered${e.plural}="fetchFiltered${e.plural}"
          />
          <table
            class="overflow-x-auto mb-12 border-collapse dark:text-white text-left text-sm text-gray-500 dark:bg-slate-950"
          >
            <thead class="bg-gray-200 dark:bg-neutral-950">
              <tr class="dark:text-black">
                ${buildTableHeaders(e)}
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-800 dark:border-gray-600"
            >
              <tr
                :key="${e.name}._id"
                v-for="${e.name} in ${e.pluralSM}"
                class="hover:bg-gray-200 odd:bg-neutral-100 even:bg-neutral-50 dark:hover:bg-neutral-950 dark:border-t-gray-600 odd:dark:bg-neutral-950 even:dark:bg-neutral-950"
              >
                ${buildTableRows(e)}
              </tr>
            </tbody>
          </table>
          <admin-form-pagination :meta="meta" />
        </div>
      </template>
    `
    // writeToFile(`${this.path}/Table.vue`, content)
    return content
  }

  buildForm() {
    const content = buildForm(this.e)
    // writeToFile(`${this.path}/Form.vue`, content)
    return content
  }

  buildEntityForm() {
    const content = buildEntityForm(this.e)
    // writeToFile(`${this.path}/EntityForm.vue`, content)
    return content
  }

  buildEntityUseHook() {
    const apiUrl = `\`\${apiUrl}/${this.e.pluralSM}\``

    const content = `
    import { ref } from 'vue'
    import { useFetch } from '@vueuse/core'

    export function use${this.e.label}s() {
      const { apiUrl } = useAPI()
      const baseURL = ${apiUrl}
      let new${this.e.label} = ref('')
      let ${this.e.pluralSM} = ref([])
      let meta = reactive({
        limit: ref(0),
        offset: ref(0),
        page: ref(0),
        pageCount: ref(0),
        total: ref(0),
        totalRecords: ref(0),
      })

      ${this.generateAdd()}
      ${this.generateOnMount()}
      ${this.generateFetch()}
      ${this.generateSort()}
      return {
        ${this.e.pluralSM},
        sort,
        meta,
        new${this.e.label},
        add${this.e.label},
        fetchFiltered${this.e.label}s,
      }
    }`
    // writeToFile(`${this.path}/use${capitalize(this.e.plural)}.js`, content)
    return content
  }

  buildEntityUseQueryHook() {
    const content = buildQueryHook(this.e)
    // writeToFile(`${this.path}/use${this.e.label}Queries.vue`, content)
    return content
  }

  generateAdd() {
    return `
      const add${this.e.label} = async () => {
        if (new${this.e.label}.value === '') return
        const ${this.e.name} = {
          firstName: new${this.e.label}.value,
          lastName: new${this.e.label}.value,
        }
        try {
          const { data, error } = await useFetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(${this.e.name}),
          })
          if (!error.value) {
            ${this.e.pluralSM}.value.push(
              ${this.e.name}
            )
            new${this.e.label}.value = ''
            return ${this.e.name}
          }
        } catch (error) {
          console.error({ error })
        }
      }
    `
  }

  generateOnMount() {
    return `
      onBeforeMount(async () => {
      const { data, error } = await useFetch(baseURL)

      if (!error.value) {
        const val = JSON.parse(data.value)
        ${this.e.pluralSM}.value = val?.data
      }
    })
    `
  }

  generateFetch() {
    return `
      // Info fetchFiltered${this.e.label}s works inside table but not form
      const fetchFiltered${this.e.label}s = async (fields) => {
        const url = makeApiQueryString(apiUrl + '/${this.e.pluralSM}', fields)
        try {
          let { data, error } = await useFetch(url)
          if (!error.value) {
            const val = JSON.parse(data.value as string)
            meta.limit = val.meta.limit
            meta.total = val.meta.total
            Object.assign(meta, val.meta)
            ${this.e.pluralSM}.value = val?.data
          } else {
            console.error('Error fetching ${this.e.pluralSM}:', error.value)
          }
        } catch (error) {
          console.error('Unexpected error:', error)
        }
      }
    `
  }

  generateSort() {
    return `
      const sort = (field, direction) => {
        if (direction === 'ASC') {
          ${this.e.pluralSM}.value = ${this.e.pluralSM}.value.sort((a, b) =>
            (a[field] ?? '') > (b[field] ?? '') ? 1 : -1
          )
        } else if (direction === 'DESC') {
          ${this.e.pluralSM}.value = ${this.e.pluralSM}.value.sort((a, b) =>
            (a[field] ?? '') > (b[field] ?? '') ? -1 : 1
          )
        }
      }
    `
  }
}

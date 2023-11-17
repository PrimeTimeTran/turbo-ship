<script setup>
import _ from 'lodash'
import { Tabs } from 'flowbite'
import Multiselect from 'vue-multiselect'

const props = defineProps([
  'entity',
  'focusAttr',
  'toggleAttributes',
  'toggleRelationships',
])

let tabs
let tabElements

function setupTabs() {
  if (process.browser) {
    try {
      const tabsElement = document.getElementById('tabs-example')
      tabElements = [
        {
          id: 'attributes',
          triggerEl: document.querySelector('#attributes-tab-example'),
          targetEl: document.querySelector('#attributes-example'),
        },
        {
          id: 'dashboard',
          triggerEl: document.querySelector('#dashboard-tab-example'),
          targetEl: document.querySelector('#dashboard-example'),
        },
        {
          id: 'validations',
          triggerEl: document.querySelector('#settings-tab-example'),
          targetEl: document.querySelector('#settings-example'),
        },
        {
          id: 'settings',
          triggerEl: document.querySelector('#contacts-tab-example'),
          targetEl: document.querySelector('#contacts-example'),
        },
      ]

      // options with default values
      const options = {
        defaultTabId: 'attributes',
        activeClasses:
          'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses:
          'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {},
      }

      // instance options with default values
      const instanceOptions = {
        id: 'tabs-example',
        override: true,
      }
      tabs = new Tabs(tabsElement, tabElements, options, instanceOptions)
      return true
    } catch (error) {
      console.log({
        error,
      })
    }
  }
}

onMounted(() => {
  setupTabs()
})
const { removeEntity } = useEntities()

const toggleShow = () => {
  const e = props.entity
  e.showAttributes = !e.showAttributes
}

const selectedValidations = ref([])
</script>
<template>
  <div class="flex flex-row mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-grow flex-wrap mr-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li class="inline-block rounded-t-lg border-b-2 border-transparent p-4">
        <div
          class="flex flex-row flex-grow align-middle items-center text-center"
        >
          <div class="flex flex-grow ml-2 py-0 text-md rounded bg-white">
            <input
              :id="entity._id"
              v-model="entity.name"
              placeholder="customer, transaction, statement..."
              class="flex flex-grow py-1 px-2 text-md rounded-md border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
            />
          </div>
        </div>
      </li>
    </ul>
    <ul
      role="tablist"
      id="tabs-example"
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li
        class="me-2"
        role="presentation"
      >
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="dashboard-tab-example"
          type="button"
          role="tab"
          aria-controls="dashboard-example"
          aria-selected="false"
        >
          New
        </button>
      </li>
      <li
        class="me-2"
        role="presentation"
      >
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="attributes-tab-example"
          type="button"
          role="tab"
          aria-controls="profile-example"
          aria-selected="false"
        >
          Attributes
        </button>
      </li>

      <li
        class="me-2"
        role="presentation"
      >
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="settings-tab-example"
          type="button"
          role="tab"
          aria-controls="settings-example"
          aria-selected="false"
        >
          Validations
        </button>
      </li>
      <li role="presentation">
        <button
          class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
          id="contacts-tab-example"
          type="button"
          role="tab"
          aria-controls="contacts-example"
          aria-selected="false"
        >
          Settings
        </button>
      </li>
    </ul>
    <ul>
      <div
        role="group"
        class="align-middle items-center text-center ml-6 rounded-md"
      >
        <button
          type="button"
          @click="() => removeEntity(entity._id)"
          class="rounded-l-lg border px-4 py-2 hover:bg-gray-100"
        >
          <font-awesome-icon
            color="red"
            icon="fa-solid fa-circle-xmark"
          />
        </button>
        <button
          type="button"
          @click="() => toggleRelationships(entity._id)"
          class="border-t border-b border px-4 py-2 hover:bg-gray-100 text-gray-400"
        >
          <font-awesome-icon icon="fa-solid fa-database" />
        </button>
        <button
          type="button"
          @click="focusAttr(entity.attributes[1])"
          class="border-t border-b px-4 py-2 hover:bg-gray-100"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-info"
            class="text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="toggleAttributes"
          class="border-t border-b px-4 py-2 hover:bg-gray-100"
        >
          <font-awesome-icon
            icon="fa-solid fa-cubes"
            class="text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="toggleShow"
          class="border-t border-b px-4 py-2 hover:bg-gray-100"
        >
          <font-awesome-icon
            icon="fa-solid fa-list"
            class="text-gray-400"
          />
        </button>
        <button
          type="button"
          @click="tabs.show('dashboard')"
          class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
        >
          New
          <font-awesome-icon
            v-if="entity.showAttributeForm"
            icon="fa-solid fa-rectangle-xmark"
            class="text-gray-400 dark:text-white"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-plus"
            class="text-gray-400 dark:text-white"
          />
        </button>
      </div>
    </ul>
  </div>
  <div id="tabContentExample">
    <div
      role="tabpanel"
      class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      id="attributes-example"
      aria-labelledby="attributes-tab-example"
    >
      <EntitiesEntityTab :entity="entity" />
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      id="dashboard-example"
      role="tabpanel"
      aria-labelledby="dashboard-tab-example"
    >
      <EntitiesEntityAttributeForm
        :entity="entity"
        :focusAttr="focusAttr"
        :toggleRelationships="toggleRelationships"
      />
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      id="settings-example"
      role="tabpanel"
      aria-labelledby="settings-tab-example"
    >
      <div class="flex flex-1">
        <div class="flex flex-1 flex-col flex-grow w-1/3">
          <h1>Validators!</h1>
          {{ selectedValidations }}
          <multiselect
            :multiple="true"
            v-model="selectedValidations"
            :close-on-select="false"
            :clear-on-select="false"
            placeholder="Select validations"
            :options="Validator.optionalValidators['string']"
            @select="$emit('close', selectedValidations)"
            @close="$emit('close', selectedValidations)"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      id="contacts-example"
      role="tabpanel"
      aria-labelledby="contacts-tab-example"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Contacts tab's associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { Tabs } from 'flowbite'
import Multiselect from 'vue-multiselect'

const props = defineProps(['entity', 'toggleShow', 'toggleRelationships'])

let tabs
let tabElements

const entityId = ref(props.entity._id)

function setupTabs() {
  setTimeout(() => {
    if (process.browser) {
      try {
        const tabsElement = document.getElementById(
          'tabs-example-' + entityId.value
        )
        tabElements = [
          // {
          //   id: 'new' + entityId.value,
          //   targetEl: document.querySelector(`#new-${entityId.value}`),
          //   triggerEl: document.querySelector(`#new-tab-${entityId.value}`),
          // },
          {
            id: 'attributes' + entityId.value,
            targetEl: document.querySelector(`#attributes-${entityId.value}`),
            triggerEl: document.querySelector(
              `#attributes-tab-${entityId.value}`
            ),
          },
          {
            id: 'validations' + entityId.value,
            targetEl: document.querySelector(`#validations-${entityId.value}`),
            triggerEl: document.querySelector(
              `#validations-tab-${entityId.value}`
            ),
          },
          {
            id: 'settings' + entityId.value,
            targetEl: document.querySelector(`#settings-${entityId.value}`),
            triggerEl: document.querySelector(
              `#settings-tab-${entityId.value}`
            ),
          },
        ]

        const options = {
          defaultTabId: 'new' + entityId.value,
          activeClasses:
            'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
          inactiveClasses:
            'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
          onShow: () => {},
        }

        const instanceOptions = {
          id: 'tabs-example' + entityId.value,
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
  }, 100)
}

onMounted(() => {
  setupTabs()
})

const selectedValidations = ref([])
</script>
<template>
  <div
    role="tablist"
    :id="`tabs-example-${entity._id}`"
  >
    <div
      class="flex flex-row mb-4 border-b border-gray-200 dark:border-gray-700"
    >
      <EntitiesEntityToolbar :entity="entity" />
    </div>
    <div :class="{ hidden: store.collapsed }">
      <div
        role="tabpanel"
        :id="'attributes-' + entityId"
        :aria-labelledby="'attributes-tab-' + entityId"
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      >
        <EntitiesAttributeForm
          :entity="entity"
          :toggleRelationships="toggleRelationships"
        />
      </div>
      <div
        role="tabpanel"
        :id="'validations-' + entityId"
        :aria-labelledby="'validations-tab-' + entityId"
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      >
        <EntitiesEntityTab :entity="entity" />
      </div>

      <div
        role="tabpanel"
        :id="'settings-' + entityId"
        :aria-labelledby="'settings-tab-' + entityId"
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
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
      <!-- <div
        role="tabpanel"
        :id="'settings-' + entityId"
        :aria-labelledby="'settings-tab-' + entityId"
        class="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div> -->
    </div>
  </div>
</template>

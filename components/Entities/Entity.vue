<script setup>
import _ from 'lodash'
import { Tabs } from 'flowbite'
import Multiselect from 'vue-multiselect'
const props = defineProps(['entity'])

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
  <section
    :key="entity._id"
    :id="`${entity.name}-${entity._id}`"
    class="p-2 m-2 rounded border even:bg-slate-100 odd:bg-zinc-100 shadow hover:shadow-lg"
  >
    <div
      role="tablist"
      :id="`tabs-example-${entity._id}`"
    >
      <div class="flex flex-row">
        <EntitiesEntityToolbar :entity="entity" />
      </div>
      <div :class="{ hidden: store.collapsed }">
        <div
          role="tabpanel"
          :id="'attributes-' + entityId"
          :aria-labelledby="'attributes-tab-' + entityId"
          class="hidden rounded-lg bg-gray-50"
        >
          <EntitiesEntityAttributes :entity="entity" />
        </div>
        <div
          role="tabpanel"
          :id="'validations-' + entityId"
          :aria-labelledby="'validations-tab-' + entityId"
          class="hidden rounded-lg bg-gray-50"
        >
          <EntitiesEntityValidations :entity="entity" />
        </div>

        <div
          role="tabpanel"
          :id="'settings-' + entityId"
          :aria-labelledby="'settings-tab-' + entityId"
          class="hidden rounded-lg bg-gray-50 mt-4 border-t border-gray-200"
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
      </div>
    </div>
  </section>
</template>

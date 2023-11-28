<script setup>
import _ from 'lodash'
import { Tabs } from 'flowbite'
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
</script>
<template>
  <section
    :key="entity._id"
    :id="`${entity.name}-${entity._id}`"
    class="dark:border-gray-600 rounded shadow hover:shadow"
    :class="{
      'border': !store.collapsed,
      'm-2': !store.collapsed,
      'p-2': !store.collapsed,
      'px-2': store.collapsed
    }"
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
          class="hidden rounded-lg"
          :id="'attributes-' + entityId"
          :aria-labelledby="'attributes-tab-' + entityId"
          >
          <EntitiesEntityAttributes :entity="entity" />
        </div>
        <div
          class="hidden rounded-lg "
          :id="'validations-' + entityId"
          :aria-labelledby="'validations-tab-' + entityId"
        >
          <EntitiesEntityValidations :entity="entity" />
        </div>
        <div
          class="hidden rounded-lg"
          :id="'settings-' + entityId"
          :aria-labelledby="'settings-tab-' + entityId"
        >
          <div class="flex flex-1">
            <div class="flex flex-1 flex-col flex-grow w-1/3">
              <h1>Settings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

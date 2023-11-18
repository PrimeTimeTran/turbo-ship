<script setup>
definePageMeta({
  layout: 'admin-layout',
})

useHead({
  title: 'Users | Turboship Admin',
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
const tabs = [
  {
    idx: 0,
    label: 'Records',
    component: 'table',
  },
  {
    idx: 1,
    label: 'Overview',
    component: 'overview',
  },
  {
    idx: 2,
    label: 'Create/New',
    component: 'form',
  },
  {
    idx: 3,
    label: 'Settings',
    component: 'settings',
  },
]
</script>

<template>
  <div
    class="flex flex-col min-w-full max-h-full overflow-y-none overflow-y-hidden"
  >
    <div class="relative flex flex-col">
      <div
        class="text-sm bg-white dark:bg-slate-950 w-screen z-10 text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
      >
        <div class="flex">
          <div class="mr-16">
            <div
              @click="toggleSearch"
              class="flex p-4 opacity-75 hover:opacity-100"
            >
              <p class="mr-3 text-md">Wizards</p>
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
            :key="tab"
            @click="() => changeTab(tab.idx)"
            v-for="tab of tabs"
            class="p-4 border-b-2 border-transparent rounded-t-lg opacity-75 hover:opacity-100"
            :class="activeClasses(tab.idx)"
          >
            <span v-text="tab.label" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 0,
      }"
    >
      <admin-wizards-table :searching="searching" />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 1,
      }"
    >
      <admin-wizards-overview />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 2,
      }"
    >
      <admin-wizards-form :createForm="true" />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 3,
      }"
    >
      <h1 class="text-gray-400">Settings</h1>
    </div>
  </div>
</template>

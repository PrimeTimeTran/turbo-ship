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
</script>

<template>
  <div class="flex flex-col min-w-full">
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
      <admin-users-table :searching="searching" />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 1,
      }"
    >
      <admin-users-overview />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 2,
      }"
    >
      <admin-users-entity-form :createForm="true" />
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

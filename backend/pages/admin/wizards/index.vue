<!-- 
Todo: Search for wizards
Email, First Name, Last Name, School, House, Patronas
-->
<script setup>
definePageMeta({
  layout: 'admin-layout',
})

let tab = ref(0)

let { newWizard, addWizard, wizards } = await useWizards()

// const newWizard = reactive({
//   email: '',
//   lastName: '',
//   firstName: '',
//   school: '',
//   house: '',
//   status: '',
// })

const onChange = (e) => {
  newWizard.value.firstName = 'sisisi'
  // newWizard.value[e.name] = e.value
}

const changeTab = (i) => {
  console.log('Chaning tab', i)
  tab.value = i
}

const activeClasses = (currentTab) => {
  if (currentTab == tab.value)
    return 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
}
</script>

<template>
  <div class="flex flex-col min-w-full">
    <div class="flex flex-col">
      <!-- <admin-modal /> -->

      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
      >
        <ul class="flex flex-wrap -mb-px">
          <div>
            <div class="inline-block p-4 rounded-t-lg text-green-400">
              Wizards
            </div>
          </div>
          <li class="mr-2">
            <button
              @click="() => changeTab(0)"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              :class="activeClasses(0)"
            >
              Overview
            </button>
          </li>
          <li class="mr-2">
            <button
              @click="() => changeTab(1)"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              :class="activeClasses(1)"
            >
              Records
            </button>
          </li>
          <li class="mr-2">
            <button
              @click="() => changeTab(2)"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              :class="activeClasses(2)"
            >
              Create/New
            </button>
          </li>
          <li class="mr-2">
            <button
              @click="() => changeTab(3)"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              :class="activeClasses(3)"
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="min-w-full min-h-full pt-2"
      :class="{
        hidden: tab != 0,
      }"
    >
      <admin-wizards-tabs-tab1 />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 1,
      }"
    >
      <admin-wizards-tabs-tab3 />
    </div>
    <div
      class="min-w-full min-h-full pt-1"
      :class="{
        hidden: tab != 2,
      }"
    >
      <admin-wizards-tabs-tab2 />
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

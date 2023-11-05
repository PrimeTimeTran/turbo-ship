<!-- 
Todo: Search for wizards
Email, First Name, Last Name, School, House, Patronas
-->
<script setup>
definePageMeta({
  layout: 'admin-layout',
})

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
</script>

<template>
  <div class="flex flex-col min-w-full">
    <div class="flex flex-col">
      <!-- <admin-modal /> -->
      <admin-wizard-form />
      <admin-table :items="wizards" />
      <input
        type="text"
        height="50"
        width="200"
        autofocus
        v-model="newWizard"
        @keyup.enter="addWizard"
        @input="(e) => (newWizard = e.target.value)"
        class="dark:bg-white dark:text-black p-3 text-lg border"
      />
      <button
        type="button"
        name="Submit"
        @click="addWizard"
        class="dark:bg-white dark:text-black mt-3"
      >
        Create
      </button>
    </div>
  </div>
</template>

<!-- 
Todo: Search for wizards
Email, First Name, Last Name, School, House, Patronas
-->
<script setup>
definePageMeta({
  layout: 'admin-layout',
})

let { addWizard, wizards } = await useWizards()

const newWizard = reactive({
  email: '',
  lastName: '',
  firstName: '',
  school: '',
  house: '',
  status: '',
})

const onChange = (e) => {
  console.log('Changed!', e)
  console.log({
    newWizard,
  })
  newWizard.value.firstName = 'sosos'
  // newWizard.value[e.name] = e.value
}
</script>

<template>
  <div class="flex flex-col min-w-full">
    <div class="flex flex-col">
      <!-- <admin-modal /> -->
      <admin-wizard-form />
      <!-- <pre>
        Email: {{ newWizard.email }}
        First Name: {{ newWizard.firstName }}
        Last Name: {{ newWizard.lastName }}
        School: {{ newWizard.school }}
        House: {{ newWizard.house }}
        Status: {{ newWizard.status }}
      </pre> -->
      <!-- 
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
    <ul>
      <li
        :key="wizard._id"
        v-for="wizard in wizards"
      >
        {{ wizard.firstName }}
      </li>
    </ul> -->
    </div>
  </div>
</template>

<script setup>
const title = ref('Wizards')
const wizards = ['Harry', 'Ron', 'Hermione', 'Jerry']
</script>
<template>
  <div
    class="fixed right-10 bottom-10 border bg-white dark:bg-slate-900 rounded-lg w-96 h-96 p-2 z-40"
  >
  <div v-if="1 === 'one'">
    False
  </div>
  <div v-else-if="1 === '1'">
    False
  </div>
  <div v-else>
    True
  </div>
  
    <!-- <h1>{{ title }}</h1>
    <input
      type="text"
      class="rounded-lg text-black"
      v-model="title"
    />
    <ul>
      <li
        :key="wizard"
        v-text="wizard"
        v-for="wizard of wizards"
      />
    </ul> -->
  </div>
</template>

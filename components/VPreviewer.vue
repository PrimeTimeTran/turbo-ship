<script setup>
const title = ref('Wizards')
const wizards = ['Harry', 'Ron', 'Hermione', 'Jerry']
  let num = ref(0)
  setInterval(() => {
    num.value = num.value+1
  }, 1000)

</script>
<template>

  <div
    class="fixed left-0 bottom-0 border bg-white dark:bg-slate-900 rounded-lg w-96 h-96 p-2 z-40"
  >
  <div 
    :class="{
      'text-green-400': (num % 2) == 0,
    }"
  >
    Color {{ num }}
  </div>
  <!-- <div v-if="1 === 'one'">
    False
  </div>
  <div v-else-if="1 === '1'">
    False
  </div>
  <div v-else>
    True
  </div> 
  
    <h1>{{ title }}</h1>
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

<script setup>
const wizard = 'Programmer'
const hidden = ref(true)
function toggleView() {
  hidden.value = !hidden.value
}
</script>

<template>
  <div
    id="previewer"
    @click="toggleView"
    class="fixed left-2 bottom-0 border bg-white dark:bg-slate-900 rounded-lg w-96 h-64 p-2 z-40 overflow-auto"
    :class="{
      'hidden': hidden
    }"
  >
    <div>
      <h1>Wizards</h1>
      <ul>
        <li>Harry</li>
        <li>Ron</li>
        <li>Hermione</li>
        <li>{{ wizard }}</li>
      </ul>
      <input autofocus />
    </div>
  </div>
</template>

<style>
h1 {
  color: red;
}
b {
  font-size: 30px;
}
</style>

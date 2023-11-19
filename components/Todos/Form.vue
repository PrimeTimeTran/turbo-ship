<script setup>
const { newTodo, addTodo } = useTodos()
</script>

<template>
  <input
    autofocus
    v-model="newTodo"
    @keyup.enter="addTodo"
    class="border mb-2 rounded p-3 mx-32"
    placeholder="Enter a new wizard and press enter"
  />
</template>

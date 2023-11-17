<script setup>
const { newTodo, addTodo } = useTodos()
</script>

<template>
  <input
    autofocus
    v-model="newTodo"
    @keyup.enter="addTodo"
    class="border mb-2 rounded p-3"
    placeholder="Enter a new todo and press enter"
  />
</template>

<script setup>
const { todos } = useTodos()
</script>
<template>
  <div class="p-16">
    <todos-container />
    {{ todos.map((t) => t.firstName) }}
    <h6>Nakamoto</h6>
  </div>
</template>

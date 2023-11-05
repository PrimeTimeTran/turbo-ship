<template>
  <div class="flex justify-center bg-red-100">
    <div class="mr-16 text-center">
      <h1>Undone</h1>
      <div>{{ countUndone }}</div>
    </div>
    <div class="mr-16 text-center">
      <h1>Done</h1>
      <div>{{ countDone }}</div>
    </div>
  </div>
</template>

<script setup>
const { countDone, countUndone } = useTodos()
</script>

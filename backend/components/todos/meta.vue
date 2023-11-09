<template>
  <div class="flex justify-center bg-red-100">
    <div class="mr-16 text-center">
      <h1>Undone</h1>
      <span v-text="countUndone" />
    </div>
    <div class="mr-16 text-center">
      <h1>Done</h1>
      <span v-text="countDone" />
    </div>
    <div
      class="mr-16 text-center"
      @click="reset"
    >
      <h1>Reset</h1>
    </div>
  </div>
</template>

<script setup>
const { reset, countDone, countUndone } = useTodos()
</script>

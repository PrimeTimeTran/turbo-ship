<script setup>
const { reset, countDone, countUndone } = useTodos()
</script>
<template>
  <div class="flex justify-center p-6 bg-blue-400 rounded-lg font-bold ">
    <div class="mr-16 text-center">
      <h1 class="text-2xl text-white">Undone</h1>
      <span
        v-text="countUndone"
        class="text-xl text-white"
      />
    </div>
    <div class="mr-16 text-center">
      <h1 class="text-2xl text-white">Done</h1>
      <span
        v-text="countDone"
        class="text-xl text-white"
      />
    </div>
    <!-- <div
      class="mr-16 text-center"
      @click="reset"
    >
      <h1 class="text-xl">Reset</h1>
    </div> -->
  </div>
</template>

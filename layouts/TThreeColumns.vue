<script setup></script>
<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="hidden md:flex w-full md:w-1/6 bg-gray-200 md:h-full">
      <div class="p-4">
        <h2 class="text-lg font-semibold">Left Column</h2>
      </div>
    </div>

    <div class="w-full h-full bg-gray-300">
      <div class="p-4">
        <h2 class="text-lg font-semibold">Center Column</h2>
      </div>
    </div>

    <div class="hidden lg:block w-2/6 bg-gray-200 md:h-full">
      <div class="p-4">
        <h2 class="text-lg font-semibold">Right Column</h2>
      </div>
    </div>
  </div>
</template>
<style></style>

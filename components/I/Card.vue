<script setup>
const props = defineProps(['icon', 'title', 'body'])
</script>
<template>
  <div class="col-span-1 md:col-span-4 flex grow">
    <div
      data-wow-duration="1s"
      class="flex grow px-4 lg:px-2 wow fadeInUp"
      style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp"
    >
      <div
        class="flex flex-col grow py-8 px-2 bg-gray-50 dark:bg-slate-900 hover:shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2"
      >
        <div class="inline-block text-gray-900 mb-4 flex justify-center text-center">
          <component :is="icon" class="text-gray-400" style="font-size: 0.75em" />
        </div>
        <h3 class="text-md leading-normal mb-2 font-semibold text-black dark:text-white" v-text="title"></h3>
        <p class="text-gray-500" v-text="body"></p>
      </div>
    </div>
  </div>
</template>

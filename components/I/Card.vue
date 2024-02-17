<script setup>
const props = defineProps(['icon', 'title', 'body'])
</script>
<template>
  <div class="col-span-1 md:col-span-4 flex grow">
    <div
      class="flex grow px-4 lg:px-2 wow fadeInUp"
      data-wow-duration="1s"
      style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp"
    >
      <div
        class="flex flex-col grow py-8 px-2 bg-gray-50 dark:bg-slate-900 hover:shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2"
      >
        <div class="inline-block text-gray-900 mb-4">
          <FontAwesomeIcon size="2x" icon="fa-solid fa-bars" class="text-gray-400" />
        </div>
        <h3 class="text-md leading-normal mb-2 font-semibold text-black dark:text-white" v-text="title"></h3>
        <p class="text-gray-500" v-text="body"></p>
      </div>
    </div>
  </div>
</template>

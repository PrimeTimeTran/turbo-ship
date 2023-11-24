<script setup>
const props = defineProps(['icon', 'title', 'body'])
</script>
<template>
  <div
    class="col-span-4 px-4 max-w-full w-full sm:w-1/2 lg:w-full lg:px-2 wow fadeInUp flex flex-row"
    data-wow-duration="1s"
    style="
      visibility: visible;
      animation-duration: 1s;
      animation-name: fadeInUp;
    "
  >
    <div
      class="py-8 px-2 bg-gray-50 border-b border-gray-100 hover:shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2"
    >
      <div class="inline-block text-gray-900 mb-4 w-32">
        <FontAwesomeIcon
          size="2x"
          icon="fa-solid fa-bars"
          class="text-gray-400 dark:text-white"
        />
      </div>
      <h3 class="text-md leading-normal mb-2 font-semibold text-black">
        {{ title }}
      </h3>
      <p
        class="text-gray-500"
        v-text="body"
      ></p>
    </div>
  </div>
</template>

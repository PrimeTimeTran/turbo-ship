<script setup>
definePageMeta({
  layout: 'landing-layout',
})
</script>
<template>
  <div class="justify-center items-center">
    <div class="flex flex-col-reverse lg:flex-row justify-center items-center">
      <div
        class="flex flex-1 flex-col items-center justify-between text-center space-y-6 p-2 lg:px-8 lg:relative lg:-right-52 lg:text-left lg:items-start"
      >
        <p class="text-center text-sm uppercase">Turboship</p>
        <h2 class="text-4xl lg:text-5xl mt-4 text-gray-700 dark:text-white">
          Keep It Simple Silly!
          <div class="font-bold animate__animated animate__flash" style="white-space: nowrap">
            Don't repeat yourself, <br />
            <span class="border-b-8 border-b-green-400">innovate</span>
          </div>
        </h2>
        <p class="text-xl lg:text-3xl mt-4 text-gray-700 dark:text-white">
          With Turboship you don't deal with boilerplate. <br />
          You focus on what makes your business <span class="text-green-400 italic">stand out</span>.
        </p>
        <div class="mt-10 flex flex-col justify-center text-center items-center md:flex-row">
          <a
            href="#"
            class="mb-3 inline-flex min-h-12 py-2 w-full items-center justify-center rounded bg-green-600 px-6 font-medium lg:text-lg text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
          >
            Learn more
          </a>
          <a
            href="#"
            aria-label=""
            class="mb-3 inline-flex min-h-12 py-2 w-full items-center justify-center rounded px-6 text-black dark:text-white hover:text-white lg:text-lg transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto border"
          >
            Read how it works
          </a>
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center p-2">
        <img
          src="~/assets/images/Mockups/BrowserAdmin.png"
          class="w-screen lg:max-w-screen-lg lg:relative lg:-right-52"
        />
      </div>
    </div>
  </div>
</template>

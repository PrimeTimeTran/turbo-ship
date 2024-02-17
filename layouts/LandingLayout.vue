<script setup>
definePageMeta({
  layoutTransition: true,
})
</script>
<template>
  <div class="main-landing overflow-clip scrollbar-hide text-gray-500 dark:text-gray-300">
    <TheNavbar />
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col pt-24"
    >
      <slot />
    </section>
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col py-16 px-8 xl:px-16"
    >
      <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
        <span class="italic">Both</span> <a href=""></a> Full-Stack <br /><span class="text-green-400"
          >Web & <span class="underline">Mobile App</span></span
        ><br />
        Codebase Generator
      </h1>
      <br />
      <br />
      <div class="text-xl">
        Generate BoilerPlate Nuxt & Flutter code in minutes <br /><br />

        Generate a professional codebase for your next multi-tenant SaaS app using Nuxt3, Flutter, Firebase, MongoDB,
        TailwindCSS, DecapCMS, end-to-end testing, and more—simply by modeling your data with our custom built entity
        modeling tool.

        <br /><br />
        Free up time to focus on your secret sauce
      </div>
    </section>

    <section
      id="2"
      class="w-screen h-screen flex justify-center items-center dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200"
    >
      <div class="flex flex-col text-center justify-center items-middle">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Key features & toolings
        </h1>
        <br />
        <br />
        <div class="flex flex-col-reverse lg:flex-row justify-center items-between">
          <div
            data-wow-duration="1s"
            class="flex-1 flex-col items-center justify-center p-2 wow fadeInUp hidden invisible md:flex md:visible"
            style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp"
          >
            <img
              src="~/assets/images/Mockups/BrowserEntity.png"
              class="w-screen lg:max-w-screen-lg lg:relative lg:-left-52 hover:shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-2"
            />
          </div>

          <div class="lg:relative lg:-left-40 flex-1 grid grid-cols-1 gap-8 md:grid-cols-12">
            <ICard :title="'Data Modeling'" body="Visual data modeling tool to help you visualize your tables" />
            <ICard :title="'Pre-built Templates'" body="Battle tested schemas to get you going wicked fast" />
            <ICard :title="'Admin Dashboard'" body="Tooling for stakeholders, clients & 3rd parties" />
            <ICard :title="'Mobile App'" body="Because its better to have and not need than need and not have" />
            <ICard :title="'Audit Logs'" body="To ensure that you're ready to scale from the very beginning" />
            <ICard :title="'Roles'" body="Rest assured that access is limited using prebuilt roles" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen flex-wrap items-center justify-center flex flex-col bg-red-100">
      <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
        The best tools & frameworks
        <br />
        for superior <span class="text-green-400">developer experience</span>
      </h1>
      <br />
      <br />
      <div class="grid grid-cols-3 gap-4 items-center">
        <img class="image" src="~/assets/images/brands/landscape-nuxt-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-flutter-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-decap-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-mongo-light.svg" />
        <img class="image" src="~/assets/images/brands/landscape-firebase-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-tailwind-light.png" />
      </div>
    </section>

    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2"
    >
      <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
        Pricing Plan
      </h1>
      <br />
      <br />
      <p class="mx-auto mt-4 max-w-2xl text-center text-gray-500 dark:text-gray-300 xl:mt-6">
        Your satisfaction is guaranteed. Try Turboship for 7 days and if you're not blown away then we'll refund your
        money.
      </p>

      <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12">
        <div class="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
          <p class="font-medium uppercase text-gray-500 dark:text-gray-300">Month to Month</p>
          <h2 class="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">$22.99</h2>
          <p class="font-medium text-gray-500 dark:text-gray-300">Per Month</p>
          <button
            class="mt-10 w-full transform rounded-md bg-green-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-green-500 focus:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Start Now
          </button>
        </div>

        <div class="w-full space-y-8 rounded-lg bg-green-600 p-8 text-center">
          <p class="font-medium uppercase text-gray-200">Annual</p>
          <h2 class="text-5xl font-bold uppercase text-white dark:text-gray-100">$250</h2>
          <p class="font-medium text-gray-200">Yearly</p>
          <button
            class="mt-10 w-full transform rounded-md bg-white px-4 py-2 capitalize tracking-wide text-blue-500 transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-80"
          >
            Start Now
          </button>
        </div>
        <div class="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
          <p class="font-medium uppercase text-gray-500 dark:text-gray-300">Enterprise</p>
          <h2 class="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">$999</h2>
          <p class="font-medium text-gray-500 dark:text-gray-300">Life Time</p>
          <button
            class="mt-10 w-full transform rounded-md bg-green-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-green-500 focus:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Start Now
          </button>
        </div>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    >
      <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
        Save your most important resource your <span class="text-green-400">time</span>
      </h1>
      <br />
      <br />
    </section>
    <TheFooter />
  </div>
</template>

<style>
.image {
  margin: 25px;
  max-height: 75px;
  place-items: center;
}
</style>

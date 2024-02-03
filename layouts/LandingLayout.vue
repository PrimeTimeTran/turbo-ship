<script setup>
definePageMeta({
  layoutTransition: true,
})
</script>
<template>
  <div class="main-landing overflow-clip scrollbar-hide">
    <TheNavbar />
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col pt-24"
    >
      <slot />
    </section>
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col pt-24 px-32"
    >
      <h1 class="text-center text-4xl my-16">
        <span class="italic">Both</span> <a href=""></a> Full-Stack <br /><span class="text-green-400"
          >Web & <span class="underline">Mobile App</span></span
        ><br />
        Codebase Generator
      </h1>
      <div class="text-xl px-64">
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
        <h1 class="text-center text-4xl my-16">Key Features</h1>

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
            <VCard :title="'Data Modeling'" body="Visual data modeling tool to help you visualize your tables" />
            <VCard :title="'Pre-built Templates'" body="Battle tested schemas to get you going wicked fast" />
            <VCard :title="'Admin Dashboard'" body="Tooling for stakeholders, clients & 3rd parties" />
            <VCard :title="'Mobile App'" body="Because its better to have and not need than need and not have" />
            <VCard :title="'Audit Logs'" body="To ensure that you're ready to scale from the very beginning" />
            <VCard :title="'Roles'" body="Rest assured that access is limited using prebuilt roles" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen flex-wrap items-center justify-center flex flex-col bg-red-300">
      <h1 class="text-center text-4xl my-16">Use the latest tools & frameworks for superior DX</h1>
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
      <h1 class="text-center text-4xl my-16">No-code can only get you so far.</h1>
    </section>

    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    ></section>
    <TheFooter />
  </div>
</template>

<style>
.main-landing {
  color: white;
}

.image {
  margin: 25px;
  max-height: 75px;
  place-items: center;
}
</style>

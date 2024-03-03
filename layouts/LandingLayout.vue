<script setup>
import { Icon } from '#components'
definePageMeta({
  layoutTransition: true,
})

const MetaIcon = h(Icon, { name: 'logos:meta-icon' })
const TechIcon = h(Icon, { name: 'streamline:ai-technology-spark-solid' })
const UnlimitedIcon = h(Icon, { name: 'mdi:relation-many-to-many' })

const DataIcon = h(Icon, { name: 'icon-park:data' })
const TemplateIcon = h(Icon, { name: 'vscode-icons:folder-type-template-opened' })
const AdminIcon = h(Icon, { name: 'material-symbols-light:space-dashboard-sharp' })
const MobileIcon = h(Icon, { name: 'twemoji:mobile-phone' })
const AuditIcon = h(Icon, { name: 'icon-park:audit' })
const RolesIcon = h(Icon, { name: 'oui:app-users-roles' })
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
      class="grid place-content-center w-screen h-2/3 dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex-col py-16 px-8 xl:px-16"
    >
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-5xl font-medium title-font text-center mb-20 text-gray-900 dark:text-white">
            <span class="italic">Both</span> <a href=""></a> Full-Stack <br />
            <span class="text-green-400">Web & <span class="underline">Mobile App</span></span>
            <br />
            Codebase Generator
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
              <div
                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0"
              >
                <MetaIcon />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="base-content text-2xl title-font font-medium mb-2">Leverage Meta Programming</h2>
                <p class="leading-relaxed base-content">
                  Why repeat yourself?
                  <br />
                  <br />
                  Generate the common features required of any meaningful app.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div
                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0"
              >
                <TechIcon />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="base-content text-2xl title-font font-medium mb-2">Latest Technologies</h2>
                <p class="leading-relaxed base-content">
                  A modern set of tools chosen for DX.
                  <br />
                  <br />
                  Nuxt3, Flutter, Firebase, MongoDB, TailwindCSS, DecapCMS simplify everything.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div
                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0"
              >
                <UnlimitedIcon />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="base-content text-2xl title-font font-medium mb-2">Created Unlimited Projects</h2>
                <p class="leading-relaxed base-content">
                  Generate as many projects as necessary
                  <br />
                  <br />
                  Focus on your companies secret sauce, it's competitive advantage, leave the generic plumbing up to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section
      class="w-screen min-h-screen flex justify-center py-6 items-center dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200"
    >
      <div class="flex flex-col text-center justify-center items-middle">
        <h1 class="text-center text-5xl font-semibold capitalize text-gray-800 dark:text-white">
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
            <ICard
              :icon="DataIcon"
              :title="'Data Modeling'"
              body="Visual data modeling tool to help you visualize your tables"
            />
            <ICard
              :icon="TemplateIcon"
              :title="'Pre-built Templates'"
              body="Battle tested schemas to get you going wicked fast"
            />
            <ICard
              :icon="AdminIcon"
              :title="'Admin Dashboard'"
              body="Tooling for stakeholders, clients & 3rd parties"
            />
            <ICard
              :icon="MobileIcon"
              :title="'Mobile App'"
              body="Because its better to have and not need than need and not have"
            />
            <ICard
              :icon="AuditIcon"
              :title="'Audit Logs'"
              body="To ensure that you're ready to scale from the very beginning"
            />
            <ICard :icon="RolesIcon" :title="'Roles'" body="Rest assured that access is limited using prebuilt roles" />
          </div>
        </div>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-1/2 py-32 flex-wrap items-center justify-center flex-col dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200"
    >
      <h1 class="text-center text-5xl font-semibold capitalize text-gray-800 dark:text-white">
        The best tools & frameworks
        <br />
        for superior <span class="text-green-400">developer experience</span>
      </h1>
      <br />
      <br />
      <div class="grid grid-cols-3 gap-4 items-center bg-base-300 dark:bg-base-100 rounded-lg p-16">
        <img class="image" src="~/assets/images/brands/landscape-nuxt-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-flutter-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-decap-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-mongo-light.svg" />
        <img class="image" src="~/assets/images/brands/landscape-firebase-light.png" />
        <img class="image" src="~/assets/images/brands/landscape-tailwind-light.png" />
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-1/2 py-32 dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2"
    >
      <h1 class="text-center text-5xl font-semibold capitalize text-gray-800 dark:text-white">Pricing Plan</h1>
      <br />
      <br />
      <p class="mx-auto mt-4 text-center text-gray-500 dark:text-gray-300 xl:mt-6">
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
      class="grid place-content-center w-screen h-1/2 py-32 dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2"
    >
      <h1 class="text-center text-5xl font-semibold capitalize text-gray-800 dark:text-white">
        Save your most important resource your <span class="text-green-400">time</span>
      </h1>
      <div class="collapse bg-base-100 my-8">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div class="collapse-title text-xl font-medium">What if Turboship doesn't fit my needs?</div>
        <div class="collapse-content">
          <p>We have a 14 day full refund policy no questions asked.</p>
        </div>
      </div>
      <div class="collapse bg-base-100 mb-8">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium">What are your primary technologies?</div>
        <div class="collapse-content">
          <p>We use the best available</p>
        </div>
      </div>
      <div class="collapse bg-base-100 mb-8">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium">What happens after I pay?</div>
        <div class="collapse-content">
          <p>Restrictions will be lifted which allow you to generate the source code</p>
        </div>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-1/2 dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 py-32"
    >
      <section class="text-gray-600 body-font">
        <h1 class="text-center text-5xl font-semibold capitalize text-gray-800 dark:text-white">
          Watch how simple it is
          <br />
        </h1>
        <iframe
          width="800"
          height="400"
          frameborder="0"
          allowfullscreen
          class="m-12"
          src="https://www.youtube.com/embed/7vE-7_JrIa0"
          title="Turboship Initialization | Turboship Livestreams #1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <h2 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white">
          how progress looks
          <br />
        </h2>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">3</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
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

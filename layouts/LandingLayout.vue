<template>
  <div class="overflow-clip scrollbar-hide">
    <TheNavbar />
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col pt-24"
    >
      <slot />
    </section>
    <section
      id="2"
      class="w-screen h-screen flex justify-center items-center dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 "
    >
      <div class="flex flex-col text-center justify-center items-middle">
        <h1 class="text-white text-lg mb-24">Why us?</h1>
        <div
          class="flex flex-col-reverse lg:flex-row justify-center items-between"
        >
          <div
            data-wow-duration="1s"
            class="flex flex-1 flex-col items-center justify-center p-2 wow fadeInUp"
            style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp"
          >
            <img
              src="~/assets/images/Mockups/BrowserEntity.png"
              class="w-screen lg:max-w-screen-lg lg:relative lg:-left-52 hover:shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-2"
            />
          </div>
          <div
            class="grid grid-cols-12 gap-x-10 gap-4 flex-1 flex-row flex-wrap justify-between -mx-4 space-x-1 text-center lg:relative lg:-left-40"
          >
            <VCard :title="'Data Modeling'"  />
            <VCard :title="'Pre Build Designs'"  />
            <VCard :title="'Admin Dashboard'"  />
            <VCard :title="'Mobile App'"  />
            <VCard :title="'Audit Logs'"  />
            <VCard :title="'Roles'"  />
          </div>
          <!-- <p class="text-center text-sm uppercase">Turboship</p>
            <h2 class="text-4xl lg:text-4xl mt-4 text-gray-700 dark:text-white">
              We do the basics
              <div
                class="font-bold animate__animated animate__flash"
                style="white-space: nowrap"
              >
                so you can
                <span class="border-b-8 border-b-green-400">innovate</span>
              </div>
            </h2>
            <p class="text-xl lg:text-2xl mt-4 text-gray-700 dark:text-white">
              Focus on what makes your business stand out. Leave the foundation
              covered
            </p>
            <div
              class="mt-10 flex flex-col justify-center text-center items-center md:flex-row"
            >
              <a
                href="#2"
                class="mb-3 inline-flex min-h-12 py-2 w-full items-center justify-center rounded bg-green-600 px-6 font-medium lg:text-lg text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                Learn more
              </a>
              <a
                href="/"
                aria-label=""
                class="mb-3 inline-flex min-h-12 py-2 w-full items-center justify-center rounded px-6 text-white lg:text-lg transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                Read how it works
              </a>
            </div> -->
        </div>
      </div>
    </section>
    <section
      class="w-screen h-screen  dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 "
    >
      3
    </section>
    <section
      class="w-screen h-screen  dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 "
    >
      4
    </section>
    <TheFooter />
  </div>
</template>

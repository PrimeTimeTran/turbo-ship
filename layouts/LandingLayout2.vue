<script setup></script>

<template>
  <div class="overflow-clip scrollbar-hide">
    <The.Navbar />
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 flex flex-col pt-24"
    >
      <slot />
    </section>
    <section
      id="2"
      class="w-screen h-screen flex justify-center items-center dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200"
    >
      <div class="flex flex-col text-center justify-center items-middle">
        <h1 class="dark:text-white text-lg mb-24">Why us?</h1>
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
            <VCard
              :title="'Data Modeling'"
              body="Visual data modeling tool to help you visualize & understand more clearly"
            />
            <VCard :title="'Pre-built Templates'" body="Battle tested schemas to get you going fast" />
            <VCard :title="'Admin Dashboard'" body="Tooling for stakeholders & APIs for clients" />
            <VCard :title="'Mobile App'" body="Because its better to have and not need than need and not have" />
            <VCard :title="'Audit Logs'" body="To ensure that you're ready to scale from the very beginning" />
            <VCard
              :title="'Roles'"
              body="Safeguard core business functions behind roles so that your team can rest assured"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2"
    >
      <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200">
      <div class="tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    >
      <details class="dropdown">
        <summary class="m-1 btn">open or close</summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    >
      <div role="tablist" class="tabs tabs-bordered">
        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
        <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked />
        <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
        <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
      </div>
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    >
      7
    </section>
    <TheFooter />
  </div>
</template>

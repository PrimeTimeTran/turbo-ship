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
        <div
          class="flex flex-col-reverse lg:flex-row justify-center items-between"
        >
          <div
            data-wow-duration="1s"
            class="flex-1 flex-col items-center justify-center p-2 wow fadeInUp hidden invisible md:flex md:visible"
            style="
              visibility: visible;
              animation-duration: 1s;
              animation-name: fadeInUp;
            "
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
            <VCard
              :title="'Pre-built Templates'"
              body="Battle tested schemas to get you going fast"
            />
            <VCard
              :title="'Admin Dashboard'"
              body="Tooling for stakeholders & APIs for clients"
            />
            <VCard
              :title="'Mobile App'"
              body="Because its better to have and not need than need and not have"
            />
            <VCard
              :title="'Audit Logs'"
              body="To ensure that you're ready to scale from the very beginning"
            />
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
      <!-- <VToolTip 
        tool="loi click" 
        tip="Loi custom tip" 
        @click="() => {
          console.log('click handler in parent')
        }" 
      /> -->
    </section>
    <section
      class="w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200"
    >
      4
    </section>
    <section
      class="grid place-content-center w-screen h-screen dark:odd:bg-slate-950 dark:even:bg-zinc-950 odd:bg-gray-100 even:bg-slate-200 p-2 lg:p-96"
    >
      <VAccordion />
    </section>
    <TheFooter />
  </div>
</template>

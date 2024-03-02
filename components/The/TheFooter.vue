<script setup>
const { hostUrl } = useAPI()
const frameworks = [
  {
    name: 'Vue',
    url: `${hostUrl}/articles/vue`,
  },
  {
    name: 'Nuxt',
    url: `${hostUrl}/articles/nuxt`,
  },
  {
    name: 'React',
    url: `${hostUrl}/articles/react-native`,
  },
  {
    name: 'Next',
    url: `${hostUrl}/articles/next`,
  },
  {
    name: 'React Native',
    url: `${hostUrl}/articles/react-native`,
  },
  {
    name: 'Flutter',
    url: `${hostUrl}/articles/flutter`,
  },
  // {
  //   name: 'Svelte',
  //   url: `${hostUrl}/articles/svelte`,
  // },
]
const backends = ['NodeJS', 'Ruby On Rails', 'Django', '.NET']
</script>

<template>
  <footer
    class="bg-white font-sans dark:bg-gray-900 border-t-2 border-top-gray-100 dark:border-t-gray-950 min-h-screen"
  >
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div class="sm-col">
          <p class="text-black dark:text-white font-semibold">Frontend</p>
          <div class="flex flex-col items-start mt-5 space-y-2">
            <NuxtLink
              :to="item.url"
              v-for="item in frameworks"
              class="text-black hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 transition-colors duration-300 hover:underline hover:cursor-pointer"
              v-text="item.name"
            >
            </NuxtLink>
          </div>
        </div>
        <div>
          <p class="text-black dark:text-white font-semibold">Backend</p>
          <div class="flex flex-col items-start mt-5 space-y-2">
            <NuxtLink
              v-for="item in backends"
              class="text-black hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 transition-colors duration-300 hover:underline hover:cursor-pointer"
              v-text="item"
            >
            </NuxtLink>
          </div>
        </div>
        <TheFooterSubscribeForm class="col-span-2" />
      </div>
      <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex flex-1 gap-4 hover:cursor-pointer">
          <TheFooterStores />
        </div>
        <TheFooterSocials />
      </div>
      <TheFooterCopyright />
    </div>
  </footer>
</template>

<!-- https://www.termsofservicegenerator.net/live.php?token=f3JEmKqFRtYxYETD3FEGfDbAiHn9j6y4 -->

<template>
  <p
    class="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-black dark:text-white"
  >
    © {{ currentYear }}
    <a
      href="https://ltran.net"
      class="text-black hover:opacity-50 dark:text-gray-300 dark:hover:opacity-50 transition-colors duration-300 hover:underline hover:cursor-pointer"
    >
      PrimeTimeTran.
    </a>
    All rights reserved.
  </p>
</template>
<script>
export default {
  data() {
    return {
      frameworks: [
        {
          name: 'Vue',
          url: 'https://nuxtoverflow.ltran.net',
        },
        {
          name: 'Nuxt',
          url: 'https://nuxtoverflow.ltran.net',
        },
        {
          name: 'React',
          url: 'https://react-blog.ltran.net',
        },
        {
          name: 'Next',
          url: 'https://strapi-blog.ltran.net',
        },
        {
          name: 'React Native',
          url: '',
        },
        {
          name: 'Flutter',
          url: '',
        },
        {
          name: 'Svelte',
          url: 'https://svelte-blog.ltran.net',
        },
      ],
      backends: ['NodeJS', 'Ruby On Rails', 'Django', '.NET'],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

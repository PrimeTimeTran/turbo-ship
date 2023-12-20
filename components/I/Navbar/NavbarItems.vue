<script setup>
const navItems = [
  {
    url: '/',
    name: 'Home',
    icon: 'fa-house',
  },
  {
    url: '/entities',
    name: 'Entity Builder',
    icon: 'fa-cubes',
  },
  {
    url: '/articles/vue/vue-1-fundamentals',
    name: 'Articles',
    icon: 'fa-blog',
  },
  {
    url: '/administrator/dashboard',
    name: 'Dashboard',
    icon: 'fa-blog',
  },
  {
    url: '/templates/ui',
    name: 'Design Guide',
    icon: 'fa-blog',
  },
]
</script>
<template>
  <NuxtLink
    :to="item.url"
    :key="item.name"
    v-for="item in navItems"
    class="flex lg:flex-none items-center lg:px-6 py-3 text-gray-500 hover:text-green-400 dark:text-white dark:hover:text-green-400 cursor-pointer transition-colors duration-300 text-xs font-bold"
  >
    <FontAwesomeIcon :icon="item.icon" class="mr-3" />
    <span v-text="item.name"></span>
  </NuxtLink>
  <TheNavbarRight id="navItems-right" />
</template>

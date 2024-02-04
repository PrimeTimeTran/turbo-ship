<script setup>
const navItems = [
  {
    url: '/',
    name: 'Home',
    icon: 'fa-house',
  },
  {
    url: '/articles/vue/vue-1-fundamentals',
    name: 'Articles',
    icon: 'fa-newspaper',
  },
  {
    url: '/entities',
    name: 'Entity Builder',
    icon: 'fa-cubes',
  },
  // {
  //   url: '/news',
  //   name: 'News',
  //   icon: 'fa-newspaper',
  // },
  // {
  //   url: '/consulting',
  //   name: 'Consulting',
  //   icon: 'fa-cubes',
  // },
  {
    url: '/administrator/dashboard',
    name: 'Dashboard',
    icon: 'fa-dashboard',
  },

  {
    url: '/administrator/auditlogs',
    name: 'Audits',
    icon: 'fa-blog',
  },
  {
    url: '/administrator/calendar',
    name: 'Calendar',
    icon: 'fa-calendar',
  },
  {
    url: '/theme/ui',
    name: 'UIKit',
    icon: 'fa-palette',
  },
]
</script>
<template>
  <NuxtLink
    :to="item.url"
    :key="item.name"
    v-for="item in navItems"
    class="flex lg:flex-none items-center lg:px-6 py-3 text-gray-500 hover:text-green-500 dark:text-gray dark:hover:text-green-500 cursor-pointer transition-colors duration-300 text-xs font-bold"
  >
    <FontAwesomeIcon :icon="item.icon" class="mr-3" />
    <span v-text="item.name" />
  </NuxtLink>
  <TheNavbarRight id="navItems-right" />
</template>

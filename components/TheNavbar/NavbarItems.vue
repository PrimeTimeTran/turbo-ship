<template>
  <div class="flex flex-start flex-grow sm:justify-center md:justify-start space-x-5 m-auto w-full border-b-2 sm:border-b-cyan-300 md:border-b-0">
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex flex-auto lg:flex-none items-center lg:px-6 py-3 text-gray-500 hover:text-green-400 dark:text-white dark:hover:text-green-400 cursor-pointer transition-colors duration-300 text-xs font-bold"
    >
      <font-awesome-icon
        :icon="item.icon"
        class="mr-3"
      />
      {{ item.name }}
    </NuxtLink>
  </div>
  <TheNavbarRight id="navItems-right" />
</template>

<script>
export default {
  data() {
    return {
      navItems: [
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
          url: '/articles/vue/vue-1-components',
          name: 'Articles',
          icon: 'fa-blog',
        },
        {
          url: '/todos',
          name: 'Todos',
          icon: 'fa-list',
        },
        // {
        //   url: '/tag',
        //   name: 'Tags',
        //   icon: 'fa-tags',
        // },
        // {
        //   url: '/project',
        //   name: 'Projects',
        //   icon: 'fa-diagram-project',
        // },
        // {
        //   url: '/about',
        //   name: 'About',
        //   icon: 'fa-user',
        // },
      ],
    }
  },
}
</script>

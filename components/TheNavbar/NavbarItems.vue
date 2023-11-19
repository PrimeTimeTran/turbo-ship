<template>
  <ul class="flex flex-col lg:flex-row list-none m-auto w-full">
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex items-center lg:px-6 px-12 py-3 text-black hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 hover:border-b-2 hover:border-b-green-500 dark:hover:border-b-2 dark:hover:border-b-green-500 cursor-pointer transition-colors duration-300 text-xs font-bold hover:opacity-75"
    >
      <font-awesome-icon
        :icon="item.icon"
        class="mr-3"
      />
      {{ item.name }}
    </NuxtLink>
  </ul>
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
          url: '/articles/vue/vue-1-overview',
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

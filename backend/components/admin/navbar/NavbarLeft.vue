<template>
  <ul class="flex flex-col lg:flex-row list-none m-auto w-full">
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex items-center lg:px-6 px-12 py-3 text-gray-500 hover:text-green-400 dark:text-white dark:hover:text-green-400 cursor-pointer transition-colors duration-300 text-xs font-bold"
    >
      <font-awesome-icon
        class="mr-3"
        :icon="item.icon"
      />
      <span v-text="item.name" />
    </NuxtLink>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          url: '/admin',
          name: 'Admin',
          icon: 'fa-house',
        },
        {
          url: '/admin/users',
          name: 'Users',
          icon: 'fa-blog',
        },
        {
          url: '/admin/wizards',
          name: 'Wizards',
          icon: 'fa-hat-wizard',
        },
        {
          url: '/admin/settings',
          name: 'Settings',
          icon: 'fa-gear',
        },
        {
          url: '/admin/profile',
          name: 'Profile',
          icon: 'fa-user',
        },
        {
          url: '/admin/about',
          name: 'About',
          icon: 'fa-address-card',
        },
      ],
    }
  },
}
</script>

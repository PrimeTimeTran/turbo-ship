<template>
  <ul class="flex flex-col lg:flex-row list-none m-auto w-full">
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex items-center lg:px-6 px-12 py-3 text-black hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 cursor-pointer transition-colors duration-300 text-xs font-bold hover:opacity-75"
    >
      <font-awesome-icon
        class="mr-3"
        :icon="item.icon"
      />
      {{ item.name }}
    </NuxtLink>
  </ul>
  <admin-navbar-right />
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

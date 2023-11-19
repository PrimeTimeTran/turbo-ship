<script setup></script>

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
          url: '/admin/about',
          name: 'About',
          icon: 'fa-code',
        },
      ],
    }
  },
}
</script>

<template>
  <div
    class="flex flex-start flex-grow sm:justify-center md:justify-start space-x-5 m-auto w-full border-b-2 sm:border-b-cyan-300 md:border-b-0"
  >
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex flex-auto lg:flex-none items-center lg:px-6 py-3 text-gray-500 hover:text-green-400 dark:text-white dark:hover:text-green-400 cursor-pointer transition-colors duration-300 text-xs font-bold"
      :class="{
        'text-green-400': cur == item.url,
      }"
    >
      <font-awesome-icon
        class="m-3"
        :icon="item.icon"
      />
      <span v-text="item.name" />
    </NuxtLink>
  </div>
</template>

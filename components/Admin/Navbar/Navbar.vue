<template>
  <nav
    class="z-50 fixed top-0 left-0 right-0 w-screen flex flex-wrap items-center justify-around bg-white dark:bg-neutral-950 backdrop-blur-md border-b-2 border-b-gray-300 dark:border-b-zinc-800"
  >
    <div
      class="flex flex-wrap flex-grow items-center justify-between md:flex-col md:flex-start lg:flex-row lg:px-3 px-3"
    >
      <div
        class="flex relative w-full justify-between lg:w-auto px-4 lg:justify-start py-3"
      >
        <admin-navbar-logo />
        <NuxtLink
          type="button"
          @click="toggleNavbar"
          class="flex items-center lg:hidden text-gray-500 dark:hover:opacity-50 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none hover:cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-bars" />
        </NuxtLink>
      </div>
      <div
        class="flex flex-col flex-auto md:flex-row lg:flex lg:flex-grow md:min-w-100 md:min-w-full lg:min-w-0"
        :class="{ hidden: !showMenu, flex: showMenu }"
      >
        <admin-navbar-left />
        <admin-navbar-right />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<script setup></script>

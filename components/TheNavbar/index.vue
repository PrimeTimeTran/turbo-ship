<template>
  <div
    x-cloak
    :x-data="appData()"
    :x-init="appInit()"
    class="flex flex-col items-center justify-center"
  >
    <TheNavbarScrollSpy :percent="percent" />
    <nav
      class="fixed top-0 left-0 right-0 z-10 w-screen flex flex-wrap items-center justify-around bg-white dark:bg-slate-800 backdrop-blur-md shadow"
    >
      <div
        class="flex flex-wrap flex-grow md:flex-nowrap px-3 lg:px-3 items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start py-3"
        >
          <TheNavbarLogo />
          <NuxtLink
            type="button"
            @click="toggleNavbar"
            class="flex items-center text-gray-500 dark:hover:opacity-50 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none hover:cursor-pointer"
          >
            <font-awesome-icon icon="fa-solid fa-bars" />
          </NuxtLink>
        </div>
        <div
          class="lg:flex lg:flex-grow items-center"
          v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        >
          <TheNavbarItems />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
const browser = process.browser

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

<script setup>
import { ref } from 'vue'
const percent = ref(0)

function appInit() {
  if (browser && window.location.pathname != '/login') {
    window?.addEventListener('scroll', () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      percent.value = Math.round((winScroll / height) * 100)
    })
  }
}

function appData() {
  if (browser && window.location.pathname != '/login') {
    return {
      percent,
    }
  }
}
</script>

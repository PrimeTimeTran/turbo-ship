<script setup>
definePageMeta({
  layout: 'design-layout',
})
const content = ref('buttons')
</script>

<template>
  <nav class="w-full navbar bg-base-300 z-20">
    <div class="flex-none lg:hidden">
      <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <div class="flex-1 px-2 mx-2">Navbar Title</div>
    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal">
        <li><a>Navbar Item 1</a></li>
        <li><a>Navbar Item 2</a></li>
      </ul>
    </div>
  </nav>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col p-6">
      <DesignButtons v-if="content === 'buttons'" />
      <DesignAccordions v-if="content === 'accordions'" />
      <DesignBadges v-if="content === 'badges'" />
      <DesignCards v-if="content === 'cards'" />
      <DesignCarousel v-if="content === 'carousel'" />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <li @click="content = 'buttons'"><a>Buttons</a></li>
        <li @click="content = 'accordions'"><a>Accordions</a></li>
        <li @click="content = 'badges'"><a>Badges</a></li>
        <li @click="content = 'cards'"><a>Cards</a></li>
        <li @click="content = 'carousel'"><a>Carousels</a></li>
      </ul>
    </div>
  </div>
</template>

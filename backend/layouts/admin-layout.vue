<template>
  <div class="flex flex-col min-h-screen dark:bg-neutral-900">
    <nuxt keep-alive />

    <div class="min-h-screen h-full">
      <admin-navbar-container />
      <div class="flex flex-row w-100">
        <div class="flex flex-grow overflow-y-auto no-scrollbar min-">
          <admin-aside />
          <div class="flex flex-1 pt-16 px-2">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

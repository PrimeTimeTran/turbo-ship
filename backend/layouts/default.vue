<template>
  <div class="flex flex-col min-h-screen justify-between dark:bg-gray-900">
    <div class="min-h-screen px-6 md:px-8 lg:px-64">
      <div class="pl-0 md:pl-12">
        <Navbar />
        <slot />
        <div>
          <TheFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

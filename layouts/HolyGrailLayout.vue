<script setup></script>
<template>
  <div class="flex min-h-screen flex-col">
    <header class="bg-blue-200 p-4">Header</header>
    <div class="flex flex-1 flex-row">
      <main class="flex-1 bg-blue-50 p-4">
        <div class="overflow-x-auto"><HGTable /></div>
      </main>
      <nav class="order-first w-64 bg-blue-100"><HGSidebar /></nav>
      <aside class="w-32 bg-blue-100 p-4">Side</aside>
    </div>
    <footer class="bg-blue-200 p-4">Footer</footer>
    <BBottomBanner />
  </div>
</template>
<style></style>

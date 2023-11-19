<template>
  <div class="flex flex-col min-h-screen dark:bg-neutral-950">
    <div class="min-h-screen h-full">
      <AdminNavbar />
      <div class="flex flex-row w-100">
        <div class="flex flex-grow overflow-y-auto no-scrollbar">
          <AdminAside />
          <div class="flex flex-1 min-w-0 pt-16 px-2">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layoutTransition: true,
})
const { isOpen, toggleOpen } = useToggleOpen()

const handleToggle = () => {
  if (window.innerWidth > 768) return
  toggleOpen()
}
useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Entity scripts loading...")',
      tagPosition: 'head',
    },
  ],
})
</script>
<template>
  <div class="flex flex-col justify-between bg-base-100">
    <div class="min-h-screen">
      <The.Navbar />
      <div class="flex flex-row">
        <div
          class="hidden md:flex flex-col h-full max-h-screen overflow-y-auto p-3 border-r-2 border-gray-200 dark:border-gray-800"
        >
          <MenuTableOfContents @toggled="handleToggle" />
        </div>
        <div class="flex flex-grow overflow-y-auto max-h-screen px-4 no-scrollbar md:mr-4 lg:mr-0">
          <slot />
          <TheNavbar class="main-nav visible lg:block md:invisible rounded border z-10 shadow">
            <MenuBurger :isOpen="isOpen" @toggled="toggleOpen" />
          </TheNavbar>
          <MenuSidebar :isOpen="isOpen" @toggled="toggleOpen">
            <MenuTableOfContents @toggled="handleToggle" />
          </MenuSidebar>
        </div>
        <div class="hidden md:flex flex-col h-full max-h-screen overflow-y-auto border-r-2 border-gray pt-24 lg:pr-8">
          <ScrollSpy />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-nav {
  right: 10px;
  bottom: 10px;
  display: flex;
  position: fixed;
  padding: 0.5rem 0.8rem;
  justify-content: space-between;
  background-color: rgba(19, 15, 64);
}
</style>

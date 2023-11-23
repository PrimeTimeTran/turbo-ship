<script setup lang="ts">
import { provide } from 'vue'
const { isOpen, toggleOpen } = useToggleOpen()

const handleToggle = () => {
  if (window.innerWidth > 768) return
  toggleOpen()
}

const { items } = useScrollSpy2Data()

const targets2: string[] = []

if(process.browser) {
   const container = document.getElementById('pageContent')
   const sections = container?.querySelectorAll(`a`)
   sections?.forEach((e) => {
      const path = e.href.split('/')[5]
      targets2.push(path)
   });
}

const scrollBehavior = ref<'smooth' | 'auto'>('smooth')
const clickType = ref<'native' | 'custom'>('native')

provide('DemoRadios', {
   scrollBehavior,
   clickType,
})

const containerRef = ref<HTMLElement | null>(null)
provide('TOCData', { items, targets2, containerRef, overlayHeight: 60 })

</script>
<template>
  <div class="flex flex-col justify-between dark:bg-gray-900 dark:text-white">
    <div class="min-h-screen">
      <TheNavbar />
      <div class="flex flex-row">
        <div
          class="hidden md:flex flex-col h-full max-h-screen overflow-y-auto p-3 dark:bg-slate-800 border-r-2 border-gray dark:border-gray-950"
        >
          <MenuTableOfContents @toggled="handleToggle" />
        </div>
        <div
          if="containerRef"
          class="flex flex-grow overflow-y-auto max-h-screen pt-24 px-4 no-scrollbar md:mr-4 lg:mr-0"
        >
          <slot />
          <TheNavbar
            class="main-nav visible lg:block md:invisible rounded border-blue-100 border-2 z-10 shadow"
          >
            <MenuBurger
              :isOpen="isOpen"
              @toggled="toggleOpen"
            />
          </TheNavbar>
          <MenuSidebar
            :isOpen="isOpen"
            @toggled="toggleOpen"
          >
            <MenuTableOfContents @toggled="handleToggle" />
          </MenuSidebar>
        </div>
        <div
          class="hidden md:flex flex-col h-full max-h-screen overflow-y-auto border-r-2 border-gray dark:border-gray-950 pt-24 lg:pr-8"
        >
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

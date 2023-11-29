<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const props = defineProps(['title', 'underline', 'items'])

const isOpen = ref(false)

function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <Menu
    as="div"
    class="relative inline-block text-left dark:border-gray-800 border-l border-r"
    
  >
    <MenuButton
      :id="title + 'Menu'"
      @click="() => {
        if (toolBarScreens.includes(title.toLowerCase())) {
          store.view = views[title.toLowerCase()]
        }
        toggleOpen()
      }"
      v-html="replaceWithUnderline(title, underline)"
      class="inline-flex w-full justify-center text-black/60 px-4 py-2 text-sm font-medium dark:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 rounded dark:hover:brightness-200 dark:hover:text-white"
    />
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="items">
        <MenuItems
          class="absolute right-l mt-1 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 focus:outline-none dark:ring-gray-800 "
        >
          <div class="px-1 py-1">
            <MenuItem :key="item.id" v-slot="{ active }" v-for="item, idx of items">
              <button
                :key="item.id"
                @click="item.click"
                :class="[
                  'group flex w-full items-center px-2 py-2 text-sm rounded-none',
                  active ? 'text-green-400' : 'dark:text-white text-gray-500',
                  item.groupStart ? 'border-t-2 border-t-gray-300' : '',
                  item.groupEnd ? 'border-b-2 border-b-gray-300' : '',
                ]"
              >
                <VToolTip v-if="item.doubleKey" :tip="item.tip" :id="item.id" :tool="replaceWithDoubleUnderline(item.name, item.underline)">
                  <!-- <span v-html="replaceWithUnderline(item.name, item.underline)" /> -->
                </VToolTip>
                <VToolTip v-else :tip="item.tip" :id="item.id" :tool="replaceWithUnderline(item.name, item.underline)">
                  <!-- <span v-html="replaceWithUnderline(item.name, item.underline)" /> -->
                </VToolTip>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </div>
    </transition>
  </Menu>
  <div v-if="items">
    <div class="hidden" :key="item.name" v-for="item of items">
      <span @click="item.click" :id="item.name + 'Submenu'" v-html="replaceWithUnderline(item.name, item.underline)" />
    </div>
  </div>
</template>


<style>
.double-underline {
  text-decoration-line: underline;
  text-decoration-style: double;
}
</style>
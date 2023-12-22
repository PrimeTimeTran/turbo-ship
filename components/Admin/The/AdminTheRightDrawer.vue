<script setup>
import { useEventBus } from '@vueuse/core'
import { useRightDrawerStore } from '@/stores/drawerRightStore.js'
const store = useRightDrawerStore()
const focused = ref(store.focused)

onMounted(() => {
  const bus = useEventBus('DrawerFocus')
  function listener(item) {
    focused.value = item
  }
  const unsubscribe = bus.on(listener)
})
</script>

<template>
  <div class="drawer drawer-end z-auto">
    <input id="rightDrawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content"></div>
    <div class="drawer-side z-10">
      <label for="rightDrawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-4/6 min-h-full bg-slate-200 dark:bg-base-200 text-base-content">
        <AdminEntityFormLarge :entity="focused" :entityType="'users'" />
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRightDrawerStore } from '@/stores/drawerRightStore.js'
const { $event } = useNuxtApp()

const onUserRegistered = (user) => {
  // User registration form was saved and then we want
  // to notify the entire application about that.
  $event('user:registered', user)
}

onMounted(() => {
  const emitter = useEmitter()
  emitter.emit('test-emit', 'hello world')
})

const store = useRightDrawerStore()
const focused = store.focused
</script>

<template>
  <div class="drawer drawer-end z-auto">
    <input id="rightDrawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <ILightbox />
    </div>
    <div class="drawer-side z-10">
      <label for="rightDrawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-4/6 min-h-full bg-slate-200 dark:bg-base-200 text-base-content">
        <AdminEntityFormLarge :entity="focused" :entityType="'users'" />
        <slot />
      </ul>
    </div>
  </div>
</template>

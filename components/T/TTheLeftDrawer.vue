<!-- [ ] How to disable caching of files? -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps({})
</script>

<template>
  <div class="drawer">
    <input id="tLeftDrawerToggle" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot name="navbar" />
      <slot />
      <label for="tLeftDrawerToggle"></label>
    </div>
    <div class="drawer-side">
      <label for="tLeftDrawerToggle" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <slot name="sidebar" />
      </ul>
    </div>
    <slot name="scripts" />
  </div>
</template>

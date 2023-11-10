<script setup>
const props = defineProps(['searching', 'fetchFilteredWizards', 'createForm'])

// Workaround because FormKit reset seems broken
// https://formkit.com/inputs/form#resetting

// This reset doesn't work.
// import { reset } from '@formkit/core'

// Causes blank screen for a bit which sucks
const num = ref(0)
const clearForm = () => {
  num.value = num.value + 1
}
</script>
<template>
  <div
    class="w-100 dark:bg-neutral-950 p-3 main-container"
    :class="{ hidden: !searching && !createForm }"
  >
    <TransitionGroup
      name="fade-move"
      class="container"
    >
      <div :key="num">
        <admin-form-entity-form
          :clear="clearForm"
          :searching="searching"
          :fetchFilteredWizards="fetchFilteredWizards"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.main-container {
  min-height: 50vh;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}

.admin-form-entity-form {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>

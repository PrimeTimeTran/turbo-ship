<script setup>
const props = defineProps(['searching', 'fetchFilteredUsers', 'createForm'])

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
        <admin-users-entity-form
          :clear="clearForm"
          :searching="searching"
          :fetchFilteredUsers="fetchFilteredUsers"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

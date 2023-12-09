<script setup>
const props = defineProps(['searching', 'fetchFilteredFoos', 'createForm'])
const num = ref(0)
const clearForm = () => {
  num.value = num.value + 1
}
</script>
<template>
  <div class="w-100 dark:bg-neutral-950 p-3 main-container" :class="{ hidden: !searching && !createForm }">
    <TransitionGroup name="fade-move" class="container">
      <div :key="num">
        <AdminFoosEntityForm :clear="clearForm" :searching="searching" :fetchFilteredFoos="fetchFilteredFoos" />
      </div>
    </TransitionGroup>
  </div>
</template>

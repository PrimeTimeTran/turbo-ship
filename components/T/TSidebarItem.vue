<script setup>
const props = defineProps(['state', 'text', 'icon', 'focused', 'notification', 'notificationCount'])
const emit = defineEmits(['click'])
</script>
<template>
  <button
    @click="emit('click')"
    class="btn btn-ghost flex primary-content hover:text-green-400 dark:hover:text-green-400"
    :class="{
      'text-green-400': focused,
      'hover:text-white': focused,
      'justify-start': state.leftOpen,
    }"
  >
    <div v-if="icon" class="indicator mr-3">
      <span
        v-if="notification"
        v-text="notificationCount"
        class="indicator-item badge badge-info indicator-small h-6 w-6"
      />
      <div class="h-8 w-8">
        <component :is="icon" />
      </div>
    </div>
    <span v-text="text" v-if="state.leftOpen" />
  </button>
</template>

<style scoped>
.indicator-small {
  font-size: 10px;
}
</style>

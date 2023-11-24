<script setup>
import { Switch } from '@headlessui/vue'

const emit = defineEmits(['change'])
const props = defineProps(['enabled'])

const enabled = ref(props.enabled)

watch(enabled, () => {
  emit('change')
})
</script>

<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only"></span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>
</template>

<script setup>
const emit = defineEmits(['changed'])
const { name, value } = defineProps(['name', 'value'])

const onChange = (e) => {
  emit('changed', { value: e.target.value, name })
}
</script>

<template>
  <div class="m-3 mr-3">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ name }}
    </label>
    <input
      class="border"
      @input="onChange"
    />
  </div>
</template>

<script setup>
const props = defineProps(['attribute'])
const focusedKey = computed(() => {
  return props.attribute.type === 'relation'
    ? props.attribute.relation.type
    : props.attribute.type
})
</script>

<template>
  <div>
    {{ Validator.labeledTypes[focusedKey]?.label }}
  </div>
</template>

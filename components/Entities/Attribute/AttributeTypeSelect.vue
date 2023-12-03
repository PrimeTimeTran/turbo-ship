<script setup>
const props = defineProps(['attribute'])
const focusedKey = computed(() => {
  return props.attribute.type === 'relation' ? props.attribute.relation.type : props.attribute.type
})
</script>

<template>
  <div class="italic text-xs px-2 text-blue-400" v-text="Validator.labeledTypes[focusedKey]?.label"></div>
</template>

<script setup>
const props = defineProps(['entity', 'focusedAttribute', 'validators'])
</script>
<template>
  <div>
    <h1>Focused</h1>
    {{ focusedAttribute }}
    <h3>loop</h3>
    <div v-for="val of focusedAttribute.validators.value">
      {{ val }}
    </div>
    <h1>Validators</h1>
    {{ validators.value }}
  </div>
</template>

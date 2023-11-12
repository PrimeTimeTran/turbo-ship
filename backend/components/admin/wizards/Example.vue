<script setup lang="ts">
const { wizards, sort, meta, fetchFilteredWizards } = useWizards()

if (wizards.value.length > 0) {
  const w: WizardType = wizards.value[0]
  console.log({
    GOOO,
    first: w,
  })
}
</script>
<template>
  <h1>Wizards Hello World</h1>
</template>

<script setup>
let { newWizard, addWizard, wizards } = await useWizards()
</script>

<template>
  <admin-table :items="wizards" />
</template>

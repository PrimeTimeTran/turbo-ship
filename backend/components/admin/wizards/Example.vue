<script setup lang="ts">
// From ./backend/server/Models/wizard.model.ts
// Exported types available
const person: PersonType = {
  firstName: 'Vernon',
  lastName: 'Dursley',
}

const wizard: WizardType = {
  firstName: 'Harry',
  lastName: 'Potter',
}

// To get type suggestions the file which exports
// a type must also export another vairblae/constant.

// 1. Wizard has type suggestion
// 2. person does not.

// To enable property suggestions
// the exporting file must export a const as well.
</script>
<template>
  <h1>Wizards Hello World</h1>
</template>

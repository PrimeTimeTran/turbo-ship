<script setup lang="ts">
const { wizards } = useWizards()

if (wizards.value.length > 0) {
  // From ./backend/utils/*
  // Exported symbols are available(variables, constants, types, functions, classes, etc)
  console.log({
    PI,
  })

  // From ./backend/server/models/wizard.model.ts
  // Exported types available
  const person: PersonType = {
    firstName: 'Vernon',
    lastName: 'Dursley',
  }

  // Although type is defined a cavet is that
  // Typing this "person." doesn't trigger type property suggestions.
  console.log({
    person,
  })

  // To enable property suggestions the exporting file must export a const as well.
  //
  const wizard: WizardType = {
    firstName: 'Harry',
    lastName: 'Potter',
  }
  // From ./backend/utils/wizard.ts
  // Which imports & exports from ./backend/server/models/wizard.model.ts
  // As well as a exports a const petName...
  console.log({
    wizard,
  })

  // If we don't export something else from ./backend/utils/*.ts
  const muggle: MuggleType = {
    firstName: 'Petunia',
    lastName: 'Dursley',
  }
  // Then property suggestions don't work.
  console.log({
    muggle,
  })
}
</script>
<template>
  <h1>Wizards Hello World</h1>
</template>

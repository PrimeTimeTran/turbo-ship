---
createdAt: 2023-11-02
title: State
description: State
---

# State in Vue

## Intro  

Like most JS frameworks Vue supports state. And like the others Vue has component & global state.

## Local State

Define title state & use it inside of the template body.

```vue [./component.vue] {2, 6}
<script setup>
const title = 'Wizards'
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

To update the title you must use an input & bind the input to the variable using `v-model` input.

```vue [./component.vue] {7-11}
<script setup>
const title = 'Wizards'
</script>

<template>
  <h1>{{ title }}</h1>
  <input
    type="text"
    v-model="title"
    class="rounded-lg text-black"
  />
</template>
```

And lastly, refactor the variable definition to use Vue's `ref` function.

```vue [./component.vue] {2}
<script setup>
const title = ref('Wizards')
</script>

<template>
  <h1>{{ title }}</h1>
  <input
    type="text"
    v-model="title"
    class="rounded-lg text-black"
  />
</template>
```

Now typing into the input updates the title in real time. Incredible.
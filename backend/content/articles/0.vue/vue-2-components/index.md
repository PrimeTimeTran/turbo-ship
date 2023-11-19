---
createdAt: 2023-11-02
title: Components
description: Components
---
# Vue Components

## Template

The template tag contains HTML markup.

```vue [./component.vue] {2}
<template>
  <h1>Hello Vue!</h1>
</template>
```

## Script

The script tag is used for defining JS code.

```vue [./component.vue] {6}
<template>
  <h1>Hello Vue!</h1>
</template>

<script>
const message = 'Hello Vue'
</script>
```


## Handlebars

We can use JS values inside of the template using [handlebar](https://handlebarsjs.com/guide/) syntax.

```vue [./component.vue] {2}
<template>
  <h1>{{ message }}</h1>
</template>

<script>
const message = 'Hello Vue'
</script>
```
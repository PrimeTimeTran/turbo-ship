---
createdAt: 2023-11-02
title: Components
description: Components
---
# Components

## Intro  

Vue components are usually made up of **3** tags, **template**, **script**, & **style**.

## Template

The template tag contains HTML.

```vue [./component.vue] {2}
<template>
  <h1>Hello Vue!</h1>
</template>
```

::card
#info
All HTML tags are supported. div, img, span, textarea, canvas, etc...
::

## Script

The script tag is used for defining JS.

```vue [./component.vue] {2}
<script>
const message = 'Hello Vue'
</script>

<template>
  <h1>Hello Vue!</h1>
</template>
```


## Handlebars

With [handlebar](https://handlebarsjs.com/guide/) syntax we use the JS variables inside the template.

```vue [./component.vue] {6}
<script>
const message = 'Hello Vue'
</script>

<template>
  <h1>{{ message }}</h1>
</template>
```


## Closing

Combining these elements we can create dynamic and engaging web pages.


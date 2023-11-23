---
createdAt: 2023-10-28
title: Fundamentals
description: Fundamentals
---

# Vue Fundamentals

Concepts you'll be using from day one.

## Template


### Directives

A **directive** is a mechanism for conditionally rendering HTML.

The simplest directive is `v-if` statement. It evaluates a JS statement and renders if the expression evaluates to true.

Typescript `const codeInline: string = 'highlighted code inline'`{lang="ts"} is cool

Inline code `const codeInline: string = 'highlighted code inline'`{lang="ts"} can be contained in paragraphs.

```vue
<template>
  <div v-if="1 === 1">
    True
  </div>
</template>
```

With JS conditionals an **else** statement can be added.

```vue
<template>
  <div v-if="1 === 'one'">
    False
  </div>
  <div v-else>
    True
  </div>
</template>
```

And we can also add infinite statements in one conditional with `v-else-if`. or a **v-else-if**.

```vue
<template>
  <div v-if="1 === 'one'">
    False
  </div>
  <div v-else-if="1 === '1'">
    False
  </div>
  <div v-else>
    True
  </div>
</template>
```

### Bindings

### Events

We can handle events by binding an handler using `v-on`. We use it with an event we're
listening for. For example `v-on:click`

```vue
<template>
  <button v-on:click="console.log('Clicked')">
    Log clicked
  </button>
</template>
```

Using an @ allows us to listen to listen for events being emitted.

```vue
<template>
  <button v-on:click="console.log('Clicked')">
    Log clicked
  </button>
</template>
```

## Scripts

### Props
### Lifecycle
### Composition
### Options

## Style
### Templates 3
### Scripts 3
### Styles 3

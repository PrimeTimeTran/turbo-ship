---
createdAt: 2023-10-28
title: Fundamentals
description: Fundamentals
---

# Vue Fundamentals

Concepts you'll be using from day one.

## Templates

### Directives

A **directive** is a mechanism for conditionally rendering HTML.

The simplest directive is `v-if` statement. It evaluates a JS statement and renders if the expression evaluates to true.

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
  <div v-if="1 === 'one'">
    False
  </div>
  <div v-else-if="1 === '1'">
    False
  </div>
  <div v-else>
    True
  </div>
```

### Bindings
### Events

## Scripts

### Props
### Lifecycle
### Composition
### Options

## Style
### Templates 3
### Scripts 3
### Styles 3

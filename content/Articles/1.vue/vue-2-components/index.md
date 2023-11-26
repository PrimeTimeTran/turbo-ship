---
createdAt: 2023-11-02
title: Components
description: Components
---
# Components

By default place components in the :inline{value=components} directory.

## Structure

Name them using pascal case.

```sh [root]
.
├── components
│   ├── ComponentOne.vue
│   ├── ComponentTwo.vue
│   └── ...
└── App.vue
```

Group components by function/feature in subdirectories.

```sh [root]
.
├── components
│   ├── Navbar
│   │   ├── NavbarItem.vue
│   │   ├── NavbarContainer.vue
│   │   └── ...
│   └── Sidebar
│       ├── SidebarItem.vue
│       ├── SidebarContainer.vue
│       └── ...
└── App.vue
```

If there is "one" of something then convention is the prefix with "The".

```sh [root]
.
├── components
│   ├── Posts
│   │   └── ...
│   ├── Comments
│   │   └── ...
│   ├── Conversations
│   │   └── ...
│   ├── TheNavbar
│   │   └── ...
│   └── TheSidebar
│       └── ...
└── App.vue
```

Base components should begin with V, Base, or App.

```sh [root]
.
├── components
│   ├── Posts
│   │   └── ...
│   ├── Comments
│   │   └── ...
│   ├── Conversations
│   │   └── ...
│   ├── TheNavbar
│   │   └── ...
│   ├── TheSidebar
│   │   └── ...
│   ├── VButton
│   ├── VIcon
│   ├── VTable
│   └── ...
└── App.vue
```

::card
#info
Conventions helps others onboard quickly. 
They're community conventions.
::

## Using components

If you initialized your project with the default vue create command

$ npx vue create hello-world

You could then import and use components like so.


```vue [./views/HomeView.vue] {2}
<script setup lang="ts">
import Todos from '../components/Todos.vue'
</script>

<template>
  <main>
    <Todos />
  </main>
</template>
```
```vue [./component.vue] {2}
.
├── e2e
├── public
└── src
    ├── assets
    ├── components
    ├── router
    ├── stores
    └── views
```

It's more useful to bind values to a user event though

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

## Todo Structure

```sh
.
├── components
│   └── Todos
│       ├── List.vue
│       ├── Form.vue
│       └── Meta.vue
└── App.vue
```



### Events

We can handle events by binding an handler using :inline{value="v-on"}. We use it with an event we're
listening for. For example :inline{value="v-on:click"}

```vue
<template>
  <button v-on:click="console.log('Clicked')">
    Log clicked
  </button>
</template>
```

The :inline{value="@"} we saw earlier allows us to listen for or bind to future events.

```vue
<template>
  <button v-on:click="console.log('Clicked')">  // [!code  --]
  <button @click="console.log('Clicked')">  // [!code  ++]
    Log clicked
  </button>
</template>
```

The syntax :inline{value="@click"} is shorthand for bind :inline{value="v-on:click"}

```js [diff.js]
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```


```js [focus.js]
export default {
  data() {
    return {
      msg: 'Focused!', // [!code  focus]
    }
  },
}
```

## Scripts


### Props

```vue [./component.vue] {}
<script setup>
</script>

<template>
</template>
```

```vue [./component.vue] {}
<script setup>

</script>
<template>
</template>
```

### Lifecycle
### Composition
### Options

[Script syntax](https://vuejs.org/api/sfc-script-setup.html)

## Styles
### 
### 
### 

## Props

```bash
components
├── AComponent.vue
└── BComponent.vue
```
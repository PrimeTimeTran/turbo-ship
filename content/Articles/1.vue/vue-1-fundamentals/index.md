---
createdAt: 2023-10-28
title: Fundamentals
description: Fundamentals
---


# Vue Fundamentals

Concepts you'll use on day one.

## Components

Components are building blocks in Vue. 

We create them by combining HTML, JS, & CSS.

### Templates

A component **must** contain a :inline{value="template"}. Template tags contain HTML.

```vue [./component.vue] {2}
<template>
  <h1>Wizards</h1>
</template>
```

Templates contain 1 root tag(best practice).

```vue [./component.vue] {2, 9}
<template>
  <div>
    <h1>Wizards</h1>
    <ul>
      <li>Harry</li>
      <li>Ron</li>
      <li>Hermione</li>
    </ul>
  </div>
</template>
```

Every standard & semantic HTML is available.

```vue [./component.vue] {5-10, 12}
<template>
  <div>
    <h1>Wizards</h1>
    <ul>
      <li><b>Harry</b></li>
      <li><i>Ron</i></li>
      <li><strong>Hermione</strong></li>
      <li><u>Albus</u></li>
      <li><em>Severus</em></li>
      <li><pre>Minerva</pre></li>
    </ul>
    <input />
  </div>
</template>
```

Standard HTML attributes work, although syntax is slightly different.

```vue [./component.vue] {3, 7-9}
<template>
  <div>
    <h1 :style="{'color': 'red'}">Wizards</h1>
    <ul>
      <li>
        <b 
          :style="{
            'font-size': '100px'
          }" 
        >
         Harry
        </b>
      </li>
      <li><i>Ron</i></li>
      <li><strong>Hermione</strong></li>
      <li><u>Albus</u></li>
      <li><em>Severus</em></li>
      <li><pre>Minerva</pre></li>
    </ul>
  </div>
</template>
```

::card
#info
  The ":" is shorthand for **binding**. More on this later.
::

Lastly we can add methods to our HTML elements to handle events as well.

In this case when a user **clicks** on Harry.

```vue [./component.vue] {10}
<template>
  <div>
    <h1 :style="{'color': 'red'}">Wizards</h1>
    <ul>
      <li>
        <b 
          :style="{
            'font-size': '100px'
          }" 
          @click="() => console.log('Magic')"
        >
         Harry
        </b>
      </li>
      <li><i>Ron</i></li>
      <li><strong>Hermione</strong></li>
      <li><u>Albus</u></li>
      <li><em>Severus</em></li>
      <li><pre>Minerva</pre></li>
    </ul>
  </div>
</template>
```

We've seen that Vue is fundamentally HTML.

### Directives

A **directive** is a mechanism for conditionally rendering HTML.

The simplest directive is :inline{value="v-if"} statement. It evaluates a JS statement and renders it if the expression evaluates to :inline{value="true"}.

```vue
<template>
  <div v-if="1 === 1">
    True
  </div>
</template>
```

Like conditionals in any language an **else** statement can be added.

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

As well as a  :inline{value="v-else-if"} for an infinite number of possibilities.

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

### Interpolation

We want to separate JS from HTML when possible.

This makes the code easier to understand.

Defined JS variables can be interpolated without our templates using mustache syntax.

```vue
<script setup>
  const wizard = 'Harry'
</script>

<template>
  <div>
    {{ wizard }}
  </div>
</template>
```

By using multiple variables we can create magical results.

```vue
<script setup>
  const wizard = 'Harry'
  const ability = ' is magical'
</script>

<template>
  <div>
    {{ wizard }} {{ ability }}
  </div>
</template>
```


### Binding

Binding HTML to JS ensures that the UI is always up to date with the state of the application.

```vue [./component.vue] {2, 4, 11, 14}
<script>
  let num = ref(0)
  setInterval(() => {
    num.value = num.value + 1
  }, 1000)
</script>

<template>
  <div 
    :class="{
      'text-green-400': (num % 2) == 0,
    }"
  >
    Color {{ num }}
  </div>
</template>
```

::card
#list
- Initialize vars with :inline{value="ref()"}. <br/>
  - :inline{value="const value = ref(0)"} <br/>
- In scripts vars require :inline{value=".value"}. <br/>
  - :inline{value="num.value = num.value + 1"} <br/>
- In templates vars do not require :inline{value=".value"}. <br/>
  - :inline{value="Color {{ num }}"} <br/>
  - :inline{value="'text-green-400': (num % 2) == 0,"} <br/>
::



It's more useful to bind values to a user event though

```vue
<script>
  let num = ref(0)
  setInterval(() => {
    num.value = num.value + 1
  }, 1000)
</script>

<template>
  <div 
    :class="{
      'text-green-400': (num % 2) == 0,
    }"
  >
    Color {{ num }}
  </div>
</template>
```

### Events

We can handle events by binding an handler using :inline{value="v-on"}. We use it with an event we're
listening for. For example :inline{value="v-on:click"}



hello [code]{style="color: green;" .after:content-none .before:content-none}

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

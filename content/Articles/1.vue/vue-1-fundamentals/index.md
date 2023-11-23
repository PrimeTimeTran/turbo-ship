---
createdAt: 2023-10-28
title: Fundamentals
description: Fundamentals
---


# Vue Fundamentals

Concepts you'll use on day one. :inline{value='hello world'}

## Components

Components are building blocks in Vue. 

We create them by combining HTML, JS, & CSS.

### Templates

A component **must** contain an opening & closing :inline{value="template"} tag. Template tags contain HTML.

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

Both standard & semantic HTML tags are available.

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

Standard HTML attributes such as style, class, autofocus all work.

```vue [./component.vue] {3, 6, 16}
<template>
  <div>
    <h1 style="color: red">Wizards</h1>
    <ul>
      <li>
        <b style="font-size: 100px">
         Harry
        </b>
      </li>
      <li><i>Ron</i></li>
      <li><strong>Hermione</strong></li>
      <li><u>Albus</u></li>
      <li><em>Severus</em></li>
      <li><pre>Minerva</pre></li>
    </ul>
    <input autofocus />
  </div>
</template>
```
<!-- 
::card
#info
  The ":" is shorthand for **binding**. More on this later.
::

Lastly we can add methods to our HTML elements to handle events as well.

In this case when a user **clicks** on Harry. -->

Underlining the importance of this, consider how adding the `type` attribute affects this input's behavior.

```vue [./component.vue] {16}
<template>
  <div>
    <h1 :style="{'color': 'red'}">Wizards</h1>
    <ul>
      <li>
        <b style="font-size: 100px">
         Harry
        </b>
      </li>
      <li><i>Ron</i></li>
      <li><strong>Hermione</strong></li>
      <li><u>Albus</u></li>
      <li><em>Severus</em></li>
      <li><pre>Minerva</pre></li>
    </ul>
    <input autofocus type="number" /> !!!!!
  </div>
</template>
```

### Directives

A **directive** is a mechanism for conditionally rendering HTML with JS.

A simple example is the :inline{value="v-if"} directive. 

It evaluates a JS statement and renders it if the expression evaluates to :inline{value='true'}.

```vue
<template>
  <div v-if="1 === 1">
    True
  </div>
</template>
```

Like conditionals in any language an :inline{value='else'} statement can be added. 

However it's a :inline{value='v-else'} in Vue.

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

A :inline{value='v-else-if'} produces an infinite number of possibilities.

```vue
<template>
  <div v-if="1 === 'one'">
    False
  </div>
  <div v-else-if="1 === 'One'">
    False
  </div>
  <div v-else-if="1 === '1'">
    False
  </div>
  <div v-else-if="1 === 'Uno'">
    False
  </div>
  <div v-else-if="1 === 'Alpha'">
    False
  </div>
  <div v-else-if="1 === 'Genesis'">
    False
  </div>
  <!-- ...how many more ways might we be wrong...? 🤔 -->
</template>
```

### Interpolation

You want to separate JS from HTML when possible.

Doing so makes your code easier to understand.

To do so define a :inline{value=script} which will hold your JS.

```vue
<script setup>
</script>

<template>
  <div>
  </div>
</template>
```

Now define the variables you want to use in your templates.

```vue
<script setup>
  const pronoun = 'Harry'
</script>

<template>
</template>
```

Now you can interpolate the vars into the template with mustache/handlebar syntax.

```vue
<script setup>
  const pronoun = 'Harry'
</script>

<template>
  <div>
    {{ pronoun }}
  </div>
</template>
```

You can create something magical by using multiples vars.

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
</script>

<template>
  <div>
    {{ pronoun }} {{ verb }} {{ adjective }}
  </div>
</template>
```

Combing lists & loops in a :inline{value=v-for} creates enchanting possibilities.

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
  const spells = ['HTML', 'JS', 'Vue']
</script>

<template>
  <div>
    {{ pronoun }} {{ verb }} {{ adjective }}
  </div>
  <ul>
    <li
      v-for="spell of spells"
    >
      <div>{{ spell }}</div>
    </li>
  </ul>
</template>
```

Especially if you combine new skills with previous abilities like the :inline{value=v-if} directive.

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
  const spells = ['HTML', 'JS', 'Vue']
</script>

<template>
  <div>
    {{ pronoun }} {{ verb }} {{ adjective }}
  </div>
  <ul>
    <li
      v-for="spell of spells"
    >
      <div v-if="spell === 'Vue'" style="color: green">{{ spell }}</div>
      <div v-else>{{ spell }}</div>
    </li>
  </ul>
</template>
```

Add a :inline{value=ternary} operator to simplify the your code a bit.

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
  const spells = ['HTML', 'JS', 'Vue']
</script>

<template>
  <div>
    {{ pronoun }} {{ verb }} {{ adjective }}
  </div>
  <ul>
    <li
      v-for="spell of spells"
    >
      <div :style="{color: spell === 'Vue' ? 'green' : 'black'}">{{ spell }}</div>
    </li>
  </ul>
</template>
```

We could have concatenated our vars earlier as well.

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
  const spells = ['HTML', 'JS', 'Vue']
</script>

<template>
  <div>
    {{ pronoun + verb +  adjective }}
  </div>
  <ul>
    <li
      v-for="spell of spells"
    >
      <div :style="{color: spell === 'Vue' ? 'green' : 'black'}">{{ spell }}</div>
    </li>
  </ul>
</template>
```

And lastly, we can define functions 

```vue
<script setup>
  const pronoun = 'Harry'
  const verb = ' is '
  const adjective = 'magical'
  const spells = ['HTML', 'JS', 'Vue']

  function hotSpell(spell) {
    return spell === 'Vue' ? 'green' : 'black'
  }
</script>

<template>
  <div>
    {{ pronoun + verb +  adjective }}
  </div>
  <ul>
    <li
      v-for="spell of spells"
    >
      <div :style="{color: hotSpell(spell)}">{{ spell }}</div>
    </li>
  </ul>
</template>
```

Combining HTML, JS, directives, handlebars & loops allows



### Binding

Data changes


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

Pay attention to the focused line. What's different about it?

```vue [component.vue]
<template>
  <div>
    <h1 style="color: green">Wizards</h1>
    <ul> 
      <li>
        <b 
          @click="() => console.log('Magic')" !!!!!
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

If you said it's JS **excellent**.

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
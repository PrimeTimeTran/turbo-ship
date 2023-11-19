---
createdAt: 2023-10-28
title: Vue Reactivity
description: Vue Reactivity
---




UseFetch deep dive


```js
const data = await useFetch()


```

How to fetch data with useFetch in Vue3 and maintain typing?

```js

onBeforeMount(async () => {
    const { data, error } = await useFetch(`http://localhost:3000/api/wizards`)
    const { data } = useFetch(url, { refetch: true })

    if (!error.value) {
      const val = data.value
      wizards = val
    } else {
      console.log({
        hello: 'so',
      })
    }
  })

```
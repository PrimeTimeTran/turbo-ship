<script>
import { faker } from '@faker-js/faker'
let num = faker.string.numeric()

const items = []

while (num > 0) {
  items.push({ id: faker.database.mongodbObjectId() })
  num = num - 1
}
</script>
<template>
  <h1>PrimeTimeNews</h1>
  <ul>
    <li v-for="item in [1, 2, 3, 4, 5]" :key="item">
      <h1>Hello World</h1>
    </li>
    <!-- <li v-for="item in items" :key="item.id">
      <h1>Hello World</h1>
    </li> -->
  </ul>
</template>

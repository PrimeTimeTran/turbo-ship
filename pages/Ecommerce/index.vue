<script setup>
import { faker } from '@faker-js/faker'

definePageMeta({
  layout: 'components-layout',
})

function createItem() {
  const price1 = faker.commerce.price(100, 5000, 0, '$')
  const price2 = faker.commerce.price(100, 5000, 0, '$')
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    category: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    countLikes: faker.number.int({ min: 10, max: 5000 }),
    countComments: faker.number.int({ min: 5, max: 200 }),
    imgUrl: faker.image.business(400, 720, true),
    price: price1,
    priceOriginal: price2,
  }
}

let items = []

function setupItems() {
  for (let i = 0; i < 21; i++) {
    items.push(createItem())
  }
}

setupItems()
</script>
<template>
  <section class="bg-base-100 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="w-full"></div>
        <h1 class="font-bold text-3xl mb-3">Frontpage</h1>
        <div class="w-full"></div>
        <BCard v-for="item of items.splice(0, 3)" :item="item" />
        <div class="w-full"></div>
        <h1 class="font-bold text-3xl mb-3">Just For You</h1>
        <div class="w-full"></div>
        <div class="flex flex-wrap -m-4 overflow-x-auto w-full">
          <BCard v-for="item of items" :item="item" :key="item.id" />
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>

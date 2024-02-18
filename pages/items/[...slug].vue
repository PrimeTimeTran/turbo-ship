<script setup>
import ItemComment from './ItemComment'
definePageMeta({
  layout: 'components-layout',
})
const route = useRoute()
let item = {}
if (process.browser) {
  onMounted(() => {
    item = JSON.parse(route.query.item)
    console.log({ item })
  })
}

let number1 = parseFloat(item?.price?.replace('$', '').replace(',', ''))
let number2 = parseFloat(item?.priceOriginal?.replace('$', '').replace(',', ''))

let priceOneBigger = number1 > number2
</script>
<template>
  <section class="bg-base-100 body-font p-24">
    <div class="container px-5 py-24 mx-auto bg-base-200 rounded flex flex-row">
      <div class="flex flex-2 flex-col">
        <h1 class="primary-content text-3xl">{{ item?.title }}</h1>
        <h1 v-if="priceOneBigger" class="primary-content text-3xl">{{ item.price }}</h1>
        <h1 v-if="!priceOneBigger" class="primary-content text-3xl">{{ item.price }}</h1>
        <h1 v-if="priceOneBigger" class="primary-content text-3xl text-red-400">{{ item.priceOriginal }}</h1>
        <h1 v-if="!priceOneBigger" class="primary-content text-3xl text-red-400">{{ item.priceOriginal }}</h1>
      </div>
      <div class="flex flex-1 justify-end align-end">
        <div class="bg-red-300 h-32 w-32"></div>
        <div class="bg-blue-300 h-32 w-32"></div>
        <div class="bg-yellow-300 h-32 w-32"></div>
      </div>
    </div>
    <div class="w-full my-24"></div>
    <div class="container px-5 py-24 mx-auto bg-base-200 rounded">
      <ItemComment />
      <ItemComment />
      <ItemComment />
      <ItemComment />
      <ItemComment />
    </div>
  </section>
</template>
<style></style>

<script setup>
useHead({
  script: [
    {
      defer: true,
      tagPosition: 'bodyClose',
      src: 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/countup@1.8.2/dist/countUp.min.js',
      tagPosition: 'head',
    },
    {
      src: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.js',
      tagPosition: 'head',
    },
  ],
})
definePageMeta({
  layout: 't-landing-layout',
})

const item = {}
let gogo = ref('')
onMounted(() => {
  try {
    setTimeout(() => {
      gogo.value = `{cardOpen:false,cardData:cardData()}`
    }, 2000)
  } catch (err) {}
})
</script>
<script>
window.addEventListener('DOMContentLoaded', function () {
  window.gogo = {
    cardOpen: false,
    cardData: {
      // Define your card data here
      // ...
    },
    initCardData() {
      const self = this
      this.$watch('cardOpen', function (value) {
        if (value) {
          self.cardData.countUp(self.$refs.total, 0, 11602, null, 0.8)
          self.cardData.sessions.forEach(function (el, i) {
            self.cardData.countUp(self.$refs[`device${i}`], 0, self.cardData.sessions[i].size, null, 1.6)
          })
        }
      })

      setTimeout(function () {
        self.cardOpen = true
      }, 100)
    },
  }
})
</script>
<template>
  <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div
      class="bg-gray-800 text-gray-500 rounded shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
      :x-data="gogo"
      x-init="$watch('cardOpen', value => value?(cardData.countUp($refs.total,0,11602,null,0.8),cardData.sessions.forEach((el,i) => cardData.countUp($refs[`device${i}`],0,cardData.sessions[i].size,null,1.6))):null);setTimeout(()=>{cardOpen=true},100)"
    >
      <div class="flex w-full">
        <h3 class="text-lg font-semibold leading-tight flex-1">TOTAL SESSIONS</h3>
        <div class="relative h-5 leading-none">
          <button
            class="text-xl text-gray-500 hover:text-gray-300 h-6 focus:outline-none"
            @click.prevent="cardOpen = !cardOpen"
          >
            <i class="mdi" :class="'mdi-chevron-' + (cardOpen ? 'up' : 'down')"></i>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden transition-all duration-500"
        x-ref="card"
        x-bind:style="`max-height:${cardOpen?$refs.card.scrollHeight:0}px; opacity:${cardOpen?1:0}`"
      >
        <div>
          <div class="pb-4 lg:pb-6">
            <h4 class="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block" x-ref="total">0</h4>
          </div>
          <div class="pb-4 lg:pb-6">
            <div
              class="overflow-hidden rounded-full h-3 bg-gray-800 flex transition-all duration-500"
              :class="cardOpen ? 'w-full' : 'w-0'"
            >
              <template x-for="(item,index) in cardData.sessions">
                <div class="h-full" :class="`bg-${item.color}`" :style="`width:${item.size}%`"></div>
              </template>
            </div>
          </div>
          <div class="flex -mx-4">
            <template x-for="(item,index) in cardData.sessions">
              <div class="w-1/3 px-4" :class="{ 'border-l border-gray-700': index !== 0 }">
                <div class="text-sm">
                  <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle" :class="`bg-${item.color}`"
                    >&nbsp;</span
                  >
                  <span class="align-middle" x-text="item.label">&nbsp;</span>
                </div>
                <div class="font-medium text-lg text-white"><span :x-ref="`device${index}`">0</span>%</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-1/3">
      <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300"></div>
        <div class="px-6 py-4">
          <div class="h-6 bg-gray-300 mb-2"></div>
          <div class="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
          <div class="h-4 bg-gray-300 w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
</style>

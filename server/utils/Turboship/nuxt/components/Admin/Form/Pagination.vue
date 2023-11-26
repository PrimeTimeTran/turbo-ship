<script setup>
const props = defineProps(['meta'])
const common = computed(() => `bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700`)
const first = computed(() => {
  return `${common} ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
})
const last = computed(() => {
  return `${common} rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
})
const others = computed(
  () =>
    `${common} leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
)
const current = computed(
  () =>
    `bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700 py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white`,
)
</script>
<template>
  <div class="flex justify-center relative -bottom-3 left-1 right-1">
    <ul class="inline-flex -space-x-px">
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="first">
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </a>
      </li>
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="others">
          1
        </a>
      </li>
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="others">
          2
        </a>
      </li>
      <li>
        <a aria-current="page" :class="current"> 3 </a>
      </li>
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="others">
          4
        </a>
      </li>
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="others">
          5
        </a>
      </li>
      <li>
        <a class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700" :class="last">
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </a>
      </li>
    </ul>
  </div>
</template>

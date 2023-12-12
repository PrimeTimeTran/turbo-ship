<script setup>
import _ from 'lodash'
const props = defineProps(['items', 'attribute', 'item'])

const truncatedList = computed(() => {
  return _.sample(props.items)
})
</script>

<template>
  <div class="dropdown dropdown-hover">
    <div
      class="m-1 line-clamp-2 w-64 max-w-64 truncate whitespace-normal"
      v-text="`${attribute.name} (${item[attribute.name].length})`"
    />
    <div
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box overflow-y-auto w-64 h-96 max-h-96 overflow-auto scrollbar-hide"
    >
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box">
        <li v-for="item of props.items">
          <a>{{ item._id }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

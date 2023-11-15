<script setup>
const props = defineProps(['entities'])
const entities = ref(props.entities)
const closed = ref(false)

const onCollapse = () => {
  const newValue = !closed.value
  entities.value.map((e) => {
    e.editing = newValue
    e.showAttributes = newValue
    e.showAddAttribute = newValue
  })
  closed.value = !closed.value
}
</script>
<template>
  <div class="sticky top-0 shadow p-2 bg-white z-10">
    <div class="flex justify-between p-1">
      <div class="text-2xl">Entities</div>
      <div class="flex justify-center p-1">
        <span>Total: ({{ entities.length }})</span>
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <div
        class="mr-3"
        v-for="e of entities"
      >
        <a :href="'/models#' + e.name">
          {{ e.name }}
        </a>
      </div>
    </div>
    <div
      class="flex flex-row text-center justify-end border-t-2 border-t-gray-50 space-x-2"
    >
      <div @click="onCollapse">
        <font-awesome-icon icon="fa-solid fa-square-minus"></font-awesome-icon>
      </div>
    </div>
  </div>
  <br />
</template>

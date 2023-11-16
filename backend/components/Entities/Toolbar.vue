<script setup>
const emit = defineEmits(['toggleSortView'])
const { entities } = useEntities()
const closed = ref(false)

const onCollapse = () => {
  const newValue = !closed.value
  entities.value.map((e) => {
    e.editing = newValue
    e.showAttributes = newValue
    e.showAttributeForm = newValue
  })
  closed.value = !closed.value
}
</script>
<template>
  <div class="sticky top-0 shadow p-2 bg-white z-10">
    <div class="flex justify-between p-1">
      <div class="text-2xl">
        Entities
        <span
          v-text="`(${entities.length})`"
          class="text-gray-400"
        />
      </div>
      <div class="flex justify-center p-1">
        <span>Total: ({{ entities.length }})</span>
      </div>
    </div>
    <div class="flex flex-row justify-end flex-wrap">
      <div
        class="mr-3"
        v-for="e of entities"
      >
        <a :href="'/entities#' + e.name">
          {{ e.name }}
        </a>
      </div>
    </div>
    <div
      class="flex flex-row text-center justify-end border-t-2 border-t-gray-50 space-x-2"
    >
      <div @click="$emit('toggleSortView')">
        <font-awesome-icon icon="fa-solid fa-sort"></font-awesome-icon>
      </div>
      <div @click="onCollapse">
        <font-awesome-icon icon="fa-solid fa-square-minus"></font-awesome-icon>
      </div>
    </div>
  </div>
  <br />
</template>

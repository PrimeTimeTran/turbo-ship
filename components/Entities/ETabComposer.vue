<script setup>
import draggable from 'vuedraggable'
const props = defineProps('entities')
</script>
<template>
  <div>
    <draggable
      tag="section"
      :list="entities"
      class="list-group"
    >
      <template #item="{ element, index }">
        <EntitiesEntity
          :tabindex="index + 1"
          :entity="element"
          :key="element._id"
          class="opacity-[.7] hover:opacity-90"
        />
      </template>
    </draggable>
  </div>
</template>

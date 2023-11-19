<script setup>
import draggable from 'vuedraggable'
const { entities } = useEntities()
</script>

<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
    <EntitiesLeftSidebar />
    <div
      class="col-span-9 lg:col-span-7 overflow-auto scrollbar-hide flex flex-col"
    >
      <EntitiesTheToolbar :entities="entities" />
      <EntitiesTheSorter :entities="entities" />
      <div v-if="store.view == 'composer'">
        <draggable
          tag="section"
          :list="entities"
          class="list-group"
        >
          <template #item="{ element: entity }">
            <EntitiesEntity
              :entity="entity"
              :key="entity._id"
              class="opacity-[.7] hover:opacity-90"
            />
          </template>
        </draggable>
      </div>
      <div v-else-if="store.view == 'relationships'">
        <h1 class="text-red-300 text-lg 2">Relationships</h1>
      </div>
    </div>
    <EntitiesRightSidebar
      :entities="entities"
      v-if="store.stateViewer"
    />
  </div>
</template>

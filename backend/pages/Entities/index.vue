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
      <div v-if="store.view == 'Relationships'">
        <h1 class="text-red-300 text-lg 2">Relationships</h1>
      </div>

      <div
        v-else-if="store.view == 'Entities'"
        class="opacity-[.7] hover:opacity-90"
      >
        <EntitiesEntity
          :key="entity._id"
          :entity="entity"
          v-for="entity of entities"
        />
      </div>
      <div
        v-else-if="store.view == 'Sorter'"
        class="opacity-[.7] hover:opacity-90"
      >
        <draggable
          tag="ul"
          :list="entities"
          class="list-group"
        >
          <template #item="{ element: entity }">
            <li
              :key="entity._id"
              class="w-full bg-red-300 my-2 rounded px-3 py-1 font-md"
            >
              {{ entity.name }}
            </li>
          </template>
        </draggable>
      </div>
    </div>
    <EntitiesRightSidebar
      v-if="store.stateViewer"
      :entities="entities"
    />
  </div>
</template>

l

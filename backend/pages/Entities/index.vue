<script setup>
import draggable from 'vuedraggable'
const { entities } = useEntities()
const sorterView = ref(false)
const toggleSortView = () => {
  sorterView.value = !sorterView.value
}
</script>

<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
    <EntitiesTheLeftSidebar @onAdd="onAdd" />
    <div class="col-span-9 lg:col-span-6 overflow-auto scrollbar-hide">
      <EntitiesTheToolbar
        :entities="entities"
        @toggleSortView="toggleSortView"
      />
      <div
        v-if="sorterView"
        class="opacity-[.7] hover:opacity-90 bg-slate-50 odd:bg-zinc-50"
      >
        <draggable
          v-model="entities"
          class="list-group"
          tag="ul"
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
        <pre>
          {{ entities.map((e) => e.name) }}
        </pre>
      </div>
      <div v-else>
        <div
          v-for="(entity, idx) of entities"
          class="opacity-[.7] hover:opacity-90 bg-slate-50 odd:bg-zinc-50"
        >
          <EntitiesEntity
            :idx="idx +1"
            :entity="entity"
          />
        </div>
      </div>
    </div>
    <EntitiesTheRightSidebar :entities="entities" />
  </div>
</template>

l

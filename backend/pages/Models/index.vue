<script setup>
import draggable from 'vuedraggable'
const entities = ref([...original])

const reset = () => {
  entities.value = [...original]
}

const onAdd = (entity) => {
  entities.value.push({
    ...entity,
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
  })
}

// watch(entities, (newEntities) => {
//   console.log('Watching')
//   entities.value.reverse()
// })

const sorterView = ref(false)
const toggleSortView = () => {
  sorterView.value = !sorterView.value
}
</script>
<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
    <ModelsSidebar
      @onAdd="onAdd"
      @reset="reset"
    />
    <div class="col-span-9 lg:col-span-6 overflow-auto scrollbar-hide">
      <ModelsToolbar
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
          v-for="entity of entities"
          class="opacity-[.7] hover:opacity-90 bg-slate-50 odd:bg-zinc-50"
        >
          <ModelsEntity
            :entity="entity"
            :entities="entities"
          />
        </div>
      </div>
    </div>
    <ModelsTheRight :entities="entities" />
  </div>
</template>

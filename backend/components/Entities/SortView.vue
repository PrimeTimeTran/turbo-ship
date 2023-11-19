<script setup>
import draggable from 'vuedraggable'
const props = defineProps(['entities'])
</script>
<template>
  <div
    v-if="store.view === 'sorter'"
    class="opacity-[.7] hover:opacity-90"
  >
    <draggable
      tag="section"
      :list="entities"
      class="list-group"
    >
      <template #item="{ element: entity }">
        <section
          :key="entity._id"
          class="w-full my-2 mx-5 p-5 rounded bg-red-200 font-md"
        >
          {{ entity.name }}
          <draggable
            tag="ul"
            :list="entity.attributes"
            class="list-group"
          >
            <template #item="{ element: attribute }">
              <li
                :key="attribute._id"
                class="rounded m-2 p-2 bg-green-200"
              >
                <span v-text="attribute.name" />
              </li>
            </template>
          </draggable>
        </section>
      </template>
    </draggable>
  </div>
</template>

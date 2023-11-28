<script setup>
import draggable from 'vuedraggable'
const { entities } = useEntities()
</script>
<template>
  <div class="overflow-auto scrollbar-hide h-screen">
    <div class="flex flex-col" id="TheToolBar">
      <div class="flex text-center rounded-md">
        <div class="flex flex-row justify-between flex-wrap">
          <div class="text-md text-slate-500 mr-auto ml-2">
            Entities
            <span v-text="`(${entities.length})`" class="text-gray-400 text-sm" />
          </div>
          <div :key="e._id" class="mr-1" v-for="(e, idx) of entities">
            <a
              tabindex="-1"
              :href="`/entities#${e.name}-${e._id}`"
              v-text="idx + 1 + `. ${e.name} (${e.attributes.length})`"
              class="text-sm dark:hover:opacity-80 rounded py-1 px-2 dark:text-white/60 dark:hover:text-white"
            ></a>
          </div>
        </div>
      </div>
      <div>
        <EntitiesETabSorter :entities="entities" />
        <!-- When refactored this guy stops rendering -->
        <div v-if="store.view == views.entities">
          <draggable tag="section" :list="entities" class="list-group" item-key="_id">
            <template #item="{ element, index }">
              <EntitiesEntity
                :entity="element"
                :key="element._id"
                :tabindex="index + 1"
                class="dark:even:bg-slate-950 dark:odd:bg-zinc-950 even:bg-slate-100 odd:bg-zinc-100"
              />
            </template>
          </draggable>
        </div>
        <div v-if="store.view == views.relationships">
          <EntitiesRelationshipsCanvas />
        </div>
        <EntitiesETabFeedback v-if="store.view == views.feedback" />
        <EntitiesETabHelp v-if="store.view == views.help" />
      </div>
    </div>
  </div>
</template>

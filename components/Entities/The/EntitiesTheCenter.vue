<script setup>
import draggable from 'vuedraggable'
const { entities } = useEntities()
</script>
<template>
  <div class="flex overflow-auto scrollbar-hide h-screen pt-8 w-full">
    <div class="flex flex-1 flex-col" id="TheToolBar">
      <!-- <div class="flex text-center rounded-md">
        <div class="flex flex-row justify-between flex-wrap">
          <div class="text-md text-slate-500 mr-auto ml-2">
            <span v-text="`Entities (${entities.length})`" class="text-gray-400 text-sm" />
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
      </div> -->
      <div>
        <EntitiesTabSorter :entities="entities" />
        <!-- When refactored this guy stops rendering -->
        <div v-if="store.view == views.entities">
          <draggable tag="section" :list="entities" class="list-group" item-key="_id">
            <template #item="{ element, index }">
              <EntitiesEntity :entity="element" :key="element._id" :entityIdx="index + 1" :tabindex="index + 1" />
            </template>
          </draggable>
        </div>
        <EntitiesEntityRelationshipsCanvas v-if="store.view == views.relationships" />
        <EntitiesTabFeedback v-if="store.view == views.feedback" />
        <EntitiesTabHelp v-if="store.view == views.help" />
      </div>
    </div>
    <EntitiesCheckout />
  </div>
</template>

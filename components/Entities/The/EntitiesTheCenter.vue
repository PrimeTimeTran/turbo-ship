<script setup>
import draggable from 'vuedraggable'
const { entities } = useEntities()
</script>
<template>
  <div class="flex overflow-auto scrollbar-hide h-screen pt-8 w-full">
    <div class="flex flex-1 flex-col" id="TheToolBar">
      <div>
        <EntitiesTabSorter :entities />
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

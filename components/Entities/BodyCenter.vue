<script setup>
import draggable from 'vuedraggable'
const props = defineProps(['entities'])
</script>
<template>
  <EntitiesTheToolbar :entities="entities" />
  <EntitiesETabSorter :entities="entities" />
  <!-- When refactored this guy stops rendering -->
  <div v-if="store.view == 'composer'">
    <draggable
      tag="section"
      :list="entities"
      class="list-group"
    >
      <template #item="{ element, index }">
        <EntitiesEntity
          :entity="element"
          :key="element._id"
          :tabindex="index + 1"
          class="opacity-[.7] hover:opacity-90"
        />
      </template>
    </draggable>
  </div>
  <!-- <EntitiesETabComposer
        v-if="store.view == 'composer'"
        :entities="entities"
      ></EntitiesETabComposer> -->
  <div v-if="store.view == 'relationships'">
    <h1 class="text-red-300 text-lg 2">Relationships</h1>
  </div>
  <EntitiesETabFeedback v-if="store.view == 'feedback'" />
  <EntitiesETabHelp v-if="store.view == 'help'" />
</template>

<script setup>
import { faker } from '@faker-js/faker'

const entities = ref([...original])

const reset = () => {
  entities.value = [...original]
}

const onAdd = (val) => {
  if (val === '') return
  const _id = faker.database.mongodbObjectId()
  entities.value.push({
    _id,
    name: val,
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: faker.database.mongodbObjectId(),
      },
    ],
  })
}

const onSidebarAdd = (entity) => {
  entities.value.push({
    ...entity,
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
  })
}
</script>
<template>
  <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
    <ModelsSidebar
      @onAdd="onSidebarAdd"
      @reset="reset"
    />
    <div class="col-span-6 overflow-auto scrollbar-hide">
      <ModelsToolbar :entities="entities" />
      <div
        v-for="entity of entities"
        class="opacity-[.7] hover:opacity-90 bg-slate-50 odd:bg-zinc-50"
      >
        <section
          :id="entity.name"
          class="mb-1 rounded border-2 border-slate-200 border-opacity-30 hover:border-opacity-100 p-2 mt-2 shadow"
          :class="{
            'bg-opacity-100': entity.showAddAttribute || entity.showAttributes,
          }"
        >
          <ModelsEntityComposer
            :entity="entity"
            :entities="entities"
          />
          <ModelsEntityAttributesList
            :key="entity._id"
            :entity="entity"
            :entities="entities"
          />
        </section>
      </div>
    </div>
    <ModelsTheRight :entities="entities" />
  </div>
</template>

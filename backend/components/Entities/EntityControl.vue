<script setup>
const props = defineProps(['entity', 'idx'])
const { removeEntity } = useEntities()
const entityName = ref('entityName')

const onEntityNameSave = (val) => {
  if (val === '') return
  const e = props.entity
  e.name = val
  entityName.value = ''
}

const onToggleEntityAdd = () => {
  const e = props.entity
  e.showAttributeForm = !e.showAttributeForm
}

const toggleShow = () => {
  const e = props.entity
  e.showAttributes = !e.showAttributes
}
</script>
<template>
  <div>
    <div class="flex justify-between">
      <div
        class="flex flex-row flex-grow align-middle items-center text-center"
      >
        {{ idx }}
        <div class="flex flex-grow ml-2 py-0 text-md rounded bg-white">
          <input
            :id="entity._id"
            v-model="entity.name"
            placeholder="customer, transaction, statement..."
            class="flex flex-grow py-1 px-2 text-md rounded-md border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
            @keyup.enter="onEntityNameSave(entity.name)"
          />
        </div>
        <div
          role="group"
          class="align-middle items-center text-center ml-6 rounded-md"
        >
          <button
            type="button"
            @click="() => removeEntity(entity._id)"
            class="rounded-l-lg border px-4 py-2 hover:bg-gray-100"
          >
            <font-awesome-icon
              color="red"
              icon="fa-solid fa-circle-xmark"
            />
          </button>
          <button
            type="button"
            @click="toggleShow"
            class="border-t border-b px-4 py-2 hover:bg-gray-100"
          >
            <font-awesome-icon
              v-if="entity.showAttributes"
              icon="fa-solid fa-eye-slash"
              class="text-gray-400"
            />
            <font-awesome-icon
              v-else
              icon="fa-solid fa-eye"
              class="text-gray-400"
            />
          </button>
          <button
            type="button"
            @click="onToggleEntityAdd"
            class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
          >
            <font-awesome-icon
              v-if="entity.showAttributeForm"
              icon="fa-solid fa-rectangle-xmark"
              class="text-gray-400 dark:text-white"
            />
            <font-awesome-icon
              v-else
              icon="fa-solid fa-plus"
              class="text-gray-400 dark:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

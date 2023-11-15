<script setup>
const props = defineProps(['entity', 'entities'])
const entityName = ref('entityName')
const showAttributes = ref(false)

const saved = ref(false)

const entities = ref(props.entities)
const onEntityNameSave = (val, id) => {
  if (val === '') return
  const idx = entities.value.findIndex((e) => e._id == id)
  const e = entities.value[idx]
  e.name = val
  onToggleEntityName(id)
  entityName.value = ''
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 2000)
}

const getEntity = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  return entities.value[idx]
}
const onToggleEntityAdd = (id) => {
  const e = getEntity(id)
  e.showAddAttribute = !e.showAddAttribute
}
const onToggleEntityAttributesShow = (id) => {
  const e = getEntity(id)
  e.showAttributes = !e.showAttributes
  showAttributes.value = !showAttributes.value
}
const onToggleEntityName = (id) => {
  const e = getEntity(id)
  e.editing = !e.editing
  setTimeout(() => {
    document.getElementById(e._id).focus()
  }, 100)
}
</script>
<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex flex-row flex-grow items-center text-center">
        <div
          v-if="entity.editing"
          class="flex flex-grow ml-2 py-0 text-lg rounded bg-white"
          :class="{
            'border-0': entity.editing,
            'hover:border-opacity-100': !entity.editing,
            'bg-blue-100': entity.editing,
          }"
        >
          <input
            :id="entity._id"
            v-model="entity.name"
            placeholder="customer, transaction, statement..."
            class="flex flex-grow py-2 px-2 text-lg rounded border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
            @keyup.enter="onEntityNameSave(entity.name, entity._id)"
            :class="{
              'hover:border-opacity-100': !entity.editing,
              'border-green-700': saved,
              'text-green-500': saved,
            }"
          />
        </div>
        <div
          v-else
          @click="onToggleEntityName(entity._id)"
          class="flex flex-grow ml-2 py-0 text-lg rounded bg-white"
          :class="{
            'hover:border-opacity-100': !entity.editing,
          }"
        >
          <input
            placeholder="customer, transaction, statement..."
            :value="entity.name"
            class="flex flex-grow px-2 py-2 text-lg rounded border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
            :class="{
              'border-green-700': saved,
              'text-green-500': saved,
            }"
          />
        </div>
        <div class="text-green ml-3">
          <font-awesome-icon
            v-if="saved"
            icon="fa-solid fa-check"
            color="green"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-row justify-end">
        <button
          type="button"
          class="px-2 rounded border-slate-200 hover:text-blue-600"
          @click="onToggleEntityAdd(entity._id)"
        >
          <font-awesome-icon
            v-if="entity.showAddAttribute"
            icon="fa-solid fa-rectangle-xmark"
            class="text-gray-400 dark:text-white mr-2"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-pen-to-square"
            class="text-gray-400 dark:text-white mr-2"
          />
          {{ entity.showAddAttribute ? 'Close' : 'Create Attribute' }}
        </button>
      </div>
    </div>
  </div>
</template>

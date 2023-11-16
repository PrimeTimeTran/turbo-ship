<script setup>
const props = defineProps(['entity', 'idx'])
const { removeEntity } = useEntities()
const entityName = ref('entityName')

const saved = ref(false)

const onEntityNameSave = (val, id) => {
  if (val === '') return
  const e = props.entity
  e.name = val
  toggleName(id)
  entityName.value = ''
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 2000)
}

const onToggleEntityAdd = () => {
  const e = props.entity
  e.showAttributeForm = !e.showAttributeForm
}

const toggleName = () => {
  const e = props.entity
  e.editing = !e.editing
  setTimeout(() => {
    document.getElementById(e._id).focus()
  }, 100)
}

const toggleShow = () => {
  const e = props.entity
  e.showAttributes = !e.showAttributes
}
</script>
<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex flex-row flex-grow items-center text-center">
        {{ idx }}
        <div
          v-if="entity.editing"
          class="flex flex-grow ml-2 py-0 text-md rounded bg-white"
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
            class="flex flex-grow py-2 px-2 text-md rounded border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
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
          @click="toggleName(entity._id)"
          class="flex flex-grow ml-2 py-0 text-md rounded bg-white"
          :class="{
            'hover:border-opacity-100': !entity.editing,
          }"
        >
          <input
            placeholder="customer, transaction, statement..."
            :value="entity.name"
            class="flex flex-grow px-2 py-2 text-md rounded border-2 border-slate-200 bg-white font-bold text-blue-500 dark:text-blue-500 hover:bg-slate-100"
            :class="{
              'border-green-700': saved,
              'text-green-500': saved,
            }"
          />
        </div>
        <div class="text-green ml-3">
          <font-awesome-icon
            v-if="saved"
            icon="fa-solid fa-check "
            color="green"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-row justify-between">
        <div
          class="text-green ml-3 pl-2 cursor-pointer"
          @click="() => removeEntity(entity._id)"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-xmark"
            color="red"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="px-2 rounded border-slate-200 hover:text-blue-600"
            @click="toggleShow()"
          >
            <font-awesome-icon
              v-if="entity.showAttributes"
              icon="fa-solid fa-eye-slash"
              class="text-gray-400 mr-2"
            />
            <font-awesome-icon
              v-else
              icon="fa-solid fa-eye"
              class="text-gray-400 mr-2"
            />
          </button>
        </div>
        <button
          type="button"
          class="px-2 rounded border-slate-200 hover:text-blue-600"
          @click="onToggleEntityAdd"
        >
          <font-awesome-icon
            v-if="entity.showAttributeForm"
            icon="fa-solid fa-rectangle-xmark"
            class="text-gray-400 dark:text-white mr-2"
          />
          <font-awesome-icon
            v-else
            icon="fa-solid fa-plus"
            class="text-gray-400 dark:text-white mr-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

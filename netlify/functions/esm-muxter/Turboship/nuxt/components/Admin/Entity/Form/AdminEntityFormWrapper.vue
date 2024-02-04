<script setup>
const props = defineProps(['entity', 'entityType', 'fetchWithFilterFields'])
const items = ref([])

items.value = TFormHelper.setupFormFields(props.entity, props.entityType)
function toggleModal(id) {
  const modal = document.getElementById(`modal-${id}`)
  if (modal) {
    modal.showModal()
  }
}
</script>
<template>
  <button class="btn btn-xs btn-ghost flex justify-start" @click="toggleModal(entity._id)">
    <FontAwesomeIcon class="mr-2 text-black dark:text-white" color="white" icon="fa-solid fa-pen-to-square" />
    Edit
  </button>
  <dialog :id="`modal-${entity._id}`" class="modal">
    <div class="modal-box w-11/12 max-w-7xl bg-base-100">
      <form method="dialog">
        <button @click="toggleModal(entity._id)" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <AdminEntityForm :entity="entity" :entityType="entityType" :fetchWithFilterFields="fetchWithFilterFields" />
      <form method="dialog" class="modal-backdrop">
        <button @click="toggleModal(entity._id)">close</button>
      </form>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

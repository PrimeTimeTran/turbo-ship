<script>
export default {
  data() {
    return {
      entityName: '',
    }
  },
  methods: {
    handleEnterKey() {
      this.$emit('onAdd', this.entityName)
      this.entityName = ''
    },
  },
}
</script>
<template>
  <div class="col-span-2 border-r-2 p-2">
    <div class="flex flex-col flex-grow">
      <h1 class="text-2xl">Create Entity</h1>
      <input
        autofocus
        v-model="entityName"
        @keyup.enter="handleEnterKey"
        placeholder="bank, account, customer, transaction..."
        class="border-2 border-gray-100 text-black p-1 text-sm"
      />
      <div class="flex flex-row mt-2 justify-between">
        <button
          type="button"
          @click="handleEnterKey"
          class="flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg mr-2"
        >
          Add Entity
        </button>
        <button
          type="button"
          @click="$emit('reset')"
          class="flex flex-grow justify-center border-2 rounded border-gray-300 px-3 py-1 text-lg"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

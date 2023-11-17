<script setup>
import { useClipboard } from '@vueuse/core'

const { entities } = useEntities()

const source = ref('')
const { text, copy, copied } = useClipboard({ source })

const copyer = (values) => {
  copy(JSON.stringify(values))
  setTimeout(() => {
    text.value = 'Done'
  }, 1500)
}

const sparse = ref(false)
</script>
<template>
  <div
    class="hidden invisible lg:visible lg:flex lg:flex-col lg:justify-start lg:items-start lg:col-span-3 overflow-auto scrollbar-hide border-l-2"
  >
    <div
      role="group"
      class="align-middle items-center text-center ml-6 rounded-md"
    >
      <button
        type="button"
        @click="
          () => {
            sparse = !sparse
          }
        "
        class="rounded-l-lg border px-4 py-2 hover:bg-gray-100"
      >
        <span
          class="mr-2"
          v-text="sparse ? 'Full' : 'Dense'"
        />
        <font-awesome-icon
          color="grey"
          icon="fa-solid fa-sort"
        ></font-awesome-icon>
      </button>
      <button
        v-if="sparse"
        type="button"
        class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
        @click="copyer(sparseEntities(entities))"
      >
        <span v-if="!copied">Copy</span>
        <span v-else>Copied!</span>
        <font-awesome-icon
          color="grey"
          class="ml-2"
          icon="fa-solid fa-clipboard"
        />
      </button>
      <button
        v-else
        type="button"
        class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
        @click="copyer(entities)"
      >
        <span v-if="!copied">Copy</span>
        <span v-else>Copied!</span>
        <font-awesome-icon
          class="ml-2"
          color="grey"
          icon="fa-solid fa-clipboard"
        />
      </button>
    </div>
    <pre v-if="sparse">{{ sparseEntities(entities) }}</pre>

    <pre v-else>{{ entities }}</pre>
  </div>
</template>

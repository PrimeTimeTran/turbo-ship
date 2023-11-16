<script setup>
import { useClipboard } from '@vueuse/core'

const props = defineProps(['entities'])

const entities = ref(props.entities)

const source = ref('Hello')
const { text, copy, copied } = useClipboard({ source })

const copyer = () => {
  copy(JSON.stringify(entities.value))
  setTimeout(() => {
    text.value = 'Done'
  }, 1500)
}
</script>
<template>
  <div
    class="hidden invisible lg:visible lg:flex lg:flex-col lg:justify-start lg:items-start lg:col-span-3 overflow-auto scrollbar-hide border-l-2"
  >
    <button @click="copyer()">
      <font-awesome-icon
        color="grey"
        icon="fa-solid fa-clipboard"
      />
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
    <pre>{{ entities }}</pre>
  </div>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'

const props = defineProps(['entities'])

const entities = ref(props.entities)

const source = ref('Hello')
const { text, copy, copied } = useClipboard({ source })

const copyer = () => {
  copy(JSON.stringify(entities))
  setTimeout(() => {
    text.value = 'Done'
  }, 1500)
}
</script>
<template>
  <div class="col-span-4 overflow-auto scrollbar-hide border-l-2">
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

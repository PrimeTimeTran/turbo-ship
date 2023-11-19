<script setup lang="ts">
// Info: This must be placed inside of ./components/content to work.
// To replace the component it's overwriting
// https://content.nuxt.com/components/prose

import { useClipboard } from '@vueuse/core'

type Color = 'red' | 'blue' | 'green'
const { copy, copied } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] }
)

const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  javascript: {
    text: 'javascript',
    color: 'black',
    background: '#f7df1e',
  },
  js: {
    text: 'js',
    color: 'black',
    background: '#f7df1e',
  },
  dart: {
    text: 'dart',
    color: 'white',
    background: '#0075BA',
  },
}

const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
)

const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : null
)
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : null
)
</script>

<template>
  <div class="container pt-1 rounded-xl">
    <div
      class="flex justify-center items-center border-b-2 border-gray-600 px-1 py-0"
    >
      <div class="ml-2 text-gray-500">
        {{ filename }}
      </div>
      <span
        class="p-1 py-0 ml-auto rounded"
        :style="{ background: languageBackground || '', color: languageColor as Color | undefined }"
      >
        {{ languageText }}
      </span>
      <div
        @click="copy(code)"
        :class="[
          'ml-1',
          'p-3',
          'py-0',
          'border',
          'rounded',
          'hover:opacity-50',
          copied ? 'border-green-300' : 'border-white-300',
        ]"
      >
        <button>
          <font-awesome-icon
            v-if="copied"
            :style="{
              color: '#64ffda',
            }"
            icon="fa-solid fa-check"
          />
          <font-awesome-icon
            v-else
            color="white"
            icon="fa-solid fa-copy"
          />
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background: #1f2937;
}

:slotted(pre) {
  flex: 1 1 0%;
  display: flex;
  overflow-x: auto;
  margin-top: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 0px;
  line-height: 1.625;
  counter-reset: lines;
}

:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}

:slotted(pre code .line::before) {
  width: 1rem;
  text-align: left;
  margin-right: 1.5rem;
  display: inline-block;
  content: counter(lines);
  counter-increment: lines;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
  display: block;
  margin-left: -1em;
  margin-right: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  background-color: #363b46;
  /* Vue COLOR */
  border-left: 0.25em solid #41b883;
}
</style>

<script setup lang="ts">
// Info: This must be placed inside of ./components/content to work.
// To replace the component it's overwriting
// https://content.nuxt.com/components/prose
import { useClipboard } from '@vueuse/core'
interface Props {
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: Array<number>
}

const props = withDefaults(defineProps<Props>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
})

type Color = 'red' | 'blue' | 'green'
const { copy, copied } = useClipboard()

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

const html = ref('')
const shiki = useShikiHighlighter()
const removeCodeBlockIdentifiers = (code: string) => {
  return code
    .replace(codeBlockIdentifiers.FOCUS, '')
    .replace(codeBlockIdentifiers.DIFF_ADD, '')
    .replace(codeBlockIdentifiers.DIFF_REMOVE, '')
}

const codeBlockIdentifiers = {
  FOCUS: '// [!code  focus]',
  DIFF_ADD: '// [!code  ++]',
  DIFF_REMOVE: '// [!code  --]',
} as const

watch(
  shiki.highlighter,
  (newHighlighter) => {
    if (!newHighlighter || !props.code) {
      return
    }
    const tokens = newHighlighter.codeToThemedTokens(props.code.trim(), props.language ?? undefined)
    html.value = shiki.renderToHtml(tokens, {
      fg: newHighlighter.getForegroundColor('dark-plus'),
      bg: newHighlighter.getBackgroundColor('dark-plus'),
      elements: {
        pre({ className, style, children }: any) {
          const shallFocus = props.code.includes(codeBlockIdentifiers.FOCUS)
          const hasDiff =
            props.code.includes(codeBlockIdentifiers.DIFF_ADD) || props.code.includes(codeBlockIdentifiers.DIFF_REMOVE)
          return `<pre tabindex="1" class="${className} bg-[#1e1e1e] ${shallFocus ? 'has-focused-lines' : ''} ${hasDiff ? 'has-diff' : ''} mt-0" style="${style}">${children}</pre>`
        },
        code({ children, className, style }) {
          return `<code class="${className}" style="${style}">${children}</code>`
        },
        line({ className, index, children }: any) {
          const shallHighlight = props.highlights?.includes(index + 1) ?? false
          const shallFocus = children.includes(codeBlockIdentifiers.FOCUS)
          const shallDiffRemove = children.includes(codeBlockIdentifiers.DIFF_REMOVE)
          const shallDiffAdd = children.includes(codeBlockIdentifiers.DIFF_ADD)
          const modifiedChildren = removeCodeBlockIdentifiers(children)
          let beforeElement = '<div class="ml-4"></div>'
          if (shallDiffAdd) {
            beforeElement = `<div class="ml-4 mr-6 text-[#738a9466]">${index + 1} <span class="text-[#10b981]">+</span></div>`
          } else if (shallDiffRemove) {
            beforeElement = `<div class="ml-4 mr-6 text-[#738a9466]">${index + 1} <span class="text-[#f43f5e]">-</span></div>`
          } else {
            beforeElement = `<div class="ml-4 mr-6 text-[#738a9466]">${index + 1}</div>`
          }
          return `<div class="${className+'-go'} ${shallHighlight ? 'bg-[#363b46]' : ''} ${shallFocus ? 'has-focus' : ''} ${shallDiffRemove ? 'diff remove' : ''}${shallDiffAdd ? 'diff add' : ''} w-full inline-flex">${beforeElement}<div>${modifiedChildren}</div></div>`
        },
      },
    })
  },
  { immediate: true }

)
</script>
<template>
  <!-- <div class="mb-8 mt-4 rounded-md bg-[#1e1e1e]">
    <div v-if="html" v-html="html"></div>
    <span v-else>{{ code }}</span>
  </div> -->
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
    <div v-if="html" v-html="html"></div>
    <span v-else>{{ code }}</span>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background: #1e1e1e;
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

/* :slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
} */

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

<style scoped lang="scss">

:deep(pre) {
  > code {
    & .line-go.diff.remove {
      background-color: rgba(244, 63, 94, 0.2);
      opacity: 0.7;
    }
    & .line-go.diff.add {
      background-color: rgba(16, 185, 129, 0.2);
    }
  }
}


:deep(pre.has-focused-lines) {
  > code {
    & .line-go:not(.has-focus) {
      filter: blur(0.095rem);
      opacity: 0.4;
      transition: filter 0.35s, opacity 0.35s;
    }
  }
}


:deep(pre.has-focused-lines:hover) {
  > code {
    & .line-goline-go:not(.has-focus) {
      filter: blur(0);
      opacity: 1;
    }
  }
}

pre code .line-go {
  min-height: 1rem;
  margin-top: 0px;
  display:inline-block;
}
</style>
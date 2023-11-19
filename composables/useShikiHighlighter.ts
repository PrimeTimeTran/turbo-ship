// import { getHighlighter, Highlighter, renderToHtml } from 'shiki-es'

// const highlighter = ref<Highlighter | null>(null)

// export const useShikiHighlighter = () => {
//   if (highlighter.value === null) {
//     getHighlighter({
//       theme: 'dark-plus',
//       themes: ['dark-plus'],
//       langs: [
//         'css',
//         'scss',
//         'js',
//         'ts',
//         'groovy',
//         'java',
//         'diff',
//         'vue',
//         'html',
//         'json',
//         'xml',
//       ],
//     }).then((_highlighter) => {
//       highlighter.value = _highlighter
//     })
//   }

//   return { highlighter, renderToHtml }
// }

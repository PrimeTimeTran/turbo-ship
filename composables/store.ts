import { reactive } from 'vue'

export const store = reactive({
  view: 'composer',
  collapsed: false,
  stateViewer: true,
  entities: ref(SeedsMint),
})

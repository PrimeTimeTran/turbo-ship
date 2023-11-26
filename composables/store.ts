import { reactive } from 'vue'

export const store = reactive({
view: 'entities',
  collapsed: false,
  stateViewer: true,
  entities: ref(SeedsMint),
})

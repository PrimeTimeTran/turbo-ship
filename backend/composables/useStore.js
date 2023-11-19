import { reactive } from 'vue'

export const store = reactive({
  view: 'Entities',
  stateViewer: false,
  collapsed: 'notCollapsed',
  entities: ref(original),
})

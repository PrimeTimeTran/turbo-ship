import { reactive } from 'vue'

export const store = reactive({
  view: 'Entities',
  stateViewer: true,
  collapsed: 'notCollapsed',
  entities: ref(original),
})

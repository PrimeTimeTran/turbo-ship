import _ from 'lodash'
import { reactive } from 'vue'

import seeds from '~/utils/seeds/seeds'

export const store = reactive({
  view: 'entities',
  collapsed: false,
  stateViewer: true,
  entities: ref(_.cloneDeep(seeds.mint)),
})

import _ from 'lodash'
import { reactive } from 'vue'

import seeds from '../utils/seeds/seeds.js'

export const store = reactive({
  isDark: true,
  showLeft: true,
  showRight: true,
  isSparse: false,
  collapsed: false,
  view: 'entities',
  showOverlay: false,
  entities: ref(_.cloneDeep(seeds.mint)),
})

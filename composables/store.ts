import _ from 'lodash'
import { reactive } from 'vue'

import seeds from '~/utils/seeds/seeds.js'

console.log({
  seeds,
})

export const store = reactive({
  view: 'entities',
  collapsed: false,
  showLeft: true,
  showRight: true,
  isDark: true,
  isSparse: false,
  previewOverlay: false,
  entities: ref(_.cloneDeep(seeds.mint)),
})

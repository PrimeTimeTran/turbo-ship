import _ from 'lodash'
import { reactive } from 'vue'

import seeds from '../utils/seeds.js'

export const store = reactive({
  showLeft: true,
  showRight: true,
  isSparse: false,
  collapsed: false,
  view: 'entities',
  showOverlay: false,
  entities: ref(_.cloneDeep([...seeds.leetcode.entities, ...seeds.lms.entities])),
})

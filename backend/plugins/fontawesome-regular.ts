import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

library.add(faCircleCheck)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-regular', FontAwesomeIcon)
})

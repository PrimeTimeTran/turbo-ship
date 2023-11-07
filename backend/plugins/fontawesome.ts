import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import {
  faBars,
  faBlog,
  faUser,
  faTags,
  faCopy,
  faHouse,
  faCheck,
  faSignOut,
  faHamburger,
  faGear,
  faAddressCard,
  faHatWizard,
  faRegistered,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBlog,
  faBars,
  faCopy,
  faTags,
  faUser,
  faCheck,
  faHouse,
  faGear,
  faSignOut,
  faHamburger,
  faHatWizard,
  faRegistered,
  faAddressCard,
  faProjectDiagram
)

// This is important, we are going to let Nuxt worry about the CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

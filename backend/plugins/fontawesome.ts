import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import {
  faBars,
  faBlog,
  faUser,
  faTags,
  faCopy,
  faGear,
  faCode,
  faHouse,
  faCheck,
  faSignOut,
  faHamburger,
  faHatWizard,
  faAddressCard,
  faRegistered,
  faMagnifyingGlass,
  faProjectDiagram,
  faCircleXmark,
  faCaretLeft,
  faCaretRight,
  faDatabase,
  faEye,
  faSort,
  faEyeSlash,
  faPenToSquare,
  faRectangleXmark,
  faClipboard,
  faPlus,
  faSquareMinus,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCode,
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
  faProjectDiagram,
  faMagnifyingGlass,
  faCircleXmark,
  faCaretLeft,
  faCaretRight,
  faDatabase,
  faEye,
  faSort,
  faPlus,
  faEyeSlash,
  faPenToSquare,
  faRectangleXmark,
  faClipboard,
  faSquareMinus
)

// This is important, we are going to let Nuxt worry about the CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

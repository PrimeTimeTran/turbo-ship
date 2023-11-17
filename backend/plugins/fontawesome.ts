import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

import {
  faEye,
  faSort,
  faPlus,
  faBars,
  faBlog,
  faUser,
  faTags,
  faCopy,
  faGear,
  faList,
  faCode,
  faHouse,
  faCheck,
  faSignOut,
  faDatabase,
  faEyeSlash,
  faHamburger,
  faHatWizard,
  faCaretLeft,
  faClipboard,
  faCircleInfo,
  faCaretRight,
  faRegistered,
  faAddressCard,
  faSquareMinus,
  faCircleXmark,
  faPenToSquare,
  faRectangleXmark,
  faProjectDiagram,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCode,
  faBlog,
  faBars,
  faCopy,
  faTags,
  faUser,
  faEye,
  faSort,
  faPlus,
  faList,
  faGear,
  faCheck,
  faHouse,
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

  faEyeSlash,
  faCircleInfo,
  faPenToSquare,
  faRectangleXmark,
  faClipboard,
  faSquareMinus
)

// This is important, we are going to let Nuxt worry about the CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

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
  faCube,
  faTrash,
  faClock,
  faCubes,
  faHouse,
  faCheck,
  faStore,
  faCaretUp,
  faSignOut,
  faDatabase,
  faEyeSlash,
  faCaretDown,
  faHamburger,
  faHatWizard,
  faCaretLeft,
  faClipboard,
  faCircleInfo,
  faCaretRight,
  faRegistered,
  faCircleCheck,
  faAddressCard,
  faSquareMinus,
  faCircleXmark,
  faPenToSquare,
  faRectangleXmark,
  faProjectDiagram,
  faMagnifyingGlass,
  faMessage,
  faQuestion,
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
  faTrash,
  faCube,
  faClock,
  faCubes,
  faStore,
  faCheck,
  faHouse,
  faCaretUp,
  faSignOut,
  faDatabase,
  faMessage,
  faQuestion,
  faEyeSlash,
  faCaretLeft,
  faCaretDown,
  faClipboard,
  faHamburger,
  faHatWizard,
  faCircleInfo,
  faCaretRight,
  faRegistered,
  faAddressCard,
  faCircleXmark,
  faCircleCheck,
  faSquareMinus,
  faPenToSquare,
  faRectangleXmark,
  faProjectDiagram,
  faMagnifyingGlass,
)

// This is important, we are going to let Nuxt worry about the CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

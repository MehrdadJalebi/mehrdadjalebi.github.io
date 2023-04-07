import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faArrowLeft, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
// using Tree-shaking
library.add(faMoon, faArrowLeft, faSearch, faAngleDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

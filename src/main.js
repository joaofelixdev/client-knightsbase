import {
  createApp,
} from 'vue';

import {
  library,
} from '@fortawesome/fontawesome-svg-core';

import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';

import {
  faPen,
  faStar,
  faShield,
  faEye,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import router from './router';
import App from './App.vue';

library.add(faPen, faStar, faShield, faEye, faArrowLeft);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .mount('#app');

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/styles.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';
import { createPinia } from 'pinia';
import { useBookStore } from '@/stores/bookStore.js';
import { useAuthStore } from '@/stores/authStore.js';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faArrowLeft, faThumbsUp);

const pinia = createPinia();

const storedUser = localStorage.getItem('user');

if (storedUser) {
  const userData = JSON.parse(storedUser);
  useAuthStore(pinia).user = userData;
}

const bookStore = useBookStore(pinia);

bookStore.fetchBooks().then(() => {
  const app = createApp(App);
  app
    .use(pinia)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Toast)
    .mount('#app');
});

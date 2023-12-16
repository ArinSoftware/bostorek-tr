import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/styles.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';
import { createPinia } from 'pinia';
import { useBookStore } from '@/stores/bookStore.js';
import { useAuthStore } from '@/stores/authStore.js';
import { useCommentStore } from '@/stores/commentStore.js';
import axios from 'axios';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faThumbsUp,
  faArrowLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp as farThumbsUp,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

import { useToast } from 'vue-toastification';

const toast = useToast();

/* add icons to the library */
library.add(faArrowLeft, faThumbsUp, faPenToSquare, faTrash, farThumbsUp);

const pinia = createPinia();
const authStore = useAuthStore(pinia);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Display Toast Message
      toast.error('Your token has expired, forwarding login page', {
        position: 'top-right',
        timeout: 3000,
        closeButton: 'button',
        icon: true,
        rtl: false,
      });

      setTimeout(() => {
        authStore.logout();
        router.push('/login');
      }, 3000);
    }
  }
);

const storedUser = localStorage.getItem('user');

if (storedUser) {
  const userData = JSON.parse(storedUser);

  useAuthStore(pinia).user = userData.user;

  const token = userData.token;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

const bookStore = useBookStore(pinia);
const commentStore = useCommentStore(pinia);

const init = async () => {
  try {
    await Promise.all([bookStore.fetchBooks(), commentStore.fetchComments()]);
    const app = createApp(App);
    app
      .use(pinia)
      .use(router)
      .component('font-awesome-icon', FontAwesomeIcon)
      .use(Toast)
      .mount('#app');
  } catch (error) {
    console.error(error);
  }
};

init();

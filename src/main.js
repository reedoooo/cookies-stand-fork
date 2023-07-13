import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
window.$ = window.jQuery = $;

createApp(App)
    .use(router)
    .mount('#app');

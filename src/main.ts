import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeDatabase } from '@/database'

initializeDatabase().then(() => {
  createApp(App).use(router).mount('#app');
});

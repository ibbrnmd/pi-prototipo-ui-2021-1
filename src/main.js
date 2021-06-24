import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import '@/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css' 

createApp(App).use(router).mount('#app')
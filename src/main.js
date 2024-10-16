import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const app = createApp(App);
app.use(router); // Usar o roteador
app.mount('#app');

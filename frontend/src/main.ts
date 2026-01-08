import './assets/css/style.css';

import { createApp } from 'vue';
import PiniaConfig from './store/PiniaConfig';

import App from './App.vue';
import router from './router';

const pinia = PiniaConfig.setup();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');

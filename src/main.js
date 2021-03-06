import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import '@/assets/style.sass';
import App from './App.vue';

import router from './routes/router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app');

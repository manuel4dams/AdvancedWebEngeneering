import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Import Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


// Debugg in template
// Vue.prototype.log = window.console.log;
// {{ log('Hallo') || 'Hallo' }}

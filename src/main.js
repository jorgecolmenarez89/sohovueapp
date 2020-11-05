import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import './assets/css/main.css';
var VueScrollTo = require('vue-scrollto');
 

Vue.config.productionTip = false

//Uso de la Libreria y Plugin
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')

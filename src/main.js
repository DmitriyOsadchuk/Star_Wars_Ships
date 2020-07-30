import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import VBurger from 'vue-burger';
Vue.use(VBurger);
import 'vue-range-slider/dist/vue-range-slider.css'
Vue.component('VueSlider', VueSlider)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

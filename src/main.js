import Vue from 'vue'
import App from './App.vue'
import { Waypoint } from './plugins/Waypoint';

Vue.component('Waypoint', Waypoint);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueExpandableImage from 'vue-expandable-image'

Vue.use(VueExpandableImage)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

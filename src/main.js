import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AudioVisual from 'vue-audio-visual'

import { store } from './store/store.js'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'


Vue.component('v-icon', Icon)

Vue.use(AudioVisual)


Vue.config.productionTip = false

new Vue({
	store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

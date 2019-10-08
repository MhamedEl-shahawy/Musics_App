import Vue from 'vue'
import App from './App.vue'
import router from './router'
import APlayer from '@moefe/vue-aplayer';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store.js'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'


Vue.component('v-icon', Icon)
Vue.use(VueAxios, axios)


Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

Vue.config.productionTip = false

new Vue({
	store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

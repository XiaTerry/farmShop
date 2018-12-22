import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem.js'
import './assets/css/reset.scss'
//引入vant组件库

import {Tabbar, TabbarItem,NavBar,Icon, Lazyload} from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Lazyload);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入全局的组件
import commonCom from './components/common'
for (var i in commonCom) {
  Vue.component(i, commonCom[i]);
}

Vue.use(ElementUI);
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
//导入axios
import axios from 'axios';
//把axios绑到vue原型链上用$http代表
Vue.prototype.$http = axios;

//导入qs
import qs from 'qs'
Vue.prototype.$qs = qs;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

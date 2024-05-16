// 整个项目的入口文件
import Vue from 'vue'
// 说明这个Vue文件来源于依赖文件中
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element上的
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render表示渲染，渲染App这个文件，所以css等操作都应在app文件中进行
  render: h => h(App)
}).$mount('#app')

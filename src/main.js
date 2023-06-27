import Vue from 'vue';
import App from './App.vue';
// import swiper from 'fs-extra'
//引入路由相关文件
import router from "./router"
//引入仓库进行注册
import store from "./store";
// 引入全局组件
import Header from '@/components/Header';
import Footer from '@/components/Footer';
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('.main')

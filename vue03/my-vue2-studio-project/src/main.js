import Vue from 'vue'
import App from './App.vue'
//引入index，这个就是专门用来存路由的
import router from "./router/index"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Home from "@/components/HelloWorld";
// import Test from "@/components/TestWindow";





Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,

}).$mount('#app')

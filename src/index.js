import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import "./bootstrap.css"

Vue.config.productionTip = false

// 声明使用Vue插件
Vue.use(VueResource) // 所有组件对象都有一个属性$http对象 get()/post()

new Vue({
  el: "#root",
  render: h => h(App),
})
import Vue from 'vue'
import App from './App.vue'
import "./base.css"

Vue.config.productionTip = false

// 给Vue的原型对象添加一个vm属性
// Vue.prototype.$vm = new Vue()

new Vue({
  el: "#root",
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$vm = this
  }
})
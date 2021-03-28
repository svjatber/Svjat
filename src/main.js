import Vue from 'vue'
import App from './App'

Vue.filter('uppercase', (value)=>{
  return value.toUpperCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
})

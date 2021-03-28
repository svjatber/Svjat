import Vue from 'vue'
import App from './App'

Vue.filter('uppercase', (value)=>{
  return value.toUpperCase()
})

Vue.mixin({
  showCreate() {
    console.log('show000')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

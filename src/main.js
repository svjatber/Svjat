import Vue from 'vue'
import App from './App'
import ColorDirective from './color'

Vue.directive('colored', ColorDirective)


new Vue({
  el: '#app',
  render: h => h(App)
})

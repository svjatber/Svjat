<template>
  <div id="app">
      <h2 v-colored:background.font.delay="'red'">{{title}}</h2>
      <h2 v-colored:color="'blue'">{{title}}</h2>

      <h2 v-font>Local fontSize</h2>
  </div>
</template>

<script>
import Color from './color'
export default {
  data(){
    return {
      title: 'Parent'
    }
  },
  directives:{
    colored: Color,
    font:{
      bind(el){
        el.style.fontSize = '100px'
      }
    }
  }
}
</script>

<style>

</style>

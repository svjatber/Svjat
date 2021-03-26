<template>
  <div id="app">
    <h1>{{ message}}</h1>
    <h1>{{message2}}</h1>

    <app-car v-for="enem of 5"/>
  </div>
</template>

<script>
import Car from './Car'
export default {
  data () {
    return {
      message: 'hello',
      message2: 'cool'
    }
  },
  components:{
    appCar: Car
  }
}
</script>

<style>

</style>

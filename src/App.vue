<template>
  <div id="app">
    <app-car>
      <h1 slot="title">{{carName}}</h1>
      <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, maxime?</p>
    </app-car>
  </div>
</template>

<script>
import Car from './Car'
import Counter from './Counter'
export default {
  data(){
    return{
      carName: 'good'
    }
  },
  components:{
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style scoped>
  h1{
    color: red;
  }
</style>

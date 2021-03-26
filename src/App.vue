<template>
  <div id="app">
    <h1>Parent: {{carName}}</h1>

    <app-car v-for="en of 1" :carName="carName" :car-year="carYear"/>
  </div>
</template>

<script>
import Car from './Car'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2015
    }
  },
  components:{
    appCar: Car
  }
}
</script>

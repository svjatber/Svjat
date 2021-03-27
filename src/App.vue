<template>
  <div id="app">
    <h1>Parent: {{carName}}</h1>
    <appCounter :counter="counter"/>
    <app-car v-for="en of 1"
             :carName="carName"
             :car-year="carYear"
             @nameChanged="carName = $event"
             :changeFunc="changeNameToAudi"
             @counterUpdate="counter = $event"
             :counter="counter"
    />
  </div>
</template>

<script>
import Car from './Car'
import Counter from './Counter'
export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2015,
      counter: 0
    }
  },
  components:{
    appCar: Car,
    appCounter: Counter
  },
  methods:{
    changeNameToAudi(){
      this.carName = 'Audi'
    }
  }
}
</script>

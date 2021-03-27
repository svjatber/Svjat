<template>
  <div id="app">
    <h1>Parent: {{carName}}</h1>
    <appCounter/>
    <app-car v-for="en of 1"
             :carName="carName"
             :car-year="carYear"
             @nameChanged="carName = $event"
             :changeFunc="changeNameToAudi"
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
      carYear: 2015
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

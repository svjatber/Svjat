<template>
  <div id="app">
    <h1>Parent</h1>
    <appCounter/>
    <app-car />
  </div>
</template>

<script>
import Car from './Car'
import Counter from './Counter'
export default {
  components:{
    appCar: Car,
    appCounter: Counter
  }
}
</script>

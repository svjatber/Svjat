<template>
    <h2>Counter: {{counter}}</h2>
</template>

<script>
import {eventEmitter} from "./main";

export default {
  data(){
    return{
      counter: 0
    }
  },
  created() {
    eventEmitter.$on('counterUpdated', (p)=>{
      this.counter += p
    })
  }
}
</script>


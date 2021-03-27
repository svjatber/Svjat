<template>
    <div class="car">
      <h2>Name: {{reverseName}} </h2>
      <p>{{carYear}}</p>
      <button @click="changeName">Change Name</button>
      <button @click="changeFunc">Change from parent</button>
      <button @click="updateCounter">Counter</button>
    </div>
</template>

<script>
import {eventEmitter} from "./main";

export default {
  props: {carName: String,
    carYear: Number,
    changeFunc: Function
  },
  computed: {
    reverseName(){
      return this.carName.split('').reverse().join('')
    }
  },
  methods: {
    changeName(){
      this.carName = 'Mazda'
      this.$emit('nameChanged', this.carName);
    },
    updateCounter(){
      // this.$emit('counterUpdate', this.counter + 1);
      eventEmitter.$emit('counterUpdated', 3)
    }
  }
}
</script>



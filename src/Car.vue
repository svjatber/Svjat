<template>
    <div class="car">
      <h2>Name: {{reverseName}} </h2>
      <p>{{carYear}}</p>
    </div>
</template>

<script>
export default {
  props: {carName: String, carYear: Number},
  computed: {
    reverseName(){
      return this.carName.split('').reverse().join('')
    }
  }
}
</script>



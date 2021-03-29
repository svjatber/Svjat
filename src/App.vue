<template>
  <div>
    <h2>Form inputs</h2>
    <input type="number" v-model.number="age">

    <p>{{age}}</p>

    <hr>

    <input type="text" v-model.trim="textInput">
    <p>{{textInput}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
        age: 20,
        textInput: ''

    }
  },
  watch:{
    age(value){
      console.log(value)
    },
    textInput(v){
      console.log(v)
    }
  }
}
</script>

<style scoped>
  textarea{
    width: 200px;
    height: 400px;
  }
  p{
    white-space: pre;
  }
</style>



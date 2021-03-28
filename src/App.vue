<template>
  <div id="app">
      <h2 v-colored="color">{{title}}</h2>
      <button @click="color = 'red'">Red</button>

  </div>
</template>

<script>

export default {
  data(){
    return {
      title: 'Parent',
      color: 'green'
    }
  }
}
</script>

<style>

</style>

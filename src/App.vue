<template>
  <div id="app">
      <h2 v-colored:background.font.delay="'red'">{{title}}</h2>
      <h2 v-colored:color="'blue'">{{title}}</h2>

  </div>
</template>

<script>

export default {
  data(){
    return {
      title: 'Parent'
    }
  }
}
</script>

<style>

</style>

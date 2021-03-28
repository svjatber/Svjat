<template>
  <div id="app">
      <h2 v-colored v-if="visible">{{title}}</h2>
      <button @click="visible = !visible">click</button>
      <button @click="title = 'New title'">click</button>
  </div>
</template>

<script>

export default {
  data(){
    return {
      title: 'Parent',
      visible: true,
    }
  }
}
</script>

<style>

</style>

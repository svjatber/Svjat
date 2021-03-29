<template>
  <div>
    <h2>Form inputs</h2>
    <select v-model="social">
      <option v-for="s in socialList"
      >{{s}}</option>
    </select>

    <p>{{social}}</p>

  <hr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Parent',
      social: 'inst',
      socialList: ['choose social','inst', 'vk', 'facebook']

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



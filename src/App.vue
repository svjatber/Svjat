<template>
  <div>
    <h2>Form inputs</h2>
    <label>
      <input type="checkbox" value="inst" v-model="social"> Instagram
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="social" checked> VK
    </label>
    <label>
      <input type="checkbox" value="fb" v-model="social"> FB
    </label>


  <hr>
  <ul>
    <li v-for="soc of social">{{soc}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Parent',
      social:['vk']
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



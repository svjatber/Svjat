<template>
  <div>
    <h2>Form inputs</h2>
    <label>
      <input type="radio" value="inst" v-model="social"> Instagram
    </label>
    <label>
      <input type="radio" value="vk" v-model="social" checked> VK
    </label>
    <label>
      <input type="radio" value="fb" v-model="social"> FB
    </label>


  <hr>

    <p>{{social}}</p>

  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Parent',
      social: 'inst'
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



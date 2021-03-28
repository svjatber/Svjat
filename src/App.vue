<template>
  <div>
    <h2>Form inputs</h2>
    <textarea name="" id="" cols="30" rows="10" v-model="textarea"/>
    <p>{{ textarea }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Parent',
      textarea: ''
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



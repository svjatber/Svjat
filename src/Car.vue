<template>
    <div>
      <h2>Name: {{carName}} </h2>
      <p>{{year}}</p>
    </div>
</template>

<script>

export default {
  data(){
    return{
      carName: 'Ford',
      year: '2015'
    }
  }
}
</script>

<style scoped>

</style>

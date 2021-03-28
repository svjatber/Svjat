<template>
  <div>
    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
  </div>
</template>

<script>
import List from './mixins'
export default {
  mixins: [List]
}
</script>

<style scoped>

</style>

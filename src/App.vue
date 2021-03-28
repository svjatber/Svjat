<template>
  <div>
    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>

import ListMixins from './mixins'
import List from "./List";
export default {
  data(){
    return {
      title: 'Parent',

    }
  },
  mixins: [ListMixins],
  components:{
    appList: List
  },
  filters:{
    lowercase(value){
      return value.toLowerCase()
    }
  }
}
</script>



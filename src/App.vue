<template>
  <div>
    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>

  </div>
</template>

<script>

export default {
  data(){
    return {
      title: 'Parent',
      names:['Vlad', 'Max', 'Elena', 'Igor'],
      searchName: ''
    }
  },
  computed:{
    filteredNames(){
      return this.names.filter(name=>{
        return name.toLowerCase().indexOf(this.searchName) !== -1
      })
    }
  },
  filters:{
    lowercase(value){
      return value.toLowerCase()
    }
  }
}
</script>



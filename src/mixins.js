export default {
  data(){
    return {
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
  }
}

<template>
  <div>
   <h2>Contols</h2>
    <app-onoff  v-model="switched"/>
   <div>
     <h3 v-if="switched">Component is enabled</h3>
     <h3 v-else>Component disabled</h3>
   </div>
  </div>
</template>

<script>
import OnOff from "./OnOff";

export default {
  data(){
    return {
      switched: false
    }
  },
  components: {
    appOnoff: OnOff
  }
}
</script>

<style scoped>

</style>



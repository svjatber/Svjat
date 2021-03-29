<template>
  <div>
    <button class="on" :class="{'active': value}" @click="onChange(true)">On</button>
    <button class="off" :class="{'active': !value}" @click="onChange(false)">Off</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data(){
    return {
      enabled: true

    }
  },
  methods:{
    onChange(value){
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.on.active{
  background: green;
}
.off.active{
  background: red;
}
</style>

<template>
  <div>
    <div class="container">
      <div class="pt-3">
        <div class="form-group">
          <label for="email"> Email
            <input type="email"
                   id="email"
                   class="form-control"
                   v-model="email"
            >
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  }
}
</script>

<style scoped>
  div{

  }
</style>



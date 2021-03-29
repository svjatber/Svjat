<template>
  <div>
    <div class="container">
      <div class="pt-3">
        <div class="form-group">
          <label for="email"> Email
            <input type="email"
                   id="email"
                   class="form-control"
                   @blur="$v.email.$touch()"
                   v-model="email"
            >
          </label>
        </div>
        <pre>{{$v.email}}</pre>
      </div>
    </div>
  </div>
</template>

<script>

import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";

export default {
  data() {
    return {
      email: ''
    }
  },
  validations:{
    email:{
      required,
      email

    }
  }
}
</script>

<style scoped>
  div{

  }
</style>



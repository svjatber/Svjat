<template>
  <div>
    <div class="container">
      <div class="pt-3">
        <div class="form-group">
          <label for="email"> Email
            <input type="email"
                   id="email"
                   class="form-control"
                   :class="{'is-invalid': $v.email.$error}"
                   @blur="$v.email.$touch()"
                   v-model="email"
            >
            <div class="invalid-feedback" v-if="!$v.email.required">
              Email field is required
            </div>
            <div class="invalid-feedback" v-if="!$v.email.email">
              Please enter correct email
            </div>
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



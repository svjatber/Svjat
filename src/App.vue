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
          <div class="pt-3">
            <label for="password"> Password
              <input type="password"
                     id="password"
                     class="form-control"
                     :class="{'is-invalid': $v.password.$error}"
                     @blur="$v.password.$touch()"
                     v-model="password"
              >
              <div class="invalid-feedback" v-if="!$v.password.minLength">
                Please enter correct password({{password.length}})
              </div>
            </label>
          </div>
          <div class="pt-3">
            <label for="confirm"> Confirm password
              <input type="password"
                     id="confirm"
                     class="form-control"
                     :class="{'is-invalid': $v.confirm.$error}"
                     @blur="$v.confirm.$touch()"
                     v-model="confirm"
              >
              <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
                Not same password
              </div>
            </label>
          </div>
        </div>
        <pre>{{$v}}</pre>
      </div>
    </div>
  </div>
</template>

<script>

import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";
import minLength from "vuelidate/lib/validators/minLength";
import sameAs from "vuelidate/lib/validators/sameAs";

export default {
  data() {
    return {
      email: '',
      password: '',
      confirm: ''
    }
  },
  validations:{
    email:{
      required,
      email

    },
    password:{
      minLength: minLength(6)

    },
    confirm:{
      sameAs: sameAs((vue)=> vue.password)
    }

  }
}
</script>

<style scoped>
  div{

  }
</style>



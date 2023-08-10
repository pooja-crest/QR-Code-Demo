<template>
  <div class="auth-main--container">
    <div class="auth-header--container">
      <div class="auth-title">
        <span class="auth-title--text">Sign in to Elco Purchase</span>
      </div>
      <div class="auth-subtitle mt-2">
        <span class="auth-subtitle--text">Please enter your credentials to proceed</span>
      </div>
    </div>
    <div class="auth-input--container">
      <div class="w-full block mt-6">
        <div class="w-full">
          <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Username</span>
        </div>
        <div class="w-full mt-2">
          <input type="text" class="input w-full" placeholder="Your username" v-model="inputs.code" tabindex="1" :class="[inputs.code === '' || inputs.code === null ? 'input-empty' : '']" ref="username" @keyup.enter="signIn()" />
          <div v-if="errors.code.length > 0" class="mt-2 flex">
            <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
            <span class="text-danger text-sm ml-2">{{ errors.code[0] }}</span>
          </div>
        </div>
      </div>
      <div class="w-full block mt-5">
        <div class="flex w-full">
          <div class="w-1/2">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Password</span>
          </div>
        </div>
        <div class="w-full mt-2">
          <input
            type="password"
            class="input w-full"
            placeholder="enter your password"
            v-model="inputs.password"
            tabindex="2"
            :class="[inputs.password === '' || inputs.password === null ? 'input-empty' : '']"
            @keyup.enter="signIn()"
          />
          <div v-if="errors.password.length > 0" class="mt-2 flex">
            <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
            <span class="text-danger text-sm ml-2">{{ errors.password[0] }}</span>
          </div>
          <!-- <div class="w-full mt-2 text-right">
            <router-link class="no-underline" style="color: #8097B1;" to="/auth/forgot-password">Forgot password?</router-link>
          </div> -->
          <div class="w-full mt-2 flex">
            <span class="text-left mr-auto">
              <input id="remember_me" type="checkbox" v-model="inputs.remember_me" tabindex="3" @keyup.enter="signIn()" />
              <label for="remember_me"><span style="color: #8097B1;">Remember Me</span></label>
            </span>
            <span class="text-right">
              <router-link class="no-underline" style="color: #8097B1;" to="/auth/forgot-password">Forgot password?</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-footer--container">
      <button @click="signIn()" class="btn btn-primary w-full" tabindex="4" style="height:50px;">
        <span v-if="!loading" class="btn--text custom-text-bold">Sign in</span>
        <span v-else class="btn--text flex items-center">
          <feather-icon icon="LoaderIcon" class="loading h-4 w-4"></feather-icon>
          <span class="ml-2">please wait...</span>
        </span>
      </button>
    </div>
<!--    <div class="mt-3 flex justify-center">-->
<!--        <span style="color: #8097B1;">Don't have account?</span>-->
<!--        <router-link class="no-underline ml-1" to="/auth/register">Register</router-link>-->
<!--    </div>-->
    <div class="mt-3 flex justify-center">
      <span>By logging in you understand and agree to <a :href="`https://elcolighting.com/terms-and-conditions`" target="_blank">Terms and Conditions</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import authenticationApi from "@/apis/authenticationApi";

export default {
  name: "Login",
  mixins: [authenticationApi],
  data() {
    return {
      inputs: {
        code: null,
        password: null,
        remember_me: false,
      },
      errors: {
        code: [],
        password: [],
      },
      loading: false,
    };
  },
  computed: {},
  methods: {
    validateInput() {
      let error_messages = {
        code: {
          required: "Code can't be empty",
        },
        password: {
          required: "Password can't be empty",
        },
      };
      let is_valid = true;
      if (this.inputs.code == null || this.inputs.code === "") {
        this.errors.code.push(error_messages.code.required);
        is_valid = false;
      }

      if (this.inputs.password == null || this.inputs.password === "") {
        this.errors.password.push(error_messages.password.required);
        is_valid = false;
      }
      return is_valid;
    },
    signIn() {
      this.errors = {
        code: [],
        password: [],
      };
      if (this.validateInput()) {
        this.loading = true;
        this.authenticationApi_login({
          code: this.inputs.code,
          password: this.inputs.password,
          remember_me: this.inputs.remember_me,
        })
          .then(({ data }) => {
            if (typeof data == "undefined") {
              return false;
            }
            this.$store.commit("UPDATE_USER_INFO", data);
            if(data.role == 'receiving'){
              this.$router.push({ name: 'receives' });
            } else if(data.role == 'display'){
                  this.$router.push({ name: 'display_shipments' });
            } else if(data.role == 'order_tracking'){
                this.$router.push({ name: 'orders_status_report' });
            } else {
              this.$router.push({ name: 'orders' });
            }
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    focusInput: function ( inputRef ) {
      // $refs is an object that holds the DOM references to your inputs
      this.$refs[inputRef].focus();
    },
  },

  mounted: function () {
    this.focusInput('username');
  }
};
</script>

<style lang="scss">
.auth--container {
  width: 420px;
}
</style>

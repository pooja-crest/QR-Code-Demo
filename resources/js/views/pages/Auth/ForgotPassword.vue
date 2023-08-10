<template>
  <div class="auth-main--container">
    <div class="auth-header--container">
      <div class="auth-title">
        <span class="auth-title--text">Forgot Password</span>
      </div>
      <div class="auth-subtitle mt-2">
        <span v-if="!email_sent" class="auth-subtitle--text">Please insert your email to get new password.</span>
        <span v-else class="auth-subtitle--text">
          We've send the password reset link into
          <span class="text-color-default">{{ inputs.email }}</span>
        </span>
      </div>
    </div>
    <div v-if="!email_sent" class="auth-input--container">
      <div class="w-full block mt-6">
        <div class="w-full">
          <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Email</span>
        </div>
        <div class="w-full mt-2">
          <input
            type="text"
            class="input w-full"
            placeholder="youremail@mail.com"
            v-model="inputs.email"
            :class="[inputs.email === '' || inputs.email === null ? 'input-empty' : '']"
            v-on:keyup.enter="forgotPassword()"
            ref="email"
          />
          <div v-if="errors.email.length > 0" class="mt-2 flex">
            <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
            <span class="text-danger text-sm ml-2">{{ errors.email[0] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-footer--container">
      <button v-if="!email_sent" @click="forgotPassword" class="btn btn-primary w-full" style="height:50px;">
        <span v-if="!loading" class="btn--text custom-text-bold">Reset password</span>
        <span v-else class="btn--text flex items-center">
          <feather-icon icon="LoaderIcon" class="loading h-4 w-4"></feather-icon>
          <span class="ml-2">please wait...</span>
        </span>
      </button>
      <button v-else @click="$router.push('/auth/login')" class="btn btn-primary w-full" style="height:50px;">
        <span class="btn--text custom-text-bold">Login</span>
      </button>
      <div class="mt-3 flex justify-center">
        <span style="color: #8097B1;">Don't have account?</span>
        <router-link class="no-underline ml-1" to="/auth/register">Register</router-link>
      </div>
      <div class="mt-3 flex justify-center">
        <span style="color: #8097B1;">Back to</span>
        <router-link class="no-underline ml-1" to="/auth/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationApi from "@/apis/authenticationApi";
export default {
  name: "ForgotPassword",
  mixins: [authenticationApi],
  data() {
    return {
      email_sent: false,
      inputs: {
        email: null,
      },
      errors: {
        email: [],
      },
      loading: false,
    };
  },
  computed: {},
  methods: {
    validateInput() {
      let error_messages = {
        email: {
          required: "Email cannot be empty",
          invalid: "Email is not valid",
        },
      };
      let is_valid = true;
      if (this.inputs.email == null || this.inputs.email === "") {
        this.errors.email.push(error_messages.email.required);
        is_valid = false;
      } else {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(this.inputs.email)) {
          this.errors.email.push(error_messages.email.invalid);
          is_valid = false;
        }
      }
      return is_valid;
    },
    forgotPassword() {
      this.errors = {
        email: [],
      };
      if (this.validateInput()) {
        this.loading = true;
        this.authenticationApi_forgotPassword({
          code: this.inputs.email,
        })
          .then((response) => {
            this.$notify({
              group: "notification",
              type: response.success ? "success" : "error",
              title: response.success ? "Success" : "Failed",
              text: response.message,
            });
            if (response.success) {
              this.email_sent = true;
            }
          })
          .finally(() => (this.loading = false));
      }
    },

    focusInput: function ( inputRef ) {
      // $refs is an object that holds the DOM references to your inputs
      this.$refs[inputRef].focus();
    },
  },

  mounted: function () {
  this.focusInput('email');
  }
};
</script>

<style scoped lang="scss"></style>

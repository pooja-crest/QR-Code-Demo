<template>
  <div class="auth-main--container">
    <div class="auth-header--container">
      <div class="auth-title">
        <span class="auth-title--text">Create new password</span>
      </div>
      <div class="auth-subtitle mt-2">
        <span class="auth-subtitle--text">Please fill this form to continue</span>
      </div>
    </div>
    <div class="auth-input--container">
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
            placeholder="type new password"
            v-model="inputs.password"
            tabindex="2"
            :class="[inputs.password === '' || inputs.password === null ? 'input-empty' : '']"
            v-on:keyup.enter="resetPassword()"
          />
          <div v-if="errors.password.length > 0" class="mt-2 flex">
            <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
            <span class="text-danger text-sm ml-2">{{ errors.password[0] }}</span>
          </div>
        </div>
      </div>
      <div class="w-full block mt-5">
        <div class="flex w-full">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Confirm Password</span>
          </div>
        </div>
        <div class="w-full mt-2">
          <input
            type="password"
            class="input w-full"
            placeholder="repeat new password"
            v-model="inputs.confirm_password"
            tabindex="2"
            :class="[inputs.confirm_password === '' || inputs.confirm_password === null ? 'input-empty' : '']"
            v-on:keyup.enter="resetPassword()"
          />
          <div v-if="errors.confirm_password.length > 0" class="mt-2 flex">
            <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
            <span class="text-danger text-sm ml-2">{{ errors.confirm_password[0] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-footer--container">
      <button @click="resetPassword()" class="btn btn-primary w-full" tabindex="3" style="height:50px;">
        <span v-if="!loading" class="btn--text custom-text-bold">Submit</span>
        <span v-else class="btn--text flex items-center">
          <feather-icon icon="LoaderIcon" class="loading h-4 w-4"></feather-icon>
          <span class="ml-2">please wait...</span>
        </span>
      </button>
      <div class="mt-3 flex justify-center">
        <span style="color: #8097B1;">Sign in instead?</span>
        <router-link class="no-underline ml-1" to="/auth/login">Sign in</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationApi from "@/apis/authenticationApi";
export default {
  name: "ResetPassword",
  mixins: [authenticationApi],
  data() {
    return {
      inputs: {
        password: null,
        confirm_password: null,
      },
      errors: {
        password: [],
        confirm_password: [],
      },
      loading: false,
    };
  },
  computed: {},
  methods: {
    validateInput() {
      let error_messages = {
        password: {
          required: "Password cannot be empty",
        },
        confirm_password: {
          required: "Confirm password cannot be empty",
          different: "Password doesn't match",
        },
      };
      let is_valid = true;

      if (this.inputs.password == null || this.inputs.password === "") {
        this.errors.password.push(error_messages.password.required);
        is_valid = false;
      }
      if (this.inputs.confirm_password == null || this.inputs.confirm_password === "") {
        this.errors.confirm_password.push(error_messages.confirm_password.required);
        is_valid = false;
      } else if (this.inputs.password !== this.inputs.confirm_password) {
        this.errors.confirm_password.push(error_messages.confirm_password.different);
        is_valid = false;
      }
      return is_valid;
    },
    resetPassword() {
      this.errors = {
        password: [],
        confirm_password: [],
      };
      if (this.validateInput()) {
        this.loading = true;
        this.authenticationApi_resetPassword({
          token: this.$route.query.token,
          mode: "reset_password",
          password: this.inputs.password,
        })
          .then((response) => {
            this.$notify({
              group: "notification",
              type: response.success ? "success" : "error",
              title: response.success ? "Success" : "Failed",
              text: response.message,
            });
            if (response.success) {
              var data = response.data;
              this.$store.commit("UPDATE_USER_INFO", data);
              this.$router.push("/orders");
            }
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="auth-main--container">
    <div class="auth-header--container">
      <div class="auth-title">
        <span class="auth-title--text">Request Login Access</span>
      </div>
      <div class="auth-subtitle mt-4">
        <span class="auth-subtitle--text" style="font-size:12px;">
          Existing customers, to request access to our inventory system, please submit the form below. If approved, we’ll email your login details within 3 business days.
        </span>
      </div>
    </div>
    <div class="auth-input--container mt-6">
      <div v-if="!!submit_error" class="w-full flex flex-nowrap">
        <div class="mb-10 flex">
          <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
          <span class="text-danger text-sm ml-2">Error: {{ submit_error }}</span>
        </div>
      </div>
      <div class="w-full flex flex-nowrap">
        <div class="w-full block px-4">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Email</span>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.code" tabindex="1" :class="[!inputs.code ? 'input-empty' : '']" ref="email" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.code" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Email can't be empty</span>
            </div>
            <div v-if="!email_valid && inputs.code" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Please provide a valid email address</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-nowrap mt-8">
        <div class="w-1/2 block px-4">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Telephone Number</span>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.phone" tabindex="3" :class="[!inputs.phone ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.phone" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Telephone number can't be empty</span>
            </div>
          </div>
        </div>
        <div class="w-1/2 block px-4">
          <div class="flex w-full">
            <div class="w-1/2">
              <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Distributor name</span>
            </div>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.distributor_name" tabindex="4" :class="[!inputs.distributor_name ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.distributor_name" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Distributor name can't be empty</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-nowrap mt-8">
        <div class="w-1/2 block px-4">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Customer Account Number</span>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.customer_id" tabindex="5" :class="[!inputs.customer_id ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.customer_id" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Customer account number can't be empty</span>
            </div>
          </div>
        </div>
        <div class="w-1/2 block px-4">
          <div class="flex w-full">
            <div class="w-1/2">
              <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Customer name</span>
            </div>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.customer_name" tabindex="6" :class="[!inputs.customer_name ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.customer_name" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Customer name can't be empty</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-nowrap mt-8">
        <div class="w-full block px-4">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Street</span>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.street" tabindex="7" :class="[!inputs.street ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.street" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Street can't be empty</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-nowrap mt-8">
        <div class="w-1/2 block px-4">
          <div class="w-full">
            <span class="uppercase font-medium text-xs text-spacing-md line-height-md">City</span>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.city" tabindex="8" :class="[!inputs.city ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.city" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">City can't be empty</span>
            </div>
          </div>
        </div>
        <div class="w-1/3 block pl-4 pr-2">
          <div class="flex w-full">
            <div class="w-1/2">
              <span class="uppercase font-medium text-xs text-spacing-md line-height-md">State</span>
            </div>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.state" tabindex="9" :class="[!inputs.state ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.state" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">State can't be empty</span>
            </div>
          </div>
        </div>
        <div class="w-1/6 block pl-2 pr-4">
          <div class="flex w-full">
            <div class="w-1/2">
              <span class="uppercase font-medium text-xs text-spacing-md line-height-md">Zip</span>
            </div>
          </div>
          <div class="w-full mt-2">
            <input type="text" class="input w-full" v-model="inputs.zip" tabindex="10" :class="[!inputs.zip ? 'input-empty' : '']" @keyup.enter="signIn()" />
            <div v-if="show_error && !inputs.zip" class="mt-2 flex">
              <icon-custom classes="fill-danger h-4 w-4" icon="warning"></icon-custom>
              <span class="text-danger text-sm ml-2">Zip can't be empty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-footer--container px-4">
      <button @click="signIn()" class="btn btn-primary w-full" tabindex="11" style="height:50px;">
        <span v-if="!loading" class="btn--text custom-text-bold">Create New Account</span>
        <span v-else class="btn--text flex items-center">
          <feather-icon icon="LoaderIcon" class="loading h-4 w-4"></feather-icon>
          <span class="ml-2">please wait...</span>
        </span>
      </button>
    </div>
    <div class="mt-3 flex justify-center">
        <span style="color: #8097B1;">Back to</span>
        <router-link class="no-underline ml-1" to="/auth/login">Login</router-link>
      </div>
  </div>
</template>

<script>
import authenticationApi from "@/apis/authenticationApi";
export default {
  name: "Register",
  mixins: [authenticationApi],
  data() {
    return {
      inputs: {
        code: null,
        phone: null,
        distributor_name: null,
        customer_id: null,
        customer_name: null,
        street: null,
        city: null,
        state: null,
        zip: null,
      },
      loading: false,
      show_error: false,
      submit_error: null,
      email_valid: false,
    };
  },
  computed: {},
  watch: {
    "inputs.code": function(value) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.email_valid = value.match(pattern);
    },
  },
  methods: {
    validateInput() {
      const is_valid =
        this.inputs.code &&
        this.inputs.phone &&
        this.inputs.distributor_name &&
        this.inputs.customer_id &&
        this.inputs.customer_name &&
        this.inputs.street &&
        this.inputs.city &&
        this.inputs.state &&
        this.inputs.zip;
      this.show_error = !is_valid;
      return is_valid;
    },
    signIn() {
      if (this.validateInput() && this.email_valid) {
        this.submit_error = null;
        this.loading = true;
        this.authenticationApi_register(this.inputs)
          .then((response) => {
            console.error(response);
            if (!response.data) {
              this.submit_error = response;
              return;
            }
            this.$router.push("/auth/register-complete");
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

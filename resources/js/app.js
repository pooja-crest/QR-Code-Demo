require("./bootstrap");

// window.Vue = require('vue');

import Vue from "vue";
import App from "./App.vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import router from "./router";
import "./globals/globalComponents.js";

import "./globals/globalVariables.js";

import "./globals/globalFunctions.js";

import store from "./store/store";
import excel from "vue-excel-export";

Vue.use(excel);
Vue.use(VueSweetalert2);
Vue.use(require("vue-moment"));
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/authenticationApi */ "./resources/js/apis/authenticationApi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ResetPassword",
  mixins: [_apis_authenticationApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      inputs: {
        password: null,
        confirm_password: null
      },
      errors: {
        password: [],
        confirm_password: []
      },
      loading: false
    };
  },
  computed: {},
  methods: {
    validateInput: function validateInput() {
      var error_messages = {
        password: {
          required: "Password cannot be empty"
        },
        confirm_password: {
          required: "Confirm password cannot be empty",
          different: "Password doesn't match"
        }
      };
      var is_valid = true;

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
    resetPassword: function resetPassword() {
      var _this = this;

      this.errors = {
        password: [],
        confirm_password: []
      };

      if (this.validateInput()) {
        this.loading = true;
        this.authenticationApi_resetPassword({
          token: this.$route.query.token,
          mode: "reset_password",
          password: this.inputs.password
        }).then(function (response) {
          _this.$notify({
            group: "notification",
            type: response.success ? "success" : "error",
            title: response.success ? "Success" : "Failed",
            text: response.message
          });

          if (response.success) {
            var data = response.data;

            _this.$store.commit("UPDATE_USER_INFO", data);

            _this.$router.push("/orders");
          }
        })["finally"](function () {
          _this.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-main--container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "auth-input--container" }, [
      _c("div", { staticClass: "w-full block mt-5" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "w-full mt-2" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputs.password,
                expression: "inputs.password"
              }
            ],
            staticClass: "input w-full",
            class: [
              _vm.inputs.password === "" || _vm.inputs.password === null
                ? "input-empty"
                : ""
            ],
            attrs: {
              type: "password",
              placeholder: "type new password",
              tabindex: "2"
            },
            domProps: { value: _vm.inputs.password },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.resetPassword()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.inputs, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.password.length > 0
            ? _c(
                "div",
                { staticClass: "mt-2 flex" },
                [
                  _c("icon-custom", {
                    attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                    _vm._v(_vm._s(_vm.errors.password[0]))
                  ])
                ],
                1
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full block mt-5" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "w-full mt-2" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputs.confirm_password,
                expression: "inputs.confirm_password"
              }
            ],
            staticClass: "input w-full",
            class: [
              _vm.inputs.confirm_password === "" ||
              _vm.inputs.confirm_password === null
                ? "input-empty"
                : ""
            ],
            attrs: {
              type: "password",
              placeholder: "repeat new password",
              tabindex: "2"
            },
            domProps: { value: _vm.inputs.confirm_password },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.resetPassword()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.inputs, "confirm_password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.confirm_password.length > 0
            ? _c(
                "div",
                { staticClass: "mt-2 flex" },
                [
                  _c("icon-custom", {
                    attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                    _vm._v(_vm._s(_vm.errors.confirm_password[0]))
                  ])
                ],
                1
              )
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "auth-footer--container" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary w-full",
          staticStyle: { height: "50px" },
          attrs: { tabindex: "3" },
          on: {
            click: function($event) {
              return _vm.resetPassword()
            }
          }
        },
        [
          !_vm.loading
            ? _c("span", { staticClass: "btn--text custom-text-bold" }, [
                _vm._v("Submit")
              ])
            : _c(
                "span",
                { staticClass: "btn--text flex items-center" },
                [
                  _c("feather-icon", {
                    staticClass: "loading h-4 w-4",
                    attrs: { icon: "LoaderIcon" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2" }, [
                    _vm._v("please wait...")
                  ])
                ],
                1
              )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-3 flex justify-center" },
        [
          _c("span", { staticStyle: { color: "#8097B1" } }, [
            _vm._v("Sign in instead?")
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "no-underline ml-1", attrs: { to: "/auth/login" } },
            [_vm._v("Sign in")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "auth-header--container" }, [
      _c("div", { staticClass: "auth-title" }, [
        _c("span", { staticClass: "auth-title--text" }, [
          _vm._v("Create new password")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "auth-subtitle mt-2" }, [
        _c("span", { staticClass: "auth-subtitle--text" }, [
          _vm._v("Please fill this form to continue")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex w-full" }, [
      _c("div", { staticClass: "w-1/2" }, [
        _c(
          "span",
          {
            staticClass:
              "uppercase font-medium text-xs text-spacing-md line-height-md"
          },
          [_vm._v("Password")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex w-full" }, [
      _c("div", { staticClass: "w-full" }, [
        _c(
          "span",
          {
            staticClass:
              "uppercase font-medium text-xs text-spacing-md line-height-md"
          },
          [_vm._v("Confirm Password")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/authenticationApi.js":
/*!************************************************!*\
  !*** ./resources/js/apis/authenticationApi.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "auth";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    authenticationApi_login: function authenticationApi_login(data) {
      var _this = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/login"),
        data: data
      }).then(function (_ref) {
        var data = _ref.data;

        _this.$notify({
          group: "notification",
          type: "success",
          title: "Success",
          text: data.message
        });

        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
        } else {
          _this.$notify({
            group: "notification",
            type: "error",
            title: "Failed",
            text: error.response.data.message
          });
        }

        return error;
      });
    },
    authenticationApi_register: function authenticationApi_register(data) {
      var _this2 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/register"),
        data: data
      }).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$notify({
          group: "notification",
          type: "success",
          title: "Success",
          text: data.message
        });

        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
          return error;
        } else {
          _this2.$notify({
            group: "notification",
            type: "error",
            title: "Failed",
            text: error.response.data.message
          });

          return error.response.data.message;
        }
      });
    },
    authenticationApi_inactiveUserApproval: function authenticationApi_inactiveUserApproval(id, approval) {
      var _this3 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/").concat(id, "/inactive-user-approval"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: {
          approval: approval
        }
      }).then(function (_ref3) {
        var data = _ref3.data;

        _this3.$notify({
          group: "notification",
          type: "success",
          title: "Success",
          text: data.message
        });

        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
          return error;
        } else {
          _this3.$notify({
            group: "notification",
            type: "error",
            title: "Failed",
            text: error.response.data.message
          });

          return error.response.data.message;
        }
      });
    },
    authenticationApi_logout: function authenticationApi_logout() {
      var _this4 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/logout"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        } // data: { token: token }

      }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
        } else {
          _this4.$notify({
            group: "notification",
            type: "error",
            title: "Failed",
            text: error.response.data.message
          });
        }

        return error;
      });
    },
    authenticationApi_forgotPassword: function authenticationApi_forgotPassword(data) {
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/forgot-password"),
        data: data
      }).then(function (_ref5) {
        var data = _ref5.data;
        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
        }

        return error;
      });
    },
    authenticationApi_resetPassword: function authenticationApi_resetPassword(data) {
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/reset-password"),
        data: data
      }).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      })["catch"](function (error) {
        if (typeof error.response === "undefined") {
          console.error(error);
        }

        return error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/Auth/ResetPassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/Auth/ResetPassword.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true& */ "./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19b2d40d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Auth/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/ResetPassword.vue?vue&type=template&id=19b2d40d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_19b2d40d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
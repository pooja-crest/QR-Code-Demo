(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  name: "Register",
  mixins: [_apis_authenticationApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
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
        zip: null
      },
      loading: false,
      show_error: false,
      submit_error: null,
      email_valid: false
    };
  },
  computed: {},
  watch: {
    "inputs.code": function inputsCode(value) {
      var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.email_valid = value.match(pattern);
    }
  },
  methods: {
    validateInput: function validateInput() {
      var is_valid = this.inputs.code && this.inputs.phone && this.inputs.distributor_name && this.inputs.customer_id && this.inputs.customer_name && this.inputs.street && this.inputs.city && this.inputs.state && this.inputs.zip;
      this.show_error = !is_valid;
      return is_valid;
    },
    signIn: function signIn() {
      var _this = this;

      if (this.validateInput() && this.email_valid) {
        this.submit_error = null;
        this.loading = true;
        this.authenticationApi_register(this.inputs).then(function (response) {
          console.error(response);

          if (!response.data) {
            _this.submit_error = response;
            return;
          }

          _this.$router.push("/auth/register-complete");
        })["finally"](function () {
          return _this.loading = false;
        });
      }
    },
    focusInput: function focusInput(inputRef) {
      // $refs is an object that holds the DOM references to your inputs
      this.$refs[inputRef].focus();
    }
  },
  mounted: function mounted() {
    this.focusInput('email');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "auth-input--container mt-6" }, [
      !!_vm.submit_error
        ? _c("div", { staticClass: "w-full flex flex-nowrap" }, [
            _c(
              "div",
              { staticClass: "mb-10 flex" },
              [
                _c("icon-custom", {
                  attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                  _vm._v("Error: " + _vm._s(_vm.submit_error))
                ])
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-nowrap" }, [
        _c("div", { staticClass: "w-full block px-4" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.code,
                  expression: "inputs.code"
                }
              ],
              ref: "email",
              staticClass: "input w-full",
              class: [!_vm.inputs.code ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "1" },
              domProps: { value: _vm.inputs.code },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "code", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.code
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Email can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.email_valid && _vm.inputs.code
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Please provide a valid email address")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-nowrap mt-8" }, [
        _c("div", { staticClass: "w-1/2 block px-4" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.phone,
                  expression: "inputs.phone"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.phone ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "3" },
              domProps: { value: _vm.inputs.phone },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "phone", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.phone
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Telephone number can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 block px-4" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.distributor_name,
                  expression: "inputs.distributor_name"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.distributor_name ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "4" },
              domProps: { value: _vm.inputs.distributor_name },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "distributor_name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.distributor_name
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Distributor name can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-nowrap mt-8" }, [
        _c("div", { staticClass: "w-1/2 block px-4" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.customer_id,
                  expression: "inputs.customer_id"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.customer_id ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "5" },
              domProps: { value: _vm.inputs.customer_id },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "customer_id", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.customer_id
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Customer account number can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 block px-4" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.customer_name,
                  expression: "inputs.customer_name"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.customer_name ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "6" },
              domProps: { value: _vm.inputs.customer_name },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "customer_name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.customer_name
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Customer name can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-nowrap mt-8" }, [
        _c("div", { staticClass: "w-full block px-4" }, [
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.street,
                  expression: "inputs.street"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.street ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "7" },
              domProps: { value: _vm.inputs.street },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "street", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.street
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Street can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full flex flex-nowrap mt-8" }, [
        _c("div", { staticClass: "w-1/2 block px-4" }, [
          _vm._m(7),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.city,
                  expression: "inputs.city"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.city ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "8" },
              domProps: { value: _vm.inputs.city },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "city", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.city
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("City can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/3 block pl-4 pr-2" }, [
          _vm._m(8),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.state,
                  expression: "inputs.state"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.state ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "9" },
              domProps: { value: _vm.inputs.state },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "state", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.state
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("State can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6 block pl-2 pr-4" }, [
          _vm._m(9),
          _vm._v(" "),
          _c("div", { staticClass: "w-full mt-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.inputs.zip,
                  expression: "inputs.zip"
                }
              ],
              staticClass: "input w-full",
              class: [!_vm.inputs.zip ? "input-empty" : ""],
              attrs: { type: "text", tabindex: "10" },
              domProps: { value: _vm.inputs.zip },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.signIn()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.inputs, "zip", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.show_error && !_vm.inputs.zip
              ? _c(
                  "div",
                  { staticClass: "mt-2 flex" },
                  [
                    _c("icon-custom", {
                      attrs: { classes: "fill-danger h-4 w-4", icon: "warning" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger text-sm ml-2" }, [
                      _vm._v("Zip can't be empty")
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "auth-footer--container px-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary w-full",
          staticStyle: { height: "50px" },
          attrs: { tabindex: "11" },
          on: {
            click: function($event) {
              return _vm.signIn()
            }
          }
        },
        [
          !_vm.loading
            ? _c("span", { staticClass: "btn--text custom-text-bold" }, [
                _vm._v("Create New Account")
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
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mt-3 flex justify-center" },
      [
        _c("span", { staticStyle: { color: "#8097B1" } }, [_vm._v("Back to")]),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "no-underline ml-1", attrs: { to: "/auth/login" } },
          [_vm._v("Login")]
        )
      ],
      1
    )
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
          _vm._v("Request Login Access")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "auth-subtitle mt-4" }, [
        _c(
          "span",
          {
            staticClass: "auth-subtitle--text",
            staticStyle: { "font-size": "12px" }
          },
          [
            _vm._v(
              "\n        Existing customers, to request access to our inventory system, please submit the form below. If approved, we’ll email your login details within 3 business days.\n      "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c(
        "span",
        {
          staticClass:
            "uppercase font-medium text-xs text-spacing-md line-height-md"
        },
        [_vm._v("Email")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c(
        "span",
        {
          staticClass:
            "uppercase font-medium text-xs text-spacing-md line-height-md"
        },
        [_vm._v("Telephone Number")]
      )
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
          [_vm._v("Distributor name")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c(
        "span",
        {
          staticClass:
            "uppercase font-medium text-xs text-spacing-md line-height-md"
        },
        [_vm._v("Customer Account Number")]
      )
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
          [_vm._v("Customer name")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c(
        "span",
        {
          staticClass:
            "uppercase font-medium text-xs text-spacing-md line-height-md"
        },
        [_vm._v("Street")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full" }, [
      _c(
        "span",
        {
          staticClass:
            "uppercase font-medium text-xs text-spacing-md line-height-md"
        },
        [_vm._v("City")]
      )
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
          [_vm._v("State")]
        )
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
          [_vm._v("Zip")]
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

/***/ "./resources/js/views/pages/Auth/Register.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/Auth/Register.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=9a5db120& */ "./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=9a5db120& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Auth/Register.vue?vue&type=template&id=9a5db120&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_9a5db120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
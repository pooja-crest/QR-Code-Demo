(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/authenticationApi */ "./resources/js/apis/authenticationApi.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavbarCustomData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarCustomData */ "./resources/js/components/NavbarCustomData.js");
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
  name: "NavbarCustom",
  mixins: [_apis_authenticationApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      active_link: false,
      loadings: {
        notifications: false
      },
      scrollbarSettings: {
        maxScrollbarLength: 30
      },
      notification_icons: {
        transactions: "coins",
        billing: "coins",
        support: "coins"
      },
      menus: [],
      logoRoute: "/",
      notifications: {
        totals: {
          unread: 0,
          read: 0
        },
        data: {}
      },
      notifications_filter: {
        page: 1,
        load_more_button: true
      }
    };
  },
  computed: {
    profilePicture: function profilePicture() {
      return "user.png";
    }
  },
  methods: {
    elapsedTime: function elapsedTime(datetime) {
      var x = new Date(datetime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? " Years " : " Year ") + "ago";
      } else if (days > 0) {
        return days + (days > 1 ? " Days " : " Day ") + "ago";
      } else if (hours > 0) {
        return hours + (hours > 1 ? " Hrs " : " Hour ") + "ago";
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? " Mins " : " Min ") + "ago";
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? "".concat(seconds, " sec ago") : "just now");
      }

      return "Just Now";
    },
    loadMoreNotifications: function loadMoreNotifications() {
      var _this = this;

      this.loadings.notifications = true;
      this.notifications_filter.page++;
      this.notifications_getAll({
        page: this.notifications_filter.page
      }).then(function (_ref) {
        var data = _ref.data;
        data.forEach(function (notification) {
          _this.notifications.data.push(notification);
        });

        if (data.length < 10) {
          _this.notifications_filter.load_more_button = false;
        }
      })["finally"](function () {
        return _this.loadings.notifications = false;
      });
    },
    signOut: function signOut() {
      var _this2 = this;

      this.authenticationApi_logout().then(function (_ref2) {
        var data = _ref2.data;
        _this2.menus = [];
        localStorage.removeItem("upwork_brandon_cohen_orders");
        _this2.$store.state.activeUser = {};

        _this2.$router.push("/auth/login")["catch"](function () {});
      });
    }
  },
  created: function created() {
    if (!this.authenticatedUser) {
      this.menus = [];
      return;
    }

    this.logoRoute = "/orders";

    if (["admin"].includes(this.authenticatedUser.role)) {
      this.menus = Object(_NavbarCustomData__WEBPACK_IMPORTED_MODULE_2__["admin"])();
    } else if (["purchaser"].includes(this.authenticatedUser.role)) {
      this.menus = Object(_NavbarCustomData__WEBPACK_IMPORTED_MODULE_2__["adminPurchaser"])();
    } else if (["viewer"].includes(this.authenticatedUser.role)) {
      this.menus = Object(_NavbarCustomData__WEBPACK_IMPORTED_MODULE_2__["viewer"])();
    } // if (["admin","purchaser"].includes(this.authenticatedUser.role)) {
    // 	this.logoRoute = "/orders";
    // 	this.menus.push({
    // 		url: "/orders",
    // 		name: "Purchase Orders",
    // 		slug: "orders",
    // 		icon: "dashboard",
    // 	});
    // 	this.menus.push({
    // 		url: "/items",
    // 		name: "Items",
    // 		slug: "Items",
    // 		icon: "dashboard",
    // 	});
    // 	this.menus.push({
    // 		url: "/vendors",
    // 		name: "Vendors",
    // 		slug: "vendors",
    // 		icon: "user",
    // 	});
    // 	this.menus.push({
    // 		url: "/shipments",
    // 		name: "Shipments",
    // 		slug: "shipments",
    // 		icon: "dashboard",
    // 	});
    // 	this.menus.push({
    // 		url: "/receives",
    // 		name: "Receive",
    // 		slug: "receives",
    // 		icon: "dashboard",
    // 	});
    // 	this.menus.unshift({
    // 		url: "/new-order",
    // 		name: "New Order",
    // 		slug: "new-order",
    // 		icon: "plus",
    // 	});
    // }
    // if (["admin"].includes(this.authenticatedUser.role)) {
    //         this.menus.push({
    //             url: "/purchased",
    //             name: "Purchased",
    //             slug: "purchased",
    //             icon: "dashboard",
    //         });
    //     this.menus.push({
    // 		url: "/users",
    // 		name: "Users",
    // 		slug: "users",
    // 		icon: "user",
    // 	});
    // }
    // if (["viewer"].includes(this.authenticatedUser.role)) {
    // 	this.logoRoute = "/orders";
    // 	this.menus.push({
    // 		url: "/orders",
    // 		name: "Purchase Orders",
    // 		slug: "orders",
    // 		icon: "dashboard",
    // 	});
    // }


    if (["receiving"].includes(this.authenticatedUser.role)) {
      this.logoRoute = "/receives";
      this.menus.push({
        url: "/receives",
        name: "Receive",
        slug: "receives",
        icon: "dashboard"
      });
    }

    if (["display"].includes(this.authenticatedUser.role)) {
      this.logoRoute = "/display-shipments";
      this.menus.push({
        url: "/display-shipments",
        name: "Shipments",
        slug: "display-shipments",
        icon: "dashboard"
      });
    }

    if (["order_tracking"].includes(this.authenticatedUser.role)) {
      this.logoRoute = "/orders-status-report";
      this.menus.push({
        url: "/orders-status-report",
        name: "Order Status Report",
        slug: "orders-status-report",
        icon: "dashboard"
      });
      this.menus.push({
        url: "/shipments",
        name: "Shipments",
        slug: "shipments",
        icon: "dashboard"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavbarCustom_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/NavbarCustom.vue */ "./resources/js/components/NavbarCustom.vue");
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
  name: "Main",
  components: {
    NavbarCustom: _components_NavbarCustom_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-area[data-v-019044fa] {\n  margin-bottom: 2rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "navbarcustom", staticClass: "flex navbar-custom" }, [
    _c(
      "div",
      { staticClass: "navbar-custom-title hidden lg:inline" },
      [
        _c(
          "router-link",
          {
            staticClass: "navbar-custom-title--text",
            attrs: { to: this.logoRoute, exact: "" }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @assets/images/logo/elco_logo_vertical.png */ "./resources/assets/images/logo/elco_logo_vertical.png"),
                alt: "",
                height: "28"
              }
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "navbar-custom-menu flex flex-1 lg:ml-auto ml-4 lg:justify-center justify-start"
      },
      _vm._l(_vm.menus, function(menu, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "navbar-custom-menu--container mr-8",
            attrs: { index: index }
          },
          [
            _c(
              "router-link",
              {
                staticClass: "md:pr-2 pr-0",
                class: [{ "router-link-active": _vm.active_link }],
                attrs: { to: menu.url, exact: "" }
              },
              [
                _c("icon-custom", {
                  attrs: {
                    classes: "navbar-custom-menu--icon h-6 w-6",
                    icon: menu.icon
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "navbar-custom-menu--text relative lg:inline hidden bottom-6px ml-10px "
                  },
                  [_vm._v(_vm._s(menu.name))]
                ),
                _vm._v(" "),
                _vm._t("default")
              ],
              2
            )
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "navbarcustom_profile",
        staticClass: "navbar-custom-me flex items-center justify-end"
      },
      [
        false
          ? undefined
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticatedUser
          ? _c(
              "dropdown-custom",
              {
                key: _vm.authenticatedUser.updated_at,
                staticClass: "cursor-pointer",
                attrs: {
                  "custom-content": "",
                  "trigger-click": "",
                  "close-on-click": ""
                }
              },
              [
                _c("div", { staticClass: "image-container" }, [
                  _c("img", {
                    staticClass: "rounded-full",
                    attrs: {
                      src: "/images/" + _vm.profilePicture,
                      alt: "profile-picture",
                      width: "40",
                      height: "40"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "dropdown-menu-custom",
                  {
                    staticClass: "profile-dropdown--container fixed",
                    staticStyle: { "min-width": "210px", top: "80px" },
                    attrs: { "caret-styles": "right:16px;" }
                  },
                  [
                    _c(
                      "ul",
                      [
                        _c("li", { staticClass: "flex px-10px" }, [
                          _c("span", [
                            _c("div", [
                              _vm._v(_vm._s(_vm.authenticatedUser.name))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "letter-spacing-lg text-xs text-secondary"
                              },
                              [_vm._v(_vm._s(_vm.authenticatedUser.code))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "letter-spacing-lg text-xs text-secondary capitalize"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.authenticatedUser.role.replace("_", " ")
                                  )
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.authenticatedUser.role == "user"
                          ? [
                              _c("divider-custom", { staticClass: "mt-4" }),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "flex px-10px py-10px" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "cursor-pointer hover:text-primary",
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push(
                                            "/change_password"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Change Password")]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("divider-custom", { staticClass: "mt-4" }),
                        _vm._v(" "),
                        _c("li", { staticClass: "flex px-10px py-10px" }, [
                          _c(
                            "span",
                            {
                              staticClass: "cursor-pointer hover:text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.signOut()
                                }
                              }
                            },
                            [_vm._v("Sign Out")]
                          )
                        ])
                      ],
                      2
                    )
                  ]
                )
              ],
              1
            )
          : _c(
              "div",
              { staticClass: "flex flex-nowrap" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-custom-title--text",
                    staticStyle: { "text-decoration": "none" },
                    attrs: { to: "/auth/login", exact: "" }
                  },
                  [
                    _c("button", { staticClass: "btn btn-outline-primary" }, [
                      _c(
                        "span",
                        {
                          staticClass: "btn--text custom-text-bold",
                          staticStyle: {}
                        },
                        [_vm._v("\n\t\t\t\t\t\tLogin\n\t\t\t\t\t")]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-custom-title--text ml-4",
                    staticStyle: { "text-decoration": "none" },
                    attrs: { to: "/auth/register", exact: "" }
                  },
                  [
                    _c("button", { staticClass: "btn btn-outline-primary" }, [
                      _c(
                        "span",
                        {
                          staticClass: "btn--text custom-text-bold",
                          staticStyle: {}
                        },
                        [_vm._v("\n\t\t\t\t\t\tRegister\n\t\t\t\t\t")]
                      )
                    ])
                  ]
                )
              ],
              1
            )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "layout--main" },
    [
      _c("navbar-custom"),
      _vm._v(" "),
      _c("div", { staticClass: "content-area" }, [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/logo/elco_logo_vertical.png":
/*!*************************************************************!*\
  !*** ./resources/assets/images/logo/elco_logo_vertical.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/elco_logo_vertical.png?d670786bd1a2524ffcdee4cf80161dbd";

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

/***/ "./resources/js/components/NavbarCustom.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/NavbarCustom.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true& */ "./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true&");
/* harmony import */ var _NavbarCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarCustom.vue?vue&type=script&lang=js& */ "./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavbarCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1eb2030c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavbarCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarCustom.vue?vue&type=template&id=1eb2030c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarCustom_vue_vue_type_template_id_1eb2030c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NavbarCustomData.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavbarCustomData.js ***!
  \*****************************************************/
/*! exports provided: adminPurchaser, admin, viewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminPurchaser", function() { return adminPurchaser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewer", function() { return viewer; });
var adminPurchaser = function adminPurchaser() {
  var menuArr = [{
    url: "/new-order",
    name: "New Order",
    slug: "new-order",
    icon: "plus"
  }, {
    url: "/orders",
    name: "Purchase Orders",
    slug: "orders",
    icon: "dashboard"
  }, {
    url: "/items",
    name: "Items",
    slug: "Items",
    icon: "dashboard"
  }, {
    url: "/vendors",
    name: "Vendors",
    slug: "vendors",
    icon: "user"
  }, {
    url: "/shipments",
    name: "Shipments",
    slug: "shipments",
    icon: "dashboard"
  }, {
    url: "/receives",
    name: "Receive",
    slug: "receives",
    icon: "dashboard"
  }];
  return menuArr;
};

var admin = function admin() {
  var menuArr = [{
    url: "/purchased",
    name: "Purchased",
    slug: "purchased",
    icon: "dashboard"
  }, {
    url: "/users",
    name: "Users",
    slug: "users",
    icon: "user"
  }];
  return adminPurchaser().concat(menuArr);
};

var viewer = function viewer() {
  var menuArr = [{
    url: "/orders",
    name: "Purchase Orders",
    slug: "orders",
    icon: "dashboard"
  }];
  return menuArr;
};



/***/ }),

/***/ "./resources/js/views/layouts/main/Main.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/layouts/main/Main.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=019044fa&scoped=true& */ "./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& */ "./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "019044fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=style&index=0&id=019044fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_019044fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=019044fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/main/Main.vue?vue&type=template&id=019044fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_019044fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
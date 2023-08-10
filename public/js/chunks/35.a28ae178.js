(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_productApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/productApi */ "./resources/js/apis/productApi.js");
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_customerApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/customerApi */ "./resources/js/apis/customerApi.js");
/* harmony import */ var _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/authenticationApi */ "./resources/js/apis/authenticationApi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserList",
  mixins: [_apis_userApi__WEBPACK_IMPORTED_MODULE_2__["default"], _apis_customerApi__WEBPACK_IMPORTED_MODULE_3__["default"], _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_4__["default"], _apis_productApi__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          products: false,
          logs: false
        },
        edit_product: false,
        search_active: false
      },
      datas: {
        products: [],
        logs: []
      },
      inputs: {
        filters: {
          search: "",
          status: null
        },
        file_upload: {
          type: null,
          name: null
        },
        user: {
          selected_supplier: null,
          title: "",
          description: "",
          item_no: "",
          quantity: "",
          location: "",
          lead_time: "",
          image: "",
          label: "",
          qr_code: ""
        }
      },
      paginations: {
        first_page: 1,
        current_page: 1,
        last_page: 1
      },
      inactive_user_details: null,
      show_modal_input_product: false,
      show_modal_inactive_product: false
    };
  },
  watch: {
    show_modal_inactive_product: function show_modal_inactive_product(value) {
      if (!value) this.inactive_user_details = null;
    },
    "inputs.filters.status": function inputsFiltersStatus(value) {
      this.paginations.current_page = 1;
      this.getProductsDatas();
    },
    show_modal_input_product: function show_modal_input_product(value) {
      if (value == false) {
        this.resetUserInputs();
      }
    }
  },
  computed: {
    allowSubmitAddUser: function allowSubmitAddUser() {
      if (this.inputs.user.code != "" && this.inputs.user.name != "" && this.inputs.user.email != "" && this.inputs.user.contact_person != "" && this.inputs.user.contact_number != "" && this.inputs.user.role != "") {
        return true;
      }

      return false;
    }
  },
  methods: {
    deleteUser: function deleteUser(user) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete ".concat(user.code),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.conditions.edit_product = false;

          var loading = _this.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this.userApi_delete(user.id).then(function (_ref) {
            var data = _ref.data;
            _this.show_modal_input_product = false;

            _this.resetUserInputs();

            _this.getProductsDatas();
          })["finally"](function () {
            return loading.hide();
          });
        }
      });
    },
    getProductsDatas: function getProductsDatas() {
      var _this2 = this;

      this.conditions.loadings.users = true;
      var params = {
        page: this.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status
      };
      this.getAll(params).then(function (_ref2) {
        var data = _ref2.data;
        _this2.datas.users = data.data;
        _this2.paginations.last_page = data.last_page;
      })["finally"](function () {
        return _this2.conditions.loadings.users = false;
      });
    },
    goToPage: function goToPage(page_number) {
      this.paginations.current_page = page_number;
      this.getProductsDatas();
    },
    resetUserInputs: function resetUserInputs() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.inputs.user = {
        selected_user: null,
        code: "",
        name: "",
        email: "",
        contact_person: "",
        contact_number: "",
        password: "",
        role: "viewer"
      };

      if (user != null) {
        this.inputs.user.selected_user = user.id;
        this.inputs.user.code = user.code;
        this.inputs.user.name = user.name;
        this.inputs.user.email = user.email;
        this.inputs.user.contact_person = user.contact_person;
        this.inputs.user.contact_number = user.contact_number;
        this.inputs.user.role = user.role;
      }
    },
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.paginations.current_page = 1;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
      }

      this.getProductsDatas();
    },
    showInputProductModal: function showInputProductModal() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.show_modal_input_product = true;
      this.conditions.edit_product = false;
      this.resetUserInputs(user);

      if (user != null) {
        this.conditions.edit_product = true;
      }
    },
    showInactiveUserDetail: function showInactiveUserDetail(user) {
      if (!user.register_details) {
        this.$notify({
          group: "notification",
          type: "error",
          title: "Error",
          text: "Cannot find registration details"
        });
        return;
      }

      this.inactive_user_details = JSON.parse(user.register_details);
      this.inactive_user_details.id = user.id;
      this.show_modal_inactive_product = true;
    },
    submitAddUser: function submitAddUser() {
      var _this3 = this;

      this.conditions.edit_product = false;
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.userApi_create(this.inputs.user).then(function (response) {
        if (!response.success) {
          _this3.$notify({
            group: "notification",
            type: "warn",
            title: "Warning",
            text: response.message
          });
        } else {
          _this3.show_modal_input_product = false;

          _this3.resetUserInputs();

          _this3.getProductsDatas();

          _this3.$notify({
            group: "notification",
            type: "success",
            title: "success",
            text: response.message
          });
        }
      })["finally"](function () {
        return loading.hide();
      });
    },
    submitUpdateUser: function submitUpdateUser() {
      var _this4 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.userApi_update(this.inputs.user.selected_user, this.inputs.user).then(function (response) {
        if (!response.success) {
          _this4.$notify({
            group: "notification",
            type: "warn",
            title: "Warning",
            text: response.message
          });
        } else {
          _this4.conditions.edit_product = false;
          _this4.show_modal_input_product = false;

          _this4.resetUserInputs();

          _this4.getProductsDatas();

          _this4.$notify({
            group: "notification",
            type: "success",
            title: "success",
            text: response.message
          });
        }
      })["finally"](function () {
        return loading.hide();
      });
    },
    inactiveUserApproval: function inactiveUserApproval() {
      var _this5 = this;

      var approval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.authenticationApi_inactiveUserApproval(this.inactive_user_details.id, approval).then(function (_ref3) {
        var data = _ref3.data;
        _this5.show_modal_inactive_product = false;

        _this5.getProductsDatas();
      })["finally"](function () {
        return loading.hide();
      });
    },
    prepareForUpload: function prepareForUpload(type) {
      this.inputs.file_upload.type = type;
      this.$refs.uploadFile.click();
    },
    getFileExtension: function getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    processUploadFile: function processUploadFile() {
      var _this6 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      var uploadApiHandler = this.inputs.file_upload.type == "billing-shipping" ? this.customerApi_handleUploadBillingAndShipping() : this.customerApi_handleUploadShipping();
      uploadApiHandler.then(function (response) {
        if (response.success) {
          _this6.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: response.message
          });
        }
      })["finally"](function () {
        loading.hide();

        _this6.resetUploadFile();
      });
    },
    resetUploadFile: function resetUploadFile() {
      this.formData = new FormData();
      this.$refs.uploadFile.type = "text";
      this.$refs.uploadFile.type = "file";
      this.inputs.file_upload.name = null;
      this.inputs.file_upload.type = null;
    },
    onFileChanged: function onFileChanged(e) {
      var file = this.$refs.uploadFile.files[0];

      if (!file) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "No file chosen!"
        });
        return;
      }

      var allowed_files = ["xlsx", "csv", "xls"];

      if (!allowed_files.includes(this.getFileExtension(file.name))) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "This file is not supported, only upload .xls .xlsx or .csv"
        });
        return;
      }

      this.formData = new FormData();
      this.formData.append("file", file);
      this.inputs.file_upload.name = file.name;
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (["admin"].includes(this.authenticatedUser.role)) {
              _context.next = 4;
              break;
            }

            this.$router.push("/");
            _context.next = 6;
            break;

          case 4:
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getProductsDatas());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.products__header {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.products__header__filter {\n  width: 50%;\n}\n.products__header__action {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.products__content {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin: 16px 0px;\n}\n.products__table {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.products__table__header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.products__table__header__item {\n  display: -webkit-box;\n  display: flex;\n  font-weight: 500;\n}\n.products__table__content__item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.role-input {\n  padding: 7px 8px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2& ***!
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
  return _c(
    "div",
    { staticClass: "content-compact--container" },
    [
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _vm.authenticatedUser.role == "admin"
            ? _c(
                "card-custom",
                {
                  staticClass: "mb-10",
                  attrs: {
                    title: "Actions",
                    "content-class": "mt-4",
                    alias: "message3"
                  }
                },
                [
                  !_vm.conditions.loadings.users
                    ? _c("div", { staticClass: " w-full flex" }, [
                        !_vm.inputs.file_upload.name
                          ? _c("div", { staticClass: "flex mr-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary ",
                                  on: {
                                    click: function($event) {
                                      return _vm.showInputProductModal()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "btn--text custom-text-bold"
                                    },
                                    [_vm._v("Add Product")]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { class: ["w-full flex"] },
                          [
                            _c("input", {
                              ref: "uploadFile",
                              staticClass: "hidden",
                              attrs: {
                                type: "file",
                                accept:
                                  ".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                              },
                              on: { change: _vm.onFileChanged }
                            }),
                            _vm._v(" "),
                            !_vm.inputs.file_upload.name
                              ? [
                                  _c("div", {
                                    staticClass: "flex justify-between"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "flex justify-end invisible"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-primary px-4",
                                          on: {
                                            click: function($event) {
                                              return _vm.prepareForUpload(
                                                "billing-shipping"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn--text custom-text-bold"
                                            },
                                            [
                                              _vm._v(
                                                "Upload Default Billing And Shipping"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex ml-2 invisible" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-primary px-4",
                                          on: {
                                            click: function($event) {
                                              return _vm.prepareForUpload(
                                                "shippings"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn--text custom-text-bold"
                                            },
                                            [
                                              _vm._v(
                                                "Upload Additional Shippings"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              : [
                                  _c("div", { staticClass: "flex-1 flex" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-primary w-full mr-2",
                                        on: {
                                          click: function($event) {
                                            return _vm.prepareForUpload(
                                              _vm.inputs.file_upload.type
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "btn--text custom-text-bold"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.inputs.file_upload.name
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex justify-end" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-danger w-1/3 mr-2",
                                          on: {
                                            click: function($event) {
                                              return _vm.resetUploadFile()
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn--text custom-text-bold"
                                            },
                                            [_vm._v("cancel")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary w-1/3",
                                          on: {
                                            click: function($event) {
                                              return _vm.processUploadFile()
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn--text custom-text-bold"
                                            },
                                            [_vm._v("Submit")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                          ],
                          2
                        )
                      ])
                    : _c("div", {
                        staticClass:
                          "loading-placeholder loading-placeholder__rectangle",
                        staticStyle: { height: "40px" }
                      })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("card-custom", { attrs: { title: "Search " } }, [
            _c("div", { staticClass: "flex flex-col w-full" }, [
              _c("div", { staticClass: "w-full mb-2 mt-4 flex" }, [
                _c("div", { staticClass: "flex flex-1" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.inputs.filters.search,
                        expression: "inputs.filters.search"
                      }
                    ],
                    staticClass: "input w-full",
                    class: [
                      _vm.inputs.filters.search == "" ? "input-empty" : ""
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "Search Username or Name"
                    },
                    domProps: { value: _vm.inputs.filters.search },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.searchData()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.inputs.filters,
                          "search",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", {}, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5",
                      class: [
                        _vm.inputs.filters.search == "" ? "disabled" : ""
                      ],
                      on: {
                        click: function($event) {
                          return _vm.searchData()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [[_vm._v("Search")]],
                        2
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.conditions.search_active
                  ? _c("div", {}, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-danger ml-5",
                          on: {
                            click: function($event) {
                              return _vm.searchData(false)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn--text custom-text-bold" },
                            [[_vm._v("Clear")]],
                            2
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full mb-2 mt-8 flex hidden" }, [
                _c(
                  "div",
                  { staticClass: "flex w-1/2 items-center justify-start" },
                  [
                    _c("div", { staticClass: "w-1/6 mr-2" }, [
                      _c("span", [_vm._v("Filter Status")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-1/3 mr-2" })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("card-custom", { staticClass: "mt-10" }, [
            _c("div", { staticClass: "users" }, [
              _c("div", { staticClass: "users__content" }, [
                _c("div", { staticClass: "users__table" }, [
                  _c(
                    "div",
                    { staticClass: "users__table__header" },
                    [
                      !_vm.conditions.loadings.users
                        ? [
                            _c(
                              "p",
                              {
                                staticClass: "users__table__header__item w-1/4"
                              },
                              [_vm._v("Username")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "users__table__header__item w-1/4"
                              },
                              [_vm._v("Name")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "users__table__header__item w-1/4"
                              },
                              [_vm._v("Role")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "users__table__header__item w-1/4 justify-center"
                              },
                              [_vm._v("Actions")]
                            )
                          ]
                        : _c("p", {
                            staticClass:
                              "users__table__header__item w-full loading-placeholder loading-placeholder__rectangle",
                            staticStyle: { height: "30px" }
                          })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "users__table__content" },
                    [
                      !_vm.conditions.loadings.users
                        ? [
                            _vm.datas.users.length > 0
                              ? _vm._l(_vm.datas.users, function(user, index) {
                                  return _c(
                                    "div",
                                    {
                                      key: index,
                                      staticClass:
                                        "users__table__content__item",
                                      class: {
                                        "text-danger": user.status == "inactive"
                                      }
                                    },
                                    [
                                      _c("p", { staticClass: "w-1/4" }, [
                                        _vm._v(
                                          _vm._s(
                                            user.code == null ? "-" : user.code
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "w-1/4" }, [
                                        _vm._v(_vm._s(user.name))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "w-1/4 uppercase" },
                                        [
                                          _vm._v(
                                            _vm._s(user.role.replace("_", " "))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "w-1/4 flex justify-center"
                                        },
                                        [
                                          user.status == "active"
                                            ? _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-primary p-1 flex items-center justify-center",
                                                  staticStyle: {
                                                    "min-width": "initial"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.showInputProductModal(
                                                        user
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "btn--text custom-text-bold flex items-center justify-center"
                                                    },
                                                    [
                                                      _c("icon-custom", {
                                                        attrs: {
                                                          icon: "edit",
                                                          classes:
                                                            "pr-0 h-4 w-4"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-primary p-1 flex items-center justify-center",
                                                  staticStyle: {
                                                    "min-width": "initial"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.showInactiveUserDetail(
                                                        user
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "btn--text custom-text-bold flex items-center justify-center"
                                                    },
                                                    [
                                                      _c("feather-icon", {
                                                        attrs: {
                                                          icon: "EyeIcon",
                                                          svgClasses: "h-4 w-4"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                          _vm._v(" "),
                                          user.id != _vm.authenticatedUser.id
                                            ? _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-danger p-1 flex items-center justify-center ml-2",
                                                  staticStyle: {
                                                    "min-width": "initial"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteUser(
                                                        user
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "btn--text custom-text-bold flex items-center justify-center"
                                                    },
                                                    [
                                                      _c("icon-custom", {
                                                        attrs: {
                                                          icon: "trash",
                                                          classes:
                                                            "pr-0 h-4 w-4"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            : _c("button", {
                                                staticClass:
                                                  "btn btn-outline-danger p-1 flex items-center justify-center ml-6 invisible",
                                                staticStyle: {
                                                  "min-width": "initial"
                                                }
                                              })
                                        ]
                                      )
                                    ]
                                  )
                                })
                              : _c(
                                  "div",
                                  {
                                    staticClass: "users__table__content__item"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "w-full flex justify-center"
                                      },
                                      [_vm._v("No data found.")]
                                    )
                                  ]
                                ),
                            _vm._v(" "),
                            _c("divider-custom"),
                            _vm._v(" "),
                            !_vm.conditions.loadings.users
                              ? _c(
                                  "div",
                                  { staticClass: "table-custom--footer" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "w-1/2 flex justify-start"
                                      },
                                      [
                                        _vm.paginations.current_page >
                                        _vm.paginations.first_page
                                          ? _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-outline-primary w-1/5 mr-4",
                                                on: {
                                                  click: function($event) {
                                                    _vm.goToPage(
                                                      parseInt(
                                                        _vm.paginations
                                                          .current_page
                                                      ) - 1
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("feather-icon", {
                                                  attrs: {
                                                    icon: "ChevronLeftIcon",
                                                    svgClasses: "h-4 w-4"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "btn--text custom-text-bold"
                                                  },
                                                  [_vm._v("Previous")]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.paginations.current_page <
                                    _vm.paginations.last_page
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "w-1/2 flex justify-end"
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-outline-primary w-1/5",
                                                on: {
                                                  click: function($event) {
                                                    _vm.goToPage(
                                                      parseInt(
                                                        _vm.paginations
                                                          .current_page
                                                      ) + 1
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "btn--text custom-text-bold"
                                                  },
                                                  [_vm._v("Next")]
                                                ),
                                                _vm._v(" "),
                                                _c("feather-icon", {
                                                  attrs: {
                                                    icon: "ChevronRightIcon",
                                                    svgClasses: "h-4 w-4"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
                          ]
                        : _vm._l(5, function(i) {
                            return _c("div", {
                              key: i,
                              staticClass:
                                "users__table__content__item loading-placeholder loading-placeholder__rectangle my-1",
                              staticStyle: { height: "30px" }
                            })
                          })
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_input_product",
            title: _vm.conditions.edit_product ? "Edit product" : "Add product",
            "content-width": "1000",
            "content-height": "auto"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _c("div", { staticClass: "w-full block" }, [
              _c(
                "div",
                {
                  staticClass: "tablecustom-content--container w-full flex mt-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12 mr-2" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Username")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.code,
                              expression: "inputs.user.code"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.code == "" ? "input-empty" : ""
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "User code",
                            disabled: _vm.conditions.edit_product
                          },
                          domProps: { value: _vm.inputs.user.code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "code",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Name")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.name,
                              expression: "inputs.user.name"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.name == "" ? "input-empty" : ""
                          ],
                          attrs: { type: "text", placeholder: "Name" },
                          domProps: { value: _vm.inputs.user.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tablecustom-content--container w-full flex mt-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12 mr-2" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Email")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.email,
                              expression: "inputs.user.email"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.email == "" ? "input-empty" : ""
                          ],
                          attrs: { type: "email", placeholder: "Email" },
                          domProps: { value: _vm.inputs.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Contact person")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.contact_person,
                              expression: "inputs.user.contact_person"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.contact_person == ""
                              ? "input-empty"
                              : ""
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Contact person"
                          },
                          domProps: { value: _vm.inputs.user.contact_person },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "contact_person",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tablecustom-content--container w-full flex mt-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12 mr-2" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Phone")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.contact_number,
                              expression: "inputs.user.contact_number"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.contact_number == ""
                              ? "input-empty"
                              : ""
                          ],
                          attrs: { type: "text", placeholder: "Phone" },
                          domProps: { value: _vm.inputs.user.contact_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "contact_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-6/12" },
                    [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                          },
                          [_vm._v("Password")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.user.password,
                              expression: "inputs.user.password"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.user.password == "" ? "input-empty" : ""
                          ],
                          attrs: {
                            type: "password",
                            placeholder: "Type password"
                          },
                          domProps: { value: _vm.inputs.user.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.user,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.authenticatedUser.role == "admin"
                ? _c(
                    "div",
                    {
                      staticClass:
                        "tablecustom-content--container w-full flex mt-4"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "tablecustom-content--content w-6/12" },
                        [
                          _c("div", { staticClass: "w-full block" }, [
                            _c("div", { staticClass: "w-full" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "uppercase font-medium text-xs text-spacing-md line-height-md text-color-secondary"
                                },
                                [_vm._v("Role")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "w-full mt-2" })
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "footer" }, [
            _c("div", { staticClass: "w-full flex justify-end" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function($event) {
                      _vm.show_modal_input_product = false
                      _vm.resetUserInputs()
                    }
                  }
                },
                [
                  _c("span", { staticClass: "btn--text custom-text-bold" }, [
                    _vm._v("Cancel")
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.allowSubmitAddUser && !_vm.conditions.edit_product
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5",
                      on: {
                        click: function($event) {
                          return _vm.submitAddUser()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Add user")]
                      )
                    ]
                  )
                : _vm.allowSubmitAddUser
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5",
                      on: {
                        click: function($event) {
                          return _vm.submitUpdateUser()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Update user")]
                      )
                    ]
                  )
                : _c(
                    "button",
                    { staticClass: "btn btn-primary ml-5 disabled" },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [
                          !_vm.conditions.edit_product
                            ? [_vm._v("Add user")]
                            : [_vm._v("Update user")]
                        ],
                        2
                      )
                    ]
                  )
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex" }, [
      _c("div", { staticClass: "w-full page-title--container" }, [
        _c("span", { staticClass: "page-title--text" }, [
          _vm._v("Product List")
        ])
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

/***/ "./resources/js/apis/customerApi.js":
/*!******************************************!*\
  !*** ./resources/js/apis/customerApi.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "customers";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    customerApi_getOne: function customerApi_getOne() {
      var _this = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-one"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      })["catch"](function (error) {
        _this.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    customerApi_getForFilter: function customerApi_getForFilter() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-for-filter"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      })["catch"](function (error) {
        _this2.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    customerApi_handleUpload: function customerApi_handleUpload() {
      var _this3 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/handle-upload"), this.formData, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        return data;
      })["catch"](function (error) {
        _this3.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    customerApi_handleUploadShipping: function customerApi_handleUploadShipping() {
      var _this4 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/handle-upload-shipping"), this.formData, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      })["catch"](function (error) {
        _this4.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    customerApi_handleUploadBillingAndShipping: function customerApi_handleUploadBillingAndShipping() {
      var _this5 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/handle-upload-billing-shipping"), this.formData, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        return data;
      })["catch"](function (error) {
        _this5.globalFunction_handleAxiosError(error, true);

        return error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/productApi.js":
/*!*****************************************!*\
  !*** ./resources/js/apis/productApi.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "products";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    create: function create() {
      var _this = this;

      var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: form_data
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      })["catch"](function (error) {
        _this.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    getAll: function getAll() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      })["catch"](function (error) {
        _this2.globalFunction_handleAxiosError(error);

        return error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/Products/List.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/Products/List.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=63d941a2& */ "./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Products/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=63d941a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Products/List.vue?vue&type=template&id=63d941a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_63d941a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
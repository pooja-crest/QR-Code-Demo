(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
/* harmony import */ var _apis_supplierApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/supplierApi */ "./resources/js/apis/supplierApi.js");
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_customerApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/customerApi */ "./resources/js/apis/customerApi.js");
/* harmony import */ var _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/apis/authenticationApi */ "./resources/js/apis/authenticationApi.js");
/* harmony import */ var _Helpers_validationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Helpers/validationHelper */ "./resources/js/Helpers/validationHelper.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductList",
  mixins: [_apis_userApi__WEBPACK_IMPORTED_MODULE_3__["default"], _apis_customerApi__WEBPACK_IMPORTED_MODULE_4__["default"], _apis_authenticationApi__WEBPACK_IMPORTED_MODULE_5__["default"], _apis_productApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_supplierApi__WEBPACK_IMPORTED_MODULE_2__["default"]],
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
        suppliers: [],
        logs: []
      },
      generated_qr_image: null,
      inputs: {
        filters: {
          search: "",
          status: null
        },
        file_upload: {
          type: null,
          name: null
        },
        product: {
          supplier: "",
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
        this.resetProductsInputs();
      }
    }
  },
  computed: {
    allowSubmitAddUProduct: function allowSubmitAddUProduct() {
      if (this.inputs.product.title != "" && this.inputs.product.description != "" && this.inputs.product.item_no != "" && this.inputs.product.quantity != "" && this.inputs.product.location != "" && this.inputs.product.image != "") {
        return true;
      }

      return false;
    }
  },
  methods: {
    numberType: _Helpers_validationHelper__WEBPACK_IMPORTED_MODULE_6__["numberType"],
    alphaNumberic: _Helpers_validationHelper__WEBPACK_IMPORTED_MODULE_6__["alphaNumberic"],
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

            _this.resetProductsInputs();

            _this.getProductsDatas();
          })["finally"](function () {
            return loading.hide();
          });
        }
      });
    },
    generateQRCode: function generateQRCode(event) {
      var _this2 = this;

      event.preventDefault();
      var params = {
        item_no: this.inputs.product.item_no
      };
      this.generateQRCodes(params).then(function (_ref2) {
        var success = _ref2.success,
            data = _ref2.data;

        if (success) {
          _this2.generated_qr_image = data.image;
        }
      });
    },
    removeQrCode: function removeQrCode() {
      this.generated_qr_image = null;
    },
    getLabelName: function getLabelName() {
      var _this3 = this;

      console.log(this.inputs.product.label);

      if (this.inputs.product.label === undefined || this.inputs.product.label === "" || this.inputs.product.label === null) {
        this.getNewLabel().then(function (_ref3) {
          var success = _ref3.success,
              data = _ref3.data;
          console.log(success);

          if (success) {
            _this3.inputs.product.label = data;
            console.log(_this3.inputs.product.label);
          }
        });
      }
    },
    getProductsDatas: function getProductsDatas() {
      var _this4 = this;

      this.conditions.loadings.products = true;
      var params = {
        page: this.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status
      };
      this.getAll(params).then(function (_ref4) {
        var data = _ref4.data;
        _this4.datas.products = data.data;
        _this4.paginations.last_page = data.last_page;
      })["finally"](function () {
        return _this4.conditions.loadings.products = false;
      });
    },
    getSuppliers: function getSuppliers() {
      var _this5 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getSuppliers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getAllSuppliers().then(function (_ref5) {
                var data = _ref5.data;
                _this5.datas.suppliers = data;
              })["finally"]());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    goToPage: function goToPage(page_number) {
      this.paginations.current_page = page_number;
      this.getProductsDatas();
    },
    resetProductsInputs: function resetProductsInputs() {
      var product = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.inputs.product = {
        supplier: "",
        title: "",
        description: "",
        item_no: "",
        quantity: "",
        location: "",
        lead_time: "",
        image: "",
        label: "",
        qr_code: ""
      };

      if (product != null) {
        this.inputs.product.supplier = product.supplier_id;
        this.inputs.product.title = product.title;
        this.inputs.product.description = product.description;
        this.inputs.product.item_no = product.item_no;
        this.inputs.product.quantity = product.quantity;
        this.inputs.product.location = product.location;
        this.inputs.product.lead_time = product.lead_time;
        this.inputs.product.image = product.image;
        this.inputs.product.label = product.label;
        this.inputs.product.qr_code = product.qr_code;
        this.generated_qr_image = product.qr_code;
      } else {
        this.removeQrCode();
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
      var user,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showInputProductModal$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              user = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getSuppliers());

            case 3:
              console.log(this.datas);
              this.show_modal_input_product = true;
              this.conditions.edit_product = false;
              this.resetProductsInputs(user);

              if (user != null) {
                this.conditions.edit_product = true;
              }

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
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
    onChangeFileUpload: function onChangeFileUpload($event) {
      this.inputs.product.image = $event.target.files[0];
    },
    submitAddProduct: function submitAddProduct() {
      var _this6 = this;

      this.conditions.edit_product = false;
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      var fd = new FormData();
      fd.append("title", this.inputs.product.title);
      fd.append("supplier_id", this.inputs.product.supplier);
      fd.append("quantity", this.inputs.product.quantity);
      fd.append("description", this.inputs.product.description);
      fd.append("image", this.inputs.product.image);
      fd.append("location", this.inputs.product.location);
      fd.append("item_no", this.inputs.product.item_no);
      fd.append("label", this.inputs.product.label);
      fd.append("lead_time", this.inputs.product.lead_time);
      this.create(fd).then(function (response) {
        if (!response.success) {
          _this6.$notify({
            group: "notification",
            type: "warn",
            title: "Warning",
            text: response.message
          });
        } else {
          _this6.show_modal_input_product = false;

          _this6.resetProductsInputs();

          _this6.getProductsDatas();

          _this6.$notify({
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
      var _this7 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.userApi_update(this.inputs.user.selected_user, this.inputs.user).then(function (response) {
        if (!response.success) {
          _this7.$notify({
            group: "notification",
            type: "warn",
            title: "Warning",
            text: response.message
          });
        } else {
          _this7.conditions.edit_product = false;
          _this7.show_modal_input_product = false;

          _this7.resetProductsInputs();

          _this7.getProductsDatas();

          _this7.$notify({
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
      var _this8 = this;

      var approval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.authenticationApi_inactiveUserApproval(this.inactive_user_details.id, approval).then(function (_ref6) {
        var data = _ref6.data;
        _this8.show_modal_inactive_product = false;

        _this8.getProductsDatas();
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
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (["admin"].includes(this.authenticatedUser.role)) {
              _context3.next = 4;
              break;
            }

            this.$router.push("/");
            _context3.next = 6;
            break;

          case 4:
            _context3.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getProductsDatas());

          case 6:
          case "end":
            return _context3.stop();
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
exports.push([module.i, "form {\n  width: 100%;\n}\n.products {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.products__header {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.products__header__filter {\n  width: 50%;\n}\n.products__header__action {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.products__content {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin: 16px 0px;\n}\n.products__table {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.products__table__header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.products__table__header__item {\n  display: -webkit-box;\n  display: flex;\n  font-weight: 500;\n}\n.products__table__content__item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.role-input {\n  padding: 7px 8px !important;\n}", ""]);

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
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/Helpers/validationHelper.js":
/*!**************************************************!*\
  !*** ./resources/js/Helpers/validationHelper.js ***!
  \**************************************************/
/*! exports provided: numberType, alphaNumberic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberType", function() { return numberType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumberic", function() { return alphaNumberic; });
var numberType = function numberType(value) {
  if (value.charCode === 0 || /\d/.test(String.fromCharCode(value.charCode))) {
    return true;
  } else {
    value.preventDefault();
  }
};

var alphaNumberic = function alphaNumberic(value) {
  if (value.charCode === 0 || /^[A-Za-z0-9 ]+$/.test(String.fromCharCode(value.charCode))) {
    return true;
  } else {
    value.preventDefault();
  }
};



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
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var route = "products";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: (_methods = {
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
    }
  }, _defineProperty(_methods, "create", function create() {
    var _this2 = this;

    var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return axios({
      method: "post",
      url: "http://127.0.0.1:8000/api" + "/".concat(route),
      headers: {
        Authorization: "Bearer ".concat(this.authorizationToken)
      },
      data: form_data
    }).then(function (_ref2) {
      var data = _ref2.data;
      return data;
    })["catch"](function (error) {
      _this2.globalFunction_handleAxiosError(error);

      return error;
    });
  }), _defineProperty(_methods, "getAll", function getAll() {
    var _this3 = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return axios({
      method: "get",
      url: "http://127.0.0.1:8000/api" + "/".concat(route),
      headers: {
        Authorization: "Bearer ".concat(this.authorizationToken)
      },
      params: params
    }).then(function (_ref3) {
      var data = _ref3.data;
      return data;
    })["catch"](function (error) {
      _this3.globalFunction_handleAxiosError(error);

      return error;
    });
  }), _defineProperty(_methods, "generateQRCodes", function generateQRCodes() {
    var _this4 = this;

    var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return axios({
      method: "post",
      url: "http://127.0.0.1:8000/api" + "/".concat(route) + "/generate-qr-code",
      headers: {
        Authorization: "Bearer ".concat(this.authorizationToken)
      },
      data: form_data
    }).then(function (_ref4) {
      var data = _ref4.data;
      return data;
    })["catch"](function (error) {
      _this4.globalFunction_handleAxiosError(error);

      return error;
    });
  }), _defineProperty(_methods, "getNewLabel", function getNewLabel() {
    var _this5 = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return axios({
      method: "get",
      url: "http://127.0.0.1:8000/api" + "/".concat(route) + "/get-new-label",
      headers: {
        Authorization: "Bearer ".concat(this.authorizationToken)
      },
      params: params
    }).then(function (_ref5) {
      var data = _ref5.data;
      return data;
    })["catch"](function (error) {
      _this5.globalFunction_handleAxiosError(error);

      return error;
    });
  }), _methods)
});

/***/ }),

/***/ "./resources/js/apis/supplierApi.js":
/*!******************************************!*\
  !*** ./resources/js/apis/supplierApi.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "suppliers";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getAllSuppliers: function getAllSuppliers() {
      var _this = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
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
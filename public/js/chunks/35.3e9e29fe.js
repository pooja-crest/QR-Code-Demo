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
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/vendorApi */ "./resources/js/apis/vendorApi.js");
/* harmony import */ var _apis_chatApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/chatApi */ "./resources/js/apis/chatApi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "VendorList",
  mixins: [_apis_vendorApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_chatApi__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          vendors: false
        },
        search_active: false
      },
      vendors: {
        datas: [],
        paginations: {
          first_page: 1,
          current_page: 1,
          last_page: 1
        }
      },
      inputs: {
        filters: {
          search: "",
          status: null
        },
        vendor: {
          selected_vendor: null,
          vendor_number: null,
          name: null,
          address: null,
          contact_person: null,
          email: null,
          telephone: null,
          po_note: null
        },
        chat: {
          selected_receiver_id: null,
          message: ""
        }
      },
      variables: {
        status: [{
          value: null,
          text: "All status"
        }, {
          value: "active",
          text: "Active"
        }, {
          value: "inactive",
          text: "Inactive"
        }]
      },
      show_modal_vendor_detail: false,
      selectedVendor: null,
      show_modal_add_new_vendor_detail: false,
      show_modal_edit_vendor_detail: false,
      chats: [],
      validation_errors: []
    };
  },
  watch: {
    "inputs.filters.status": function inputsFiltersStatus(value) {
      this.vendors.paginations.current_page = 1;
      this.getVendorDatas();
    },
    "show_modal_edit_vendor_detail": function show_modal_edit_vendor_detail(value) {
      if (!value) {
        this.resetVendorInputs();
        this.chats = [];
        this.inputs.chat.selected_receiver_id = null;
        this.inputs.chat.message = "";
      }
    },
    "show_modal_vendor_detail": function show_modal_vendor_detail(value) {
      if (!value) {
        this.resetVendorInputs();
        this.chats = [];
        this.inputs.chat.selected_receiver_id = null;
        this.inputs.chat.message = "";
      }
    }
  },
  computed: {
    allowSubmitVendor: function allowSubmitVendor() {
      if (this.inputs.vendor.vendor_number != null && this.inputs.vendor.vendor_number != "" && this.inputs.vendor.name != null && this.inputs.vendor.name != "") {
        return true;
      }

      return false;
    }
  },
  methods: {
    deleteVendor: function deleteVendor(vendor) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete ".concat(vendor.name),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this.vendorApi_delete(vendor.id).then(function (_ref) {
            var data = _ref.data;

            _this.getVendorDatas();
          })["finally"](function () {
            return loading.hide();
          });
        }
      });
    },
    getVendorDatas: function getVendorDatas() {
      var _this2 = this;

      this.conditions.loadings.vendors = true;
      var params = {
        page: this.vendors.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.status
      };
      this.vendorApi_getAll(params).then(function (_ref2) {
        var data = _ref2.data;
        _this2.vendors.datas = data.data;
        _this2.vendors.paginations.last_page = data.last_page;
      })["finally"](function () {
        return _this2.conditions.loadings.vendors = false;
      });
    },
    goToPage: function goToPage(page_number) {
      this.vendors.paginations.current_page = page_number;
      this.getVendorDatas();
    },
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.vendors.paginations.current_page = 1;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
      }

      this.getVendorDatas();
    },
    getVendorDetails: function getVendorDetails(vendor_id) {
      var _this3 = this;

      this.vendorApi_getOne({
        id: vendor_id
      }).then(function (response) {
        if (response.success && response.data != "") {
          _this3.selectedVendor = response.data;
          _this3.inputs.chat.selected_receiver_id = _this3.selectedVendor.id;
          _this3.show_modal_vendor_detail = true;

          _this3.getReceiverMessages(_this3.inputs.chat.selected_receiver_id);
        }
      });
    },
    editVendorDetails: function editVendorDetails(vendor_id) {
      var _this4 = this;

      this.vendorApi_getOne({
        id: vendor_id
      }).then(function (response) {
        if (response.success && response.data != "") {
          _this4.inputs.chat.selected_receiver_id = response.data.id;
          _this4.inputs.vendor.selected_vendor = response.data.id;
          _this4.inputs.vendor.vendor_number = response.data.vendor_number;
          _this4.inputs.vendor.name = response.data.name;
          _this4.inputs.vendor.address = response.data.address;
          _this4.inputs.vendor.contact_person = response.data.contact_person;
          _this4.inputs.vendor.email = response.data.email;
          _this4.inputs.vendor.telephone = response.data.telephone;
          _this4.inputs.vendor.po_note = response.data.po_note;
          _this4.show_modal_edit_vendor_detail = true;

          _this4.getReceiverMessages(_this4.inputs.chat.selected_receiver_id);
        }
      });
    },
    resetVendorInputs: function resetVendorInputs() {
      this.inputs.vendor.selected_vendor = null;
      this.inputs.vendor.vendor_number = null;
      this.inputs.vendor.name = null;
      this.inputs.vendor.address = null;
      this.inputs.vendor.contact_person = null;
      this.inputs.vendor.email = null;
      this.inputs.vendor.telephone = null;
      this.inputs.vendor.po_note = null;
    },
    submitNewVendor: function submitNewVendor() {
      var _this5 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      delete this.inputs.vendor['selected_vendor'];
      this.vendorApi_create(this.inputs.vendor).then(function (response) {
        _this5.validation_errors = [];

        if (response.success) {
          _this5.show_modal_add_new_vendor_detail = false;

          _this5.resetVendorInputs();

          _this5.getVendorDatas();

          _this5.$notify({
            group: "notification",
            type: "success",
            title: response.message
          });
        } else {
          _this5.validation_errors = response.data;
        }
      })["finally"](function () {
        return loading.hide();
      });
    },
    submitUpdateVendor: function submitUpdateVendor() {
      var _this6 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.vendorApi_update(this.inputs.vendor.selected_vendor, this.inputs.vendor).then(function (response) {
        _this6.validation_errors = [];

        if (response.success) {
          // this.show_modal_edit_vendor_detail = false;
          _this6.editVendorDetails(_this6.inputs.vendor.selected_vendor);

          _this6.getVendorDatas();

          _this6.$notify({
            group: "notification",
            type: "success",
            title: response.message
          });
        } else {
          _this6.validation_errors = response.data;
        }
      })["finally"](function () {
        return loading.hide();
      });
    },
    submitChat: function submitChat() {
      var _this7 = this;

      if (this.inputs.chat.message != "" && this.inputs.chat.selected_receiver_id != null) {
        this.chatApi_sendMessage(this.inputs.chat).then(function (response) {
          if (response.success) {
            _this7.inputs.chat.message = "";

            _this7.getReceiverMessages(_this7.inputs.chat.selected_receiver_id);
          }
        });
      }
    },
    getReceiverMessages: function getReceiverMessages(receiver_id) {
      var _this8 = this;

      this.chatApi_getReceiverMessages(receiver_id).then(function (response) {
        if (response.success) {
          _this8.chats = response.data;
        }
      });
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (["admin", "purchaser"].includes(this.authenticatedUser.role)) {
              _context.next = 4;
              break;
            }

            this.$router.push("/");
            _context.next = 6;
            break;

          case 4:
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getVendorDatas());

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
exports.push([module.i, ".users {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.users__header {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.users__header__filter {\n  width: 50%;\n}\n.users__header__action {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.users__content {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin: 16px 0px;\n}\n.users__table {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.users__table__header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.users__table__header__item {\n  display: -webkit-box;\n  display: flex;\n  font-weight: 500;\n}\n.users__table__content__item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}", ""]);

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
          ["admin"].includes(_vm.authenticatedUser.role)
            ? _c(
                "card-custom",
                { attrs: { title: "Actions", alias: "message2" } },
                [
                  _c("div", { staticClass: "flex flex-col w-full" }, [
                    _c("div", { staticClass: "w-full flex" }, [
                      _c("div", { staticClass: "w-full flex mt-4" }, [
                        _c("div", { staticClass: "w-full" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary w-1/6",
                              on: {
                                click: function($event) {
                                  _vm.show_modal_add_new_vendor_detail = true
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "btn--text custom-text-bold" },
                                [_vm._v("Add New Vendor")]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
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
                      placeholder: "Search Vendor name or Vendor # "
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
                    _c(
                      "div",
                      { staticClass: "w-1/3 mr-2" },
                      [
                        _c("select-custom", {
                          ref: "filterstatus",
                          attrs: {
                            "input-placeholder": "All status",
                            "input-class": "w-full",
                            "input-style":
                              "padding:10px 16px;background-color:#FFFFFF",
                            data: _vm.variables.status,
                            "menu-style": "z-index:302!important"
                          },
                          model: {
                            value: _vm.inputs.filters.status,
                            callback: function($$v) {
                              _vm.$set(_vm.inputs.filters, "status", $$v)
                            },
                            expression: "inputs.filters.status"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", { attrs: { title: "Vendor List" } }, [
            _c("div", { staticClass: "w-full" }, [
              _c(
                "div",
                { staticClass: "flex flex-col w-full" },
                [
                  _vm.vendors.datas.length > 0 ||
                  _vm.conditions.loadings.vendors
                    ? _c("div", { staticClass: "w-full" }, [
                        _c("div", { staticClass: "table-custom-component" }, [
                          _c(
                            "div",
                            { staticClass: "table-custom--container" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "table-custom--content",
                                  staticStyle: { overflow: "auto" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      ref: "table",
                                      staticClass: "tablecustom my-8 w-full",
                                      staticStyle: { "min-width": "800px" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "tablecustom--container flex"
                                        },
                                        [
                                          !_vm.conditions.loadings.vendors
                                            ? _c(
                                                "div",
                                                {
                                                  ref: "tableScrollbar",
                                                  staticClass:
                                                    "tablecustom-scrollable--content h-full w-full"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tablecustom-header--container flex w-full"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tablecustom-header--content",
                                                          class: [
                                                            _vm
                                                              .authenticatedUser
                                                              .role ==
                                                            "purchaser"
                                                              ? "w-3/12"
                                                              : "w-2/12"
                                                          ]
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                            },
                                                            [_vm._v("Vendor #")]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tablecustom-header--content w-3/12"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Vendor Name"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tablecustom-header--content w-3/12"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Contact Person"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tablecustom-header--content",
                                                          class: [
                                                            _vm
                                                              .authenticatedUser
                                                              .role ==
                                                            "purchaser"
                                                              ? "w-3/12"
                                                              : "w-2/12"
                                                          ]
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Telephone"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      ["admin"].includes(
                                                        _vm.authenticatedUser
                                                          .role
                                                      )
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "tablecustom-header--content w-2/12"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Actions"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tablecustom-content--container w-full",
                                                      staticStyle: {
                                                        "margin-bottom": "12px"
                                                      }
                                                    },
                                                    [
                                                      _vm._l(
                                                        _vm.vendors.datas,
                                                        function(
                                                          vendor,
                                                          index
                                                        ) {
                                                          return [
                                                            _c(
                                                              "div",
                                                              {
                                                                key: index,
                                                                staticClass:
                                                                  "flex"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content",
                                                                    class: [
                                                                      _vm
                                                                        .authenticatedUser
                                                                        .role ==
                                                                      "purchaser"
                                                                        ? "w-2/12"
                                                                        : "w-2/12"
                                                                    ]
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tablecustom-content--text"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "a",
                                                                              {
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.getVendorDetails(
                                                                                      vendor.id
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    vendor.vendor_number
                                                                                  )
                                                                                )
                                                                              ]
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
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content w-3/12"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tablecustom-content--text"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                vendor.name
                                                                              )
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
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content w-3/12"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tablecustom-content--text"
                                                                      },
                                                                      [
                                                                        vendor.contact_person
                                                                          ? _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    vendor.contact_person
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "-"
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
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content",
                                                                    class: [
                                                                      _vm
                                                                        .authenticatedUser
                                                                        .role ==
                                                                      "purchaser"
                                                                        ? "w-3/12"
                                                                        : "w-2/12"
                                                                    ]
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tablecustom-content--text flex items-center flex-col sm:flex-row"
                                                                      },
                                                                      [
                                                                        vendor.telephone
                                                                          ? _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    vendor.telephone
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "-"
                                                                                )
                                                                              ]
                                                                            )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                [
                                                                  "admin"
                                                                ].includes(
                                                                  _vm
                                                                    .authenticatedUser
                                                                    .role
                                                                )
                                                                  ? _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tablecustom-content--content w-2/12"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "w-1/4 flex justify-center"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "button",
                                                                              {
                                                                                staticClass:
                                                                                  "btn btn-outline-primary p-1 flex items-center justify-center",
                                                                                staticStyle: {
                                                                                  "min-width":
                                                                                    "initial"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.editVendorDetails(
                                                                                      vendor.id
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
                                                                                    _c(
                                                                                      "icon-custom",
                                                                                      {
                                                                                        attrs: {
                                                                                          icon:
                                                                                            "edit",
                                                                                          classes:
                                                                                            "pr-0 h-4 w-4"
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  ],
                                                                                  1
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            vendor.orders_count >
                                                                            0
                                                                              ? _c(
                                                                                  "button",
                                                                                  {
                                                                                    staticClass:
                                                                                      "btn btn-outline-danger disabled p-1 flex items-center justify-center ml-2",
                                                                                    staticStyle: {
                                                                                      "min-width":
                                                                                        "initial"
                                                                                    },
                                                                                    attrs: {
                                                                                      title:
                                                                                        "You can't delete this vendor because this vendor have orders",
                                                                                      disabled:
                                                                                        ""
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
                                                                                        _c(
                                                                                          "icon-custom",
                                                                                          {
                                                                                            attrs: {
                                                                                              icon:
                                                                                                "trash",
                                                                                              classes:
                                                                                                "pr-0 h-4 w-4"
                                                                                            }
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "button",
                                                                                  {
                                                                                    staticClass:
                                                                                      "btn btn-outline-danger p-1 flex items-center justify-center ml-2",
                                                                                    staticStyle: {
                                                                                      "min-width":
                                                                                        "initial"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.deleteVendor(
                                                                                          vendor
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
                                                                                        _c(
                                                                                          "icon-custom",
                                                                                          {
                                                                                            attrs: {
                                                                                              icon:
                                                                                                "trash",
                                                                                              classes:
                                                                                                "pr-0 h-4 w-4"
                                                                                            }
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _vm._e()
                                                              ]
                                                            )
                                                          ]
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    : [
                        _c(
                          "div",
                          { staticClass: "flex w-full justify-center" },
                          [_c("p", [_vm._v("No data found.")])]
                        )
                      ],
                  _vm._v(" "),
                  !_vm.conditions.loadings.vendors
                    ? _c("div", { staticClass: "table-custom--footer" }, [
                        _c("div", { staticClass: "w-1/2 flex justify-start" }, [
                          _vm.vendors.paginations.current_page >
                          _vm.vendors.paginations.first_page
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary w-1/5 mr-4",
                                  on: {
                                    click: function($event) {
                                      _vm.goToPage(
                                        parseInt(
                                          _vm.vendors.paginations.current_page
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
                                      staticClass: "btn--text custom-text-bold"
                                    },
                                    [_vm._v("Previous")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm.vendors.datas.length >=
                        _vm.conditions.data_each_page
                          ? _c(
                              "div",
                              { staticClass: "w-1/2 flex justify-end" },
                              [
                                _vm.vendors.paginations.current_page <
                                _vm.vendors.paginations.last_page
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-primary w-1/5",
                                        on: {
                                          click: function($event) {
                                            _vm.goToPage(
                                              parseInt(
                                                _vm.vendors.paginations
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
                                  : _vm._e()
                              ]
                            )
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                2
              )
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
            "show-variable": "show_modal_vendor_detail",
            title: "Vendor Details",
            "content-width": "800",
            "content-height": "70%"
          }
        },
        [
          _vm.show_modal_vendor_detail == true && _vm.selectedVendor !== null
            ? _c("template", { slot: "content" }, [
                _c("div", { staticClass: "flex flex-row w-full" }, [
                  _c("div", { staticClass: "flex flex-col w-1/2" }, [
                    _c("div", { staticClass: "w-full block" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Vendor #")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mb-2" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "input w-full input-background-disabled"
                          },
                          [_vm._v(_vm._s(_vm.selectedVendor.vendor_number))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Vendor Name")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full mb-2" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "input w-full input-background-disabled"
                          },
                          [_vm._v(_vm._s(_vm.selectedVendor.name))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.selectedVendor.address
                      ? _c("div", { staticClass: "w-full block" }, [
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "uppercase font-medium text-xs text-spacing-md line-height-md"
                              },
                              [_vm._v("Address")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input w-full input-background-disabled"
                              },
                              [_vm._v(_vm._s(_vm.selectedVendor.address))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.selectedVendor.contact_person
                      ? _c("div", { staticClass: "w-full block" }, [
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "uppercase font-medium text-xs text-spacing-md line-height-md"
                              },
                              [_vm._v("Contact Person")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input w-full input-background-disabled"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.selectedVendor.contact_person)
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.selectedVendor.email
                      ? _c("div", { staticClass: "w-full block" }, [
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "uppercase font-medium text-xs text-spacing-md line-height-md"
                              },
                              [_vm._v("Email")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input w-full input-background-disabled"
                              },
                              [_vm._v(_vm._s(_vm.selectedVendor.email))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.selectedVendor.telephone
                      ? _c("div", { staticClass: "w-full block" }, [
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "uppercase font-medium text-xs text-spacing-md line-height-md"
                              },
                              [_vm._v("Telephone")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input w-full input-background-disabled"
                              },
                              [_vm._v(_vm._s(_vm.selectedVendor.telephone))]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.selectedVendor.po_note
                      ? _c("div", { staticClass: "w-full block" }, [
                          _c("div", { staticClass: "w-full" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "uppercase font-medium text-xs text-spacing-md line-height-md"
                              },
                              [_vm._v("PO Note")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full mb-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "input w-full input-background-disabled"
                              },
                              [_vm._v(_vm._s(_vm.selectedVendor.po_note))]
                            )
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col w-1/2" }, [
                    _c("div", { staticClass: "card m-5" }, [
                      _c("div", { staticClass: "card-content flex w-full" }, [
                        _c("div", { staticClass: "w-full flex-col" }, [
                          _c(
                            "div",
                            { staticClass: "w-full overflow-y-scroll h-64" },
                            [
                              _vm.chats.length > 0
                                ? _c(
                                    "div",
                                    { staticClass: "flex flex-col" },
                                    _vm._l(_vm.chats, function(chat, index) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          class: [index === 0 ? "" : "mt-4"]
                                        },
                                        [
                                          _c("span", [
                                            _c(
                                              "span",
                                              { staticClass: "font-medium" },
                                              [
                                                _vm._v(
                                                  _vm._s(chat.sender.name) +
                                                    " -"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-xs text-secondary"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm
                                                      .$moment(chat.created_at)
                                                      .format("MMMM DD, YYYY")
                                                  ) +
                                                    " at " +
                                                    _vm._s(
                                                      _vm
                                                        .$moment(
                                                          chat.created_at
                                                        )
                                                        .format("HH:MM")
                                                    ) +
                                                    " "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mt-2" }, [
                                            _vm._v(_vm._s(chat.message))
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full flex mt-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.inputs.chat.message,
                                  expression: "inputs.chat.message"
                                }
                              ],
                              staticClass: "input w-full mr-2",
                              class: [
                                _vm.inputs.chat.message == ""
                                  ? "input-empty"
                                  : ""
                              ],
                              attrs: {
                                type: "text",
                                placeholder: "Write Message..."
                              },
                              domProps: { value: _vm.inputs.chat.message },
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
                                  return _vm.submitChat()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.inputs.chat,
                                    "message",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.submitChat()
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "btn--text custom-text-bold" },
                                  [_vm._v("Send")]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("template", { slot: "footer" }, [
            _c("div", { staticClass: "w-full flex justify-end" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function($event) {
                      _vm.show_modal_vendor_detail = false
                      _vm.selectedVendor = null
                    }
                  }
                },
                [
                  _c("span", { staticClass: "btn--text custom-text-bold" }, [
                    _vm._v("Close")
                  ])
                ]
              )
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_edit_vendor_detail",
            title: "Edit Vendor Details",
            "content-width": "800",
            "content-height": "80%"
          }
        },
        [
          _vm.show_modal_edit_vendor_detail == true &&
          _vm.inputs.vendor.vendor_number !== null
            ? _c("template", { slot: "content" }, [
                _c("div", { staticClass: "flex flex-row w-full" }, [
                  _c("div", { staticClass: "flex flex-col w-1/2" }, [
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Vendor #")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.vendor_number,
                              expression: "inputs.vendor.vendor_number"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.vendor_number == ""
                              ? "input-empty"
                              : ""
                          ],
                          attrs: { type: "text", placeholder: "Vendor Name" },
                          domProps: { value: _vm.inputs.vendor.vendor_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "vendor_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("vendor_number") &&
                      _vm.validation_errors.vendor_number.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.validation_errors.vendor_number[0])
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Vendor Name")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.name,
                              expression: "inputs.vendor.name"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.name == "" ? "input-empty" : ""
                          ],
                          attrs: { type: "text", placeholder: "Vendor Name" },
                          domProps: { value: _vm.inputs.vendor.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("name") &&
                      _vm.validation_errors.name.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.validation_errors.name[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Address")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.address,
                              expression: "inputs.vendor.address"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.address == "" ? "input-empty" : ""
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Vendor Address"
                          },
                          domProps: { value: _vm.inputs.vendor.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("address") &&
                      _vm.validation_errors.address.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.validation_errors.address[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Contact Person")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.contact_person,
                              expression: "inputs.vendor.contact_person"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.contact_person == ""
                              ? "input-empty"
                              : ""
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Contact Person"
                          },
                          domProps: { value: _vm.inputs.vendor.contact_person },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "contact_person",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("contact_person") &&
                      _vm.validation_errors.contact_person.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.validation_errors.contact_person[0])
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Email")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.email,
                              expression: "inputs.vendor.email"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.email == "" ? "input-empty" : ""
                          ],
                          attrs: { type: "text", placeholder: "Email" },
                          domProps: { value: _vm.inputs.vendor.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("email") &&
                      _vm.validation_errors.email.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.validation_errors.email[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("Telephone")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.telephone,
                              expression: "inputs.vendor.telephone"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.telephone == ""
                              ? "input-empty"
                              : ""
                          ],
                          attrs: { type: "text", placeholder: "Telephone" },
                          domProps: { value: _vm.inputs.vendor.telephone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "telephone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("telephone") &&
                      _vm.validation_errors.telephone.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.validation_errors.telephone[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full block mb-2" }, [
                      _c("div", { staticClass: "w-full" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "uppercase font-medium text-xs text-spacing-md line-height-md"
                          },
                          [_vm._v("PO Note")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.vendor.po_note,
                              expression: "inputs.vendor.po_note"
                            }
                          ],
                          staticClass: "input w-full",
                          class: [
                            _vm.inputs.vendor.po_note == "" ? "input-empty" : ""
                          ],
                          attrs: { type: "text", placeholder: "PO Note" },
                          domProps: { value: _vm.inputs.vendor.po_note },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs.vendor,
                                "po_note",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.validation_errors.hasOwnProperty("po_note") &&
                      _vm.validation_errors.po_note.length > 0
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.validation_errors.po_note[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col w-1/2" }, [
                    _c("div", { staticClass: "card m-5" }, [
                      _c("div", { staticClass: "card-content flex w-full" }, [
                        _c("div", { staticClass: "w-full flex-col" }, [
                          _c(
                            "div",
                            { staticClass: "w-full overflow-y-scroll h-64" },
                            [
                              _vm.chats.length > 0
                                ? _c(
                                    "div",
                                    { staticClass: "flex flex-col" },
                                    _vm._l(_vm.chats, function(chat, index) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          class: [index === 0 ? "" : "mt-4"]
                                        },
                                        [
                                          _c("span", [
                                            _c(
                                              "span",
                                              { staticClass: "font-medium" },
                                              [
                                                _vm._v(
                                                  _vm._s(chat.sender.name) +
                                                    " -"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "text-xs text-secondary"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm
                                                      .$moment(chat.created_at)
                                                      .format("MMMM DD, YYYY")
                                                  ) +
                                                    " at " +
                                                    _vm._s(
                                                      _vm
                                                        .$moment(
                                                          chat.created_at
                                                        )
                                                        .format("HH:MM")
                                                    ) +
                                                    " "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mt-2" }, [
                                            _vm._v(_vm._s(chat.message))
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full flex mt-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.inputs.chat.message,
                                  expression: "inputs.chat.message"
                                }
                              ],
                              staticClass: "input w-full mr-2",
                              class: [
                                _vm.inputs.chat.message == ""
                                  ? "input-empty"
                                  : ""
                              ],
                              attrs: {
                                type: "text",
                                placeholder: "Write Message..."
                              },
                              domProps: { value: _vm.inputs.chat.message },
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
                                  return _vm.submitChat()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.inputs.chat,
                                    "message",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.submitChat()
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "btn--text custom-text-bold" },
                                  [_vm._v("Send")]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("template", { slot: "footer" }, [
            _c("div", { staticClass: "w-full flex justify-end" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function($event) {
                      _vm.show_modal_edit_vendor_detail = false
                      _vm.resetVendorInputs()
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
              _vm.allowSubmitVendor
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5",
                      on: {
                        click: function($event) {
                          return _vm.submitUpdateVendor()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Update vendor")]
                      )
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5 disabled",
                      attrs: { disabled: "" }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Update vendor")]
                      )
                    ]
                  )
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_add_new_vendor_detail",
            title: "Add New Vendor Details",
            "content-width": "500",
            "content-height": "80%"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Vendor #")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.vendor_number,
                      expression: "inputs.vendor.vendor_number"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [
                    _vm.inputs.vendor.vendor_number == "" ? "input-empty" : ""
                  ],
                  attrs: { type: "text", placeholder: "Vendor Number" },
                  domProps: { value: _vm.inputs.vendor.vendor_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.inputs.vendor,
                        "vendor_number",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("vendor_number") &&
              _vm.validation_errors.vendor_number.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.vendor_number[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Vendor Name")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.name,
                      expression: "inputs.vendor.name"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [_vm.inputs.vendor.name == "" ? "input-empty" : ""],
                  attrs: { type: "text", placeholder: "Vendor Name" },
                  domProps: { value: _vm.inputs.vendor.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inputs.vendor, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("name") &&
              _vm.validation_errors.name.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.name[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Address")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.address,
                      expression: "inputs.vendor.address"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [_vm.inputs.vendor.address == "" ? "input-empty" : ""],
                  attrs: { type: "text", placeholder: "Vendor Address" },
                  domProps: { value: _vm.inputs.vendor.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.inputs.vendor,
                        "address",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("address") &&
              _vm.validation_errors.address.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.address[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Contact Person")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.contact_person,
                      expression: "inputs.vendor.contact_person"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [
                    _vm.inputs.vendor.contact_person == "" ? "input-empty" : ""
                  ],
                  attrs: {
                    type: "text",
                    placeholder:
                      "Please use comma to insert multiple contact persons"
                  },
                  domProps: { value: _vm.inputs.vendor.contact_person },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.inputs.vendor,
                        "contact_person",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("contact_person") &&
              _vm.validation_errors.contact_person.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.contact_person[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Email")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.email,
                      expression: "inputs.vendor.email"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [_vm.inputs.vendor.email == "" ? "input-empty" : ""],
                  attrs: {
                    type: "text",
                    placeholder: "Please use comma to insert multiple emails"
                  },
                  domProps: { value: _vm.inputs.vendor.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inputs.vendor, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("email") &&
              _vm.validation_errors.email.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.email[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("Telephone")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.telephone,
                      expression: "inputs.vendor.telephone"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [
                    _vm.inputs.vendor.telephone == "" ? "input-empty" : ""
                  ],
                  attrs: { type: "text", placeholder: "Telephone" },
                  domProps: { value: _vm.inputs.vendor.telephone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.inputs.vendor,
                        "telephone",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("telephone") &&
              _vm.validation_errors.telephone.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.telephone[0]))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full block mb-2" }, [
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "uppercase font-medium text-xs text-spacing-md line-height-md"
                  },
                  [_vm._v("PO Note")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputs.vendor.po_note,
                      expression: "inputs.vendor.po_note"
                    }
                  ],
                  staticClass: "input w-full",
                  class: [_vm.inputs.vendor.po_note == "" ? "input-empty" : ""],
                  attrs: { type: "text", placeholder: "PO Note" },
                  domProps: { value: _vm.inputs.vendor.po_note },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.inputs.vendor,
                        "po_note",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.validation_errors.hasOwnProperty("po_note") &&
              _vm.validation_errors.po_note.length > 0
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.validation_errors.po_note[0]))
                  ])
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
                      _vm.show_modal_add_new_vendor_detail = false
                      _vm.resetVendorInputs()
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
              _vm.allowSubmitVendor
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5",
                      on: {
                        click: function($event) {
                          return _vm.submitNewVendor()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Submit")]
                      )
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-5 disabled",
                      attrs: { disabled: "" }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Submit")]
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
          _vm._v("Products List")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/chatApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/chatApi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "chat";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    chatApi_sendMessage: function chatApi_sendMessage() {
      var _this = this;

      var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/send-message"),
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
    chatApi_getReceiverMessages: function chatApi_getReceiverMessages(receiver_id) {
      var _this2 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-receiver-messages/").concat(receiver_id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
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

/***/ "./resources/js/apis/vendorApi.js":
/*!****************************************!*\
  !*** ./resources/js/apis/vendorApi.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "vendors";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    vendorApi_getAll: function vendorApi_getAll() {
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
    },
    vendorApi_getOne: function vendorApi_getOne() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-one"),
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
    vendorApi_getForFilter: function vendorApi_getForFilter() {
      var _this3 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-for-filter"),
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
    },
    vendorApi_uploadVendorComplete: function vendorApi_uploadVendorComplete() {
      var _this4 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/handle-upload-vendor"), this.formData, {
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
    vendorApi_delete: function vendorApi_delete(id) {
      var _this5 = this;

      return axios({
        method: "delete",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        return data;
      })["catch"](function (error) {
        _this5.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    vendorApi_create: function vendorApi_create() {
      var _this6 = this;

      var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: form_data
      }).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      })["catch"](function (error) {
        _this6.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    vendorApi_update: function vendorApi_update(id) {
      var _this7 = this;

      var form_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "patch",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: form_data
      }).then(function (_ref7) {
        var data = _ref7.data;
        return data;
      })["catch"](function (error) {
        _this7.globalFunction_handleAxiosError(error);

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
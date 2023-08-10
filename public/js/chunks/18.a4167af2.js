(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_orderApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/orderApi */ "./resources/js/apis/orderApi.js");
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/vendorApi */ "./resources/js/apis/vendorApi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrderList",
  mixins: [_apis_orderApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {},
  data: function data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          datas: true
        },
        search_active: false
      },
      data: {
        datas: [],
        paginations: {
          first_page: 1,
          current_page: 1,
          next_page: 1
        }
      },
      inputs: {
        filters: {
          search: "",
          vendor: null,
          selected_status: 'all'
        }
      },
      variables: {
        status: [{
          value: "all",
          text: "All"
        }, {
          value: "not_confirmed",
          text: "Not Confirmed"
        }, {
          value: "confirmed",
          text: "Confirmed"
        }, {
          value: "is_adagio",
          text: "Not Adagio"
        } // {
        //   value: "not_ship",
        //   text: "Not Shipped",
        // },
        // {
        //   value: "partial_shipped",
        //   text: "Partial Shipped",
        // },
        // {
        //   value: "shipped_complete",
        //   text: "Shipped Complete",
        // }
        ],
        vendors: []
      },
      apiLink: "http://127.0.0.1:8000/api",
      multiple_download: [],
      multiple_orders_file: null,
      multiple_orders_file_toggle_name: 'Click Here to Download Merge CSV file' // Click Here to Download Merge CSV file,Click Here to Download Merge PDF file

    };
  },
  watch: {
    "inputs.filters.selected_status": function inputsFiltersSelected_status(value) {
      this.data.paginations.current_page = 1;
      this.getOrders();
    }
  },
  methods: {
    deleteOrder: function deleteOrder(order) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete ".concat(order.vendor.name, " order"),
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

          _this.orderApi_delete(order.id).then(function (_ref) {
            var data = _ref.data;

            _this.getOrders();
          })["finally"](function () {
            return loading.hide();
          });
        }
      });
    },
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.data.paginations.current_page = 1;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
        this.inputs.filters.vendor = null;
      }

      this.getOrders();
    },
    getOrders: function getOrders() {
      var _this2 = this;

      this.conditions.loadings.datas = true;
      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.selected_status != 'all' ? this.inputs.filters.selected_status : null,
        vendorId: this.inputs.filters.vendor
      };
      this.orderApi_getAll(params).then(function (response) {
        _this2.data.datas = response.data;

        if (response.data.length >= _this2.conditions.data_each_page) {
          _this2.data.paginations.next_page = _this2.data.paginations.current_page + 1;
        }
      })["finally"](function () {
        return _this2.conditions.loadings.datas = false;
      });
    },
    goToPage: function goToPage(page_number) {
      this.data.paginations.current_page = page_number;
      this.getOrders();
    },
    changeOrderCompletedStatus: function changeOrderCompletedStatus(order_id) {
      var _this3 = this;

      this.orderApi_updateStatus(order_id).then(function (response) {
        if (response.success) {
          _this3.$notify({
            group: "notification",
            type: "success",
            title: response.message,
            text: ''
          });

          _this3.getOrders();
        } else {
          _this3.$notify({
            group: "notification",
            type: "warn",
            title: response.message,
            text: ''
          });
        }
      });
    },
    changeAdagioStatus: function changeAdagioStatus(order_id) {
      var _this4 = this;

      this.orderApi_updateAdagioStatus(order_id).then(function (response) {
        if (response.success) {
          _this4.$notify({
            group: "notification",
            type: "success",
            title: response.message,
            text: ''
          });

          _this4.getOrders();
        } else {
          _this4.$notify({
            group: "notification",
            type: "warn",
            title: response.message,
            text: ''
          });
        }
      });
    },
    getOrderCubicInches: function getOrderCubicInches(orderId) {
      this.orderApi_getOrderCubicInches(orderId).then(function (response) {
        console.log(response);
      });
    },
    createMultipleOrdersFile: function createMultipleOrdersFile(file_type) {
      var _this5 = this;

      if (this.multiple_download.length > 0) {
        this.orderApi_createMultipleOrdersFile({
          "order_ids": this.multiple_download,
          "file_type": file_type
        }).then(function (response) {
          if (response.success) {
            if (file_type == 'csv') {
              _this5.multiple_orders_file_toggle_name = 'Click Here to Download Merge CSV file';
            } else if (file_type == 'pdf') {
              _this5.multiple_orders_file_toggle_name = 'Click Here to Download Merge PDF file';
            }

            _this5.multiple_orders_file = response.data.filename;
            var link = document.createElement('a');
            link.href = _this5.apiLink + '/public/neworders/file?fileName=' + _this5.multiple_orders_file;
            link.download = _this5.multiple_orders_file;
            link.click();

            if (response.data.nullpocounter > 0) {
              _this5.$notify({
                group: "notification",
                type: "warn",
                title: "Warnning",
                text: response.message
              });
            } else {
              _this5.$notify({
                group: "notification",
                type: "success",
                title: "Success",
                text: response.message
              });
            }
          } else {
            _this5.$notify({
              group: "notification",
              type: "warn",
              title: response.message,
              text: ''
            });
          }
        });
      }
    },
    changeOrderNote: function changeOrderNote(index) {
      var _this6 = this;

      if (this.data.datas[index].length > 190) {
        this.$notify({
          group: "notification",
          type: "warn",
          title: 'Maximum length for order note is 190 characters',
          text: ''
        });
      } else {
        var order = this.data.datas[index];
        this.orderApi_updateOrderNote(order).then(function (response) {
          if (response.success) {
            _this6.$notify({
              group: "notification",
              type: "success",
              title: response.message,
              text: ''
            });

            _this6.getOrders();
          } else {
            _this6.$notify({
              group: "notification",
              type: "warn",
              title: response.message,
              text: ''
            });
          }
        });
      }
    }
  },
  created: function created() {
    var _this7 = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser", "viewer"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.getOrders();
              this.vendorApi_getForFilter().then(function (_ref2) {
                var data = _ref2.data;
                return _this7.variables.vendors = data.map(function (vendor) {
                  return {
                    id: vendor.id,
                    name: vendor.vendor_number + " - " + vendor.name
                  };
                });
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderlist {\n  -webkit-user-select: text;\n  -webkit-touch-callout: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.neworder {\n  background: #e5e50c;\n}\n.adagio_checkbox {\n  background: url(\"/images/adagio.png\") center center !important;\n  background-size: 25px 25px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "content-compact--container",
      staticStyle: { "user-select": "text" }
    },
    [
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("card-custom", [
            _c("div", { staticClass: "flex flex-row w-full" }, [
              _c("div", { staticClass: "flex flex-col w-10/12" }, [
                _c(
                  "div",
                  { staticClass: "flex" },
                  _vm._l(_vm.variables.status, function(status, index) {
                    return _c(
                      "button",
                      {
                        key: index,
                        staticClass: "btn font-bold p-4 mr-4",
                        class: [
                          _vm.inputs.filters.selected_status == status.value
                            ? "btn-primary"
                            : "btn-outline-primary"
                        ],
                        on: {
                          click: function($event) {
                            _vm.inputs.filters.selected_status = status.value
                          }
                        }
                      },
                      [_vm._v(_vm._s(status.text))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-col w-2/12 items-end" },
                [
                  _vm.authenticatedUser &&
                  ["admin", "purchaser"].includes(_vm.authenticatedUser.role)
                    ? _c(
                        "router-link",
                        {
                          staticClass:
                            "btn btn-outline-primary font-bold no-underline p-4",
                          attrs: { to: { name: "orders_status_report" } }
                        },
                        [_vm._v("Order Status Report")]
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", { attrs: { title: "Search & Filters" } }, [
            _c("div", { staticClass: "flex flex-col w-full" }, [
              _c(
                "div",
                { staticClass: "w-full mb-2 mt-4 flex sm:flex-row flex-col" },
                [
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
                      attrs: { type: "text", placeholder: "Search PO #" },
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
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-full sm:w-1/3 flex sm:ml-5 ml-0 mt-2 sm:mt-0"
                    },
                    [
                      _c("v-select", {
                        staticClass: "input w-full",
                        class: [
                          !_vm.inputs.filters.vendor ? "input-empty" : ""
                        ],
                        attrs: {
                          options: _vm.variables.vendors,
                          autocomplete: "",
                          searchable: "",
                          placeholder: "Filter vendor",
                          label: "name",
                          reduce: function(vendor) {
                            return vendor.id
                          }
                        },
                        model: {
                          value: _vm.inputs.filters.vendor,
                          callback: function($$v) {
                            _vm.$set(_vm.inputs.filters, "vendor", $$v)
                          },
                          expression: "inputs.filters.vendor"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-full sm:w-auto sm:ml-5 ml-0 sm:mt-0 mt-4 flex flex-row"
                    },
                    [
                      _vm.conditions.search_active
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-danger",
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "sm:hidden flex-1 flex" }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          class: [
                            _vm.inputs.filters.search == "" &&
                            !_vm.inputs.filters.vendor
                              ? "disabled"
                              : "",
                            _vm.conditions.search_active ? "ml-5" : ""
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
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "card-custom",
            { staticClass: "mt-10", attrs: { title: "Order List" } },
            [
              _c("template", { slot: "action" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex justify-end",
                    staticStyle: { width: "100%" }
                  },
                  [
                    _c("div", { staticClass: "flex flex-end w-6/12" }, [
                      _c("div", { staticClass: "flex flex-col w-6/12 mr-2" }, [
                        _vm.multiple_download.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.createMultipleOrdersFile("csv")
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "btn--text" }, [
                                  _vm._v("CSV Download")
                                ])
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-col w-6/12" }, [
                        _vm.multiple_download.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.createMultipleOrdersFile("pdf")
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "btn--text" }, [
                                  _vm._v("PDF Download")
                                ])
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w-full" }, [
                _c(
                  "div",
                  { ref: "table", staticClass: "flex flex-col w-full" },
                  [
                    _vm.data.datas.length > 0 || _vm.conditions.loadings.datas
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
                                    staticStyle: { "overflow-x": "auto" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        ref: "table",
                                        staticClass: "tablecustom my-8 w-full",
                                        staticStyle: { "min-width": "1100px" }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "tablecustom--container flex"
                                          },
                                          [
                                            !_vm.conditions.loadings.datas
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
                                                              "tablecustom-header--content w-1/6",
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              PO #\n                            "
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
                                                              "tablecustom-header--content w-4/12",
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              Note\n                            "
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
                                                              "tablecustom-header--content w-1/12",
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              Date\n                            "
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
                                                              "tablecustom-header--content w-2/12",
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              Vendor #\n                            "
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
                                                              [
                                                                "purchaser",
                                                                "viewer"
                                                              ].includes(
                                                                _vm
                                                                  .authenticatedUser
                                                                  .role
                                                              )
                                                                ? "w-1/4"
                                                                : "w-1/6"
                                                            ],
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              PDF Download \n                            "
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
                                                              [
                                                                "purchaser",
                                                                "viewer"
                                                              ].includes(
                                                                _vm
                                                                  .authenticatedUser
                                                                  .role
                                                              )
                                                                ? "w-1/4"
                                                                : "w-1/6"
                                                            ],
                                                            staticStyle: {
                                                              padding: "0 15px"
                                                            }
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
                                                                  "\n                              CSV Download \n                            "
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
                                                              "tablecustom-header--content w-1/12",
                                                            staticStyle: {
                                                              padding: "0 15px",
                                                              display: "none"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                              },
                                                              [_vm._v("cu in")]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        [
                                                          "admin",
                                                          "purchaser",
                                                          "viewer"
                                                        ].includes(
                                                          _vm.authenticatedUser
                                                            .role
                                                        )
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-header--content w-1/6",
                                                                staticStyle: {
                                                                  padding:
                                                                    "0 15px"
                                                                }
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
                                                                      "\n                              Actions \n                            "
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
                                                          "margin-bottom":
                                                            "12px"
                                                        }
                                                      },
                                                      [
                                                        _vm._l(
                                                          _vm.data.datas,
                                                          function(
                                                            order,
                                                            index
                                                          ) {
                                                            return [
                                                              _c(
                                                                "div",
                                                                {
                                                                  key: index,
                                                                  staticClass:
                                                                    "flex",
                                                                  class: [
                                                                    order.is_confirmed ==
                                                                      0 &&
                                                                    order.is_excel_uploaded ==
                                                                      1
                                                                      ? "neworder"
                                                                      : ""
                                                                  ]
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "tablecustom-content--content flex items-center w-1/6"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text flex"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "input-checkbox--container m-0"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives: [
                                                                                    {
                                                                                      name:
                                                                                        "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        _vm.multiple_download,
                                                                                      expression:
                                                                                        "multiple_download"
                                                                                    }
                                                                                  ],
                                                                                  staticClass:
                                                                                    "input-checkbox--checkbox",
                                                                                  attrs: {
                                                                                    type:
                                                                                      "checkbox",
                                                                                    name:
                                                                                      "multiple_download"
                                                                                  },
                                                                                  domProps: {
                                                                                    value:
                                                                                      order.id,
                                                                                    checked: Array.isArray(
                                                                                      _vm.multiple_download
                                                                                    )
                                                                                      ? _vm._i(
                                                                                          _vm.multiple_download,
                                                                                          order.id
                                                                                        ) >
                                                                                        -1
                                                                                      : _vm.multiple_download
                                                                                  },
                                                                                  on: {
                                                                                    change: function(
                                                                                      $event
                                                                                    ) {
                                                                                      var $$a =
                                                                                          _vm.multiple_download,
                                                                                        $$el =
                                                                                          $event.target,
                                                                                        $$c = $$el.checked
                                                                                          ? true
                                                                                          : false
                                                                                      if (
                                                                                        Array.isArray(
                                                                                          $$a
                                                                                        )
                                                                                      ) {
                                                                                        var $$v =
                                                                                            order.id,
                                                                                          $$i = _vm._i(
                                                                                            $$a,
                                                                                            $$v
                                                                                          )
                                                                                        if (
                                                                                          $$el.checked
                                                                                        ) {
                                                                                          $$i <
                                                                                            0 &&
                                                                                            (_vm.multiple_download = $$a.concat(
                                                                                              [
                                                                                                $$v
                                                                                              ]
                                                                                            ))
                                                                                        } else {
                                                                                          $$i >
                                                                                            -1 &&
                                                                                            (_vm.multiple_download = $$a
                                                                                              .slice(
                                                                                                0,
                                                                                                $$i
                                                                                              )
                                                                                              .concat(
                                                                                                $$a.slice(
                                                                                                  $$i +
                                                                                                    1
                                                                                                )
                                                                                              ))
                                                                                        }
                                                                                      } else {
                                                                                        _vm.multiple_download = $$c
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          order.po_number
                                                                            ? _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-1 ml-4"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      order.po_number
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-1 ml-4"
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
                                                                        "tablecustom-content--content flex items-center w-4/12"
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
                                                                                "input",
                                                                                {
                                                                                  directives: [
                                                                                    {
                                                                                      name:
                                                                                        "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        order.order_note,
                                                                                      expression:
                                                                                        "order.order_note"
                                                                                    }
                                                                                  ],
                                                                                  staticClass:
                                                                                    "input",
                                                                                  class: [
                                                                                    order.order_note ==
                                                                                      "" &&
                                                                                    order.order_note ==
                                                                                      null
                                                                                      ? "input-empty"
                                                                                      : ""
                                                                                  ],
                                                                                  attrs: {
                                                                                    type:
                                                                                      "text"
                                                                                  },
                                                                                  domProps: {
                                                                                    value:
                                                                                      order.order_note
                                                                                  },
                                                                                  on: {
                                                                                    change: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.changeOrderNote(
                                                                                        index
                                                                                      )
                                                                                    },
                                                                                    keyup: function(
                                                                                      $event
                                                                                    ) {
                                                                                      if (
                                                                                        !$event.type.indexOf(
                                                                                          "key"
                                                                                        ) &&
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
                                                                                      return _vm.changeOrderNote(
                                                                                        index
                                                                                      )
                                                                                    },
                                                                                    input: function(
                                                                                      $event
                                                                                    ) {
                                                                                      if (
                                                                                        $event
                                                                                          .target
                                                                                          .composing
                                                                                      ) {
                                                                                        return
                                                                                      }
                                                                                      _vm.$set(
                                                                                        order,
                                                                                        "order_note",
                                                                                        $event
                                                                                          .target
                                                                                          .value
                                                                                      )
                                                                                    }
                                                                                  }
                                                                                }
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
                                                                        "tablecustom-content--content flex items-center w-1/12"
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
                                                                                "\n                                    " +
                                                                                  _vm._s(
                                                                                    order.created_at_date
                                                                                  ) +
                                                                                  "\n                                  "
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
                                                                        "tablecustom-content--content flex items-center w-2/12"
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
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 tooltip w-full flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    " +
                                                                                  _vm._s(
                                                                                    order
                                                                                      .vendor
                                                                                      .vendor_number
                                                                                  ) +
                                                                                  "\n                                  "
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
                                                                        "tablecustom-content--content flex items-center",
                                                                      class: [
                                                                        _vm
                                                                          .authenticatedUser
                                                                          .role ==
                                                                          "purchaser" ||
                                                                        _vm
                                                                          .authenticatedUser
                                                                          .role ==
                                                                          "viewer"
                                                                          ? "w-1/4"
                                                                          : "w-1/6"
                                                                      ]
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text text-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "m-0",
                                                                              attrs: {
                                                                                href:
                                                                                  _vm.apiLink +
                                                                                  "/public/neworders/pdf?orderNumber=" +
                                                                                  encodeURIComponent(
                                                                                    order.order_code
                                                                                  ),
                                                                                target:
                                                                                  "_blank"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Download"
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
                                                                        "tablecustom-content--content flex items-center",
                                                                      class: [
                                                                        _vm
                                                                          .authenticatedUser
                                                                          .role ==
                                                                          "purchaser" ||
                                                                        _vm
                                                                          .authenticatedUser
                                                                          .role ==
                                                                          "viewer"
                                                                          ? "w-1/4"
                                                                          : "w-1/6"
                                                                      ]
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text text-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              attrs: {
                                                                                href:
                                                                                  _vm.apiLink +
                                                                                  "/public/neworders/csv?orderNumber=" +
                                                                                  encodeURIComponent(
                                                                                    order.order_code
                                                                                  ),
                                                                                target:
                                                                                  "_blank"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Download"
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
                                                                        "tablecustom-content--content flex items-center w-1/12",
                                                                      staticStyle: {
                                                                        display:
                                                                          "none"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text text-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "dropdown-custom",
                                                                            {
                                                                              staticClass:
                                                                                "cursor-pointer",
                                                                              attrs: {
                                                                                "close-on-click":
                                                                                  "",
                                                                                "custom-content":
                                                                                  "",
                                                                                "trigger-click":
                                                                                  ""
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "feather-icon",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-primary h-4 w-4",
                                                                                  attrs: {
                                                                                    icon:
                                                                                      "PlusCircleIcon"
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.getOrderCubicInches(
                                                                                        order.id
                                                                                      )
                                                                                    }
                                                                                  }
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "dropdown-menu-custom",
                                                                                {
                                                                                  staticClass:
                                                                                    "profile-dropdown--container absolute",
                                                                                  staticStyle: {
                                                                                    "min-width":
                                                                                      "282px",
                                                                                    "z-index":
                                                                                      "10010"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "w-full flex"
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "div",
                                                                                        {
                                                                                          staticClass:
                                                                                            "w-full flex justify-center flex-row"
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "p",
                                                                                            {
                                                                                              staticClass:
                                                                                                "flex w-2/2 justify-center m-0"
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                "No data found"
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm.authenticatedUser &&
                                                                  [
                                                                    "admin",
                                                                    "purchaser",
                                                                    "viewer"
                                                                  ].includes(
                                                                    _vm
                                                                      .authenticatedUser
                                                                      .role
                                                                  )
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--content flex items-center w-1/6"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "tablecustom-content--text flex text-center"
                                                                            },
                                                                            [
                                                                              _vm.authenticatedUser &&
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "input-checkbox--container",
                                                                                      staticStyle: {
                                                                                        height:
                                                                                          "22px"
                                                                                      },
                                                                                      attrs: {
                                                                                        title:
                                                                                          order.is_confirmed ==
                                                                                          0
                                                                                            ? "Please click to confirm the order"
                                                                                            : "Please click to remove confirmation"
                                                                                      },
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.changeOrderCompletedStatus(
                                                                                            order.id
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "input-checkbox--checkbox",
                                                                                          staticStyle: {
                                                                                            "border-color":
                                                                                              "rgba(0, 0, 0, 0.3)",
                                                                                            width:
                                                                                              "26px",
                                                                                            height:
                                                                                              "26px"
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          order.is_confirmed ==
                                                                                            1 &&
                                                                                          order.status ==
                                                                                            "confirmed"
                                                                                            ? _c(
                                                                                                "feather-icon",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "input-checkbox--check-icon h-4 w-4",
                                                                                                  staticStyle: {
                                                                                                    color:
                                                                                                      "var(--color-primary)"
                                                                                                  },
                                                                                                  attrs: {
                                                                                                    icon:
                                                                                                      "CheckIcon"
                                                                                                  }
                                                                                                }
                                                                                              )
                                                                                            : _vm._e()
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _vm.authenticatedUser &&
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "input-checkbox--container mr-5",
                                                                                      staticStyle: {
                                                                                        height:
                                                                                          "22px"
                                                                                      },
                                                                                      attrs: {
                                                                                        title:
                                                                                          order.is_adagio ==
                                                                                          0
                                                                                            ? "Please click to confirm adagio status"
                                                                                            : "Please click to remove adagio confirmation status"
                                                                                      },
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.changeAdagioStatus(
                                                                                            order.id
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      order.is_adagio ==
                                                                                      0
                                                                                        ? _c(
                                                                                            "span",
                                                                                            {
                                                                                              staticClass:
                                                                                                "input-checkbox--checkbox",
                                                                                              staticStyle: {
                                                                                                width:
                                                                                                  "26px",
                                                                                                height:
                                                                                                  "26px",
                                                                                                background:
                                                                                                  "url('/images/adagio_black_outline.png') center center !important",
                                                                                                "background-size":
                                                                                                  "24px 24px !important"
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                        : _c(
                                                                                            "span",
                                                                                            {
                                                                                              staticClass:
                                                                                                "input-checkbox--checkbox",
                                                                                              staticStyle: {
                                                                                                width:
                                                                                                  "26px",
                                                                                                height:
                                                                                                  "26px",
                                                                                                background:
                                                                                                  "url('/images/adagio.png') center center !important",
                                                                                                "background-size":
                                                                                                  "26px 26px !important"
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _vm.authenticatedUser &&
                                                                              [
                                                                                "admin",
                                                                                "purchaser",
                                                                                "viewer"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? _c(
                                                                                    "router-link",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-outline-primary p-1 mr-5 items-center justify-center",
                                                                                      staticStyle: {
                                                                                        "min-width":
                                                                                          "initial"
                                                                                      },
                                                                                      attrs: {
                                                                                        to: {
                                                                                          name:
                                                                                            "order_detail",
                                                                                          params: {
                                                                                            order_number:
                                                                                              order.id
                                                                                          }
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
                                                                                            "feather-icon",
                                                                                            {
                                                                                              staticClass:
                                                                                                "pr-0 h-4 w-4",
                                                                                              attrs: {
                                                                                                icon:
                                                                                                  "EyeIcon"
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _vm.authenticatedUser &&
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? _c(
                                                                                    "router-link",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-outline-primary p-1 mr-5 items-center justify-center",
                                                                                      staticStyle: {
                                                                                        "min-width":
                                                                                          "initial"
                                                                                      },
                                                                                      attrs: {
                                                                                        to: {
                                                                                          name:
                                                                                            "edit_order",
                                                                                          params: {
                                                                                            order_number:
                                                                                              order.id
                                                                                          }
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
                                                                                  )
                                                                                : _vm._e(),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _vm.authenticatedUser &&
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? _c(
                                                                                    "button",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-outline-danger p-1 flex items-center justify-center",
                                                                                      staticStyle: {
                                                                                        "min-width":
                                                                                          "initial"
                                                                                      },
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.deleteOrder(
                                                                                            order
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
                                                                                : _vm.authenticatedUser &&
                                                                                  [
                                                                                    "admin",
                                                                                    "purchaser"
                                                                                  ].includes(
                                                                                    _vm
                                                                                      .authenticatedUser
                                                                                      .role
                                                                                  ) &&
                                                                                  order.shipment_order_items_without_receive_count >
                                                                                    0
                                                                                ? _c(
                                                                                    "button",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-outline-danger p-1 flex items-center justify-center tooltip",
                                                                                      staticStyle: {
                                                                                        "min-width":
                                                                                          "initial",
                                                                                        "border-color":
                                                                                          "#cfc0c0"
                                                                                      },
                                                                                      attrs: {
                                                                                        disabled:
                                                                                          ""
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "btn--text custom-text-bold flex items-center justify-center",
                                                                                          staticStyle: {
                                                                                            opacity:
                                                                                              "0.5"
                                                                                          }
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
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "tooltiptext"
                                                                                        },
                                                                                        [
                                                                                          [
                                                                                            _vm._v(
                                                                                              "Order cannot be deleted because the shipment for the order has already been created"
                                                                                            )
                                                                                          ]
                                                                                        ],
                                                                                        2
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                : _vm._e()
                                                                            ],
                                                                            1
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
                                              : _c(
                                                  "div",
                                                  {
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
                                                      _vm._l(4, function(p) {
                                                        return _c(
                                                          "div",
                                                          {
                                                            key: p,
                                                            staticClass:
                                                              "tablecustom-header--content mx-1 w-1/4"
                                                          },
                                                          [
                                                            _c("div", {
                                                              staticClass:
                                                                "tablecustom-header--text my-3 loading-placeholder loading-placeholder__rectangle",
                                                              staticStyle: {
                                                                "min-height":
                                                                  "14px"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      }),
                                                      0
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "tablecustom-content--container w-full",
                                                        staticStyle: {
                                                          "margin-bottom":
                                                            "12px"
                                                        }
                                                      },
                                                      [
                                                        _vm._l(10, function(i) {
                                                          return [
                                                            _c(
                                                              "div",
                                                              {
                                                                key: i,
                                                                staticClass:
                                                                  "flex"
                                                              },
                                                              _vm._l(
                                                                4,
                                                                function(j) {
                                                                  return _c(
                                                                    "div",
                                                                    {
                                                                      key: j,
                                                                      staticClass:
                                                                        "tablecustom-content--content w-1/4",
                                                                      style: {
                                                                        padding:
                                                                          "18px 10px"
                                                                      }
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
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "loading-placeholder loading-placeholder__rectangle"
                                                                            }
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                }
                                                              ),
                                                              0
                                                            )
                                                          ]
                                                        })
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                )
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
                    !_vm.conditions.loadings.datas
                      ? _c("div", { staticClass: "table-custom--footer" }, [
                          _c(
                            "div",
                            { staticClass: "w-1/2 flex justify-start" },
                            [
                              _vm.data.paginations.current_page >
                              _vm.data.paginations.first_page
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary w-1/5 mr-4",
                                      on: {
                                        click: function($event) {
                                          _vm.goToPage(
                                            parseInt(
                                              _vm.data.paginations.current_page
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
                          _vm.data.datas.length >= _vm.conditions.data_each_page
                            ? _c(
                                "div",
                                { staticClass: "w-1/2 flex justify-end" },
                                [
                                  _vm.data.paginations.current_page <
                                  _vm.data.paginations.next_page
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-primary w-1/5",
                                          on: {
                                            click: function($event) {
                                              _vm.goToPage(
                                                parseInt(
                                                  _vm.data.paginations
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
            ],
            2
          )
        ],
        1
      )
    ]
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
          _vm._v("Purchase Order List")
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/pages/Orders/OrderList.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderList.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderList.vue?vue&type=template&id=49035a8c& */ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c&");
/* harmony import */ var _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Orders/OrderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderList.vue?vue&type=template&id=49035a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderList.vue?vue&type=template&id=49035a8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_49035a8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
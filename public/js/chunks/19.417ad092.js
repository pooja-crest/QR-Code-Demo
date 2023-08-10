(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_orderApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/orderApi */ "./resources/js/apis/orderApi.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/vendorApi */ "./resources/js/apis/vendorApi.js");
/* harmony import */ var _components_CardCustom_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/CardCustom.vue */ "./resources/js/components/CardCustom.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_apis_orderApi__WEBPACK_IMPORTED_MODULE_2__["default"], _apis_vendorApi__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    CardCustom: _components_CardCustom_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
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
          value: "priority",
          text: "Priority"
        }, {
          value: "past_esd",
          text: "PAST ESD"
        }],
        vendors: [],
        sort: {
          order_column: 'po_number',
          order_by: 'desc'
        }
      },
      apiLink: "http://127.0.0.1:8000/api",
      multiple_orders_file: null
    };
  },
  watch: {
    "inputs.filters.selected_status": function inputsFiltersSelected_status(value) {
      this.data.paginations.current_page = 1;
      this.getOrders();
    }
  },
  methods: {
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
      var _this = this;

      this.conditions.loadings.datas = true;
      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.selected_status != 'all' ? this.inputs.filters.selected_status : null,
        vendor_id: this.inputs.filters.vendor,
        order_column: this.variables.sort.order_column,
        order_by: this.variables.sort.order_by
      };
      this.orderApi_getAllOrderItemsList(params).then(function (response) {
        _this.data.datas = response.data;

        if (response.data.length >= _this.conditions.data_each_page) {
          _this.data.paginations.next_page = _this.data.paginations.current_page + 1;
        }
      })["finally"](function () {
        return _this.conditions.loadings.datas = false;
      });
    },
    goToPage: function goToPage(page_number) {
      this.data.paginations.current_page = page_number;
      this.getOrders();
    },
    createMultipleOrderStatusReportFile: function createMultipleOrderStatusReportFile() {
      var _this2 = this;

      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.selected_status != 'all' ? this.inputs.filters.selected_status : null,
        vendor_id: this.inputs.filters.vendor,
        order_column: this.variables.sort.order_column,
        order_by: this.variables.sort.order_by
      };
      this.orderApi_createMultipleOrderStatusReportFile(params).then(function (response) {
        if (response.success) {
          _this2.multiple_orders_file = response.data.filename;
          var link = document.createElement('a');
          link.href = _this2.apiLink + '/public/orders_status_reports/file?fileName=' + _this2.multiple_orders_file;
          link.download = _this2.multiple_orders_file;
          link.click();

          _this2.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: response.message
          });
        } else {
          _this2.$notify({
            group: "notification",
            type: "warn",
            title: response.message,
            text: ''
          });
        }
      });
    },
    changeOrderStatusReportNote: function changeOrderStatusReportNote(index) {
      var _this3 = this;

      if (this.data.datas[index].order_status_note.length > 190) {
        this.$notify({
          group: "notification",
          type: "warn",
          title: 'Maximum length for order note is 190 characters',
          text: ''
        });
      } else {
        var order = this.data.datas[index];
        this.orderApi_updateOrderStatusReportNote(order).then(function (response) {
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
      }
    },
    updatePriority: function updatePriority(index) {
      var _this4 = this;

      var order = this.data.datas[index];
      this.orderApi_updateOrderStatusReportPriority(order).then(function (response) {
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
    cancelSelectedItem: function cancelSelectedItem(order_item_id) {
      var _this5 = this;

      var item_number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to cancel ".concat(quantity, " piece(s) of ").concat(item_number, " open order item quantity."),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this5.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this5.orderApi_cancelOpenItemQuantity(order_item_id).then(function (response) {
            if (response.success) {
              _this5.$notify({
                group: "notification",
                type: "success",
                title: response.message,
                text: ''
              });

              _this5.getOrders();
            } else {
              _this5.$notify({
                group: "notification",
                type: "warn",
                title: response.message,
                text: ''
              });
            }
          })["catch"](function (error) {
            return console.log(error);
          })["finally"](function () {
            loading.hide();
          });
        }
      });
    },
    changeEsdDate: function changeEsdDate(index) {
      var _this6 = this;

      this.$nextTick(function () {
        if (_this6.data.datas[index].cal_esd_date != null) {
          var loading = _this6.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          var order_item_id = _this6.data.datas[index].id;
          var esdData = {
            order_id: _this6.data.datas[index].order_id,
            esd_date: _this6.data.datas[index].cal_esd_date
          };

          _this6.orderApi_changeOrderEsd(order_item_id, esdData).then(function (response) {
            if (response.success) {
              _this6.getOrders();

              _this6.$notify({
                group: "notification",
                type: "success",
                title: response.message,
                text: ''
              });
            } else {
              _this6.$notify({
                group: "notification",
                type: "error",
                title: response.message,
                text: ''
              });
            }
          })["catch"](function (error) {
            return console.log(error);
          })["finally"](function () {
            loading.hide();
          });
        }
      });
    },
    sortby: function sortby(order_column) {
      this.variables.sort.order_column = order_column;

      if (this.variables.sort.order_by == 'asc') {
        this.variables.sort.order_by = 'desc';
      } else {
        this.variables.sort.order_by = 'asc';
      }

      this.getOrders();
    }
  },
  created: function created() {
    var _this7 = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser", "viewer", "order_tracking"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.getOrders();
              this.vendorApi_getForFilter().then(function (_ref) {
                var data = _ref.data;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderlist {\n  -webkit-user-select: text;\n  -webkit-touch-callout: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.neworder {\n  background: #e5e50c;\n}\n.adagio_checkbox {\n  background: url(\"/images/adagio.png\") center center !important;\n  background-size: 25px 25px !important;\n}\n.tooltip .tooltiptext__left {\n  bottom: 0;\n}\nsvg.starred {\n  fill: #ffd100;\n}\n.mx-datepicker {\n  position: relative;\n  display: inline-block;\n  width: 125px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusReport.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                      attrs: {
                        type: "text",
                        placeholder: "Search PO# or Item #"
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
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", [
            _c(
              "div",
              { staticClass: "flex flex-row w-full" },
              _vm._l(_vm.variables.status, function(status, index) {
                return _c("div", { key: index, staticClass: "flex flex-col" }, [
                  _c(
                    "button",
                    {
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
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c(
            "card-custom",
            {
              staticClass: "mt-5",
              attrs: { title: "Order Status Report List" }
            },
            [
              _c("template", { slot: "action" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex justify-end",
                    staticStyle: { width: "100%" }
                  },
                  [
                    _c("div", { staticClass: "flex flex-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              return _vm.createMultipleOrderStatusReportFile()
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "btn--text" }, [
                            _vm._v("Download")
                          ])
                        ]
                      )
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
                                                                _c("span", [
                                                                  _vm._v("PO #")
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "po_number"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "po_number" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Order Date"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "order_date"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "order_date" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                              padding:
                                                                "0 40px 0 40px"
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "ESD Date"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "esd_date"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "esd_date" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Vendor #"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "vendor"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "vendor" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Item Number"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "item_number"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "item_number" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Qty Ordered"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "qty_ordered"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "qty_ordered" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Qty shipped"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "qty_shipped"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "qty_shipped" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                              "tablecustom-header--content w-3/12",
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
                                                                  "\n                              Notes\n                            "
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Priority"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "label",
                                                                  {
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.sortby(
                                                                          "priority"
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_column ==
                                                                      "priority" &&
                                                                    _vm
                                                                      .variables
                                                                      .sort
                                                                      .order_by ==
                                                                      "asc"
                                                                      ? _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowUpIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      : _c(
                                                                          "feather-icon",
                                                                          {
                                                                            staticClass:
                                                                              "cursor-pointer h-4 w-4",
                                                                            attrs: {
                                                                              icon:
                                                                                "ArrowDownIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                  ],
                                                                  1
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Cancel Open Qty"
                                                                  )
                                                                ])
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
                                                            orderItem,
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
                                                                        "tablecustom-content--content flex items-center w-2/12"
                                                                    },
                                                                    [
                                                                      [
                                                                        "admin",
                                                                        "purchaser"
                                                                      ].includes(
                                                                        _vm
                                                                          .authenticatedUser
                                                                          .role
                                                                      )
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "tablecustom-content--text flex"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "router-link",
                                                                                {
                                                                                  staticClass:
                                                                                    "no-underline",
                                                                                  attrs: {
                                                                                    to: {
                                                                                      name:
                                                                                        "order_detail",
                                                                                      params: {
                                                                                        order_number:
                                                                                          orderItem.order_id
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                [
                                                                                  orderItem.po_number
                                                                                    ? _c(
                                                                                        "p",
                                                                                        {
                                                                                          staticClass:
                                                                                            "m-1 ml-4"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              orderItem.po_number
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
                                                                            ],
                                                                            1
                                                                          )
                                                                        : _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "tablecustom-content--text flex"
                                                                            },
                                                                            [
                                                                              orderItem.po_number
                                                                                ? _c(
                                                                                    "p",
                                                                                    {
                                                                                      staticClass:
                                                                                        "m-1 ml-4"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          orderItem.po_number
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .$moment(
                                                                                      orderItem.created_at
                                                                                    )
                                                                                    .utcOffset(
                                                                                      "-0800"
                                                                                    )
                                                                                    .format(
                                                                                      "MM/DD/YYYY"
                                                                                    )
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
                                                                          [
                                                                            "admin",
                                                                            "purchaser"
                                                                          ].includes(
                                                                            _vm
                                                                              .authenticatedUser
                                                                              .role
                                                                          )
                                                                            ? _c(
                                                                                "date-picker",
                                                                                {
                                                                                  attrs: {
                                                                                    format:
                                                                                      "MM/DD/YYYY",
                                                                                    "value-type":
                                                                                      "YYYY-MM-DD",
                                                                                    type:
                                                                                      "date",
                                                                                    confirm: true,
                                                                                    clearable: false
                                                                                  },
                                                                                  on: {
                                                                                    confirm: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.changeEsdDate(
                                                                                        index
                                                                                      )
                                                                                    }
                                                                                  },
                                                                                  model: {
                                                                                    value:
                                                                                      orderItem.cal_esd_date,
                                                                                    callback: function(
                                                                                      $$v
                                                                                    ) {
                                                                                      _vm.$set(
                                                                                        orderItem,
                                                                                        "cal_esd_date",
                                                                                        $$v
                                                                                      )
                                                                                    },
                                                                                    expression:
                                                                                      "orderItem.cal_esd_date"
                                                                                  }
                                                                                }
                                                                              )
                                                                            : _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-0 flex items-center justify-center"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      !!orderItem.cal_esd_date
                                                                                        ? _vm
                                                                                            .$moment(
                                                                                              orderItem.cal_esd_date
                                                                                            )
                                                                                            .format(
                                                                                              "MM/DD/YY"
                                                                                            )
                                                                                        : "-"
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                        ],
                                                                        1
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  orderItem.vendor_number
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  orderItem.item_id
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  orderItem.quantity_ordered
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
                                                                          orderItem.total_shipped_quantity
                                                                            ? _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-0 flex items-center justify-center"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      orderItem.total_shipped_quantity
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-0 flex items-center justify-center"
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
                                                                        "tablecustom-content--content flex items-center w-3/12"
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
                                                                                        orderItem.order_status_note,
                                                                                      expression:
                                                                                        "orderItem.order_status_note"
                                                                                    }
                                                                                  ],
                                                                                  staticClass:
                                                                                    "input",
                                                                                  class: [
                                                                                    orderItem.order_status_note ==
                                                                                      "" &&
                                                                                    orderItem.order_status_note ==
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
                                                                                      orderItem.order_status_note
                                                                                  },
                                                                                  on: {
                                                                                    change: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.changeOrderStatusReportNote(
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
                                                                                      return _vm.changeOrderStatusReportNote(
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
                                                                                        orderItem,
                                                                                        "order_status_note",
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "a",
                                                                                {
                                                                                  staticStyle: {
                                                                                    color:
                                                                                      "#ffd100"
                                                                                  },
                                                                                  attrs: {
                                                                                    href:
                                                                                      "javascript:void(0);"
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.updatePriority(
                                                                                        index
                                                                                      )
                                                                                    }
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "feather-icon",
                                                                                    {
                                                                                      attrs: {
                                                                                        icon:
                                                                                          "StarIcon",
                                                                                        svgClasses:
                                                                                          "h-4 w-4",
                                                                                        svgClasses: [
                                                                                          orderItem.priority ==
                                                                                          1
                                                                                            ? "starred"
                                                                                            : ""
                                                                                        ]
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
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "button",
                                                                                {
                                                                                  staticClass:
                                                                                    "btn btn-outline-danger p-1 flex items-center justify-center",
                                                                                  class: {
                                                                                    disabled: !orderItem.total_shipped_quantity
                                                                                  },
                                                                                  staticStyle: {
                                                                                    "min-width":
                                                                                      "initial"
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      orderItem.total_shipped_quantity
                                                                                        ? _vm.cancelSelectedItem(
                                                                                            orderItem.id,
                                                                                            orderItem.item_id,
                                                                                            orderItem.total_shipped_quantity
                                                                                              ? orderItem.quantity_ordered -
                                                                                                  orderItem.total_shipped_quantity
                                                                                              : 0
                                                                                          )
                                                                                        : null
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
                                                                                              "x-circle",
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
                                                                    ]
                                                                  )
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
          _vm._v("Order Status Report")
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

/***/ "./resources/js/views/pages/Orders/OrderStatusReport.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderStatusReport.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderStatusReport.vue?vue&type=template&id=092df3b4& */ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4&");
/* harmony import */ var _OrderStatusReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderStatusReport.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderStatusReport.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderStatusReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Orders/OrderStatusReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusReport.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusReport.vue?vue&type=template&id=092df3b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderStatusReport.vue?vue&type=template&id=092df3b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusReport_vue_vue_type_template_id_092df3b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
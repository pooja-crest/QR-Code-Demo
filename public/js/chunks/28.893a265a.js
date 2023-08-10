(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_orderApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/orderApi */ "./resources/js/apis/orderApi.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrderDetail",
  mixins: [_apis_orderApi__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      inputs: {
        order_id: null,
        vendor_id: null,
        vendor_number: null,
        vendor_name: null,
        items: [],
        po_number: null,
        order_note: "ITEMS DUE OVER 60 DAYS MUST SHIP VIA AIR AT VENDOR'S EXPENSE",
        billing: {
          name: null,
          email: null,
          address: null,
          city: null,
          fax: null,
          phone: null,
          state: null,
          zip: null
        },
        shipping: {
          name: null,
          email: null,
          address: null,
          city: null,
          fax: null,
          phone: null,
          state: null,
          zip: null
        },
        eta_date: null,
        created_at_date: null,
        oldOrderFiles: []
      },
      variables: {
        vendors: [],
        items: [],
        vendor_address: {
          name: null,
          email: null,
          address: null,
          phone: null
        },
        sort: {
          order_column: null,
          order_by: 'asc'
        }
      },
      apiLink: "http://127.0.0.1:8000/api",
      shipmentList: []
    };
  },
  computed: {
    isPurchaser: function isPurchaser() {
      return !["admin", "purchaser"].includes(this.authenticatedUser.role);
    },
    totalCubicInches: function totalCubicInches() {
      var total_cubic_inches = 0;

      for (var i = 0; i < this.inputs.items.length; i++) {
        var item = this.inputs.items[i];

        if (!!item.qty_cubic_inches) {
          total_cubic_inches += parseFloat(item.qty_cubic_inches);
        }
      }

      return total_cubic_inches.toFixed(2);
    },
    totalCubicFeet: function totalCubicFeet() {
      var total_cubic_feet = 0;

      for (var i = 0; i < this.inputs.items.length; i++) {
        var item = this.inputs.items[i];

        if (!!item.qty_cubic_feet) {
          total_cubic_feet += parseFloat(item.qty_cubic_feet);
        }
      }

      return total_cubic_feet.toFixed(2);
    },
    totalPrice: function totalPrice() {
      var total_price = 0;

      for (var i = 0; i < this.inputs.items.length; i++) {
        var item = this.inputs.items[i];

        if (item.total_price != null) {
          total_price += parseFloat(item.total_price);
        }
      }

      return total_price;
    }
  },
  methods: {
    getOrder: function getOrder() {
      var _this = this;

      if (this.$route.params.order_number != '') {
        var orderId = this.$route.params.order_number;
        this.orderApi_getOne(orderId).then(function (response) {
          if (response.success == true && response.data != null) {
            _this.variables.vendor_address.name = response.data.vendor.name ? response.data.vendor.name : null;
            _this.variables.vendor_address.email = response.data.vendor.email ? response.data.vendor.email : null;
            _this.variables.vendor_address.address = response.data.vendor.address ? response.data.vendor.address : null;
            _this.variables.vendor_address.phone = response.data.vendor.telephone ? response.data.vendor.telephone : null;
            _this.inputs.billing.name = response.data.billto_name ? response.data.billto_name : "ELCO LIGHTING";
            _this.inputs.billing.email = response.data.billto_email ? response.data.billto_email : "";
            _this.inputs.billing.fax = response.data.billto_fax ? response.data.billto_fax : process.env.MIX_BILLTO_FAX;
            _this.inputs.billing.address = response.data.billto_address ? response.data.billto_address : "2042 E VERNON AVE";
            _this.inputs.billing.phone = response.data.billto_phone ? response.data.billto_phone : "";
            _this.inputs.billing.city = response.data.billto_city ? response.data.billto_city : "VERNON";
            _this.inputs.billing.state = response.data.billto_state ? response.data.billto_state : "CA";
            _this.inputs.billing.country = response.data.billto_country ? response.data.billto_country : process.env.MIX_BILLTO_COUNTRY;
            _this.inputs.billing.zip = response.data.billto_zip ? response.data.billto_zip : "90058";
            _this.inputs.shipping.name = response.data.shipto_name ? response.data.shipto_name : "ELCO LIGHTING";
            _this.inputs.shipping.email = response.data.shipto_email ? response.data.shipto_email : "";
            _this.inputs.shipping.fax = response.data.shipto_fax ? response.data.shipto_fax : process.env.MIX_BILLTO_FAX;
            _this.inputs.shipping.address = response.data.shipto_address ? response.data.shipto_address : "2042 E VERNON AVE";
            _this.inputs.shipping.phone = response.data.shipto_phone ? response.data.shipto_phone : "";
            _this.inputs.shipping.city = response.data.shipto_city ? response.data.shipto_city : "VERNON";
            _this.inputs.shipping.state = response.data.shipto_state ? response.data.shipto_state : "CA";
            _this.inputs.shipping.country = response.data.shipto_country ? response.data.shipto_country : process.env.MIX_BILLTO_COUNTRY;
            _this.inputs.shipping.zip = response.data.shipto_zip ? response.data.shipto_zip : "90058";
            _this.inputs.vendor_id = response.data.vendor.id;
            _this.inputs.vendor_number = response.data.vendor.vendor_number;
            _this.inputs.vendor_name = response.data.vendor.name;
            _this.inputs.order_id = response.data.id;
            _this.inputs.po_number = response.data.po_number;
            _this.inputs.eta_date = response.data.eta_date;
            _this.inputs.created_at_date = response.data.created_at_date;
            _this.inputs.oldOrderFiles = response.data.order_files;

            if (response.data.note != "" && response.data.note != null) {
              _this.inputs.order_note = response.data.note;
            } else {
              _this.inputs.order_note = _this.inputs.order_note + '\n' + response.data.vendor.po_note;
            }

            response.data.items.map(function (orderItem) {
              _this.inputs.items.push({
                item_id: orderItem.item.item_id,
                vendor_item_id: orderItem.vendor_item_id,
                quantity: orderItem.quantity_ordered,
                cancelled_quantity: orderItem.cancelled_quantity,
                carton_qty: orderItem.item.carton_qty,
                single_item_cubic_inches: orderItem.item.cubic_inches,
                qty_cubic_inches: !!orderItem.item.carton_qty && !!orderItem.item.cubic_inches ? (parseFloat(orderItem.item.cubic_inches) * _this.globalFunction_numberMaximiser(orderItem.item.carton_qty)).toFixed(2) : null,
                single_item_cubic_feet: orderItem.item.cubic_feet,
                qty_cubic_feet: !!orderItem.item.carton_qty && !!orderItem.item.cubic_feet ? (parseFloat(orderItem.item.cubic_feet) * ((orderItem.quantity_ordered - orderItem.cancelled_quantity) / _this.globalFunction_numberMaximiser(orderItem.item.carton_qty))).toFixed(2) : null,
                moq: orderItem.item.moq,
                note: orderItem.note,
                price: !!orderItem.unit_cost ? orderItem.unit_cost : orderItem.item.cost,
                total_price: !!orderItem.extended_cost ? orderItem.extended_cost : orderItem.item.cost * orderItem.quantity_ordered,
                expected_arrival_date: orderItem.eta_date
              });
            });
            response.data.items.map(function (orderItem) {
              orderItem.shipment_order_items.map(function (soi) {
                if (_this.shipmentList.some(function (el) {
                  return el.id === soi.shipment_order.id;
                }) == false) {
                  _this.shipmentList.push({
                    'id': soi.shipment_order.id,
                    'container_number': soi.shipment_order.container_number
                  });
                }
              });
            });
          } else {
            _this.$router.push("/");
          }
        });
      }
    },
    sortby: function sortby(order_column) {
      this.variables.sort.order_column = order_column;
      var filled_items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });
      this.variables.sort.order_by == 'desc';

      if (this.variables.sort.order_column == 'quantity') {
        if (this.variables.sort.order_by == 'asc') {
          filled_items.sort(function (a, b) {
            return !!a.quantity && !!b.quantity && parseInt(a.quantity) < parseInt(b.quantity) ? 1 : -1;
          });
          this.variables.sort.order_by = 'desc';
        } else if (this.variables.sort.order_by == 'desc') {
          filled_items.sort(function (a, b) {
            return !!a.quantity && !!b.quantity && parseInt(a.quantity) > parseInt(b.quantity) ? 1 : -1;
          });
          this.variables.sort.order_by = 'asc';
        }
      } else if (this.variables.sort.order_column == 'price') {
        if (this.variables.sort.order_by == 'asc') {
          filled_items.sort(function (a, b) {
            return !!a.price && !!b.price && parseFloat(a.price) < parseFloat(b.price) ? 1 : -1;
          });
          this.variables.sort.order_by = 'desc';
        } else if (this.variables.sort.order_by == 'desc') {
          filled_items.sort(function (a, b) {
            return !!a.price && !!b.price && parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
          });
          this.variables.sort.order_by = 'asc';
        }
      } else if (this.variables.sort.order_column == 'item_id') {
        if (this.variables.sort.order_by == 'asc') {
          filled_items.sort(function (a, b) {
            return !!a.item_id && !!b.item_id && a.item_id.toLowerCase() < b.item_id.toLowerCase() ? 1 : -1;
          });
          this.variables.sort.order_by = 'desc';
        } else if (this.variables.sort.order_by == 'desc') {
          filled_items.sort(function (a, b) {
            return !!a.item_id && !!b.item_id && a.item_id.toLowerCase() > b.item_id.toLowerCase() ? 1 : -1;
          });
          this.variables.sort.order_by = 'asc';
        }
      } else if (this.variables.sort.order_column == 'cancelled_quantity') {
        if (this.variables.sort.order_by == 'asc') {
          filled_items.sort(function (a, b) {
            return !!a.cancelled_quantity && !!b.cancelled_quantity && parseInt(a.cancelled_quantity) < parseInt(b.cancelled_quantity) ? 1 : -1;
          });
          this.variables.sort.order_by = 'desc';
        } else if (this.variables.sort.order_by == 'desc') {
          filled_items.sort(function (a, b) {
            return !!a.cancelled_quantity && !!b.cancelled_quantity && parseInt(a.cancelled_quantity) > parseInt(b.cancelled_quantity) ? 1 : -1;
          });
          this.variables.sort.order_by = 'asc';
        }
      }

      this.inputs.items = filled_items;
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser", "viewer"].includes(this.authenticatedUser.role)) {
              this.$router.push("/");
            } else {
              this.getOrder();
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overflow-scroll {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 1366px) {\n.wrapper-table {\n    min-width: 1600px !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "allow-copy content-compact--container flex flex-col" },
    [
      !_vm.isPurchaser
        ? _c(
            "card-custom",
            { staticClass: "mt-10", attrs: { title: "Choosen Vender" } },
            [
              _c("div", { staticClass: "flex w-full flex-col mt-4" }, [
                _c("div", { staticClass: "flex w-full" }, [
                  !!_vm.inputs.vendor_number && !!_vm.inputs.vendor_name
                    ? _c("div", { staticClass: "input" }, [
                        _vm._v(
                          _vm._s(_vm.inputs.vendor_number) +
                            " - " +
                            _vm._s(_vm.inputs.vendor_name)
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      (!_vm.isPurchaser && _vm.inputs.vendor_id) || _vm.isPurchaser
        ? [
            _c(
              "card-custom",
              {
                staticClass: "mt-10 overflow-scroll",
                attrs: { title: "Selected items into order" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex w-full flex-col mt-4 wrapper-table",
                    staticStyle: { "min-width": "800px" }
                  },
                  [
                    _c("div", { staticClass: "flex w-full text-center" }, [
                      _c("div", { staticClass: "w-1/3" }, [
                        _c(
                          "label",
                          {
                            on: {
                              click: function($event) {
                                return _vm.sortby("item_id")
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Item")]),
                            _vm._v(" "),
                            _vm.variables.sort.order_column == "item_id" &&
                            _vm.variables.sort.order_by == "asc"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowUpIcon" }
                                })
                              : _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowDownIcon" }
                                })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/4 ml-4" }, [
                        _c("span", [_vm._v("Vendor Item")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/12 ml-4" }, [
                        _c(
                          "label",
                          {
                            on: {
                              click: function($event) {
                                return _vm.sortby("quantity")
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Qty")]),
                            _vm._v(" "),
                            _vm.variables.sort.order_column == "quantity" &&
                            _vm.variables.sort.order_by == "asc"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowUpIcon" }
                                })
                              : _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowDownIcon" }
                                })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/12 ml-4" }, [
                        _c(
                          "label",
                          {
                            on: {
                              click: function($event) {
                                return _vm.sortby("cancelled_quantity")
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Cancelled Items")]),
                            _vm._v(" "),
                            _vm.variables.sort.order_column ==
                              "cancelled_quantity" &&
                            _vm.variables.sort.order_by == "asc"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowUpIcon" }
                                })
                              : _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowDownIcon" }
                                })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/12 ml-4" }, [
                        _c("span", [_vm._v("Carton Qty")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/12 ml-4" }, [
                        _c("span", [_vm._v("Cu ft")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/12 ml-4" }, [
                        _c("span", [_vm._v("MOQ")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/4 ml-4" }, [
                        _c("span", [_vm._v("Note")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/6 ml-4" }, [
                        _c(
                          "label",
                          {
                            on: {
                              click: function($event) {
                                return _vm.sortby("price")
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("Item Cost")]),
                            _vm._v(" "),
                            _vm.variables.sort.order_column == "price" &&
                            _vm.variables.sort.order_by == "asc"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowUpIcon" }
                                })
                              : _c("feather-icon", {
                                  staticClass: "cursor-pointer h-4 w-4",
                                  attrs: { icon: "ArrowDownIcon" }
                                })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/6 ml-4" }, [
                        _c("span", [_vm._v("Total Cost for Qty")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/6 ml-4" }, [
                        _c("span", [_vm._v("ESD")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.inputs.items, function(item, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "flex w-full mt-1" },
                        [
                          _c("div", { staticClass: "w-1/3" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(_vm._s(item.item_id || " "))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/4 ml-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input",
                                staticStyle: { "word-break": "break-all" }
                              },
                              [_vm._v(_vm._s(item.vendor_item_id || " "))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-2/12 ml-4" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(_vm._s(item.quantity || "-"))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/12 ml-4 text-center pt-3" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    item.cancelled_quantity != null
                                      ? item.cancelled_quantity
                                      : "-"
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/12 ml-4 text-center pt-3" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    item.carton_qty != null
                                      ? item.carton_qty
                                      : "-"
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/12 ml-4 text-center pt-3" },
                            [
                              !!item.qty_cubic_feet
                                ? _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.globalFunction_numberMinimiser(
                                              item.qty_cubic_feet
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      !!item.single_item_cubic_feet
                                        ? _c(
                                            "dropdown-custom",
                                            {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                "close-on-click": "",
                                                "custom-content": "",
                                                "trigger-click": ""
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "text-primary h-4 w-4",
                                                attrs: { icon: "InfoIcon" }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "dropdown-menu-custom",
                                                {
                                                  staticClass:
                                                    "profile-dropdown--container absolute",
                                                  staticStyle: {
                                                    "min-width": "100px",
                                                    "z-index": "10010"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "w-full flex"
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
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "w-1/2 flex-col"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "flex w-full justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.single_item_cubic_feet
                                                                    )
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
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _c("div", [_c("span", [_vm._v("-")])])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/12 ml-4 text-center pt-3" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(item.moq != null ? item.moq : "-")
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/4 ml-4" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(_vm._s(item.note || " "))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 ml-4 text-center" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(_vm._s(item.price || " "))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 ml-4 text-center" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.globalFunction_formatNumberToCurrency(
                                    item.total_price
                                  ) || " "
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 ml-4" }, [
                            _c("div", { staticClass: "input" }, [
                              _vm._v(
                                _vm._s(
                                  !!item.expected_arrival_date
                                    ? _vm
                                        .$moment(item.expected_arrival_date)
                                        .format("MM/DD/YY")
                                    : " "
                                )
                              )
                            ])
                          ])
                        ]
                      )
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c("card-custom", { staticClass: "mt-5" }, [
              _c("div", { staticClass: "flex w-full" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex w-full md:flex-row flex-col  justify-between"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "flex flex-col md:w-1/3 w-full" },
                      [
                        _c("div", { staticClass: "flex-row w-full" }, [
                          _c(
                            "div",
                            { staticClass: "w-full flex flex-col mb-2" },
                            [
                              _c("small", [_vm._v("ESD Date")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input" }, [
                                _vm._v(
                                  _vm._s(
                                    !!_vm.inputs.eta_date
                                      ? _vm
                                          .$moment(_vm.inputs.eta_date)
                                          .format("MM/DD/YY")
                                      : " "
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full flex flex-col" }, [
                            _c("small", [_vm._v("PO Number")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input" }, [
                              _vm._v(
                                _vm._s(
                                  !!_vm.inputs.po_number
                                    ? _vm.inputs.po_number
                                    : " "
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-full flex flex-col mt-2" },
                            [
                              _c("small", [_vm._v("Created Date")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input" }, [
                                _vm._v(
                                  _vm._s(
                                    !!_vm.inputs.created_at_date
                                      ? _vm.inputs.created_at_date
                                      : " "
                                  )
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "md:w-1/3 w-full mr-2 ml-2" }, [
                      _c(
                        "div",
                        {
                          staticClass: "flex flex-col w-full h-full justify-end"
                        },
                        [
                          _c("div", { staticClass: "w-full flex flex-col" }, [
                            _c("small", [_vm._v("Notes/Memo")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input h-24" }, [
                              _vm._v(
                                _vm._s(
                                  !!_vm.inputs.order_note
                                    ? _vm.inputs.order_note
                                    : " "
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "w-full flex",
                              staticStyle: {
                                background: "var(--color-primary)",
                                "border-radius": "2px",
                                "margin-top": "9%"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "p-3 w-full justify-between flex"
                                },
                                [
                                  _c("span", { staticClass: "text-white" }, [
                                    _vm._v("TOTAL CUBIC FEETS")
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "text-white" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.globalFunction_numberMinimiser(
                                          _vm.totalCubicFeet
                                        )
                                      )
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "md:w-3/12 w-full mt-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "flex flex-col w-full h-full justify-end"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "w-full flex md:mt-0 mt-4",
                              staticStyle: {
                                background: "var(--color-primary)",
                                "border-radius": "2px"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "p-3 w-full justify-between flex"
                                },
                                [
                                  _c("span", { staticClass: "text-white" }, [
                                    _vm._v("TOTAL COST")
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "text-white" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.globalFunction_formatNumberToCurrency(
                                          _vm.totalPrice
                                        )
                                      )
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "card-custom",
              { staticClass: "mt-5", attrs: { title: "Order Files" } },
              [
                _c("div", { staticClass: "w-8/12" }, [
                  _vm.inputs.oldOrderFiles.length > 0
                    ? _c("div", { staticClass: "flex flex-row w-full mb-2" }, [
                        _c(
                          "div",
                          { staticClass: "flex flex-col w-full" },
                          _vm._l(_vm.inputs.oldOrderFiles, function(o, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass: "flex flex-row w-full pb-2"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex flex-col w-6/12" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-primary no-underline",
                                        attrs: {
                                          href:
                                            _vm.apiLink +
                                            "/public/neworders/file?fileName=" +
                                            o.file_name,
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "btn--text custom-text-bold break-all"
                                          },
                                          [_vm._v(_vm._s(o.file_name))]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    : _c("div", { staticClass: "flex flex-row w-full mb-2" }, [
                        _c("div", { staticClass: "flex flex-col w-6/12" }, [
                          _c("div", { staticClass: "break-all p-2" }, [
                            _c("span", [_vm._v("No Files Available")])
                          ])
                        ])
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-4/12" }, [
                  _vm.shipmentList.length > 0
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-row flex-wrap justify-end mb-5 mr-5"
                        },
                        [
                          _c(
                            "h4",
                            {
                              staticClass: "m-0",
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "22px",
                                "text-transform": "uppercase"
                              }
                            },
                            [_vm._v("Containers")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shipmentList.length > 0
                    ? _c(
                        "div",
                        { staticClass: "flex flex-row flex-wrap justify-end" },
                        _vm._l(_vm.shipmentList, function(s, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "flex flex-col mr-5" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "edit_shipment",
                                      params: { order_number: s.id }
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(s.container_number))]
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "card-custom",
              { key: _vm.inputs.vendor_id, staticClass: "mt-5 flex w-full" },
              [
                _c("div", { staticClass: "flex w-full lg:flex-row flex-col" }, [
                  _c(
                    "div",
                    { staticClass: "flex w-full flex-col mr-0 lg:mr-5 " },
                    [
                      _c("div", { staticClass: "flex w-full items-center" }, [
                        _c("div", { staticClass: "flex flex-1" }, [
                          _c(
                            "p",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "22px",
                                "text-transform": "uppercase"
                              }
                            },
                            [
                              _vm._v(
                                "\n                Vendor Address\n              "
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex w-full mt-4 flex-wrap" }, [
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Bill to")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.variables.vendor_address.name || "-")
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.variables.vendor_address.email || "-"
                                )
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.variables.vendor_address.phone || "-"
                                )
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "md:w-1/4 sm:w-1/2 lg:w-8/12 w-full flex flex-col"
                          },
                          [
                            _c("small", [_vm._v("Address")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.variables.vendor_address.address || "-"
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex w-full flex-col mr-0 lg:mr-5 " },
                    [
                      _c("div", { staticClass: "flex w-full items-center" }, [
                        _c("div", { staticClass: "flex flex-1" }, [
                          _c(
                            "p",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "22px",
                                "text-transform": "uppercase"
                              }
                            },
                            [
                              _vm._v(
                                "\n                Billing Address\n              "
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex w-full mt-4 flex-wrap" }, [
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col " },
                          [
                            _c("small", [_vm._v("Bill to")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.name || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Phone")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.phone || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [_vm._v(_vm._s(_vm.inputs.billing.email || "-"))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Fax")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.fax || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Street")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [_vm._v(_vm._s(_vm.inputs.billing.address || "-"))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("City")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.city || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("State")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.state || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "md:w-1/4 sm:w-1/2 w-full flex flex-col"
                          },
                          [
                            _c("small", [_vm._v("Zip code")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.billing.zip || "-"))]
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex w-full flex-col ml-0 lg:ml-5 lg:mt-0 mt-10"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex w-full sm:items-center items-start sm:flex-row flex-col"
                        },
                        [
                          _c("div", { staticClass: "flex flex-1" }, [
                            _c(
                              "p",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "22px",
                                  "text-transform": "uppercase"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                Shipping Address\n              "
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex w-full mt-4 flex-wrap" }, [
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Ship to")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.name || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Phone")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.phone || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [_vm._v(_vm._s(_vm.inputs.shipping.email || "-"))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Fax")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.fax || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Street")]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "500",
                                "line-height": "1.6",
                                padding: "0 10px 10px 0"
                              }
                            },
                            [_vm._v(_vm._s(_vm.inputs.shipping.address || "-"))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("City")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.city || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col " },
                          [
                            _c("small", [_vm._v("State")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.state || "-"))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "md:w-1/4 sm:w-1/2 w-full flex flex-col "
                          },
                          [
                            _c("small", [_vm._v("Zip code")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-weight": "500",
                                  "line-height": "1.6",
                                  padding: "0 10px 10px 0"
                                }
                              },
                              [_vm._v(_vm._s(_vm.inputs.shipping.zip || "-"))]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ]
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderDetail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderDetail.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=template&id=0105733f& */ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f&");
/* harmony import */ var _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Orders/OrderDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetail.vue?vue&type=template&id=0105733f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/OrderDetail.vue?vue&type=template&id=0105733f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetail_vue_vue_type_template_id_0105733f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/itemApi */ "./resources/js/apis/itemApi.js");
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/vendorApi */ "./resources/js/apis/vendorApi.js");
/* harmony import */ var _apis_orderApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis/orderApi */ "./resources/js/apis/orderApi.js");
/* harmony import */ var _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apis/shipmentApi */ "./resources/js/apis/shipmentApi.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditShipment",
  mixins: [_apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__["default"], _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_orderApi__WEBPACK_IMPORTED_MODULE_3__["default"], _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_5__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      conditions: {
        bol_file_import: false,
        isf_file_import: false,
        invoice_file_import: false,
        supplier_commercial_invoices: false
      },
      variables: {
        status: [{
          value: 'packed',
          text: "PACKED"
        }, {
          value: 'shipped',
          text: "SHIPPED"
        }, {
          value: 'at_port',
          text: "AT PORT"
        }, {
          value: 'arrival',
          text: "ARRIVED"
        }, {
          value: 'received',
          text: "RECIEVED"
        }],
        items: [],
        orders: []
      },
      inputs: {
        shipment_id: null,
        container: {
          container_number: null,
          carton_qty: null,
          container_cost: null,
          truck_cost: null,
          unload_rate: null,
          unload_hours_spent: null,
          cost_to_unload: this.globalFunction_formatNumberToCurrency(0),
          country_of_origin: null,
          date_shipped: null,
          date_received: null,
          expected_arrival: null,
          notes: null,
          total: null,
          status: 'packed',
          bol_file: null,
          isf_file: null,
          invoice_file: null,
          supplier_commercial_invoices: []
        },
        items: [],
        file_upload: {
          bol_file: null,
          isf_file: null,
          invoice_file: null,
          supplier_commercial_invoices: []
        }
      },
      form_data: new FormData(),
      apiLink: "http://127.0.0.1:8000/api"
    };
  },
  computed: {
    totalCubicInches: function totalCubicInches() {
      var total_cubic_inches = 0;

      for (var i = 0; i < this.inputs.items.length; i++) {
        var item = this.inputs.items[i];

        if (!!item.qty_cubic_inches) {
          total_cubic_inches += parseFloat(item.qty_cubic_inches);
        }
      }

      return total_cubic_inches.toFixed(1);
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

        if (item.total != null) {
          total_price += parseFloat(item.total);
        }
      }

      this.inputs.container.total = total_price;
      return total_price;
    },
    inputPayload: function inputPayload() {
      var filled_items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });
      return {
        item_ids: filled_items.map(function (item) {
          return item.item_id;
        }),
        order_ids: filled_items.map(function (item) {
          return item.order_id;
        }),
        container_number: this.inputs.container.container_number,
        carton_qty: this.inputs.container.carton_qty,
        container_cost: this.inputs.container.container_cost,
        truck_cost: this.inputs.container.truck_cost,
        unload_rate: this.inputs.container.unload_rate,
        unload_hours_spent: this.inputs.container.unload_hours_spent,
        cost_to_unload: this.inputs.container.cost_to_unload,
        country_of_origin: this.inputs.container.country_of_origin,
        status: this.inputs.container.status
      };
    }
  },
  watch: {//
  },
  methods: {
    customFormatter: function customFormatter(date) {
      return this.$moment(date).format("MM/DD/YY");
    },
    getAllOrderItems: function getAllOrderItems() {
      var _this = this;

      // this.orderApi_getAllOrderItems().then((response)=>{
      //   this.variables.items = response.data;
      // })
      // .catch((error) => console.error(error));
      this.itemApi_getAllDistinctItems().then(function (response) {
        _this.variables.items = response.data;
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    getOrder: function getOrder() {
      var _this2 = this;

      if (this.$route.params.order_number != '') {
        var orderId = this.$route.params.order_number;
        this.inputs.shipment_id = orderId;
        this.shipmentApi_getOne(orderId).then(function (response) {
          if (response.success) {
            if (!!response.data) {
              _this2.inputs.container.container_number = response.data.container_number;
              _this2.inputs.container.carton_qty = response.data.carton_qty;
              _this2.inputs.container.container_cost = response.data.container_cost;
              _this2.inputs.container.truck_cost = response.data.truck_cost;
              _this2.inputs.container.unload_rate = response.data.unload_rate;
              _this2.inputs.container.unload_hours_spent = response.data.unload_hours_spent;
              _this2.inputs.container.cost_to_unload = response.data.cost_to_unload;
              _this2.inputs.container.country_of_origin = response.data.country_of_origin;
              _this2.inputs.container.date_shipped = response.data.date_shipped;
              _this2.inputs.container.date_received = response.data.date_received;
              _this2.inputs.container.expected_arrival = response.data.expected_arrival;
              _this2.inputs.container.notes = response.data.notes;
              _this2.inputs.container.total = response.data.total;
              _this2.inputs.container.status = response.data.status;
              _this2.inputs.container.bol_file = response.data.bol_file;
              _this2.inputs.container.isf_file = response.data.isf_file;
              _this2.inputs.container.invoice_file = response.data.invoice_file;
              _this2.inputs.container.supplier_commercial_invoices = response.data.supplier_commercial_invoices;
              _this2.inputs.items = [];

              if (response.data.items.length > 0) {
                response.data.items.map(function (orderItem) {
                  var confirm_orders = [];
                  orderItem.item.orders_without_deleted.filter(function (order) {
                    order.cubic_inches = orderItem.item.cubic_inches;
                    order.cubic_feet = orderItem.item.cubic_feet;
                    order.carton_qty = orderItem.item.carton_qty;
                    confirm_orders.push(order);
                  });

                  _this2.inputs.items.push({
                    receipt_item_id: orderItem.receipt_item_id,
                    item_id: orderItem.item.item_id,
                    order_id: parseInt(orderItem.po_id),
                    order_item_id: orderItem.order_item_id > 0 ? parseInt(orderItem.order_item_id) : _this2.selectOrderItemId(orderItem)[0].id,
                    quantity: orderItem.quantity,
                    single_item_cubic_inches: orderItem.item.cubic_inches,
                    qty_cubic_inches: orderItem.quantity * orderItem.item.cubic_inches,
                    single_item_cubic_feet: orderItem.item.cubic_feet,
                    qty_cubic_feet: !!orderItem.quantity && !!orderItem.item.carton_qty && !!orderItem.item.cubic_feet ? (orderItem.quantity / orderItem.item.carton_qty * orderItem.item.cubic_feet).toFixed(2) : null,
                    price: orderItem.price,
                    total: orderItem.total,
                    vendor_id: orderItem.item.vendor_id,
                    orders: confirm_orders
                  });
                });
              }
            } else {
              _this2.$router.push({
                name: 'shipments'
              });
            }
          }
        });
      }
    },
    getAllOrder: function getAllOrder() {
      var _this3 = this;

      this.orderApi_getAllOrder().then(function (response) {
        if (response.success) {
          _this3.variables.orders = response.data;
        }
      });
    },
    changePOFormat: function changePOFormat(option) {
      var po = [];

      if (_typeof(option) == 'object') {
        if (!!option.order.po_number) {
          po.push(option.order.po_number);
        }

        if (!!option.order.eta_date) {
          po.push(this.$moment(option.order.eta_date).format("MM/DD/YY"));
        }

        if (!!option.quantity_ordered) {
          po.push(option.quantity_ordered);
        }

        if (!!option.order.vendor.vendor_number) {
          po.push(option.order.vendor.vendor_number);
        }
      }

      return po.join(' - ');
    },
    backOrdersReport: function backOrdersReport() {
      var _this4 = this;

      if (this.$route.params.order_number != '') {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        var shipmentId = this.$route.params.order_number;
        this.shipmentApi_backOrdersReport(shipmentId).then(function (response) {
          if (response.success) {
            if (response.data !== null) {
              _this4.back_orders_report_file = response.data.filename;
              var link = document.createElement('a');
              link.href = _this4.apiLink + '/public/backorders_reports/file?fileName=' + _this4.back_orders_report_file;
              link.download = _this4.back_orders_report_file;
              link.click();

              _this4.$notify({
                group: "notification",
                type: "success",
                title: "Success",
                text: response.message
              });
            } else {
              _this4.$notify({
                group: "notification",
                type: "warn",
                title: response.message,
                text: ''
              });
            }
          } else {
            _this4.$notify({
              group: "notification",
              type: "warn",
              title: response.message,
              text: ''
            });
          }
        })["catch"](function (error) {
          return console.log(error);
        })["finally"](function () {
          return loading.hide();
        });
      }
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.getAllOrderItems();
            this.getOrder();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\n  display: -webkit-box;\n  display: flex;\n}\n.overflow-scroll {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 1366px) {\n.wrapper-table {\n    min-width: 1600px !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa& ***!
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
    { staticClass: "allow-copy content-compact--container flex flex-col" },
    [
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c(
        "card-custom",
        { attrs: { title: "Container details" } },
        [
          _c("template", { slot: "action" }, [
            _c("div", { staticClass: "flex flex-row w-full justify-end" }, [
              _c(
                "div",
                { staticClass: "flex flex-col w-4/12 mr-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-outline-primary no-underline",
                      attrs: {
                        to: {
                          name: "landed_cost",
                          params: { shipment_id: this.inputs.shipment_id }
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Landed Cost")]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-col w-4/12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary",
                    on: {
                      click: function($event) {
                        return _vm.backOrdersReport()
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "btn--text custom-text-bold" }, [
                      _vm._v("Backorder Report")
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex w-full" }, [
            _c("div", { staticClass: "flex flex-row w-full" }, [
              _c("div", { staticClass: "table-custom-component w-full" }, [
                _c("div", { staticClass: "table-custom--container" }, [
                  _c("div", { staticClass: "table-custom--content" }, [
                    _c("div", { staticClass: "tablecustom my-8 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "tablecustom--container flex" },
                        [
                          _c(
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Status")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.status
                                                ? _vm.inputs.container.status
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Container Number")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container
                                                .container_number
                                                ? _vm.inputs.container
                                                    .container_number
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Carton Qty")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.carton_qty
                                                ? _vm.inputs.container
                                                    .carton_qty
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Container Cost")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container
                                                .container_cost
                                                ? "$" +
                                                    _vm.inputs.container
                                                      .container_cost
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Truck Cost")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.truck_cost
                                                ? "$" +
                                                    _vm.inputs.container
                                                      .truck_cost
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Hourly Rate of Unloading")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.unload_rate
                                                ? "$" +
                                                    _vm.inputs.container
                                                      .unload_rate
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Cost to Unload")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-row w-full justify-center text-center"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-12/12 pt-3 uppercase text-center"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.inputs.container
                                                    .cost_to_unload
                                                    ? _vm.inputs.container
                                                        .cost_to_unload
                                                    : "-"
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
                          ),
                          _vm._v(" "),
                          _c(
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Date Shipped")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.date_shipped
                                                ? _vm.inputs.container
                                                    .date_shipped
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Date Received")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.date_received
                                                ? _vm.inputs.container
                                                    .date_received
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Expected Arrival")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container
                                                .expected_arrival
                                                ? _vm.inputs.container
                                                    .expected_arrival
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Country of Origin")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container
                                                .country_of_origin
                                                ? _vm.inputs.container
                                                    .country_of_origin
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Notes")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container.notes
                                                ? _vm.inputs.container.notes
                                                : "-"
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
                                    "tablecustom-content--container w-full flex"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-4/12"
                                    },
                                    [
                                      _c("p", { staticClass: "m-1" }, [
                                        _vm._v("Hours Spent on Unloading")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "tablecustom-content--content w-8/12"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex flex-col w-12/12 pt-3 uppercase text-center"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.container
                                                .unload_hours_spent
                                                ? _vm.inputs.container
                                                    .unload_hours_spent
                                                : "-"
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
                    ])
                  ])
                ])
              ])
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c(
        "card-custom",
        {
          staticClass: "overflow-scroll",
          attrs: { title: "Enter the items for ship" }
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
                _c("div", { staticClass: "w-2/12 ml-4" }, [
                  _c("span", [_vm._v("Item")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-4/12" }, [
                  _c("span", [_vm._v("PO # / DATE / Qty / Supplier #")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/12 ml-4" }, [
                  _c("span", [_vm._v("Quantity")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/12 ml-4" }, [
                  _c("span", [_vm._v("Cu ft")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/12 ml-4" }, [
                  _c("span", [_vm._v("Price")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/12 ml-4" }, [
                  _c("span", [_vm._v("Total ")])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.inputs.items, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "flex w-full mt-1" },
                  [
                    _c("div", { staticClass: "w-2/12 text-center pt-3" }, [
                      _c("span", [
                        _vm._v(_vm._s(item.item_id ? item.item_id : "-"))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-4/12 ml-4 text-center pt-3" },
                      _vm._l(item.orders, function(order) {
                        return _c("span", [
                          _vm._v(
                            _vm._s(
                              order.order_id == item.order_id
                                ? _vm.changePOFormat(order)
                                : ""
                            )
                          )
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-1/12 ml-4 text-center pt-3" }, [
                      _c("span", [
                        _vm._v(_vm._s(item.quantity ? item.quantity : "-"))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-1/12 ml-4 text-center pt-3" },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              item.qty_cubic_feet != null
                                ? item.qty_cubic_feet
                                : "-"
                            ) +
                            "\n            "
                        ),
                        !!item.single_item_cubic_inches
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
                                  staticClass: "text-primary h-4 w-4",
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
                                    _c("div", { staticClass: "w-full flex" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-full flex justify-center flex-row"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "w-1/2 flex-col" },
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
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-1/12 ml-4 text-center pt-3" }, [
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            item.price != null
                              ? _vm.globalFunction_formatNumberToCurrency(
                                  item.price
                                )
                              : "-"
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-1/12 ml-4 text-center pt-3" }, [
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            item.total != null
                              ? _vm.globalFunction_formatNumberToCurrency(
                                  item.total
                                )
                              : "-"
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
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("card-custom", [
        _c("div", { staticClass: "flex w-full" }, [
          _c(
            "div",
            {
              staticClass: "flex w-full md:flex-row flex-col  justify-between"
            },
            [
              _c("div", { staticClass: "flex flex-col md:w-1/4 w-full" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex flex-col w-full h-full justify-between"
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
                          { staticClass: "p-3 w-full justify-between flex" },
                          [
                            _c("span", { staticClass: "text-white" }, [
                              _vm._v("TOTAL CUBIC FEETS")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-white" }, [
                              _vm._v(_vm._s(_vm.totalCubicFeet))
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "md:w-3/12 w-full md:mt-0 mt-4" }, [
                _c(
                  "div",
                  {
                    staticClass: "flex flex-col w-full h-full justify-between"
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
                          { staticClass: "p-3 w-full justify-between flex" },
                          [
                            _c("span", { staticClass: "text-white" }, [
                              _vm._v("TOTAL")
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
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("card-custom", { attrs: { title: "BOL file" } }, [
        _c("div", { staticClass: "w-full" }, [
          !!_vm.inputs.container.bol_file
            ? _c("div", { staticClass: "flex flex-row w-full pb-2" }, [
                _c("div", { staticClass: "flex flex-col w-4/12" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-primary no-underline",
                      attrs: {
                        href:
                          _vm.apiLink +
                          "/public/shipment/file?orderNumber=" +
                          _vm.inputs.container.bol_file,
                        target: "_blank"
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v(_vm._s(_vm.inputs.container.bol_file))]
                      )
                    ]
                  )
                ])
              ])
            : _c(
                "div",
                { staticClass: "flex flex-row w-full" },
                [
                  _c("input", {
                    ref: "uploadBolFile",
                    staticClass: "hidden",
                    attrs: {
                      type: "file",
                      accept:
                        ".pdf,application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    },
                    on: {
                      change: function($event) {
                        return _vm.onFileChanged($event, "bol_file")
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.inputs.file_upload.bol_file
                    ? [
                        _c(
                          "div",
                          { staticClass: "flex-row w-full mt-3 mb-2" },
                          [
                            _c("span", { staticClass: "uppercase" }, [
                              _vm._v("No file(s) found.")
                            ])
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
        ])
      ]),
      _vm._v(" "),
      _c("card-custom", { attrs: { title: "ISF file" } }, [
        _c("div", { staticClass: "w-full" }, [
          !!_vm.inputs.container.isf_file
            ? _c("div", { staticClass: "flex flex-row w-full pb-2" }, [
                _c("div", { staticClass: "flex flex-col w-4/12" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-primary no-underline",
                      attrs: {
                        href:
                          _vm.apiLink +
                          "/public/shipment/file?orderNumber=" +
                          _vm.inputs.container.isf_file,
                        target: "_blank"
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v(_vm._s(_vm.inputs.container.isf_file))]
                      )
                    ]
                  )
                ])
              ])
            : _c(
                "div",
                { staticClass: "flex flex-row w-full" },
                [
                  _c("input", {
                    ref: "uploadIsfFile",
                    staticClass: "hidden",
                    attrs: {
                      type: "file",
                      accept:
                        ".pdf,application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    },
                    on: {
                      change: function($event) {
                        return _vm.onFileChanged($event, "isf_file")
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.inputs.file_upload.isf_file
                    ? [
                        _c(
                          "div",
                          { staticClass: "flex-row w-full mt-3 mb-2" },
                          [
                            _c("span", { staticClass: "uppercase" }, [
                              _vm._v("No file(s) found.")
                            ])
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
        ])
      ]),
      _vm._v(" "),
      _c("card-custom", { attrs: { title: "Invoice file" } }, [
        _c("div", { staticClass: "w-full" }, [
          !!_vm.inputs.container.invoice_file
            ? _c("div", { staticClass: "flex flex-row w-full pb-2" }, [
                _c("div", { staticClass: "flex flex-col w-4/12" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-outline-primary no-underline",
                      attrs: {
                        href:
                          _vm.apiLink +
                          "/public/shipment/file?orderNumber=" +
                          _vm.inputs.container.invoice_file,
                        target: "_blank"
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v(_vm._s(_vm.inputs.container.invoice_file))]
                      )
                    ]
                  )
                ])
              ])
            : _c(
                "div",
                { staticClass: "flex flex-row w-full" },
                [
                  !_vm.inputs.file_upload.invoice_file
                    ? [
                        _c(
                          "div",
                          { staticClass: "flex-row w-full mt-3 mb-2" },
                          [
                            _c("span", { staticClass: "uppercase" }, [
                              _vm._v("No file(s) found.")
                            ])
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
        ])
      ]),
      _vm._v(" "),
      _c("card-custom", { attrs: { title: "Supplier Commercial Invoices" } }, [
        _c(
          "div",
          { staticClass: "w-full" },
          [
            _vm.inputs.container.supplier_commercial_invoices.length > 0
              ? _c("div", { staticClass: "flex flex-row w-full mb-2" }, [
                  _c(
                    "div",
                    { staticClass: "flex flex-col w-full" },
                    _vm._l(
                      _vm.inputs.container.supplier_commercial_invoices,
                      function(sci, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "flex flex-row w-full pb-2"
                          },
                          [
                            _c("div", { staticClass: "flex flex-col w-4/12" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-outline-primary no-underline",
                                  attrs: {
                                    href:
                                      _vm.apiLink +
                                      "/public/shipment/file?orderNumber=" +
                                      sci.file_name,
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
                                    [_vm._v(_vm._s(sci.file_name))]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      }
                    ),
                    0
                  )
                ])
              : _c("div", { staticClass: "flex-row w-full mt-3 mb-2" }, [
                  _c("span", { staticClass: "uppercase" }, [
                    _vm._v("No file(s) found.")
                  ])
                ]),
            _vm._v(" "),
            _vm._l(
              _vm.inputs.file_upload.supplier_commercial_invoices,
              function(sci, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "flex flex-row w-full mb-2" },
                  [
                    _c("div", { staticClass: "flex flex-col w-4/12" }, [
                      _c(
                        "div",
                        { staticClass: "btn btn-outline-primary break-all" },
                        [
                          _c(
                            "span",
                            { staticClass: "btn--text custom-text-bold" },
                            [_vm._v(_vm._s(sci.title))]
                          )
                        ]
                      )
                    ])
                  ]
                )
              }
            )
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/shipmentApi.js":
/*!******************************************!*\
  !*** ./resources/js/apis/shipmentApi.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "shipments";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    shipmentApi_getAll: function shipmentApi_getAll() {
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
    shipmentApi_getOne: function shipmentApi_getOne(id) {
      var _this2 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
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
    },
    shipmentApi_store: function shipmentApi_store(data) {
      var _this3 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref3) {
        var data = _ref3.data;
        return data;
      })["catch"](function (error) {
        _this3.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    shipmentApi_update: function shipmentApi_update(data, id) {
      var _this4 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      })["catch"](function (error) {
        _this4.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    shipmentApi_getChangeStatus: function shipmentApi_getChangeStatus(id, status) {
      var _this5 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/status/").concat(id, "/").concat(status),
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
    shipmentApi_getChangeCheckmarks: function shipmentApi_getChangeCheckmarks(id, column_name) {
      var _this6 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/checkmarks/").concat(id, "/").concat(column_name),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      })["catch"](function (error) {
        _this6.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_getChangeShipmentDate: function shipmentApi_getChangeShipmentDate(data) {
      var _this7 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/dates"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref7) {
        var data = _ref7.data;
        return data;
      })["catch"](function (error) {
        _this7.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_deleteFile: function shipmentApi_deleteFile(id, filename) {
      var _this8 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/delete_file/").concat(id, "/").concat(filename),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref8) {
        var data = _ref8.data;
        return data;
      })["catch"](function (error) {
        _this8.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_deleteUploadedSupplierCommercialInvoiceFile: function shipmentApi_deleteUploadedSupplierCommercialInvoiceFile(shipmentId, fileId) {
      var _this9 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/delete_supplier_commercial_invoice_file/").concat(shipmentId, "/").concat(fileId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref9) {
        var data = _ref9.data;
        return data;
      })["catch"](function (error) {
        _this9.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_delete: function shipmentApi_delete(id) {
      var _this10 = this;

      return axios({
        method: "delete",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref10) {
        var data = _ref10.data;
        return data;
      })["catch"](function (error) {
        _this10.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_backOrdersReport: function shipmentApi_backOrdersReport(shipmentId) {
      var _this11 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/back-orders-report/").concat(shipmentId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref11) {
        var data = _ref11.data;
        return data;
      })["catch"](function (error) {
        _this11.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_uploadShipmentOrders: function shipmentApi_uploadShipmentOrders() {
      var _this12 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/upload-shipment-orders"), this.formData, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref12) {
        var data = _ref12.data;
        return data;
      })["catch"](function (error) {
        _this12.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    shipmentApi_getBackorders: function shipmentApi_getBackorders(shipmentId) {
      var _this13 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-item-backorders/").concat(shipmentId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: {}
      }).then(function (_ref13) {
        var data = _ref13.data;
        return data;
      })["catch"](function (error) {
        _this13.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_getLandedCost: function shipmentApi_getLandedCost(shipmentId) {
      var _this14 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/landed-cost/").concat(shipmentId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref14) {
        var data = _ref14.data;
        return data;
      })["catch"](function (error) {
        _this14.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    shipmentApi_getAutoRefreshStatus: function shipmentApi_getAutoRefreshStatus(userId) {
      var _this15 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-update-status/").concat(userId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: null
      }).then(function (_ref15) {
        var data = _ref15.data;
        return data;
      })["catch"](function (error) {
        _this15.globalFunction_handleAxiosError(error);

        return error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentDetail.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentDetail.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipmentDetail.vue?vue&type=template&id=4d5f9faa& */ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa&");
/* harmony import */ var _ShipmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipmentDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShipmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Shipments/ShipmentDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentDetail.vue?vue&type=template&id=4d5f9faa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentDetail.vue?vue&type=template&id=4d5f9faa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentDetail_vue_vue_type_template_id_4d5f9faa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
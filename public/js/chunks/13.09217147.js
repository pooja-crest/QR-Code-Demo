(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/itemApi */ "./resources/js/apis/itemApi.js");
/* harmony import */ var _apis_receiptApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/receiptApi */ "./resources/js/apis/receiptApi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewReceipt",
  mixins: [_apis_itemApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_receiptApi__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {},
  data: function data() {
    return {
      inputs: {
        container_id: null,
        items: [],
        match: false,
        create: true
      },
      variables: {
        items: [],
        containers: []
      }
    };
  },
  computed: {},
  watch: {
    "inputs.container_id": function inputsContainer_id(container_id) {
      this.getContainerItems(container_id);
    }
  },
  methods: {
    addNewItem: function addNewItem() {
      this.inputs.items.push({
        shipment_item_ids: [],
        id: null,
        po_id: null,
        item_id: null,
        item_qty: null,
        cartons: null,
        master_carton_qty: null,
        total_qty: null,
        master_carton_qty_number: null,
        total_qty_number: null,
        is_original: false
      });
    },
    getItems: function getItems() {
      var _this = this;

      this.itemApi_getForFilter().then(function (response) {
        _this.variables.items = response.data.map(function (item) {
          return {
            value: item.id,
            label: item.item_id
          };
        });
      });
    },
    getAllContainers: function getAllContainers() {
      var _this2 = this;

      this.receiptApi_getAllContainers().then(function (response) {
        if (response.success) {
          _this2.variables.containers = response.data.filter(function (container) {
            return container.is_receipt_created == 0;
          });
        }
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    getContainerItems: function getContainerItems(container_id) {
      var _this3 = this;

      this.receiptApi_getContainerItems(container_id).then(function (response) {
        if (response.success) {
          _this3.inputs.items = [];
          response.data.items.forEach(function (shipment_order_items) {
            var result = _this3.inputs.items.findIndex(function (i) {
              return i.id == shipment_order_items.item_id;
            });

            if (result > -1) {
              _this3.inputs.items[result].item_qty = parseInt(_this3.inputs.items[result].item_qty) + parseInt(shipment_order_items.quantity);

              _this3.inputs.items[result].shipment_item_ids.push({
                'id': shipment_order_items.id,
                'quantity': shipment_order_items.quantity,
                'insert': false
              });
            } else {
              var shipmentItemIds = [];
              shipmentItemIds.push({
                'id': shipment_order_items.id,
                'quantity': shipment_order_items.quantity,
                'insert': false
              });

              _this3.inputs.items.push({
                'shipment_item_ids': shipmentItemIds,
                'id': shipment_order_items.item.id,
                'po_id': shipment_order_items.po_id,
                'item_id': shipment_order_items.item.item_id,
                'item_qty': shipment_order_items.quantity,
                'cartons': 0,
                'master_carton_qty': shipment_order_items.item.carton_qty,
                'total_qty': 0,
                'master_carton_qty_number': _this3.globalFunction_numberMaximiser(shipment_order_items.item.carton_qty),
                'total_qty_number': 0,
                'is_original': true
              });
            }
          });
        }
      })["catch"](function (error) {
        return console.log(error);
      })["finally"](function () {
        _this3.$refs.item_row_carton[0].focus();

        _this3.$refs.item_row_carton[0].select();
      });
    },
    masterCartonQtyChanged: function masterCartonQtyChanged(index) {
      this.inputs.items[index].master_carton_qty_number = !!this.inputs.items[index].master_carton_qty ? this.globalFunction_numberMaximiser(this.inputs.items[index].master_carton_qty) : null;
      this.inputs.match = false;
      this.quantityChanged(index);
      this.storeReceipt();
    },
    quantityChanged: function quantityChanged(index) {
      this.inputs.items[index].total_qty_number = !!this.inputs.items[index].cartons && !!this.inputs.items[index].master_carton_qty_number ? this.inputs.items[index].cartons * this.inputs.items[index].master_carton_qty_number : null;
      this.inputs.items[index].total_qty = this.globalFunction_numberMinimiser(this.inputs.items[index].total_qty_number);
      this.inputs.match = false;
      this.checkItemQuantity(index);
      this.storeReceipt();
    },
    totalQuantityChanged: function totalQuantityChanged(index) {
      this.inputs.items[index].total_qty_number = this.globalFunction_numberMaximiser(this.inputs.items[index].total_qty);
      this.inputs.match = false;
      this.checkItemQuantity(index);
      this.storeReceipt();
    },
    checkItemQuantity: function checkItemQuantity(index) {
      var _this4 = this;

      var totalQtyNeeded = this.inputs.items[index].item_qty;
      this.inputs.items[index].shipment_item_ids.map(function (shipmentItemId, shipmentItemIdIndex) {
        // totalQtyNeeded = (totalQtyNeeded-shipmentItemId.quantity);
        // console.log(totalQtyNeeded);
        // if(totalQtyNeeded>=0){
        _this4.inputs.items[index].shipment_item_ids[shipmentItemIdIndex].insert = true; // } else {
        //   this.inputs.items[index].shipment_item_ids[shipmentItemIdIndex].insert = false;
        // }
      });
    },
    itemInputted: function itemInputted(index) {
      var _this5 = this;

      this.inputs.match = false;

      if (this.inputs.items[index].id != undefined || this.inputs.items[index].id != null) {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        this.itemApi_getOneById(this.inputs.items[index].id).then(function (_ref) {
          var data = _ref.data;
          _this5.inputs.items[index].shipment_item_ids = [], _this5.inputs.items[index].id = data.id;
          _this5.inputs.items[index].po_id = null;
          _this5.inputs.items[index].item_id = data.item_id;
          _this5.inputs.items[index].item_qty = 0;
          _this5.inputs.items[index].cartons = 0;
          _this5.inputs.items[index].master_carton_qty = data.carton_qty;
          _this5.inputs.items[index].total_qty = 0;
          _this5.inputs.items[index].master_carton_qty_number = _this5.globalFunction_numberMaximiser(data.carton_qty);
          _this5.inputs.items[index].total_qty_number = 0;
        })["catch"](function (error) {
          return console.log(error);
        })["finally"](function () {
          return loading.hide();
        });
      } else if (this.inputs.items[index].id == null) {
        this.resetItemInputted(index);
      }
    },
    resetItemInputted: function resetItemInputted(index) {
      this.inputs.items[index].shipment_item_ids = [], this.inputs.items[index].id = null;
      this.inputs.items[index].po_id = null;
      this.inputs.items[index].item_id = null;
      this.inputs.items[index].item_qty = null;
      this.inputs.items[index].cartons = null;
      this.inputs.items[index].master_carton_qty = null;
      this.inputs.items[index].total_qty = null;
      this.inputs.items[index].master_carton_qty_number = null;
      this.inputs.items[index].total_qty_number = null;
    },
    checkReceipt: function checkReceipt() {
      var _this6 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.inputs.items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });
      this.receiptApi_checkReceipt(this.inputs).then(function (response) {
        if (response.success) {
          if (response.data) {
            if (response.data.hasOwnProperty('match')) {
              response.data.match.forEach(function (item) {
                document.getElementById("item_totat_qty_".concat(item)).classList.add("input-match");
              });
            }
          }

          _this6.inputs.match = true;
        } else {
          document.querySelectorAll('.input').forEach(function (el) {
            return el.classList.remove('input-match');
          });

          if (response.data) {
            if (response.data.hasOwnProperty('match')) {
              response.data.match.forEach(function (item) {
                document.getElementById("item_totat_qty_".concat(item)).classList.add("input-match");
              });
            }

            if (response.data.hasOwnProperty('not_match')) {
              response.data.not_match.forEach(function (item) {
                document.getElementById("item_totat_qty_".concat(item)).classList.add("input-not-match");
              });
            }
          }

          _this6.inputs.match = false;
        }
      })["catch"](function (error) {
        return console.error(error);
      })["finally"](function () {
        return loading.hide();
      });
    },
    storeReceipt: function storeReceipt() {
      var _this7 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.inputs.items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });
      this.receiptApi_storeReceipt(this.inputs).then(function (response) {
        loading.hide();

        if (response.success) {
          document.querySelectorAll('.input').forEach(function (el) {
            return el.classList.remove('input-match');
          });
          document.querySelectorAll('.input').forEach(function (el) {
            return el.classList.remove('input-not-match');
          });
        }

        if (response.success && response.data.match == 1) {
          _this7.$router.push({
            name: 'receives'
          });
        }
      })["catch"](function (error) {
        return console.error(error);
      })["finally"](function () {
        return loading.hide();
      });
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser", "receiving"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.getItems();
              this.getAllContainers();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\n  display: -webkit-box;\n  display: flex;\n}\n.overflow-scroll {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 1366px) {\n.wrapper-table {\n    min-width: 1600px !important;\n}\n}\n.dropzone {\n  color: var(--color-primary);\n  background: white;\n  border: 1px solid var(--color-primary);\n}\n.input-not-match {\n  border: 2px solid #f90404 !important;\n}\n.input-match {\n  border: 2px solid #3ce73c !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReceipt.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c(
        "card-custom",
        { staticClass: "mt-10", attrs: { title: "Choose Container" } },
        [
          _c("div", { staticClass: "flex w-full flex-col mt-4" }, [
            _c(
              "div",
              { staticClass: "flex w-full" },
              [
                _c("v-select", {
                  staticClass: "input w-full",
                  class: [!_vm.inputs.container_id ? "input-empty" : ""],
                  attrs: {
                    options: _vm.variables.containers,
                    autocomplete: "",
                    searchable: "",
                    placeholder: "Search container",
                    "get-option-label": function(option) {
                      return option.container_number + " / " + option.carton_qty
                    },
                    reduce: function(container) {
                      return container.id
                    }
                  },
                  model: {
                    value: _vm.inputs.container_id,
                    callback: function($$v) {
                      _vm.$set(_vm.inputs, "container_id", $$v)
                    },
                    expression: "inputs.container_id"
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _vm.inputs.container_id
        ? _c(
            "card-custom",
            {
              staticClass: "overflow-scroll",
              attrs: { title: "Enter the items for receipt" }
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
                    _c("div", { staticClass: "w-3/12 ml-4" }, [
                      _c("span", [_vm._v("Item")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-3/12 ml-4" }, [
                      _c("span", [_vm._v("Cartons")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-3/12 ml-4" }, [
                      _c("span", [_vm._v("Master Carton Quantity")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-3/12 ml-4" }, [
                      _c("span", [_vm._v("Total Quantity")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.inputs.items, function(item, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "flex w-full mt-1" },
                      [
                        _c(
                          "div",
                          { staticClass: "w-3/12" },
                          [
                            _c("v-select", {
                              staticClass: "input w-full",
                              class: [!item.id ? "input-empty" : ""],
                              staticStyle: { padding: "6px 16px!important" },
                              attrs: {
                                options: _vm.variables.items,
                                autocomplete: "",
                                searchable: "",
                                taggable: "",
                                reduce: function(item) {
                                  return item.value
                                },
                                "select-on-key-codes": [9, 13],
                                clearable: false
                              },
                              on: {
                                input: function($event) {
                                  return _vm.itemInputted(index)
                                }
                              },
                              model: {
                                value: item.id,
                                callback: function($$v) {
                                  _vm.$set(item, "id", $$v)
                                },
                                expression: "item.id"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-3/12 ml-4" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.cartons,
                                expression: "item.cartons"
                              }
                            ],
                            ref: "item_row_carton",
                            refInFor: true,
                            staticClass: "input",
                            attrs: {
                              type: "number",
                              id: "item_cartons_" + item.id,
                              min: "1"
                            },
                            domProps: { value: item.cartons },
                            on: {
                              change: function($event) {
                                return _vm.quantityChanged(index)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "cartons", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-3/12 ml-4" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.master_carton_qty,
                                expression: "item.master_carton_qty"
                              }
                            ],
                            staticClass: "input",
                            attrs: { type: "text", min: "1" },
                            domProps: { value: item.master_carton_qty },
                            on: {
                              change: function($event) {
                                return _vm.masterCartonQtyChanged(index)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  item,
                                  "master_carton_qty",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-3/12 ml-4 text-center" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.total_qty,
                                expression: "item.total_qty"
                              }
                            ],
                            staticClass: "input",
                            attrs: {
                              type: "text",
                              min: "1",
                              id: "item_totat_qty_" + item.id
                            },
                            domProps: { value: item.total_qty },
                            on: {
                              change: function($event) {
                                return _vm.totalQuantityChanged(index)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "total_qty", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex w-full mt-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary btn-small",
                        on: {
                          click: function($event) {
                            return _vm.addNewItem()
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "btn--text custom-text-bold" },
                          [_vm._v("Add Line Item")]
                        )
                      ]
                    )
                  ])
                ],
                2
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "mt-10 w-full flex justify-end" }, [
        !!_vm.inputs.container_id && _vm.inputs.match == false
          ? _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    return _vm.checkReceipt()
                  }
                }
              },
              [
                _c("span", { staticClass: "btn--text custom-text-bold" }, [
                  _vm._v("Done")
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.inputs.match
          ? _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    return _vm.storeReceipt()
                  }
                }
              },
              [
                _c("span", { staticClass: "btn--text custom-text-bold" }, [
                  _vm._v("Save")
                ])
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/itemApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/itemApi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "items";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    itemApi_getAll: function itemApi_getAll() {
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
    itemApi_getItemByMultipleShip: function itemApi_getItemByMultipleShip(item_id, shipment_order_item_id, order_id, received_type) {
      var _this2 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/receive-items/").concat(shipment_order_item_id, "/").concat(item_id, "/").concat(order_id, "/").concat(received_type),
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
    itemApi_getForFilter: function itemApi_getForFilter() {
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
    itemApi_getOne: function itemApi_getOne(item_id, vendor_id) {
      var _this4 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/").concat(item_id, "/").concat(vendor_id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      })["catch"](function (error) {
        _this4.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    itemApi_uploadItems: function itemApi_uploadItems() {
      var _this5 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/upload-items"), this.formData, {
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
    },
    itemApi_updateItem: function itemApi_updateItem(id) {
      var _this6 = this;

      var form_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "patch",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
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
    itemApi_getAllDistinctItems: function itemApi_getAllDistinctItems() {
      var _this7 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/distinct"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref7) {
        var data = _ref7.data;
        return data;
      })["catch"](function (error) {
        _this7.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    itemApi_delete: function itemApi_delete(item_id, vendor_id) {
      var _this8 = this;

      return axios({
        method: "delete",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/").concat(item_id, "/").concat(vendor_id),
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
    itemApi_getItemVendorChats: function itemApi_getItemVendorChats(itemId, vendorId) {
      var _this9 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/chat/").concat(itemId, "/").concat(vendorId),
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
    itemApi_getOrdersByVendorItem: function itemApi_getOrdersByVendorItem(itemId, vendorId) {
      var _this10 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/orders-vendor-item/").concat(itemId, "/").concat(vendorId),
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
    itemApi_sendItemVendorMessage: function itemApi_sendItemVendorMessage() {
      var _this11 = this;

      var form_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/chat/send-message"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: form_data
      }).then(function (_ref11) {
        var data = _ref11.data;
        return data;
      })["catch"](function (error) {
        _this11.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    itemApi_getOneById: function itemApi_getOneById(item_id) {
      var _this12 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-item-by-id/").concat(item_id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref12) {
        var data = _ref12.data;
        return data;
      })["catch"](function (error) {
        _this12.globalFunction_handleAxiosError(error);

        return error;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/receiptApi.js":
/*!*****************************************!*\
  !*** ./resources/js/apis/receiptApi.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "receipts";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    receiptApi_getAllReceipts: function receiptApi_getAllReceipts() {
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
    receiptApi_getAllContainers: function receiptApi_getAllContainers() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-all-containers"),
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
    receiptApi_getContainerItems: function receiptApi_getContainerItems(id) {
      var _this3 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-container-items/").concat(id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        return data;
      })["catch"](function (error) {
        _this3.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    receiptApi_checkReceipt: function receiptApi_checkReceipt(data) {
      var _this4 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/check-receipt"),
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
    receiptApi_storeReceipt: function receiptApi_storeReceipt(data) {
      var _this5 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/store-receipt"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref5) {
        var data = _ref5.data;
        return data;
      })["catch"](function (error) {
        _this5.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    receiptApi_updateReceipt: function receiptApi_updateReceipt(data) {
      var _this6 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/update-receipt"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      })["catch"](function (error) {
        _this6.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    receiptApi_getReceipt: function receiptApi_getReceipt(id) {
      var _this7 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/get-receipt/").concat(id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
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

/***/ "./resources/js/views/pages/Receives/NewReceipt.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/Receives/NewReceipt.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewReceipt.vue?vue&type=template&id=1aeedd3d& */ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d&");
/* harmony import */ var _NewReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewReceipt.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewReceipt.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Receives/NewReceipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReceipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReceipt.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewReceipt.vue?vue&type=template&id=1aeedd3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Receives/NewReceipt.vue?vue&type=template&id=1aeedd3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewReceipt_vue_vue_type_template_id_1aeedd3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
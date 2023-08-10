(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/shipmentApi */ "./resources/js/apis/shipmentApi.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ShipmentLandedCostList",
  mixins: [_apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {//
  },
  data: function data() {
    return {
      conditions: {
        loadings: {
          datas: false
        },
        search_active: false
      },
      data: {
        datas: []
      },
      inputs: {
        filters: {
          search: ""
        }
      },
      variables: {//
      },
      apiLink: "http://127.0.0.1:8000/api",
      form_data: new FormData()
    };
  },
  watch: {//
  },
  methods: {
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
      }

      this.getShipmentLandedCost();
    },
    getShipmentLandedCost: function getShipmentLandedCost() {
      var _this = this;

      this.conditions.loadings.datas = true;
      var params = {
        search: this.inputs.filters.search
      };
      this.shipmentApi_getLandedCost(this.$route.params.shipment_id, params).then(function (response) {
        _this.data.datas = response.data;

        if (response.data.length >= _this.conditions.data_each_page) {
          _this.data.paginations.next_page = _this.data.paginations.current_page + 1;
        }
      })["finally"](function () {
        return _this.conditions.loadings.datas = false;
      });
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser", "viewer", "display", "order_tracking"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.getShipmentLandedCost();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c(
            "card-custom",
            { staticClass: "mt-3", attrs: { title: "Landed Cost" } },
            [
              _c("div", { staticClass: "w-full" }, [
                _c("div", { staticClass: "flex flex-row w-full justify-end" }, [
                  _c(
                    "div",
                    { staticClass: "flex flex-col w-2/12" },
                    [
                      _vm.authenticatedUser &&
                      ["admin", "purchaser"].includes(
                        _vm.authenticatedUser.role
                      )
                        ? _c(
                            "router-link",
                            {
                              staticClass: "btn btn-outline-primary w-full",
                              staticStyle: {
                                "text-decoration": "none",
                                "margin-top": "-22px"
                              },
                              attrs: {
                                to: {
                                  name: "edit_shipment",
                                  params: {
                                    order_number: this.$route.params.shipment_id
                                  }
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
                                { staticClass: "btn--text custom-text-bold" },
                                [_vm._v("Back to Shipment")]
                              )
                            ],
                            1
                          )
                        : _c(
                            "router-link",
                            {
                              staticClass: "btn btn-outline-primary w-full",
                              staticStyle: {
                                "text-decoration": "none",
                                "margin-top": "-22px"
                              },
                              attrs: {
                                to: {
                                  name: "shipment_detail",
                                  params: {
                                    order_number: this.$route.params.shipment_id
                                  }
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
                                { staticClass: "btn--text custom-text-bold" },
                                [_vm._v("Back to Shipment")]
                              )
                            ],
                            1
                          )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { ref: "table", staticClass: "flex flex-col w-full" },
                  [
                    _vm.data.datas.length > 0 || _vm.conditions.loadings.datas
                      ? _c("div", { staticClass: "w-full" }, [
                          _c(
                            "div",
                            {
                              staticClass: "table-custom-component",
                              attrs: { id: "shipment_list" }
                            },
                            [
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
                                          staticClass: "tablecustom my-8 w-full"
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Item #\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Unit Price\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cu Ft per unit\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              % of container\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cost of container\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cost of Truck\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Tariff %\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cost of tariff\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Prov/Prog. Duty %\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cost of Prov/Prog. Duty\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Cost to Unload\n                            "
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
                                                                padding:
                                                                  "0 15px"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex justify-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Total\n                            "
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
                                                              shipment,
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
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            !!shipment.item_id
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.item_id
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
                                                                            !!shipment.unit_price
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.unit_price
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
                                                                            !!shipment.cu_ft_per_unit
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.cu_ft_per_unit
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
                                                                            !!shipment.percentage_occupied
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.percentage_occupied
                                                                                      ) +
                                                                                        "%"
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
                                                                            !!shipment.cost_of_container
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.cost_of_container
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
                                                                            !!shipment.cost_of_truck
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.cost_of_truck
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
                                                                            !!shipment.tariff
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.tariff
                                                                                      ) +
                                                                                        "%"
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
                                                                            !!shipment.cost_of_tariff
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.cost_of_tariff
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
                                                                            !!shipment.prov_prog_duty_rate
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.prov_prog_duty_rate
                                                                                      ) +
                                                                                        "%"
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
                                                                            !!shipment.cost_of_prov_prog_duty
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.cost_of_prov_prog_duty
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
                                                                            !!shipment.cost_to_unload
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.cost_to_unload
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
                                                                            !!shipment.total
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "$" +
                                                                                        _vm._s(
                                                                                          shipment.total
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
                                                        _vm._l(12, function(p) {
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
                                                          _vm._l(12, function(
                                                            i
                                                          ) {
                                                            return [
                                                              _c(
                                                                "div",
                                                                {
                                                                  key: i,
                                                                  staticClass:
                                                                    "flex"
                                                                },
                                                                _vm._l(
                                                                  12,
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
                            ]
                          )
                        ])
                      : [
                          _c(
                            "div",
                            { staticClass: "flex w-full justify-center" },
                            [_c("p", [_vm._v("No data found.")])]
                          )
                        ]
                  ],
                  2
                )
              ])
            ]
          )
        ],
        1
      )
    ]
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

/***/ "./resources/js/views/pages/Shipments/ShipmentLandedCost.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentLandedCost.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade& */ "./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade&");
/* harmony import */ var _ShipmentLandedCost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentLandedCost.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShipmentLandedCost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Shipments/ShipmentLandedCost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentLandedCost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentLandedCost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentLandedCost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentLandedCost.vue?vue&type=template&id=4a3e7ade&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentLandedCost_vue_vue_type_template_id_4a3e7ade___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
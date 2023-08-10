(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/shipmentApi */ "./resources/js/apis/shipmentApi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "BackOrderItems",
  mixins: [_apis_shipmentApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      loading: true,
      backOrderItems: [],
      chunkedBackOrderItems: []
    };
  },
  props: {
    shipment: {
      type: Object
    }
  },
  beforeMount: function beforeMount() {
    this.getBackOrderItems();
  },
  methods: {
    getBackOrderItems: function getBackOrderItems() {
      var _this = this;

      this.loading = true;
      this.shipmentApi_getBackorders(this.shipment.shipment.id).then(function (response) {
        var perChunk = 3; // items per chunk

        _this.backOrderItems = response.data;

        if (_this.backOrderItems.length > 0) {
          _this.backOrderItems.sort(function (a, b) {
            return b.item_id.length - a.item_id.length; // ASC  -> a.item_id.length - b.item_id.length & DESC -> b.item_id.length - a.item_id.length
          });

          _this.chunkedBackOrderItems = _this.backOrderItems.reduce(function (resultArray, item, index) {
            var chunkIndex = Math.floor(index / perChunk);

            if (!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = []; // start a new chunk
            }

            resultArray[chunkIndex].push(item);
            return resultArray;
          }, []);
        }
      })["finally"](function () {
        return _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/shipmentApi */ "./resources/js/apis/shipmentApi.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shipments_BackOrderItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shipments/BackOrderItems */ "./resources/js/views/components/shipments/BackOrderItems.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ShipmentOrderList",
  mixins: [_apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    BackOrderItems: _components_shipments_BackOrderItems__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      count: 0,
      shipmentOrdersRef: null,
      shipmentRefreshRef: null,
      conditions: {
        loadings: {
          datas: false
        }
      },
      data: {
        datas: [],
        auto_refresh: false
      },
      inputs: {
        filters: {
          search: "",
          selected_status: "all"
        }
      },
      variables: {
        status: [{
          value: "packed",
          text: "PACKED"
        }, {
          value: "shipped",
          text: "SHIPPED"
        }, {
          value: "at_port",
          text: "AT PORT"
        }, {
          value: "arrival",
          text: "ARRIVED"
        }, {
          value: "received",
          text: "RECIEVED"
        }]
      },
      apiLink: "http://127.0.0.1:8000/api"
    };
  },
  watch: {//
  },
  methods: {
    getShipmentOrders: function getShipmentOrders() {
      var _this = this;

      this.conditions.loadings.datas = true;
      var params = {
        page: null,
        search: this.inputs.filters.search,
        is_display: ["display"].includes(this.authenticatedUser.role),
        status: null
      };
      this.shipmentApi_getAll(params).then(function (response) {
        _this.data.datas = response.data;
      })["finally"](function () {
        return _this.conditions.loadings.datas = false;
      });
    },
    getAutoRefreshStatus: function getAutoRefreshStatus() {
      var _this2 = this;

      this.shipmentApi_getAutoRefreshStatus(this.authenticatedUser.id).then(function (response) {
        _this2.data.auto_refresh = response.data.status;

        if (_this2.data.auto_refresh) {
          _this2.getShipmentOrders();

          _this2.data.auto_refresh = false;
        }
      })["finally"]();
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.getShipmentOrders();
            this.shipmentOrdersRef = setInterval(this.getShipmentOrders, 1800000); // 30 Minutes.

            this.shipmentRefreshRef = setInterval(this.getAutoRefreshStatus, 60000); // 1 Minutes.

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  unmounted: function unmounted() {
    clearInterval(this.shipmentOrdersRef);
    clearInterval(this.shipmentRefreshRef);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tablecustom .tablecustom--container div .tablecustom-content--container .tablecustom-content--content, .tablecustom .tablecustom--container section .tablecustom-content--container .tablecustom-content--content {\n  padding: 3px;\n  border: 0.5px solid var(--color-border);\n}\n.text-xs {\n  font-size: 15px !important;\n}\n.tablecustom-content--text, tablecustom-header--content {\n  font-size: 17px !important;\n}\n.header-content {\n  border: none !important;\n}\n\n/*html {*/\n\n/*    transform: rotate(-90deg);*/\n\n/*    transform-origin: left top;*/\n\n/*    width: 100vh;*/\n\n/*    overflow-x: hidden;*/\n\n/*    position: absolute;*/\n\n/*    font-family: Rubik;*/\n\n/*    top: 100%;*/\n\n/*    left: 0;*/\n\n/*}*/\n#shipment_list .w-1\\/2 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-1\\/3 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#shipment_list .w-2\\/3 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-1\\/4 {\n  width: 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n#shipment_list .w-2\\/4 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-3\\/4 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#shipment_list .w-1\\/5 {\n  width: 20%;\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n  max-width: 20%;\n}\n#shipment_list .w-2\\/5 {\n  width: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n  max-width: 40%;\n}\n#shipment_list .w-3\\/5 {\n  width: 60%;\n  -webkit-box-flex: 0;\n          flex: 0 0 60%;\n  max-width: 60%;\n}\n#shipment_list .w-4\\/5 {\n  width: 80%;\n  -webkit-box-flex: 0;\n          flex: 0 0 80%;\n  max-width: 80%;\n}\n#shipment_list .w-1\\/6 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n#shipment_list .w-2\\/6 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#shipment_list .w-3\\/6 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-4\\/6 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-5\\/6 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#shipment_list .w-1\\/12 {\n  width: 10.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 10.333333%;\n  max-width: 10.333333%;\n}\n.appt-col {\n  width: 10.333333% !important;\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 10.333333% !important;\n  max-width: 10.333333% !important;\n}\n#shipment_list .w-2\\/12 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n#shipment_list .w-3\\/12 {\n  width: 15%;\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n  max-width: 15%;\n}\n#shipment_list .w-4\\/12 {\n  width: 29.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 29.333333%;\n  max-width: 29.333333%;\n}\n#shipment_list .w-5\\/12 {\n  width: 41.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n#shipment_list .w-6\\/12 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-7\\/12 {\n  width: 58.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n#shipment_list .w-8\\/12 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-9\\/12 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#shipment_list .w-10\\/12 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#shipment_list .w-11\\/12 {\n  width: 91.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayShipmentList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm.loading
    ? _c("div", { staticClass: "tablecustom-content--text" }, [
        _c("div", {
          staticClass:
            "tablecustom-header--text my-3 loading-placeholder loading-placeholder__rectangle",
          staticStyle: { "min-height": "14px" }
        })
      ])
    : _c("div", [
        _vm.backOrderItems.length > 0
          ? _c(
              "div",
              { staticClass: "tablecustom-content--text" },
              [
                _vm._l(_vm.chunkedBackOrderItems, function(item, index) {
                  return [
                    _c(
                      "p",
                      { staticClass: "m-0 flex" },
                      [
                        _vm._l(item, function(itemValue, itemIndex) {
                          return [
                            _c("span", { staticClass: "my-2" }, [
                              _vm._v(
                                _vm._s(
                                  itemValue.item_id
                                    ? itemValue.item_id +
                                        (index ==
                                          _vm.chunkedBackOrderItems.length -
                                            1 && itemIndex == item.length - 1
                                          ? ""
                                          : ",\xa0\xa0")
                                    : "-"
                                )
                              )
                            ])
                          ]
                        })
                      ],
                      2
                    )
                  ]
                })
              ],
              2
            )
          : _c("div", { staticClass: "tablecustom-content--text" }, [
              _c("p", { staticClass: "m-0 flex items-center justify-center" }, [
                _vm._v("-")
              ])
            ])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          _c("card-custom", { staticClass: "mt-2", attrs: { title: "" } }, [
            _c("div", { staticClass: "w-full" }, [
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
                            staticStyle: { "font-size": "10px" },
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
                                    staticStyle: {
                                      "overflow-x": "auto",
                                      margin: "-50px 0px -50px 0px"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tablecustom my-8 w-full",
                                        staticStyle: { "max-width": "1310px" }
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
                                                    staticClass:
                                                      "tablecustom--content h-full w-full"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "tablecustom-content--container flex w-full"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content header-content w-3/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            Cnt#\n                                                        "
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
                                                              "tablecustom-content--content header-content w-1/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            Ctn Qty\n                                                        "
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
                                                              "tablecustom-content--content header-content w-1/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            status\n                                                        "
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
                                                              "tablecustom-content--content header-content w-1/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center text-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            Date Shipped\n                                                        "
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
                                                              "tablecustom-content--content header-content w-1/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center text-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            ETB\n                                                        "
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
                                                              "tablecustom-content--content header-content w-1/12 appt-col"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center text-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            APPT\n                                                        "
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
                                                              "tablecustom-content--content header-content w-4/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center text-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            Items\n                                                        "
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
                                                                        "tablecustom-content--content flex items-center w-3/12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text flex justify-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 items-center",
                                                                              attrs: {
                                                                                title:
                                                                                  shipment.container_number
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                        " +
                                                                                  _vm._s(
                                                                                    shipment.container_number
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
                                                                        "tablecustom-content--content flex items-center w-1/12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text flex justify-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 items-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                        " +
                                                                                  _vm._s(
                                                                                    shipment.carton_qty
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
                                                                        "tablecustom-content--content flex items-center w-1/12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "tablecustom-content--text flex justify-center"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center uppercase"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                        " +
                                                                                  _vm._s(
                                                                                    shipment.status ==
                                                                                      "arrival"
                                                                                      ? "ARRIVED"
                                                                                      : shipment.status
                                                                                          .split(
                                                                                            "_"
                                                                                          )
                                                                                          .join(
                                                                                            " "
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
                                                                          !!shipment.date_shipped
                                                                            ? _c(
                                                                                "p",
                                                                                {
                                                                                  staticClass:
                                                                                    "m-0 flex items-center justify-center"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                                                        " +
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .$moment(
                                                                                            shipment.date_shipped
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD"
                                                                                          )
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
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0 flex items-center justify-center"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                        " +
                                                                                  _vm._s(
                                                                                    !!shipment.etb
                                                                                      ? _vm
                                                                                          .$moment(
                                                                                            shipment.etb
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD"
                                                                                          )
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
                                                                        "tablecustom-content--content flex items-center w-1/12 appt-col"
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
                                                                                "\n                                                                        " +
                                                                                  _vm._s(
                                                                                    !!shipment.appt
                                                                                      ? _vm
                                                                                          .$moment(
                                                                                            shipment.appt
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD HH:mm"
                                                                                          )
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
                                                                        "tablecustom-content--content flex items-center w-4/12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "BackOrderItems",
                                                                        {
                                                                          attrs: {
                                                                            shipment: {
                                                                              shipment: shipment
                                                                            }
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
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
                                                        _vm._l(25, function(i) {
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
                                                                        "tablecustom-content--content w-1/4"
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
          ])
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

/***/ "./resources/js/views/components/shipments/BackOrderItems.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/components/shipments/BackOrderItems.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackOrderItems.vue?vue&type=template&id=367de1d9& */ "./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9&");
/* harmony import */ var _BackOrderItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackOrderItems.vue?vue&type=script&lang=js& */ "./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackOrderItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/shipments/BackOrderItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOrderItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackOrderItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOrderItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BackOrderItems.vue?vue&type=template&id=367de1d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/shipments/BackOrderItems.vue?vue&type=template&id=367de1d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOrderItems_vue_vue_type_template_id_367de1d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/DisplayShipmentList.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a& */ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a&");
/* harmony import */ var _DisplayShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayShipmentList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayShipmentList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DisplayShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Shipments/DisplayShipmentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayShipmentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayShipmentList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/DisplayShipmentList.vue?vue&type=template&id=5ec3cd4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayShipmentList_vue_vue_type_template_id_5ec3cd4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
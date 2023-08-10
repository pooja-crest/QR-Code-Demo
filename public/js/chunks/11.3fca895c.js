(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_purchaseApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/purchaseApi */ "./resources/js/apis/purchaseApi.js");
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/itemApi */ "./resources/js/apis/itemApi.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PurchaseList",
  mixins: [_apis_purchaseApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_itemApi__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {},
  data: function data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          datas: true
        },
        search_active: false,
        print_active: false
      },
      data: {
        datas: [],
        summary_data: [],
        top_summary_data: [],
        top_summary_keys: [],
        vendor_name: null,
        year_titles: [],
        paginations: {
          first_page: 1,
          current_page: 1,
          next_page: 1
        }
      },
      inputs: {
        filters: {
          search: "",
          selected_status: "by_amount"
        },
        item: {
          id: null,
          item_id: null,
          vendor_id: null,
          vendor_name: null,
          vendor_number: null,
          vendor_item_id: null,
          description: null,
          cost: null,
          moq: null,
          upc: null,
          item_weight: null,
          item_length: null,
          item_width: null,
          item_height: null,
          carton_weight: null,
          carton_length: null,
          carton_width: null,
          carton_height: null,
          carton_qty: null,
          cubic_inches: null,
          cubic_feet: null,
          hs_code: null,
          duty_rate: null,
          prov_prog_tariff: null,
          prov_prog_duty_rate: null
        }
      },
      variables: {
        status: [{
          value: "by_quantity",
          text: "Show by Quantity"
        }, {
          value: "by_amount",
          text: "Show by Amount"
        }],
        sort: {
          order_column: "",
          order_by: ""
        },
        vendor_id: null
      },
      apiLink: "http://127.0.0.1:8000/api",
      vendorItemsFileDownloadEndpoint: "".concat("http://127.0.0.1:8000/api", "/purchased/vendor-items/").concat(this.$route.params.vendor_id, "/download"),
      show_modal_item_detail: false,
      selectedItem: null
    };
  },
  watch: {
    "inputs.filters.selected_status": function inputsFiltersSelected_status(value) {
      this.data.paginations.current_page = 1;
      this.getItemsList();
    }
  },
  methods: {
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.data.paginations.current_page = 1;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
      }

      this.getItemsList();
    },
    getItemsList: function getItemsList() {
      var _this = this;

      this.vendor_id = this.$route.params.vendor_id;
      this.conditions.loadings.datas = true;
      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        status: this.inputs.filters.selected_status ? this.inputs.filters.selected_status : null,
        order_column: this.variables.sort.order_column,
        order_by: this.variables.sort.order_by
      };
      this.purchaseApi_getVendorItemData(this.vendor_id, params).then(function (response) {
        _this.data.datas = response.data.item_data ? response.data.item_data : [];
        _this.data.summary_data = response.data.summary_data;
        _this.data.top_summary_data = response.data.top_summary;
        _this.data.top_summary_keys = response.data.top_summary_keys;
        _this.data.vendor_name = response.data.vendor_name;
        _this.data.year_titles = response.data.year_titles[0];

        if (response.data.length >= _this.conditions.data_each_page) {
          _this.data.paginations.next_page = _this.data.paginations.current_page + 1;
        }
      })["finally"](function () {
        return _this.conditions.loadings.datas = false;
      });
    },
    goToPage: function goToPage(page_number) {
      this.data.paginations.current_page = page_number;
      this.getItemsList();
    },
    sortby: function sortby(order_column) {
      this.variables.sort.order_column = order_column;

      if (this.variables.sort.order_by == "asc") {
        this.variables.sort.order_by = "desc";
      } else {
        this.variables.sort.order_by = "asc";
      }

      this.getItemsList();
    },
    downloadData: function downloadData() {
      var params = {
        search: this.inputs.filters.search,
        status: this.inputs.filters.selected_status ? this.inputs.filters.selected_status : null,
        order_column: this.variables.sort.order_column,
        order_by: this.variables.sort.order_by
      };
      var searchParams = new URLSearchParams(params).toString();
      window.open(this.vendorItemsFileDownloadEndpoint + "?" + searchParams, "_blank");
      return true;
    },
    printData: function printData() {
      var _this2 = this;

      this.conditions.print_active = true;
      this.globalFunction_printData([], this.$refs.printData)["finally"](function () {
        return _this2.conditions.print_active = false;
      });
    },
    getItemDetails: function getItemDetails(item) {
      var _this3 = this;

      this.itemApi_getOne(item.item_id, item.vendor_id).then(function (response) {
        if (response.success) {
          var totalBomCost = 0;
          _this3.selectedItem = response.data;

          if (_this3.selectedItem.hasOwnProperty("order_elco_item") && !!_this3.selectedItem.order_elco_item) {
            _this3.selectedItem.order_elco_item.components = _this3.selectedItem.order_elco_item.components.map(function (cmp) {
              if (!!cmp.component_item_price && cmp.component_item_price.hasOwnProperty("cost")) {
                totalBomCost = totalBomCost + parseFloat(cmp.component_item_price.cost);
              }

              return _objectSpread({}, cmp, {
                master_items_expanded: false,
                eta_expanded: false
              }, cmp.master_items.forEach(function (mcmp) {
                _this3.$set(mcmp, "master_eta_expanded", false);
              }));
            });
          }

          _this3.selectedItem["total_bom_cost"] = totalBomCost > 0 ? totalBomCost.toFixed(2) : totalBomCost;
          _this3.show_modal_item_detail = true;
        }
      });
    }
  },
  created: function created() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: "login"
              });
            } else {
              this.getItemsList();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#vendor_list .w-1\\/2 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#vendor_list .w-1\\/3 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#vendor_list .w-2\\/3 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#vendor_list .w-1\\/4 {\n  width: 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n#vendor_list .w-2\\/4 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#vendor_list .w-3\\/4 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#vendor_list .w-1\\/5 {\n  width: 20%;\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n  max-width: 20%;\n}\n#vendor_list .w-2\\/5 {\n  width: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n  max-width: 40%;\n}\n#vendor_list .w-3\\/5 {\n  width: 60%;\n  -webkit-box-flex: 0;\n          flex: 0 0 60%;\n  max-width: 60%;\n}\n#vendor_list .w-4\\/5 {\n  width: 80%;\n  -webkit-box-flex: 0;\n          flex: 0 0 80%;\n  max-width: 80%;\n}\n#vendor_list .w-1\\/6 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n#vendor_list .w-2\\/6 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#vendor_list .w-3\\/6 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#vendor_list .w-4\\/6 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#vendor_list .w-5\\/6 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#vendor_list .w-1\\/12 {\n  width: 8.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n#vendor_list .w-2\\/12 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 9.666667%;\n  max-width: 16.666667%;\n}\n#vendor_list .w-3\\/12 {\n  width: 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n#vendor_list .w-4\\/12 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#vendor_list .w-5\\/12 {\n  width: 41.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n#vendor_list .w-6\\/12 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#vendor_list .w-7\\/12 {\n  width: 58.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n#vendor_list .w-8\\/12 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#vendor_list .w-9\\/12 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#vendor_list .w-10\\/12 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#vendor_list .w-11\\/12 {\n  width: 91.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n#vendor_list .w-full {\n  width: 100%;\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  max-width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorItemList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af& ***!
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
          _c("div", { staticClass: "flex" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex flex-col w-2/12 items-end",
                staticStyle: { "margin-top": "2.4%" }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-primary w-full",
                    staticStyle: {
                      "text-decoration": "none",
                      background: "#ffffff42"
                    },
                    attrs: { to: { name: "purchased" } }
                  },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "ChevronLeftIcon", svgClasses: "h-4 w-4" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn--text custom-text-bold" }, [
                      _vm._v("Back to Purchase List")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "card-custom",
            { staticClass: "mb-5", attrs: { title: "Summary" } },
            [
              !_vm.conditions.loadings.summary
                ? _c(
                    "div",
                    { staticClass: "summary summary__container mt-2" },
                    [
                      _c("div", { staticClass: "summary__items" }, [
                        _c("div", { staticClass: "w-1/3" }, [
                          _c("div", { staticClass: "summary__items__item" }, [
                            _c("span", [_vm._v("Vendor name")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-md mt-2 custom-text-bold" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.data.vendor_name
                                      ? _vm.data.vendor_name
                                      : "-"
                                  )
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-1/3" }, [
                          _c("div", { staticClass: "summary__items__item" }, [
                            _c("span", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.data.top_summary_keys[0]
                                      ? _vm.data.top_summary_keys[0] + " Total"
                                      : "-"
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-md mt-2 custom-text-bold" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.data.top_summary_data[0]
                                      ? _vm.inputs.filters.selected_status ==
                                        "by_amount"
                                        ? _vm.globalFunction_formatNumberToCurrency(
                                            _vm.data.top_summary_data[0]
                                          )
                                        : _vm.data.top_summary_data[0]
                                      : "-"
                                  ) + "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-1/3" }, [
                          _c("div", { staticClass: "summary__items__item" }, [
                            _c("span", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.data.top_summary_keys[1]
                                      ? _vm.data.top_summary_keys[1] + " Total"
                                      : "-"
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-md mt-2 custom-text-bold" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.data.top_summary_data[1]
                                      ? _vm.inputs.filters.selected_status ==
                                        "by_amount"
                                        ? _vm.globalFunction_formatNumberToCurrency(
                                            _vm.data.top_summary_data[1]
                                          )
                                        : _vm.data.top_summary_data[1]
                                      : "-"
                                  ) + "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-1/3" }, [
                          _c("div", { staticClass: "summary__items__item" }, [
                            _c("span", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.data.top_summary_keys[2]
                                      ? _vm.data.top_summary_keys[2] + " Total"
                                      : "-"
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-md mt-2 custom-text-bold" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.data.top_summary_data[2]
                                      ? _vm.inputs.filters.selected_status ==
                                        "by_amount"
                                        ? _vm.globalFunction_formatNumberToCurrency(
                                            _vm.data.top_summary_data[2]
                                          )
                                        : _vm.data.top_summary_data[2]
                                      : "-"
                                  ) + "\n                                "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                : _c("div", {
                    staticClass:
                      "mt-2 loading-placeholder loading-placeholder__rectangle",
                    staticStyle: { height: "100px" }
                  })
            ]
          ),
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
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(status.text) +
                            "\n                            "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-col w-2/12 mr-2 items-end" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary w-full",
                      staticStyle: { "text-decoration": "none" },
                      on: {
                        click: function($event) {
                          return _vm.downloadData()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Download")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-col w-2/12 items-end" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary w-full",
                    staticStyle: { "text-decoration": "none" },
                    on: {
                      click: function($event) {
                        return _vm.printData()
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "btn--text custom-text-bold" }, [
                      _vm._v("Print")
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", { attrs: { title: "Search" } }, [
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
                      attrs: { type: "text", placeholder: "Search Item #" },
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
                            _vm.inputs.filters.search == "" ? "disabled" : "",
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
          _c("card-custom", { attrs: { title: "" } }, [
            _c("div", { staticClass: "w-full" }, [
              _c(
                "div",
                { staticClass: "flex flex-col w-full" },
                [
                  _vm.data.datas.length > 0 || _vm.conditions.loadings.datas
                    ? _c("div", { staticClass: "w-full" }, [
                        _c(
                          "div",
                          {
                            staticClass: "table-custom-component",
                            attrs: { id: "vendor_list" }
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
                                                          "tablecustom-content--container flex w-full"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content w-3/12",
                                                            staticStyle: {
                                                              border:
                                                                "none !important"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "tablecustom-content--text uppercase text-xs font-medium flex justify-center items-center"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                                Item Number"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.data.year_titles,
                                                          function(
                                                            year,
                                                            index
                                                          ) {
                                                            return [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-content--content w-2/12",
                                                                  staticStyle: {
                                                                    border:
                                                                      "none !important"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "tablecustom-content--text uppercase text-xs font-medium flex justify-center items-center"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                    " +
                                                                          _vm._s(
                                                                            year
                                                                          ) +
                                                                          " Total  \n                                                                    "
                                                                      ),
                                                                      _c(
                                                                        "label",
                                                                        {
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.sortby(
                                                                                year
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm
                                                                            .variables
                                                                            .sort
                                                                            .order_column ==
                                                                            year &&
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
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ],
                                                      2
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
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "flex"
                                                          },
                                                          [
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
                                                                          "m-0",
                                                                        staticStyle: {
                                                                          "font-weight":
                                                                            "800"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Total"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _vm._l(
                                                              _vm.data
                                                                .summary_data,
                                                              function(
                                                                yearData,
                                                                index
                                                              ) {
                                                                return [
                                                                  _c(
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
                                                                            "tablecustom-content--text"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "m-0",
                                                                              staticStyle: {
                                                                                "font-weight":
                                                                                  "800"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                            " +
                                                                                  _vm._s(
                                                                                    _vm
                                                                                      .inputs
                                                                                      .filters
                                                                                      .selected_status ==
                                                                                      "by_amount"
                                                                                      ? _vm.globalFunction_formatNumberToCurrency(
                                                                                          yearData
                                                                                        )
                                                                                      : yearData
                                                                                  ) +
                                                                                  "\n                                                                        "
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
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.data.datas,
                                                          function(
                                                            item,
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
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "m-0",
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.getItemDetails(
                                                                                    item
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  item.item_id
                                                                                )
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    item.yearly_data,
                                                                    function(
                                                                      yearData,
                                                                      index
                                                                    ) {
                                                                      return [
                                                                        _c(
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
                                                                                      "\n                                                                                " +
                                                                                        _vm._s(
                                                                                          _vm
                                                                                            .inputs
                                                                                            .filters
                                                                                            .selected_status ==
                                                                                            "by_amount"
                                                                                            ? _vm.globalFunction_formatNumberToCurrency(
                                                                                                yearData
                                                                                              )
                                                                                            : yearData
                                                                                        ) +
                                                                                        "\n                                                                            "
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
                                                      _vm._l(5, function(p) {
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
                                                                5,
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
                      ],
                  _vm._v(" "),
                  !_vm.conditions.loadings
                    ? _c("div", { staticClass: "table-custom--footer" }, [
                        _c("div", { staticClass: "w-1/2 flex justify-start" }, [
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
                        _vm.data.datas.length >= _vm.conditions.data_each_page
                          ? _c(
                              "div",
                              { staticClass: "w-1/2 flex justify-end" },
                              [
                                _vm.data.paginations.current_page <
                                _vm.data.paginations.last_page
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
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "printData",
                class: [_vm.conditions.print_active ? "" : "hidden", "w-full"],
                attrs: { id: "printData" }
              },
              [
                _c("div", [_c("h3", [_vm._v("Purchase Vendor Items")])]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "table",
                    { staticStyle: { border: "1px solid", width: "100%" } },
                    [
                      _c("thead", [
                        _c(
                          "tr",
                          [
                            _c(
                              "th",
                              {
                                staticStyle: {
                                  border: "1px solid",
                                  padding: "0px 6px"
                                }
                              },
                              [_vm._v("Item Number")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.data.year_titles, function(year, index) {
                              return _c(
                                "th",
                                {
                                  key: index,
                                  staticStyle: {
                                    border: "1px solid",
                                    padding: "0px 4px"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(year) +
                                      " Total\n                                "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _vm.data.datas.length > 0 || _vm.conditions.loadings.datas
                        ? _c(
                            "tbody",
                            { ref: "printDataTbody" },
                            [
                              _c(
                                "tr",
                                {
                                  staticStyle: {
                                    border: "1px solid",
                                    padding: "0px 4px"
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        border: "1px solid",
                                        padding: "2px",
                                        "font-weight": "bold"
                                      }
                                    },
                                    [_c("span", [_vm._v("Total")])]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.data.summary_data, function(
                                    yearData,
                                    index
                                  ) {
                                    return _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          border: "1px solid",
                                          padding: "2px",
                                          "font-weight": "bold"
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.inputs.filters
                                                .selected_status == "by_amount"
                                                ? _vm.globalFunction_formatNumberToCurrency(
                                                    yearData
                                                  )
                                                : yearData
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.data.datas, function(item, index) {
                                return _c(
                                  "tr",
                                  {
                                    key: index,
                                    staticStyle: {
                                      border: "1px solid",
                                      padding: "0px 4px"
                                    }
                                  },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          border: "1px solid",
                                          padding: "2px"
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(_vm._s(item.item_id))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(item.yearly_data, function(
                                      yearData,
                                      index
                                    ) {
                                      return [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              border: "1px solid",
                                              padding: "2px"
                                            }
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.inputs.filters
                                                    .selected_status ==
                                                    "by_amount"
                                                    ? _vm.globalFunction_formatNumberToCurrency(
                                                        yearData
                                                      )
                                                    : yearData
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      ]
                                    })
                                  ],
                                  2
                                )
                              })
                            ],
                            2
                          )
                        : _c("tbody", { ref: "printDataTbody" }, [
                            _c(
                              "tr",
                              {
                                staticStyle: {
                                  border: "1px solid",
                                  padding: "0px 4px"
                                }
                              },
                              [
                                _c(
                                  "td",
                                  {
                                    staticStyle: {
                                      border: "1px solid",
                                      padding: "2px",
                                      "text-align": "center"
                                    },
                                    attrs: { colspan: "7" }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "#4080FF",
                                          "text-decoration": "underline"
                                        }
                                      },
                                      [_vm._v("No data found.")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ]
                  )
                ])
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_item_detail",
            title: "Item Details",
            "content-width": "900",
            "content-height": "95%"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _vm.show_modal_item_detail == true && _vm.selectedItem != null
              ? _c("div", { staticClass: "w-full block" }, [
                  _c(
                    "div",
                    { staticClass: "w-full flex flex-row pb-3 border-b-1" },
                    [
                      _c("div", { staticClass: "flex-col w-full" }, [
                        _c("span", { staticClass: "font-bold" }, [
                          _vm._v("Item Details")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full flex flex-row" }, [
                    _c("div", { staticClass: "flex-col w-6/12" }, [
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Item #")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(_vm._s(_vm.selectedItem.item_id))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Vendor Item Code")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  !!_vm.selectedItem.vendor.vendor_item_id
                                    ? _vm.selectedItem.vendor.vendor_item_id
                                    : "-"
                                )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("MOQ")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                !!_vm.selectedItem.moq
                                  ? _vm.selectedItem.moq
                                  : "-"
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Cost")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                _vm.globalFunction_formatNumberToCurrency(
                                  _vm.selectedItem.cost
                                )
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Duty Rate")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  !!_vm.selectedItem.duty_rate
                                    ? _vm.globalFunction_formatNumberToCurrency(
                                        _vm.selectedItem.duty_rate,
                                        ""
                                      ) + "%"
                                    : "-"
                                )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Prov/Prog. Duty Rate")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  !!_vm.selectedItem.prov_prog_duty_rate
                                    ? _vm.globalFunction_formatNumberToCurrency(
                                        _vm.selectedItem.prov_prog_duty_rate,
                                        ""
                                      ) + "%"
                                    : "-"
                                )
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-6/12" }, [
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Vendor #")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(_vm.selectedItem.vendor.vendor_number)
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Vendor Name")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                !!_vm.selectedItem.vendor.name
                                  ? _vm.selectedItem.vendor.name
                                  : "-"
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("UPC")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                !!_vm.selectedItem.upc
                                  ? _vm.selectedItem.upc
                                  : "-"
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("HS Code")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                !!_vm.selectedItem.hs_code
                                  ? _vm.selectedItem.hs_code
                                  : "-"
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Prov/Prog. Tariff")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  !!_vm.selectedItem.prov_prog_tariff
                                    ? _vm.globalFunction_formatNumberToCurrency(
                                        _vm.selectedItem.prov_prog_tariff,
                                        ""
                                      )
                                    : "-"
                                )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Description")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(
                                !!_vm.selectedItem.description
                                  ? _vm.selectedItem.description
                                  : "-"
                              )
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full flex-row" }, [
                    _c("div", { staticClass: "flex-col w-12/12" }, [
                      _c("div", { staticClass: "table-custom-component" }, [
                        _c("div", { staticClass: "table-custom--container" }, [
                          _c("div", { staticClass: "table-custom--content" }, [
                            _c("div", { staticClass: "tablecustom w-full" }, [
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
                                            "tablecustom-content--container w-full",
                                          staticStyle: {
                                            "margin-bottom": "12px"
                                          }
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
                                                    "flex justify-center font-bold"
                                                },
                                                [
                                                  _vm._v(
                                                    "Individual box (1\n                                                                pc)"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "flex" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-3/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Weight (Lb)")]
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Length (Inch)")]
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Width (Inch)")]
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Height (Inch)")]
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "flex" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-3/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .item_weight
                                                      )
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .item_length
                                                      )
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .item_width
                                                      )
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
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .item_height
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full flex-row" }, [
                    _c("div", { staticClass: "flex-col w-12/12" }, [
                      _c("div", { staticClass: "table-custom-component" }, [
                        _c("div", { staticClass: "table-custom--container" }, [
                          _c("div", { staticClass: "table-custom--content" }, [
                            _c("div", { staticClass: "tablecustom w-full" }, [
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
                                            "tablecustom-content--container w-full",
                                          staticStyle: {
                                            "margin-bottom": "12px"
                                          }
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
                                                    "flex justify-center font-bold"
                                                },
                                                [_vm._v("Master Carton")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "flex" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Weight (Lb)")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Length (Inch)")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Width (Inch)")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Height (Inch)")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Carton Qty")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [_vm._v("Cubic Feet")]
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "flex" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .carton_weight
                                                      )
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
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .carton_length
                                                      )
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
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .carton_width
                                                      )
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
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .carton_height
                                                      )
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
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .carton_qty
                                                      )
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
                                                  "tablecustom-content--content w-2/12"
                                              },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "m-0" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.selectedItem
                                                          .cubic_feet
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
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
                ])
              : _vm._e()
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
    return _c("div", { staticClass: "w-full page-title--container" }, [
      _c("span", { staticClass: "page-title--text" }, [
        _vm._v("Vendor Item List")
      ])
    ])
  }
]
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

/***/ "./resources/js/apis/purchaseApi.js":
/*!******************************************!*\
  !*** ./resources/js/apis/purchaseApi.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "purchased";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    purchaseApi_getAll: function purchaseApi_getAll() {
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
    purchaseApi_getVendorItemData: function purchaseApi_getVendorItemData(vendorId) {
      var _this2 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/vendor-items/").concat(vendorId),
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

/***/ "./resources/js/views/pages/Purchased/VendorItemList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/pages/Purchased/VendorItemList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorItemList.vue?vue&type=template&id=74a4f8af& */ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af&");
/* harmony import */ var _VendorItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorItemList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VendorItemList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VendorItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Purchased/VendorItemList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorItemList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorItemList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorItemList.vue?vue&type=template&id=74a4f8af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Purchased/VendorItemList.vue?vue&type=template&id=74a4f8af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorItemList_vue_vue_type_template_id_74a4f8af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
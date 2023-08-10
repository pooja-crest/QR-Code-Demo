(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/itemApi */ "./resources/js/apis/itemApi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ItemVendorChatCustom",
  props: {
    itemId: {
      "default": null,
      type: Number
    },
    vendorId: {
      "default": null,
      type: Number
    }
  },
  mixins: [_apis_itemApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      chats: [],
      inputs: {
        chat: {
          item_id: null,
          vendor_id: null,
          message: null,
          file_upload: null
        }
      },
      form_data: new FormData(),
      apiLink: "http://127.0.0.1:8000/api"
    };
  },
  computed: {},
  methods: {
    initiateUploadFile: function initiateUploadFile() {
      this.$refs.uploadFile.click();
    },
    getFileExtension: function getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    onFileChanged: function onFileChanged() {
      var file = this.$refs.uploadFile.files[0];
      var allowed_files = ["pdf", "csv", "xls", "xlsx", "jpg", "jpeg", "png"];

      if (!!file) {
        var fileSize = 1024 * 50 * 1024; // size mb to bytes

        if (!allowed_files.includes(this.getFileExtension(file.name))) {
          this.$notify({
            group: "notification",
            type: "warn",
            title: "Warnning",
            text: 'Please select file from following extensions pdf,csv,xls,xlsx,jpg,jpeg,png'
          });
        } else {
          if (file.size > fileSize) {
            this.$notify({
              group: "notification",
              type: "warn",
              title: "Warnning",
              text: 'You can select file lower than 50mb size'
            });
          } else {
            this.form_data.append("chat_file", file);
            this.inputs.chat.file_upload = file.name;
          }
        }
      }
    },
    resetUploadFile: function resetUploadFile() {
      this.inputs.chat.file_upload = null;
      this.form_data["delete"]("chat_file");
    },
    getItemVendorChats: function getItemVendorChats() {
      var _this = this;

      this.itemApi_getItemVendorChats(this.itemId, this.vendorId).then(function (response) {
        if (response.success == true && response.data.length > 0) {
          _this.chats = response.data;

          var container = _this.$el.querySelector('#chatbox');

          _this.$nextTick(function () {
            container.scrollTop = container.scrollHeight;
          });
        }
      });
    },
    submitChat: function submitChat() {
      var _this2 = this;

      if (!!this.inputs.chat.message || !!this.inputs.chat.file_upload) {
        this.form_data.append('chat', JSON.stringify(this.inputs.chat));
        this.itemApi_sendItemVendorMessage(this.form_data).then(function (response) {
          if (response.success) {
            _this2.inputs.chat.message = null;
            _this2.inputs.chat.file_upload = null;

            _this2.form_data["delete"]("chat");

            _this2.form_data["delete"]("chat_file");

            _this2.getItemVendorChats(_this2.itemId, _this2.vendorId);
          }
        });
      }
    }
  },
  mounted: function mounted() {
    if (!!this.itemId && !!this.vendorId) {
      this.inputs.chat.item_id = this.itemId, this.inputs.chat.vendor_id = this.vendorId, this.getItemVendorChats();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/itemApi */ "./resources/js/apis/itemApi.js");
/* harmony import */ var _SubListOfOrderStatusItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubListOfOrderStatusItem.vue */ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SubListOfOrderStatusItem: _SubListOfOrderStatusItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "OrderStatusByItem",
  mixins: [_apis_itemApi__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    data: {
      "default": []
    }
  },
  filters: {
    formatDate: function formatDate(date) {
      if (date != "") {
        date = "(".concat(date, ")");
      }

      return date;
    }
  },
  data: function data() {
    return {
      currentKey: null,
      childData: []
    };
  },
  methods: {
    getItemByMultipleShip: function getItemByMultipleShip(key, order) {
      var _this = this;

      this.childData = [];
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.currentKey = "".concat(key).concat(order.item_id);
      this.itemApi_getItemByMultipleShip(order.item_id, order.shipment_order_item_id, order.order_id, order.received_type).then(function (response) {
        var data = response.data;
        _this.childData = data;
      })["finally"](function () {
        return loading.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SubListOfOrderStatusItem",
  props: {
    data: {
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/itemApi */ "./resources/js/apis/itemApi.js");
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/vendorApi */ "./resources/js/apis/vendorApi.js");
/* harmony import */ var _apis_orderElcoItemApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/orderElcoItemApi */ "./resources/js/apis/orderElcoItemApi.js");
/* harmony import */ var _helpers_itemAvailabilitiesHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/itemAvailabilitiesHelpers */ "./resources/js/helpers/itemAvailabilitiesHelpers.js");
/* harmony import */ var _helpers_datetimeHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/datetimeHelpers */ "./resources/js/helpers/datetimeHelpers.js");
/* harmony import */ var _helpers_itemsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/itemsHelpers */ "./resources/js/helpers/itemsHelpers.js");
/* harmony import */ var _components_ItemVendorChatCustom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ItemVendorChatCustom.vue */ "./resources/js/views/components/ItemVendorChatCustom.vue");
/* harmony import */ var _components_Items_OrderStatusByItem_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Items/OrderStatusByItem.vue */ "./resources/js/views/components/Items/OrderStatusByItem.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_9__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ItemList",
  mixins: [_apis_itemApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__["default"], _apis_orderElcoItemApi__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_itemAvailabilitiesHelpers__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_datetimeHelpers__WEBPACK_IMPORTED_MODULE_5__["default"], _helpers_itemsHelpers__WEBPACK_IMPORTED_MODULE_6__["default"]],
  components: {
    ItemVendorChatCustom: _components_ItemVendorChatCustom_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    OrderStatusByItem: _components_Items_OrderStatusByItem_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      currentItemOrderId: null,
      ordersByItem: [],
      allFileDownloadEndpoint: "".concat("http://127.0.0.1:8000/api", "/items/download"),
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
          next_page: 1,
          total_pages_for_both: 0,
          last_page_of_purchase_item: 1
        },
        type: "purchase_items"
      },
      inputs: {
        filters: {
          search: null,
          vendor: null
        },
        file_upload: {
          type: "item-availabilities",
          name: null
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
        },
        order_item: {
          item_id: null,
          vendor_id: null,
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
        vendors: []
      },
      show_modal_item_detail: false,
      selectedItem: null,
      show_modal_edit_item_detail: false,
      show_modal_order_item_detail: false,
      show_modal_edit_order_item_detail: false,
      selectedOrderItem: null
    };
  },
  computed: {
    tableWidth: function tableWidth() {
      return this.$refs.table.clientWidth;
    },
    allowSubmitEditItem: function allowSubmitEditItem() {
      if (this.inputs.item.cost > 0 && this.inputs.item.moq != "" && this.inputs.item.item_weight > 0 && this.inputs.item.item_length > 0 && this.inputs.item.item_width > 0 && this.inputs.item.item_height > 0 && this.inputs.item.carton_qty != "" && this.inputs.item.upc > 0 && this.inputs.item.carton_weight > 0 && this.inputs.item.carton_length > 0 && this.inputs.item.carton_width > 0 && this.inputs.item.carton_height > 0) {
        return true;
      }

      return false;
    }
  },
  watch: {
    // "inputs.filters.search": function(value) {
    //   const searchActive = !!value || !!this.inputs.filters.customer;
    //   this.searchData(searchActive);
    // },
    "inputs.filters.vendor": function inputsFiltersVendor(value) {
      var searchActive = !!value || !!this.inputs.filters.search;
      this.searchData(searchActive);
      this.data.type = "purchase_items";
    },
    show_modal_edit_item_detail: function show_modal_edit_item_detail(value) {
      if (!value) {
        this.resetItemInputs();
      }
    },
    show_modal_edit_order_item_detail: function show_modal_edit_order_item_detail(value) {
      if (!value) {
        this.resetOrderItemInputs();
      }
    },
    "inputs.item.carton_length": function inputsItemCarton_length(carton_length) {
      if (carton_length > 0) {
        this.inputs.item.cubic_inches = (carton_length * this.inputs.item.carton_width * this.inputs.item.carton_height).toFixed(2);
        this.inputs.item.cubic_feet = (this.inputs.item.cubic_inches / "1728").toFixed(2);
      }
    },
    "inputs.item.carton_width": function inputsItemCarton_width(carton_width) {
      if (carton_width > 0) {
        this.inputs.item.cubic_inches = (carton_width * this.inputs.item.carton_length * this.inputs.item.carton_height).toFixed(2);
        this.inputs.item.cubic_feet = (this.inputs.item.cubic_inches / "1728").toFixed(2);
      }
    },
    "inputs.item.carton_height": function inputsItemCarton_height(carton_height) {
      if (carton_height > 0) {
        this.inputs.item.cubic_inches = (carton_height * this.inputs.item.carton_width * this.inputs.item.carton_length).toFixed(2);
        this.inputs.item.cubic_feet = (this.inputs.item.cubic_inches / "1728").toFixed(2);
      }
    },
    "inputs.order_item.carton_length": function inputsOrder_itemCarton_length(carton_length) {
      if (carton_length > 0) {
        this.inputs.order_item.cubic_inches = (carton_length * this.inputs.order_item.carton_width * this.inputs.order_item.carton_height).toFixed(2);
        this.inputs.order_item.cubic_feet = (this.inputs.order_item.cubic_inches / "1728").toFixed(2);
      }
    },
    "inputs.order_item.carton_width": function inputsOrder_itemCarton_width(carton_width) {
      if (carton_width > 0) {
        this.inputs.order_item.cubic_inches = (carton_width * this.inputs.order_item.carton_length * this.inputs.order_item.carton_height).toFixed(2);
        this.inputs.order_item.cubic_feet = (this.inputs.order_item.cubic_inches / "1728").toFixed(2);
      }
    },
    "inputs.order_item.carton_height": function inputsOrder_itemCarton_height(carton_height) {
      if (carton_height > 0) {
        this.inputs.order_item.cubic_inches = (carton_height * this.inputs.order_item.carton_width * this.inputs.order_item.carton_length).toFixed(2);
        this.inputs.order_item.cubic_feet = (this.inputs.order_item.cubic_inches / "1728").toFixed(2);
      }
    }
  },
  methods: {
    selectedVendor: function selectedVendor() {
      var _this = this;

      var vendorName = this.variables.vendors.find(function (vendor) {
        return vendor.id == _this.inputs.order_item.vendor_id;
      }).name;
      this.inputs.order_item.vendor_name = vendorName.split("-").pop();
    },
    cubicFeetConvert: function cubicFeetConvert(inches) {
      var cubic_feet = null;

      if (!!inches) {
        cubic_feet = (inches / "1728").toFixed(2);
      }

      return cubic_feet;
    },
    deleteItem: function deleteItem(item_id, vendor_id) {
      var _this2 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete ".concat(item_id, " item"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this2.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this2.itemApi_delete(item_id, vendor_id).then(function (_ref) {
            var data = _ref.data;

            _this2.getItems();
          })["finally"](function () {
            return loading.hide();
          });
        }
      });
    },
    getItems: function getItems() {
      var _this3 = this;

      this.conditions.loadings.datas = true;
      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        price_vendor_id: this.inputs.filters.vendor,
        type: this.data.type
      };
      this.itemApi_getAll(params).then(function (response) {
        _this3.data.datas = [];
        _this3.data.last_page_of_purchase_item = response.data.last_page_of_purchase_item;
        _this3.data.datas = response.data.items;
        _this3.data.paginations.total_pages_for_both = response.data.total_pages_for_both;

        if (_this3.data.paginations.current_page >= response.data.last_page_of_purchase_item) {
          _this3.data.type = "order_items"; // this.data.paginations.current_page = 0;
        } // if ((response.data.items.length >= this.conditions.data_each_page) && (response.data.total_pages_for_both >= this.data.paginations.current_page)) {
        // 	this.data.paginations.next_page = this.data.paginations.current_page + 1;
        // }


        if (response.data.total_pages_for_both >= _this3.data.paginations.current_page) {
          _this3.data.paginations.next_page = _this3.data.paginations.current_page + 1;
        }

        if (_this3.inputs.filters.search != null || _this3.inputs.filters.vendor != null) {
          _this3.data.paginations.next_page = 1;
        }
      })["finally"](function () {
        return _this3.conditions.loadings.datas = false;
      });
    },
    getItemDetails: function getItemDetails(item) {
      var _this4 = this;

      if (item.hasOwnProperty('is_from_order') && item.is_from_order == true) {
        this.orderElcoItemApi_getOne(item.item_id).then(function (response) {
          if (response.success) {
            var totalBomCost = 0;
            _this4.selectedOrderItem = response.data.item;
            _this4.selectedOrderItem.components = _this4.selectedOrderItem.components.map(function (cmp) {
              if (!!cmp.component_item_price && cmp.component_item_price.hasOwnProperty('cost')) {
                totalBomCost = totalBomCost + parseFloat(cmp.component_item_price.cost);
              }

              return _objectSpread({}, cmp, {
                master_items_expanded: false,
                eta_expanded: false
              }, cmp.master_items.forEach(function (mcmp) {
                // mcmp['master_eta_expanded'] = false;
                // return {...mcmp, master_eta_expanded:false }
                _this4.$set(mcmp, 'master_eta_expanded', false);
              }));
            });
            _this4.selectedItem['total_bom_cost'] = totalBomCost > 0 ? totalBomCost.toFixed(2) : totalBomCost;
            _this4.show_modal_order_item_detail = true;
          } else {
            _this4.$notify({
              group: "notification",
              type: "info",
              title: response.message
            });
          }
        });
      } else {
        this.itemApi_getOne(item.item_id, item.vendor_id).then(function (response) {
          if (response.success) {
            var totalBomCost = 0;
            _this4.selectedItem = response.data;

            if (_this4.selectedItem.hasOwnProperty('order_elco_item') && !!_this4.selectedItem.order_elco_item) {
              _this4.selectedItem.order_elco_item.components = _this4.selectedItem.order_elco_item.components.map(function (cmp) {
                if (!!cmp.component_item_price && cmp.component_item_price.hasOwnProperty('cost')) {
                  totalBomCost = totalBomCost + parseFloat(cmp.component_item_price.cost);
                }

                return _objectSpread({}, cmp, {
                  master_items_expanded: false,
                  eta_expanded: false
                }, cmp.master_items.forEach(function (mcmp) {
                  // mcmp['master_eta_expanded'] = false;
                  // return {...mcmp, master_eta_expanded:false }
                  _this4.$set(mcmp, 'master_eta_expanded', false);
                }));
              });
            }

            _this4.selectedItem['total_bom_cost'] = totalBomCost > 0 ? totalBomCost.toFixed(2) : totalBomCost;
            _this4.show_modal_item_detail = true;
          }
        });
      }
    },
    editItemDetails: function editItemDetails(itemId, vendorId) {
      var _this5 = this;

      this.itemApi_getOne(itemId, vendorId).then(function (response) {
        if (response.success) {
          _this5.resetItemInputs(response.data);

          _this5.show_modal_edit_item_detail = true;
        }
      });
    },
    submitUpdateItemDetails: function submitUpdateItemDetails() {
      var _this6 = this;

      this.itemApi_updateItem(this.inputs.item.id, this.inputs.item).then(function (response) {
        if (response.success) {
          // this.show_modal_edit_item_detail = false;
          // this.resetItemInputs();
          _this6.$notify({
            group: "notification",
            type: "success",
            title: response.message
          });

          _this6.editItemDetails(_this6.inputs.item.item_id, _this6.inputs.item.vendor_id);

          _this6.getItems();
        }
      });
    },
    resetItemInputs: function resetItemInputs() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.inputs.item = {
        id: null,
        vendor_id: null,
        item_id: null,
        vendor_name: null,
        vendor_number: null,
        vendor_item_id: null,
        description: null,
        cost: null,
        moq: null,
        item_weight: null,
        item_length: null,
        item_width: null,
        item_height: null,
        carton_qty: null,
        upc: null,
        carton_weight: null,
        carton_length: null,
        carton_width: null,
        carton_height: null,
        cubic_inches: null,
        cubic_feet: null,
        hs_code: null,
        duty_rate: null,
        prov_prog_tariff: null,
        prov_prog_duty_rate: null
      };

      if (item != null) {
        this.inputs.item.id = item.id, this.inputs.item.vendor_id = item.vendor_id, this.inputs.item.item_id = item.item_id, this.inputs.item.vendor_name = item.vendor.name, this.inputs.item.vendor_number = item.vendor.vendor_number, this.inputs.item.vendor_item_id = item.vendor_item_id, this.inputs.item.description = item.description, this.inputs.item.cost = item.cost, this.inputs.item.moq = item.moq, this.inputs.item.item_weight = item.item_weight, this.inputs.item.item_length = item.item_length, this.inputs.item.item_width = item.item_width, this.inputs.item.item_height = item.item_height, this.inputs.item.carton_qty = item.carton_qty, this.inputs.item.upc = item.upc, this.inputs.item.carton_weight = item.carton_weight, this.inputs.item.carton_length = item.carton_length, this.inputs.item.carton_width = item.carton_width, this.inputs.item.carton_height = item.carton_height, this.inputs.item.cubic_inches = item.cubic_inches, this.inputs.item.cubic_feet = item.cubic_feet;
        this.inputs.item.hs_code = item.hs_code;
        this.inputs.item.duty_rate = item.duty_rate;
        this.inputs.item.prov_prog_tariff = item.prov_prog_tariff;
        this.inputs.item.prov_prog_duty_rate = item.prov_prog_duty_rate;
      }
    },
    goToPage: function goToPage(page_number) {
      this.data.paginations.current_page = page_number;
      this.data.type = this.data.paginations.current_page <= this.data.last_page_of_purchase_item ? "purchase_items" : "order_items";
      this.getItems();
    },
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.conditions.search_active = search_active;
      this.data.type = "purchase_items";
      this.data.paginations.current_page = 1;

      if (!search_active) {
        this.inputs.filters.search = null;
        this.inputs.filters.vendor = null;
      }

      this.getItems();
    },
    initiateUploadFile: function initiateUploadFile(type) {
      this.inputs.file_upload.type = type;
      this.$refs.uploadFile.click();
    },
    getFileExtension: function getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    processUploadFile: function processUploadFile() {
      var _this7 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });

      switch (this.inputs.file_upload.type) {
        case "items":
          this.itemApi_uploadItems().then(function (response) {
            if (response.success) {
              _this7.$notify({
                group: "notification",
                type: "success",
                title: "Success",
                text: response.message
              });

              _this7.resetUploadFile();

              _this7.getItems();
            }
          })["finally"](function () {
            return loading.hide();
          });
          break;
      }
    },
    resetUploadFile: function resetUploadFile() {
      this.formData = new FormData();
      this.$refs.uploadFile.type = "text";
      this.$refs.uploadFile.type = "file";
      this.inputs.file_upload.name = null;
      this.inputs.file_upload.type = "item-availabilities";
    },
    onFileChanged: function onFileChanged(e) {
      var file = this.$refs.uploadFile.files[0];

      if (!file) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "No file chosen!"
        });
        return;
      }

      var allowed_files = ["xlsx", "csv", "xls"];

      if (!allowed_files.includes(this.getFileExtension(file.name))) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "This file is not supported, only upload .xls .xlsx or .csv"
        });
        return;
      }

      this.formData = new FormData();
      this.formData.append("file", file);
      this.inputs.file_upload.name = file.name;
    },
    editOrderItemDetails: function editOrderItemDetails(itemId) {
      var _this8 = this;

      this.orderElcoItemApi_getOne(itemId).then(function (response) {
        if (response.success) {
          _this8.resetOrderItemInputs(response.data.item);

          _this8.inputs.order_item.vendor_id = response.data.vendor;
          _this8.show_modal_edit_order_item_detail = true;
        }
      });
    },
    resetOrderItemInputs: function resetOrderItemInputs() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.inputs.order_item = {
        item_id: null,
        vendor_id: null,
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
      };

      if (item != null) {
        this.inputs.order_item.item_id = item.id;
        this.inputs.order_item.description = item.description;
        this.inputs.order_item.vendor_id = 1; // default vendor --vendor
      }
    },
    submitUpdateOrderItemDetails: function submitUpdateOrderItemDetails() {
      var _this9 = this;

      this.orderElcoItemApi_updateItem(this.inputs.order_item.item_id, this.inputs.order_item).then(function (response) {
        if (response.success) {
          _this9.show_modal_edit_order_item_detail = false;

          _this9.resetOrderItemInputs();

          _this9.$notify({
            group: "notification",
            type: "success",
            title: response.message
          }); // this.editOrderItemDetails(this.inputs.order_item.item_id);


          _this9.getItems();
        }
      });
    },
    getOrdersByVendorItem: function getOrdersByVendorItem(itemId, vendorId) {
      var _this10 = this;

      this.currentItemOrderId = itemId;
      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.ordersByItem = [];
      this.itemApi_getOrdersByVendorItem(itemId, vendorId).then(function (response) {
        if (response.success) {
          _this10.ordersByItem = response.data;
        }
      })["finally"](function () {
        return loading.hide();
      });
    }
  },
  created: function created() {
    var _this11 = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: "login"
              });
            } else {
              this.getItems();
              this.vendorApi_getForFilter().then(function (_ref2) {
                var data = _ref2.data;
                return _this11.variables.vendors = data.map(function (vendor) {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chat-card[data-v-402a61ce] {\n  border: 1px solid #e0e7ff !important;\n  padding: 20px;\n  box-shadow: none;\n  border-radius: 5px;\n}\n#chat-card .btn-send[data-v-402a61ce] {\n  min-width: 85px !important;\n}\n.empty-chat[data-v-402a61ce] {\n  height: 100%;\n  width: 100%;\n}\n.empty-chat span[data-v-402a61ce] {\n  margin: 0;\n  position: relative;\n  top: 40%;\n  left: 30%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: gray;\n  text-transform: capitalize;\n}\n#chat-upload-file[data-v-402a61ce] {\n  word-break: break-all;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nested-first[data-v-0d417881] {\n  padding: 15px;\n  background-color: #f4f6fc;\n}\n.header-title[data-v-0d417881] {\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-title {\n  font-weight: bold;\n}\n.nested-second {\n  padding: 15px;\n  background-color: #f4f6fc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tablecustom-content--content[data-v-733cd1aa] {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n}\n.btn-outline-primary a.btn--text[data-v-733cd1aa] {\n  text-decoration: none;\n}\n.subitems[data-v-733cd1aa] {\n  background-color: #f4f6fc;\n}\n.master-components[data-v-733cd1aa] {\n  padding: 15px;\n  background-color: #f4f6fc;\n}\n.master-components-subitems-first[data-v-733cd1aa] {\n  border-left: none !important;\n}\n.master-components-subitems-last[data-v-733cd1aa] {\n  border-right: none !important;\n}\n.master-components-eta-date-show[data-v-733cd1aa] {\n  display: block;\n}\n.master-components-eta-date-hide[data-v-733cd1aa] {\n  display: none;\n}\n.tooltip .tooltiptext__left[data-v-733cd1aa] {\n  bottom: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card mt-3", attrs: { id: "chat-card" } }, [
    _c("div", { staticClass: "card-content flex w-full" }, [
      _c("div", { staticClass: "w-full flex-col" }, [
        _c(
          "div",
          {
            ref: "chatBox",
            staticClass: "w-full h-64",
            class: [_vm.chats.length > 0 ? "overflow-y-scroll" : ""],
            attrs: { id: "chatbox" }
          },
          [
            _vm.chats.length > 0
              ? _c(
                  "div",
                  { staticClass: "flex flex-col" },
                  _vm._l(_vm.chats, function(chat, index) {
                    return _c(
                      "div",
                      { key: index, class: [index === 0 ? "" : "mt-4"] },
                      [
                        _c("span", [
                          _c("span", { staticClass: "font-medium" }, [
                            _vm._v(_vm._s(chat.sender.name) + " -")
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-xs text-secondary" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .$moment(chat.created_at)
                                    .format("MMMM DD, YYYY")
                                ) +
                                  " at " +
                                  _vm._s(
                                    _vm.$moment(chat.created_at).format("HH:MM")
                                  )
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        chat.filename
                          ? _c("p", { staticClass: "mt-2" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-outline-primary no-underline p-1",
                                  attrs: {
                                    href:
                                      _vm.apiLink +
                                      "/public/chat/download?fileName=" +
                                      chat.filename,
                                    target: "_blank",
                                    title: chat.filename
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "btn--text custom-text-bold break-all"
                                    },
                                    [_vm._v(_vm._s(chat.filename))]
                                  )
                                ]
                              )
                            ])
                          : _c("p", { staticClass: "mt-2" }, [
                              _vm._v(_vm._s(chat.message))
                            ])
                      ]
                    )
                  }),
                  0
                )
              : _c("div", { staticClass: "empty-chat" }, [
                  _c("span", [_vm._v("start chatting...")])
                ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "w-full flex mt-4" }, [
          _c("input", {
            ref: "uploadFile",
            staticClass: "hidden",
            attrs: { type: "file" },
            on: {
              change: function($event) {
                return _vm.onFileChanged()
              }
            }
          }),
          _vm._v(" "),
          !!_vm.inputs.chat.file_upload
            ? _c(
                "button",
                {
                  staticClass: "btn btn-outline-primary w-full mr-2",
                  attrs: { id: "chat-upload-file" },
                  on: {
                    click: function($event) {
                      return _vm.initiateUploadFile()
                    }
                  }
                },
                [
                  _c("span", { staticClass: "btn--text custom-text-bold" }, [
                    _vm._v(_vm._s(_vm.inputs.chat.file_upload))
                  ])
                ]
              )
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.inputs.chat.message,
                    expression: "inputs.chat.message"
                  }
                ],
                staticClass: "input w-full mr-2",
                class: [_vm.inputs.chat.message == "" ? "input-empty" : ""],
                attrs: { type: "text", placeholder: "Write Message..." },
                domProps: { value: _vm.inputs.chat.message },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.submitChat()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.inputs.chat, "message", $event.target.value)
                  }
                }
              }),
          _vm._v(" "),
          !_vm.inputs.chat.file_upload
            ? _c(
                "button",
                {
                  staticClass: "btn btn-outline-primary p-1 mr-2",
                  staticStyle: { "min-width": "initial" },
                  on: {
                    click: function($event) {
                      return _vm.initiateUploadFile()
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "btn--text flex" },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer h-4 w-4",
                        attrs: { icon: "FileIcon" }
                      })
                    ],
                    1
                  )
                ]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-outline-danger p-1 mr-2",
                  staticStyle: { "min-width": "initial" },
                  on: {
                    click: function($event) {
                      return _vm.resetUploadFile()
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "btn--text flex" },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer h-4 w-4",
                        attrs: { icon: "FileMinusIcon" }
                      })
                    ],
                    1
                  )
                ]
              ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-send",
              on: {
                click: function($event) {
                  return _vm.submitChat()
                }
              }
            },
            [
              _c("span", { staticClass: "btn--text custom-text-bold" }, [
                _vm._v("Send")
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "nested-first" },
    [
      _vm.data.length > 0
        ? [
            _c(
              "div",
              { staticClass: "tablecustom-header--container flex w-full" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [_c("p", { staticClass: "m-0" }, [_vm._v("PO Number")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [
                    _c("p", { staticClass: "m-0" }, [
                      _vm._v("Container Number")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [_c("p", { staticClass: "m-0" }, [_vm._v("Purchased On")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [_c("p", { staticClass: "m-0" }, [_vm._v("Quantity")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-3/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [
                    _c("p", { staticClass: "m-0" }, [
                      _vm._v("Cancelled Quantity")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [_c("p", { staticClass: "m-0" }, [_vm._v("Status")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "tablecustom-content--content w-4/12 header-title",
                    class: [
                      _vm.authenticatedUser.role == "purchaser"
                        ? "w-3/12"
                        : "w-2/12"
                    ]
                  },
                  [_c("p", { staticClass: "m-0" }, [_vm._v("Unit Price")])]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.data, function(order, key) {
              return _c("div", { staticClass: "w-full subitems" }, [
                _c("div", { staticClass: "flex flex-row" }, [
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _c(
                        "p",
                        { staticClass: "m-0" },
                        [
                          order.is_receipt
                            ? [
                                _vm.currentKey == "" + key + order.item_id
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-danger sub-item p-1 flex items-center justify-center mr-2",
                                        staticStyle: {
                                          "min-width": "initial",
                                          float: "left"
                                        },
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            _vm.currentKey = null
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "btn--text custom-text-bold  flex items-center justify-center"
                                          },
                                          [
                                            _c("icon-custom", {
                                              attrs: {
                                                icon: "minus",
                                                classes: "pr-0 h-4 w-4"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  : _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-primary sub-item p-1 flex items-center justify-center mr-2",
                                        staticStyle: {
                                          "min-width": "initial",
                                          float: "left"
                                        },
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.getItemByMultipleShip(
                                              key,
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
                                            _c("icon-custom", {
                                              attrs: {
                                                icon: "plus",
                                                classes: "pr-0 h-4 w-4"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                              ]
                            : [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn p-1 flex items-center justify-center mr-2 text-gray-50 cursor-default",
                                    staticStyle: {
                                      "min-width": "initial",
                                      float: "left"
                                    },
                                    attrs: { disabled: "" }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "btn--text custom-text-bold flex items-center justify-center"
                                      },
                                      [
                                        _c("icon-custom", {
                                          attrs: {
                                            icon: "plus",
                                            classes:
                                              "pr-0 h-4 w-4 text-gray-50",
                                            disabled: ""
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                          _vm._v(
                            "\n\n\t\t\t\t\t\t\t" +
                              _vm._s(order.po_number) +
                              "\n\t\t\t\t\t\t"
                          )
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _vm.authenticatedUser &&
                      ["admin", "purchaser"].includes(
                        _vm.authenticatedUser.role
                      ) &&
                      order.hasOwnProperty("container_no")
                        ? _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "edit_shipment",
                                  params: {
                                    order_number: order.shipment_order_id
                                  }
                                }
                              }
                            },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "m-0",
                                  attrs: { title: order.container_number }
                                },
                                [_vm._v(_vm._s(order.container_no))]
                              )
                            ]
                          )
                        : _c("p", { staticClass: "m-0" }, [_vm._v("-")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _c("p", { staticClass: "m-0" }, [
                        _vm._v(_vm._s(order.purchased_on))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _c("p", { staticClass: "m-0" }, [
                        _vm._v(_vm._s(order.total_quantity))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-3/12" },
                    [
                      _c("p", { staticClass: "m-0" }, [
                        _vm._v(
                          _vm._s(
                            !order.cancelled_quantity ||
                              order.cancelled_quantity < 1
                              ? "0"
                              : order.cancelled_quantity
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _c(
                        "p",
                        { staticClass: "m-0" },
                        [
                          order.cancelled_quantity &&
                          order.cancelled_quantity > 0
                            ? [
                                _vm._v(
                                  _vm._s("Cancelled") +
                                    " " +
                                    _vm._s(
                                      _vm._f("formatDate")(
                                        order.quantity_cancelled_at
                                      )
                                    )
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(order.status) +
                                    " " +
                                    _vm._s(
                                      _vm._f("formatDate")(order.date_by_status)
                                    )
                                )
                              ]
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tablecustom-content--content w-4/12" },
                    [
                      _c("p", { staticClass: "m-0" }, [
                        _vm._v(
                          _vm._s(
                            _vm.globalFunction_formatNumberToCurrency(
                              order.unit_cost
                            )
                          )
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.currentKey == "" + key + order.item_id
                  ? _c(
                      "div",
                      [
                        _c("SubListOfOrderStatusItem", {
                          attrs: { data: _vm.childData }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "nested-second" },
    [
      _c(
        "div",
        {
          staticClass: "tablecustom-header--container flex w-full subitem-div"
        },
        [
          _c(
            "div",
            {
              staticClass: "tablecustom-content--content w-4/12 header-title",
              class: [
                _vm.authenticatedUser.role == "purchaser" ? "w-3/12" : "w-2/12"
              ]
            },
            [_c("p", { staticClass: "m-0" }, [_vm._v("Order Date")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tablecustom-content--content w-4/12 header-title",
              class: [
                _vm.authenticatedUser.role == "purchaser" ? "w-3/12" : "w-2/12"
              ]
            },
            [_c("p", { staticClass: "m-0" }, [_vm._v("Received Date")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tablecustom-content--content w-4/12 header-title",
              class: [
                _vm.authenticatedUser.role == "purchaser" ? "w-3/12" : "w-2/12"
              ]
            },
            [_c("p", { staticClass: "m-0" }, [_vm._v("Quantity")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tablecustom-content--content w-4/12 header-title",
              class: [
                _vm.authenticatedUser.role == "purchaser" ? "w-3/12" : "w-2/12"
              ]
            },
            [_c("p", { staticClass: "m-0" }, [_vm._v("Unit Price")])]
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.data, function(item, key) {
        return _c("div", { key: key, staticClass: "flex flex-row w-full" }, [
          _c("div", { staticClass: "tablecustom-content--content w-4/12" }, [
            _c("p", { staticClass: "m-0" }, [_vm._v(_vm._s(item.order_date))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tablecustom-content--content w-4/12" }, [
            _c("p", { staticClass: "m-0" }, [_vm._v(_vm._s(item.receive_date))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tablecustom-content--content w-4/12" }, [
            _c("p", { staticClass: "m-0" }, [
              _vm._v(_vm._s(item.total_item_qty))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tablecustom-content--content w-4/12" }, [
            _c("p", { staticClass: "m-0" }, [
              _vm._v(
                _vm._s(
                  _vm.globalFunction_formatNumberToCurrency(item.unit_cost)
                )
              )
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          ["admin"].includes(_vm.authenticatedUser.role)
            ? _c(
                "card-custom",
                { attrs: { title: "Actions", alias: "message2" } },
                [
                  _c("div", { staticClass: "flex flex-col w-full" }, [
                    _c("div", { staticClass: "w-full flex" }, [
                      !_vm.conditions.loadings.datas
                        ? _c("div", { staticClass: "w-full flex mt-4" }, [
                            _c(
                              "div",
                              { class: ["w-full justify-end flex"] },
                              [
                                _c("input", {
                                  ref: "uploadFile",
                                  staticClass: "hidden",
                                  attrs: {
                                    type: "file",
                                    accept:
                                      ".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                  },
                                  on: { change: _vm.onFileChanged }
                                }),
                                _vm._v(" "),
                                !_vm.inputs.file_upload.name
                                  ? [
                                      _c("div", {
                                        staticClass: "flex justify-between"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex justify-end" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary  mr-2",
                                              on: {
                                                click: function($event) {
                                                  return _vm.initiateUploadFile(
                                                    "items"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "btn--text custom-text-bold px-4"
                                                },
                                                [_vm._v("Upload Items")]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex justify-end" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary  mr-2"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn--text custom-text-bold px-4",
                                                  attrs: {
                                                    href:
                                                      _vm.allFileDownloadEndpoint,
                                                    target: "_blank"
                                                  }
                                                },
                                                [_vm._v("Download All")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        { staticClass: "flex-1 flex" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary w-full mr-2",
                                              on: {
                                                click: function($event) {
                                                  return _vm.initiateUploadFile(
                                                    _vm.inputs.file_upload.type
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
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.inputs.file_upload
                                                        .name
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
                                        { staticClass: "flex justify-end" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-danger w-1/3 mr-2",
                                              on: {
                                                click: function($event) {
                                                  return _vm.resetUploadFile()
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
                                                [_vm._v("Cancel")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary w-1/3",
                                              on: {
                                                click: function($event) {
                                                  return _vm.processUploadFile()
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
                                                [_vm._v("Submit")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ])
                        : _c("div", {
                            staticClass:
                              "mt-2 loading-placeholder loading-placeholder__rectangle",
                            staticStyle: { height: "40px" }
                          })
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", { attrs: { title: "Search & Filters" } }, [
            _c("div", { staticClass: "flex w-full" }, [
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
                        _vm.inputs.filters.search == null ? "input-empty" : ""
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Search Item Number or HS Code"
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
                        "sm:w-1/4 w-full flex sm:ml-5 ml-0 sm:mt-0 mt-4"
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
                          placeholder: "Search vendor for pricing",
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
          _c("card-custom", { attrs: { title: "Item List" } }, [
            _c("div", { staticClass: "w-full" }, [
              _c(
                "div",
                { staticClass: "flex flex-col w-full" },
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
                                                            [_vm._v("Item #")]
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
                                                            [_vm._v("Vendor #")]
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
                                                                "Vendor Item Code"
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
                                                                "Item Description"
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
                                                            [_vm._v("Cost")]
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
                                                                    "Action"
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
                                                        _vm.data.datas,
                                                        function(
                                                          item_vendor,
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
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0"
                                                                          },
                                                                          [
                                                                            !item_vendor.hasOwnProperty(
                                                                              "is_from_order"
                                                                            ) &&
                                                                            item_vendor.orders_without_deleted_count >
                                                                              0
                                                                              ? [
                                                                                  _vm.currentItemOrderId ==
                                                                                  item_vendor.id
                                                                                    ? _c(
                                                                                        "button",
                                                                                        {
                                                                                          staticClass:
                                                                                            "btn btn-outline-danger p-1 flex items-center justify-center mr-2",
                                                                                          staticStyle: {
                                                                                            "min-width":
                                                                                              "initial",
                                                                                            float:
                                                                                              "left"
                                                                                          },
                                                                                          attrs: {
                                                                                            type:
                                                                                              "button"
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              _vm.currentItemOrderId = null
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "span",
                                                                                            {
                                                                                              staticClass:
                                                                                                "btn--text custom-text-bold  flex items-center justify-center"
                                                                                            },
                                                                                            [
                                                                                              _c(
                                                                                                "icon-custom",
                                                                                                {
                                                                                                  attrs: {
                                                                                                    icon:
                                                                                                      "minus",
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
                                                                                            "btn btn-outline-primary p-1 flex items-center justify-center mr-2",
                                                                                          staticStyle: {
                                                                                            "min-width":
                                                                                              "initial",
                                                                                            float:
                                                                                              "left"
                                                                                          },
                                                                                          attrs: {
                                                                                            type:
                                                                                              "button"
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.getOrdersByVendorItem(
                                                                                                item_vendor.id,
                                                                                                item_vendor.vendor_id
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
                                                                                                      "plus",
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
                                                                              : [
                                                                                  _c(
                                                                                    "button",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn p-1 flex items-center justify-center mr-2 text-gray-50 cursor-default",
                                                                                      staticStyle: {
                                                                                        "min-width":
                                                                                          "initial",
                                                                                        float:
                                                                                          "left"
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
                                                                                            "btn--text custom-text-bold flex items-center justify-center"
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "icon-custom",
                                                                                            {
                                                                                              attrs: {
                                                                                                icon:
                                                                                                  "plus",
                                                                                                classes:
                                                                                                  "pr-0 h-4 w-4 text-gray-50",
                                                                                                disabled:
                                                                                                  ""
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ],
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "a",
                                                                              {
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.getItemDetails(
                                                                                      item_vendor
                                                                                    )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    item_vendor.item_id
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ],
                                                                          2
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
                                                                    !item_vendor.hasOwnProperty(
                                                                      "is_from_order"
                                                                    )
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            item_vendor.vendor
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        item_vendor
                                                                                          .vendor
                                                                                          .vendor_number
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
                                                                      : _vm._e()
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
                                                                    !item_vendor.hasOwnProperty(
                                                                      "is_from_order"
                                                                    )
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            item_vendor.vendor_item_id
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        item_vendor.vendor_item_id
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
                                                                      : _vm._e()
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
                                                                    !item_vendor.hasOwnProperty(
                                                                      "is_from_order"
                                                                    )
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            item_vendor.description
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        item_vendor.description
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
                                                                      : _vm._e()
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
                                                                    !item_vendor.hasOwnProperty(
                                                                      "is_from_order"
                                                                    )
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex items-center flex-col sm:flex-row"
                                                                          },
                                                                          [
                                                                            item_vendor.cost
                                                                              ? _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex"
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            _vm.globalFunction_formatNumberToCurrency(
                                                                                              item_vendor.cost
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "-"
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
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
                                                                                    }
                                                                                  }
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                item_vendor
                                                                                  .price_histories
                                                                                  .length >
                                                                                0
                                                                                  ? _c(
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
                                                                                              "w-full flex mb-2"
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
                                                                                                      "flex w-1/2 justify-center m-0 font-bold"
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "Date"
                                                                                                    )
                                                                                                  ]
                                                                                                ),
                                                                                                _vm._v(
                                                                                                  " "
                                                                                                ),
                                                                                                _c(
                                                                                                  "p",
                                                                                                  {
                                                                                                    staticClass:
                                                                                                      "flex w-1/2 justify-center m-0 font-bold"
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "Price"
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "divider-custom",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mb-1 mt-0"
                                                                                          }
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _vm._l(
                                                                                          item_vendor.price_histories,
                                                                                          function(
                                                                                            history,
                                                                                            index
                                                                                          ) {
                                                                                            return _c(
                                                                                              "div",
                                                                                              {
                                                                                                key: index,
                                                                                                staticClass:
                                                                                                  "w-full flex pt-2 pb-2 border-b-1"
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
                                                                                                                _vm
                                                                                                                  .$moment(
                                                                                                                    history.to_date
                                                                                                                  )
                                                                                                                  .format(
                                                                                                                    "MM/DD/YY"
                                                                                                                  )
                                                                                                              )
                                                                                                            )
                                                                                                          ]
                                                                                                        )
                                                                                                      ]
                                                                                                    ),
                                                                                                    _vm._v(
                                                                                                      " "
                                                                                                    ),
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
                                                                                                                _vm.globalFunction_formatNumberToCurrency(
                                                                                                                  history.to_cost
                                                                                                                )
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
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      2
                                                                                    )
                                                                                  : _c(
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
                                                                      : _vm._e()
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
                                                                          "tablecustom-content--content w-3/12",
                                                                        style: {
                                                                          overflow:
                                                                            "visible"
                                                                        }
                                                                      },
                                                                      [
                                                                        item_vendor.hasOwnProperty(
                                                                          "is_from_order"
                                                                        )
                                                                          ? _c(
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
                                                                                    return _vm.editOrderItemDetails(
                                                                                      item_vendor.item_id
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
                                                                            )
                                                                          : _c(
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
                                                                                    return _vm.editItemDetails(
                                                                                      item_vendor.item_id,
                                                                                      item_vendor.vendor_id
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
                                                                        !item_vendor.hasOwnProperty(
                                                                          "is_from_order"
                                                                        ) &&
                                                                        item_vendor.shipment_order_items_count ==
                                                                          0
                                                                          ? _c(
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
                                                                                    return _vm.deleteItem(
                                                                                      item_vendor.item_id,
                                                                                      item_vendor.vendor_id
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
                                                                          : !item_vendor.hasOwnProperty(
                                                                              "is_from_order"
                                                                            ) &&
                                                                            item_vendor.shipment_order_items_count >
                                                                              0
                                                                          ? _c(
                                                                              "button",
                                                                              {
                                                                                staticClass:
                                                                                  "btn btn-outline-danger p-1 flex items-center justify-center ml-2 tooltip",
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
                                                                                      "tooltiptext__left tooltiptext"
                                                                                  },
                                                                                  [
                                                                                    [
                                                                                      _vm._v(
                                                                                        "You cannot delete this item because it contains orders"
                                                                                      )
                                                                                    ]
                                                                                  ],
                                                                                  2
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
                                                                      ]
                                                                    )
                                                                  : _vm._e()
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _vm.currentItemOrderId ==
                                                            item_vendor.id
                                                              ? _c(
                                                                  "div",
                                                                  [
                                                                    _c(
                                                                      "OrderStatusByItem",
                                                                      {
                                                                        attrs: {
                                                                          data:
                                                                            _vm.ordersByItem
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              : _vm._e()
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
                  !_vm.conditions.loadings.datas
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
                        _c("div", { staticClass: "w-1/2 flex justify-end" }, [
                          _vm.data.paginations.current_page <
                          _vm.data.paginations.next_page
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-primary w-1/5",
                                  on: {
                                    click: function($event) {
                                      _vm.goToPage(
                                        parseInt(
                                          _vm.data.paginations.current_page
                                        ) + 1
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "btn--text custom-text-bold"
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
                        ])
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
                            _vm._v("Vendor Item Code")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
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
                            _vm._v("Duty Rate")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
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
                            _vm._v("Prov/Prog. Tariff")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
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
                            _vm._v("Prov/Prog. Duty Rate")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
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
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-col w-6/12" },
                      [
                        _c("ItemVendorChatCustom", {
                          attrs: {
                            "item-id": _vm.selectedItem.id,
                            "vendor-id": _vm.selectedItem.vendor.id
                          }
                        })
                      ],
                      1
                    )
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
                                                    "Individual box (1 pc)"
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
                  ]),
                  _vm._v(" "),
                  _vm.selectedItem.hasOwnProperty("order_elco_item") &&
                  !!_vm.selectedItem.order_elco_item &&
                  _vm.selectedItem.order_elco_item.components.length > 0
                    ? _c("div", { staticClass: "w-full flex-row" }, [
                        _c("div", { staticClass: "flex-col w-12/12" }, [
                          _c("div", { staticClass: "table-custom-component" }, [
                            _c(
                              "div",
                              { staticClass: "table-custom--container" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "table-custom--content" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "tablecustom w-full" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "tablecustom--container flex"
                                          },
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
                                                              "BOM Details"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      { staticClass: "flex" },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content w-3/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Item")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Qty")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Cost")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("ETA")]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      _vm.selectedItem
                                                        .order_elco_item
                                                        .components,
                                                      function(cmp, cmpIndex) {
                                                        return _c(
                                                          "div",
                                                          { key: cmpIndex },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex flex-row w-full"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content w-3/12"
                                                                  },
                                                                  [
                                                                    cmp.master_items_expanded
                                                                      ? _c(
                                                                          "button",
                                                                          {
                                                                            staticClass:
                                                                              "btn btn-outline-danger p-1 flex items-center justify-center mr-2",
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              type:
                                                                                "button"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.master_items_expanded = !cmp.master_items_expanded
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
                                                                                        "minus",
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
                                                                              "btn btn-outline-primary p-1 flex items-center justify-center mr-2",
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              type:
                                                                                "button"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.master_items_expanded = !cmp.master_items_expanded
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
                                                                                        "plus",
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
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "p",
                                                                      {
                                                                        staticClass:
                                                                          "m-0"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            cmp.component_item
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
                                                                      {
                                                                        staticClass:
                                                                          "m-0 w-full text-center"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            cmp.quantity_needed
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
                                                                    !!cmp.component_item_price
                                                                      ? _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 w-full text-center"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                cmp
                                                                                  .component_item_price
                                                                                  .cost
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 w-full text-center"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "-"
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
                                                                    !!cmp.component_item_availabilities &&
                                                                    cmp
                                                                      .component_item_availabilities
                                                                      .length >
                                                                      0
                                                                      ? _c(
                                                                          "div",
                                                                          [
                                                                            _c(
                                                                              "ul",
                                                                              {
                                                                                staticClass:
                                                                                  "list-none"
                                                                              },
                                                                              _vm._l(
                                                                                cmp.component_item_availabilities,
                                                                                function(
                                                                                  cia,
                                                                                  index
                                                                                ) {
                                                                                  return _c(
                                                                                    "li",
                                                                                    {
                                                                                      key: index,
                                                                                      class: {
                                                                                        "master-components-eta-date-show":
                                                                                          [
                                                                                            0,
                                                                                            1
                                                                                          ].includes(
                                                                                            index
                                                                                          ) ==
                                                                                            false &&
                                                                                          cmp.eta_expanded ==
                                                                                            true,
                                                                                        "master-components-eta-date-hide":
                                                                                          [
                                                                                            0,
                                                                                            1
                                                                                          ].includes(
                                                                                            index
                                                                                          ) ==
                                                                                            false &&
                                                                                          cmp.eta_expanded ==
                                                                                            false
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      !!cia.confirmed
                                                                                        ? _c(
                                                                                            "span",
                                                                                            [
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-green-400"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      cia.quantity_shipped
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              ),
                                                                                              _vm._v(
                                                                                                " - "
                                                                                              ),
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-green-400"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      _vm
                                                                                                        .$moment(
                                                                                                          cia.confirmed
                                                                                                        )
                                                                                                        .format(
                                                                                                          "MMM DD"
                                                                                                        )
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        : _c(
                                                                                            "span",
                                                                                            [
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-danger"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      cia.backordered
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              ),
                                                                                              _vm._v(
                                                                                                " - "
                                                                                              ),
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-danger"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      _vm
                                                                                                        .$moment(
                                                                                                          cia.unconfirmed
                                                                                                        )
                                                                                                        .format(
                                                                                                          "MMM DD"
                                                                                                        )
                                                                                                    )
                                                                                                  )
                                                                                                ]
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
                                                                        )
                                                                      : _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "w-full text-center"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              [
                                                                                _vm._v(
                                                                                  "-"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                    _vm._v(" "),
                                                                    !!cmp.component_item_availabilities &&
                                                                    cmp
                                                                      .component_item_availabilities
                                                                      .length >
                                                                      2
                                                                      ? _c(
                                                                          "button",
                                                                          {
                                                                            staticClass:
                                                                              "btn p-1 flex self-end justify-center ml-2 mb-4",
                                                                            class: [
                                                                              cmp.eta_expanded
                                                                                ? "btn-outline-danger"
                                                                                : "btn-outline-primary"
                                                                            ],
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              title:
                                                                                (cmp.eta_expanded
                                                                                  ? "Hide"
                                                                                  : "View") +
                                                                                " ETA"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.eta_expanded = !cmp.eta_expanded
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "btn--text custom-text-bold flex self-end justify-center"
                                                                              },
                                                                              [
                                                                                !cmp.eta_expanded
                                                                                  ? _c(
                                                                                      "icon-custom",
                                                                                      {
                                                                                        attrs: {
                                                                                          icon:
                                                                                            "plus",
                                                                                          classes:
                                                                                            "pr-0 h-4 w-4 icon-15px"
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  : _c(
                                                                                      "icon-custom",
                                                                                      {
                                                                                        attrs: {
                                                                                          icon:
                                                                                            "minus",
                                                                                          classes:
                                                                                            "pr-0 h-4 w-4 icon-15px"
                                                                                        }
                                                                                      }
                                                                                    )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            cmp.master_items_expanded &&
                                                            cmp.master_items
                                                              .length > 0
                                                              ? _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "master-components"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "flex subitems"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12 master-components-subitems-first"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Item"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Cost"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12 master-components-subitems-last"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "ETA"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm._l(
                                                                      cmp.master_items,
                                                                      function(
                                                                        mi,
                                                                        masterItemIndex
                                                                      ) {
                                                                        return _c(
                                                                          "div",
                                                                          {
                                                                            key: masterItemIndex,
                                                                            staticClass:
                                                                              "flex flex-row w-full subitems"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12 master-components-subitems-first"
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
                                                                                        mi.master_item
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12"
                                                                              },
                                                                              [
                                                                                !!mi.item
                                                                                  ? _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0 w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            mi
                                                                                              .item
                                                                                              .cost
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0 w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          "-"
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12 master-components-subitems-last"
                                                                              },
                                                                              [
                                                                                !!mi.master_item_availabilities &&
                                                                                mi
                                                                                  .master_item_availabilities
                                                                                  .length >
                                                                                  0
                                                                                  ? _c(
                                                                                      "div",
                                                                                      [
                                                                                        _c(
                                                                                          "ul",
                                                                                          {
                                                                                            staticClass:
                                                                                              "list-none"
                                                                                          },
                                                                                          _vm._l(
                                                                                            mi.master_item_availabilities,
                                                                                            function(
                                                                                              mia,
                                                                                              index
                                                                                            ) {
                                                                                              return _c(
                                                                                                "li",
                                                                                                {
                                                                                                  key: index,
                                                                                                  class: {
                                                                                                    "master-components-eta-date-show":
                                                                                                      [
                                                                                                        0,
                                                                                                        1
                                                                                                      ].includes(
                                                                                                        index
                                                                                                      ) ==
                                                                                                        false &&
                                                                                                      mi.master_eta_expanded ==
                                                                                                        true,
                                                                                                    "master-components-eta-date-hide":
                                                                                                      [
                                                                                                        0,
                                                                                                        1
                                                                                                      ].includes(
                                                                                                        index
                                                                                                      ) ==
                                                                                                        false &&
                                                                                                      mi.master_eta_expanded ==
                                                                                                        false
                                                                                                  }
                                                                                                },
                                                                                                [
                                                                                                  !!mia.confirmed
                                                                                                    ? _c(
                                                                                                        "span",
                                                                                                        [
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-green-400"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  mia.quantity_shipped
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          ),
                                                                                                          _vm._v(
                                                                                                            " - "
                                                                                                          ),
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-green-400"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  _vm
                                                                                                                    .$moment(
                                                                                                                      mia.confirmed
                                                                                                                    )
                                                                                                                    .format(
                                                                                                                      "MMM DD"
                                                                                                                    )
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          )
                                                                                                        ]
                                                                                                      )
                                                                                                    : _c(
                                                                                                        "span",
                                                                                                        [
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-danger"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  mia.backordered
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          ),
                                                                                                          _vm._v(
                                                                                                            " - "
                                                                                                          ),
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-danger"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  _vm
                                                                                                                    .$moment(
                                                                                                                      mia.unconfirmed
                                                                                                                    )
                                                                                                                    .format(
                                                                                                                      "MMM DD"
                                                                                                                    )
                                                                                                                )
                                                                                                              )
                                                                                                            ]
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
                                                                                    )
                                                                                  : _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "p",
                                                                                          [
                                                                                            _vm._v(
                                                                                              "-"
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                !!mi.master_item_availabilities &&
                                                                                mi
                                                                                  .master_item_availabilities
                                                                                  .length >
                                                                                  2
                                                                                  ? _c(
                                                                                      "button",
                                                                                      {
                                                                                        staticClass:
                                                                                          "btn p-1 flex self-end justify-center ml-2 mb-4",
                                                                                        class: [
                                                                                          mi.master_eta_expanded
                                                                                            ? "btn-outline-danger"
                                                                                            : "btn-outline-primary"
                                                                                        ],
                                                                                        staticStyle: {
                                                                                          "min-width":
                                                                                            "initial"
                                                                                        },
                                                                                        attrs: {
                                                                                          title:
                                                                                            (mi.master_eta_expanded
                                                                                              ? "Hide"
                                                                                              : "View") +
                                                                                            " ETA"
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            mi.master_eta_expanded = !mi.master_eta_expanded
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "span",
                                                                                          {
                                                                                            staticClass:
                                                                                              "btn--text custom-text-bold flex self-end justify-center"
                                                                                          },
                                                                                          [
                                                                                            !mi.master_eta_expanded
                                                                                              ? _c(
                                                                                                  "icon-custom",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      icon:
                                                                                                        "plus",
                                                                                                      classes:
                                                                                                        "pr-0 h-4 w-4 icon-15px"
                                                                                                    }
                                                                                                  }
                                                                                                )
                                                                                              : _c(
                                                                                                  "icon-custom",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      icon:
                                                                                                        "minus",
                                                                                                      classes:
                                                                                                        "pr-0 h-4 w-4 icon-15px"
                                                                                                    }
                                                                                                  }
                                                                                                )
                                                                                          ],
                                                                                          1
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    )
                                                                  ],
                                                                  2
                                                                )
                                                              : _vm._e()
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    _vm._v(" "),
                                                    _vm.selectedItem.hasOwnProperty(
                                                      "total_bom_cost"
                                                    )
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex flex-row-reverse w-full"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "justify-end flex flex-col w-3/12 p-3",
                                                                    staticStyle: {
                                                                      background:
                                                                        "var(--color-primary)",
                                                                      "border-radius":
                                                                        "2px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "w-full flex justify-between"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 text-white"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Total BOM Cost"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 text-white"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                _vm
                                                                                  .selectedItem
                                                                                  .total_bom_cost
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
                                                      : _vm._e()
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
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_edit_item_detail",
            title: "Edit Item Details",
            "content-width": "900",
            "content-height": "95%"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _c("div", { staticClass: "w-full block" }, [
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
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Item #")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("div", { staticClass: "m-2" }, [
                        _vm._v(_vm._s(_vm.inputs.item.item_id))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor #")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("div", { staticClass: "m-2" }, [
                        _vm._v(_vm._s(_vm.inputs.item.vendor_number))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor Item Code")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("div", { staticClass: "m-2" }, [
                        _vm._v(_vm._s(_vm.inputs.item.vendor_item_id))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor Name")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("div", { staticClass: "m-2" }, [
                        _vm._v(_vm._s(_vm.inputs.item.vendor_name))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [_vm._v("MOQ")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.moq,
                            expression: "inputs.item.moq"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [_vm.inputs.item.moq == "" ? "input-empty" : ""],
                        attrs: { type: "text", placeholder: "MOQ" },
                        domProps: { value: _vm.inputs.item.moq },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "moq",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [_vm._v("UPC")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.upc,
                            expression: "inputs.item.upc"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [_vm.inputs.item.upc == "" ? "input-empty" : ""],
                        attrs: { type: "number", min: "1", placeholder: "UPC" },
                        domProps: { value: _vm.inputs.item.upc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "upc",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Cost")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.cost,
                            expression: "inputs.item.cost"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.cost == "" ? "input-empty" : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "1",
                          placeholder: "Cost"
                        },
                        domProps: { value: _vm.inputs.item.cost },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "cost",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("HS Code")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.hs_code,
                            expression: "inputs.item.hs_code"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.hs_code == "" ? "input-empty" : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "HS Code"
                        },
                        domProps: { value: _vm.inputs.item.hs_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "hs_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Duty Rate (%)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.duty_rate,
                            expression: "inputs.item.duty_rate"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.duty_rate == "" ? "input-empty" : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Duty Rate (%)"
                        },
                        domProps: { value: _vm.inputs.item.duty_rate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "duty_rate",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Prov/Prog. Tariff")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.prov_prog_tariff,
                            expression: "inputs.item.prov_prog_tariff"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.prov_prog_tariff == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Prov/Prog. Tariff"
                        },
                        domProps: { value: _vm.inputs.item.prov_prog_tariff },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "prov_prog_tariff",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Prov/Prog. Duty Rate (%)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.prov_prog_duty_rate,
                            expression: "inputs.item.prov_prog_duty_rate"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.prov_prog_duty_rate == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Prov/Prog. Duty Rate (%)"
                        },
                        domProps: {
                          value: _vm.inputs.item.prov_prog_duty_rate
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "prov_prog_duty_rate",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Description")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.item.description,
                            expression: "inputs.item.description"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.item.description == "" ? "input-empty" : ""
                        ],
                        attrs: { rows: "2", placeholder: "Description" },
                        domProps: { value: _vm.inputs.item.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.item,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex-col w-6/12" },
                  [
                    _c("ItemVendorChatCustom", {
                      attrs: {
                        "item-id": _vm.inputs.item.id,
                        "vendor-id": parseInt(_vm.inputs.item.vendor_id)
                      }
                    })
                  ],
                  1
                )
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
                                      staticStyle: { "margin-bottom": "12px" }
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
                                            [_vm._v("Individual box (1 pc)")]
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Weight (Lb)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Length (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Width (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Height (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .item_weight,
                                                    expression:
                                                      "inputs.item.item_weight"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item.item_weight ==
                                                  ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Weight"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.item_weight
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "item_weight",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .item_length,
                                                    expression:
                                                      "inputs.item.item_length"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item.item_length ==
                                                  ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Length"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.item_length
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "item_length",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .item_width,
                                                    expression:
                                                      "inputs.item.item_width"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item.item_width ==
                                                  ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Width"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.item_width
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "item_width",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .item_height,
                                                    expression:
                                                      "inputs.item.item_height"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item.item_height ==
                                                  ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Height"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.item_height
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "item_height",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                      staticStyle: { "margin-bottom": "12px" }
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Weight (Lb)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Length (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Width (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Height (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Carton Qty")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Cubic Feet")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .carton_weight,
                                                    expression:
                                                      "inputs.item.carton_weight"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item
                                                    .carton_weight == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Weight"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item
                                                      .carton_weight
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "carton_weight",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .carton_length,
                                                    expression:
                                                      "inputs.item.carton_length"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item
                                                    .carton_length == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Length"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item
                                                      .carton_length
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "carton_length",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .carton_width,
                                                    expression:
                                                      "inputs.item.carton_width"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item
                                                    .carton_width == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Width"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.carton_width
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "carton_width",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .carton_height,
                                                    expression:
                                                      "inputs.item.carton_height"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item
                                                    .carton_height == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Height"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item
                                                      .carton_height
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "carton_height",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.item
                                                        .carton_qty,
                                                    expression:
                                                      "inputs.item.carton_qty"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.item.carton_qty ==
                                                  ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Carton Qty"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.item.carton_qty
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.item,
                                                      "carton_qty",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                              "div",
                                              {
                                                staticClass:
                                                  "m-2 input w-full input-background-disabled"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.inputs.item.cubic_feet
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
                      _vm.show_modal_edit_item_detail = false
                      _vm.resetItemInputs()
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
              _c(
                "button",
                {
                  staticClass: "btn btn-primary ml-5",
                  on: {
                    click: function($event) {
                      return _vm.submitUpdateItemDetails()
                    }
                  }
                },
                [
                  _c("span", { staticClass: "btn--text custom-text-bold" }, [
                    _vm._v("Update Item")
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
            "show-variable": "show_modal_order_item_detail",
            title: "Item Details",
            "content-width": "900",
            "content-height": "90%"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _vm.show_modal_order_item_detail == true &&
            _vm.selectedOrderItem != null
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
                            _vm._v(_vm._s(_vm.selectedOrderItem.id))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-row" }, [
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2 font-bold" }, [
                            _vm._v("Qty")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-col" }, [
                          _c("p", { staticClass: "m-2" }, [
                            _vm._v(
                              _vm._s(_vm.selectedOrderItem.quantity_needed)
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
                          !!_vm.selectedOrderItem.item
                            ? _c("p", { staticClass: "m-2" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.globalFunction_formatNumberToCurrency(
                                      _vm.selectedOrderItem.item.cost
                                    )
                                  )
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.selectedOrderItem.components.length > 0
                    ? _c("div", { staticClass: "w-full flex-row" }, [
                        _c("div", { staticClass: "flex-col w-12/12" }, [
                          _c("div", { staticClass: "table-custom-component" }, [
                            _c(
                              "div",
                              { staticClass: "table-custom--container" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "table-custom--content" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "tablecustom w-full" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "tablecustom--container flex"
                                          },
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
                                                              "BOM Details"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      { staticClass: "flex" },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content w-3/12"
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Item")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Qty")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("Cost")]
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
                                                              {
                                                                staticClass:
                                                                  "m-0 font-bold"
                                                              },
                                                              [_vm._v("ETA")]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      _vm.selectedOrderItem
                                                        .components,
                                                      function(cmp, index) {
                                                        return _c(
                                                          "div",
                                                          { key: index },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex flex-row w-full"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "tablecustom-content--content w-3/12"
                                                                  },
                                                                  [
                                                                    cmp.master_items_expanded
                                                                      ? _c(
                                                                          "button",
                                                                          {
                                                                            staticClass:
                                                                              "btn btn-outline-danger p-1 flex items-center justify-center mr-2",
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              type:
                                                                                "button"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.master_items_expanded = !cmp.master_items_expanded
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
                                                                                        "minus",
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
                                                                              "btn btn-outline-primary p-1 flex items-center justify-center mr-2",
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              type:
                                                                                "button"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.master_items_expanded = !cmp.master_items_expanded
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
                                                                                        "plus",
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
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "p",
                                                                      {
                                                                        staticClass:
                                                                          "m-0"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            cmp.component_item
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
                                                                      {
                                                                        staticClass:
                                                                          "m-0"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            cmp.quantity_needed
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
                                                                    !!cmp.component_item_price
                                                                      ? _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 w-full text-center"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                cmp
                                                                                  .component_item_price
                                                                                  .cost
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 w-full text-center"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "-"
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
                                                                    !!cmp.component_item_availabilities &&
                                                                    cmp
                                                                      .component_item_availabilities
                                                                      .length >
                                                                      0
                                                                      ? _c(
                                                                          "div",
                                                                          [
                                                                            _c(
                                                                              "ul",
                                                                              {
                                                                                staticClass:
                                                                                  "list-none"
                                                                              },
                                                                              _vm._l(
                                                                                cmp.component_item_availabilities,
                                                                                function(
                                                                                  cia,
                                                                                  index
                                                                                ) {
                                                                                  return _c(
                                                                                    "li",
                                                                                    {
                                                                                      key: index,
                                                                                      class: {
                                                                                        "master-components-eta-date-show":
                                                                                          [
                                                                                            0,
                                                                                            1
                                                                                          ].includes(
                                                                                            index
                                                                                          ) ==
                                                                                            false &&
                                                                                          cmp.eta_expanded ==
                                                                                            true,
                                                                                        "master-components-eta-date-hide":
                                                                                          [
                                                                                            0,
                                                                                            1
                                                                                          ].includes(
                                                                                            index
                                                                                          ) ==
                                                                                            false &&
                                                                                          cmp.eta_expanded ==
                                                                                            false
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      !!cia.confirmed
                                                                                        ? _c(
                                                                                            "span",
                                                                                            [
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-green-400"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      cia.quantity_shipped
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              ),
                                                                                              _vm._v(
                                                                                                " - "
                                                                                              ),
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-green-400"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      _vm
                                                                                                        .$moment(
                                                                                                          cia.confirmed
                                                                                                        )
                                                                                                        .format(
                                                                                                          "MMM DD"
                                                                                                        )
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        : _c(
                                                                                            "span",
                                                                                            [
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-danger"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      cia.backordered
                                                                                                    )
                                                                                                  )
                                                                                                ]
                                                                                              ),
                                                                                              _vm._v(
                                                                                                " - "
                                                                                              ),
                                                                                              _c(
                                                                                                "span",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "text-danger"
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    _vm._s(
                                                                                                      _vm
                                                                                                        .$moment(
                                                                                                          cia.unconfirmed
                                                                                                        )
                                                                                                        .format(
                                                                                                          "MMM DD"
                                                                                                        )
                                                                                                    )
                                                                                                  )
                                                                                                ]
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
                                                                        )
                                                                      : _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "w-full text-center"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              [
                                                                                _vm._v(
                                                                                  "-"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                    _vm._v(" "),
                                                                    !!cmp.component_item_availabilities &&
                                                                    cmp
                                                                      .component_item_availabilities
                                                                      .length >
                                                                      2
                                                                      ? _c(
                                                                          "button",
                                                                          {
                                                                            staticClass:
                                                                              "btn p-1 flex self-end justify-center ml-2 mb-4",
                                                                            class: [
                                                                              cmp.eta_expanded
                                                                                ? "btn-outline-danger"
                                                                                : "btn-outline-primary"
                                                                            ],
                                                                            staticStyle: {
                                                                              "min-width":
                                                                                "initial"
                                                                            },
                                                                            attrs: {
                                                                              title:
                                                                                (cmp.eta_expanded
                                                                                  ? "Hide"
                                                                                  : "View") +
                                                                                " ETA"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                cmp.eta_expanded = !cmp.eta_expanded
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "btn--text custom-text-bold flex self-end justify-center"
                                                                              },
                                                                              [
                                                                                !cmp.eta_expanded
                                                                                  ? _c(
                                                                                      "icon-custom",
                                                                                      {
                                                                                        attrs: {
                                                                                          icon:
                                                                                            "plus",
                                                                                          classes:
                                                                                            "pr-0 h-4 w-4 icon-15px"
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  : _c(
                                                                                      "icon-custom",
                                                                                      {
                                                                                        attrs: {
                                                                                          icon:
                                                                                            "minus",
                                                                                          classes:
                                                                                            "pr-0 h-4 w-4 icon-15px"
                                                                                        }
                                                                                      }
                                                                                    )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            cmp.master_items_expanded &&
                                                            cmp.master_items
                                                              .length > 0
                                                              ? _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "master-components"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "flex subitems"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12 master-components-subitems-first"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Item"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Cost"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content w-4/12 master-components-subitems-last"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "p",
                                                                              {
                                                                                staticClass:
                                                                                  "m-0 font-bold"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "ETA"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm._l(
                                                                      cmp.master_items,
                                                                      function(
                                                                        mi,
                                                                        index
                                                                      ) {
                                                                        return _c(
                                                                          "div",
                                                                          {
                                                                            key: index,
                                                                            staticClass:
                                                                              "flex flex-row w-full subitems"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12 master-components-subitems-first"
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
                                                                                        mi.master_item
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12"
                                                                              },
                                                                              [
                                                                                !!mi.item
                                                                                  ? _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0 w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            mi
                                                                                              .item
                                                                                              .cost
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0 w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          "-"
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--content w-4/12 master-components-subitems-last"
                                                                              },
                                                                              [
                                                                                !!mi.master_item_availabilities &&
                                                                                mi
                                                                                  .master_item_availabilities
                                                                                  .length >
                                                                                  0
                                                                                  ? _c(
                                                                                      "div",
                                                                                      [
                                                                                        _c(
                                                                                          "ul",
                                                                                          {
                                                                                            staticClass:
                                                                                              "list-none"
                                                                                          },
                                                                                          _vm._l(
                                                                                            mi.master_item_availabilities,
                                                                                            function(
                                                                                              mia,
                                                                                              index
                                                                                            ) {
                                                                                              return _c(
                                                                                                "li",
                                                                                                {
                                                                                                  key: index,
                                                                                                  class: {
                                                                                                    "master-components-eta-date-show":
                                                                                                      [
                                                                                                        0,
                                                                                                        1
                                                                                                      ].includes(
                                                                                                        index
                                                                                                      ) ==
                                                                                                        false &&
                                                                                                      mi.master_eta_expanded ==
                                                                                                        true,
                                                                                                    "master-components-eta-date-hide":
                                                                                                      [
                                                                                                        0,
                                                                                                        1
                                                                                                      ].includes(
                                                                                                        index
                                                                                                      ) ==
                                                                                                        false &&
                                                                                                      mi.master_eta_expanded ==
                                                                                                        false
                                                                                                  }
                                                                                                },
                                                                                                [
                                                                                                  !!mia.confirmed
                                                                                                    ? _c(
                                                                                                        "span",
                                                                                                        [
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-green-400"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  mia.quantity_shipped
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          ),
                                                                                                          _vm._v(
                                                                                                            " - "
                                                                                                          ),
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-green-400"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  _vm
                                                                                                                    .$moment(
                                                                                                                      mia.confirmed
                                                                                                                    )
                                                                                                                    .format(
                                                                                                                      "MMM DD"
                                                                                                                    )
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          )
                                                                                                        ]
                                                                                                      )
                                                                                                    : _c(
                                                                                                        "span",
                                                                                                        [
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-danger"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  mia.backordered
                                                                                                                )
                                                                                                              )
                                                                                                            ]
                                                                                                          ),
                                                                                                          _vm._v(
                                                                                                            " - "
                                                                                                          ),
                                                                                                          _c(
                                                                                                            "span",
                                                                                                            {
                                                                                                              staticClass:
                                                                                                                "text-danger"
                                                                                                            },
                                                                                                            [
                                                                                                              _vm._v(
                                                                                                                _vm._s(
                                                                                                                  _vm
                                                                                                                    .$moment(
                                                                                                                      mia.unconfirmed
                                                                                                                    )
                                                                                                                    .format(
                                                                                                                      "MMM DD"
                                                                                                                    )
                                                                                                                )
                                                                                                              )
                                                                                                            ]
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
                                                                                    )
                                                                                  : _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-full text-center"
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "p",
                                                                                          [
                                                                                            _vm._v(
                                                                                              "-"
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                !!mi.master_item_availabilities &&
                                                                                mi
                                                                                  .master_item_availabilities
                                                                                  .length >
                                                                                  2
                                                                                  ? _c(
                                                                                      "button",
                                                                                      {
                                                                                        staticClass:
                                                                                          "btn p-1 flex self-end justify-center ml-2 mb-4",
                                                                                        class: [
                                                                                          mi.master_eta_expanded
                                                                                            ? "btn-outline-danger"
                                                                                            : "btn-outline-primary"
                                                                                        ],
                                                                                        staticStyle: {
                                                                                          "min-width":
                                                                                            "initial"
                                                                                        },
                                                                                        attrs: {
                                                                                          title:
                                                                                            (mi.master_eta_expanded
                                                                                              ? "Hide"
                                                                                              : "View") +
                                                                                            " ETA"
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            mi.master_eta_expanded = !mi.master_eta_expanded
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "span",
                                                                                          {
                                                                                            staticClass:
                                                                                              "btn--text custom-text-bold flex self-end justify-center"
                                                                                          },
                                                                                          [
                                                                                            !mi.master_eta_expanded
                                                                                              ? _c(
                                                                                                  "icon-custom",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      icon:
                                                                                                        "plus",
                                                                                                      classes:
                                                                                                        "pr-0 h-4 w-4 icon-15px"
                                                                                                    }
                                                                                                  }
                                                                                                )
                                                                                              : _c(
                                                                                                  "icon-custom",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      icon:
                                                                                                        "minus",
                                                                                                      classes:
                                                                                                        "pr-0 h-4 w-4 icon-15px"
                                                                                                    }
                                                                                                  }
                                                                                                )
                                                                                          ],
                                                                                          1
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    )
                                                                  ],
                                                                  2
                                                                )
                                                              : _vm._e()
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    _vm._v(" "),
                                                    _vm.selectedItem.hasOwnProperty(
                                                      "total_bom_cost"
                                                    )
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tablecustom-content--content"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex flex-row-reverse w-full"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "justify-end flex flex-col w-3/12 p-3",
                                                                    staticStyle: {
                                                                      background:
                                                                        "var(--color-primary)",
                                                                      "border-radius":
                                                                        "2px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "w-full flex justify-between"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 text-white"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Total BOM Cost"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "m-0 text-white"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                _vm
                                                                                  .selectedItem
                                                                                  .total_bom_cost
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
                                                      : _vm._e()
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
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "popup-custom",
        {
          attrs: {
            "show-variable": "show_modal_edit_order_item_detail",
            title: "Edit Item Details",
            "content-width": "900",
            "content-height": "95%"
          }
        },
        [
          _c("template", { slot: "content" }, [
            _c("div", { staticClass: "w-full block" }, [
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
                _c("div", { staticClass: "flex-col w-full" }, [
                  _c("div", { staticClass: "flex flex-row" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Item #")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("div", { staticClass: "m-2" }, [
                        _vm._v(_vm._s(_vm.inputs.order_item.item_id))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor #")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-col w-8/12" },
                      [
                        _c("v-select", {
                          staticClass: "input w-full",
                          class: [
                            !_vm.inputs.order_item.vendor_id
                              ? "input-empty"
                              : ""
                          ],
                          attrs: {
                            options: _vm.variables.vendors,
                            autocomplete: "",
                            searchable: "",
                            placeholder: "Search vendor",
                            label: "name",
                            reduce: function(vendor) {
                              return vendor.id
                            }
                          },
                          on: { input: _vm.selectedVendor },
                          model: {
                            value: _vm.inputs.order_item.vendor_id,
                            callback: function($$v) {
                              _vm.$set(_vm.inputs.order_item, "vendor_id", $$v)
                            },
                            expression: "inputs.order_item.vendor_id"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor Item Code")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.vendor_item_id,
                            expression: "inputs.order_item.vendor_item_id"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.vendor_item_id == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "Vendor Item Code"
                        },
                        domProps: {
                          value: _vm.inputs.order_item.vendor_item_id
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "vendor_item_id",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Vendor Name")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.vendor_name,
                            expression: "inputs.order_item.vendor_name"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.vendor_name == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          readonly: "",
                          type: "text",
                          placeholder: "Vendor Name"
                        },
                        domProps: { value: _vm.inputs.order_item.vendor_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "vendor_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [_vm._v("MOQ")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.moq,
                            expression: "inputs.order_item.moq"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.moq == "" ? "input-empty" : ""
                        ],
                        attrs: { type: "text", placeholder: "MOQ" },
                        domProps: { value: _vm.inputs.order_item.moq },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "moq",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [_vm._v("UPC")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.upc,
                            expression: "inputs.order_item.upc"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.upc == "" ? "input-empty" : ""
                        ],
                        attrs: { type: "number", min: "1", placeholder: "UPC" },
                        domProps: { value: _vm.inputs.order_item.upc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "upc",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Cost")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.cost,
                            expression: "inputs.order_item.cost"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.cost == "" ? "input-empty" : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "1",
                          placeholder: "Cost"
                        },
                        domProps: { value: _vm.inputs.order_item.cost },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "cost",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("HS Code")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.hs_code,
                            expression: "inputs.order_item.hs_code"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.hs_code == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "HS Code"
                        },
                        domProps: { value: _vm.inputs.order_item.hs_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "hs_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Duty Rate (%)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.duty_rate,
                            expression: "inputs.order_item.duty_rate"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.duty_rate == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Duty Rate (%)"
                        },
                        domProps: { value: _vm.inputs.order_item.duty_rate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "duty_rate",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Prov/Prog. Tariff")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.prov_prog_tariff,
                            expression: "inputs.order_item.prov_prog_tariff"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.prov_prog_tariff == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Prov/Prog. Tariff"
                        },
                        domProps: {
                          value: _vm.inputs.order_item.prov_prog_tariff
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "prov_prog_tariff",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Prov/Prog. Duty Rate (%)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.prov_prog_duty_rate,
                            expression: "inputs.order_item.prov_prog_duty_rate"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.prov_prog_duty_rate == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: {
                          type: "number",
                          min: "0",
                          placeholder: "Prov/Prog. Duty Rate (%)"
                        },
                        domProps: {
                          value: _vm.inputs.order_item.prov_prog_duty_rate
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "prov_prog_duty_rate",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row mb-2" }, [
                    _c("div", { staticClass: "flex-col w-3/12" }, [
                      _c("p", { staticClass: "m-2 font-bold" }, [
                        _vm._v("Description")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-col w-8/12" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputs.order_item.description,
                            expression: "inputs.order_item.description"
                          }
                        ],
                        staticClass: "input w-full",
                        class: [
                          _vm.inputs.order_item.description == ""
                            ? "input-empty"
                            : ""
                        ],
                        attrs: { rows: "2", placeholder: "Description" },
                        domProps: { value: _vm.inputs.order_item.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.inputs.order_item,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
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
                                      staticStyle: { "margin-bottom": "12px" }
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
                                            [_vm._v("Individual box (1 pc)")]
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Weight (Lb)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Length (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Width (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Height (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .item_weight,
                                                    expression:
                                                      "inputs.order_item.item_weight"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .item_weight == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Weight"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .item_weight
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "item_weight",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .item_length,
                                                    expression:
                                                      "inputs.order_item.item_length"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .item_length == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Length"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .item_length
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "item_length",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .item_width,
                                                    expression:
                                                      "inputs.order_item.item_width"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .item_width == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Width"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .item_width
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "item_width",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .item_height,
                                                    expression:
                                                      "inputs.order_item.item_height"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .item_height == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Item Height"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .item_height
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "item_height",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                      staticStyle: { "margin-bottom": "12px" }
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Weight (Lb)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Length (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Width (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Height (Inch)")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Carton Qty")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _vm._v("Cubic Feet")
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .carton_weight,
                                                    expression:
                                                      "inputs.order_item.carton_weight"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .carton_weight == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Weight"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .carton_weight
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "carton_weight",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .carton_length,
                                                    expression:
                                                      "inputs.order_item.carton_length"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .carton_length == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Length"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .carton_length
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "carton_length",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .carton_width,
                                                    expression:
                                                      "inputs.order_item.carton_width"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .carton_width == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Width"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .carton_width
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "carton_width",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .carton_height,
                                                    expression:
                                                      "inputs.order_item.carton_height"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .carton_height == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  min: "1",
                                                  placeholder: "Carton Height"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .carton_height
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "carton_height",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                            _c("p", { staticClass: "m-0" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.order_item
                                                        .carton_qty,
                                                    expression:
                                                      "inputs.order_item.carton_qty"
                                                  }
                                                ],
                                                staticClass: "input w-full",
                                                class: [
                                                  _vm.inputs.order_item
                                                    .carton_qty == ""
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Carton Qty"
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.order_item
                                                      .carton_qty
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.order_item,
                                                      "carton_qty",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ])
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
                                              "div",
                                              {
                                                staticClass:
                                                  "m-2 input w-full input-background-disabled"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.inputs.order_item
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
                      _vm.show_modal_edit_order_item_detail = false
                      _vm.resetOrderItemInputs()
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
              _c(
                "button",
                {
                  staticClass: "btn btn-primary ml-5",
                  on: {
                    click: function($event) {
                      return _vm.submitUpdateOrderItemDetails()
                    }
                  }
                },
                [
                  _c("span", { staticClass: "btn--text custom-text-bold" }, [
                    _vm._v("Update Item")
                  ])
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
        _c("span", { staticClass: "page-title--text" }, [_vm._v("Item List")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/orderElcoItemApi.js":
/*!***********************************************!*\
  !*** ./resources/js/apis/orderElcoItemApi.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "elco-order";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    orderElcoItemApi_getOne: function orderElcoItemApi_getOne(item_id) {
      var _this = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/item/").concat(item_id),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      })["catch"](function (error) {
        _this.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderElcoItemApi_updateItem: function orderElcoItemApi_updateItem(id) {
      var _this2 = this;

      var form_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "patch",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/item/").concat(id),
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
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/datetimeHelpers.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/datetimeHelpers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatDate: function formatDate(date) {
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var formatted_date = new Date(date);
      return months[formatted_date.getMonth()] + " " + formatted_date.getDate() + ", " + formatted_date.getFullYear().toString().substr(-2);
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/itemAvailabilitiesHelpers.js":
/*!***********************************************************!*\
  !*** ./resources/js/helpers/itemAvailabilitiesHelpers.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datetimeHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetimeHelpers */ "./resources/js/helpers/datetimeHelpers.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_datetimeHelpers__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    formatItemAvailabilities: function formatItemAvailabilities(availabilities, current_quantity, role) {
      if (["500+", "500+ ASSMBLD"].includes(current_quantity)) return [];
      if (current_quantity >= 500) return [];
      var formatted_item_availabilites = [];

      for (var index = 0; index < availabilities.length; index++) {
        var item_availability = availabilities[index];
        if (item_availability.backordered < 5) continue;
        if (!item_availability.confirmed && ["representative", "user"].includes(role)) continue;
        var threshold = 7;
        var date_threshold = new Date();
        date_threshold = date_threshold.setDate(date_threshold.getDate() - threshold);
        var date = item_availability.confirmed ? item_availability.confirmed : item_availability.unconfirmed; //const date_time = new Date(date).getTime();
        //if (date_threshold > date_time) continue;

        formatted_item_availabilites.push({
          quantity: item_availability.quantity_shipped != "0" ? item_availability.quantity_shipped : item_availability.backordered,
          date: this.formatDate(date),
          confirmation: item_availability.confirmed ? "Confirmed" : "Unconfirmed"
        });
        if (formatted_item_availabilites.length >= 2) break;
      }

      return formatted_item_availabilites;
    },
    generateETAText: function generateETAText(item_availability) {
      var quantity_text = "";

      switch (true) {
        case item_availability.quantity < 5:
          quantity_text = item_availability.quantity;
          break;

        case item_availability.quantity < 20:
          quantity_text = "5+";
          break;

        case item_availability.quantity < 50:
          quantity_text = "20+";
          break;

        case item_availability.quantity < 100:
          quantity_text = "50+";
          break;

        case item_availability.quantity < 250:
          quantity_text = "100+";
          break;

        case item_availability.quantity < 500:
          quantity_text = "250+";
          break;

        default:
          quantity_text = "500+";
          break;
      } // return quantity_text + " " + item_availability.confirmation + " " + item_availability.date;


      var date = this.$moment(item_availability.date).format("MMM DD");
      return "<span class='".concat(item_availability.confirmation == "Unconfirmed" ? "text-danger" : "", "'>").concat(quantity_text, " ").concat(date, "</span>");
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/itemsHelpers.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/itemsHelpers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatQuantity: function formatQuantity(qty) {
      qty = qty.toUpperCase();
      if (qty.includes("CONSULT ASSMBLD")) return "CONSULT ASSMBLD";else if (qty.includes("CONSULT")) return "CONSULT";
      var qty_number = parseInt(qty.replace(/\D/g, ""));
      var text = "";
      if (qty_number >= 500) text = "500+";else if (qty_number >= 250) text = "250+";else if (qty_number >= 100) text = "100+";else if (qty_number >= 50) text = "50+";else if (qty_number >= 20) text = "20+";else text = "CONSULT";
      if (qty.includes("ASSMBLD")) text += " ASSMBLD";
      return text;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/components/ItemVendorChatCustom.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/components/ItemVendorChatCustom.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true& */ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true&");
/* harmony import */ var _ItemVendorChatCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemVendorChatCustom.vue?vue&type=script&lang=js& */ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& */ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemVendorChatCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "402a61ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/ItemVendorChatCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemVendorChatCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=style&index=0&id=402a61ce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_style_index_0_id_402a61ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/ItemVendorChatCustom.vue?vue&type=template&id=402a61ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemVendorChatCustom_vue_vue_type_template_id_402a61ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components/Items/OrderStatusByItem.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/components/Items/OrderStatusByItem.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true& */ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true&");
/* harmony import */ var _OrderStatusByItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderStatusByItem.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& */ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderStatusByItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d417881",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Items/OrderStatusByItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusByItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=style&index=0&id=0d417881&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_style_index_0_id_0d417881_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/OrderStatusByItem.vue?vue&type=template&id=0d417881&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatusByItem_vue_vue_type_template_id_0d417881_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/components/Items/SubListOfOrderStatusItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292& */ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292&");
/* harmony import */ var _SubListOfOrderStatusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubListOfOrderStatusItem.vue?vue&type=script&lang=js& */ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubListOfOrderStatusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/Items/SubListOfOrderStatusItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubListOfOrderStatusItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/Items/SubListOfOrderStatusItem.vue?vue&type=template&id=d8f8f292&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubListOfOrderStatusItem_vue_vue_type_template_id_d8f8f292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/Items/ItemList.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/pages/Items/ItemList.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList.vue?vue&type=template&id=733cd1aa&scoped=true& */ "./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true&");
/* harmony import */ var _ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& */ "./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "733cd1aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Items/ItemList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=style&index=0&id=733cd1aa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_733cd1aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=template&id=733cd1aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Items/ItemList.vue?vue&type=template&id=733cd1aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_733cd1aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
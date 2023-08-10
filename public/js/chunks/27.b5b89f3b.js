(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/itemApi */ "./resources/js/apis/itemApi.js");
/* harmony import */ var _apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/vendorApi */ "./resources/js/apis/vendorApi.js");
/* harmony import */ var _apis_orderApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis/orderApi */ "./resources/js/apis/orderApi.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_6__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewOrder",
  mixins: [_apis_vendorApi__WEBPACK_IMPORTED_MODULE_2__["default"], _apis_itemApi__WEBPACK_IMPORTED_MODULE_1__["default"], _apis_orderApi__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      disabledDates: {
        to: new Date()
      },
      edit: {
        billing: {
          active: false
        },
        shipping: {
          active: false
        }
      },
      inputs: {
        file_upload: {
          type: "orders",
          name: null
        },
        orderFiles: [],
        vendor_id: null,
        items: [{
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }],
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
          country: null,
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
          country: null,
          zip: null
        },
        eta_date: null
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
      disable_items_eta: true,
      form_data: new FormData(),
      dropzoneOptions: {
        autoProcessQueue: false,
        url: "".concat("http://127.0.0.1:8000/api", "/orders"),
        // The Url Where Dropped or Selected files will be sent
        maxFilesize: 102400000,
        // File Size allowed in MB
        dictDefaultMessage: "Upload Files Here xD",
        includeStyling: false,
        previewsContainer: false,
        thumbnailWidth: 250,
        thumbnailHeight: 140,
        uploadMultiple: true,
        parallelUploads: 20
      }
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
        total_price += item.total_price;
      }

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
        eta_date: this.inputs.eta_date,
        po_number: this.inputs.po_number,
        billto_name: this.inputs.billing.name,
        billto_address: this.inputs.billing.address,
        billto_email: this.inputs.billing.email,
        billto_city: this.inputs.billing.city,
        billto_zip: this.inputs.billing.zip,
        billto_state: this.inputs.billing.state,
        billto_country: this.inputs.billing.country,
        billto_phone: this.inputs.billing.phone,
        billto_fax: this.inputs.billing.fax,
        shipto_name: this.inputs.shipping.name,
        shipto_address: this.inputs.shipping.address,
        shipto_email: this.inputs.shipping.email,
        shipto_city: this.inputs.shipping.city,
        shipto_zip: this.inputs.shipping.zip,
        shipto_state: this.inputs.shipping.state,
        shipto_country: this.inputs.shipping.country,
        shipto_phone: this.inputs.shipping.phone,
        shipto_fax: this.inputs.shipping.fax,
        order_note: this.inputs.order_note
      };
    },
    inputValid: function inputValid() {
      var status = false;
      status = this.inputPayload.item_ids.length > 0 && !!this.inputPayload.billto_name && !!this.inputPayload.billto_address && !!this.inputPayload.billto_city && !!this.inputPayload.billto_zip && !!this.inputPayload.billto_state && !!this.inputPayload.shipto_name && !!this.inputPayload.shipto_address && !!this.inputPayload.shipto_city && !!this.inputPayload.shipto_zip && !!this.inputPayload.shipto_state;
      return status;
    }
  },
  watch: {
    "inputs.vendor_id": function inputsVendor_id(vendor_id) {
      if (vendor_id) {
        this.inputs.items = [{
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }, {
          item_id: null,
          vendor_item_id: null,
          quantity: null,
          carton_qty: null,
          qty_cubic_feet: null,
          single_item_cubic_feet: null,
          qty_cubic_inches: null,
          single_item_cubic_inches: null,
          moq: null,
          note: null,
          price: null,
          total_price: null,
          expected_arrival_date: null
        }];
      }

      this.getVendor(vendor_id);
      this.getItems();
    }
  },
  methods: {
    addNewOrderItem: function addNewOrderItem() {
      this.inputs.items.push({
        item_id: null,
        vendor_item_id: null,
        quantity: null,
        carton_qty: null,
        qty_cubic_feet: null,
        single_item_cubic_feet: null,
        qty_cubic_inches: null,
        single_item_cubic_inches: null,
        moq: null,
        note: null,
        price: null,
        total_price: null,
        expected_arrival_date: null
      });
    },
    getVendor: function getVendor(vendor_id) {
      var _this = this;

      this.vendorApi_getOne({
        'id': vendor_id
      }).then(function (response) {
        _this.variables.vendor_address.name = response.data.name ? response.data.name : null;
        _this.variables.vendor_address.email = response.data.email ? response.data.email : null;
        _this.variables.vendor_address.address = response.data.address ? response.data.address : null;
        _this.variables.vendor_address.phone = response.data.telephone ? response.data.telephone : null;
        _this.inputs.billing.name = "ELCO LIGHTING";
        _this.inputs.billing.email = "";
        _this.inputs.billing.address = "2042 E VERNON AVE";
        _this.inputs.billing.fax = process.env.MIX_BILLTO_FAX;
        _this.inputs.billing.phone = "";
        _this.inputs.billing.city = "VERNON";
        _this.inputs.billing.state = "CA";
        _this.inputs.billing.country = process.env.MIX_BILLTO_COUNTRY;
        _this.inputs.billing.zip = "90058";
        _this.inputs.shipping.name = "ELCO LIGHTING";
        _this.inputs.shipping.email = "";
        _this.inputs.shipping.address = "2042 E VERNON AVE";
        _this.inputs.shipping.fax = process.env.MIX_BILLTO_FAX;
        _this.inputs.shipping.phone = "";
        _this.inputs.shipping.city = "VERNON";
        _this.inputs.shipping.state = "CA";
        _this.inputs.shipping.country = process.env.MIX_BILLTO_COUNTRY;
        _this.inputs.shipping.zip = "90058";

        if (response.data.po_note != "" && response.data.po_note != null) {
          _this.inputs.order_note = _this.inputs.order_note + '\n' + response.data.po_note;
        }
      });
    },
    getItems: function getItems() {
      var _this2 = this;

      var params = {
        vendor_id: this.inputs.vendor_id
      };
      this.itemApi_getForFilter(params).then(function (response) {
        _this2.variables.items = response.data.map(function (item) {
          return {
            value: item.item_id,
            label: item.item_id
          };
        });
      });
    },
    itemInputted: function itemInputted(index) {
      var _this3 = this;

      if (this.inputs.items[index].item_id != undefined || this.inputs.items[index].item_id != null) {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        this.itemApi_getOne(this.inputs.items[index].item_id, this.inputs.vendor_id).then(function (_ref) {
          var data = _ref.data;
          _this3.inputs.items[index].vendor_item_id = data.vendor_item_id;
          _this3.inputs.items[index].price = data.cost;
          _this3.inputs.items[index].carton_qty = data.carton_qty;
          _this3.inputs.items[index].single_item_cubic_inches = data.cubic_inches;
          _this3.inputs.items[index].single_item_cubic_feet = data.cubic_feet;
          _this3.inputs.items[index].moq = data.moq;

          if (!_this3.inputs.items[index].quantity) {
            _this3.inputs.items[index].quantity = 1;
          }

          _this3.inputs.items[index].total_price = _this3.inputs.items[index].quantity * _this3.inputs.items[index].price;
          _this3.inputs.items[index].note = "";
          _this3.inputs.items[index].qty_cubic_inches = !!_this3.inputs.items[index].carton_qty && !!_this3.inputs.items[index].single_item_cubic_inches ? (_this3.globalFunction_numberMaximiser(_this3.inputs.items[index].carton_qty) * _this3.inputs.items[index].single_item_cubic_inches).toFixed(2) : null;
          _this3.inputs.items[index].qty_cubic_feet = !!_this3.inputs.items[index].carton_qty && !!_this3.inputs.items[index].single_item_cubic_feet ? (_this3.inputs.items[index].quantity / _this3.globalFunction_numberMaximiser(_this3.inputs.items[index].carton_qty) * _this3.inputs.items[index].single_item_cubic_feet).toFixed(2) : null;
        })["catch"](function (error) {
          return console.log(error);
        })["finally"](function () {
          loading.hide();

          _this3.$refs.item_q[index].focus();

          _this3.$refs.item_q[index].select();
        });
      } else if (this.inputs.items[index].item_id == null) {
        this.resetItemInputted(index);
      }
    },
    createNewOption: function createNewOption(search, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var search_label = '';

        if (typeof search == 'string') {
          search_label = search;
        } else if (_typeof(search) == 'object') {
          search_label = search.label;
        }

        var check = _this4.variables.items.filter(function (item) {
          return item.label == search_label;
        });

        if (check.length == 0) {
          _this4.inputs.items[index].item_id = search_label;
          _this4.inputs.items[index].vendor_item_id = null;
          _this4.inputs.items[index].quantity = 1;
          _this4.inputs.items[index].carton_qty = 1;
          _this4.inputs.items[index].qty_cubic_inches = null;
          _this4.inputs.items[index].single_item_cubic_inches = null;
          _this4.inputs.items[index].qty_cubic_feet = null;
          _this4.inputs.items[index].single_item_cubic_feet = null;
          _this4.inputs.items[index].moq = null;
          _this4.inputs.items[index].note = null;
          _this4.inputs.items[index].price = 1;
          _this4.inputs.items[index].total_price = 1;
          _this4.inputs.items[index].expected_arrival_date = null;
          _this4.inputs.items[index].not_found = true;
        } else {
          _this4.inputs.items[index].item_id = search_label;

          _this4.itemInputted(index);
        }
      });
    },
    quantityChanged: function quantityChanged(index) {
      this.inputs.items[index].qty_cubic_inches = !!this.inputs.items[index].carton_qty && !!this.inputs.items[index].single_item_cubic_inches ? (this.inputs.items[index].single_item_cubic_inches * this.globalFunction_numberMaximiser(this.inputs.items[index].carton_qty)).toFixed(2) : null;
      this.inputs.items[index].total_price = this.inputs.items[index].price ? this.inputs.items[index].price * this.inputs.items[index].quantity : null;
      this.inputs.items[index].qty_cubic_feet = !!this.inputs.items[index].carton_qty && !!this.inputs.items[index].single_item_cubic_feet ? (this.inputs.items[index].single_item_cubic_feet * (this.inputs.items[index].quantity / this.globalFunction_numberMaximiser(this.inputs.items[index].carton_qty))).toFixed(2) : null;
    },
    customFormatter: function customFormatter(date) {
      return this.$moment(date).format("MM/DD/YY");
    },
    etaChange: function etaChange() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.disable_items_eta = false;

        var newValue = _this5.$moment(_this5.inputs.eta_date).format('MM/DD/YY');

        _this5.inputs.items.forEach(function (item) {
          item.expected_arrival_date = newValue;
        });

        _this5.inputs.eta_date = newValue;
      });
    },
    resetItemInputted: function resetItemInputted(index) {
      this.inputs.items[index].item_id = null;
      this.inputs.items[index].vendor_item_id = null;
      this.inputs.items[index].quantity = null;
      this.inputs.items[index].carton_qty = null;
      this.inputs.items[index].qty_cubic_inches = null;
      this.inputs.items[index].single_item_cubic_inches = null;
      this.inputs.items[index].qty_cubic_feet = null;
      this.inputs.items[index].single_item_cubic_feet = null;
      this.inputs.items[index].moq = null;
      this.inputs.items[index].note = null;
      this.inputs.items[index].price = null;
      this.inputs.items[index].total_price = null;
      this.inputs.items[index].expected_arrival_date = null;
      delete this.inputs.items[index]['not_found'];
    },
    submitOrder: function submitOrder() {
      var _this6 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.inputs.items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });
      this.form_data["delete"]('order');
      this.form_data.append('order', JSON.stringify({
        vendor_id: this.inputs.vendor_id,
        po_number: this.inputs.po_number,
        order_note: this.inputs.order_note,
        billing: this.inputs.billing,
        shipping: this.inputs.shipping,
        eta_date: this.inputs.eta_date
      }));
      this.form_data["delete"]('items');
      this.form_data.append('items', JSON.stringify(this.inputs.items));
      this.orderApi_store(this.form_data).then(function (response) {
        if (response.success) {
          loading.hide();

          _this6.$router.push({
            name: 'orders'
          });
        }
      })["catch"](function (error) {
        return console.error(error);
      })["finally"](function () {
        return loading.hide();
      });
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
        case "orders":
          this.orderApi_uploadOrders().then(function (response) {
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
      this.inputs.file_upload.type = "orders";
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
    sortby: function sortby(order_column) {
      this.variables.sort.order_column = order_column;
      var filled_items = this.inputs.items.filter(function (item) {
        return !!item.item_id;
      });

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
            return !!a.price && !!b.price && Math.trunc(parseInt(a.price)) < Math.trunc(parseInt(b.price)) ? 1 : -1;
          });
          this.variables.sort.order_by = 'desc';
        } else if (this.variables.sort.order_by == 'desc') {
          filled_items.sort(function (a, b) {
            return !!a.price && !!b.price && Math.trunc(parseInt(a.price)) > Math.trunc(parseInt(b.price)) ? 1 : -1;
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
      }

      this.inputs.items = filled_items;
    },
    removeOrderFile: function removeOrderFile(index) {
      this.form_data["delete"]("order_files[".concat(this.inputs.orderFiles[index].file_count, "]"));
      this.inputs.orderFiles.splice(index, 1);
    },
    fileAdded: function fileAdded(file) {
      var extension = null;

      if (!!file) {
        extension = file.name.split(".")[1];

        if (["xlsx", "csv", "xls", "pdf"].includes(extension)) {
          var attachment = {};
          attachment._id = file.upload.uuid;
          attachment.title = file.name;
          attachment.type = "file";
          attachment.extension = extension;
          attachment.thumb = file.dataURL;
          attachment.thumb_list = file.dataURL;
          attachment.isLoading = true;
          attachment.progress = null;
          attachment.size = file.size;
          attachment.file_count = this.$refs.orderFilesDropzone.dropzone.files.length;
          this.form_data.append("order_files[".concat(attachment.file_count, "]"), file);
          this.inputs.orderFiles = [].concat(_toConsumableArray(this.inputs.orderFiles), [attachment]);
        }
      }
    }
  },
  created: function created() {
    var _this8 = this;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!["admin", "purchaser"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.vendorApi_getForFilter().then(function (_ref2) {
                var data = _ref2.data;
                return _this8.variables.vendors = data.map(function (vendor) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\n  cursor: pointer;\n}\n.overflow-scroll {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.align-right {\n  right: 0;\n  top: 50px;\n}\n@media only screen and (max-width: 1366px) {\n.wrapper-table {\n    min-width: 1600px !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrder.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      ["admin", "purchaser"].includes(_vm.authenticatedUser.role)
        ? _c(
            "card-custom",
            { attrs: { title: "Actions", alias: "message2" } },
            [
              _c("div", { staticClass: "flex flex-col w-full" }, [
                _c("div", { staticClass: "w-full flex" }, [
                  _c("div", { staticClass: "w-full flex mt-4" }, [
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
                              _c("div", { staticClass: "flex justify-end" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-primary  mr-2",
                                    on: {
                                      click: function($event) {
                                        return _vm.initiateUploadFile("orders")
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
                                      [_vm._v("Upload Order")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          : [
                              _c("div", { staticClass: "flex-1 flex" }, [
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
                                          _vm._s(_vm.inputs.file_upload.name)
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex justify-end" }, [
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
                                    staticClass: "btn btn-primary w-1/3",
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
                              ])
                            ]
                      ],
                      2
                    )
                  ])
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      !_vm.isPurchaser
        ? _c(
            "card-custom",
            { staticClass: "mt-10", attrs: { title: "Choose Vender" } },
            [
              _c("div", { staticClass: "flex w-full flex-col mt-4" }, [
                _c(
                  "div",
                  { staticClass: "flex w-full" },
                  [
                    _c("v-select", {
                      staticClass: "input w-full",
                      class: [!_vm.inputs.vendor_id ? "input-empty" : ""],
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
                      model: {
                        value: _vm.inputs.vendor_id,
                        callback: function($$v) {
                          _vm.$set(_vm.inputs, "vendor_id", $$v)
                        },
                        expression: "inputs.vendor_id"
                      }
                    })
                  ],
                  1
                )
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
                attrs: { title: "Enter the items you wish to order" }
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
                            _c("span", { staticClass: "pointer" }, [
                              _vm._v("Item")
                            ]),
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
                            _c("span", { staticClass: "pointer" }, [
                              _vm._v("Qty")
                            ]),
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
                            _c("span", { staticClass: "pointer" }, [
                              _vm._v("Item Cost")
                            ]),
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
                          _c(
                            "div",
                            { staticClass: "w-1/3" },
                            [
                              _c("v-select", {
                                staticClass: "input w-full",
                                class: [!item.item_id ? "input-empty" : ""],
                                staticStyle: { padding: "6px 16px!important" },
                                attrs: {
                                  options: _vm.variables.items,
                                  autocomplete: "",
                                  searchable: "",
                                  taggable: "",
                                  reduce: function(item) {
                                    return item.value
                                  },
                                  "select-on-key-codes": [9, 13]
                                },
                                on: {
                                  "option:created": function($event) {
                                    return _vm.createNewOption($event, index)
                                  },
                                  input: function($event) {
                                    return _vm.itemInputted(index)
                                  }
                                },
                                model: {
                                  value: item.item_id,
                                  callback: function($$v) {
                                    _vm.$set(item, "item_id", $$v)
                                  },
                                  expression: "item.item_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/4 ml-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.vendor_item_id,
                                  expression: "item.vendor_item_id"
                                }
                              ],
                              staticClass: "input",
                              class: [
                                !item.vendor_item_id ? "input-empty" : ""
                              ],
                              attrs: { type: "text" },
                              domProps: { value: item.vendor_item_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "vendor_item_id",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-2/12 ml-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.quantity,
                                  expression: "item.quantity"
                                }
                              ],
                              ref: "item_q",
                              refInFor: true,
                              staticClass: "input",
                              class: [!item.quantity ? "input-empty" : ""],
                              attrs: { type: "number", min: "1" },
                              domProps: { value: item.quantity },
                              on: {
                                change: function($event) {
                                  return _vm.quantityChanged(index)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "quantity",
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
                              staticClass: "w-2/12 ml-4 text-center",
                              class: [item.not_found == true ? "" : "pt-3"]
                            },
                            [
                              item.hasOwnProperty("not_found") &&
                              item.not_found == true
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.carton_qty,
                                        expression: "item.carton_qty"
                                      }
                                    ],
                                    staticClass: "input",
                                    class: [
                                      !item.carton_qty ? "input-empty" : ""
                                    ],
                                    attrs: { type: "number", min: "1" },
                                    domProps: { value: item.carton_qty },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "carton_qty",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                : _c("span", [
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
                              _c(
                                "div",
                                {
                                  class: [
                                    item.qty_cubic_feet != null ? "flex" : ""
                                  ]
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        item.qty_cubic_feet != null
                                          ? _vm.globalFunction_numberMinimiser(
                                              item.qty_cubic_feet
                                            )
                                          : "-"
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
                                              _c(
                                                "div",
                                                { staticClass: "w-full flex" },
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
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-2/12 ml-4 text-center" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.moq,
                                    expression: "item.moq"
                                  }
                                ],
                                staticClass: "input",
                                class: [!item.moq ? "input-empty" : ""],
                                attrs: { type: "text" },
                                domProps: { value: item.moq },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "moq", $event.target.value)
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/4 ml-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.note,
                                  expression: "item.note"
                                }
                              ],
                              staticClass: "input",
                              class: [!item.note ? "input-empty" : ""],
                              attrs: { type: "text" },
                              domProps: { value: item.note },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(item, "note", $event.target.value)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 ml-4 text-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.price,
                                  expression: "item.price"
                                }
                              ],
                              staticClass: "input",
                              class: [!item.price ? "input-empty" : ""],
                              attrs: { type: "number", min: "1" },
                              domProps: { value: item.price },
                              on: {
                                change: function($event) {
                                  return _vm.quantityChanged(index)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(item, "price", $event.target.value)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-1/6 ml-4 text-center pt-3" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    item.total_price != null
                                      ? _vm.globalFunction_formatNumberToCurrency(
                                          item.total_price
                                        )
                                      : "-"
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-1/6 ml-4" },
                            [
                              _c("datepicker", {
                                attrs: {
                                  "input-class": "input",
                                  format: _vm.customFormatter,
                                  disabled: _vm.disable_items_eta,
                                  "disabled-dates": _vm.disabledDates,
                                  "calendar-class": "align-right"
                                },
                                model: {
                                  value: item.expected_arrival_date,
                                  callback: function($$v) {
                                    _vm.$set(item, "expected_arrival_date", $$v)
                                  },
                                  expression: "item.expected_arrival_date"
                                }
                              })
                            ],
                            1
                          )
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
                              return _vm.addNewOrderItem()
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
                              _c("datepicker", {
                                attrs: {
                                  "input-class": "input",
                                  format: _vm.customFormatter,
                                  "disabled-dates": _vm.disabledDates,
                                  "calendar-class": "align-right"
                                },
                                on: {
                                  selected: function($event) {
                                    return _vm.etaChange()
                                  }
                                },
                                model: {
                                  value: _vm.inputs.eta_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.inputs, "eta_date", $$v)
                                  },
                                  expression: "inputs.eta_date"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full flex flex-col" }, [
                            _c("small", [_vm._v("PO Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.inputs.po_number,
                                  expression: "inputs.po_number"
                                }
                              ],
                              staticClass: "input",
                              class: [
                                !_vm.inputs.po_number ? "input-empty" : ""
                              ],
                              attrs: { type: "text" },
                              domProps: { value: _vm.inputs.po_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.inputs,
                                    "po_number",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "flex flex-col md:w-1/3 w-full mr-2 ml-2"
                      },
                      [
                        _c("small", [_vm._v("Notes/Memo")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputs.order_note,
                              expression: "inputs.order_note"
                            }
                          ],
                          staticClass: "p-3 input",
                          class: [!_vm.inputs.order_note ? "input-empty" : ""],
                          attrs: { cols: "30", rows: "5" },
                          domProps: { value: _vm.inputs.order_note },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.inputs,
                                "order_note",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "md:w-3/12 w-full mt-4" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-col w-full h-full justify-between"
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
                          ),
                          _vm._v(" "),
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
                _c(
                  "div",
                  { staticClass: "w-full" },
                  [
                    _c(
                      "div",
                      { staticClass: "flex-row w-full mb-2" },
                      [
                        _c(
                          "vue-dropzone",
                          {
                            ref: "orderFilesDropzone",
                            staticClass:
                              "flex-col w-4/12 btn btn-outline-primary",
                            attrs: {
                              "include-styling": false,
                              useCustomSlot: true,
                              id: "dropzone",
                              options: _vm.dropzoneOptions
                            },
                            on: { "vdropzone-file-added": _vm.fileAdded }
                          },
                          [
                            _c("div", { staticClass: "dropzone-container" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "btn--text custom-text-bold px-4"
                                },
                                [_vm._v("Upload Files")]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.inputs.orderFiles, function(sci, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "flex flex-row w-full mb-2"
                        },
                        [
                          _c("div", { staticClass: "flex flex-col w-4/12" }, [
                            _c(
                              "div",
                              {
                                staticClass: "btn btn-outline-primary break-all"
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "btn--text custom-text-bold" },
                                  [_vm._v(_vm._s(sci.title))]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex flex-col w-1/12 ml-2" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.removeOrderFile(index)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "btn--text custom-text-bold"
                                    },
                                    [_vm._v("Cancel")]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
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
                      _c(
                        "div",
                        { staticClass: "flex w-full items-center" },
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
                                  "\n                Billing Address\n              "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          [
                            _vm.edit.billing.active == false
                              ? _c("div", { staticClass: "flex justify-end" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-small",
                                      on: {
                                        click: function($event) {
                                          _vm.edit.billing.active = true
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
                                        [_vm._v("Edit")]
                                      )
                                    ]
                                  )
                                ])
                              : _c("div", { staticClass: "flex justify-end" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-small ml-2",
                                      on: {
                                        click: function($event) {
                                          _vm.edit.billing.active = false
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
                                        [_vm._v("Done Editing")]
                                      )
                                    ]
                                  )
                                ])
                          ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex w-full mt-4 flex-wrap" }, [
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col " },
                          [
                            _c("small", [_vm._v("Bill to")]),
                            _vm._v(" "),
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.name,
                                          expression: "inputs.billing.name"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.name
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.name || "-")
                                    )
                                  ]
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
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.phone,
                                          expression: "inputs.billing.phone"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.phone
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.phone
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "phone",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.phone || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Email")]),
                          _vm._v(" "),
                          _vm.edit.billing.active
                            ? _c(
                                "div",
                                { staticStyle: { padding: "0 10px 10px 0" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.inputs.billing.email,
                                        expression: "inputs.billing.email"
                                      }
                                    ],
                                    staticClass: "input",
                                    class: [
                                      !_vm.inputs.billing.email
                                        ? "input-empty"
                                        : ""
                                    ],
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.inputs.billing.email
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.inputs.billing,
                                          "email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _c(
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
                                    _vm._s(_vm.inputs.billing.email || "-")
                                  )
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Fax")]),
                            _vm._v(" "),
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.fax,
                                          expression: "inputs.billing.fax"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.fax
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.fax
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "fax",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.fax || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Street")]),
                          _vm._v(" "),
                          _vm.edit.billing.active
                            ? _c(
                                "div",
                                { staticStyle: { padding: "0 10px 10px 0" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.inputs.billing.address,
                                        expression: "inputs.billing.address"
                                      }
                                    ],
                                    staticClass: "input",
                                    class: [
                                      !_vm.inputs.billing.address
                                        ? "input-empty"
                                        : ""
                                    ],
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.inputs.billing.address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.inputs.billing,
                                          "address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _c(
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
                                    _vm._s(_vm.inputs.billing.address || "-")
                                  )
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("City")]),
                            _vm._v(" "),
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.city,
                                          expression: "inputs.billing.city"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.city
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.city
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "city",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.city || "-")
                                    )
                                  ]
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
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.state,
                                          expression: "inputs.billing.state"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.state
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.state
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "state",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.state || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Country")]),
                            _vm._v(" "),
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.country,
                                          expression: "inputs.billing.country"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.country
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.country
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "country",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.country || "-")
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
                              "md:w-1/4 sm:w-1/2 w-full flex flex-col"
                          },
                          [
                            _c("small", [_vm._v("Zip code")]),
                            _vm._v(" "),
                            _vm.edit.billing.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.billing.zip,
                                          expression: "inputs.billing.zip"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.billing.zip
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.billing.zip
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.billing,
                                            "zip",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.billing.zip || "-")
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
                          ]),
                          _vm._v(" "),
                          [
                            _vm.edit.shipping.active == false
                              ? _c("div", { staticClass: "flex justify-end" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-small",
                                      on: {
                                        click: function($event) {
                                          _vm.edit.shipping.active = true
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
                                        [_vm._v("Edit")]
                                      )
                                    ]
                                  )
                                ])
                              : _c("div", { staticClass: "flex justify-end" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-primary btn-small ml-2",
                                      on: {
                                        click: function($event) {
                                          _vm.edit.shipping.active = false
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
                                        [_vm._v("Done Editing")]
                                      )
                                    ]
                                  )
                                ])
                          ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex w-full mt-4 flex-wrap" }, [
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Ship to")]),
                            _vm._v(" "),
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.name,
                                          expression: "inputs.shipping.name"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.name
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.name || "-")
                                    )
                                  ]
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
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.phone,
                                          expression: "inputs.shipping.phone"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.phone
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.phone
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "phone",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.phone || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Email")]),
                          _vm._v(" "),
                          _vm.edit.shipping.active
                            ? _c(
                                "div",
                                { staticStyle: { padding: "0 10px 10px 0" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.inputs.shipping.email,
                                        expression: "inputs.shipping.email"
                                      }
                                    ],
                                    staticClass: "input",
                                    class: [
                                      !_vm.inputs.shipping.email
                                        ? "input-empty"
                                        : ""
                                    ],
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.inputs.shipping.email
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.inputs.shipping,
                                          "email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _c(
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
                                    _vm._s(_vm.inputs.shipping.email || "-")
                                  )
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("Fax")]),
                            _vm._v(" "),
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.fax,
                                          expression: "inputs.shipping.fax"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.fax
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.fax
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "fax",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.fax || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-full flex flex-col" }, [
                          _c("small", [_vm._v("Street")]),
                          _vm._v(" "),
                          _vm.edit.shipping.active
                            ? _c(
                                "div",
                                { staticStyle: { padding: "0 10px 10px 0" } },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.inputs.shipping.address,
                                        expression: "inputs.shipping.address"
                                      }
                                    ],
                                    staticClass: "input",
                                    class: [
                                      !_vm.inputs.shipping.address
                                        ? "input-empty"
                                        : ""
                                    ],
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.inputs.shipping.address
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.inputs.shipping,
                                          "address",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _c(
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
                                    _vm._s(_vm.inputs.shipping.address || "-")
                                  )
                                ]
                              )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col" },
                          [
                            _c("small", [_vm._v("City")]),
                            _vm._v(" "),
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.city,
                                          expression: "inputs.shipping.city"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.city
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.city
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "city",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.city || "-")
                                    )
                                  ]
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
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.state,
                                          expression: "inputs.shipping.state"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.state
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.state
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "state",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.state || "-")
                                    )
                                  ]
                                )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "sm:w-1/2 w-full flex flex-col " },
                          [
                            _c("small", [_vm._v("Country")]),
                            _vm._v(" "),
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.country,
                                          expression: "inputs.shipping.country"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.country
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.country
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "country",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.country || "-")
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
                              "md:w-1/4 sm:w-1/2 w-full flex flex-col "
                          },
                          [
                            _c("small", [_vm._v("Zip code")]),
                            _vm._v(" "),
                            _vm.edit.shipping.active
                              ? _c(
                                  "div",
                                  { staticStyle: { padding: "0 10px 10px 0" } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.inputs.shipping.zip,
                                          expression: "inputs.shipping.zip"
                                        }
                                      ],
                                      staticClass: "input",
                                      class: [
                                        !_vm.inputs.shipping.zip
                                          ? "input-empty"
                                          : ""
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.inputs.shipping.zip
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.inputs.shipping,
                                            "zip",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              : _c(
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
                                      _vm._s(_vm.inputs.shipping.zip || "-")
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
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-10 w-full flex justify-end" }, [
              _vm.inputValid
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.submitOrder()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Order")]
                      )
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-disabled",
                      attrs: { disabled: "" }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn--text custom-text-bold" },
                        [_vm._v("Order")]
                      )
                    ]
                  )
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Orders/NewOrder.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/Orders/NewOrder.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewOrder.vue?vue&type=template&id=33049184& */ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184&");
/* harmony import */ var _NewOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewOrder.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewOrder.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Orders/NewOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrder.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrder.vue?vue&type=template&id=33049184& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Orders/NewOrder.vue?vue&type=template&id=33049184&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrder_vue_vue_type_template_id_33049184___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
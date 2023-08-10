(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
        orders: [],
        selected_po_data: []
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
      apiLink: "http://127.0.0.1:8000/api",
      dropzoneOptions: {
        autoProcessQueue: false,
        url: "".concat("http://127.0.0.1:8000/api", "/shipments"),
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
    },
    inputValid: function inputValid() {
      var status = false;
      status = this.inputPayload.item_ids.length > 0 && this.inputPayload.order_ids.length > 0 && this.inputPayload.order_ids.length == this.inputPayload.item_ids.length && !!this.inputPayload.container_number;
      return status;
    }
  },
  watch: {
    "inputs.container.status": function inputsContainerStatus(value) {
      switch (value) {
        case 'received':
          if (!this.inputs.container.date_received) {
            this.inputs.container.date_received = new Date();
          }

          break;

        case 'shipped':
          if (!this.inputs.container.date_shipped) {
            this.inputs.container.date_shipped = new Date();
          }

          break;
      }
    },
    "inputs.container.unload_hours_spent": function inputsContainerUnload_hours_spent(value) {
      this.inputs.container.cost_to_unload = this.globalFunction_formatNumberToCurrency((!!this.inputs.container.unload_hours_spent ? this.inputs.container.unload_hours_spent : 0) * (!!this.inputs.container.unload_rate ? this.inputs.container.unload_rate : 0));
    },
    "inputs.container.unload_rate": function inputsContainerUnload_rate(value) {
      this.inputs.container.cost_to_unload = this.globalFunction_formatNumberToCurrency((!!this.inputs.container.unload_hours_spent ? this.inputs.container.unload_hours_spent : 0) * (!!this.inputs.container.unload_rate ? this.inputs.container.unload_rate : 0));
    }
  },
  methods: {
    customFormatter: function customFormatter(date) {
      return this.$moment(date).format("MM/DD/YY");
    },
    getFileExtension: function getFileExtension(filename) {
      var filenames = filename.split(".");
      return filenames[filenames.length - 1];
    },
    onFileChanged: function onFileChanged(e, filetype) {
      var file = "";

      if (filetype == 'bol_file') {
        file = this.$refs.uploadBolFile.files[0];
        this.form_data.append("bol_file", file);
        this.inputs.file_upload.bol_file = file.name;
      } else if (filetype == 'isf_file') {
        file = this.$refs.uploadIsfFile.files[0];
        this.form_data.append("isf_file", file);
        this.inputs.file_upload.isf_file = file.name;
      } else if (filetype == 'invoice_file') {
        file = this.$refs.uploadInvoiceFile.files[0];
        this.form_data.append("invoice_file", file);
        this.inputs.file_upload.invoice_file = file.name;
      }

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

      var allowed_files = ["pdf", "xlsx", "csv", "xls", "doc", "docx"];

      if (!allowed_files.includes(this.getFileExtension(file.name))) {
        e.preventDefault();

        if (filetype == 'bol_file') {
          this.form_data["delete"]("bol_file");
          this.inputs.file_upload.bol_file = null;
        } else if (filetype == 'isf_file') {
          this.form_data["delete"]("isf_file");
          this.inputs.file_upload.isf_file = null;
        } else if (filetype == 'invoice_file') {
          this.form_data["delete"]("invoice_file");
          this.inputs.file_upload.invoice_file = null;
        }

        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "This file is not supported, only upload .pdf"
        });
        return;
      }
    },
    onFilesChanged: function onFilesChanged(e, index) {
      e.preventDefault();
      var file = this.$refs.uploadSupplierCommercialInvoicesFile[index].files[0];
      var allowed_files = ["pdf"];

      if (allowed_files.includes(this.getFileExtension(file.name))) {
        this.form_data.append("supplier_commercial_invoices[".concat(index, "]"), file);
        this.inputs.file_upload.supplier_commercial_invoices[index].name = file.name;
      }
    },
    initiateUploadFile: function initiateUploadFile(filetype) {
      if (filetype == 'bol_file') {
        this.$refs.uploadBolFile.click();
        this.conditions.bol_file_import = true;
      } else if (filetype == 'isf_file') {
        this.$refs.uploadIsfFile.click();
        this.conditions.isf_file_import = true;
      } else if (filetype == 'invoice_file') {
        this.$refs.uploadInvoiceFile.click();
        this.conditions.invoice_file_import = true;
      } else if (filetype == 'supplier_commercial_invoices') {
        this.$refs.uploadSupplierCommercialInvoicesFile.click();
        this.conditions.supplier_commercial_invoices = true;
      }
    },
    resetUploadFile: function resetUploadFile(filetype) {
      if (filetype == 'bol_file') {
        this.inputs.file_upload.bol_file = null;
        this.conditions.bol_file_import = false;
      } else if (filetype == 'isf_file') {
        this.inputs.file_upload.isf_file = null;
        this.conditions.isf_file_import = false;
      } else if (filetype == 'invoice_file') {
        this.inputs.file_upload.invoice_file = null;
        this.conditions.invoice_file_import = false;
      } else if (filetype == 'supplier_commercial_invoices') {
        this.inputs.file_upload.supplier_commercial_invoices = null;
        this.conditions.supplier_commercial_invoices = false;
      }
    },
    addNewItem: function addNewItem() {
      this.inputs.items.push({
        receipt_item_id: null,
        item_id: null,
        order_id: null,
        order_item_id: null,
        quantity: null,
        qty_cubic_feet: null,
        single_item_cubic_feet: null,
        qty_cubic_inches: null,
        single_item_cubic_inches: null,
        price: null,
        total: null,
        vendor_id: null,
        orders: []
      });
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
    itemInputted: function itemInputted(index) {
      var _this2 = this;

      if (this.inputs.items[index].item_id != undefined || this.inputs.items[index].item_id != null) {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        this.orderApi_getWithoutDeletedOrderForItemId(this.inputs.items[index].item_id).then(function (_ref) {
          var data = _ref.data;
          var confirm_orders = [];
          data.map(function (item) {
            item.orders_without_deleted.filter(function (order) {
              order.cubic_inches = item.cubic_inches;
              order.cubic_feet = item.cubic_feet;
              order.carton_qty = parseInt(item.carton_qty);
              confirm_orders.push(order);
            });
          });

          if (confirm_orders.length > 0) {
            _this2.inputs.items[index].receipt_item_id = null;
            _this2.inputs.items[index].order_id = null;
            _this2.inputs.items[index].order_item_id = null;
            _this2.inputs.items[index].quantity = null;
            _this2.inputs.items[index].qty_cubic_inches = null;
            _this2.inputs.items[index].single_item_cubic_inches = null;
            _this2.inputs.items[index].qty_cubic_feet = null;
            _this2.inputs.items[index].single_item_cubic_feet = null;
            _this2.inputs.items[index].price = null;
            _this2.inputs.items[index].total = null;
            _this2.inputs.items[index].carton_qty = null;
            _this2.inputs.items[index].orders = [];
            _this2.inputs.items[index].orders = confirm_orders;
          } else {
            _this2.inputs.items[index].receipt_item_id = null;
            _this2.inputs.items[index].order_id = null;
            _this2.inputs.items[index].order_item_id = null;
            _this2.inputs.items[index].quantity = null;
            _this2.inputs.items[index].qty_cubic_inches = null;
            _this2.inputs.items[index].single_item_cubic_inches = null;
            _this2.inputs.items[index].qty_cubic_feet = null;
            _this2.inputs.items[index].single_item_cubic_feet = null;
            _this2.inputs.items[index].price = null;
            _this2.inputs.items[index].total = null;
            _this2.inputs.items[index].carton_qty = null;
            _this2.inputs.items[index].orders = [];
            _this2.variables.selected_po_data[index] = null;

            _this2.$notify({
              group: "notification",
              type: "error",
              title: 'Sorry, this item does not have any orders',
              text: ''
            });
          }
        })["catch"](function (error) {
          return console.log(error);
        })["finally"](function () {
          loading.hide();
        });
      } else {
        this.inputs.items[index].receipt_item_id = null;
        this.inputs.items[index].order_id = null;
        this.inputs.items[index].order_item_id = null;
        this.inputs.items[index].quantity = null;
        this.inputs.items[index].qty_cubic_inches = null;
        this.inputs.items[index].single_item_cubic_inches = null;
        this.inputs.items[index].qty_cubic_feet = null;
        this.inputs.items[index].single_item_cubic_feet = null;
        this.inputs.items[index].price = null;
        this.inputs.items[index].total = null;
        this.inputs.items[index].carton_qty = null;
        this.inputs.items[index].orders = [];
        this.variables.selected_po_data[index] = null;
      }
    },
    poSelectedInputted: function poSelectedInputted(index) {
      // if(this.inputs.items[index].order_id != undefined || this.inputs.items[index].order_id != null){
      if (this.variables.selected_po_data[index].order_id != undefined || this.variables.selected_po_data[index].order_id != null) {
        // const order = this.inputs.items[index].orders.find(order => order.order_id == this.inputs.items[index].order_id);
        var order = this.variables.selected_po_data[index];

        if (order) {
          this.inputs.items[index].order_id = order.order_id;
          this.inputs.items[index].order_item_id = order.id;
          this.inputs.items[index].quantity = order.quantity_ordered;
          this.inputs.items[index].single_item_cubic_inches = order.cubic_inches;
          this.inputs.items[index].single_item_cubic_feet = order.cubic_feet;
          this.inputs.items[index].qty_cubic_inches = (order.quantity_ordered * this.inputs.items[index].single_item_cubic_inches).toFixed(2);
          this.inputs.items[index].qty_cubic_feet = !!order.quantity_ordered && !!order.carton_qty && !!this.inputs.items[index].single_item_cubic_feet ? (order.quantity_ordered / order.carton_qty * this.inputs.items[index].single_item_cubic_feet).toFixed(2) : null;
          this.inputs.items[index].price = order.unit_cost;
          this.inputs.items[index].total = order.extended_cost;
          this.inputs.items[index].vendor_id = order.order.vendor_id;
        }
      }
    },
    quantityChanged: function quantityChanged(index) {
      var _this3 = this;

      var order = this.inputs.items[index].orders.find(function (order) {
        return order.order_id == _this3.inputs.items[index].order_id;
      });

      if (order) {
        this.inputs.items[index].qty_cubic_inches = (this.inputs.items[index].quantity * this.inputs.items[index].single_item_cubic_inches).toFixed(2);
        this.inputs.items[index].total = (order.unit_cost * this.inputs.items[index].quantity).toFixed(2);
        this.inputs.items[index].qty_cubic_feet = !!this.inputs.items[index].quantity && !!order.carton_qty && !!this.inputs.items[index].single_item_cubic_feet ? (this.inputs.items[index].quantity / order.carton_qty * this.inputs.items[index].single_item_cubic_feet).toFixed(2) : null;
      }
    },
    updateShipment: function updateShipment() {
      var _this4 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.form_data["delete"]('container');
      this.form_data.append('container', JSON.stringify(this.inputs.container));
      this.form_data["delete"]('items');
      this.form_data.append('items', JSON.stringify(this.inputs.items.filter(function (item) {
        return !!item.item_id && !!item.orders.length > 0;
      })));
      this.shipmentApi_update(this.form_data, this.inputs.shipment_id).then(function (response) {
        if (response.success) {
          loading.hide();

          _this4.$notify({
            group: "notification",
            type: "success",
            title: response.message,
            text: ''
          });

          _this4.$router.push({
            name: 'shipments'
          });
        }
      })["catch"](function (error) {
        return console.error(error);
      })["finally"](function () {
        return loading.hide();
      });
    },
    selectOrderItemId: function selectOrderItemId(orderItem) {
      return orderItem.item.orders.filter(function (o) {
        if (orderItem.po_id == o.order_id) {
          return o.id;
        }
      });
    },
    getOrder: function getOrder() {
      var _this5 = this;

      if (this.$route.params.order_number != '') {
        var orderId = this.$route.params.order_number;
        this.inputs.shipment_id = orderId;
        this.shipmentApi_getOne(orderId).then(function (response) {
          if (response.success) {
            if (!!response.data) {
              _this5.inputs.container.container_number = response.data.container_number;
              _this5.inputs.container.carton_qty = response.data.carton_qty;
              _this5.inputs.container.container_cost = response.data.container_cost;
              _this5.inputs.container.truck_cost = response.data.truck_cost;
              _this5.inputs.container.unload_rate = response.data.unload_rate;
              _this5.inputs.container.unload_hours_spent = response.data.unload_hours_spent;
              _this5.inputs.container.cost_to_unload = response.data.cost_to_unload;
              _this5.inputs.container.country_of_origin = response.data.country_of_origin;
              _this5.inputs.container.date_shipped = response.data.date_shipped;
              _this5.inputs.container.date_received = response.data.date_received;
              _this5.inputs.container.expected_arrival = response.data.expected_arrival;
              _this5.inputs.container.notes = response.data.notes;
              _this5.inputs.container.total = response.data.total;
              _this5.inputs.container.status = response.data.status;
              _this5.inputs.container.bol_file = response.data.bol_file;
              _this5.inputs.container.isf_file = response.data.isf_file;
              _this5.inputs.container.invoice_file = response.data.invoice_file;
              _this5.inputs.container.supplier_commercial_invoices = response.data.supplier_commercial_invoices;
              _this5.inputs.items = [];

              if (response.data.items.length > 0) {
                response.data.items.map(function (orderItem, key) {
                  var confirm_orders = [];
                  orderItem.item.orders_without_deleted.filter(function (order) {
                    order.cubic_inches = orderItem.item.cubic_inches;
                    order.cubic_feet = orderItem.item.cubic_feet;
                    order.carton_qty = orderItem.item.carton_qty;
                    confirm_orders.push(order);
                  });

                  _this5.inputs.items.push({
                    receipt_item_id: orderItem.receipt_item_id,
                    item_id: orderItem.item.item_id,
                    order_id: parseInt(orderItem.po_id),
                    order_item_id: orderItem.order_item_id > 0 ? parseInt(orderItem.order_item_id) : _this5.selectOrderItemId(orderItem)[0].id,
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

                  confirm_orders.map(function (confirmOrder, confirmOrderKey) {
                    if (orderItem.order_item_id == confirmOrder.id) {
                      _this5.variables.selected_po_data[key] = confirmOrder;
                    }
                  });
                });
              }
            } else {
              _this5.$router.push({
                name: 'shipments'
              });
            }
          }
        });
      }
    },
    getAllOrder: function getAllOrder() {
      var _this6 = this;

      this.orderApi_getAllOrder().then(function (response) {
        if (response.success) {
          _this6.variables.orders = response.data;
        }
      });
    },
    deleteUploadedFile: function deleteUploadedFile(filename) {
      var _this7 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete file from shipment order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this7.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this7.shipmentApi_deleteFile(_this7.inputs.shipment_id, filename).then(function (response) {
            if (response.success) {
              _this7.getOrder();

              _this7.$notify({
                group: "notification",
                type: "success",
                title: 'Successfully deleted specified shipment order file',
                text: ''
              });
            } else {
              _this7.$notify({
                group: "notification",
                type: "error",
                title: 'Some problem to delete specified file from shipment order',
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
    deleteUploadedSupplierCommercialInvoiceFile: function deleteUploadedSupplierCommercialInvoiceFile(file) {
      var _this8 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete file from shipment order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this8.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this8.shipmentApi_deleteUploadedSupplierCommercialInvoiceFile(_this8.inputs.shipment_id, file.id).then(function (response) {
            if (response.success) {
              _this8.getOrder();

              _this8.$notify({
                group: "notification",
                type: "success",
                title: 'Successfully deleted specified shipment order file',
                text: ''
              });
            } else {
              _this8.$notify({
                group: "notification",
                type: "error",
                title: 'Some problem to delete specified file from shipment order',
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
    initiateSupplierCommercialInvoicesUploadFile: function initiateSupplierCommercialInvoicesUploadFile(index) {
      this.$refs.uploadSupplierCommercialInvoicesFile[index].click();
      this.conditions.supplier_commercial_invoices = true;
    },
    addNewSupplierCommercialInvoicesUploadOption: function addNewSupplierCommercialInvoicesUploadOption() {
      this.inputs.file_upload.supplier_commercial_invoices.push({
        name: null
      });
    },
    removeSupplierCommercialInvoice: function removeSupplierCommercialInvoice(index) {
      this.form_data["delete"]("supplier_commercial_invoices[".concat(this.inputs.file_upload.supplier_commercial_invoices[index].file_count, "]"));
      this.inputs.file_upload.supplier_commercial_invoices.splice(index, 1);
    },
    fileAdded: function fileAdded(file) {
      var extension = null;

      if (!!file) {
        extension = file.type.split("/")[1];
        var allowed_files = ["pdf", "csv", "xls", "xlsx", "doc", "docx", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "vnd.ms-excel", "msword", "vnd.openxmlformats-officedocument.wordprocessingml.document"];

        if (allowed_files.includes(extension)) {
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
          attachment.file_count = this.$refs.supplierCommercialInvoicesDropzone.dropzone.files.length;
          this.form_data.append("supplier_commercial_invoices[".concat(attachment.file_count, "]"), file);
          this.inputs.file_upload.supplier_commercial_invoices = [].concat(_toConsumableArray(this.inputs.file_upload.supplier_commercial_invoices), [attachment]);
        }
      }
    },
    backOrdersReport: function backOrdersReport() {
      var _this9 = this;

      if (this.$route.params.order_number != '') {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        var shipmentId = this.$route.params.order_number;
        this.shipmentApi_backOrdersReport(shipmentId).then(function (response) {
          if (response.success) {
            if (response.data !== null) {
              _this9.back_orders_report_file = response.data.filename;
              var link = document.createElement('a');
              link.href = _this9.apiLink + '/public/backorders_reports/file?fileName=' + _this9.back_orders_report_file;
              link.download = _this9.back_orders_report_file;
              link.click();

              _this9.$notify({
                group: "notification",
                type: "success",
                title: "Success",
                text: response.message
              });
            } else {
              _this9.$notify({
                group: "notification",
                type: "warn",
                title: response.message,
                text: ''
              });
            }
          } else {
            _this9.$notify({
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
            if (!["admin", "purchaser"].includes(this.authenticatedUser.role)) {
              this.$router.push({
                name: 'login'
              });
            } else {
              this.getAllOrderItems(); // this.getAllOrder();

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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\n  display: -webkit-box;\n  display: flex;\n}\n.overflow-scroll {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 1366px) {\n.wrapper-table {\n    min-width: 1600px !important;\n}\n}\n.dropzone {\n  color: var(--color-primary);\n  background: white;\n  border: 1px solid var(--color-primary);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShipment.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Enter the container details" } },
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
                                      _c("v-select", {
                                        staticClass: "input w-full",
                                        staticStyle: {
                                          padding: "6px 16px !important"
                                        },
                                        attrs: {
                                          options: _vm.variables.status,
                                          autocomplete: "",
                                          placeholder: "Select Status",
                                          label: "text",
                                          reduce: function(status) {
                                            return status.value
                                          },
                                          clearable: false
                                        },
                                        model: {
                                          value: _vm.inputs.container.status,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "status",
                                              $$v
                                            )
                                          },
                                          expression: "inputs.container.status"
                                        }
                                      })
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
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.inputs.container
                                                .container_number,
                                            expression:
                                              "inputs.container.container_number"
                                          }
                                        ],
                                        staticClass: "input",
                                        class: [
                                          !_vm.inputs.container.container_number
                                            ? "input-empty"
                                            : ""
                                        ],
                                        attrs: { type: "text" },
                                        domProps: {
                                          value:
                                            _vm.inputs.container
                                              .container_number
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "container_number",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.inputs.container.carton_qty,
                                            expression:
                                              "inputs.container.carton_qty"
                                          }
                                        ],
                                        staticClass: "input",
                                        class: [
                                          !_vm.inputs.container.carton_qty
                                            ? "input-empty"
                                            : ""
                                        ],
                                        attrs: { type: "number" },
                                        domProps: {
                                          value: _vm.inputs.container.carton_qty
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "carton_qty",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                                        { staticClass: "flex flex-row w-full" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-1/12 pt-3 text-center"
                                            },
                                            [_vm._v("$")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-11/12"
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.container
                                                        .container_cost,
                                                    expression:
                                                      "inputs.container.container_cost"
                                                  }
                                                ],
                                                staticClass: "input",
                                                class: [
                                                  !_vm.inputs.container
                                                    .container_cost
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: { type: "number" },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.container
                                                      .container_cost
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.container,
                                                      "container_cost",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
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
                                        { staticClass: "flex flex-row w-full" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-1/12 pt-3 text-center"
                                            },
                                            [_vm._v("$")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-11/12"
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.container
                                                        .truck_cost,
                                                    expression:
                                                      "inputs.container.truck_cost"
                                                  }
                                                ],
                                                staticClass: "input",
                                                class: [
                                                  !_vm.inputs.container
                                                    .truck_cost
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: { type: "number" },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.container
                                                      .truck_cost
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.container,
                                                      "truck_cost",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
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
                                        { staticClass: "flex flex-row w-full" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-1/12 pt-3 text-center"
                                            },
                                            [_vm._v("$")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-col w-11/12"
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.inputs.container
                                                        .unload_rate,
                                                    expression:
                                                      "inputs.container.unload_rate"
                                                  }
                                                ],
                                                staticClass: "input",
                                                class: [
                                                  !_vm.inputs.container
                                                    .unload_rate
                                                    ? "input-empty"
                                                    : ""
                                                ],
                                                attrs: { type: "number" },
                                                domProps: {
                                                  value:
                                                    _vm.inputs.container
                                                      .unload_rate
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.inputs.container,
                                                      "unload_rate",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
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
                                                "flex flex-col w-12/12 pt-3 text-center"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  !!_vm.inputs.container
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
                                      _c("datepicker", {
                                        attrs: {
                                          bootstrapStyling: true,
                                          "input-class": "input",
                                          format: _vm.customFormatter,
                                          "clear-button": true
                                        },
                                        model: {
                                          value:
                                            _vm.inputs.container.date_shipped,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "date_shipped",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "inputs.container.date_shipped"
                                        }
                                      })
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
                                      _c("datepicker", {
                                        attrs: {
                                          bootstrapStyling: true,
                                          "input-class": "input",
                                          format: _vm.customFormatter,
                                          "clear-button": true
                                        },
                                        model: {
                                          value:
                                            _vm.inputs.container.date_received,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "date_received",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "inputs.container.date_received"
                                        }
                                      })
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
                                      _c("datepicker", {
                                        attrs: {
                                          bootstrapStyling: true,
                                          "input-class": "input",
                                          format: _vm.customFormatter,
                                          "clear-button": true
                                        },
                                        model: {
                                          value:
                                            _vm.inputs.container
                                              .expected_arrival,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "expected_arrival",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "inputs.container.expected_arrival"
                                        }
                                      })
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
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.inputs.container
                                                .country_of_origin,
                                            expression:
                                              "inputs.container.country_of_origin"
                                          }
                                        ],
                                        staticClass: "input",
                                        class: [
                                          !_vm.inputs.container
                                            .country_of_origin
                                            ? "input-empty"
                                            : ""
                                        ],
                                        attrs: { type: "text" },
                                        domProps: {
                                          value:
                                            _vm.inputs.container
                                              .country_of_origin
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "country_of_origin",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.inputs.container.notes,
                                            expression: "inputs.container.notes"
                                          }
                                        ],
                                        staticClass: "input",
                                        class: [
                                          !_vm.inputs.container.notes
                                            ? "input-empty"
                                            : ""
                                        ],
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: _vm.inputs.container.notes
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "notes",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.inputs.container
                                                .unload_hours_spent,
                                            expression:
                                              "inputs.container.unload_hours_spent"
                                          }
                                        ],
                                        staticClass: "input",
                                        class: [
                                          !_vm.inputs.container
                                            .unload_hours_spent
                                            ? "input-empty"
                                            : ""
                                        ],
                                        attrs: { type: "number" },
                                        domProps: {
                                          value:
                                            _vm.inputs.container
                                              .unload_hours_spent
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.inputs.container,
                                              "unload_hours_spent",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                    _c(
                      "div",
                      { staticClass: "w-2/12" },
                      [
                        item.receipt_item_id == null
                          ? _c("v-select", {
                              staticClass: "input w-full",
                              class: [!item.item_id ? "input-empty" : ""],
                              staticStyle: { padding: "6px 16px!important" },
                              attrs: {
                                options: _vm.variables.items,
                                autocomplete: "",
                                searchable: "",
                                placeholder: "Search item",
                                "get-option-label": function(option) {
                                  return option.item_id
                                },
                                reduce: function(item) {
                                  return item.item_id
                                },
                                "select-on-key-codes": [9, 13],
                                clearable: item.receipt_item_id == null
                              },
                              on: {
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
                          : _c("div", { staticClass: "input" }, [
                              _vm._v(_vm._s(item.item_id))
                            ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-4/12 ml-4" },
                      [
                        _c("v-select", {
                          ref: "item_po",
                          refInFor: true,
                          staticClass: "input w-full",
                          class: [!item.order_id ? "input-empty" : ""],
                          staticStyle: { padding: "6px 16px!important" },
                          attrs: {
                            options: item.orders,
                            autocomplete: "",
                            searchable: "",
                            placeholder: "Search po number",
                            label: "po_number",
                            "get-option-label": function(option) {
                              return _vm.changePOFormat(option)
                            },
                            "select-on-key-codes": [9, 13]
                          },
                          on: {
                            input: function($event) {
                              return _vm.poSelectedInputted(index)
                            }
                          },
                          model: {
                            value: _vm.variables.selected_po_data[index],
                            callback: function($$v) {
                              _vm.$set(
                                _vm.variables.selected_po_data,
                                index,
                                $$v
                              )
                            },
                            expression: "variables.selected_po_data[index]"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-1/12 ml-4" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.quantity,
                            expression: "item.quantity"
                          }
                        ],
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
                            _vm.$set(item, "quantity", $event.target.value)
                          }
                        }
                      })
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
                    _c("span", { staticClass: "btn--text custom-text-bold" }, [
                      _vm._v("Add Line Item")
                    ])
                  ]
                )
              ])
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col w-1/12 ml-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      on: {
                        click: function($event) {
                          return _vm.deleteUploadedFile("bol_file")
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "text-danger h-5 w-5",
                        attrs: { icon: "TrashIcon" }
                      })
                    ],
                    1
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
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary  mr-2",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("bol_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "btn--text custom-text-bold px-4"
                                },
                                [_vm._v("Upload Bol File")]
                              )
                            ]
                          )
                        ])
                      ]
                    : [
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-primary w-full mr-2 break-all",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("bol_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "btn--text custom-text-bold" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.inputs.file_upload.bol_file)
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex flex-col ml-2" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-danger w-1/3 mr-2",
                              on: {
                                click: function($event) {
                                  return _vm.resetUploadFile("bol_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "btn--text custom-text-bold" },
                                [_vm._v("Cancel")]
                              )
                            ]
                          )
                        ])
                      ]
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col w-1/12 ml-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      on: {
                        click: function($event) {
                          return _vm.deleteUploadedFile("isf_file")
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "text-danger h-5 w-5",
                        attrs: { icon: "TrashIcon" }
                      })
                    ],
                    1
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
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary  mr-2",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("isf_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "btn--text custom-text-bold px-4"
                                },
                                [_vm._v("Upload Isf File")]
                              )
                            ]
                          )
                        ])
                      ]
                    : [
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-primary w-full mr-2 break-all",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("isf_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "btn--text custom-text-bold" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.inputs.file_upload.isf_file)
                                  )
                                ]
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
                                staticClass:
                                  "btn btn-outline-danger w-full mr-2",
                                on: {
                                  click: function($event) {
                                    return _vm.resetUploadFile("isf_file")
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "btn--text custom-text-bold" },
                                  [_vm._v("Cancel")]
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col w-1/12 ml-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      on: {
                        click: function($event) {
                          return _vm.deleteUploadedFile("invoice_file")
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "text-danger h-5 w-5",
                        attrs: { icon: "TrashIcon" }
                      })
                    ],
                    1
                  )
                ])
              ])
            : _c(
                "div",
                { staticClass: "flex flex-row w-full" },
                [
                  _c("input", {
                    ref: "uploadInvoiceFile",
                    staticClass: "hidden",
                    attrs: {
                      type: "file",
                      accept:
                        ".pdf,application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    },
                    on: {
                      change: function($event) {
                        return _vm.onFileChanged($event, "invoice_file")
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.inputs.file_upload.invoice_file
                    ? [
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary  mr-2",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("invoice_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "btn--text custom-text-bold px-4"
                                },
                                [_vm._v("Upload Invoice File")]
                              )
                            ]
                          )
                        ])
                      ]
                    : [
                        _c("div", { staticClass: "flex flex-col w-4/12" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-primary w-full mr-2 break-all",
                              on: {
                                click: function($event) {
                                  return _vm.initiateUploadFile("invoice_file")
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "btn--text custom-text-bold" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.inputs.file_upload.invoice_file)
                                  )
                                ]
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
                                staticClass:
                                  "btn btn-outline-danger w-full mr-2",
                                on: {
                                  click: function($event) {
                                    return _vm.resetUploadFile("invoice_file")
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "btn--text custom-text-bold" },
                                  [_vm._v("Cancel")]
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
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex flex-col w-1/12 ml-2" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-danger p-3",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteUploadedSupplierCommercialInvoiceFile(
                                          sci
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "text-danger h-5 w-5",
                                      attrs: { icon: "TrashIcon" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      }
                    ),
                    0
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex-row w-full mb-2" },
              [
                _c(
                  "vue-dropzone",
                  {
                    ref: "supplierCommercialInvoicesDropzone",
                    staticClass: "flex-col w-4/12 btn btn-outline-primary",
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
                        { staticClass: "btn--text custom-text-bold px-4" },
                        [_vm._v("Upload Files")]
                      )
                    ])
                  ]
                )
              ],
              1
            ),
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-col w-1/12 ml-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-danger",
                          on: {
                            click: function($event) {
                              return _vm.removeSupplierCommercialInvoice(index)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn--text custom-text-bold" },
                            [_vm._v("Cancel")]
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-10 w-full flex justify-end" }, [
        _vm.inputValid
          ? _c(
              "button",
              {
                staticClass: "btn btn-primary p-3",
                on: {
                  click: function($event) {
                    return _vm.updateShipment()
                  }
                }
              },
              [
                _c("span", { staticClass: "btn--text custom-text-bold" }, [
                  _vm._v("Update Shipment")
                ])
              ]
            )
          : _c(
              "button",
              {
                staticClass: "btn btn-primary btn-disabled p-3",
                attrs: { disabled: "" }
              },
              [
                _c("span", { staticClass: "btn--text custom-text-bold" }, [
                  _vm._v("Update Shipment")
                ])
              ]
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

/***/ "./resources/js/views/pages/Shipments/EditShipment.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/EditShipment.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditShipment.vue?vue&type=template&id=a5c6a638& */ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638&");
/* harmony import */ var _EditShipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditShipment.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditShipment.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditShipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Shipments/EditShipment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShipment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShipment.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditShipment.vue?vue&type=template&id=a5c6a638& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/EditShipment.vue?vue&type=template&id=a5c6a638&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditShipment_vue_vue_type_template_id_a5c6a638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
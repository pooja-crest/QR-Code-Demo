(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/shipmentApi */ "./resources/js/apis/shipmentApi.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import Datepicker from 'vuejs-datepicker';



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShipmentOrderList",
  mixins: [_apis_shipmentApi__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      conditions: {
        data_each_page: 50,
        loadings: {
          datas: false
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
          selected_status: 'all'
        },
        file_upload: {
          type: "orders",
          name: null
        }
      },
      variables: {
        filter_status: [{
          value: "all",
          text: "All"
        }, {
          value: "ontheway",
          text: "ON THE WAY"
        }, {
          value: 'packed',
          text: "PACKED"
        }, {
          value: 'received',
          text: "RECIEVED"
        }],
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
        }]
      },
      showNewShipment: true,
      apiLink: "http://127.0.0.1:8000/api",
      form_data: new FormData()
    };
  },
  watch: {
    "inputs.filters.selected_status": function inputsFiltersSelected_status(value) {
      this.data.paginations.current_page = 1;
      this.getShipmentOrders();
    }
  },
  methods: {
    customFormatter: function customFormatter(date) {
      return this.$moment(date).format("MM/DD/YY");
    },
    customFormatterDateTime: function customFormatterDateTime(date) {
      return this.$moment(date).format("MM/DD/YY hh:mm");
    },
    searchData: function searchData() {
      var search_active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.data.paginations.current_page = 1;
      this.conditions.search_active = search_active;

      if (!search_active) {
        this.inputs.filters.search = "";
      }

      this.getShipmentOrders();
    },
    getShipmentOrders: function getShipmentOrders() {
      var _this = this;

      this.conditions.loadings.datas = true;
      var params = {
        page: this.data.paginations.current_page,
        search: this.inputs.filters.search,
        is_display: ["display"].includes(this.authenticatedUser.role),
        status: this.inputs.filters.selected_status != 'all' ? this.inputs.filters.selected_status : null
      };
      this.shipmentApi_getAll(params).then(function (response) {
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
      this.getShipmentOrders();
    },
    changeStatus: function changeStatus(index) {
      var _this2 = this;

      if (this.data.datas[index].status != undefined || this.data.datas[index].status != null) {
        var loading = this.$loading.show({
          container: null,
          color: "var(--color-primary)"
        });
        this.shipmentApi_getChangeStatus(this.data.datas[index].id, this.data.datas[index].status).then(function (response) {
          if (response.success) {
            _this2.getShipmentOrders();

            _this2.$notify({
              group: "notification",
              type: "success",
              title: 'Successfully shipment order status updated',
              text: ''
            });
          } else {
            _this2.$notify({
              group: "notification",
              type: "error",
              title: 'Sorry but problem to change shipment order status',
              text: ''
            });
          }
        })["catch"](function (error) {
          return console.log(error);
        })["finally"](function () {
          loading.hide();
        });
      }
    },
    changeCheckmarkStatus: function changeCheckmarkStatus(shipmentId, columnName) {
      var _this3 = this;

      var loading = this.$loading.show({
        container: null,
        color: "var(--color-primary)"
      });
      this.shipmentApi_getChangeCheckmarks(shipmentId, columnName).then(function (response) {
        if (response.success) {
          _this3.getShipmentOrders();

          _this3.$notify({
            group: "notification",
            type: "success",
            title: 'Successfully shipment order checkmark status updated',
            text: ''
          });
        } else {
          _this3.$notify({
            group: "notification",
            type: "error",
            title: 'Sorry but problem to change shipment order checkmark status',
            text: ''
          });
        }
      })["catch"](function (error) {
        return console.log(error);
      })["finally"](function () {
        loading.hide();
      });
    },
    changeEtbDate: function changeEtbDate(index) {
      var _this4 = this;

      this.$nextTick(function () {
        if (_this4.data.datas[index].etb != null) {
          var loading = _this4.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          var params = {
            shipment_id: _this4.data.datas[index].id,
            column_name: 'etb',
            date: _this4.data.datas[index].etb
          };

          _this4.shipmentApi_getChangeShipmentDate(params).then(function (response) {
            if (response.success) {
              _this4.getShipmentOrders();

              _this4.$notify({
                group: "notification",
                type: "success",
                title: 'Successfully shipment etb date updated',
                text: ''
              });
            } else {
              _this4.$notify({
                group: "notification",
                type: "error",
                title: 'Sorry but problem to change shipment etb date',
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
    changeApptDate: function changeApptDate(index) {
      var _this5 = this;

      this.$nextTick(function () {
        if (_this5.data.datas[index].appt != null) {
          var loading = _this5.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          var params = {
            shipment_id: _this5.data.datas[index].id,
            column_name: 'appt',
            date: _this5.data.datas[index].appt
          };

          _this5.shipmentApi_getChangeShipmentDate(params).then(function (response) {
            if (response.success) {
              _this5.getShipmentOrders();

              _this5.$notify({
                group: "notification",
                type: "success",
                title: 'Successfully shipment appt date updated',
                text: ''
              });
            } else {
              _this5.$notify({
                group: "notification",
                type: "error",
                title: 'Sorry but problem to change shipment appt date',
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
    deleteShipmentOrder: function deleteShipmentOrder(order) {
      var _this6 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Please confirm to delete shipment order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          var loading = _this6.$loading.show({
            container: null,
            color: "var(--color-primary)"
          });

          _this6.shipmentApi_delete(order.id).then(function (_ref) {
            var data = _ref.data;

            _this6.getShipmentOrders();
          })["finally"](function () {
            return loading.hide();
          });
        }
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
          this.shipmentApi_uploadShipmentOrders().then(function (response) {
            if (response.success) {
              _this7.$notify({
                group: "notification",
                type: "success",
                title: "Success",
                text: response.message
              });

              _this7.resetUploadFile();

              _this7.getShipmentOrders();
            } else {
              _this7.resetUploadFile();

              var link = document.createElement('a');
              link.href = _this7.apiLink + '/public/import_shipment_fails/file?fileName=' + response.data;
              link.download = response.data;
              link.click();

              _this7.$notify({
                group: "notification",
                type: "warn",
                title: "Warning",
                text: response.message
              });
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
      this.showNewShipment = true;
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

      var allowed_files = ["csv", "xls", "xlsx"];

      if (!allowed_files.includes(this.getFileExtension(file.name))) {
        e.preventDefault();
        this.$notify({
          group: "notification",
          type: "warn",
          title: "Upload failed",
          text: "This file is not supported, only upload .csv"
        });
        return;
      }

      this.formData = new FormData();
      this.formData.append("file", file);
      this.inputs.file_upload.name = file.name;
      this.showNewShipment = false;
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
              this.getShipmentOrders();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#shipment_list .w-1\\/2 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-1\\/3 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#shipment_list .w-2\\/3 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-1\\/4 {\n  width: 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n#shipment_list .w-2\\/4 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-3\\/4 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#shipment_list .w-1\\/5 {\n  width: 20%;\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n  max-width: 20%;\n}\n#shipment_list .w-2\\/5 {\n  width: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n  max-width: 40%;\n}\n#shipment_list .w-3\\/5 {\n  width: 60%;\n  -webkit-box-flex: 0;\n          flex: 0 0 60%;\n  max-width: 60%;\n}\n#shipment_list .w-4\\/5 {\n  width: 80%;\n  -webkit-box-flex: 0;\n          flex: 0 0 80%;\n  max-width: 80%;\n}\n#shipment_list .w-1\\/6 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n#shipment_list .w-2\\/6 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#shipment_list .w-3\\/6 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-4\\/6 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-5\\/6 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#shipment_list .w-1\\/12 {\n  width: 8.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n#shipment_list .w-2\\/12 {\n  width: 16.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n#shipment_list .w-3\\/12 {\n  width: 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n#shipment_list .w-4\\/12 {\n  width: 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n#shipment_list .w-5\\/12 {\n  width: 41.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n#shipment_list .w-6\\/12 {\n  width: 50%;\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n#shipment_list .w-7\\/12 {\n  width: 58.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n#shipment_list .w-8\\/12 {\n  width: 66.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n#shipment_list .w-9\\/12 {\n  width: 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n#shipment_list .w-10\\/12 {\n  width: 83.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n#shipment_list .w-11\\/12 {\n  width: 91.666667%;\n  -webkit-box-flex: 0;\n          flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n#shipment_list .w-full {\n  width: 100%;\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  max-width: 100%;\n}\n.newshipment {\n  background: #e5e50c;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278& ***!
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
    {
      staticClass: "content-compact--container",
      staticStyle: { "user-select": "text" }
    },
    [
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          ["admin", "purchaser"].includes(_vm.authenticatedUser.role)
            ? _c("card-custom", { attrs: { title: "Actions" } }, [
                _c("div", { staticClass: "flex flex-row w-full justify-end" }, [
                  _c("div", { staticClass: "flex flex-col w-8/12 mr-2" }, [
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
                                      "btn btn-outline-primary w-full mr-2",
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
                                          "btn--text custom-text-bold px-12"
                                      },
                                      [_vm._v("Import Shipment")]
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showNewShipment,
                          expression: "showNewShipment"
                        }
                      ],
                      staticClass: "flex flex-col w-2/12"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-outline-primary w-full",
                          staticStyle: { "text-decoration": "none" },
                          attrs: { to: { name: "new_shipment" } }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn--text custom-text-bold" },
                            [_vm._v("New Shipment")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("card-custom", [
            _c(
              "div",
              { staticClass: "flex flex-row w-full" },
              _vm._l(_vm.variables.filter_status, function(status, index) {
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
                        placeholder: "Search Container Number or PO # or Item #"
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
          _c(
            "card-custom",
            { staticClass: "mt-10", attrs: { title: "Shipment List" } },
            [
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
                                          staticClass:
                                            "tablecustom my-8 w-full",
                                          staticStyle: { "max-width": "800px" }
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Container Number\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Qty of Cartons\n                            "
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
                                                                  "0 15px"
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
                                                                    "\n                              status\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Date Packed\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Date Shipped\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Date at Port\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Date Received\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              Docs\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              ISF\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              A/N\n                            "
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
                                                                  "0 15px"
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
                                                                    "\n                              ETB\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              FRT\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              CSTM\n                            "
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
                                                                    "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                              D/C\n                            "
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
                                                                padding:
                                                                  "0 15px"
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
                                                                    "\n                              APPT\n                            "
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          [
                                                            "admin",
                                                            "purchaser",
                                                            "order_tracking"
                                                          ].includes(
                                                            _vm
                                                              .authenticatedUser
                                                              .role
                                                          )
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "tablecustom-header--content w-3/12",
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
                                                                        "tablecustom-header--text uppercase text-xs font-medium flex items-center"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                              Actions\n                            "
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
                                                                          "tablecustom-content--content flex items-center w-2/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            _vm.authenticatedUser &&
                                                                            [
                                                                              "admin",
                                                                              "purchaser"
                                                                            ].includes(
                                                                              _vm
                                                                                .authenticatedUser
                                                                                .role
                                                                            )
                                                                              ? _c(
                                                                                  "router-link",
                                                                                  {
                                                                                    attrs: {
                                                                                      to: {
                                                                                        name:
                                                                                          "edit_shipment",
                                                                                        params: {
                                                                                          order_number:
                                                                                            shipment.id
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0",
                                                                                        attrs: {
                                                                                          title:
                                                                                            shipment.container_number
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            shipment.container_number
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _vm.authenticatedUser &&
                                                                                [
                                                                                  "order_tracking"
                                                                                ].includes(
                                                                                  _vm
                                                                                    .authenticatedUser
                                                                                    .role
                                                                                )
                                                                              ? _c(
                                                                                  "router-link",
                                                                                  {
                                                                                    attrs: {
                                                                                      to: {
                                                                                        name:
                                                                                          "shipment_detail",
                                                                                        params: {
                                                                                          order_number:
                                                                                            shipment.id
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "p",
                                                                                      {
                                                                                        staticClass:
                                                                                          "m-0",
                                                                                        attrs: {
                                                                                          title:
                                                                                            shipment.container_number
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            shipment.container_number
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0",
                                                                                    attrs: {
                                                                                      title:
                                                                                        shipment.container_number
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.container_number
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                          "tablecustom-content--content flex items-center w-2/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "select",
                                                                                  {
                                                                                    directives: [
                                                                                      {
                                                                                        name:
                                                                                          "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          shipment.status,
                                                                                        expression:
                                                                                          "shipment.status"
                                                                                      }
                                                                                    ],
                                                                                    staticClass:
                                                                                      "input",
                                                                                    on: {
                                                                                      change: [
                                                                                        function(
                                                                                          $event
                                                                                        ) {
                                                                                          var $$selectedVal = Array.prototype.filter
                                                                                            .call(
                                                                                              $event
                                                                                                .target
                                                                                                .options,
                                                                                              function(
                                                                                                o
                                                                                              ) {
                                                                                                return o.selected
                                                                                              }
                                                                                            )
                                                                                            .map(
                                                                                              function(
                                                                                                o
                                                                                              ) {
                                                                                                var val =
                                                                                                  "_value" in
                                                                                                  o
                                                                                                    ? o._value
                                                                                                    : o.value
                                                                                                return val
                                                                                              }
                                                                                            )
                                                                                          _vm.$set(
                                                                                            shipment,
                                                                                            "status",
                                                                                            $event
                                                                                              .target
                                                                                              .multiple
                                                                                              ? $$selectedVal
                                                                                              : $$selectedVal[0]
                                                                                          )
                                                                                        },
                                                                                        function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.changeStatus(
                                                                                            index
                                                                                          )
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  },
                                                                                  _vm._l(
                                                                                    _vm
                                                                                      .variables
                                                                                      .status,
                                                                                    function(
                                                                                      s,
                                                                                      index
                                                                                    ) {
                                                                                      return _c(
                                                                                        "option",
                                                                                        {
                                                                                          key: index,
                                                                                          domProps: {
                                                                                            value:
                                                                                              s.value
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              s.text
                                                                                            )
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    }
                                                                                  ),
                                                                                  0
                                                                                )
                                                                              : _c(
                                                                                  "p",
                                                                                  {
                                                                                    staticClass:
                                                                                      "m-0 flex items-center justify-center uppercase"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        shipment.status.replace(
                                                                                          "_",
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            !!shipment.date_packed
                                                                              ? _c(
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
                                                                                            shipment.date_packed
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD/YY"
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
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
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .$moment(
                                                                                            shipment.date_shipped
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD/YY"
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            !!shipment.date_at_port
                                                                              ? _c(
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
                                                                                            shipment.date_at_port
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD/YY"
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text"
                                                                          },
                                                                          [
                                                                            !!shipment.date_received
                                                                              ? _c(
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
                                                                                            shipment.date_received
                                                                                          )
                                                                                          .format(
                                                                                            "MM/DD/YY"
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "docs"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.docs ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.docs ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "isf"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.isf ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.isf ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "an"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.an ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.an ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-2/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text",
                                                                            class: [
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? "flex"
                                                                                : ""
                                                                            ]
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
                                                                                        return _vm.changeEtbDate(
                                                                                          index
                                                                                        )
                                                                                      }
                                                                                    },
                                                                                    model: {
                                                                                      value:
                                                                                        shipment.etb,
                                                                                      callback: function(
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          shipment,
                                                                                          "etb",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                      expression:
                                                                                        "shipment.etb"
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
                                                                                        !!shipment.etb
                                                                                          ? _vm
                                                                                              .$moment(
                                                                                                shipment.etb
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "frt"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.frt ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.frt ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "cstm"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.cstm ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.cstm ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-1/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text flex"
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
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeCheckmarkStatus(
                                                                                          shipment.id,
                                                                                          "dc"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.dc ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "input-checkbox--container",
                                                                                    staticStyle: {
                                                                                      height:
                                                                                        "22px"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "input-checkbox--checkbox",
                                                                                        staticStyle: {
                                                                                          "border-color":
                                                                                            "rgba(0, 0, 0, 0.3)",
                                                                                          width:
                                                                                            "26px",
                                                                                          height:
                                                                                            "26px"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        shipment.cstm ==
                                                                                        1
                                                                                          ? _c(
                                                                                              "feather-icon",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "input-checkbox--check-icon h-4 w-4",
                                                                                                staticStyle: {
                                                                                                  color:
                                                                                                    "var(--color-primary)"
                                                                                                },
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    "CheckIcon"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
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
                                                                          "tablecustom-content--content flex items-center w-3/12",
                                                                        class: [
                                                                          !shipment.container_number
                                                                            ? "newshipment"
                                                                            : ""
                                                                        ]
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--text",
                                                                            class: [
                                                                              [
                                                                                "admin",
                                                                                "purchaser"
                                                                              ].includes(
                                                                                _vm
                                                                                  .authenticatedUser
                                                                                  .role
                                                                              )
                                                                                ? "flex"
                                                                                : ""
                                                                            ]
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
                                                                                        "MM/DD/YYYY HH:mm:ss",
                                                                                      "value-type":
                                                                                        "YYYY-MM-DD HH:mm:ss",
                                                                                      type:
                                                                                        "datetime",
                                                                                      confirm: true,
                                                                                      clearable: false
                                                                                    },
                                                                                    on: {
                                                                                      confirm: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.changeApptDate(
                                                                                          index
                                                                                        )
                                                                                      }
                                                                                    },
                                                                                    model: {
                                                                                      value:
                                                                                        shipment.appt,
                                                                                      callback: function(
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          shipment,
                                                                                          "appt",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                      expression:
                                                                                        "shipment.appt"
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
                                                                                        !!shipment.appt
                                                                                          ? _vm
                                                                                              .$moment(
                                                                                                shipment.appt
                                                                                              )
                                                                                              .format(
                                                                                                "MM/DD/YYYY HH:mm:ss"
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
                                                                    [
                                                                      "admin",
                                                                      "purchaser",
                                                                      "order_tracking"
                                                                    ].includes(
                                                                      _vm
                                                                        .authenticatedUser
                                                                        .role
                                                                    )
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "tablecustom-content--content flex items-center w-3/12",
                                                                            class: [
                                                                              !shipment.container_number
                                                                                ? "newshipment"
                                                                                : ""
                                                                            ]
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "tablecustom-content--text flex"
                                                                              },
                                                                              [
                                                                                _vm.authenticatedUser &&
                                                                                [
                                                                                  "admin",
                                                                                  "purchaser"
                                                                                ].includes(
                                                                                  _vm
                                                                                    .authenticatedUser
                                                                                    .role
                                                                                )
                                                                                  ? _c(
                                                                                      "router-link",
                                                                                      {
                                                                                        staticClass:
                                                                                          "btn btn-outline-primary p-1 items-center justify-center",
                                                                                        staticStyle: {
                                                                                          "min-width":
                                                                                            "initial"
                                                                                        },
                                                                                        attrs: {
                                                                                          to: {
                                                                                            name:
                                                                                              "edit_shipment",
                                                                                            params: {
                                                                                              order_number:
                                                                                                shipment.id
                                                                                            }
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
                                                                                  : _vm._e(),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _vm.authenticatedUser &&
                                                                                [
                                                                                  "admin",
                                                                                  "purchaser"
                                                                                ].includes(
                                                                                  _vm
                                                                                    .authenticatedUser
                                                                                    .role
                                                                                )
                                                                                  ? _c(
                                                                                      "button",
                                                                                      {
                                                                                        staticClass:
                                                                                          "btn btn-outline-danger p-1 ml-3 flex items-center justify-center",
                                                                                        staticStyle: {
                                                                                          "min-width":
                                                                                            "initial"
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            return _vm.deleteShipmentOrder(
                                                                                              shipment
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
                                                                                  : _vm._e(),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _vm.authenticatedUser &&
                                                                                [
                                                                                  "order_tracking"
                                                                                ].includes(
                                                                                  _vm
                                                                                    .authenticatedUser
                                                                                    .role
                                                                                )
                                                                                  ? _c(
                                                                                      "router-link",
                                                                                      {
                                                                                        staticClass:
                                                                                          "btn btn-outline-primary p-1 items-center justify-center",
                                                                                        staticStyle: {
                                                                                          "text-decoration":
                                                                                            "none",
                                                                                          "min-width":
                                                                                            "initial"
                                                                                        },
                                                                                        attrs: {
                                                                                          to: {
                                                                                            name:
                                                                                              "shipment_detail",
                                                                                            params: {
                                                                                              order_number:
                                                                                                shipment.id
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "span",
                                                                                          [
                                                                                            _vm._v(
                                                                                              "View"
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e(),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "a",
                                                                                  {
                                                                                    staticClass:
                                                                                      "btn btn-outline-primary p-1 ml-3 no-underline",
                                                                                    staticStyle: {
                                                                                      "min-width":
                                                                                        "auto"
                                                                                    },
                                                                                    attrs: {
                                                                                      href:
                                                                                        _vm.apiLink +
                                                                                        "/public/shipment/file?orderNumber=" +
                                                                                        shipment.shipment_order_code +
                                                                                        ".pdf",
                                                                                      target:
                                                                                        "_blank"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "Download"
                                                                                    )
                                                                                  ]
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
                                                        _vm._l(16, function(p) {
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
                                                          _vm._l(16, function(
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
                                                                  16,
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

/***/ "./resources/js/views/pages/Shipments/ShipmentList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipmentList.vue?vue&type=template&id=48706278& */ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278&");
/* harmony import */ var _ShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipmentList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Shipments/ShipmentList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentList.vue?vue&type=template&id=48706278& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Shipments/ShipmentList.vue?vue&type=template&id=48706278&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentList_vue_vue_type_template_id_48706278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
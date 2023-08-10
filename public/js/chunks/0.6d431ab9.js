(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/apis/orderApi.js":
/*!***************************************!*\
  !*** ./resources/js/apis/orderApi.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var route = "orders";
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    orderApi_store: function orderApi_store(data) {
      var _this = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      })["catch"](function (error) {
        _this.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_update: function orderApi_update(id, data) {
      var _this2 = this;

      return axios({
        method: "post",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      })["catch"](function (error) {
        _this2.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_getAll: function orderApi_getAll() {
      var _this3 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route),
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
    orderApi_getOne: function orderApi_getOne(id) {
      var _this4 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      })["catch"](function (error) {
        _this4.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderApi_updateStatus: function orderApi_updateStatus(id) {
      var _this5 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "patch",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/status/") + id,
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
    orderApi_uploadOrders: function orderApi_uploadOrders() {
      var _this6 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/upload-orders"), this.formData, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      })["catch"](function (error) {
        _this6.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_getOrderCubicInches: function orderApi_getOrderCubicInches(id) {
      var _this7 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/cubic_inches/") + id,
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
    orderApi_createMultipleOrdersFile: function orderApi_createMultipleOrdersFile(data) {
      var _this8 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/create-multiple-orders-file"), data, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref8) {
        var data = _ref8.data;
        return data;
      })["catch"](function (error) {
        _this8.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_getAllOrderItems: function orderApi_getAllOrderItems() {
      var _this9 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/order_items"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref9) {
        var data = _ref9.data;
        return data;
      })["catch"](function (error) {
        _this9.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderApi_getOrderForItemId: function orderApi_getOrderForItemId(item_id) {
      var _this10 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/item/") + item_id,
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
    orderApi_getWithoutDeletedOrderForItemId: function orderApi_getWithoutDeletedOrderForItemId(item_id) {
      var _this11 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/item-without/") + item_id,
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
    orderApi_getAllOrder: function orderApi_getAllOrder() {
      var _this12 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/all"),
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
    },
    orderApi_delete: function orderApi_delete(id) {
      var _this13 = this;

      return axios({
        method: "delete",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref13) {
        var data = _ref13.data;
        return data;
      })["catch"](function (error) {
        _this13.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderApi_deleteUploadedOrderFile: function orderApi_deleteUploadedOrderFile(orderId, fileId) {
      var _this14 = this;

      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/delete_order_file/").concat(orderId, "/").concat(fileId),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref14) {
        var data = _ref14.data;
        return data;
      })["catch"](function (error) {
        _this14.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderApi_updateAdagioStatus: function orderApi_updateAdagioStatus(id) {
      var _this15 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios({
        method: "patch",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/adagio/status/") + id,
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref15) {
        var data = _ref15.data;
        return data;
      })["catch"](function (error) {
        _this15.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_updateOrderNote: function orderApi_updateOrderNote(data) {
      var _this16 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/update-order-note"), data, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref16) {
        var data = _ref16.data;
        return data;
      })["catch"](function (error) {
        _this16.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_getAllOrderItemsList: function orderApi_getAllOrderItemsList() {
      var _this17 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return axios({
        method: "get",
        url: "http://127.0.0.1:8000/api" + "/".concat(route, "/order-status-report"),
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        params: params
      }).then(function (_ref17) {
        var data = _ref17.data;
        return data;
      })["catch"](function (error) {
        _this17.globalFunction_handleAxiosError(error);

        return error;
      });
    },
    orderApi_createMultipleOrderStatusReportFile: function orderApi_createMultipleOrderStatusReportFile(data) {
      var _this18 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/create-order-status-report-file"), data, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref18) {
        var data = _ref18.data;
        return data;
      })["catch"](function (error) {
        _this18.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_updateOrderStatusReportNote: function orderApi_updateOrderStatusReportNote(data) {
      var _this19 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/update-order-status-report-note"), data, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref19) {
        var data = _ref19.data;
        return data;
      })["catch"](function (error) {
        _this19.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_updateOrderStatusReportPriority: function orderApi_updateOrderStatusReportPriority(data) {
      var _this20 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/update-order-status-report-priority"), data, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref20) {
        var data = _ref20.data;
        return data;
      })["catch"](function (error) {
        _this20.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_cancelOpenItemQuantity: function orderApi_cancelOpenItemQuantity(order_item_id) {
      var _this21 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/cancel-open-item-quantity/").concat(order_item_id), null, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        }
      }).then(function (_ref21) {
        var data = _ref21.data;
        return data;
      })["catch"](function (error) {
        _this21.globalFunction_handleAxiosError(error, true);

        return error;
      });
    },
    orderApi_changeOrderEsd: function orderApi_changeOrderEsd(order_item_id, data) {
      var _this22 = this;

      return axios.post("http://127.0.0.1:8000/api" + "/".concat(route, "/change-order-esd/").concat(order_item_id), null, {
        headers: {
          Authorization: "Bearer ".concat(this.authorizationToken)
        },
        data: data
      }).then(function (_ref22) {
        var data = _ref22.data;
        return data;
      })["catch"](function (error) {
        _this22.globalFunction_handleAxiosError(error, true);

        return error;
      });
    }
  }
});

/***/ })

}]);
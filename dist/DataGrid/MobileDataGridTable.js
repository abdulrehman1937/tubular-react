"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileDataGridTable = void 0;
var ImageList_1 = require("@mui/material/ImageList");
var React = require("react");
var TbMobileRow_1 = require("../BareBones/TbMobileRow");
var generateOnRowClickProxy = function (onRowClick) {
    return function (row) {
        return function () {
            if (onRowClick) {
                onRowClick(row);
            }
        };
    };
};
var MobileDataGridTable = function (_a) {
    var tbTableInstance = _a.tbTableInstance, rowComponent = _a.rowComponent, onRowClick = _a.onRowClick;
    var RowComponent = rowComponent ? rowComponent : TbMobileRow_1.TbMobileRow;
    var onRowClickProxy = onRowClick ? generateOnRowClickProxy(onRowClick) : function (_row) { return void 0; };
    return (React.createElement(ImageList_1.default, { cols: 1, rowHeight: "auto" }, tbTableInstance.state.data.map(function (row, index) { return (React.createElement(RowComponent, { columns: tbTableInstance.state.columns, row: row, rowIndex: index, onRowClick: onRowClickProxy(row), key: index })); })));
};
exports.MobileDataGridTable = MobileDataGridTable;

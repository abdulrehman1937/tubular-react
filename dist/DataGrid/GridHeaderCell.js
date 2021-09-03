"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridHeaderCell = void 0;
var TableCell_1 = require("@mui/material/TableCell");
var TableSortLabel_1 = require("@mui/material/TableSortLabel");
var Tooltip_1 = require("@mui/material/Tooltip");
var React = require("react");
var tubular_common_1 = require("tubular-common");
var Lang_1 = require("../utils/Lang");
var GridHeaderCell = function (_a) {
    var column = _a.column, sortColumn = _a.sortColumn;
    var sort = function () { return sortColumn(column.name); };
    var direction = column.sortDirection === tubular_common_1.ColumnSortDirection.Ascending || column.sortDirection === tubular_common_1.ColumnSortDirection.None
        ? 'asc'
        : 'desc';
    var render = column.sortable ? (React.createElement(Tooltip_1.default, { title: Lang_1.default.translate('ClickSort'), placement: "bottom-start", enterDelay: 300 },
        React.createElement(TableSortLabel_1.default, { onClick: sort, direction: direction, active: column.sortDirection !== tubular_common_1.ColumnSortDirection.None }, column.label))) : (column.label);
    return (React.createElement(TableCell_1.default, { key: column.label, padding: column.label === '' ? 'none' : 'normal' }, render));
};
exports.GridHeaderCell = GridHeaderCell;

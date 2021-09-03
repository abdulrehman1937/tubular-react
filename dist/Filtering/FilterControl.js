"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterControl = void 0;
var React = require("react");
var tubular_common_1 = require("tubular-common");
var StandardFilterEditor_1 = require("./StandardFilterEditor");
var Accordion_1 = require("@mui/material/Accordion");
var AccordionSummary_1 = require("@mui/material/AccordionSummary");
var AccordionDetails_1 = require("@mui/material/AccordionDetails");
var Typography_1 = require("@mui/material/Typography");
var ExpandMore_1 = require("@mui/icons-material/ExpandMore");
var makeStyles_1 = require("@mui/styles/makeStyles");
var BooleanFilterEditor_1 = require("./BooleanFilterEditor");
var useStyles = (0, makeStyles_1.default)(function (theme) { return ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    expandIcon: {
        color: theme.palette.primary.contrastText,
    },
}); });
var FilterControl = function (_a) {
    var column = _a.column, onApply = _a.onApply;
    var hasFilter = (0, tubular_common_1.columnHasFilter)(column);
    var classes = useStyles();
    var FilterEditor = column.dataType === tubular_common_1.ColumnDataType.Boolean ? BooleanFilterEditor_1.BooleanFilterEditor : StandardFilterEditor_1.StandardFilterEditor;
    return (React.createElement(Accordion_1.default, null,
        React.createElement(AccordionSummary_1.default, { classes: hasFilter ? classes : {}, expandIcon: React.createElement(ExpandMore_1.default, null), "aria-controls": "panel1a-content" },
            React.createElement(Typography_1.default, null, column.label)),
        React.createElement(AccordionDetails_1.default, null,
            React.createElement(FilterEditor, { column: column, onApply: onApply }))));
};
exports.FilterControl = FilterControl;

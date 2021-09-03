"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFilterEditor = void 0;
var React = require("react");
var tubular_common_1 = require("tubular-common");
var RadioGroup_1 = require("@mui/material/RadioGroup");
var FormControlLabel_1 = require("@mui/material/FormControlLabel");
var Radio_1 = require("@mui/material/Radio");
var CheckBox_1 = require("@mui/icons-material/CheckBox");
var CheckBoxOutlineBlank_1 = require("@mui/icons-material/CheckBoxOutlineBlank");
var makeStyles_1 = require("@mui/styles/makeStyles");
var useStyles = (0, makeStyles_1.default)({
    label: {
        paddingTop: 5,
    },
});
var BooleanFilterEditor = function (_a) {
    var column = _a.column;
    var _b = React.useState(column.filterText || 'all'), selectedOption = _b[0], setSelectedOption = _b[1];
    var classes = useStyles();
    var onChoiceChange = function (value) {
        setSelectedOption(value);
        if (value === 'all') {
            column.filterOperator = tubular_common_1.CompareOperators.None;
            column.filterText = null;
            return;
        }
        column.filterOperator = tubular_common_1.CompareOperators.Equals;
        column.filterText = value;
    };
    return (React.createElement("div", null,
        React.createElement(RadioGroup_1.default, { "aria-label": "quiz", name: "quiz", value: selectedOption, onChange: function (_event, value) { return onChoiceChange(value); } },
            React.createElement(FormControlLabel_1.default, { classes: classes, value: "true", control: React.createElement(Radio_1.default, null), label: React.createElement(CheckBox_1.default, null) }),
            React.createElement(FormControlLabel_1.default, { classes: classes, value: "false", control: React.createElement(Radio_1.default, null), label: React.createElement(CheckBoxOutlineBlank_1.default, null) }),
            React.createElement(FormControlLabel_1.default, { value: "all", control: React.createElement(Radio_1.default, null), label: "All" }))));
};
exports.BooleanFilterEditor = BooleanFilterEditor;
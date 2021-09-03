"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTextInput = void 0;
var FormControl_1 = require("@mui/material/FormControl");
var IconButton_1 = require("@mui/material/IconButton");
var Input_1 = require("@mui/material/Input");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Close_1 = require("@mui/icons-material/Close");
var Search_1 = require("@mui/icons-material/Search");
var React = require("react");
var styles = {
    formControl: {
        margin: '10px',
        width: 250,
    },
};
var SearchTextInput = function (_a) {
    var searchText = _a.searchText, updateSearchText = _a.updateSearchText;
    var onChange = function (e) { return updateSearchText(e.target.value); };
    var onClear = function () { return updateSearchText(''); };
    var adorment = (React.createElement(InputAdornment_1.default, { position: "end" },
        React.createElement(Search_1.default, null)));
    return (React.createElement(FormControl_1.default, { style: styles.formControl },
        React.createElement(Input_1.default, { fullWidth: true, type: "text", value: searchText, onChange: onChange, startAdornment: adorment, endAdornment: searchText !== '' && (React.createElement(InputAdornment_1.default, { position: "end" },
                React.createElement(IconButton_1.default, { onClick: onClear },
                    React.createElement(Close_1.default, null)))) })));
};
exports.SearchTextInput = SearchTextInput;

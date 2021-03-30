var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import './Footer.css';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.callRender = function () {
            ReactDOM.render(React.createElement(Footer, null), document.getElementById("FooterPart"));
        };
        _this.getCompanyDetails = function () {
            Data.getData("https://dna136.sharepoint.com/sites/Test/_api/Lists/getbytitle('CompanyDetails')/items").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                var tempcompanyDetails;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tempcompanyDetails = {};
                            return [4 /*yield*/, response.value.forEach(function (obj) {
                                    tempcompanyDetails[obj.Title] = obj;
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.setState({ companyDetails: tempcompanyDetails })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            //  Data.getData(`https://dna136.sharepoint.com/sites/Test/_api/Lists/getbytitle('CompanyDetails')/items`).then(async (response)=>{
            //     await response.value.forEach(async(obj)=>{
            //         await(tempcompanyDetails[obj.Title]=obj);
            //     });
            //     await this.setState({companyDetails:tempcompanyDetails});
            // });
            // this.setState({});
        };
        _this.getNavigarionData = function () {
            Data.getData("https://" + window.location.hostname + "/sites/Test/_api/Lists/getbytitle('Navigation')/items").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                var tempnavigationData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tempnavigationData = {};
                            return [4 /*yield*/, response.value.forEach(function (obj) {
                                    (tempnavigationData[obj.Title] = obj);
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.setState({ navigationData: tempnavigationData })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            _this.setState({});
        };
        _this.state = { companyDetails: {}, navigationData: {} };
        _this.getCompanyDetails();
        _this.getNavigarionData();
        return _this;
    }
    Footer.prototype.render = function () {
        var _this = this;
        if (Object.keys(this.state.companyDetails).length <= 0 || Object.keys(this.state.navigationData).length <= 0) {
            return (React.createElement("div", null));
        }
        var linkKeyArr = Object.keys(this.state.navigationData);
        return (React.createElement("div", { className: "footer" },
            React.createElement("table", { className: "maintable" },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { className: "aboutpart" },
                            React.createElement("table", null,
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "header" },
                                            "About ",
                                            this.state.companyDetails["Name"]["Description"]))),
                                React.createElement("tbody", null,
                                    React.createElement("span", { className: "container" },
                                        React.createElement("tr", null,
                                            React.createElement("td", null, this.state.companyDetails["AboutDescription"]["Description"])))))),
                        React.createElement("td", { className: "linkpart" },
                            React.createElement("table", null,
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "header", colSpan: 3 }, "Links"))),
                                React.createElement("tbody", null,
                                    React.createElement("span", { className: "container" }, linkKeyArr.map(function (key, index) {
                                        if (index % 2 == 1) {
                                            return null;
                                        }
                                        else {
                                            return (React.createElement("tr", null,
                                                React.createElement("td", null,
                                                    React.createElement("a", { href: _this.state.navigationData[linkKeyArr[index]]["Url"] }, _this.state.navigationData[linkKeyArr[index]]["Title"])),
                                                React.createElement("td", null, index + 1 < linkKeyArr.length ? React.createElement("a", { href: _this.state.navigationData[linkKeyArr[index + 1]]["Url"] }, _this.state.navigationData[linkKeyArr[index + 1]]["Title"]) : ""),
                                                React.createElement("td", { style: { width: "40%" } })));
                                        }
                                    }))))),
                        React.createElement("td", { className: "contact" },
                            React.createElement("table", null,
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "header" }, "Contact Details"))),
                                React.createElement("tbody", null,
                                    React.createElement("span", { className: "container" },
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("i", { className: "bi bi-geo-alt box" })),
                                            React.createElement("td", null, this.state.companyDetails["Location"]["Description"])),
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("i", { className: "bi bi-telephone box" })),
                                            React.createElement("td", null, this.state.companyDetails["ContactNo"]["Description"])),
                                        React.createElement("tr", null,
                                            React.createElement("td", null,
                                                React.createElement("i", { className: "bi bi-envelope box" })),
                                            React.createElement("td", null, this.state.companyDetails["Email"]["Description"])))))),
                        React.createElement("td", { className: "logo" },
                            React.createElement("div", { style: { width: "100%", height: "80%", margin: "0px", padding: "30px 0px 0px 0px" } },
                                React.createElement("img", { src: "data:image/png;base64,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", style: { width: "150px", height: "75px", margin: "auto", padding: "0px", display: "block" } }))))))));
    };
    return Footer;
}(React.Component));
export { Footer };
//# sourceMappingURL=Footer.js.map
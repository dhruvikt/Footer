define("b193be55-a331-412f-8fd6-cc7f00ca6b32_0.0.1", ["FooterCustomizerApplicationCustomizerStrings","@microsoft/sp-application-base","@microsoft/sp-core-library","react","react-dom","@microsoft/decorators"], function(__WEBPACK_EXTERNAL_MODULE__05ig__, __WEBPACK_EXTERNAL_MODULE_GPet__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_wxtz__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "EoDb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "05ig":
/*!***************************************************************!*\
  !*** external "FooterCustomizerApplicationCustomizerStrings" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__05ig__;

/***/ }),

/***/ "40lQ":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/extensions/footerCustomizer/Footer.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".footer{width:100%;height:220px;background-color:#1a1a1a}.maintable{width:100%;height:100%;color:#f5f5f5}.aboutpart{width:25%;padding:0 10px}.header{border-bottom:2px solid orange;height:30px}.container{width:90%;height:100px;display:block;padding:5px}.aboutpart table{width:100%;padding:10px}.aboutpart table tbody tr{padding:5px;display:block;width:100%;text-align:justify}.linkpart{width:30%;padding:0 10px}.linkpart table{width:100%}.linkpart table tbody tr{height:25px;display:block}.linkpart table td{width:33%;display:inline-block}.linkpart a{color:#f5f5f5;text-decoration:none}.contact{width:25%;padding:10px}.contact table{width:100%}.contact table tbody tr{height:40px}.box{font-size:18px;padding:3px;vertical-align:middle}.logo{width:20%;height:100%}", ""]);



/***/ }),

/***/ "5yKP":
/*!******************************************************************!*\
  !*** ./lib/extensions/footerCustomizer/AppCustomizer.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./AppCustomizer.module.css */ "y3yX");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "AvuF":
/*!****************************************************!*\
  !*** ./lib/extensions/footerCustomizer/Footer.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "40lQ");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "EoDb":
/*!**********************************************************************************!*\
  !*** ./lib/extensions/footerCustomizer/FooterCustomizerApplicationCustomizer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/decorators */ "wxtz");
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var FooterCustomizerApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! FooterCustomizerApplicationCustomizerStrings */ "05ig");
/* harmony import */ var FooterCustomizerApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(FooterCustomizerApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppCustomizer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppCustomizer.module.scss */ "Lnt+");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "qTrt");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LOG_SOURCE = 'FooterCustomizerApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var FooterCustomizerApplicationCustomizer = /** @class */ (function (_super) {
    __extends(FooterCustomizerApplicationCustomizer, _super);
    function FooterCustomizerApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCustomizerApplicationCustomizer.prototype.onInit = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Log"].info(LOG_SOURCE, "Initialized " + FooterCustomizerApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__["Title"]);
        // Wait for the placeholders to be created (or handle them being changed) and then
        // render.
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        return Promise.resolve();
    };
    FooterCustomizerApplicationCustomizer.prototype._renderPlaceHolders = function () {
        console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
        console.log("Available placeholders: ", this.context.placeholderProvider.placeholderNames
            .map(function (name) { return _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__["PlaceholderName"][name]; })
            .join(", "));
        // Handling the top placeholder
        // if (!this._topPlaceholder) {
        //   this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        //     PlaceholderName.Top,
        //     { onDispose: this._onDispose }
        //   );
        //   // The extension should not assume that the expected placeholder is available.
        //   if (!this._topPlaceholder) {
        //     console.error("The expected placeholder (Top) was not found.");
        //     return;
        //   }
        //   if (this.properties) {
        //     let topString: string = this.properties.Top;
        //     if (!topString) {
        //       topString = "(Top property was not defined.)";
        //     }
        //     if (this._topPlaceholder.domElement) {
        //       this._topPlaceholder.domElement.innerHTML = `
        //       <div class="${styles.app}">
        //         <div class="${styles.top}">
        //           <div id="Header" style='width:100%'>
        //           </div>
        //         </div>
        //       </div>`;
        //     }
        //     let navBar=new NavigationBar({});
        //     navBar.callRender();
        //   }
        // }
        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__["PlaceholderName"].Bottom, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._bottomPlaceholder) {
                console.error("The expected placeholder (Bottom) was not found.");
                return;
            }
            if (this.properties) {
                if (this._bottomPlaceholder.domElement) {
                    this._bottomPlaceholder.domElement.innerHTML = "\n          <div class=\"" + _AppCustomizer_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].app + "\">\n              <div id=\"FooterPart\">\n              </div>\n          </div>";
                    var footerObj = new _Footer__WEBPACK_IMPORTED_MODULE_5__["Footer"]({});
                    footerObj.callRender();
                }
            }
        }
    };
    FooterCustomizerApplicationCustomizer.prototype._onDispose = function () {
        console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    };
    __decorate([
        _microsoft_decorators__WEBPACK_IMPORTED_MODULE_0__["override"]
    ], FooterCustomizerApplicationCustomizer.prototype, "onInit", null);
    return FooterCustomizerApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_2__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (FooterCustomizerApplicationCustomizer);


/***/ }),

/***/ "GPet":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_GPet__;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "KKE3":
/*!*************************************************!*\
  !*** ./lib/extensions/footerCustomizer/Data.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var _this = undefined;
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.getData = function (mainurl) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(mainurl, {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            Accept: "application/json; odata=nometadata",
                            "Content-Type": "application/json; odata=nometadata",
                        }
                    }).then(function (r) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, r.json()];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    Data.insertData = function (mainurl, dataObj) {
        Data.getRequestDigest((mainurl.split("/_api"))[0]).then(function (token) {
            return fetch(mainurl, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(__assign({ "__metadata": { type: "SP.Data.Navigation.ListItem" } }, dataObj)),
                headers: {
                    Accept: "application/json; odata=verbose",
                    "Content-Type": "application/json; odata=verbose",
                    "X-RequestDigest": token.FormDigestValue,
                    "X-HTTP-Method": "POST"
                }
            }).then(function (response) {
                if (response.ok) {
                    alert("Data inserted sucessfully.");
                    location.reload();
                }
            });
        });
    };
    Data.updateData = function (mainurl, dataObj) {
        Data.getRequestDigest((mainurl.split("/_api"))[0]).then(function (token) {
            return fetch(mainurl, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(__assign({ "__metadata": { type: "SP.Data.NavigationListItem" } }, dataObj)),
                headers: {
                    Accept: "application/json; odata=verbose",
                    "Content-Type": "application/json; odata=verbose",
                    "X-RequestDigest": token.FormDigestValue,
                    "IF-MATCH": "*",
                    "X-HTTP-Method": "MERGE"
                }
            }).then(function (response) {
                if (response.ok) {
                    alert("Data updated sucessfully.");
                    location.reload();
                }
            });
        });
    };
    Data.deleteData = function (mainurl) {
        Data.getRequestDigest((mainurl.split("/_api"))[0]).then(function (token) {
            return fetch(mainurl, {
                method: "POST",
                credentials: "include",
                headers: {
                    Accept: "application/json; odata=verbose",
                    "X-RequestDigest": token.FormDigestValue,
                    "IF-MATCH": "*",
                    "X-HTTP-Method": "DELETE"
                }
            }).then(function (response) {
                if (response.ok) {
                    alert("Data deleted sucessfully.");
                    location.reload();
                }
            });
        });
    };
    Data.getRequestDigest = function (mainurl) {
        return fetch(mainurl + "/_api/contextinfo", {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json; odata=nometadata",
                "Content-Type": "application/json; odata=nometadata"
            },
        }).then(function (r) { return r.json(); });
    };
    return Data;
}());
/* harmony default export */ __webpack_exports__["default"] = (Data);


/***/ }),

/***/ "Lnt+":
/*!**********************************************************************!*\
  !*** ./lib/extensions/footerCustomizer/AppCustomizer.module.scss.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./AppCustomizer.module.css */ "5yKP");
var styles = {
    app: 'app_ad8abb04',
    top: 'top_ad8abb04'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "qTrt":
/*!***************************************************!*\
  !*** ./lib/extensions/footerCustomizer/Footer.js ***!
  \***************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ "KKE3");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "AvuF");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        var _this = _super.call(this, props) || this;
        _this.callRender = function () {
            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null), document.getElementById("FooterPart"));
        };
        _this.getCompanyDetails = function () {
            _Data__WEBPACK_IMPORTED_MODULE_2__["default"].getData("https://dna136.sharepoint.com/sites/Test/_api/Lists/getbytitle('CompanyDetails')/items").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
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
            _Data__WEBPACK_IMPORTED_MODULE_2__["default"].getData("https://" + window.location.hostname + "/sites/Test/_api/Lists/getbytitle('Navigation')/items").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
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
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
        }
        var linkKeyArr = Object.keys(this.state.navigationData);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "footer" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "maintable" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "aboutpart" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "header" },
                                            "About ",
                                            this.state.companyDetails["Name"]["Description"]))),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "container" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.companyDetails["AboutDescription"]["Description"])))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "linkpart" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "header", colSpan: 3 }, "Links"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "container" }, linkKeyArr.map(function (key, index) {
                                        if (index % 2 == 1) {
                                            return null;
                                        }
                                        else {
                                            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: _this.state.navigationData[linkKeyArr[index]]["Url"] }, _this.state.navigationData[linkKeyArr[index]]["Title"])),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, index + 1 < linkKeyArr.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: _this.state.navigationData[linkKeyArr[index + 1]]["Url"] }, _this.state.navigationData[linkKeyArr[index + 1]]["Title"]) : ""),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { width: "40%" } })));
                                        }
                                    }))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "contact" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: "header" }, "Contact Details"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "container" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "bi bi-geo-alt box" })),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.companyDetails["Location"]["Description"])),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "bi bi-telephone box" })),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.companyDetails["ContactNo"]["Description"])),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "bi bi-envelope box" })),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.companyDetails["Email"]["Description"])))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "logo" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { width: "100%", height: "80%", margin: "0px", padding: "30px 0px 0px 0px" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: "data:image/png;base64,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", style: { width: "150px", height: "75px", margin: "auto", padding: "0px", display: "block" } }))))))));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));



/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "wxtz":
/*!****************************************!*\
  !*** external "@microsoft/decorators" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wxtz__;

/***/ }),

/***/ "y3yX":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/extensions/footerCustomizer/AppCustomizer.module.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Imports
exports.push([module.i, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css);", ""]);

// Module
exports.push([module.i, ".app_ad8abb04 .top_ad8abb04{height:60px;width:100%;line-height:2.5;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\"}", ""]);



/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=footer-customizer-application-customizer.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background: #f0f0f0;\n}\n\nbody {\n    margin: 10px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 5px;\n    width: calc(100% - 20px);\n}\n\nfooter a {\n    font-size: 10px;\n    color: gray;\n    text-decoration: none;\n}\n\nfooter a:hover {\n    text-decoration: underline;\n}\n\ncanvas {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: white;\n    border-radius: 4px;\n    max-width: 100%;\n}\n\nbutton {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["html {\n    background: #f0f0f0;\n}\n\nbody {\n    margin: 10px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 5px;\n    width: calc(100% - 20px);\n}\n\nfooter a {\n    font-size: 10px;\n    color: gray;\n    text-decoration: none;\n}\n\nfooter a:hover {\n    text-decoration: underline;\n}\n\ncanvas {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: white;\n    border-radius: 4px;\n    max-width: 100%;\n}\n\nbutton {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Actor.ts":
/*!**********************!*\
  !*** ./src/Actor.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorType": () => (/* binding */ ActorType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-vector */ "./node_modules/ts-vector/dist/index.js");

var ActorType;
(function (ActorType) {
    ActorType[ActorType["rock"] = 0] = "rock";
    ActorType[ActorType["paper"] = 1] = "paper";
    ActorType[ActorType["scissor"] = 2] = "scissor";
})(ActorType || (ActorType = {}));
var winMap = new Map([
    [ActorType.rock, ActorType.scissor],
    [ActorType.paper, ActorType.rock],
    [ActorType.scissor, ActorType.paper],
]);
var Actor = /** @class */ (function () {
    function Actor(type, pos) {
        this.type = type;
        this.pos = pos.copy();
        this.v = new ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    }
    Actor.prototype.compare = function (other) {
        if (this.type === other.type) {
            return 0;
        }
        if (winMap.get(this.type) === other.type) {
            return 1;
        }
        return -1;
    };
    return Actor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actor);


/***/ }),

/***/ "./src/Simulation.ts":
/*!***************************!*\
  !*** ./src/Simulation.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-vector */ "./node_modules/ts-vector/dist/index.js");
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");



var Simulation = /** @class */ (function () {
    function Simulation(width, height) {
        this.actors = [];
        this.width = width;
        this.height = height;
    }
    Simulation.prototype.reset = function () {
        this.actors.splice(0);
        for (var i = 0; i < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_COUNT; i++) {
            this.actors.push(new _Actor__WEBPACK_IMPORTED_MODULE_1__["default"](i % 3, new ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * this.width, Math.random() * this.height)));
        }
    };
    Simulation.prototype.step = function (dt) {
        var _this = this;
        this.actors.forEach(function (actor) {
            var force = new ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
            var totalWeight = 0;
            _this.actors.forEach(function (other) {
                if (actor === other)
                    return;
                var vectorTo = ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"].subtract(other.pos, actor.pos);
                var weight = 1 / vectorTo.dot(vectorTo);
                var dir = vectorTo.copy().normalizeVector();
                if (vectorTo.magnitude() < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS * 2) {
                    if (actor.compare(other) < 0) {
                        actor.type = other.type;
                    }
                    force = force.add(dir.copy().multiply(-1));
                    totalWeight += 1;
                }
                force = force.add(dir.multiply(weight).multiply(actor.compare(other)));
                totalWeight += weight;
            });
            actor.v = actor.v.add(force.divide(totalWeight).multiply(dt * 100));
            if (actor.v.magnitude() > _consts__WEBPACK_IMPORTED_MODULE_2__.MAX_V) {
                actor.v = actor.v.normalizeVector().multiply(_consts__WEBPACK_IMPORTED_MODULE_2__.MAX_V);
            }
            _this.checkBoundaries(actor, dt);
        });
    };
    Simulation.prototype.checkBoundaries = function (actor, dt) {
        actor.pos = actor.pos.add(actor.v.multiply(dt));
        if (actor.pos[0] < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS || actor.pos[0] > this.width - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS) {
            actor.v[0] = -actor.v[0];
            actor.pos[0] = Math.max(_consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, Math.min(this.width - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, actor.pos[0]));
        }
        if (actor.pos[1] < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS || actor.pos[1] > this.height - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS) {
            actor.v[1] = -actor.v[1];
            actor.pos[1] = Math.max(_consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, Math.min(this.height - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, actor.pos[1]));
        }
    };
    Simulation.prototype.checkMissingTypes = function () {
        var _loop_1 = function (type) {
            if (!this_1.actors.some(function (actor) { return actor.type === type; })) {
                this_1.actors[Math.floor(Math.random() * this_1.actors.length)].type = type;
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = [_Actor__WEBPACK_IMPORTED_MODULE_1__.ActorType.rock, _Actor__WEBPACK_IMPORTED_MODULE_1__.ActorType.paper, _Actor__WEBPACK_IMPORTED_MODULE_1__.ActorType.scissor]; _i < _a.length; _i++) {
            var type = _a[_i];
            _loop_1(type);
        }
    };
    return Simulation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simulation);


/***/ }),

/***/ "./src/consts.ts":
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTOR_COUNT": () => (/* binding */ ACTOR_COUNT),
/* harmony export */   "ACTOR_RADIUS": () => (/* binding */ ACTOR_RADIUS),
/* harmony export */   "DEFAULT_HEIGHT": () => (/* binding */ DEFAULT_HEIGHT),
/* harmony export */   "DEFAULT_WIDTH": () => (/* binding */ DEFAULT_WIDTH),
/* harmony export */   "MAX_V": () => (/* binding */ MAX_V)
/* harmony export */ });
var ACTOR_RADIUS = 10;
var MAX_V = 50;
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 500;
var ACTOR_COUNT = 50;


/***/ }),

/***/ "./node_modules/ts-vector/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ts-vector/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var vector_1 = __webpack_require__(/*! ./vector */ "./node_modules/ts-vector/dist/vector.js");
exports.Vector = vector_1.default;
var value_array_1 = __webpack_require__(/*! ./value-array */ "./node_modules/ts-vector/dist/value-array.js");
exports.ValueArray = value_array_1.default;
const vector_2 = __webpack_require__(/*! ./vector */ "./node_modules/ts-vector/dist/vector.js");
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = vector_2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/utils/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/ts-vector/dist/utils/helpers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


function forEachNonMissing(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (value !== undefined && value !== null && !Number.isNaN(value)) {
            if (typeof value !== 'number')
                throwNotNumerError(value, i);
            callback.call(null, value, i);
        }
    }
}
exports.forEachNonMissing = forEachNonMissing;
function forEachNumber(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let value = getNumberValue(array, i);
        callback.call(null, value, i);
    }
}
exports.forEachNumber = forEachNumber;
function forEachNumberPair(v1, v2, callback) {
    checkLength(v1, v2);
    for (let i = 0; i < v1.length; i++) {
        let x1 = getNumberValue(v1, i);
        let x2 = getNumberValue(v2, i);
        callback.call(null, x1, x2, i);
    }
}
exports.forEachNumberPair = forEachNumberPair;
function getNumberValue(array, index) {
    let value = array[index];
    if (value === null) {
        value = undefined;
    }
    if (value !== undefined && typeof value !== 'number')
        throwNotNumerError(value, index);
    return value;
}
exports.getNumberValue = getNumberValue;
function throwNotNumerError(value, index) {
    throw new Error('Vector contains non-numeric value ' + value + ' at index ' + index + ' of type ' + typeof value);
}
function checkLength(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error('vector size difference in vector operation:' + v1.length + ', ' + v2.length);
    }
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/utils/operations.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-vector/dist/utils/operations.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.add = (x, y) => x + y;
exports.subtract = (x, y) => x - y;
exports.multiply = (x, y) => x * y;
exports.divide = (x, y) => x / y;
exports.pow = (x, y) => Math.pow(x, y);
exports.and = (x, y) => x && y;
exports.or = (x, y) => x || y;
exports.moreThan = (x, y) => x > y ? 1 : 0;
exports.lessThan = (x, y) => x < y ? 1 : 0;
exports.moreOrEqualThan = (x, y) => x >= y ? 1 : 0;
exports.lessOrEqualThan = (x, y) => x <= y ? 1 : 0;
exports.equal = (x, y) => x === y ? 1 : 0;
exports.notEqual = (x, y) => x !== y ? 1 : 0;
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/value-array.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-vector/dist/value-array.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const indexing_1 = __webpack_require__(/*! ./value-array/indexing */ "./node_modules/ts-vector/dist/value-array/indexing.js");
const counts_1 = __webpack_require__(/*! ./value-array/counts */ "./node_modules/ts-vector/dist/value-array/counts.js");
const basic_1 = __webpack_require__(/*! ./value-array/basic */ "./node_modules/ts-vector/dist/value-array/basic.js");
const padding_1 = __webpack_require__(/*! ./value-array/padding */ "./node_modules/ts-vector/dist/value-array/padding.js");
class ValueArray extends Array {
    get first() { return this.length > 0 ? this[0] : undefined; }
    get last() { return this.length > 0 ? this[this.length - 1] : undefined; }
    head(n) { return this.slice(0, n || 10); }
    tail(n) { return this.slice(-(n || 10)); }
    range(start, end, step) { return indexing_1.range(this, start, end, step); }
    permute(indexes) { return indexing_1.permute(this, indexes); }
    shuffle() { return basic_1.shuffle(this); }
    transform(callback) { return basic_1.transform(this, callback); }
    ;
    each(callback) { return basic_1.each(this, callback); }
    fillBy(fn) { return basic_1.fillBy(this, fn); }
    padStart(length, value) { return padding_1.padStart(this, length, value); }
    padEnd(length, value) { return padding_1.padEnd(this, length, value); }
    equals(a) { return basic_1.equals(this, a); }
    copy() { return basic_1.copy(this); }
    toSet() { return new Set(this); }
    unique() { return counts_1.unique(this); }
    counts() { return counts_1.counts(this); }
    count(param) {
        return counts_1.count(this, param);
    }
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = ValueArray;
//# sourceMappingURL=value-array.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/value-array/basic.js":
/*!**********************************************************!*\
  !*** ./node_modules/ts-vector/dist/value-array/basic.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


function equals(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.equals = equals;
function copy(v) {
    let result = v.constructor.from({ length: v.length });
    for (let i = 0; i < v.length; i++) {
        result[i] = v[i];
    }
    return result;
}
exports.copy = copy;
function shuffle(v) {
    for (let i = v.length; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * i);
        let x = v[i - 1];
        v[i - 1] = v[j];
        v[j] = x;
    }
    return v;
}
exports.shuffle = shuffle;
function transform(v, callback) {
    for (let i = 0; i < v.length; i++) {
        v[i] = callback.call(null, v[i], i, v);
    }
    return v;
}
exports.transform = transform;
function each(v, callback) {
    for (let i = 0; i < v.length; i++) {
        callback.call(null, v[i], i, v);
    }
    return v;
}
exports.each = each;
function fillBy(v, fn) {
    for (let i = 0; i < v.length; i++) {
        v[i] = fn.call(null, i, v);
    }
    return v;
}
exports.fillBy = fillBy;
//# sourceMappingURL=basic.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/value-array/counts.js":
/*!***********************************************************!*\
  !*** ./node_modules/ts-vector/dist/value-array/counts.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


function count(v, param) {
    let count = 0;
    for (let i = 0; i < v.length; i++) {
        if (typeof param === 'function') {
            if (param.call(null, v[i], i, v))
                count++;
        }
        else if (param === v[i] || (Number.isNaN(param) && Number.isNaN(v[i]))) {
            count++;
        }
    }
    return count;
}
exports.count = count;
function counts(v) {
    let counts = new Map();
    for (let i = 0; i < v.length; i++) {
        let x = v[i];
        counts.set(x, (counts.get(x) || 0) + 1);
    }
    return counts;
}
exports.counts = counts;
function unique(v) {
    let set = new Set();
    let result = new v.constructor();
    for (let i = 0; i < v.length; i++) {
        let x = v[i];
        if (!set.has(x)) {
            result.push(x);
            set.add(x);
        }
    }
    return result;
}
exports.unique = unique;
//# sourceMappingURL=counts.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/value-array/indexing.js":
/*!*************************************************************!*\
  !*** ./node_modules/ts-vector/dist/value-array/indexing.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


function range(v, start, end, step) {
    step = step == null ? 1 : step;
    start = start == null ? 0 : (start < 0 ? v.length + start : start);
    end = end == null ? v.length : (end < 0 ? v.length + end : end);
    let result = v.constructor.from({ length: Math.ceil((end - start) / step) });
    let j = 0;
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            result[j] = v[i];
            j++;
        }
    }
    else {
        for (let i = end - 1; i >= start; i += step) {
            result[j] = v[i];
            j++;
        }
    }
    return result;
}
exports.range = range;
function permute(v, indexes) {
    let result = v.constructor.from({ length: indexes.length });
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] >= 0) {
            result[i] = v[indexes[i]];
        }
        else {
            result[i] = v[v.length + indexes[i]];
        }
    }
    return result;
}
exports.permute = permute;
//# sourceMappingURL=indexing.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/value-array/padding.js":
/*!************************************************************!*\
  !*** ./node_modules/ts-vector/dist/value-array/padding.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


function padStart(v, length, value) {
    while (v.length < length) {
        v.unshift(value);
    }
    return v;
}
exports.padStart = padStart;
function padEnd(v, length, value) {
    while (v.length < length) {
        v.push(value);
    }
    return v;
}
exports.padEnd = padEnd;
//# sourceMappingURL=padding.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector.js":
/*!***********************************************!*\
  !*** ./node_modules/ts-vector/dist/vector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const value_array_1 = __webpack_require__(/*! ./value-array */ "./node_modules/ts-vector/dist/value-array.js");
const statistics_1 = __webpack_require__(/*! ./vector/statistics */ "./node_modules/ts-vector/dist/vector/statistics.js");
const math_1 = __webpack_require__(/*! ./vector/math */ "./node_modules/ts-vector/dist/vector/math.js");
const operations_1 = __webpack_require__(/*! ./utils/operations */ "./node_modules/ts-vector/dist/utils/operations.js");
const operations_2 = __webpack_require__(/*! ./vector/operations */ "./node_modules/ts-vector/dist/vector/operations.js");
const dot_product_1 = __webpack_require__(/*! ./vector/dot-product */ "./node_modules/ts-vector/dist/vector/dot-product.js");
const quantiles_1 = __webpack_require__(/*! ./vector/quantiles */ "./node_modules/ts-vector/dist/vector/quantiles.js");
const histogram_1 = __webpack_require__(/*! ./vector/histogram */ "./node_modules/ts-vector/dist/vector/histogram.js");
const cumulative_1 = __webpack_require__(/*! ./vector/cumulative */ "./node_modules/ts-vector/dist/vector/cumulative.js");
const normalize_1 = __webpack_require__(/*! ./vector/normalize */ "./node_modules/ts-vector/dist/vector/normalize.js");
const stats_1 = __webpack_require__(/*! ./vector/stats */ "./node_modules/ts-vector/dist/vector/stats.js");
const range_1 = __webpack_require__(/*! ./vector/range */ "./node_modules/ts-vector/dist/vector/range.js");
class Vector extends value_array_1.default {
    min() { return statistics_1.min(this); }
    max() { return statistics_1.max(this); }
    extent() { return statistics_1.extent(this); }
    mean() { return statistics_1.mean(this); }
    variance() { return statistics_1.variance(this); }
    std() { return statistics_1.std(this); }
    mad() { return statistics_1.mad(this); }
    mode() { return statistics_1.mode(this); }
    argmin() { return statistics_1.argmin(this); }
    argmax() { return statistics_1.argmax(this); }
    median() { return quantiles_1.median(this); }
    quantiles(q) { return quantiles_1.quantiles(this, q); }
    histogram(options) { return histogram_1.histogram(this, options); }
    normalizeStats() { normalize_1.normalizeStats(this); return this; }
    normalizeProba() { normalize_1.normalizeProba(this); return this; }
    normalizeVector() { normalize_1.normalizeVector(this); return this; }
    stats() { return stats_1.stats(this); }
    sum() { return math_1.sum(this); }
    sumOfSquares() { return math_1.sumOfSquares(this); }
    magnitude() { return math_1.magnitude(this); }
    product() { return math_1.product(this); }
    cumsum() { return cumulative_1.cumsum(this); }
    diff() { return cumulative_1.diff(this); }
    sort() { return super.sort((a, b) => a - b); }
    sortDesc() { return super.sort((a, b) => b - a); }
    some(callback) {
        return callback ? super.some(callback) : super.some(x => !!x);
    }
    every(callback) {
        return callback ? super.every(callback) : super.every(x => !!x);
    }
    add(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.add);
    }
    addSelf(param) {
        return operations_2.vectorOperation(this, param, true, operations_1.add);
    }
    subtract(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.subtract);
    }
    subtractSelf(param) {
        return operations_2.vectorOperation(this, param, true, operations_1.subtract);
    }
    multiply(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.multiply);
    }
    multiplySelf(param) {
        return operations_2.vectorOperation(this, param, true, operations_1.multiply);
    }
    divide(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.divide);
    }
    divideSelf(param) {
        return operations_2.vectorOperation(this, param, true, operations_1.divide);
    }
    pow(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.pow);
    }
    powSelf(param) {
        return operations_2.vectorOperation(this, param, true, operations_1.pow);
    }
    and(v) { return operations_2.vectorOperation(this, v, false, operations_1.and); }
    or(v) { return operations_2.vectorOperation(this, v, false, operations_1.or); }
    lessThan(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.lessThan);
    }
    moreThan(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.moreThan);
    }
    lessOrEqualThan(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.lessOrEqualThan);
    }
    moreOrEqualThan(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.moreOrEqualThan);
    }
    equal(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.equal);
    }
    notEqual(param) {
        return operations_2.vectorOperation(this, param, false, operations_1.notEqual);
    }
    dot(v) { return dot_product_1.dotProduct(this, v); }
    static add(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.add);
    }
    static subtract(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.subtract);
    }
    static multiply(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.multiply);
    }
    static divide(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.divide);
    }
    static pow(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.pow);
    }
    static and(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.and);
    }
    static or(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.or);
    }
    static lessThan(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.lessThan);
    }
    static moreThan(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.moreThan);
    }
    static lessOrEqualThan(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.lessOrEqualThan);
    }
    static moreOrEqualThan(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.moreOrEqualThan);
    }
    static equal(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.equal);
    }
    static notEqual(v1, v2) {
        return operations_2.vectorOperation2(v1, v2, this, operations_1.notEqual);
    }
    static range(start, stop, step) {
        return range_1.range(start, stop, step, this);
    }
    static linspace(start, stop, num, excludeEnd) {
        return range_1.linspace(start, stop, num, excludeEnd, this);
    }
    static logspace(start, stop, num, excludeEnd, base) {
        return range_1.logspace(start, stop, num, excludeEnd, base, this);
    }
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = Vector;
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/cumulative.js":
/*!**********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/cumulative.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function _cumsum(v, out) {
    helpers_1.forEachNumber(v, (x, i) => {
        out[i] = x + (i == 0 ? 0 : out[i - 1]);
    });
}
function _diff(v, out) {
    let prev = helpers_1.getNumberValue(v, 0);
    for (let i = 1; i < v.length; i++) {
        let x = helpers_1.getNumberValue(v, i);
        out[i - 1] = x - prev;
        prev = x;
    }
}
function cumsum(v) {
    let out = v.constructor.from({ length: v.length });
    _cumsum(v, out);
    return out;
}
exports.cumsum = cumsum;
function diff(v) {
    let out = v.constructor.from({ length: v.length - 1 });
    _diff(v, out);
    return out;
}
exports.diff = diff;
//# sourceMappingURL=cumulative.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/dot-product.js":
/*!***********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/dot-product.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function dotProduct(v1, v2) {
    let y = 0;
    helpers_1.forEachNumberPair(v1, v2, (x1, x2) => {
        y += x1 * x2;
    });
    return y;
}
exports.dotProduct = dotProduct;
//# sourceMappingURL=dot-product.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/histogram.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/histogram.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const statistics_1 = __webpack_require__(/*! ./statistics */ "./node_modules/ts-vector/dist/vector/statistics.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function histogram(v, options) {
    options = options || {};
    let min = options.min;
    let max = options.max;
    if (min == null || max == null) {
        let ext = statistics_1.extent(v);
        if (min == null)
            min = ext[0];
        if (max == null)
            max = ext[1];
    }
    let bins = options.bins;
    if (options.binWidth) {
        bins = Math.ceil((max - min) / options.binWidth);
    }
    if (bins == null) {
        bins = Math.floor(Math.sqrt(v.length));
    }
    let dx = (max - min) / bins;
    let x = v.constructor.from({ length: bins });
    let y = v.constructor.from({ length: bins });
    for (let i = 0; i < bins; i++) {
        x[i] = min + i * dx;
        y[i] = 0;
    }
    let count = 0;
    helpers_1.forEachNonMissing(v, vi => {
        if (vi >= min && vi < max) {
            y[Math.floor((vi - min) / dx)]++;
        }
        else if (vi === max) {
            y[y.length - 1]++;
        }
        count++;
    });
    if (options.probability) {
        for (let i = 0; i < y.length; i++) {
            y[i] /= count;
        }
    }
    return { x: x, y: y, dx: dx };
}
exports.histogram = histogram;
//# sourceMappingURL=histogram.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/math.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/math.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function sum(array) {
    let sum = 0;
    helpers_1.forEachNumber(array, x => {
        sum += x;
    });
    return sum;
}
exports.sum = sum;
function sumOfSquares(array) {
    let sum = 0;
    helpers_1.forEachNumber(array, x => {
        sum += x * x;
    });
    return sum;
}
exports.sumOfSquares = sumOfSquares;
function magnitude(array) {
    return Math.sqrt(sumOfSquares(array));
}
exports.magnitude = magnitude;
function product(array) {
    let product = 0;
    helpers_1.forEachNumber(array, x => {
        product *= x;
    });
    return product;
}
exports.product = product;
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/normalize.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/normalize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
const math_1 = __webpack_require__(/*! ./math */ "./node_modules/ts-vector/dist/vector/math.js");
const statistics_1 = __webpack_require__(/*! ./statistics */ "./node_modules/ts-vector/dist/vector/statistics.js");
function normalizeProba(v) {
    let s = math_1.sum(v);
    helpers_1.forEachNumber(v, (x, i) => {
        v[i] /= s;
    });
}
exports.normalizeProba = normalizeProba;
function normalizeVector(v) {
    let s = math_1.magnitude(v);
    helpers_1.forEachNumber(v, (x, i) => {
        v[i] /= s;
    });
}
exports.normalizeVector = normalizeVector;
function normalizeStats(v) {
    let m = statistics_1.mean(v);
    let o = statistics_1.std(v);
    helpers_1.forEachNumber(v, (x, i) => {
        v[i] = (x - m) / o;
    });
}
exports.normalizeStats = normalizeStats;
//# sourceMappingURL=normalize.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/operations.js":
/*!**********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/operations.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function scalarOperation(v, s, output, operation) {
    helpers_1.forEachNumber(v, (x, i) => {
        output[i] = operation(x, s);
    });
}
function scalarOperation2(s, v, output, operation) {
    helpers_1.forEachNumber(v, (x, i) => {
        output[i] = operation(s, x);
    });
}
function binaryOperation(v1, v2, output, operation) {
    helpers_1.forEachNumberPair(v1, v2, (x1, x2, i) => {
        output[i] = operation(x1, x2);
    });
}
function vectorOperation(v, param, modifySelf, operation) {
    let output = modifySelf ? v : v.constructor.from({ length: v.length });
    if (typeof param === 'number') {
        scalarOperation(v, param, output, operation);
    }
    else if (param.length !== undefined) {
        binaryOperation(v, param, output, operation);
    }
    else {
        throw new Error('Can\'t perform vector operation on object with invalid type:' + param + ', ' + typeof param);
    }
    return output;
}
exports.vectorOperation = vectorOperation;
function vectorOperation2(v1, v2, type, operation) {
    if (typeof v1 === 'number' && typeof v2 === 'number') {
        return operation(v1, v2);
    }
    let output = type.from({ length: v1.length || v2.length });
    if (typeof v1 === 'number' && v2.length !== undefined) {
        scalarOperation2(v1, v2, output, operation);
    }
    else if (v1.length !== undefined && typeof v2 === 'number') {
        scalarOperation(v1, v2, output, operation);
    }
    else if (v1.length !== undefined && v2.length !== undefined) {
        binaryOperation(v1, v2, output, operation);
    }
    else {
        throw new Error('Can\'t perform vector operation on objects with invalid type: ' + typeof v1 + ', ' + typeof v2);
    }
    return output;
}
exports.vectorOperation2 = vectorOperation2;
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/quantiles.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/quantiles.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function quantile(v, p) {
    let h = (v.length - 1) * p + 1;
    let h_ = Math.floor(h);
    let s = h - h_;
    let x = v[h_ - 1];
    return s ? x + s * (v[h_] - x) : x;
}
function getSortedNumbers(v) {
    let values = [];
    helpers_1.forEachNonMissing(v, x => { values.push(x); });
    return values.sort((a, b) => a - b);
}
function quantiles(v, q) {
    let sorted = getSortedNumbers(v);
    let result = v.constructor.from({ length: q + 1 });
    for (let i = 0; i <= q; i++) {
        result[i] = quantile(sorted, i / q);
    }
    return result;
}
exports.quantiles = quantiles;
function median(v) {
    if (v.length === 0)
        return;
    let sorted = getSortedNumbers(v);
    return quantile(sorted, 0.5);
}
exports.median = median;
//# sourceMappingURL=quantiles.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/range.js":
/*!*****************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/range.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


function range(start, stop, step, type) {
    if (stop == null && step == null) {
        stop = start;
        start = null;
    }
    start = start == null ? 0 : start;
    step = step == null ? (start <= stop ? 1 : -1) : step;
    if ((stop - start) / step < 0)
        throw new Error('Infinite loop');
    let v = type.from({ length: Math.ceil((stop - start) / step) });
    let x;
    let i = 0;
    if (start < stop) {
        while ((x = start + i * step) < stop) {
            v[i++] = x;
        }
    }
    else {
        while ((x = start + i * step) > stop) {
            v[i++] = x;
        }
    }
    return v;
}
exports.range = range;
function linspace(start, stop, num, excludeEnd, type) {
    num = num == null ? 100 : num;
    let step = (stop - start) / (excludeEnd ? num : num - 1);
    let v = type.from({ length: num });
    for (let i = 0; i < num; i++) {
        v[i] = start + i * step;
    }
    return v;
}
exports.linspace = linspace;
function logspace(start, stop, num, excludeEnd, base, type) {
    num = num == null ? 100 : num;
    base = base == null ? 10 : base;
    let step = (stop - start) / (excludeEnd ? num : num - 1);
    let v = type.from({ length: num });
    for (let i = 0; i < num; i++) {
        v[i] = Math.pow(base, start + i * step);
    }
    return v;
}
exports.logspace = logspace;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/statistics.js":
/*!**********************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/statistics.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./node_modules/ts-vector/dist/utils/helpers.js");
function min(array) {
    let min;
    helpers_1.forEachNonMissing(array, x => {
        if (min === undefined || x < min) {
            min = x;
        }
    });
    return min;
}
exports.min = min;
function argmin(array) {
    let min;
    let index;
    helpers_1.forEachNonMissing(array, (x, i) => {
        if (min === undefined || x < min) {
            min = x;
            index = i;
        }
    });
    return index;
}
exports.argmin = argmin;
function max(array) {
    let max;
    helpers_1.forEachNonMissing(array, x => {
        if (max === undefined || x > max) {
            max = x;
        }
    });
    return max;
}
exports.max = max;
function argmax(array) {
    let max;
    let index;
    helpers_1.forEachNonMissing(array, (x, i) => {
        if (max === undefined || x > max) {
            max = x;
            index = i;
        }
    });
    return index;
}
exports.argmax = argmax;
function extent(array) {
    let min;
    let max;
    helpers_1.forEachNonMissing(array, x => {
        if (max === undefined || x > max) {
            max = x;
        }
        if (min === undefined || x < min) {
            min = x;
        }
    });
    return [min, max];
}
exports.extent = extent;
function mean(array) {
    let sum = 0;
    let n = 0;
    helpers_1.forEachNonMissing(array, x => {
        sum += x;
        n++;
    });
    return n === 0 ? undefined : sum / n;
}
exports.mean = mean;
function variance(array) {
    let n = 0;
    let mean = 0;
    let m2 = 0;
    helpers_1.forEachNonMissing(array, x => {
        n++;
        let delta = x - mean;
        mean += delta / n;
        m2 += delta * (x - mean);
    });
    return n > 1 ? (m2 / (n - 1)) : undefined;
}
exports.variance = variance;
function std(array) {
    let squared = variance(array);
    return squared == null ? squared : Math.sqrt(squared);
}
exports.std = std;
function mad(array) {
    let avg = mean(array);
    let sum = 0;
    let n = 0;
    helpers_1.forEachNonMissing(array, x => {
        sum += Math.abs(avg - x);
        n++;
    });
    return n === 0 ? undefined : sum / n;
}
exports.mad = mad;
function mode(array) {
    let counts = {};
    helpers_1.forEachNonMissing(array, x => {
        if (!counts[x]) {
            counts[x] = 1;
        }
        else {
            counts[x]++;
        }
    });
    let maxValue;
    let maxCount = 0;
    Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            maxValue = key;
        }
    });
    return maxValue ? Number(maxValue) : undefined;
}
exports.mode = mode;
//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ "./node_modules/ts-vector/dist/vector/stats.js":
/*!*****************************************************!*\
  !*** ./node_modules/ts-vector/dist/vector/stats.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const statistics_1 = __webpack_require__(/*! ./statistics */ "./node_modules/ts-vector/dist/vector/statistics.js");
const math_1 = __webpack_require__(/*! ./math */ "./node_modules/ts-vector/dist/vector/math.js");
const quantiles_1 = __webpack_require__(/*! ./quantiles */ "./node_modules/ts-vector/dist/vector/quantiles.js");
function stats(v) {
    let invalids = countInvalid(v);
    return {
        length: v.length,
        invalidCount: invalids.count,
        invalidCounts: invalids.counts,
        min: statistics_1.min(v),
        max: statistics_1.max(v),
        mean: statistics_1.mean(v),
        median: quantiles_1.median(v),
        mode: statistics_1.mode(v),
        std: statistics_1.std(v),
        variance: statistics_1.variance(v),
        mad: statistics_1.mad(v),
        deciles: quantiles_1.quantiles(v, 10),
        sum: math_1.sum(v)
    };
}
exports.stats = stats;
function countInvalid(v) {
    let counts = {
        undefined: 0,
        'null': 0,
        NaN: 0,
        Infinity: 0,
        '-Infinity': 0
    };
    let count = 0;
    for (let i = 0; i < v.length; i++) {
        if (counts[v[i]] !== undefined) {
            counts[v[i]]++;
            count++;
        }
    }
    return { counts: counts, count: count };
}
//# sourceMappingURL=stats.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Simulation */ "./src/Simulation.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




var icons = new Map([
    [_Actor__WEBPACK_IMPORTED_MODULE_0__.ActorType.rock, getImage('rock')],
    [_Actor__WEBPACK_IMPORTED_MODULE_0__.ActorType.paper, getImage('paper')],
    [_Actor__WEBPACK_IMPORTED_MODULE_0__.ActorType.scissor, getImage('scissor')]
]);
var canvas;
var simulation = new _Simulation__WEBPACK_IMPORTED_MODULE_2__["default"](_consts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_WIDTH, _consts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_HEIGHT);
function init() {
    canvas = document.querySelector('canvas');
    setSize();
    var resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', function () { return simulation.reset(); });
    window.addEventListener('resize', setSize);
    simulation.reset();
}
function setSize() {
    var newWidth = window.innerWidth - 20;
    var newHeight = window.innerHeight - 30 - document.querySelector('footer').clientHeight - document.querySelector('#reset-button').clientHeight;
    canvas.width = newWidth;
    canvas.height = newHeight;
    simulation.width = newWidth;
    simulation.height = newHeight;
}
function getImage(icon) {
    var image = new Image();
    image.src = "".concat(icon, ".png");
    return image;
}
var lastTimestamp = null;
function animationLoop(timestamp) {
    var context = canvas.getContext('2d');
    if (lastTimestamp !== null) {
        simulation.step((timestamp - lastTimestamp) * 0.001);
    }
    lastTimestamp = timestamp;
    context.clearRect(0, 0, canvas.width, canvas.height);
    simulation.actors.forEach(function (actor) {
        context.drawImage(icons.get(actor.type), actor.pos[0] - _consts__WEBPACK_IMPORTED_MODULE_1__.ACTOR_RADIUS, actor.pos[1] - _consts__WEBPACK_IMPORTED_MODULE_1__.ACTOR_RADIUS, _consts__WEBPACK_IMPORTED_MODULE_1__.ACTOR_RADIUS * 2, _consts__WEBPACK_IMPORTED_MODULE_1__.ACTOR_RADIUS * 2);
    });
    requestAnimationFrame(animationLoop);
}
setInterval(function () { return simulation.checkMissingTypes(); }, 1000);
init();
requestAnimationFrame(animationLoop);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUUxQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxpREFBWSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsaURBQVksRUFBRSxpREFBWSxHQUFHLENBQUMsRUFBRSxpREFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNJLENBQUMsQ0FBQyxDQUFDO0lBRUgscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFdBQVcsQ0FBQyxjQUFNLGlCQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBOUIsQ0FBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV4RCxJQUFJLEVBQUUsQ0FBQztBQUNQLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL0FjdG9yLnRzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvU2ltdWxhdGlvbi50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3V0aWxzL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2Jhc2ljLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvY291bnRzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvaW5kZXhpbmcuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS9wYWRkaW5nLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2N1bXVsYXRpdmUuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvZG90LXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvaGlzdG9ncmFtLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL21hdGguanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivbm9ybWFsaXplLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvcXVhbnRpbGVzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3JhbmdlLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivc3RhdHMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVmVjdG9yIGZyb20gJ3RzLXZlY3Rvcic7XG5cbmV4cG9ydCBlbnVtIEFjdG9yVHlwZSB7XG4gICAgcm9jayxcbiAgICBwYXBlcixcbiAgICBzY2lzc29yXG59XG5cbmNvbnN0IHdpbk1hcCA9IG5ldyBNYXAoW1xuICAgIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnNjaXNzb3JdLFxuICAgIFtBY3RvclR5cGUucGFwZXIsIEFjdG9yVHlwZS5yb2NrXSxcbiAgICBbQWN0b3JUeXBlLnNjaXNzb3IsIEFjdG9yVHlwZS5wYXBlcl0sXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciB7XG4gICAgdHlwZTogQWN0b3JUeXBlO1xuICAgIHBvczogVmVjdG9yO1xuICAgIHY6IFZlY3RvcjtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IEFjdG9yVHlwZSwgcG9zOiBWZWN0b3IpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3MuY29weSgpO1xuICAgICAgICB0aGlzLnYgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIGNvbXBhcmUob3RoZXI6IEFjdG9yKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbk1hcC5nZXQodGhpcy50eXBlKSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCJ0cy12ZWN0b3JcIjtcbmltcG9ydCBBY3RvciwgeyBBY3RvclR5cGUgfSBmcm9tIFwiLi9BY3RvclwiO1xuaW1wb3J0IHsgQUNUT1JfQ09VTlQsIEFDVE9SX1JBRElVUywgTUFYX1YgfSBmcm9tIFwiLi9jb25zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgYWN0b3JzOiBBY3RvcltdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdG9ycy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUNUT1JfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hY3RvcnMucHVzaChuZXcgQWN0b3IoXG4gICAgICAgICAgICAgICAgaSAlIDMsXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hY3RvcnMuZm9yRWFjaCgoYWN0b3IpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JjZSA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKChvdGhlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3RvciA9PT0gb3RoZXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3JUbyA9IFZlY3Rvci5zdWJ0cmFjdChvdGhlci5wb3MsIGFjdG9yLnBvcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gMSAvIHZlY3RvclRvLmRvdCh2ZWN0b3JUbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gdmVjdG9yVG8uY29weSgpLm5vcm1hbGl6ZVZlY3RvcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZlY3RvclRvLm1hZ25pdHVkZSgpIDwgQUNUT1JfUkFESVVTICogMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0b3IuY29tcGFyZShvdGhlcikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rvci50eXBlID0gb3RoZXIudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlID0gZm9yY2UuYWRkKGRpci5jb3B5KCkubXVsdGlwbHkoLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxXZWlnaHQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JjZSA9IGZvcmNlLmFkZChkaXIubXVsdGlwbHkod2VpZ2h0KS5tdWx0aXBseShhY3Rvci5jb21wYXJlKG90aGVyKSkpO1xuICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IHdlaWdodDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhY3Rvci52ID0gYWN0b3Iudi5hZGQoZm9yY2UuZGl2aWRlKHRvdGFsV2VpZ2h0KS5tdWx0aXBseShkdCAqIDEwMCkpO1xuICAgICAgICAgICAgaWYgKGFjdG9yLnYubWFnbml0dWRlKCkgPiBNQVhfVikge1xuICAgICAgICAgICAgICAgIGFjdG9yLnYgPSBhY3Rvci52Lm5vcm1hbGl6ZVZlY3RvcigpLm11bHRpcGx5KE1BWF9WKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3VuZGFyaWVzKGFjdG9yLCBkdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tCb3VuZGFyaWVzKGFjdG9yOiBBY3RvciwgZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBhY3Rvci5wb3MgPSBhY3Rvci5wb3MuYWRkKGFjdG9yLnYubXVsdGlwbHkoZHQpKTtcbiAgICAgICAgaWYgKGFjdG9yLnBvc1swXSA8IEFDVE9SX1JBRElVUyB8fCBhY3Rvci5wb3NbMF0gPiB0aGlzLndpZHRoIC0gQUNUT1JfUkFESVVTKSB7XG4gICAgICAgICAgICBhY3Rvci52WzBdID0gLWFjdG9yLnZbMF07XG4gICAgICAgICAgICBhY3Rvci5wb3NbMF0gPSBNYXRoLm1heChBQ1RPUl9SQURJVVMsIE1hdGgubWluKHRoaXMud2lkdGggLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1swXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMV0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzFdID4gdGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMpIHtcbiAgICAgICAgICAgIGFjdG9yLnZbMV0gPSAtYWN0b3IudlsxXTtcbiAgICAgICAgICAgIGFjdG9yLnBvc1sxXSA9IE1hdGgubWF4KEFDVE9SX1JBRElVUywgTWF0aC5taW4odGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1sxXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tNaXNzaW5nVHlwZXMoKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBbQWN0b3JUeXBlLnJvY2ssIEFjdG9yVHlwZS5wYXBlciwgQWN0b3JUeXBlLnNjaXNzb3JdKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0b3JzLnNvbWUoKGFjdG9yKSA9PiBhY3Rvci50eXBlID09PSB0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYWN0b3JzLmxlbmd0aCldLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEFDVE9SX1JBRElVUyA9IDEwO1xuZXhwb3J0IGNvbnN0IE1BWF9WID0gNTA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9XSURUSCA9IDUwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hFSUdIVCA9IDUwMDtcbmV4cG9ydCBjb25zdCBBQ1RPUl9DT1VOVCA9IDUwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdmVjdG9yXzEgPSByZXF1aXJlKCcuL3ZlY3RvcicpO1xuZXhwb3J0cy5WZWN0b3IgPSB2ZWN0b3JfMS5kZWZhdWx0O1xudmFyIHZhbHVlX2FycmF5XzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5Jyk7XG5leHBvcnRzLlZhbHVlQXJyYXkgPSB2YWx1ZV9hcnJheV8xLmRlZmF1bHQ7XG5jb25zdCB2ZWN0b3JfMiA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2ZWN0b3JfMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBmb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGFycmF5W2ldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgdGhyb3dOb3ROdW1lckVycm9yKHZhbHVlLCBpKTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgdmFsdWUsIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoTm9uTWlzc2luZyA9IGZvckVhY2hOb25NaXNzaW5nO1xuZnVuY3Rpb24gZm9yRWFjaE51bWJlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldE51bWJlclZhbHVlKGFycmF5LCBpKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2YWx1ZSwgaSk7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoTnVtYmVyID0gZm9yRWFjaE51bWJlcjtcbmZ1bmN0aW9uIGZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgY2FsbGJhY2spIHtcbiAgICBjaGVja0xlbmd0aCh2MSwgdjIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdjEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHgxID0gZ2V0TnVtYmVyVmFsdWUodjEsIGkpO1xuICAgICAgICBsZXQgeDIgPSBnZXROdW1iZXJWYWx1ZSh2MiwgaSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgeDEsIHgyLCBpKTtcbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOdW1iZXJQYWlyID0gZm9yRWFjaE51bWJlclBhaXI7XG5mdW5jdGlvbiBnZXROdW1iZXJWYWx1ZShhcnJheSwgaW5kZXgpIHtcbiAgICBsZXQgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuICAgICAgICB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGluZGV4KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmdldE51bWJlclZhbHVlID0gZ2V0TnVtYmVyVmFsdWU7XG5mdW5jdGlvbiB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGluZGV4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWZWN0b3IgY29udGFpbnMgbm9uLW51bWVyaWMgdmFsdWUgJyArIHZhbHVlICsgJyBhdCBpbmRleCAnICsgaW5kZXggKyAnIG9mIHR5cGUgJyArIHR5cGVvZiB2YWx1ZSk7XG59XG5mdW5jdGlvbiBjaGVja0xlbmd0aCh2MSwgdjIpIHtcbiAgICBpZiAodjEubGVuZ3RoICE9PSB2Mi5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWN0b3Igc2l6ZSBkaWZmZXJlbmNlIGluIHZlY3RvciBvcGVyYXRpb246JyArIHYxLmxlbmd0aCArICcsICcgKyB2Mi5sZW5ndGgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmFkZCA9ICh4LCB5KSA9PiB4ICsgeTtcbmV4cG9ydHMuc3VidHJhY3QgPSAoeCwgeSkgPT4geCAtIHk7XG5leHBvcnRzLm11bHRpcGx5ID0gKHgsIHkpID0+IHggKiB5O1xuZXhwb3J0cy5kaXZpZGUgPSAoeCwgeSkgPT4geCAvIHk7XG5leHBvcnRzLnBvdyA9ICh4LCB5KSA9PiBNYXRoLnBvdyh4LCB5KTtcbmV4cG9ydHMuYW5kID0gKHgsIHkpID0+IHggJiYgeTtcbmV4cG9ydHMub3IgPSAoeCwgeSkgPT4geCB8fCB5O1xuZXhwb3J0cy5tb3JlVGhhbiA9ICh4LCB5KSA9PiB4ID4geSA/IDEgOiAwO1xuZXhwb3J0cy5sZXNzVGhhbiA9ICh4LCB5KSA9PiB4IDwgeSA/IDEgOiAwO1xuZXhwb3J0cy5tb3JlT3JFcXVhbFRoYW4gPSAoeCwgeSkgPT4geCA+PSB5ID8gMSA6IDA7XG5leHBvcnRzLmxlc3NPckVxdWFsVGhhbiA9ICh4LCB5KSA9PiB4IDw9IHkgPyAxIDogMDtcbmV4cG9ydHMuZXF1YWwgPSAoeCwgeSkgPT4geCA9PT0geSA/IDEgOiAwO1xuZXhwb3J0cy5ub3RFcXVhbCA9ICh4LCB5KSA9PiB4ICE9PSB5ID8gMSA6IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVyYXRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaW5kZXhpbmdfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvaW5kZXhpbmcnKTtcbmNvbnN0IGNvdW50c18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9jb3VudHMnKTtcbmNvbnN0IGJhc2ljXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L2Jhc2ljJyk7XG5jb25zdCBwYWRkaW5nXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L3BhZGRpbmcnKTtcbmNsYXNzIFZhbHVlQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gICAgZ2V0IGZpcnN0KCkgeyByZXR1cm4gdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHVuZGVmaW5lZDsgfVxuICAgIGdldCBsYXN0KCkgeyByZXR1cm4gdGhpcy5sZW5ndGggPiAwID8gdGhpc1t0aGlzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkOyB9XG4gICAgaGVhZChuKSB7IHJldHVybiB0aGlzLnNsaWNlKDAsIG4gfHwgMTApOyB9XG4gICAgdGFpbChuKSB7IHJldHVybiB0aGlzLnNsaWNlKC0obiB8fCAxMCkpOyB9XG4gICAgcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkgeyByZXR1cm4gaW5kZXhpbmdfMS5yYW5nZSh0aGlzLCBzdGFydCwgZW5kLCBzdGVwKTsgfVxuICAgIHBlcm11dGUoaW5kZXhlcykgeyByZXR1cm4gaW5kZXhpbmdfMS5wZXJtdXRlKHRoaXMsIGluZGV4ZXMpOyB9XG4gICAgc2h1ZmZsZSgpIHsgcmV0dXJuIGJhc2ljXzEuc2h1ZmZsZSh0aGlzKTsgfVxuICAgIHRyYW5zZm9ybShjYWxsYmFjaykgeyByZXR1cm4gYmFzaWNfMS50cmFuc2Zvcm0odGhpcywgY2FsbGJhY2spOyB9XG4gICAgO1xuICAgIGVhY2goY2FsbGJhY2spIHsgcmV0dXJuIGJhc2ljXzEuZWFjaCh0aGlzLCBjYWxsYmFjayk7IH1cbiAgICBmaWxsQnkoZm4pIHsgcmV0dXJuIGJhc2ljXzEuZmlsbEJ5KHRoaXMsIGZuKTsgfVxuICAgIHBhZFN0YXJ0KGxlbmd0aCwgdmFsdWUpIHsgcmV0dXJuIHBhZGRpbmdfMS5wYWRTdGFydCh0aGlzLCBsZW5ndGgsIHZhbHVlKTsgfVxuICAgIHBhZEVuZChsZW5ndGgsIHZhbHVlKSB7IHJldHVybiBwYWRkaW5nXzEucGFkRW5kKHRoaXMsIGxlbmd0aCwgdmFsdWUpOyB9XG4gICAgZXF1YWxzKGEpIHsgcmV0dXJuIGJhc2ljXzEuZXF1YWxzKHRoaXMsIGEpOyB9XG4gICAgY29weSgpIHsgcmV0dXJuIGJhc2ljXzEuY29weSh0aGlzKTsgfVxuICAgIHRvU2V0KCkgeyByZXR1cm4gbmV3IFNldCh0aGlzKTsgfVxuICAgIHVuaXF1ZSgpIHsgcmV0dXJuIGNvdW50c18xLnVuaXF1ZSh0aGlzKTsgfVxuICAgIGNvdW50cygpIHsgcmV0dXJuIGNvdW50c18xLmNvdW50cyh0aGlzKTsgfVxuICAgIGNvdW50KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBjb3VudHNfMS5jb3VudCh0aGlzLCBwYXJhbSk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmFsdWVBcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLWFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuZXF1YWxzID0gZXF1YWxzO1xuZnVuY3Rpb24gY29weSh2KSB7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IHZbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmNvcHkgPSBjb3B5O1xuZnVuY3Rpb24gc2h1ZmZsZSh2KSB7XG4gICAgZm9yIChsZXQgaSA9IHYubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgIGxldCB4ID0gdltpIC0gMV07XG4gICAgICAgIHZbaSAtIDFdID0gdltqXTtcbiAgICAgICAgdltqXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHRyYW5zZm9ybSh2LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2W2ldID0gY2FsbGJhY2suY2FsbChudWxsLCB2W2ldLCBpLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbmZ1bmN0aW9uIGVhY2godiwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2W2ldLCBpLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmVhY2ggPSBlYWNoO1xuZnVuY3Rpb24gZmlsbEJ5KHYsIGZuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBmbi5jYWxsKG51bGwsIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMuZmlsbEJ5ID0gZmlsbEJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBjb3VudCh2LCBwYXJhbSkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5jYWxsKG51bGwsIHZbaV0sIGksIHYpKVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW0gPT09IHZbaV0gfHwgKE51bWJlci5pc05hTihwYXJhbSkgJiYgTnVtYmVyLmlzTmFOKHZbaV0pKSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG59XG5leHBvcnRzLmNvdW50ID0gY291bnQ7XG5mdW5jdGlvbiBjb3VudHModikge1xuICAgIGxldCBjb3VudHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdltpXTtcbiAgICAgICAgY291bnRzLnNldCh4LCAoY291bnRzLmdldCh4KSB8fCAwKSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY291bnRzO1xufVxuZXhwb3J0cy5jb3VudHMgPSBjb3VudHM7XG5mdW5jdGlvbiB1bmlxdWUodikge1xuICAgIGxldCBzZXQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyB2LmNvbnN0cnVjdG9yKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdltpXTtcbiAgICAgICAgaWYgKCFzZXQuaGFzKHgpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh4KTtcbiAgICAgICAgICAgIHNldC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudW5pcXVlID0gdW5pcXVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y291bnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcmFuZ2Uodiwgc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogc3RlcDtcbiAgICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKHN0YXJ0IDwgMCA/IHYubGVuZ3RoICsgc3RhcnQgOiBzdGFydCk7XG4gICAgZW5kID0gZW5kID09IG51bGwgPyB2Lmxlbmd0aCA6IChlbmQgPCAwID8gdi5sZW5ndGggKyBlbmQgOiBlbmQpO1xuICAgIGxldCByZXN1bHQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbCgoZW5kIC0gc3RhcnQpIC8gc3RlcCkgfSk7XG4gICAgbGV0IGogPSAwO1xuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gdltpXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gdltpXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gcGVybXV0ZSh2LCBpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogaW5kZXhlcy5sZW5ndGggfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbmRleGVzW2ldID49IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHZbaW5kZXhlc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSB2W3YubGVuZ3RoICsgaW5kZXhlc1tpXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGVybXV0ZSA9IHBlcm11dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleGluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHBhZFN0YXJ0KHYsIGxlbmd0aCwgdmFsdWUpIHtcbiAgICB3aGlsZSAodi5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdi51bnNoaWZ0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnBhZFN0YXJ0ID0gcGFkU3RhcnQ7XG5mdW5jdGlvbiBwYWRFbmQodiwgbGVuZ3RoLCB2YWx1ZSkge1xuICAgIHdoaWxlICh2Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMucGFkRW5kID0gcGFkRW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHZhbHVlX2FycmF5XzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5Jyk7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9zdGF0aXN0aWNzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9tYXRoJyk7XG5jb25zdCBvcGVyYXRpb25zXzEgPSByZXF1aXJlKCcuL3V0aWxzL29wZXJhdGlvbnMnKTtcbmNvbnN0IG9wZXJhdGlvbnNfMiA9IHJlcXVpcmUoJy4vdmVjdG9yL29wZXJhdGlvbnMnKTtcbmNvbnN0IGRvdF9wcm9kdWN0XzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9kb3QtcHJvZHVjdCcpO1xuY29uc3QgcXVhbnRpbGVzXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9xdWFudGlsZXMnKTtcbmNvbnN0IGhpc3RvZ3JhbV8xID0gcmVxdWlyZSgnLi92ZWN0b3IvaGlzdG9ncmFtJyk7XG5jb25zdCBjdW11bGF0aXZlXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9jdW11bGF0aXZlJyk7XG5jb25zdCBub3JtYWxpemVfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL25vcm1hbGl6ZScpO1xuY29uc3Qgc3RhdHNfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3N0YXRzJyk7XG5jb25zdCByYW5nZV8xID0gcmVxdWlyZSgnLi92ZWN0b3IvcmFuZ2UnKTtcbmNsYXNzIFZlY3RvciBleHRlbmRzIHZhbHVlX2FycmF5XzEuZGVmYXVsdCB7XG4gICAgbWluKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1pbih0aGlzKTsgfVxuICAgIG1heCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tYXgodGhpcyk7IH1cbiAgICBleHRlbnQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuZXh0ZW50KHRoaXMpOyB9XG4gICAgbWVhbigpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tZWFuKHRoaXMpOyB9XG4gICAgdmFyaWFuY2UoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEudmFyaWFuY2UodGhpcyk7IH1cbiAgICBzdGQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuc3RkKHRoaXMpOyB9XG4gICAgbWFkKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1hZCh0aGlzKTsgfVxuICAgIG1vZGUoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubW9kZSh0aGlzKTsgfVxuICAgIGFyZ21pbigpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5hcmdtaW4odGhpcyk7IH1cbiAgICBhcmdtYXgoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuYXJnbWF4KHRoaXMpOyB9XG4gICAgbWVkaWFuKCkgeyByZXR1cm4gcXVhbnRpbGVzXzEubWVkaWFuKHRoaXMpOyB9XG4gICAgcXVhbnRpbGVzKHEpIHsgcmV0dXJuIHF1YW50aWxlc18xLnF1YW50aWxlcyh0aGlzLCBxKTsgfVxuICAgIGhpc3RvZ3JhbShvcHRpb25zKSB7IHJldHVybiBoaXN0b2dyYW1fMS5oaXN0b2dyYW0odGhpcywgb3B0aW9ucyk7IH1cbiAgICBub3JtYWxpemVTdGF0cygpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplU3RhdHModGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgbm9ybWFsaXplUHJvYmEoKSB7IG5vcm1hbGl6ZV8xLm5vcm1hbGl6ZVByb2JhKHRoaXMpOyByZXR1cm4gdGhpczsgfVxuICAgIG5vcm1hbGl6ZVZlY3RvcigpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplVmVjdG9yKHRoaXMpOyByZXR1cm4gdGhpczsgfVxuICAgIHN0YXRzKCkgeyByZXR1cm4gc3RhdHNfMS5zdGF0cyh0aGlzKTsgfVxuICAgIHN1bSgpIHsgcmV0dXJuIG1hdGhfMS5zdW0odGhpcyk7IH1cbiAgICBzdW1PZlNxdWFyZXMoKSB7IHJldHVybiBtYXRoXzEuc3VtT2ZTcXVhcmVzKHRoaXMpOyB9XG4gICAgbWFnbml0dWRlKCkgeyByZXR1cm4gbWF0aF8xLm1hZ25pdHVkZSh0aGlzKTsgfVxuICAgIHByb2R1Y3QoKSB7IHJldHVybiBtYXRoXzEucHJvZHVjdCh0aGlzKTsgfVxuICAgIGN1bXN1bSgpIHsgcmV0dXJuIGN1bXVsYXRpdmVfMS5jdW1zdW0odGhpcyk7IH1cbiAgICBkaWZmKCkgeyByZXR1cm4gY3VtdWxhdGl2ZV8xLmRpZmYodGhpcyk7IH1cbiAgICBzb3J0KCkgeyByZXR1cm4gc3VwZXIuc29ydCgoYSwgYikgPT4gYSAtIGIpOyB9XG4gICAgc29ydERlc2MoKSB7IHJldHVybiBzdXBlci5zb3J0KChhLCBiKSA9PiBiIC0gYSk7IH1cbiAgICBzb21lKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayA/IHN1cGVyLnNvbWUoY2FsbGJhY2spIDogc3VwZXIuc29tZSh4ID0+ICEheCk7XG4gICAgfVxuICAgIGV2ZXJ5KGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayA/IHN1cGVyLmV2ZXJ5KGNhbGxiYWNrKSA6IHN1cGVyLmV2ZXJ5KHggPT4gISF4KTtcbiAgICB9XG4gICAgYWRkKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmFkZCk7XG4gICAgfVxuICAgIGFkZFNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5hZGQpO1xuICAgIH1cbiAgICBzdWJ0cmFjdChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5zdWJ0cmFjdCk7XG4gICAgfVxuICAgIHN1YnRyYWN0U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLnN1YnRyYWN0KTtcbiAgICB9XG4gICAgbXVsdGlwbHkocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubXVsdGlwbHkpO1xuICAgIH1cbiAgICBtdWx0aXBseVNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIGRpdmlkZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBkaXZpZGVTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEuZGl2aWRlKTtcbiAgICB9XG4gICAgcG93KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLnBvdyk7XG4gICAgfVxuICAgIHBvd1NlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5wb3cpO1xuICAgIH1cbiAgICBhbmQodikgeyByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCB2LCBmYWxzZSwgb3BlcmF0aW9uc18xLmFuZCk7IH1cbiAgICBvcih2KSB7IHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHYsIGZhbHNlLCBvcGVyYXRpb25zXzEub3IpOyB9XG4gICAgbGVzc1RoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubGVzc1RoYW4pO1xuICAgIH1cbiAgICBtb3JlVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tb3JlVGhhbik7XG4gICAgfVxuICAgIGxlc3NPckVxdWFsVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5sZXNzT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBtb3JlT3JFcXVhbFRoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubW9yZU9yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgZXF1YWwocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuZXF1YWwpO1xuICAgIH1cbiAgICBub3RFcXVhbChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5ub3RFcXVhbCk7XG4gICAgfVxuICAgIGRvdCh2KSB7IHJldHVybiBkb3RfcHJvZHVjdF8xLmRvdFByb2R1Y3QodGhpcywgdik7IH1cbiAgICBzdGF0aWMgYWRkKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuYWRkKTtcbiAgICB9XG4gICAgc3RhdGljIHN1YnRyYWN0KHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuc3VidHJhY3QpO1xuICAgIH1cbiAgICBzdGF0aWMgbXVsdGlwbHkodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXZpZGUodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBzdGF0aWMgcG93KHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEucG93KTtcbiAgICB9XG4gICAgc3RhdGljIGFuZCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmFuZCk7XG4gICAgfVxuICAgIHN0YXRpYyBvcih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm9yKTtcbiAgICB9XG4gICAgc3RhdGljIGxlc3NUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubGVzc1RoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgbW9yZVRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tb3JlVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBsZXNzT3JFcXVhbFRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5sZXNzT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgbW9yZU9yRXF1YWxUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubW9yZU9yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIGVxdWFsKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuZXF1YWwpO1xuICAgIH1cbiAgICBzdGF0aWMgbm90RXF1YWwodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5ub3RFcXVhbCk7XG4gICAgfVxuICAgIHN0YXRpYyByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgICByZXR1cm4gcmFuZ2VfMS5yYW5nZShzdGFydCwgc3RvcCwgc3RlcCwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBsaW5zcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLmxpbnNwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgbG9nc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgYmFzZSkge1xuICAgICAgICByZXR1cm4gcmFuZ2VfMS5sb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlLCB0aGlzKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBfY3Vtc3VtKHYsIG91dCkge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIG91dFtpXSA9IHggKyAoaSA9PSAwID8gMCA6IG91dFtpIC0gMV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gX2RpZmYodiwgb3V0KSB7XG4gICAgbGV0IHByZXYgPSBoZWxwZXJzXzEuZ2V0TnVtYmVyVmFsdWUodiwgMCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gaGVscGVyc18xLmdldE51bWJlclZhbHVlKHYsIGkpO1xuICAgICAgICBvdXRbaSAtIDFdID0geCAtIHByZXY7XG4gICAgICAgIHByZXYgPSB4O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGN1bXN1bSh2KSB7XG4gICAgbGV0IG91dCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggfSk7XG4gICAgX2N1bXN1bSh2LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLmN1bXN1bSA9IGN1bXN1bTtcbmZ1bmN0aW9uIGRpZmYodikge1xuICAgIGxldCBvdXQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIC0gMSB9KTtcbiAgICBfZGlmZih2LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VtdWxhdGl2ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIGRvdFByb2R1Y3QodjEsIHYyKSB7XG4gICAgbGV0IHkgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyUGFpcih2MSwgdjIsICh4MSwgeDIpID0+IHtcbiAgICAgICAgeSArPSB4MSAqIHgyO1xuICAgIH0pO1xuICAgIHJldHVybiB5O1xufVxuZXhwb3J0cy5kb3RQcm9kdWN0ID0gZG90UHJvZHVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvdC1wcm9kdWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi9zdGF0aXN0aWNzJyk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBoaXN0b2dyYW0odiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGxldCBtaW4gPSBvcHRpb25zLm1pbjtcbiAgICBsZXQgbWF4ID0gb3B0aW9ucy5tYXg7XG4gICAgaWYgKG1pbiA9PSBudWxsIHx8IG1heCA9PSBudWxsKSB7XG4gICAgICAgIGxldCBleHQgPSBzdGF0aXN0aWNzXzEuZXh0ZW50KHYpO1xuICAgICAgICBpZiAobWluID09IG51bGwpXG4gICAgICAgICAgICBtaW4gPSBleHRbMF07XG4gICAgICAgIGlmIChtYXggPT0gbnVsbClcbiAgICAgICAgICAgIG1heCA9IGV4dFsxXTtcbiAgICB9XG4gICAgbGV0IGJpbnMgPSBvcHRpb25zLmJpbnM7XG4gICAgaWYgKG9wdGlvbnMuYmluV2lkdGgpIHtcbiAgICAgICAgYmlucyA9IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIG9wdGlvbnMuYmluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoYmlucyA9PSBudWxsKSB7XG4gICAgICAgIGJpbnMgPSBNYXRoLmZsb29yKE1hdGguc3FydCh2Lmxlbmd0aCkpO1xuICAgIH1cbiAgICBsZXQgZHggPSAobWF4IC0gbWluKSAvIGJpbnM7XG4gICAgbGV0IHggPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IGJpbnMgfSk7XG4gICAgbGV0IHkgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IGJpbnMgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpKyspIHtcbiAgICAgICAgeFtpXSA9IG1pbiArIGkgKiBkeDtcbiAgICAgICAgeVtpXSA9IDA7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKHYsIHZpID0+IHtcbiAgICAgICAgaWYgKHZpID49IG1pbiAmJiB2aSA8IG1heCkge1xuICAgICAgICAgICAgeVtNYXRoLmZsb29yKCh2aSAtIG1pbikgLyBkeCldKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmkgPT09IG1heCkge1xuICAgICAgICAgICAgeVt5Lmxlbmd0aCAtIDFdKys7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5wcm9iYWJpbGl0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHlbaV0gLz0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgZHg6IGR4IH07XG59XG5leHBvcnRzLmhpc3RvZ3JhbSA9IGhpc3RvZ3JhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhpc3RvZ3JhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIHN1bShhcnJheSkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IHg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuZnVuY3Rpb24gc3VtT2ZTcXVhcmVzKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geCAqIHg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydHMuc3VtT2ZTcXVhcmVzID0gc3VtT2ZTcXVhcmVzO1xuZnVuY3Rpb24gbWFnbml0dWRlKGFycmF5KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChzdW1PZlNxdWFyZXMoYXJyYXkpKTtcbn1cbmV4cG9ydHMubWFnbml0dWRlID0gbWFnbml0dWRlO1xuZnVuY3Rpb24gcHJvZHVjdChhcnJheSkge1xuICAgIGxldCBwcm9kdWN0ID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcihhcnJheSwgeCA9PiB7XG4gICAgICAgIHByb2R1Y3QgKj0geDtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvZHVjdDtcbn1cbmV4cG9ydHMucHJvZHVjdCA9IHByb2R1Y3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuY29uc3QgbWF0aF8xID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb2JhKHYpIHtcbiAgICBsZXQgcyA9IG1hdGhfMS5zdW0odik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSAvPSBzO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVQcm9iYSA9IG5vcm1hbGl6ZVByb2JhO1xuZnVuY3Rpb24gbm9ybWFsaXplVmVjdG9yKHYpIHtcbiAgICBsZXQgcyA9IG1hdGhfMS5tYWduaXR1ZGUodik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSAvPSBzO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVWZWN0b3IgPSBub3JtYWxpemVWZWN0b3I7XG5mdW5jdGlvbiBub3JtYWxpemVTdGF0cyh2KSB7XG4gICAgbGV0IG0gPSBzdGF0aXN0aWNzXzEubWVhbih2KTtcbiAgICBsZXQgbyA9IHN0YXRpc3RpY3NfMS5zdGQodik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSA9ICh4IC0gbSkgLyBvO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVTdGF0cyA9IG5vcm1hbGl6ZVN0YXRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gc2NhbGFyT3BlcmF0aW9uKHYsIHMsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0cHV0W2ldID0gb3BlcmF0aW9uKHgsIHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2NhbGFyT3BlcmF0aW9uMihzLCB2LCBvdXRwdXQsIG9wZXJhdGlvbikge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIG91dHB1dFtpXSA9IG9wZXJhdGlvbihzLCB4KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJpbmFyeU9wZXJhdGlvbih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgKHgxLCB4MiwgaSkgPT4ge1xuICAgICAgICBvdXRwdXRbaV0gPSBvcGVyYXRpb24oeDEsIHgyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHZlY3Rvck9wZXJhdGlvbih2LCBwYXJhbSwgbW9kaWZ5U2VsZiwgb3BlcmF0aW9uKSB7XG4gICAgbGV0IG91dHB1dCA9IG1vZGlmeVNlbGYgPyB2IDogdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJykge1xuICAgICAgICBzY2FsYXJPcGVyYXRpb24odiwgcGFyYW0sIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW0ubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYmluYXJ5T3BlcmF0aW9uKHYsIHBhcmFtLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcGVyZm9ybSB2ZWN0b3Igb3BlcmF0aW9uIG9uIG9iamVjdCB3aXRoIGludmFsaWQgdHlwZTonICsgcGFyYW0gKyAnLCAnICsgdHlwZW9mIHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMudmVjdG9yT3BlcmF0aW9uID0gdmVjdG9yT3BlcmF0aW9uO1xuZnVuY3Rpb24gdmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHR5cGUsIG9wZXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgdjEgPT09ICdudW1iZXInICYmIHR5cGVvZiB2MiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbih2MSwgdjIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiB2MS5sZW5ndGggfHwgdjIubGVuZ3RoIH0pO1xuICAgIGlmICh0eXBlb2YgdjEgPT09ICdudW1iZXInICYmIHYyLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjYWxhck9wZXJhdGlvbjIodjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHYxLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2MiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2NhbGFyT3BlcmF0aW9uKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmICh2MS5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiB2Mi5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBiaW5hcnlPcGVyYXRpb24odjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcGVyZm9ybSB2ZWN0b3Igb3BlcmF0aW9uIG9uIG9iamVjdHMgd2l0aCBpbnZhbGlkIHR5cGU6ICcgKyB0eXBlb2YgdjEgKyAnLCAnICsgdHlwZW9mIHYyKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMudmVjdG9yT3BlcmF0aW9uMiA9IHZlY3Rvck9wZXJhdGlvbjI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVyYXRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XG5mdW5jdGlvbiBxdWFudGlsZSh2LCBwKSB7XG4gICAgbGV0IGggPSAodi5sZW5ndGggLSAxKSAqIHAgKyAxO1xuICAgIGxldCBoXyA9IE1hdGguZmxvb3IoaCk7XG4gICAgbGV0IHMgPSBoIC0gaF87XG4gICAgbGV0IHggPSB2W2hfIC0gMV07XG4gICAgcmV0dXJuIHMgPyB4ICsgcyAqICh2W2hfXSAtIHgpIDogeDtcbn1cbmZ1bmN0aW9uIGdldFNvcnRlZE51bWJlcnModikge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcodiwgeCA9PiB7IHZhbHVlcy5wdXNoKHgpOyB9KTtcbiAgICByZXR1cm4gdmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbn1cbmZ1bmN0aW9uIHF1YW50aWxlcyh2LCBxKSB7XG4gICAgbGV0IHNvcnRlZCA9IGdldFNvcnRlZE51bWJlcnModik7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogcSArIDEgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IHF1YW50aWxlKHNvcnRlZCwgaSAvIHEpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5xdWFudGlsZXMgPSBxdWFudGlsZXM7XG5mdW5jdGlvbiBtZWRpYW4odikge1xuICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGxldCBzb3J0ZWQgPSBnZXRTb3J0ZWROdW1iZXJzKHYpO1xuICAgIHJldHVybiBxdWFudGlsZShzb3J0ZWQsIDAuNSk7XG59XG5leHBvcnRzLm1lZGlhbiA9IG1lZGlhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1YW50aWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwLCB0eXBlKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCAmJiBzdGVwID09IG51bGwpIHtcbiAgICAgICAgc3RvcCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgfVxuICAgIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiBzdGFydDtcbiAgICBzdGVwID0gc3RlcCA9PSBudWxsID8gKHN0YXJ0IDw9IHN0b3AgPyAxIDogLTEpIDogc3RlcDtcbiAgICBpZiAoKHN0b3AgLSBzdGFydCkgLyBzdGVwIDwgMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wJyk7XG4gICAgbGV0IHYgPSB0eXBlLmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApIH0pO1xuICAgIGxldCB4O1xuICAgIGxldCBpID0gMDtcbiAgICBpZiAoc3RhcnQgPCBzdG9wKSB7XG4gICAgICAgIHdoaWxlICgoeCA9IHN0YXJ0ICsgaSAqIHN0ZXApIDwgc3RvcCkge1xuICAgICAgICAgICAgdltpKytdID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2hpbGUgKCh4ID0gc3RhcnQgKyBpICogc3RlcCkgPiBzdG9wKSB7XG4gICAgICAgICAgICB2W2krK10gPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gbGluc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgdHlwZSkge1xuICAgIG51bSA9IG51bSA9PSBudWxsID8gMTAwIDogbnVtO1xuICAgIGxldCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyAoZXhjbHVkZUVuZCA/IG51bSA6IG51bSAtIDEpO1xuICAgIGxldCB2ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiBudW0gfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICB2W2ldID0gc3RhcnQgKyBpICogc3RlcDtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmxpbnNwYWNlID0gbGluc3BhY2U7XG5mdW5jdGlvbiBsb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlLCB0eXBlKSB7XG4gICAgbnVtID0gbnVtID09IG51bGwgPyAxMDAgOiBudW07XG4gICAgYmFzZSA9IGJhc2UgPT0gbnVsbCA/IDEwIDogYmFzZTtcbiAgICBsZXQgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gKGV4Y2x1ZGVFbmQgPyBudW0gOiBudW0gLSAxKTtcbiAgICBsZXQgdiA9IHR5cGUuZnJvbSh7IGxlbmd0aDogbnVtIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgdltpXSA9IE1hdGgucG93KGJhc2UsIHN0YXJ0ICsgaSAqIHN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMubG9nc3BhY2UgPSBsb2dzcGFjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gbWluKGFycmF5KSB7XG4gICAgbGV0IG1pbjtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW47XG59XG5leHBvcnRzLm1pbiA9IG1pbjtcbmZ1bmN0aW9uIGFyZ21pbihhcnJheSkge1xuICAgIGxldCBtaW47XG4gICAgbGV0IGluZGV4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgKHgsIGkpID0+IHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkIHx8IHggPCBtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IHg7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXg7XG59XG5leHBvcnRzLmFyZ21pbiA9IGFyZ21pbjtcbmZ1bmN0aW9uIG1heChhcnJheSkge1xuICAgIGxldCBtYXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF4O1xufVxuZXhwb3J0cy5tYXggPSBtYXg7XG5mdW5jdGlvbiBhcmdtYXgoYXJyYXkpIHtcbiAgICBsZXQgbWF4O1xuICAgIGxldCBpbmRleDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksICh4LCBpKSA9PiB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCB8fCB4ID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB4O1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xufVxuZXhwb3J0cy5hcmdtYXggPSBhcmdtYXg7XG5mdW5jdGlvbiBleHRlbnQoYXJyYXkpIHtcbiAgICBsZXQgbWluO1xuICAgIGxldCBtYXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkIHx8IHggPCBtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IHg7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW21pbiwgbWF4XTtcbn1cbmV4cG9ydHMuZXh0ZW50ID0gZXh0ZW50O1xuZnVuY3Rpb24gbWVhbihhcnJheSkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBuID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geDtcbiAgICAgICAgbisrO1xuICAgIH0pO1xuICAgIHJldHVybiBuID09PSAwID8gdW5kZWZpbmVkIDogc3VtIC8gbjtcbn1cbmV4cG9ydHMubWVhbiA9IG1lYW47XG5mdW5jdGlvbiB2YXJpYW5jZShhcnJheSkge1xuICAgIGxldCBuID0gMDtcbiAgICBsZXQgbWVhbiA9IDA7XG4gICAgbGV0IG0yID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBuKys7XG4gICAgICAgIGxldCBkZWx0YSA9IHggLSBtZWFuO1xuICAgICAgICBtZWFuICs9IGRlbHRhIC8gbjtcbiAgICAgICAgbTIgKz0gZGVsdGEgKiAoeCAtIG1lYW4pO1xuICAgIH0pO1xuICAgIHJldHVybiBuID4gMSA/IChtMiAvIChuIC0gMSkpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy52YXJpYW5jZSA9IHZhcmlhbmNlO1xuZnVuY3Rpb24gc3RkKGFycmF5KSB7XG4gICAgbGV0IHNxdWFyZWQgPSB2YXJpYW5jZShhcnJheSk7XG4gICAgcmV0dXJuIHNxdWFyZWQgPT0gbnVsbCA/IHNxdWFyZWQgOiBNYXRoLnNxcnQoc3F1YXJlZCk7XG59XG5leHBvcnRzLnN0ZCA9IHN0ZDtcbmZ1bmN0aW9uIG1hZChhcnJheSkge1xuICAgIGxldCBhdmcgPSBtZWFuKGFycmF5KTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBsZXQgbiA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IE1hdGguYWJzKGF2ZyAtIHgpO1xuICAgICAgICBuKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPT09IDAgPyB1bmRlZmluZWQgOiBzdW0gLyBuO1xufVxuZXhwb3J0cy5tYWQgPSBtYWQ7XG5mdW5jdGlvbiBtb2RlKGFycmF5KSB7XG4gICAgbGV0IGNvdW50cyA9IHt9O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmICghY291bnRzW3hdKSB7XG4gICAgICAgICAgICBjb3VudHNbeF0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY291bnRzW3hdKys7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWF4VmFsdWU7XG4gICAgbGV0IG1heENvdW50ID0gMDtcbiAgICBPYmplY3Qua2V5cyhjb3VudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGNvdW50c1trZXldID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIG1heENvdW50ID0gY291bnRzW2tleV07XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXhWYWx1ZSA/IE51bWJlcihtYXhWYWx1ZSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLm1vZGUgPSBtb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGlzdGljcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vc3RhdGlzdGljcycpO1xuY29uc3QgbWF0aF8xID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5jb25zdCBxdWFudGlsZXNfMSA9IHJlcXVpcmUoJy4vcXVhbnRpbGVzJyk7XG5mdW5jdGlvbiBzdGF0cyh2KSB7XG4gICAgbGV0IGludmFsaWRzID0gY291bnRJbnZhbGlkKHYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aDogdi5sZW5ndGgsXG4gICAgICAgIGludmFsaWRDb3VudDogaW52YWxpZHMuY291bnQsXG4gICAgICAgIGludmFsaWRDb3VudHM6IGludmFsaWRzLmNvdW50cyxcbiAgICAgICAgbWluOiBzdGF0aXN0aWNzXzEubWluKHYpLFxuICAgICAgICBtYXg6IHN0YXRpc3RpY3NfMS5tYXgodiksXG4gICAgICAgIG1lYW46IHN0YXRpc3RpY3NfMS5tZWFuKHYpLFxuICAgICAgICBtZWRpYW46IHF1YW50aWxlc18xLm1lZGlhbih2KSxcbiAgICAgICAgbW9kZTogc3RhdGlzdGljc18xLm1vZGUodiksXG4gICAgICAgIHN0ZDogc3RhdGlzdGljc18xLnN0ZCh2KSxcbiAgICAgICAgdmFyaWFuY2U6IHN0YXRpc3RpY3NfMS52YXJpYW5jZSh2KSxcbiAgICAgICAgbWFkOiBzdGF0aXN0aWNzXzEubWFkKHYpLFxuICAgICAgICBkZWNpbGVzOiBxdWFudGlsZXNfMS5xdWFudGlsZXModiwgMTApLFxuICAgICAgICBzdW06IG1hdGhfMS5zdW0odilcbiAgICB9O1xufVxuZXhwb3J0cy5zdGF0cyA9IHN0YXRzO1xuZnVuY3Rpb24gY291bnRJbnZhbGlkKHYpIHtcbiAgICBsZXQgY291bnRzID0ge1xuICAgICAgICB1bmRlZmluZWQ6IDAsXG4gICAgICAgICdudWxsJzogMCxcbiAgICAgICAgTmFOOiAwLFxuICAgICAgICBJbmZpbml0eTogMCxcbiAgICAgICAgJy1JbmZpbml0eSc6IDBcbiAgICB9O1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb3VudHNbdltpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY291bnRzW3ZbaV1dKys7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNvdW50czogY291bnRzLCBjb3VudDogY291bnQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRzLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEFjdG9yVHlwZSB9IGZyb20gXCIuL0FjdG9yXCI7XG5pbXBvcnQgeyBBQ1RPUl9SQURJVVMsIERFRkFVTFRfSEVJR0hULCBERUZBVUxUX1dJRFRIIH0gZnJvbSBcIi4vY29uc3RzXCI7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9TaW11bGF0aW9uXCI7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgaWNvbnMgPSBuZXcgTWFwPEFjdG9yVHlwZSwgSFRNTEltYWdlRWxlbWVudD4oW1xuICAgIFtBY3RvclR5cGUucm9jaywgZ2V0SW1hZ2UoJ3JvY2snKV0sXG4gICAgW0FjdG9yVHlwZS5wYXBlciwgZ2V0SW1hZ2UoJ3BhcGVyJyldLFxuICAgIFtBY3RvclR5cGUuc2Npc3NvciwgZ2V0SW1hZ2UoJ3NjaXNzb3InKV1cbl0pO1xuXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IHNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbihERUZBVUxUX1dJRFRILCBERUZBVUxUX0hFSUdIVCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gICAgc2V0U2l6ZSgpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaW11bGF0aW9uLnJlc2V0KCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFNpemUpO1xuXG4gICAgc2ltdWxhdGlvbi5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzZXRTaXplKCkge1xuICAgIGNvbnN0IG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAyMDtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLmNsaWVudEhlaWdodCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKS5jbGllbnRIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICBzaW11bGF0aW9uLndpZHRoID0gbmV3V2lkdGg7XG4gICAgc2ltdWxhdGlvbi5oZWlnaHQgPSBuZXdIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlKGljb246IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gYCR7aWNvbn0ucG5nYDtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cblxubGV0IGxhc3RUaW1lc3RhbXA6IG51bWJlciA9IG51bGw7XG5mdW5jdGlvbiBhbmltYXRpb25Mb29wKHRpbWVzdGFtcDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChsYXN0VGltZXN0YW1wICE9PSBudWxsKSB7XG4gICAgICAgIHNpbXVsYXRpb24uc3RlcCgodGltZXN0YW1wIC0gbGFzdFRpbWVzdGFtcCkgKiAwLjAwMSk7XG4gICAgfVxuICAgIGxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgc2ltdWxhdGlvbi5hY3RvcnMuZm9yRWFjaCgoYWN0b3IpID0+IHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaWNvbnMuZ2V0KGFjdG9yLnR5cGUpLCBhY3Rvci5wb3NbMF0gLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1sxXSAtIEFDVE9SX1JBRElVUywgQUNUT1JfUkFESVVTICogMiwgQUNUT1JfUkFESVVTICogMik7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG59XG5cbnNldEludGVydmFsKCgpID0+IHNpbXVsYXRpb24uY2hlY2tNaXNzaW5nVHlwZXMoKSwgMTAwMCk7XG5cbmluaXQoKTtcbnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
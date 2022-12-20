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
    function Simulation() {
        this.actors = [];
    }
    Simulation.prototype.reset = function () {
        this.actors.splice(0);
        for (var i = 0; i < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_COUNT; i++) {
            this.actors.push(new _Actor__WEBPACK_IMPORTED_MODULE_1__["default"](i % 3, new ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * _consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH, Math.random() * _consts__WEBPACK_IMPORTED_MODULE_2__.HEIGHT)));
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
        if (actor.pos[0] < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS || actor.pos[0] > _consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS) {
            actor.v[0] = -actor.v[0];
            actor.pos[0] = Math.max(_consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, Math.min(_consts__WEBPACK_IMPORTED_MODULE_2__.WIDTH - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, actor.pos[0]));
        }
        if (actor.pos[1] < _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS || actor.pos[1] > _consts__WEBPACK_IMPORTED_MODULE_2__.HEIGHT - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS) {
            actor.v[1] = -actor.v[1];
            actor.pos[1] = Math.max(_consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, Math.min(_consts__WEBPACK_IMPORTED_MODULE_2__.HEIGHT - _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_RADIUS, actor.pos[1]));
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
/* harmony export */   "HEIGHT": () => (/* binding */ HEIGHT),
/* harmony export */   "MAX_V": () => (/* binding */ MAX_V),
/* harmony export */   "WIDTH": () => (/* binding */ WIDTH)
/* harmony export */ });
var ACTOR_RADIUS = 10;
var MAX_V = 50;
var WIDTH = 500;
var HEIGHT = 500;
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
var simulation = new _Simulation__WEBPACK_IMPORTED_MODULE_2__["default"]();
function init() {
    canvas = document.querySelector('canvas');
    canvas.width = _consts__WEBPACK_IMPORTED_MODULE_1__.WIDTH;
    canvas.height = _consts__WEBPACK_IMPORTED_MODULE_1__.HEIGHT;
    var resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', function () { return simulation.reset(); });
    simulation.reset();
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
    context.clearRect(0, 0, _consts__WEBPACK_IMPORTED_MODULE_1__.WIDTH, _consts__WEBPACK_IMPORTED_MODULE_1__.HEIGHT);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztBQUV4RCxJQUFJLEVBQUUsQ0FBQztBQUNQLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL0FjdG9yLnRzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvU2ltdWxhdGlvbi50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3V0aWxzL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2Jhc2ljLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvY291bnRzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvaW5kZXhpbmcuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS9wYWRkaW5nLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2N1bXVsYXRpdmUuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvZG90LXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvaGlzdG9ncmFtLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL21hdGguanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivbm9ybWFsaXplLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvcXVhbnRpbGVzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3JhbmdlLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivc3RhdHMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVmVjdG9yIGZyb20gJ3RzLXZlY3Rvcic7XG5cbmV4cG9ydCBlbnVtIEFjdG9yVHlwZSB7XG4gICAgcm9jayxcbiAgICBwYXBlcixcbiAgICBzY2lzc29yXG59XG5cbmNvbnN0IHdpbk1hcCA9IG5ldyBNYXAoW1xuICAgIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnNjaXNzb3JdLFxuICAgIFtBY3RvclR5cGUucGFwZXIsIEFjdG9yVHlwZS5yb2NrXSxcbiAgICBbQWN0b3JUeXBlLnNjaXNzb3IsIEFjdG9yVHlwZS5wYXBlcl0sXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciB7XG4gICAgdHlwZTogQWN0b3JUeXBlO1xuICAgIHBvczogVmVjdG9yO1xuICAgIHY6IFZlY3RvcjtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IEFjdG9yVHlwZSwgcG9zOiBWZWN0b3IpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3MuY29weSgpO1xuICAgICAgICB0aGlzLnYgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIGNvbXBhcmUob3RoZXI6IEFjdG9yKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbk1hcC5nZXQodGhpcy50eXBlKSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCJ0cy12ZWN0b3JcIjtcbmltcG9ydCBBY3RvciwgeyBBY3RvclR5cGUgfSBmcm9tIFwiLi9BY3RvclwiO1xuaW1wb3J0IHsgQUNUT1JfQ09VTlQsIEFDVE9SX1JBRElVUywgSEVJR0hULCBNQVhfViwgV0lEVEggfSBmcm9tIFwiLi9jb25zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgYWN0b3JzOiBBY3RvcltdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzID0gW107XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzLnNwbGljZSgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBQ1RPUl9DT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKG5ldyBBY3RvcihcbiAgICAgICAgICAgICAgICBpICUgMyxcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiBXSURUSCwgTWF0aC5yYW5kb20oKSAqIEhFSUdIVClcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RlcChkdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9yY2UgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgICAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5hY3RvcnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0b3IgPT09IG90aGVyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yVG8gPSBWZWN0b3Iuc3VidHJhY3Qob3RoZXIucG9zLCBhY3Rvci5wb3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IDEgLyB2ZWN0b3JUby5kb3QodmVjdG9yVG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IHZlY3RvclRvLmNvcHkoKS5ub3JtYWxpemVWZWN0b3IoKTtcblxuICAgICAgICAgICAgICAgIGlmICh2ZWN0b3JUby5tYWduaXR1ZGUoKSA8IEFDVE9SX1JBRElVUyAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdG9yLmNvbXBhcmUob3RoZXIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0b3IudHlwZSA9IG90aGVyLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3JjZSA9IGZvcmNlLmFkZChkaXIuY29weSgpLm11bHRpcGx5KC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yY2UgPSBmb3JjZS5hZGQoZGlyLm11bHRpcGx5KHdlaWdodCkubXVsdGlwbHkoYWN0b3IuY29tcGFyZShvdGhlcikpKTtcbiAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWN0b3IudiA9IGFjdG9yLnYuYWRkKGZvcmNlLmRpdmlkZSh0b3RhbFdlaWdodCkubXVsdGlwbHkoZHQgKiAxMDApKTtcbiAgICAgICAgICAgIGlmIChhY3Rvci52Lm1hZ25pdHVkZSgpID4gTUFYX1YpIHtcbiAgICAgICAgICAgICAgICBhY3Rvci52ID0gYWN0b3Iudi5ub3JtYWxpemVWZWN0b3IoKS5tdWx0aXBseShNQVhfVik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrQm91bmRhcmllcyhhY3RvciwgZHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQm91bmRhcmllcyhhY3RvcjogQWN0b3IsIGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgYWN0b3IucG9zID0gYWN0b3IucG9zLmFkZChhY3Rvci52Lm11bHRpcGx5KGR0KSk7XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMF0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzBdID4gV0lEVEggLSBBQ1RPUl9SQURJVVMpIHtcbiAgICAgICAgICAgIGFjdG9yLnZbMF0gPSAtYWN0b3IudlswXTtcbiAgICAgICAgICAgIGFjdG9yLnBvc1swXSA9IE1hdGgubWF4KEFDVE9SX1JBRElVUywgTWF0aC5taW4oV0lEVEggLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1swXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMV0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzFdID4gSEVJR0hUIC0gQUNUT1JfUkFESVVTKSB7XG4gICAgICAgICAgICBhY3Rvci52WzFdID0gLWFjdG9yLnZbMV07XG4gICAgICAgICAgICBhY3Rvci5wb3NbMV0gPSBNYXRoLm1heChBQ1RPUl9SQURJVVMsIE1hdGgubWluKEhFSUdIVCAtIEFDVE9SX1JBRElVUywgYWN0b3IucG9zWzFdKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja01pc3NpbmdUeXBlcygpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnBhcGVyLCBBY3RvclR5cGUuc2Npc3Nvcl0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RvcnMuc29tZSgoYWN0b3IpID0+IGFjdG9yLnR5cGUgPT09IHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hY3RvcnMubGVuZ3RoKV0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQUNUT1JfUkFESVVTID0gMTA7XG5leHBvcnQgY29uc3QgTUFYX1YgPSA1MDtcbmV4cG9ydCBjb25zdCBXSURUSCA9IDUwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA1MDA7XG5leHBvcnQgY29uc3QgQUNUT1JfQ09VTlQgPSA1MDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIHZlY3Rvcl8xID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbmV4cG9ydHMuVmVjdG9yID0gdmVjdG9yXzEuZGVmYXVsdDtcbnZhciB2YWx1ZV9hcnJheV8xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheScpO1xuZXhwb3J0cy5WYWx1ZUFycmF5ID0gdmFsdWVfYXJyYXlfMS5kZWZhdWx0O1xuY29uc3QgdmVjdG9yXzIgPSByZXF1aXJlKCcuL3ZlY3RvcicpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmVjdG9yXzIuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVtpXTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgIU51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIHRocm93Tm90TnVtZXJFcnJvcih2YWx1ZSwgaSk7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHZhbHVlLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaE5vbk1pc3NpbmcgPSBmb3JFYWNoTm9uTWlzc2luZztcbmZ1bmN0aW9uIGZvckVhY2hOdW1iZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXROdW1iZXJWYWx1ZShhcnJheSwgaSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgdmFsdWUsIGkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaE51bWJlciA9IGZvckVhY2hOdW1iZXI7XG5mdW5jdGlvbiBmb3JFYWNoTnVtYmVyUGFpcih2MSwgdjIsIGNhbGxiYWNrKSB7XG4gICAgY2hlY2tMZW5ndGgodjEsIHYyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4MSA9IGdldE51bWJlclZhbHVlKHYxLCBpKTtcbiAgICAgICAgbGV0IHgyID0gZ2V0TnVtYmVyVmFsdWUodjIsIGkpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHgxLCB4MiwgaSk7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoTnVtYmVyUGFpciA9IGZvckVhY2hOdW1iZXJQYWlyO1xuZnVuY3Rpb24gZ2V0TnVtYmVyVmFsdWUoYXJyYXksIGluZGV4KSB7XG4gICAgbGV0IHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcbiAgICAgICAgdGhyb3dOb3ROdW1lckVycm9yKHZhbHVlLCBpbmRleCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0cy5nZXROdW1iZXJWYWx1ZSA9IGdldE51bWJlclZhbHVlO1xuZnVuY3Rpb24gdGhyb3dOb3ROdW1lckVycm9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVmVjdG9yIGNvbnRhaW5zIG5vbi1udW1lcmljIHZhbHVlICcgKyB2YWx1ZSArICcgYXQgaW5kZXggJyArIGluZGV4ICsgJyBvZiB0eXBlICcgKyB0eXBlb2YgdmFsdWUpO1xufVxuZnVuY3Rpb24gY2hlY2tMZW5ndGgodjEsIHYyKSB7XG4gICAgaWYgKHYxLmxlbmd0aCAhPT0gdjIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndmVjdG9yIHNpemUgZGlmZmVyZW5jZSBpbiB2ZWN0b3Igb3BlcmF0aW9uOicgKyB2MS5sZW5ndGggKyAnLCAnICsgdjIubGVuZ3RoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5hZGQgPSAoeCwgeSkgPT4geCArIHk7XG5leHBvcnRzLnN1YnRyYWN0ID0gKHgsIHkpID0+IHggLSB5O1xuZXhwb3J0cy5tdWx0aXBseSA9ICh4LCB5KSA9PiB4ICogeTtcbmV4cG9ydHMuZGl2aWRlID0gKHgsIHkpID0+IHggLyB5O1xuZXhwb3J0cy5wb3cgPSAoeCwgeSkgPT4gTWF0aC5wb3coeCwgeSk7XG5leHBvcnRzLmFuZCA9ICh4LCB5KSA9PiB4ICYmIHk7XG5leHBvcnRzLm9yID0gKHgsIHkpID0+IHggfHwgeTtcbmV4cG9ydHMubW9yZVRoYW4gPSAoeCwgeSkgPT4geCA+IHkgPyAxIDogMDtcbmV4cG9ydHMubGVzc1RoYW4gPSAoeCwgeSkgPT4geCA8IHkgPyAxIDogMDtcbmV4cG9ydHMubW9yZU9yRXF1YWxUaGFuID0gKHgsIHkpID0+IHggPj0geSA/IDEgOiAwO1xuZXhwb3J0cy5sZXNzT3JFcXVhbFRoYW4gPSAoeCwgeSkgPT4geCA8PSB5ID8gMSA6IDA7XG5leHBvcnRzLmVxdWFsID0gKHgsIHkpID0+IHggPT09IHkgPyAxIDogMDtcbmV4cG9ydHMubm90RXF1YWwgPSAoeCwgeSkgPT4geCAhPT0geSA/IDEgOiAwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlcmF0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGluZGV4aW5nXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L2luZGV4aW5nJyk7XG5jb25zdCBjb3VudHNfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvY291bnRzJyk7XG5jb25zdCBiYXNpY18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9iYXNpYycpO1xuY29uc3QgcGFkZGluZ18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9wYWRkaW5nJyk7XG5jbGFzcyBWYWx1ZUFycmF5IGV4dGVuZHMgQXJyYXkge1xuICAgIGdldCBmaXJzdCgpIHsgcmV0dXJuIHRoaXMubGVuZ3RoID4gMCA/IHRoaXNbMF0gOiB1bmRlZmluZWQ7IH1cbiAgICBnZXQgbGFzdCgpIHsgcmV0dXJuIHRoaXMubGVuZ3RoID4gMCA/IHRoaXNbdGhpcy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZDsgfVxuICAgIGhlYWQobikgeyByZXR1cm4gdGhpcy5zbGljZSgwLCBuIHx8IDEwKTsgfVxuICAgIHRhaWwobikgeyByZXR1cm4gdGhpcy5zbGljZSgtKG4gfHwgMTApKTsgfVxuICAgIHJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApIHsgcmV0dXJuIGluZGV4aW5nXzEucmFuZ2UodGhpcywgc3RhcnQsIGVuZCwgc3RlcCk7IH1cbiAgICBwZXJtdXRlKGluZGV4ZXMpIHsgcmV0dXJuIGluZGV4aW5nXzEucGVybXV0ZSh0aGlzLCBpbmRleGVzKTsgfVxuICAgIHNodWZmbGUoKSB7IHJldHVybiBiYXNpY18xLnNodWZmbGUodGhpcyk7IH1cbiAgICB0cmFuc2Zvcm0oY2FsbGJhY2spIHsgcmV0dXJuIGJhc2ljXzEudHJhbnNmb3JtKHRoaXMsIGNhbGxiYWNrKTsgfVxuICAgIDtcbiAgICBlYWNoKGNhbGxiYWNrKSB7IHJldHVybiBiYXNpY18xLmVhY2godGhpcywgY2FsbGJhY2spOyB9XG4gICAgZmlsbEJ5KGZuKSB7IHJldHVybiBiYXNpY18xLmZpbGxCeSh0aGlzLCBmbik7IH1cbiAgICBwYWRTdGFydChsZW5ndGgsIHZhbHVlKSB7IHJldHVybiBwYWRkaW5nXzEucGFkU3RhcnQodGhpcywgbGVuZ3RoLCB2YWx1ZSk7IH1cbiAgICBwYWRFbmQobGVuZ3RoLCB2YWx1ZSkgeyByZXR1cm4gcGFkZGluZ18xLnBhZEVuZCh0aGlzLCBsZW5ndGgsIHZhbHVlKTsgfVxuICAgIGVxdWFscyhhKSB7IHJldHVybiBiYXNpY18xLmVxdWFscyh0aGlzLCBhKTsgfVxuICAgIGNvcHkoKSB7IHJldHVybiBiYXNpY18xLmNvcHkodGhpcyk7IH1cbiAgICB0b1NldCgpIHsgcmV0dXJuIG5ldyBTZXQodGhpcyk7IH1cbiAgICB1bmlxdWUoKSB7IHJldHVybiBjb3VudHNfMS51bmlxdWUodGhpcyk7IH1cbiAgICBjb3VudHMoKSB7IHJldHVybiBjb3VudHNfMS5jb3VudHModGhpcyk7IH1cbiAgICBjb3VudChwYXJhbSkge1xuICAgICAgICByZXR1cm4gY291bnRzXzEuY291bnQodGhpcywgcGFyYW0pO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZhbHVlQXJyYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWx1ZS1hcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscztcbmZ1bmN0aW9uIGNvcHkodikge1xuICAgIGxldCByZXN1bHQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSB2W2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5jb3B5ID0gY29weTtcbmZ1bmN0aW9uIHNodWZmbGUodikge1xuICAgIGZvciAobGV0IGkgPSB2Lmxlbmd0aDsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xuICAgICAgICBsZXQgeCA9IHZbaSAtIDFdO1xuICAgICAgICB2W2kgLSAxXSA9IHZbal07XG4gICAgICAgIHZbal0gPSB4O1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiB0cmFuc2Zvcm0odiwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdltpXSA9IGNhbGxiYWNrLmNhbGwobnVsbCwgdltpXSwgaSwgdik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5mdW5jdGlvbiBlYWNoKHYsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgdltpXSwgaSwgdik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5lYWNoID0gZWFjaDtcbmZ1bmN0aW9uIGZpbGxCeSh2LCBmbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2W2ldID0gZm4uY2FsbChudWxsLCBpLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmZpbGxCeSA9IGZpbGxCeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2ljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gY291bnQodiwgcGFyYW0pIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAocGFyYW0uY2FsbChudWxsLCB2W2ldLCBpLCB2KSlcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtID09PSB2W2ldIHx8IChOdW1iZXIuaXNOYU4ocGFyYW0pICYmIE51bWJlci5pc05hTih2W2ldKSkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xufVxuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuZnVuY3Rpb24gY291bnRzKHYpIHtcbiAgICBsZXQgY291bnRzID0gbmV3IE1hcCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHZbaV07XG4gICAgICAgIGNvdW50cy5zZXQoeCwgKGNvdW50cy5nZXQoeCkgfHwgMCkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50cztcbn1cbmV4cG9ydHMuY291bnRzID0gY291bnRzO1xuZnVuY3Rpb24gdW5pcXVlKHYpIHtcbiAgICBsZXQgc2V0ID0gbmV3IFNldCgpO1xuICAgIGxldCByZXN1bHQgPSBuZXcgdi5jb25zdHJ1Y3RvcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHZbaV07XG4gICAgICAgIGlmICghc2V0Lmhhcyh4KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeCk7XG4gICAgICAgICAgICBzZXQuYWRkKHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnVuaXF1ZSA9IHVuaXF1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvdW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHJhbmdlKHYsIHN0YXJ0LCBlbmQsIHN0ZXApIHtcbiAgICBzdGVwID0gc3RlcCA9PSBudWxsID8gMSA6IHN0ZXA7XG4gICAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMCA6IChzdGFydCA8IDAgPyB2Lmxlbmd0aCArIHN0YXJ0IDogc3RhcnQpO1xuICAgIGVuZCA9IGVuZCA9PSBudWxsID8gdi5sZW5ndGggOiAoZW5kIDwgMCA/IHYubGVuZ3RoICsgZW5kIDogZW5kKTtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoKGVuZCAtIHN0YXJ0KSAvIHN0ZXApIH0pO1xuICAgIGxldCBqID0gMDtcbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHZbaV07XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0OyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHZbaV07XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIHBlcm11dGUodiwgaW5kZXhlcykge1xuICAgIGxldCByZXN1bHQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IGluZGV4ZXMubGVuZ3RoIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5kZXhlc1tpXSA+PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSB2W2luZGV4ZXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gdlt2Lmxlbmd0aCArIGluZGV4ZXNbaV1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBlcm11dGUgPSBwZXJtdXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXhpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBwYWRTdGFydCh2LCBsZW5ndGgsIHZhbHVlKSB7XG4gICAgd2hpbGUgKHYubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHYudW5zaGlmdCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5wYWRTdGFydCA9IHBhZFN0YXJ0O1xuZnVuY3Rpb24gcGFkRW5kKHYsIGxlbmd0aCwgdmFsdWUpIHtcbiAgICB3aGlsZSAodi5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdi5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnBhZEVuZCA9IHBhZEVuZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZGRpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCB2YWx1ZV9hcnJheV8xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheScpO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi92ZWN0b3Ivc3RhdGlzdGljcycpO1xuY29uc3QgbWF0aF8xID0gcmVxdWlyZSgnLi92ZWN0b3IvbWF0aCcpO1xuY29uc3Qgb3BlcmF0aW9uc18xID0gcmVxdWlyZSgnLi91dGlscy9vcGVyYXRpb25zJyk7XG5jb25zdCBvcGVyYXRpb25zXzIgPSByZXF1aXJlKCcuL3ZlY3Rvci9vcGVyYXRpb25zJyk7XG5jb25zdCBkb3RfcHJvZHVjdF8xID0gcmVxdWlyZSgnLi92ZWN0b3IvZG90LXByb2R1Y3QnKTtcbmNvbnN0IHF1YW50aWxlc18xID0gcmVxdWlyZSgnLi92ZWN0b3IvcXVhbnRpbGVzJyk7XG5jb25zdCBoaXN0b2dyYW1fMSA9IHJlcXVpcmUoJy4vdmVjdG9yL2hpc3RvZ3JhbScpO1xuY29uc3QgY3VtdWxhdGl2ZV8xID0gcmVxdWlyZSgnLi92ZWN0b3IvY3VtdWxhdGl2ZScpO1xuY29uc3Qgbm9ybWFsaXplXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9ub3JtYWxpemUnKTtcbmNvbnN0IHN0YXRzXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9zdGF0cycpO1xuY29uc3QgcmFuZ2VfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3JhbmdlJyk7XG5jbGFzcyBWZWN0b3IgZXh0ZW5kcyB2YWx1ZV9hcnJheV8xLmRlZmF1bHQge1xuICAgIG1pbigpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5taW4odGhpcyk7IH1cbiAgICBtYXgoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWF4KHRoaXMpOyB9XG4gICAgZXh0ZW50KCkgeyByZXR1cm4gc3RhdGlzdGljc18xLmV4dGVudCh0aGlzKTsgfVxuICAgIG1lYW4oKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWVhbih0aGlzKTsgfVxuICAgIHZhcmlhbmNlKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLnZhcmlhbmNlKHRoaXMpOyB9XG4gICAgc3RkKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLnN0ZCh0aGlzKTsgfVxuICAgIG1hZCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tYWQodGhpcyk7IH1cbiAgICBtb2RlKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1vZGUodGhpcyk7IH1cbiAgICBhcmdtaW4oKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuYXJnbWluKHRoaXMpOyB9XG4gICAgYXJnbWF4KCkgeyByZXR1cm4gc3RhdGlzdGljc18xLmFyZ21heCh0aGlzKTsgfVxuICAgIG1lZGlhbigpIHsgcmV0dXJuIHF1YW50aWxlc18xLm1lZGlhbih0aGlzKTsgfVxuICAgIHF1YW50aWxlcyhxKSB7IHJldHVybiBxdWFudGlsZXNfMS5xdWFudGlsZXModGhpcywgcSk7IH1cbiAgICBoaXN0b2dyYW0ob3B0aW9ucykgeyByZXR1cm4gaGlzdG9ncmFtXzEuaGlzdG9ncmFtKHRoaXMsIG9wdGlvbnMpOyB9XG4gICAgbm9ybWFsaXplU3RhdHMoKSB7IG5vcm1hbGl6ZV8xLm5vcm1hbGl6ZVN0YXRzKHRoaXMpOyByZXR1cm4gdGhpczsgfVxuICAgIG5vcm1hbGl6ZVByb2JhKCkgeyBub3JtYWxpemVfMS5ub3JtYWxpemVQcm9iYSh0aGlzKTsgcmV0dXJuIHRoaXM7IH1cbiAgICBub3JtYWxpemVWZWN0b3IoKSB7IG5vcm1hbGl6ZV8xLm5vcm1hbGl6ZVZlY3Rvcih0aGlzKTsgcmV0dXJuIHRoaXM7IH1cbiAgICBzdGF0cygpIHsgcmV0dXJuIHN0YXRzXzEuc3RhdHModGhpcyk7IH1cbiAgICBzdW0oKSB7IHJldHVybiBtYXRoXzEuc3VtKHRoaXMpOyB9XG4gICAgc3VtT2ZTcXVhcmVzKCkgeyByZXR1cm4gbWF0aF8xLnN1bU9mU3F1YXJlcyh0aGlzKTsgfVxuICAgIG1hZ25pdHVkZSgpIHsgcmV0dXJuIG1hdGhfMS5tYWduaXR1ZGUodGhpcyk7IH1cbiAgICBwcm9kdWN0KCkgeyByZXR1cm4gbWF0aF8xLnByb2R1Y3QodGhpcyk7IH1cbiAgICBjdW1zdW0oKSB7IHJldHVybiBjdW11bGF0aXZlXzEuY3Vtc3VtKHRoaXMpOyB9XG4gICAgZGlmZigpIHsgcmV0dXJuIGN1bXVsYXRpdmVfMS5kaWZmKHRoaXMpOyB9XG4gICAgc29ydCgpIHsgcmV0dXJuIHN1cGVyLnNvcnQoKGEsIGIpID0+IGEgLSBiKTsgfVxuICAgIHNvcnREZXNjKCkgeyByZXR1cm4gc3VwZXIuc29ydCgoYSwgYikgPT4gYiAtIGEpOyB9XG4gICAgc29tZShjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sgPyBzdXBlci5zb21lKGNhbGxiYWNrKSA6IHN1cGVyLnNvbWUoeCA9PiAhIXgpO1xuICAgIH1cbiAgICBldmVyeShjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sgPyBzdXBlci5ldmVyeShjYWxsYmFjaykgOiBzdXBlci5ldmVyeSh4ID0+ICEheCk7XG4gICAgfVxuICAgIGFkZChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5hZGQpO1xuICAgIH1cbiAgICBhZGRTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEuYWRkKTtcbiAgICB9XG4gICAgc3VidHJhY3QocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuc3VidHJhY3QpO1xuICAgIH1cbiAgICBzdWJ0cmFjdFNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5zdWJ0cmFjdCk7XG4gICAgfVxuICAgIG11bHRpcGx5KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm11bHRpcGx5KTtcbiAgICB9XG4gICAgbXVsdGlwbHlTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEubXVsdGlwbHkpO1xuICAgIH1cbiAgICBkaXZpZGUocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuZGl2aWRlKTtcbiAgICB9XG4gICAgZGl2aWRlU2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLmRpdmlkZSk7XG4gICAgfVxuICAgIHBvdyhwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5wb3cpO1xuICAgIH1cbiAgICBwb3dTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEucG93KTtcbiAgICB9XG4gICAgYW5kKHYpIHsgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgdiwgZmFsc2UsIG9wZXJhdGlvbnNfMS5hbmQpOyB9XG4gICAgb3IodikgeyByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCB2LCBmYWxzZSwgb3BlcmF0aW9uc18xLm9yKTsgfVxuICAgIGxlc3NUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmxlc3NUaGFuKTtcbiAgICB9XG4gICAgbW9yZVRoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubW9yZVRoYW4pO1xuICAgIH1cbiAgICBsZXNzT3JFcXVhbFRoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubGVzc09yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgbW9yZU9yRXF1YWxUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm1vcmVPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIGVxdWFsKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmVxdWFsKTtcbiAgICB9XG4gICAgbm90RXF1YWwocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubm90RXF1YWwpO1xuICAgIH1cbiAgICBkb3QodikgeyByZXR1cm4gZG90X3Byb2R1Y3RfMS5kb3RQcm9kdWN0KHRoaXMsIHYpOyB9XG4gICAgc3RhdGljIGFkZCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmFkZCk7XG4gICAgfVxuICAgIHN0YXRpYyBzdWJ0cmFjdCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLnN1YnRyYWN0KTtcbiAgICB9XG4gICAgc3RhdGljIG11bHRpcGx5KHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubXVsdGlwbHkpO1xuICAgIH1cbiAgICBzdGF0aWMgZGl2aWRlKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuZGl2aWRlKTtcbiAgICB9XG4gICAgc3RhdGljIHBvdyh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLnBvdyk7XG4gICAgfVxuICAgIHN0YXRpYyBhbmQodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5hbmQpO1xuICAgIH1cbiAgICBzdGF0aWMgb3IodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5vcik7XG4gICAgfVxuICAgIHN0YXRpYyBsZXNzVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmxlc3NUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIG1vcmVUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubW9yZVRoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgbGVzc09yRXF1YWxUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubGVzc09yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIG1vcmVPckVxdWFsVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm1vcmVPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBlcXVhbCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmVxdWFsKTtcbiAgICB9XG4gICAgc3RhdGljIG5vdEVxdWFsKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubm90RXF1YWwpO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXzEucmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXAsIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgbGluc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCkge1xuICAgICAgICByZXR1cm4gcmFuZ2VfMS5saW5zcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGxvZ3NwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIGJhc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXzEubG9nc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgYmFzZSwgdGhpcyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gX2N1bXN1bSh2LCBvdXQpIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICBvdXRbaV0gPSB4ICsgKGkgPT0gMCA/IDAgOiBvdXRbaSAtIDFdKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIF9kaWZmKHYsIG91dCkge1xuICAgIGxldCBwcmV2ID0gaGVscGVyc18xLmdldE51bWJlclZhbHVlKHYsIDApO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IGhlbHBlcnNfMS5nZXROdW1iZXJWYWx1ZSh2LCBpKTtcbiAgICAgICAgb3V0W2kgLSAxXSA9IHggLSBwcmV2O1xuICAgICAgICBwcmV2ID0geDtcbiAgICB9XG59XG5mdW5jdGlvbiBjdW1zdW0odikge1xuICAgIGxldCBvdXQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIH0pO1xuICAgIF9jdW1zdW0odiwgb3V0KTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5jdW1zdW0gPSBjdW1zdW07XG5mdW5jdGlvbiBkaWZmKHYpIHtcbiAgICBsZXQgb3V0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCAtIDEgfSk7XG4gICAgX2RpZmYodiwgb3V0KTtcbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1bXVsYXRpdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBkb3RQcm9kdWN0KHYxLCB2Mikge1xuICAgIGxldCB5ID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlclBhaXIodjEsIHYyLCAoeDEsIHgyKSA9PiB7XG4gICAgICAgIHkgKz0geDEgKiB4MjtcbiAgICB9KTtcbiAgICByZXR1cm4geTtcbn1cbmV4cG9ydHMuZG90UHJvZHVjdCA9IGRvdFByb2R1Y3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb3QtcHJvZHVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vc3RhdGlzdGljcycpO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gaGlzdG9ncmFtKHYsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBsZXQgbWluID0gb3B0aW9ucy5taW47XG4gICAgbGV0IG1heCA9IG9wdGlvbnMubWF4O1xuICAgIGlmIChtaW4gPT0gbnVsbCB8fCBtYXggPT0gbnVsbCkge1xuICAgICAgICBsZXQgZXh0ID0gc3RhdGlzdGljc18xLmV4dGVudCh2KTtcbiAgICAgICAgaWYgKG1pbiA9PSBudWxsKVxuICAgICAgICAgICAgbWluID0gZXh0WzBdO1xuICAgICAgICBpZiAobWF4ID09IG51bGwpXG4gICAgICAgICAgICBtYXggPSBleHRbMV07XG4gICAgfVxuICAgIGxldCBiaW5zID0gb3B0aW9ucy5iaW5zO1xuICAgIGlmIChvcHRpb25zLmJpbldpZHRoKSB7XG4gICAgICAgIGJpbnMgPSBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyBvcHRpb25zLmJpbldpZHRoKTtcbiAgICB9XG4gICAgaWYgKGJpbnMgPT0gbnVsbCkge1xuICAgICAgICBiaW5zID0gTWF0aC5mbG9vcihNYXRoLnNxcnQodi5sZW5ndGgpKTtcbiAgICB9XG4gICAgbGV0IGR4ID0gKG1heCAtIG1pbikgLyBiaW5zO1xuICAgIGxldCB4ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBiaW5zIH0pO1xuICAgIGxldCB5ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBiaW5zIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluczsgaSsrKSB7XG4gICAgICAgIHhbaV0gPSBtaW4gKyBpICogZHg7XG4gICAgICAgIHlbaV0gPSAwO1xuICAgIH1cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyh2LCB2aSA9PiB7XG4gICAgICAgIGlmICh2aSA+PSBtaW4gJiYgdmkgPCBtYXgpIHtcbiAgICAgICAgICAgIHlbTWF0aC5mbG9vcigodmkgLSBtaW4pIC8gZHgpXSsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZpID09PSBtYXgpIHtcbiAgICAgICAgICAgIHlbeS5sZW5ndGggLSAxXSsrO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMucHJvYmFiaWxpdHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB5W2ldIC89IGNvdW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIGR4OiBkeCB9O1xufVxuZXhwb3J0cy5oaXN0b2dyYW0gPSBoaXN0b2dyYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oaXN0b2dyYW0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBzdW0oYXJyYXkpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcihhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSB4O1xuICAgIH0pO1xuICAgIHJldHVybiBzdW07XG59XG5leHBvcnRzLnN1bSA9IHN1bTtcbmZ1bmN0aW9uIHN1bU9mU3F1YXJlcyhhcnJheSkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IHggKiB4O1xuICAgIH0pO1xuICAgIHJldHVybiBzdW07XG59XG5leHBvcnRzLnN1bU9mU3F1YXJlcyA9IHN1bU9mU3F1YXJlcztcbmZ1bmN0aW9uIG1hZ25pdHVkZShhcnJheSkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoc3VtT2ZTcXVhcmVzKGFycmF5KSk7XG59XG5leHBvcnRzLm1hZ25pdHVkZSA9IG1hZ25pdHVkZTtcbmZ1bmN0aW9uIHByb2R1Y3QoYXJyYXkpIHtcbiAgICBsZXQgcHJvZHVjdCA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIoYXJyYXksIHggPT4ge1xuICAgICAgICBwcm9kdWN0ICo9IHg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2R1Y3Q7XG59XG5leHBvcnRzLnByb2R1Y3QgPSBwcm9kdWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmNvbnN0IG1hdGhfMSA9IHJlcXVpcmUoJy4vbWF0aCcpO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi9zdGF0aXN0aWNzJyk7XG5mdW5jdGlvbiBub3JtYWxpemVQcm9iYSh2KSB7XG4gICAgbGV0IHMgPSBtYXRoXzEuc3VtKHYpO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIHZbaV0gLz0gcztcbiAgICB9KTtcbn1cbmV4cG9ydHMubm9ybWFsaXplUHJvYmEgPSBub3JtYWxpemVQcm9iYTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVZlY3Rvcih2KSB7XG4gICAgbGV0IHMgPSBtYXRoXzEubWFnbml0dWRlKHYpO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIHZbaV0gLz0gcztcbiAgICB9KTtcbn1cbmV4cG9ydHMubm9ybWFsaXplVmVjdG9yID0gbm9ybWFsaXplVmVjdG9yO1xuZnVuY3Rpb24gbm9ybWFsaXplU3RhdHModikge1xuICAgIGxldCBtID0gc3RhdGlzdGljc18xLm1lYW4odik7XG4gICAgbGV0IG8gPSBzdGF0aXN0aWNzXzEuc3RkKHYpO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIHZbaV0gPSAoeCAtIG0pIC8gbztcbiAgICB9KTtcbn1cbmV4cG9ydHMubm9ybWFsaXplU3RhdHMgPSBub3JtYWxpemVTdGF0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIHNjYWxhck9wZXJhdGlvbih2LCBzLCBvdXRwdXQsIG9wZXJhdGlvbikge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIG91dHB1dFtpXSA9IG9wZXJhdGlvbih4LCBzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNjYWxhck9wZXJhdGlvbjIocywgdiwgb3V0cHV0LCBvcGVyYXRpb24pIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICBvdXRwdXRbaV0gPSBvcGVyYXRpb24ocywgeCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBiaW5hcnlPcGVyYXRpb24odjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbikge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyUGFpcih2MSwgdjIsICh4MSwgeDIsIGkpID0+IHtcbiAgICAgICAgb3V0cHV0W2ldID0gb3BlcmF0aW9uKHgxLCB4Mik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB2ZWN0b3JPcGVyYXRpb24odiwgcGFyYW0sIG1vZGlmeVNlbGYsIG9wZXJhdGlvbikge1xuICAgIGxldCBvdXRwdXQgPSBtb2RpZnlTZWxmID8gdiA6IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggfSk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2NhbGFyT3BlcmF0aW9uKHYsIHBhcmFtLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmFtLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJpbmFyeU9wZXJhdGlvbih2LCBwYXJhbSwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IHBlcmZvcm0gdmVjdG9yIG9wZXJhdGlvbiBvbiBvYmplY3Qgd2l0aCBpbnZhbGlkIHR5cGU6JyArIHBhcmFtICsgJywgJyArIHR5cGVvZiBwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzLnZlY3Rvck9wZXJhdGlvbiA9IHZlY3Rvck9wZXJhdGlvbjtcbmZ1bmN0aW9uIHZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0eXBlLCBvcGVyYXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHYxID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdjIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb24odjEsIHYyKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dCA9IHR5cGUuZnJvbSh7IGxlbmd0aDogdjEubGVuZ3RoIHx8IHYyLmxlbmd0aCB9KTtcbiAgICBpZiAodHlwZW9mIHYxID09PSAnbnVtYmVyJyAmJiB2Mi5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzY2FsYXJPcGVyYXRpb24yKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmICh2MS5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdjIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNjYWxhck9wZXJhdGlvbih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodjEubGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdjIubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYmluYXJ5T3BlcmF0aW9uKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5cXCd0IHBlcmZvcm0gdmVjdG9yIG9wZXJhdGlvbiBvbiBvYmplY3RzIHdpdGggaW52YWxpZCB0eXBlOiAnICsgdHlwZW9mIHYxICsgJywgJyArIHR5cGVvZiB2Mik7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzLnZlY3Rvck9wZXJhdGlvbjIgPSB2ZWN0b3JPcGVyYXRpb24yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3BlcmF0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9oZWxwZXJzXCIpO1xuZnVuY3Rpb24gcXVhbnRpbGUodiwgcCkge1xuICAgIGxldCBoID0gKHYubGVuZ3RoIC0gMSkgKiBwICsgMTtcbiAgICBsZXQgaF8gPSBNYXRoLmZsb29yKGgpO1xuICAgIGxldCBzID0gaCAtIGhfO1xuICAgIGxldCB4ID0gdltoXyAtIDFdO1xuICAgIHJldHVybiBzID8geCArIHMgKiAodltoX10gLSB4KSA6IHg7XG59XG5mdW5jdGlvbiBnZXRTb3J0ZWROdW1iZXJzKHYpIHtcbiAgICBsZXQgdmFsdWVzID0gW107XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKHYsIHggPT4geyB2YWx1ZXMucHVzaCh4KTsgfSk7XG4gICAgcmV0dXJuIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG59XG5mdW5jdGlvbiBxdWFudGlsZXModiwgcSkge1xuICAgIGxldCBzb3J0ZWQgPSBnZXRTb3J0ZWROdW1iZXJzKHYpO1xuICAgIGxldCByZXN1bHQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHEgKyAxIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHE7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBxdWFudGlsZShzb3J0ZWQsIGkgLyBxKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucXVhbnRpbGVzID0gcXVhbnRpbGVzO1xuZnVuY3Rpb24gbWVkaWFuKHYpIHtcbiAgICBpZiAodi5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBsZXQgc29ydGVkID0gZ2V0U29ydGVkTnVtYmVycyh2KTtcbiAgICByZXR1cm4gcXVhbnRpbGUoc29ydGVkLCAwLjUpO1xufVxuZXhwb3J0cy5tZWRpYW4gPSBtZWRpYW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWFudGlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCwgdHlwZSkge1xuICAgIGlmIChzdG9wID09IG51bGwgJiYgc3RlcCA9PSBudWxsKSB7XG4gICAgICAgIHN0b3AgPSBzdGFydDtcbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgIH1cbiAgICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogc3RhcnQ7XG4gICAgc3RlcCA9IHN0ZXAgPT0gbnVsbCA/IChzdGFydCA8PSBzdG9wID8gMSA6IC0xKSA6IHN0ZXA7XG4gICAgaWYgKChzdG9wIC0gc3RhcnQpIC8gc3RlcCA8IDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCcpO1xuICAgIGxldCB2ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSB9KTtcbiAgICBsZXQgeDtcbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKHN0YXJ0IDwgc3RvcCkge1xuICAgICAgICB3aGlsZSAoKHggPSBzdGFydCArIGkgKiBzdGVwKSA8IHN0b3ApIHtcbiAgICAgICAgICAgIHZbaSsrXSA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdoaWxlICgoeCA9IHN0YXJ0ICsgaSAqIHN0ZXApID4gc3RvcCkge1xuICAgICAgICAgICAgdltpKytdID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIGxpbnNwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIHR5cGUpIHtcbiAgICBudW0gPSBudW0gPT0gbnVsbCA/IDEwMCA6IG51bTtcbiAgICBsZXQgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gKGV4Y2x1ZGVFbmQgPyBudW0gOiBudW0gLSAxKTtcbiAgICBsZXQgdiA9IHR5cGUuZnJvbSh7IGxlbmd0aDogbnVtIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgdltpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5saW5zcGFjZSA9IGxpbnNwYWNlO1xuZnVuY3Rpb24gbG9nc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgYmFzZSwgdHlwZSkge1xuICAgIG51bSA9IG51bSA9PSBudWxsID8gMTAwIDogbnVtO1xuICAgIGJhc2UgPSBiYXNlID09IG51bGwgPyAxMCA6IGJhc2U7XG4gICAgbGV0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIChleGNsdWRlRW5kID8gbnVtIDogbnVtIC0gMSk7XG4gICAgbGV0IHYgPSB0eXBlLmZyb20oeyBsZW5ndGg6IG51bSB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBNYXRoLnBvdyhiYXNlLCBzdGFydCArIGkgKiBzdGVwKTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmxvZ3NwYWNlID0gbG9nc3BhY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5nZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIG1pbihhcnJheSkge1xuICAgIGxldCBtaW47XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkIHx8IHggPCBtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IHg7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWluO1xufVxuZXhwb3J0cy5taW4gPSBtaW47XG5mdW5jdGlvbiBhcmdtaW4oYXJyYXkpIHtcbiAgICBsZXQgbWluO1xuICAgIGxldCBpbmRleDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksICh4LCBpKSA9PiB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCB8fCB4IDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB4O1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xufVxuZXhwb3J0cy5hcmdtaW4gPSBhcmdtaW47XG5mdW5jdGlvbiBtYXgoYXJyYXkpIHtcbiAgICBsZXQgbWF4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCB8fCB4ID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heDtcbn1cbmV4cG9ydHMubWF4ID0gbWF4O1xuZnVuY3Rpb24gYXJnbWF4KGFycmF5KSB7XG4gICAgbGV0IG1heDtcbiAgICBsZXQgaW5kZXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCAoeCwgaSkgPT4ge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgeCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0geDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbmRleDtcbn1cbmV4cG9ydHMuYXJnbWF4ID0gYXJnbWF4O1xuZnVuY3Rpb24gZXh0ZW50KGFycmF5KSB7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgbWF4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCB8fCB4ID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCB8fCB4IDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFttaW4sIG1heF07XG59XG5leHBvcnRzLmV4dGVudCA9IGV4dGVudDtcbmZ1bmN0aW9uIG1lYW4oYXJyYXkpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBsZXQgbiA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IHg7XG4gICAgICAgIG4rKztcbiAgICB9KTtcbiAgICByZXR1cm4gbiA9PT0gMCA/IHVuZGVmaW5lZCA6IHN1bSAvIG47XG59XG5leHBvcnRzLm1lYW4gPSBtZWFuO1xuZnVuY3Rpb24gdmFyaWFuY2UoYXJyYXkpIHtcbiAgICBsZXQgbiA9IDA7XG4gICAgbGV0IG1lYW4gPSAwO1xuICAgIGxldCBtMiA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgbisrO1xuICAgICAgICBsZXQgZGVsdGEgPSB4IC0gbWVhbjtcbiAgICAgICAgbWVhbiArPSBkZWx0YSAvIG47XG4gICAgICAgIG0yICs9IGRlbHRhICogKHggLSBtZWFuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbiA+IDEgPyAobTIgLyAobiAtIDEpKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMudmFyaWFuY2UgPSB2YXJpYW5jZTtcbmZ1bmN0aW9uIHN0ZChhcnJheSkge1xuICAgIGxldCBzcXVhcmVkID0gdmFyaWFuY2UoYXJyYXkpO1xuICAgIHJldHVybiBzcXVhcmVkID09IG51bGwgPyBzcXVhcmVkIDogTWF0aC5zcXJ0KHNxdWFyZWQpO1xufVxuZXhwb3J0cy5zdGQgPSBzdGQ7XG5mdW5jdGlvbiBtYWQoYXJyYXkpIHtcbiAgICBsZXQgYXZnID0gbWVhbihhcnJheSk7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgbGV0IG4gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSBNYXRoLmFicyhhdmcgLSB4KTtcbiAgICAgICAgbisrO1xuICAgIH0pO1xuICAgIHJldHVybiBuID09PSAwID8gdW5kZWZpbmVkIDogc3VtIC8gbjtcbn1cbmV4cG9ydHMubWFkID0gbWFkO1xuZnVuY3Rpb24gbW9kZShhcnJheSkge1xuICAgIGxldCBjb3VudHMgPSB7fTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAoIWNvdW50c1t4XSkge1xuICAgICAgICAgICAgY291bnRzW3hdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvdW50c1t4XSsrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1heFZhbHVlO1xuICAgIGxldCBtYXhDb3VudCA9IDA7XG4gICAgT2JqZWN0LmtleXMoY291bnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChjb3VudHNba2V5XSA+IG1heENvdW50KSB7XG4gICAgICAgICAgICBtYXhDb3VudCA9IGNvdW50c1trZXldO1xuICAgICAgICAgICAgbWF4VmFsdWUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF4VmFsdWUgPyBOdW1iZXIobWF4VmFsdWUpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5tb2RlID0gbW9kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRpc3RpY3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKTtcbmNvbnN0IG1hdGhfMSA9IHJlcXVpcmUoJy4vbWF0aCcpO1xuY29uc3QgcXVhbnRpbGVzXzEgPSByZXF1aXJlKCcuL3F1YW50aWxlcycpO1xuZnVuY3Rpb24gc3RhdHModikge1xuICAgIGxldCBpbnZhbGlkcyA9IGNvdW50SW52YWxpZCh2KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGg6IHYubGVuZ3RoLFxuICAgICAgICBpbnZhbGlkQ291bnQ6IGludmFsaWRzLmNvdW50LFxuICAgICAgICBpbnZhbGlkQ291bnRzOiBpbnZhbGlkcy5jb3VudHMsXG4gICAgICAgIG1pbjogc3RhdGlzdGljc18xLm1pbih2KSxcbiAgICAgICAgbWF4OiBzdGF0aXN0aWNzXzEubWF4KHYpLFxuICAgICAgICBtZWFuOiBzdGF0aXN0aWNzXzEubWVhbih2KSxcbiAgICAgICAgbWVkaWFuOiBxdWFudGlsZXNfMS5tZWRpYW4odiksXG4gICAgICAgIG1vZGU6IHN0YXRpc3RpY3NfMS5tb2RlKHYpLFxuICAgICAgICBzdGQ6IHN0YXRpc3RpY3NfMS5zdGQodiksXG4gICAgICAgIHZhcmlhbmNlOiBzdGF0aXN0aWNzXzEudmFyaWFuY2UodiksXG4gICAgICAgIG1hZDogc3RhdGlzdGljc18xLm1hZCh2KSxcbiAgICAgICAgZGVjaWxlczogcXVhbnRpbGVzXzEucXVhbnRpbGVzKHYsIDEwKSxcbiAgICAgICAgc3VtOiBtYXRoXzEuc3VtKHYpXG4gICAgfTtcbn1cbmV4cG9ydHMuc3RhdHMgPSBzdGF0cztcbmZ1bmN0aW9uIGNvdW50SW52YWxpZCh2KSB7XG4gICAgbGV0IGNvdW50cyA9IHtcbiAgICAgICAgdW5kZWZpbmVkOiAwLFxuICAgICAgICAnbnVsbCc6IDAsXG4gICAgICAgIE5hTjogMCxcbiAgICAgICAgSW5maW5pdHk6IDAsXG4gICAgICAgICctSW5maW5pdHknOiAwXG4gICAgfTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY291bnRzW3ZbaV1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvdW50c1t2W2ldXSsrO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBjb3VudHM6IGNvdW50cywgY291bnQ6IGNvdW50IH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0cy5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBBY3RvclR5cGUgfSBmcm9tIFwiLi9BY3RvclwiO1xuaW1wb3J0IHsgQUNUT1JfUkFESVVTLCBIRUlHSFQsIFdJRFRIIH0gZnJvbSBcIi4vY29uc3RzXCI7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9TaW11bGF0aW9uXCI7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgaWNvbnMgPSBuZXcgTWFwPEFjdG9yVHlwZSwgSFRNTEltYWdlRWxlbWVudD4oW1xuICAgIFtBY3RvclR5cGUucm9jaywgZ2V0SW1hZ2UoJ3JvY2snKV0sXG4gICAgW0FjdG9yVHlwZS5wYXBlciwgZ2V0SW1hZ2UoJ3BhcGVyJyldLFxuICAgIFtBY3RvclR5cGUuc2Npc3NvciwgZ2V0SW1hZ2UoJ3NjaXNzb3InKV1cbl0pO1xuXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IHNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbigpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKTtcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNpbXVsYXRpb24ucmVzZXQoKSk7XG5cbiAgICBzaW11bGF0aW9uLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlKGljb246IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gYCR7aWNvbn0ucG5nYDtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cblxubGV0IGxhc3RUaW1lc3RhbXA6IG51bWJlciA9IG51bGw7XG5mdW5jdGlvbiBhbmltYXRpb25Mb29wKHRpbWVzdGFtcDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChsYXN0VGltZXN0YW1wICE9PSBudWxsKSB7XG4gICAgICAgIHNpbXVsYXRpb24uc3RlcCgodGltZXN0YW1wIC0gbGFzdFRpbWVzdGFtcCkgKiAwLjAwMSk7XG4gICAgfVxuICAgIGxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICAgIHNpbXVsYXRpb24uYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGljb25zLmdldChhY3Rvci50eXBlKSwgYWN0b3IucG9zWzBdIC0gQUNUT1JfUkFESVVTLCBhY3Rvci5wb3NbMV0gLSBBQ1RPUl9SQURJVVMsIEFDVE9SX1JBRElVUyAqIDIsIEFDVE9SX1JBRElVUyAqIDIpO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xufVxuXG5zZXRJbnRlcnZhbCgoKSA9PiBzaW11bGF0aW9uLmNoZWNrTWlzc2luZ1R5cGVzKCksIDEwMDApO1xuXG5pbml0KCk7XG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
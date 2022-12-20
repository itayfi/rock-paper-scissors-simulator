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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background: #f0f0f0;\n}\n\nbody {\n    margin: 10px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 5px;\n    width: calc(100% - 20px);\n}\n\nfooter a {\n    font-size: 10px;\n    color: gray;\n    text-decoration: none;\n}\n\nfooter a:hover {\n    text-decoration: underline;\n}\n\ncanvas {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: white;\n    border-radius: 4px;\n    max-width: 100%;\n}\n\n.controls {\n    margin-top: 5px;\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["html {\n    background: #f0f0f0;\n}\n\nbody {\n    margin: 10px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 5px;\n    width: calc(100% - 20px);\n}\n\nfooter a {\n    font-size: 10px;\n    color: gray;\n    text-decoration: none;\n}\n\nfooter a:hover {\n    text-decoration: underline;\n}\n\ncanvas {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    background: white;\n    border-radius: 4px;\n    max-width: 100%;\n}\n\n.controls {\n    margin-top: 5px;\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n"],"sourceRoot":""}]);
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
        this.allowWin = false;
        this.destroyOnCollision = false;
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
        if (!Number.isFinite(dt)) {
            return;
        }
        var losersToDestroy = [];
        this.actors.forEach(function (actor, actorIndex) {
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
                        if (_this.destroyOnCollision) {
                            losersToDestroy.push(actorIndex);
                        }
                        else {
                            actor.type = other.type;
                        }
                    }
                    force = force.add(dir.copy().multiply(-1));
                    totalWeight += 1;
                }
                force = force.add(dir.multiply(weight).multiply(actor.compare(other)));
                totalWeight += weight;
            });
            if (totalWeight !== 0) {
                actor.v = actor.v.add(force.divide(totalWeight).multiply(dt * 100));
            }
            if (actor.v.magnitude() > _consts__WEBPACK_IMPORTED_MODULE_2__.MAX_V) {
                actor.v = actor.v.normalizeVector().multiply(_consts__WEBPACK_IMPORTED_MODULE_2__.MAX_V);
            }
            _this.checkBoundaries(actor, dt);
        });
        for (var _i = 0, losersToDestroy_1 = losersToDestroy; _i < losersToDestroy_1.length; _i++) {
            var actorIndex = losersToDestroy_1[_i];
            this.actors.splice(actorIndex, 1);
        }
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
        if (this.allowWin) {
            return;
        }
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
    Simulation.prototype.getCurrentWinner = function () {
        var counts = new Map();
        this.actors.forEach(function (actor) { return counts.set(actor.type, (counts.get(actor.type) || 0) + 1); });
        var maxType = null;
        var maxCount = 0;
        for (var _i = 0, _a = Array.from(counts.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], type = _b[0], count = _b[1];
            if (count > maxCount) {
                maxCount = count;
                maxType = type;
            }
        }
        return maxType;
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
    document.querySelector('#allow-win').addEventListener('change', function (event) {
        simulation.allowWin = event.target.checked;
    });
    document.querySelector('#destroy-on-collision').addEventListener('change', function (event) {
        simulation.destroyOnCollision = event.target.checked;
    });
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
setInterval(function () {
    simulation.checkMissingTypes();
    var icon = icons.get(simulation.getCurrentWinner());
    if (!icon)
        return;
    document.head.querySelector('link[rel=icon]').setAttribute('href', icon.src);
}, 1000);
init();
requestAnimationFrame(animationLoop);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVILHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxXQUFXLENBQUM7SUFDUixVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMvQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakYsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsSUFBSSxFQUFFLENBQUM7QUFDUCxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9BY3Rvci50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL1NpbXVsYXRpb24udHMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3V0aWxzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC91dGlscy9vcGVyYXRpb25zLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS9iYXNpYy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2NvdW50cy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2luZGV4aW5nLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9jdW11bGF0aXZlLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2RvdC1wcm9kdWN0LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2hpc3RvZ3JhbS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9tYXRoLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9vcGVyYXRpb25zLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3F1YW50aWxlcy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9yYW5nZS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9zdGF0aXN0aWNzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3N0YXRzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmNhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFZlY3RvciBmcm9tICd0cy12ZWN0b3InO1xuXG5leHBvcnQgZW51bSBBY3RvclR5cGUge1xuICAgIHJvY2ssXG4gICAgcGFwZXIsXG4gICAgc2Npc3NvclxufVxuXG5jb25zdCB3aW5NYXAgPSBuZXcgTWFwKFtcbiAgICBbQWN0b3JUeXBlLnJvY2ssIEFjdG9yVHlwZS5zY2lzc29yXSxcbiAgICBbQWN0b3JUeXBlLnBhcGVyLCBBY3RvclR5cGUucm9ja10sXG4gICAgW0FjdG9yVHlwZS5zY2lzc29yLCBBY3RvclR5cGUucGFwZXJdLFxuXSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3Ige1xuICAgIHR5cGU6IEFjdG9yVHlwZTtcbiAgICBwb3M6IFZlY3RvcjtcbiAgICB2OiBWZWN0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBBY3RvclR5cGUsIHBvczogVmVjdG9yKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucG9zID0gcG9zLmNvcHkoKTtcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB9XG5cbiAgICBjb21wYXJlKG90aGVyOiBBY3Rvcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IG90aGVyLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5NYXAuZ2V0KHRoaXMudHlwZSkgPT09IG90aGVyLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwidHMtdmVjdG9yXCI7XG5pbXBvcnQgQWN0b3IsIHsgQWN0b3JUeXBlIH0gZnJvbSBcIi4vQWN0b3JcIjtcbmltcG9ydCB7IEFDVE9SX0NPVU5ULCBBQ1RPUl9SQURJVVMsIE1BWF9WIH0gZnJvbSBcIi4vY29uc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xuICAgIGFjdG9yczogQWN0b3JbXTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGFsbG93V2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgZGVzdHJveU9uQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdG9ycy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQUNUT1JfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hY3RvcnMucHVzaChuZXcgQWN0b3IoXG4gICAgICAgICAgICAgICAgaSAlIDMsXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZHQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvc2Vyc1RvRGVzdHJveTogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgdGhpcy5hY3RvcnMuZm9yRWFjaCgoYWN0b3IsIGFjdG9ySW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JjZSA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgICAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKChvdGhlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3RvciA9PT0gb3RoZXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3JUbyA9IFZlY3Rvci5zdWJ0cmFjdChvdGhlci5wb3MsIGFjdG9yLnBvcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gMSAvIHZlY3RvclRvLmRvdCh2ZWN0b3JUbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gdmVjdG9yVG8uY29weSgpLm5vcm1hbGl6ZVZlY3RvcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZlY3RvclRvLm1hZ25pdHVkZSgpIDwgQUNUT1JfUkFESVVTICogMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0b3IuY29tcGFyZShvdGhlcikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95T25Db2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3NlcnNUb0Rlc3Ryb3kucHVzaChhY3RvckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0b3IudHlwZSA9IG90aGVyLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3JjZSA9IGZvcmNlLmFkZChkaXIuY29weSgpLm11bHRpcGx5KC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yY2UgPSBmb3JjZS5hZGQoZGlyLm11bHRpcGx5KHdlaWdodCkubXVsdGlwbHkoYWN0b3IuY29tcGFyZShvdGhlcikpKTtcbiAgICAgICAgICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRvdGFsV2VpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYWN0b3IudiA9IGFjdG9yLnYuYWRkKGZvcmNlLmRpdmlkZSh0b3RhbFdlaWdodCkubXVsdGlwbHkoZHQgKiAxMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rvci52Lm1hZ25pdHVkZSgpID4gTUFYX1YpIHtcbiAgICAgICAgICAgICAgICBhY3Rvci52ID0gYWN0b3Iudi5ub3JtYWxpemVWZWN0b3IoKS5tdWx0aXBseShNQVhfVik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrQm91bmRhcmllcyhhY3RvciwgZHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IGFjdG9ySW5kZXggb2YgbG9zZXJzVG9EZXN0cm95KSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5zcGxpY2UoYWN0b3JJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQm91bmRhcmllcyhhY3RvcjogQWN0b3IsIGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgYWN0b3IucG9zID0gYWN0b3IucG9zLmFkZChhY3Rvci52Lm11bHRpcGx5KGR0KSk7XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMF0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzBdID4gdGhpcy53aWR0aCAtIEFDVE9SX1JBRElVUykge1xuICAgICAgICAgICAgYWN0b3IudlswXSA9IC1hY3Rvci52WzBdO1xuICAgICAgICAgICAgYWN0b3IucG9zWzBdID0gTWF0aC5tYXgoQUNUT1JfUkFESVVTLCBNYXRoLm1pbih0aGlzLndpZHRoIC0gQUNUT1JfUkFESVVTLCBhY3Rvci5wb3NbMF0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0b3IucG9zWzFdIDwgQUNUT1JfUkFESVVTIHx8IGFjdG9yLnBvc1sxXSA+IHRoaXMuaGVpZ2h0IC0gQUNUT1JfUkFESVVTKSB7XG4gICAgICAgICAgICBhY3Rvci52WzFdID0gLWFjdG9yLnZbMV07XG4gICAgICAgICAgICBhY3Rvci5wb3NbMV0gPSBNYXRoLm1heChBQ1RPUl9SQURJVVMsIE1hdGgubWluKHRoaXMuaGVpZ2h0IC0gQUNUT1JfUkFESVVTLCBhY3Rvci5wb3NbMV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrTWlzc2luZ1R5cGVzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hbGxvd1dpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiBbQWN0b3JUeXBlLnJvY2ssIEFjdG9yVHlwZS5wYXBlciwgQWN0b3JUeXBlLnNjaXNzb3JdKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0b3JzLnNvbWUoKGFjdG9yKSA9PiBhY3Rvci50eXBlID09PSB0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYWN0b3JzLmxlbmd0aCldLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFdpbm5lcigpOiBBY3RvclR5cGUge1xuICAgICAgICBjb25zdCBjb3VudHMgPSBuZXcgTWFwPEFjdG9yVHlwZSwgbnVtYmVyPigpO1xuICAgICAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKChhY3RvcikgPT4gY291bnRzLnNldChhY3Rvci50eXBlLCAoY291bnRzLmdldChhY3Rvci50eXBlKSB8fCAwKSArIDEpKTtcbiAgICAgICAgbGV0IG1heFR5cGU6IEFjdG9yVHlwZSA9IG51bGw7XG4gICAgICAgIGxldCBtYXhDb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW3R5cGUsIGNvdW50XSBvZiBBcnJheS5mcm9tKGNvdW50cy5lbnRyaWVzKCkpKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgIG1heENvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgbWF4VHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heFR5cGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEFDVE9SX1JBRElVUyA9IDEwO1xuZXhwb3J0IGNvbnN0IE1BWF9WID0gNTA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9XSURUSCA9IDUwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hFSUdIVCA9IDUwMDtcbmV4cG9ydCBjb25zdCBBQ1RPUl9DT1VOVCA9IDUwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdmVjdG9yXzEgPSByZXF1aXJlKCcuL3ZlY3RvcicpO1xuZXhwb3J0cy5WZWN0b3IgPSB2ZWN0b3JfMS5kZWZhdWx0O1xudmFyIHZhbHVlX2FycmF5XzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5Jyk7XG5leHBvcnRzLlZhbHVlQXJyYXkgPSB2YWx1ZV9hcnJheV8xLmRlZmF1bHQ7XG5jb25zdCB2ZWN0b3JfMiA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2ZWN0b3JfMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBmb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGFycmF5W2ldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgdGhyb3dOb3ROdW1lckVycm9yKHZhbHVlLCBpKTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgdmFsdWUsIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoTm9uTWlzc2luZyA9IGZvckVhY2hOb25NaXNzaW5nO1xuZnVuY3Rpb24gZm9yRWFjaE51bWJlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldE51bWJlclZhbHVlKGFycmF5LCBpKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2YWx1ZSwgaSk7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoTnVtYmVyID0gZm9yRWFjaE51bWJlcjtcbmZ1bmN0aW9uIGZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgY2FsbGJhY2spIHtcbiAgICBjaGVja0xlbmd0aCh2MSwgdjIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdjEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHgxID0gZ2V0TnVtYmVyVmFsdWUodjEsIGkpO1xuICAgICAgICBsZXQgeDIgPSBnZXROdW1iZXJWYWx1ZSh2MiwgaSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgeDEsIHgyLCBpKTtcbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOdW1iZXJQYWlyID0gZm9yRWFjaE51bWJlclBhaXI7XG5mdW5jdGlvbiBnZXROdW1iZXJWYWx1ZShhcnJheSwgaW5kZXgpIHtcbiAgICBsZXQgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuICAgICAgICB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGluZGV4KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLmdldE51bWJlclZhbHVlID0gZ2V0TnVtYmVyVmFsdWU7XG5mdW5jdGlvbiB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGluZGV4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWZWN0b3IgY29udGFpbnMgbm9uLW51bWVyaWMgdmFsdWUgJyArIHZhbHVlICsgJyBhdCBpbmRleCAnICsgaW5kZXggKyAnIG9mIHR5cGUgJyArIHR5cGVvZiB2YWx1ZSk7XG59XG5mdW5jdGlvbiBjaGVja0xlbmd0aCh2MSwgdjIpIHtcbiAgICBpZiAodjEubGVuZ3RoICE9PSB2Mi5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWN0b3Igc2l6ZSBkaWZmZXJlbmNlIGluIHZlY3RvciBvcGVyYXRpb246JyArIHYxLmxlbmd0aCArICcsICcgKyB2Mi5sZW5ndGgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmFkZCA9ICh4LCB5KSA9PiB4ICsgeTtcbmV4cG9ydHMuc3VidHJhY3QgPSAoeCwgeSkgPT4geCAtIHk7XG5leHBvcnRzLm11bHRpcGx5ID0gKHgsIHkpID0+IHggKiB5O1xuZXhwb3J0cy5kaXZpZGUgPSAoeCwgeSkgPT4geCAvIHk7XG5leHBvcnRzLnBvdyA9ICh4LCB5KSA9PiBNYXRoLnBvdyh4LCB5KTtcbmV4cG9ydHMuYW5kID0gKHgsIHkpID0+IHggJiYgeTtcbmV4cG9ydHMub3IgPSAoeCwgeSkgPT4geCB8fCB5O1xuZXhwb3J0cy5tb3JlVGhhbiA9ICh4LCB5KSA9PiB4ID4geSA/IDEgOiAwO1xuZXhwb3J0cy5sZXNzVGhhbiA9ICh4LCB5KSA9PiB4IDwgeSA/IDEgOiAwO1xuZXhwb3J0cy5tb3JlT3JFcXVhbFRoYW4gPSAoeCwgeSkgPT4geCA+PSB5ID8gMSA6IDA7XG5leHBvcnRzLmxlc3NPckVxdWFsVGhhbiA9ICh4LCB5KSA9PiB4IDw9IHkgPyAxIDogMDtcbmV4cG9ydHMuZXF1YWwgPSAoeCwgeSkgPT4geCA9PT0geSA/IDEgOiAwO1xuZXhwb3J0cy5ub3RFcXVhbCA9ICh4LCB5KSA9PiB4ICE9PSB5ID8gMSA6IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVyYXRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaW5kZXhpbmdfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvaW5kZXhpbmcnKTtcbmNvbnN0IGNvdW50c18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9jb3VudHMnKTtcbmNvbnN0IGJhc2ljXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L2Jhc2ljJyk7XG5jb25zdCBwYWRkaW5nXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L3BhZGRpbmcnKTtcbmNsYXNzIFZhbHVlQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gICAgZ2V0IGZpcnN0KCkgeyByZXR1cm4gdGhpcy5sZW5ndGggPiAwID8gdGhpc1swXSA6IHVuZGVmaW5lZDsgfVxuICAgIGdldCBsYXN0KCkgeyByZXR1cm4gdGhpcy5sZW5ndGggPiAwID8gdGhpc1t0aGlzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkOyB9XG4gICAgaGVhZChuKSB7IHJldHVybiB0aGlzLnNsaWNlKDAsIG4gfHwgMTApOyB9XG4gICAgdGFpbChuKSB7IHJldHVybiB0aGlzLnNsaWNlKC0obiB8fCAxMCkpOyB9XG4gICAgcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkgeyByZXR1cm4gaW5kZXhpbmdfMS5yYW5nZSh0aGlzLCBzdGFydCwgZW5kLCBzdGVwKTsgfVxuICAgIHBlcm11dGUoaW5kZXhlcykgeyByZXR1cm4gaW5kZXhpbmdfMS5wZXJtdXRlKHRoaXMsIGluZGV4ZXMpOyB9XG4gICAgc2h1ZmZsZSgpIHsgcmV0dXJuIGJhc2ljXzEuc2h1ZmZsZSh0aGlzKTsgfVxuICAgIHRyYW5zZm9ybShjYWxsYmFjaykgeyByZXR1cm4gYmFzaWNfMS50cmFuc2Zvcm0odGhpcywgY2FsbGJhY2spOyB9XG4gICAgO1xuICAgIGVhY2goY2FsbGJhY2spIHsgcmV0dXJuIGJhc2ljXzEuZWFjaCh0aGlzLCBjYWxsYmFjayk7IH1cbiAgICBmaWxsQnkoZm4pIHsgcmV0dXJuIGJhc2ljXzEuZmlsbEJ5KHRoaXMsIGZuKTsgfVxuICAgIHBhZFN0YXJ0KGxlbmd0aCwgdmFsdWUpIHsgcmV0dXJuIHBhZGRpbmdfMS5wYWRTdGFydCh0aGlzLCBsZW5ndGgsIHZhbHVlKTsgfVxuICAgIHBhZEVuZChsZW5ndGgsIHZhbHVlKSB7IHJldHVybiBwYWRkaW5nXzEucGFkRW5kKHRoaXMsIGxlbmd0aCwgdmFsdWUpOyB9XG4gICAgZXF1YWxzKGEpIHsgcmV0dXJuIGJhc2ljXzEuZXF1YWxzKHRoaXMsIGEpOyB9XG4gICAgY29weSgpIHsgcmV0dXJuIGJhc2ljXzEuY29weSh0aGlzKTsgfVxuICAgIHRvU2V0KCkgeyByZXR1cm4gbmV3IFNldCh0aGlzKTsgfVxuICAgIHVuaXF1ZSgpIHsgcmV0dXJuIGNvdW50c18xLnVuaXF1ZSh0aGlzKTsgfVxuICAgIGNvdW50cygpIHsgcmV0dXJuIGNvdW50c18xLmNvdW50cyh0aGlzKTsgfVxuICAgIGNvdW50KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBjb3VudHNfMS5jb3VudCh0aGlzLCBwYXJhbSk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmFsdWVBcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLWFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuZXF1YWxzID0gZXF1YWxzO1xuZnVuY3Rpb24gY29weSh2KSB7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IHZbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmNvcHkgPSBjb3B5O1xuZnVuY3Rpb24gc2h1ZmZsZSh2KSB7XG4gICAgZm9yIChsZXQgaSA9IHYubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgIGxldCB4ID0gdltpIC0gMV07XG4gICAgICAgIHZbaSAtIDFdID0gdltqXTtcbiAgICAgICAgdltqXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHRyYW5zZm9ybSh2LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2W2ldID0gY2FsbGJhY2suY2FsbChudWxsLCB2W2ldLCBpLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbmZ1bmN0aW9uIGVhY2godiwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2W2ldLCBpLCB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmVhY2ggPSBlYWNoO1xuZnVuY3Rpb24gZmlsbEJ5KHYsIGZuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBmbi5jYWxsKG51bGwsIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMuZmlsbEJ5ID0gZmlsbEJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBjb3VudCh2LCBwYXJhbSkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5jYWxsKG51bGwsIHZbaV0sIGksIHYpKVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW0gPT09IHZbaV0gfHwgKE51bWJlci5pc05hTihwYXJhbSkgJiYgTnVtYmVyLmlzTmFOKHZbaV0pKSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG59XG5leHBvcnRzLmNvdW50ID0gY291bnQ7XG5mdW5jdGlvbiBjb3VudHModikge1xuICAgIGxldCBjb3VudHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdltpXTtcbiAgICAgICAgY291bnRzLnNldCh4LCAoY291bnRzLmdldCh4KSB8fCAwKSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY291bnRzO1xufVxuZXhwb3J0cy5jb3VudHMgPSBjb3VudHM7XG5mdW5jdGlvbiB1bmlxdWUodikge1xuICAgIGxldCBzZXQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyB2LmNvbnN0cnVjdG9yKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdltpXTtcbiAgICAgICAgaWYgKCFzZXQuaGFzKHgpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh4KTtcbiAgICAgICAgICAgIHNldC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudW5pcXVlID0gdW5pcXVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y291bnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcmFuZ2Uodiwgc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogc3RlcDtcbiAgICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKHN0YXJ0IDwgMCA/IHYubGVuZ3RoICsgc3RhcnQgOiBzdGFydCk7XG4gICAgZW5kID0gZW5kID09IG51bGwgPyB2Lmxlbmd0aCA6IChlbmQgPCAwID8gdi5sZW5ndGggKyBlbmQgOiBlbmQpO1xuICAgIGxldCByZXN1bHQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbCgoZW5kIC0gc3RhcnQpIC8gc3RlcCkgfSk7XG4gICAgbGV0IGogPSAwO1xuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gdltpXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gdltpXTtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gcGVybXV0ZSh2LCBpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogaW5kZXhlcy5sZW5ndGggfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbmRleGVzW2ldID49IDApIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHZbaW5kZXhlc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSB2W3YubGVuZ3RoICsgaW5kZXhlc1tpXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGVybXV0ZSA9IHBlcm11dGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleGluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHBhZFN0YXJ0KHYsIGxlbmd0aCwgdmFsdWUpIHtcbiAgICB3aGlsZSAodi5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdi51bnNoaWZ0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnBhZFN0YXJ0ID0gcGFkU3RhcnQ7XG5mdW5jdGlvbiBwYWRFbmQodiwgbGVuZ3RoLCB2YWx1ZSkge1xuICAgIHdoaWxlICh2Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMucGFkRW5kID0gcGFkRW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHZhbHVlX2FycmF5XzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5Jyk7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9zdGF0aXN0aWNzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9tYXRoJyk7XG5jb25zdCBvcGVyYXRpb25zXzEgPSByZXF1aXJlKCcuL3V0aWxzL29wZXJhdGlvbnMnKTtcbmNvbnN0IG9wZXJhdGlvbnNfMiA9IHJlcXVpcmUoJy4vdmVjdG9yL29wZXJhdGlvbnMnKTtcbmNvbnN0IGRvdF9wcm9kdWN0XzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9kb3QtcHJvZHVjdCcpO1xuY29uc3QgcXVhbnRpbGVzXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9xdWFudGlsZXMnKTtcbmNvbnN0IGhpc3RvZ3JhbV8xID0gcmVxdWlyZSgnLi92ZWN0b3IvaGlzdG9ncmFtJyk7XG5jb25zdCBjdW11bGF0aXZlXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9jdW11bGF0aXZlJyk7XG5jb25zdCBub3JtYWxpemVfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL25vcm1hbGl6ZScpO1xuY29uc3Qgc3RhdHNfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3N0YXRzJyk7XG5jb25zdCByYW5nZV8xID0gcmVxdWlyZSgnLi92ZWN0b3IvcmFuZ2UnKTtcbmNsYXNzIFZlY3RvciBleHRlbmRzIHZhbHVlX2FycmF5XzEuZGVmYXVsdCB7XG4gICAgbWluKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1pbih0aGlzKTsgfVxuICAgIG1heCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tYXgodGhpcyk7IH1cbiAgICBleHRlbnQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuZXh0ZW50KHRoaXMpOyB9XG4gICAgbWVhbigpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tZWFuKHRoaXMpOyB9XG4gICAgdmFyaWFuY2UoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEudmFyaWFuY2UodGhpcyk7IH1cbiAgICBzdGQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuc3RkKHRoaXMpOyB9XG4gICAgbWFkKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1hZCh0aGlzKTsgfVxuICAgIG1vZGUoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubW9kZSh0aGlzKTsgfVxuICAgIGFyZ21pbigpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5hcmdtaW4odGhpcyk7IH1cbiAgICBhcmdtYXgoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEuYXJnbWF4KHRoaXMpOyB9XG4gICAgbWVkaWFuKCkgeyByZXR1cm4gcXVhbnRpbGVzXzEubWVkaWFuKHRoaXMpOyB9XG4gICAgcXVhbnRpbGVzKHEpIHsgcmV0dXJuIHF1YW50aWxlc18xLnF1YW50aWxlcyh0aGlzLCBxKTsgfVxuICAgIGhpc3RvZ3JhbShvcHRpb25zKSB7IHJldHVybiBoaXN0b2dyYW1fMS5oaXN0b2dyYW0odGhpcywgb3B0aW9ucyk7IH1cbiAgICBub3JtYWxpemVTdGF0cygpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplU3RhdHModGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgbm9ybWFsaXplUHJvYmEoKSB7IG5vcm1hbGl6ZV8xLm5vcm1hbGl6ZVByb2JhKHRoaXMpOyByZXR1cm4gdGhpczsgfVxuICAgIG5vcm1hbGl6ZVZlY3RvcigpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplVmVjdG9yKHRoaXMpOyByZXR1cm4gdGhpczsgfVxuICAgIHN0YXRzKCkgeyByZXR1cm4gc3RhdHNfMS5zdGF0cyh0aGlzKTsgfVxuICAgIHN1bSgpIHsgcmV0dXJuIG1hdGhfMS5zdW0odGhpcyk7IH1cbiAgICBzdW1PZlNxdWFyZXMoKSB7IHJldHVybiBtYXRoXzEuc3VtT2ZTcXVhcmVzKHRoaXMpOyB9XG4gICAgbWFnbml0dWRlKCkgeyByZXR1cm4gbWF0aF8xLm1hZ25pdHVkZSh0aGlzKTsgfVxuICAgIHByb2R1Y3QoKSB7IHJldHVybiBtYXRoXzEucHJvZHVjdCh0aGlzKTsgfVxuICAgIGN1bXN1bSgpIHsgcmV0dXJuIGN1bXVsYXRpdmVfMS5jdW1zdW0odGhpcyk7IH1cbiAgICBkaWZmKCkgeyByZXR1cm4gY3VtdWxhdGl2ZV8xLmRpZmYodGhpcyk7IH1cbiAgICBzb3J0KCkgeyByZXR1cm4gc3VwZXIuc29ydCgoYSwgYikgPT4gYSAtIGIpOyB9XG4gICAgc29ydERlc2MoKSB7IHJldHVybiBzdXBlci5zb3J0KChhLCBiKSA9PiBiIC0gYSk7IH1cbiAgICBzb21lKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayA/IHN1cGVyLnNvbWUoY2FsbGJhY2spIDogc3VwZXIuc29tZSh4ID0+ICEheCk7XG4gICAgfVxuICAgIGV2ZXJ5KGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayA/IHN1cGVyLmV2ZXJ5KGNhbGxiYWNrKSA6IHN1cGVyLmV2ZXJ5KHggPT4gISF4KTtcbiAgICB9XG4gICAgYWRkKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmFkZCk7XG4gICAgfVxuICAgIGFkZFNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5hZGQpO1xuICAgIH1cbiAgICBzdWJ0cmFjdChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5zdWJ0cmFjdCk7XG4gICAgfVxuICAgIHN1YnRyYWN0U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLnN1YnRyYWN0KTtcbiAgICB9XG4gICAgbXVsdGlwbHkocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubXVsdGlwbHkpO1xuICAgIH1cbiAgICBtdWx0aXBseVNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIGRpdmlkZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBkaXZpZGVTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEuZGl2aWRlKTtcbiAgICB9XG4gICAgcG93KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLnBvdyk7XG4gICAgfVxuICAgIHBvd1NlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5wb3cpO1xuICAgIH1cbiAgICBhbmQodikgeyByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCB2LCBmYWxzZSwgb3BlcmF0aW9uc18xLmFuZCk7IH1cbiAgICBvcih2KSB7IHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHYsIGZhbHNlLCBvcGVyYXRpb25zXzEub3IpOyB9XG4gICAgbGVzc1RoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubGVzc1RoYW4pO1xuICAgIH1cbiAgICBtb3JlVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tb3JlVGhhbik7XG4gICAgfVxuICAgIGxlc3NPckVxdWFsVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5sZXNzT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBtb3JlT3JFcXVhbFRoYW4ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEubW9yZU9yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgZXF1YWwocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuZXF1YWwpO1xuICAgIH1cbiAgICBub3RFcXVhbChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5ub3RFcXVhbCk7XG4gICAgfVxuICAgIGRvdCh2KSB7IHJldHVybiBkb3RfcHJvZHVjdF8xLmRvdFByb2R1Y3QodGhpcywgdik7IH1cbiAgICBzdGF0aWMgYWRkKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuYWRkKTtcbiAgICB9XG4gICAgc3RhdGljIHN1YnRyYWN0KHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuc3VidHJhY3QpO1xuICAgIH1cbiAgICBzdGF0aWMgbXVsdGlwbHkodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXZpZGUodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBzdGF0aWMgcG93KHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEucG93KTtcbiAgICB9XG4gICAgc3RhdGljIGFuZCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmFuZCk7XG4gICAgfVxuICAgIHN0YXRpYyBvcih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm9yKTtcbiAgICB9XG4gICAgc3RhdGljIGxlc3NUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubGVzc1RoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgbW9yZVRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tb3JlVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBsZXNzT3JFcXVhbFRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5sZXNzT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgbW9yZU9yRXF1YWxUaGFuKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEubW9yZU9yRXF1YWxUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIGVxdWFsKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuZXF1YWwpO1xuICAgIH1cbiAgICBzdGF0aWMgbm90RXF1YWwodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5ub3RFcXVhbCk7XG4gICAgfVxuICAgIHN0YXRpYyByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgICAgICByZXR1cm4gcmFuZ2VfMS5yYW5nZShzdGFydCwgc3RvcCwgc3RlcCwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBsaW5zcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLmxpbnNwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgbG9nc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgYmFzZSkge1xuICAgICAgICByZXR1cm4gcmFuZ2VfMS5sb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlLCB0aGlzKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBfY3Vtc3VtKHYsIG91dCkge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIG91dFtpXSA9IHggKyAoaSA9PSAwID8gMCA6IG91dFtpIC0gMV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gX2RpZmYodiwgb3V0KSB7XG4gICAgbGV0IHByZXYgPSBoZWxwZXJzXzEuZ2V0TnVtYmVyVmFsdWUodiwgMCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gaGVscGVyc18xLmdldE51bWJlclZhbHVlKHYsIGkpO1xuICAgICAgICBvdXRbaSAtIDFdID0geCAtIHByZXY7XG4gICAgICAgIHByZXYgPSB4O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGN1bXN1bSh2KSB7XG4gICAgbGV0IG91dCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggfSk7XG4gICAgX2N1bXN1bSh2LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLmN1bXN1bSA9IGN1bXN1bTtcbmZ1bmN0aW9uIGRpZmYodikge1xuICAgIGxldCBvdXQgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIC0gMSB9KTtcbiAgICBfZGlmZih2LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VtdWxhdGl2ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIGRvdFByb2R1Y3QodjEsIHYyKSB7XG4gICAgbGV0IHkgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyUGFpcih2MSwgdjIsICh4MSwgeDIpID0+IHtcbiAgICAgICAgeSArPSB4MSAqIHgyO1xuICAgIH0pO1xuICAgIHJldHVybiB5O1xufVxuZXhwb3J0cy5kb3RQcm9kdWN0ID0gZG90UHJvZHVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvdC1wcm9kdWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi9zdGF0aXN0aWNzJyk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBoaXN0b2dyYW0odiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGxldCBtaW4gPSBvcHRpb25zLm1pbjtcbiAgICBsZXQgbWF4ID0gb3B0aW9ucy5tYXg7XG4gICAgaWYgKG1pbiA9PSBudWxsIHx8IG1heCA9PSBudWxsKSB7XG4gICAgICAgIGxldCBleHQgPSBzdGF0aXN0aWNzXzEuZXh0ZW50KHYpO1xuICAgICAgICBpZiAobWluID09IG51bGwpXG4gICAgICAgICAgICBtaW4gPSBleHRbMF07XG4gICAgICAgIGlmIChtYXggPT0gbnVsbClcbiAgICAgICAgICAgIG1heCA9IGV4dFsxXTtcbiAgICB9XG4gICAgbGV0IGJpbnMgPSBvcHRpb25zLmJpbnM7XG4gICAgaWYgKG9wdGlvbnMuYmluV2lkdGgpIHtcbiAgICAgICAgYmlucyA9IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIG9wdGlvbnMuYmluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoYmlucyA9PSBudWxsKSB7XG4gICAgICAgIGJpbnMgPSBNYXRoLmZsb29yKE1hdGguc3FydCh2Lmxlbmd0aCkpO1xuICAgIH1cbiAgICBsZXQgZHggPSAobWF4IC0gbWluKSAvIGJpbnM7XG4gICAgbGV0IHggPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IGJpbnMgfSk7XG4gICAgbGV0IHkgPSB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IGJpbnMgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpKyspIHtcbiAgICAgICAgeFtpXSA9IG1pbiArIGkgKiBkeDtcbiAgICAgICAgeVtpXSA9IDA7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKHYsIHZpID0+IHtcbiAgICAgICAgaWYgKHZpID49IG1pbiAmJiB2aSA8IG1heCkge1xuICAgICAgICAgICAgeVtNYXRoLmZsb29yKCh2aSAtIG1pbikgLyBkeCldKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmkgPT09IG1heCkge1xuICAgICAgICAgICAgeVt5Lmxlbmd0aCAtIDFdKys7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5wcm9iYWJpbGl0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHlbaV0gLz0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgZHg6IGR4IH07XG59XG5leHBvcnRzLmhpc3RvZ3JhbSA9IGhpc3RvZ3JhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhpc3RvZ3JhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIHN1bShhcnJheSkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IHg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuZnVuY3Rpb24gc3VtT2ZTcXVhcmVzKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geCAqIHg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydHMuc3VtT2ZTcXVhcmVzID0gc3VtT2ZTcXVhcmVzO1xuZnVuY3Rpb24gbWFnbml0dWRlKGFycmF5KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChzdW1PZlNxdWFyZXMoYXJyYXkpKTtcbn1cbmV4cG9ydHMubWFnbml0dWRlID0gbWFnbml0dWRlO1xuZnVuY3Rpb24gcHJvZHVjdChhcnJheSkge1xuICAgIGxldCBwcm9kdWN0ID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcihhcnJheSwgeCA9PiB7XG4gICAgICAgIHByb2R1Y3QgKj0geDtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvZHVjdDtcbn1cbmV4cG9ydHMucHJvZHVjdCA9IHByb2R1Y3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuY29uc3QgbWF0aF8xID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb2JhKHYpIHtcbiAgICBsZXQgcyA9IG1hdGhfMS5zdW0odik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSAvPSBzO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVQcm9iYSA9IG5vcm1hbGl6ZVByb2JhO1xuZnVuY3Rpb24gbm9ybWFsaXplVmVjdG9yKHYpIHtcbiAgICBsZXQgcyA9IG1hdGhfMS5tYWduaXR1ZGUodik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSAvPSBzO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVWZWN0b3IgPSBub3JtYWxpemVWZWN0b3I7XG5mdW5jdGlvbiBub3JtYWxpemVTdGF0cyh2KSB7XG4gICAgbGV0IG0gPSBzdGF0aXN0aWNzXzEubWVhbih2KTtcbiAgICBsZXQgbyA9IHN0YXRpc3RpY3NfMS5zdGQodik7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgdltpXSA9ICh4IC0gbSkgLyBvO1xuICAgIH0pO1xufVxuZXhwb3J0cy5ub3JtYWxpemVTdGF0cyA9IG5vcm1hbGl6ZVN0YXRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gc2NhbGFyT3BlcmF0aW9uKHYsIHMsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0cHV0W2ldID0gb3BlcmF0aW9uKHgsIHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2NhbGFyT3BlcmF0aW9uMihzLCB2LCBvdXRwdXQsIG9wZXJhdGlvbikge1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKHYsICh4LCBpKSA9PiB7XG4gICAgICAgIG91dHB1dFtpXSA9IG9wZXJhdGlvbihzLCB4KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJpbmFyeU9wZXJhdGlvbih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgKHgxLCB4MiwgaSkgPT4ge1xuICAgICAgICBvdXRwdXRbaV0gPSBvcGVyYXRpb24oeDEsIHgyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHZlY3Rvck9wZXJhdGlvbih2LCBwYXJhbSwgbW9kaWZ5U2VsZiwgb3BlcmF0aW9uKSB7XG4gICAgbGV0IG91dHB1dCA9IG1vZGlmeVNlbGYgPyB2IDogdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJykge1xuICAgICAgICBzY2FsYXJPcGVyYXRpb24odiwgcGFyYW0sIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW0ubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYmluYXJ5T3BlcmF0aW9uKHYsIHBhcmFtLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcGVyZm9ybSB2ZWN0b3Igb3BlcmF0aW9uIG9uIG9iamVjdCB3aXRoIGludmFsaWQgdHlwZTonICsgcGFyYW0gKyAnLCAnICsgdHlwZW9mIHBhcmFtKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMudmVjdG9yT3BlcmF0aW9uID0gdmVjdG9yT3BlcmF0aW9uO1xuZnVuY3Rpb24gdmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHR5cGUsIG9wZXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgdjEgPT09ICdudW1iZXInICYmIHR5cGVvZiB2MiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbih2MSwgdjIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiB2MS5sZW5ndGggfHwgdjIubGVuZ3RoIH0pO1xuICAgIGlmICh0eXBlb2YgdjEgPT09ICdudW1iZXInICYmIHYyLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjYWxhck9wZXJhdGlvbjIodjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHYxLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2MiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2NhbGFyT3BlcmF0aW9uKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmICh2MS5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiB2Mi5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBiaW5hcnlPcGVyYXRpb24odjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgcGVyZm9ybSB2ZWN0b3Igb3BlcmF0aW9uIG9uIG9iamVjdHMgd2l0aCBpbnZhbGlkIHR5cGU6ICcgKyB0eXBlb2YgdjEgKyAnLCAnICsgdHlwZW9mIHYyKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMudmVjdG9yT3BlcmF0aW9uMiA9IHZlY3Rvck9wZXJhdGlvbjI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcGVyYXRpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2hlbHBlcnNcIik7XG5mdW5jdGlvbiBxdWFudGlsZSh2LCBwKSB7XG4gICAgbGV0IGggPSAodi5sZW5ndGggLSAxKSAqIHAgKyAxO1xuICAgIGxldCBoXyA9IE1hdGguZmxvb3IoaCk7XG4gICAgbGV0IHMgPSBoIC0gaF87XG4gICAgbGV0IHggPSB2W2hfIC0gMV07XG4gICAgcmV0dXJuIHMgPyB4ICsgcyAqICh2W2hfXSAtIHgpIDogeDtcbn1cbmZ1bmN0aW9uIGdldFNvcnRlZE51bWJlcnModikge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcodiwgeCA9PiB7IHZhbHVlcy5wdXNoKHgpOyB9KTtcbiAgICByZXR1cm4gdmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbn1cbmZ1bmN0aW9uIHF1YW50aWxlcyh2LCBxKSB7XG4gICAgbGV0IHNvcnRlZCA9IGdldFNvcnRlZE51bWJlcnModik7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogcSArIDEgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IHF1YW50aWxlKHNvcnRlZCwgaSAvIHEpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5xdWFudGlsZXMgPSBxdWFudGlsZXM7XG5mdW5jdGlvbiBtZWRpYW4odikge1xuICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGxldCBzb3J0ZWQgPSBnZXRTb3J0ZWROdW1iZXJzKHYpO1xuICAgIHJldHVybiBxdWFudGlsZShzb3J0ZWQsIDAuNSk7XG59XG5leHBvcnRzLm1lZGlhbiA9IG1lZGlhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1YW50aWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwLCB0eXBlKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCAmJiBzdGVwID09IG51bGwpIHtcbiAgICAgICAgc3RvcCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgfVxuICAgIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiBzdGFydDtcbiAgICBzdGVwID0gc3RlcCA9PSBudWxsID8gKHN0YXJ0IDw9IHN0b3AgPyAxIDogLTEpIDogc3RlcDtcbiAgICBpZiAoKHN0b3AgLSBzdGFydCkgLyBzdGVwIDwgMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wJyk7XG4gICAgbGV0IHYgPSB0eXBlLmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApIH0pO1xuICAgIGxldCB4O1xuICAgIGxldCBpID0gMDtcbiAgICBpZiAoc3RhcnQgPCBzdG9wKSB7XG4gICAgICAgIHdoaWxlICgoeCA9IHN0YXJ0ICsgaSAqIHN0ZXApIDwgc3RvcCkge1xuICAgICAgICAgICAgdltpKytdID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2hpbGUgKCh4ID0gc3RhcnQgKyBpICogc3RlcCkgPiBzdG9wKSB7XG4gICAgICAgICAgICB2W2krK10gPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gbGluc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgdHlwZSkge1xuICAgIG51bSA9IG51bSA9PSBudWxsID8gMTAwIDogbnVtO1xuICAgIGxldCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyAoZXhjbHVkZUVuZCA/IG51bSA6IG51bSAtIDEpO1xuICAgIGxldCB2ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiBudW0gfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICB2W2ldID0gc3RhcnQgKyBpICogc3RlcDtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLmxpbnNwYWNlID0gbGluc3BhY2U7XG5mdW5jdGlvbiBsb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlLCB0eXBlKSB7XG4gICAgbnVtID0gbnVtID09IG51bGwgPyAxMDAgOiBudW07XG4gICAgYmFzZSA9IGJhc2UgPT0gbnVsbCA/IDEwIDogYmFzZTtcbiAgICBsZXQgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gKGV4Y2x1ZGVFbmQgPyBudW0gOiBudW0gLSAxKTtcbiAgICBsZXQgdiA9IHR5cGUuZnJvbSh7IGxlbmd0aDogbnVtIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgdltpXSA9IE1hdGgucG93KGJhc2UsIHN0YXJ0ICsgaSAqIHN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMubG9nc3BhY2UgPSBsb2dzcGFjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gbWluKGFycmF5KSB7XG4gICAgbGV0IG1pbjtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW47XG59XG5leHBvcnRzLm1pbiA9IG1pbjtcbmZ1bmN0aW9uIGFyZ21pbihhcnJheSkge1xuICAgIGxldCBtaW47XG4gICAgbGV0IGluZGV4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgKHgsIGkpID0+IHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkIHx8IHggPCBtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IHg7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXg7XG59XG5leHBvcnRzLmFyZ21pbiA9IGFyZ21pbjtcbmZ1bmN0aW9uIG1heChhcnJheSkge1xuICAgIGxldCBtYXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF4O1xufVxuZXhwb3J0cy5tYXggPSBtYXg7XG5mdW5jdGlvbiBhcmdtYXgoYXJyYXkpIHtcbiAgICBsZXQgbWF4O1xuICAgIGxldCBpbmRleDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksICh4LCBpKSA9PiB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCB8fCB4ID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB4O1xuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGluZGV4O1xufVxuZXhwb3J0cy5hcmdtYXggPSBhcmdtYXg7XG5mdW5jdGlvbiBleHRlbnQoYXJyYXkpIHtcbiAgICBsZXQgbWluO1xuICAgIGxldCBtYXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkIHx8IHggPCBtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IHg7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW21pbiwgbWF4XTtcbn1cbmV4cG9ydHMuZXh0ZW50ID0gZXh0ZW50O1xuZnVuY3Rpb24gbWVhbihhcnJheSkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBuID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geDtcbiAgICAgICAgbisrO1xuICAgIH0pO1xuICAgIHJldHVybiBuID09PSAwID8gdW5kZWZpbmVkIDogc3VtIC8gbjtcbn1cbmV4cG9ydHMubWVhbiA9IG1lYW47XG5mdW5jdGlvbiB2YXJpYW5jZShhcnJheSkge1xuICAgIGxldCBuID0gMDtcbiAgICBsZXQgbWVhbiA9IDA7XG4gICAgbGV0IG0yID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBuKys7XG4gICAgICAgIGxldCBkZWx0YSA9IHggLSBtZWFuO1xuICAgICAgICBtZWFuICs9IGRlbHRhIC8gbjtcbiAgICAgICAgbTIgKz0gZGVsdGEgKiAoeCAtIG1lYW4pO1xuICAgIH0pO1xuICAgIHJldHVybiBuID4gMSA/IChtMiAvIChuIC0gMSkpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy52YXJpYW5jZSA9IHZhcmlhbmNlO1xuZnVuY3Rpb24gc3RkKGFycmF5KSB7XG4gICAgbGV0IHNxdWFyZWQgPSB2YXJpYW5jZShhcnJheSk7XG4gICAgcmV0dXJuIHNxdWFyZWQgPT0gbnVsbCA/IHNxdWFyZWQgOiBNYXRoLnNxcnQoc3F1YXJlZCk7XG59XG5leHBvcnRzLnN0ZCA9IHN0ZDtcbmZ1bmN0aW9uIG1hZChhcnJheSkge1xuICAgIGxldCBhdmcgPSBtZWFuKGFycmF5KTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBsZXQgbiA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgc3VtICs9IE1hdGguYWJzKGF2ZyAtIHgpO1xuICAgICAgICBuKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPT09IDAgPyB1bmRlZmluZWQgOiBzdW0gLyBuO1xufVxuZXhwb3J0cy5tYWQgPSBtYWQ7XG5mdW5jdGlvbiBtb2RlKGFycmF5KSB7XG4gICAgbGV0IGNvdW50cyA9IHt9O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmICghY291bnRzW3hdKSB7XG4gICAgICAgICAgICBjb3VudHNbeF0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY291bnRzW3hdKys7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWF4VmFsdWU7XG4gICAgbGV0IG1heENvdW50ID0gMDtcbiAgICBPYmplY3Qua2V5cyhjb3VudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGNvdW50c1trZXldID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgIG1heENvdW50ID0gY291bnRzW2tleV07XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXhWYWx1ZSA/IE51bWJlcihtYXhWYWx1ZSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLm1vZGUgPSBtb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGlzdGljcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vc3RhdGlzdGljcycpO1xuY29uc3QgbWF0aF8xID0gcmVxdWlyZSgnLi9tYXRoJyk7XG5jb25zdCBxdWFudGlsZXNfMSA9IHJlcXVpcmUoJy4vcXVhbnRpbGVzJyk7XG5mdW5jdGlvbiBzdGF0cyh2KSB7XG4gICAgbGV0IGludmFsaWRzID0gY291bnRJbnZhbGlkKHYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aDogdi5sZW5ndGgsXG4gICAgICAgIGludmFsaWRDb3VudDogaW52YWxpZHMuY291bnQsXG4gICAgICAgIGludmFsaWRDb3VudHM6IGludmFsaWRzLmNvdW50cyxcbiAgICAgICAgbWluOiBzdGF0aXN0aWNzXzEubWluKHYpLFxuICAgICAgICBtYXg6IHN0YXRpc3RpY3NfMS5tYXgodiksXG4gICAgICAgIG1lYW46IHN0YXRpc3RpY3NfMS5tZWFuKHYpLFxuICAgICAgICBtZWRpYW46IHF1YW50aWxlc18xLm1lZGlhbih2KSxcbiAgICAgICAgbW9kZTogc3RhdGlzdGljc18xLm1vZGUodiksXG4gICAgICAgIHN0ZDogc3RhdGlzdGljc18xLnN0ZCh2KSxcbiAgICAgICAgdmFyaWFuY2U6IHN0YXRpc3RpY3NfMS52YXJpYW5jZSh2KSxcbiAgICAgICAgbWFkOiBzdGF0aXN0aWNzXzEubWFkKHYpLFxuICAgICAgICBkZWNpbGVzOiBxdWFudGlsZXNfMS5xdWFudGlsZXModiwgMTApLFxuICAgICAgICBzdW06IG1hdGhfMS5zdW0odilcbiAgICB9O1xufVxuZXhwb3J0cy5zdGF0cyA9IHN0YXRzO1xuZnVuY3Rpb24gY291bnRJbnZhbGlkKHYpIHtcbiAgICBsZXQgY291bnRzID0ge1xuICAgICAgICB1bmRlZmluZWQ6IDAsXG4gICAgICAgICdudWxsJzogMCxcbiAgICAgICAgTmFOOiAwLFxuICAgICAgICBJbmZpbml0eTogMCxcbiAgICAgICAgJy1JbmZpbml0eSc6IDBcbiAgICB9O1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb3VudHNbdltpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY291bnRzW3ZbaV1dKys7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNvdW50czogY291bnRzLCBjb3VudDogY291bnQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRzLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEFjdG9yVHlwZSB9IGZyb20gXCIuL0FjdG9yXCI7XG5pbXBvcnQgeyBBQ1RPUl9SQURJVVMsIERFRkFVTFRfSEVJR0hULCBERUZBVUxUX1dJRFRIIH0gZnJvbSBcIi4vY29uc3RzXCI7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9TaW11bGF0aW9uXCI7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgaWNvbnMgPSBuZXcgTWFwPEFjdG9yVHlwZSwgSFRNTEltYWdlRWxlbWVudD4oW1xuICAgIFtBY3RvclR5cGUucm9jaywgZ2V0SW1hZ2UoJ3JvY2snKV0sXG4gICAgW0FjdG9yVHlwZS5wYXBlciwgZ2V0SW1hZ2UoJ3BhcGVyJyldLFxuICAgIFtBY3RvclR5cGUuc2Npc3NvciwgZ2V0SW1hZ2UoJ3NjaXNzb3InKV1cbl0pO1xuXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IHNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbihERUZBVUxUX1dJRFRILCBERUZBVUxUX0hFSUdIVCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gICAgc2V0U2l6ZSgpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaW11bGF0aW9uLnJlc2V0KCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxvdy13aW4nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbGxvd1dpbiA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveS1vbi1jb2xsaXNpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2ltdWxhdGlvbi5kZXN0cm95T25Db2xsaXNpb24gPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0U2l6ZSk7XG5cbiAgICBzaW11bGF0aW9uLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHNldFNpemUoKSB7XG4gICAgY29uc3QgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuY2xpZW50SGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0LWJ1dHRvbicpLmNsaWVudEhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgIHNpbXVsYXRpb24ud2lkdGggPSBuZXdXaWR0aDtcbiAgICBzaW11bGF0aW9uLmhlaWdodCA9IG5ld0hlaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2UoaWNvbjogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBgJHtpY29ufS5wbmdgO1xuICAgIHJldHVybiBpbWFnZTtcbn1cblxuXG5sZXQgbGFzdFRpbWVzdGFtcDogbnVtYmVyID0gbnVsbDtcbmZ1bmN0aW9uIGFuaW1hdGlvbkxvb3AodGltZXN0YW1wOiBudW1iZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGxhc3RUaW1lc3RhbXAgIT09IG51bGwpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5zdGVwKCh0aW1lc3RhbXAgLSBsYXN0VGltZXN0YW1wKSAqIDAuMDAxKTtcbiAgICB9XG4gICAgbGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBzaW11bGF0aW9uLmFjdG9ycy5mb3JFYWNoKChhY3RvcikgPT4ge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpY29ucy5nZXQoYWN0b3IudHlwZSksIGFjdG9yLnBvc1swXSAtIEFDVE9SX1JBRElVUywgYWN0b3IucG9zWzFdIC0gQUNUT1JfUkFESVVTLCBBQ1RPUl9SQURJVVMgKiAyLCBBQ1RPUl9SQURJVVMgKiAyKTtcbiAgICB9KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbn1cblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNpbXVsYXRpb24uY2hlY2tNaXNzaW5nVHlwZXMoKTtcbiAgICBjb25zdCBpY29uID0gaWNvbnMuZ2V0KHNpbXVsYXRpb24uZ2V0Q3VycmVudFdpbm5lcigpKTtcbiAgICBpZiAoIWljb24pIHJldHVybjtcbiAgICBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPWljb25dJykuc2V0QXR0cmlidXRlKCdocmVmJywgaWNvbi5zcmMpO1xufSwgMTAwMCk7XG5cbmluaXQoKTtcbnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
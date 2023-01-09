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
        var _this = this;
        this.actors.splice(0);
        ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"].range(0, _consts__WEBPACK_IMPORTED_MODULE_2__.ACTOR_COUNT).forEach(function (i) { return _this.addActor(i % 3); });
    };
    Simulation.prototype.addActor = function (type) {
        var actor = new _Actor__WEBPACK_IMPORTED_MODULE_1__["default"](type, new ts_vector__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * this.width, Math.random() * this.height));
        this.actors.push(actor);
        return actor;
    };
    Simulation.prototype.step = function (dt) {
        var _this = this;
        if (!Number.isFinite(dt) || this.width <= 0 || this.height <= 0) {
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
                if (vectorTo.dot(vectorTo) < Number.EPSILON)
                    return;
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
/* harmony import */ var ts_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-vector */ "./node_modules/ts-vector/dist/index.js");





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
    document.querySelector('#reset-button').addEventListener('click', function () { return simulation.reset(); });
    document.querySelector('#add-one-button').addEventListener('click', addActor);
    document.querySelector('#add-ten-button').addEventListener('click', function () { return ts_vector__WEBPACK_IMPORTED_MODULE_4__["default"].range(10).forEach(addActor); });
    document.querySelector('#allow-win').addEventListener('change', function (event) {
        simulation.allowWin = event.target.checked;
    });
    document.querySelector('#destroy-on-collision').addEventListener('change', function (event) {
        simulation.destroyOnCollision = event.target.checked;
    });
    window.addEventListener('resize', setSize);
    simulation.reset();
}
function addActor() {
    simulation.addActor(Math.floor(Math.random() * 3));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBRVQsSUFBSSxFQUFFLENBQUM7QUFDUCxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9BY3Rvci50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL1NpbXVsYXRpb24udHMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3V0aWxzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC91dGlscy9vcGVyYXRpb25zLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS9iYXNpYy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2NvdW50cy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2luZGV4aW5nLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9jdW11bGF0aXZlLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2RvdC1wcm9kdWN0LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2hpc3RvZ3JhbS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9tYXRoLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9vcGVyYXRpb25zLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3F1YW50aWxlcy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9yYW5nZS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZlY3Rvci9zdGF0aXN0aWNzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3N0YXRzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmNhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFZlY3RvciBmcm9tICd0cy12ZWN0b3InO1xuXG5leHBvcnQgZW51bSBBY3RvclR5cGUge1xuICAgIHJvY2ssXG4gICAgcGFwZXIsXG4gICAgc2Npc3NvclxufVxuXG5jb25zdCB3aW5NYXAgPSBuZXcgTWFwKFtcbiAgICBbQWN0b3JUeXBlLnJvY2ssIEFjdG9yVHlwZS5zY2lzc29yXSxcbiAgICBbQWN0b3JUeXBlLnBhcGVyLCBBY3RvclR5cGUucm9ja10sXG4gICAgW0FjdG9yVHlwZS5zY2lzc29yLCBBY3RvclR5cGUucGFwZXJdLFxuXSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3Ige1xuICAgIHR5cGU6IEFjdG9yVHlwZTtcbiAgICBwb3M6IFZlY3RvcjtcbiAgICB2OiBWZWN0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBBY3RvclR5cGUsIHBvczogVmVjdG9yKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucG9zID0gcG9zLmNvcHkoKTtcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB9XG5cbiAgICBjb21wYXJlKG90aGVyOiBBY3Rvcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IG90aGVyLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5NYXAuZ2V0KHRoaXMudHlwZSkgPT09IG90aGVyLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwidHMtdmVjdG9yXCI7XG5pbXBvcnQgQWN0b3IsIHsgQWN0b3JUeXBlIH0gZnJvbSBcIi4vQWN0b3JcIjtcbmltcG9ydCB7IEFDVE9SX0NPVU5ULCBBQ1RPUl9SQURJVVMsIE1BWF9WIH0gZnJvbSBcIi4vY29uc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xuICAgIGFjdG9yczogQWN0b3JbXTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGFsbG93V2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgZGVzdHJveU9uQ29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmFjdG9ycy5zcGxpY2UoMCk7XG4gICAgICAgIFZlY3Rvci5yYW5nZSgwLCBBQ1RPUl9DT1VOVCkuZm9yRWFjaCgoaSkgPT4gdGhpcy5hZGRBY3RvcihpICUgMykpO1xuICAgIH1cblxuICAgIGFkZEFjdG9yKHR5cGU6IEFjdG9yVHlwZSkge1xuICAgICAgICBjb25zdCBhY3RvciA9IG5ldyBBY3RvcihcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoLCBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWN0b3JzLnB1c2goYWN0b3IpO1xuICAgICAgICByZXR1cm4gYWN0b3I7XG4gICAgfVxuXG4gICAgc3RlcChkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGR0KSB8fCB0aGlzLndpZHRoIDw9IDAgfHwgdGhpcy5oZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsb3NlcnNUb0Rlc3Ryb3k6IG51bWJlcltdID0gW107XG4gICAgICAgIHRoaXMuYWN0b3JzLmZvckVhY2goKGFjdG9yLCBhY3RvckluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9yY2UgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgICAgICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5hY3RvcnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0b3IgPT09IG90aGVyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yVG8gPSBWZWN0b3Iuc3VidHJhY3Qob3RoZXIucG9zLCBhY3Rvci5wb3MpO1xuICAgICAgICAgICAgICAgIGlmICh2ZWN0b3JUby5kb3QodmVjdG9yVG8pIDwgTnVtYmVyLkVQU0lMT04pIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAxIC8gdmVjdG9yVG8uZG90KHZlY3RvclRvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSB2ZWN0b3JUby5jb3B5KCkubm9ybWFsaXplVmVjdG9yKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmVjdG9yVG8ubWFnbml0dWRlKCkgPCBBQ1RPUl9SQURJVVMgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rvci5jb21wYXJlKG90aGVyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3lPbkNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvc2Vyc1RvRGVzdHJveS5wdXNoKGFjdG9ySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rvci50eXBlID0gb3RoZXIudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlID0gZm9yY2UuYWRkKGRpci5jb3B5KCkubXVsdGlwbHkoLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxXZWlnaHQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JjZSA9IGZvcmNlLmFkZChkaXIubXVsdGlwbHkod2VpZ2h0KS5tdWx0aXBseShhY3Rvci5jb21wYXJlKG90aGVyKSkpO1xuICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IHdlaWdodDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodG90YWxXZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhY3Rvci52ID0gYWN0b3Iudi5hZGQoZm9yY2UuZGl2aWRlKHRvdGFsV2VpZ2h0KS5tdWx0aXBseShkdCAqIDEwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjdG9yLnYubWFnbml0dWRlKCkgPiBNQVhfVikge1xuICAgICAgICAgICAgICAgIGFjdG9yLnYgPSBhY3Rvci52Lm5vcm1hbGl6ZVZlY3RvcigpLm11bHRpcGx5KE1BWF9WKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3VuZGFyaWVzKGFjdG9yLCBkdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgYWN0b3JJbmRleCBvZiBsb3NlcnNUb0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzLnNwbGljZShhY3RvckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tCb3VuZGFyaWVzKGFjdG9yOiBBY3RvciwgZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBhY3Rvci5wb3MgPSBhY3Rvci5wb3MuYWRkKGFjdG9yLnYubXVsdGlwbHkoZHQpKTtcbiAgICAgICAgaWYgKGFjdG9yLnBvc1swXSA8IEFDVE9SX1JBRElVUyB8fCBhY3Rvci5wb3NbMF0gPiB0aGlzLndpZHRoIC0gQUNUT1JfUkFESVVTKSB7XG4gICAgICAgICAgICBhY3Rvci52WzBdID0gLWFjdG9yLnZbMF07XG4gICAgICAgICAgICBhY3Rvci5wb3NbMF0gPSBNYXRoLm1heChBQ1RPUl9SQURJVVMsIE1hdGgubWluKHRoaXMud2lkdGggLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1swXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMV0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzFdID4gdGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMpIHtcbiAgICAgICAgICAgIGFjdG9yLnZbMV0gPSAtYWN0b3IudlsxXTtcbiAgICAgICAgICAgIGFjdG9yLnBvc1sxXSA9IE1hdGgubWF4KEFDVE9SX1JBRElVUywgTWF0aC5taW4odGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1sxXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tNaXNzaW5nVHlwZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93V2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnBhcGVyLCBBY3RvclR5cGUuc2Npc3Nvcl0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RvcnMuc29tZSgoYWN0b3IpID0+IGFjdG9yLnR5cGUgPT09IHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hY3RvcnMubGVuZ3RoKV0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50V2lubmVyKCk6IEFjdG9yVHlwZSB7XG4gICAgICAgIGNvbnN0IGNvdW50cyA9IG5ldyBNYXA8QWN0b3JUeXBlLCBudW1iZXI+KCk7XG4gICAgICAgIHRoaXMuYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiBjb3VudHMuc2V0KGFjdG9yLnR5cGUsIChjb3VudHMuZ2V0KGFjdG9yLnR5cGUpIHx8IDApICsgMSkpO1xuICAgICAgICBsZXQgbWF4VHlwZTogQWN0b3JUeXBlID0gbnVsbDtcbiAgICAgICAgbGV0IG1heENvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbdHlwZSwgY291bnRdIG9mIEFycmF5LmZyb20oY291bnRzLmVudHJpZXMoKSkpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICBtYXhUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4VHlwZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQUNUT1JfUkFESVVTID0gMTA7XG5leHBvcnQgY29uc3QgTUFYX1YgPSA1MDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gNTAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gNTAwO1xuZXhwb3J0IGNvbnN0IEFDVE9SX0NPVU5UID0gNTA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciB2ZWN0b3JfMSA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5leHBvcnRzLlZlY3RvciA9IHZlY3Rvcl8xLmRlZmF1bHQ7XG52YXIgdmFsdWVfYXJyYXlfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXknKTtcbmV4cG9ydHMuVmFsdWVBcnJheSA9IHZhbHVlX2FycmF5XzEuZGVmYXVsdDtcbmNvbnN0IHZlY3Rvcl8yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZlY3Rvcl8yLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGZvckVhY2hOb25NaXNzaW5nKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICFOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGkpO1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2YWx1ZSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOb25NaXNzaW5nID0gZm9yRWFjaE5vbk1pc3Npbmc7XG5mdW5jdGlvbiBmb3JFYWNoTnVtYmVyKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0TnVtYmVyVmFsdWUoYXJyYXksIGkpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHZhbHVlLCBpKTtcbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOdW1iZXIgPSBmb3JFYWNoTnVtYmVyO1xuZnVuY3Rpb24gZm9yRWFjaE51bWJlclBhaXIodjEsIHYyLCBjYWxsYmFjaykge1xuICAgIGNoZWNrTGVuZ3RoKHYxLCB2Mik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2MS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeDEgPSBnZXROdW1iZXJWYWx1ZSh2MSwgaSk7XG4gICAgICAgIGxldCB4MiA9IGdldE51bWJlclZhbHVlKHYyLCBpKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB4MSwgeDIsIGkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaE51bWJlclBhaXIgPSBmb3JFYWNoTnVtYmVyUGFpcjtcbmZ1bmN0aW9uIGdldE51bWJlclZhbHVlKGFycmF5LCBpbmRleCkge1xuICAgIGxldCB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpXG4gICAgICAgIHRocm93Tm90TnVtZXJFcnJvcih2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0TnVtYmVyVmFsdWUgPSBnZXROdW1iZXJWYWx1ZTtcbmZ1bmN0aW9uIHRocm93Tm90TnVtZXJFcnJvcih2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlY3RvciBjb250YWlucyBub24tbnVtZXJpYyB2YWx1ZSAnICsgdmFsdWUgKyAnIGF0IGluZGV4ICcgKyBpbmRleCArICcgb2YgdHlwZSAnICsgdHlwZW9mIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNoZWNrTGVuZ3RoKHYxLCB2Mikge1xuICAgIGlmICh2MS5sZW5ndGggIT09IHYyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlY3RvciBzaXplIGRpZmZlcmVuY2UgaW4gdmVjdG9yIG9wZXJhdGlvbjonICsgdjEubGVuZ3RoICsgJywgJyArIHYyLmxlbmd0aCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuYWRkID0gKHgsIHkpID0+IHggKyB5O1xuZXhwb3J0cy5zdWJ0cmFjdCA9ICh4LCB5KSA9PiB4IC0geTtcbmV4cG9ydHMubXVsdGlwbHkgPSAoeCwgeSkgPT4geCAqIHk7XG5leHBvcnRzLmRpdmlkZSA9ICh4LCB5KSA9PiB4IC8geTtcbmV4cG9ydHMucG93ID0gKHgsIHkpID0+IE1hdGgucG93KHgsIHkpO1xuZXhwb3J0cy5hbmQgPSAoeCwgeSkgPT4geCAmJiB5O1xuZXhwb3J0cy5vciA9ICh4LCB5KSA9PiB4IHx8IHk7XG5leHBvcnRzLm1vcmVUaGFuID0gKHgsIHkpID0+IHggPiB5ID8gMSA6IDA7XG5leHBvcnRzLmxlc3NUaGFuID0gKHgsIHkpID0+IHggPCB5ID8gMSA6IDA7XG5leHBvcnRzLm1vcmVPckVxdWFsVGhhbiA9ICh4LCB5KSA9PiB4ID49IHkgPyAxIDogMDtcbmV4cG9ydHMubGVzc09yRXF1YWxUaGFuID0gKHgsIHkpID0+IHggPD0geSA/IDEgOiAwO1xuZXhwb3J0cy5lcXVhbCA9ICh4LCB5KSA9PiB4ID09PSB5ID8gMSA6IDA7XG5leHBvcnRzLm5vdEVxdWFsID0gKHgsIHkpID0+IHggIT09IHkgPyAxIDogMDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpbmRleGluZ18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9pbmRleGluZycpO1xuY29uc3QgY291bnRzXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L2NvdW50cycpO1xuY29uc3QgYmFzaWNfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvYmFzaWMnKTtcbmNvbnN0IHBhZGRpbmdfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvcGFkZGluZycpO1xuY2xhc3MgVmFsdWVBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgICBnZXQgZmlyc3QoKSB7IHJldHVybiB0aGlzLmxlbmd0aCA+IDAgPyB0aGlzWzBdIDogdW5kZWZpbmVkOyB9XG4gICAgZ2V0IGxhc3QoKSB7IHJldHVybiB0aGlzLmxlbmd0aCA+IDAgPyB0aGlzW3RoaXMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7IH1cbiAgICBoZWFkKG4pIHsgcmV0dXJuIHRoaXMuc2xpY2UoMCwgbiB8fCAxMCk7IH1cbiAgICB0YWlsKG4pIHsgcmV0dXJuIHRoaXMuc2xpY2UoLShuIHx8IDEwKSk7IH1cbiAgICByYW5nZShzdGFydCwgZW5kLCBzdGVwKSB7IHJldHVybiBpbmRleGluZ18xLnJhbmdlKHRoaXMsIHN0YXJ0LCBlbmQsIHN0ZXApOyB9XG4gICAgcGVybXV0ZShpbmRleGVzKSB7IHJldHVybiBpbmRleGluZ18xLnBlcm11dGUodGhpcywgaW5kZXhlcyk7IH1cbiAgICBzaHVmZmxlKCkgeyByZXR1cm4gYmFzaWNfMS5zaHVmZmxlKHRoaXMpOyB9XG4gICAgdHJhbnNmb3JtKGNhbGxiYWNrKSB7IHJldHVybiBiYXNpY18xLnRyYW5zZm9ybSh0aGlzLCBjYWxsYmFjayk7IH1cbiAgICA7XG4gICAgZWFjaChjYWxsYmFjaykgeyByZXR1cm4gYmFzaWNfMS5lYWNoKHRoaXMsIGNhbGxiYWNrKTsgfVxuICAgIGZpbGxCeShmbikgeyByZXR1cm4gYmFzaWNfMS5maWxsQnkodGhpcywgZm4pOyB9XG4gICAgcGFkU3RhcnQobGVuZ3RoLCB2YWx1ZSkgeyByZXR1cm4gcGFkZGluZ18xLnBhZFN0YXJ0KHRoaXMsIGxlbmd0aCwgdmFsdWUpOyB9XG4gICAgcGFkRW5kKGxlbmd0aCwgdmFsdWUpIHsgcmV0dXJuIHBhZGRpbmdfMS5wYWRFbmQodGhpcywgbGVuZ3RoLCB2YWx1ZSk7IH1cbiAgICBlcXVhbHMoYSkgeyByZXR1cm4gYmFzaWNfMS5lcXVhbHModGhpcywgYSk7IH1cbiAgICBjb3B5KCkgeyByZXR1cm4gYmFzaWNfMS5jb3B5KHRoaXMpOyB9XG4gICAgdG9TZXQoKSB7IHJldHVybiBuZXcgU2V0KHRoaXMpOyB9XG4gICAgdW5pcXVlKCkgeyByZXR1cm4gY291bnRzXzEudW5pcXVlKHRoaXMpOyB9XG4gICAgY291bnRzKCkgeyByZXR1cm4gY291bnRzXzEuY291bnRzKHRoaXMpOyB9XG4gICAgY291bnQocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIGNvdW50c18xLmNvdW50KHRoaXMsIHBhcmFtKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWYWx1ZUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsdWUtYXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5lcXVhbHMgPSBlcXVhbHM7XG5mdW5jdGlvbiBjb3B5KHYpIHtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gdltpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuY29weSA9IGNvcHk7XG5mdW5jdGlvbiBzaHVmZmxlKHYpIHtcbiAgICBmb3IgKGxldCBpID0gdi5sZW5ndGg7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgICAgbGV0IHggPSB2W2kgLSAxXTtcbiAgICAgICAgdltpIC0gMV0gPSB2W2pdO1xuICAgICAgICB2W2pdID0geDtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gdHJhbnNmb3JtKHYsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBjYWxsYmFjay5jYWxsKG51bGwsIHZbaV0sIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZnVuY3Rpb24gZWFjaCh2LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHZbaV0sIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMuZWFjaCA9IGVhY2g7XG5mdW5jdGlvbiBmaWxsQnkodiwgZm4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdltpXSA9IGZuLmNhbGwobnVsbCwgaSwgdik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5maWxsQnkgPSBmaWxsQnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNpYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGNvdW50KHYsIHBhcmFtKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHBhcmFtLmNhbGwobnVsbCwgdltpXSwgaSwgdikpXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbSA9PT0gdltpXSB8fCAoTnVtYmVyLmlzTmFOKHBhcmFtKSAmJiBOdW1iZXIuaXNOYU4odltpXSkpKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbmZ1bmN0aW9uIGNvdW50cyh2KSB7XG4gICAgbGV0IGNvdW50cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB2W2ldO1xuICAgICAgICBjb3VudHMuc2V0KHgsIChjb3VudHMuZ2V0KHgpIHx8IDApICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjb3VudHM7XG59XG5leHBvcnRzLmNvdW50cyA9IGNvdW50cztcbmZ1bmN0aW9uIHVuaXF1ZSh2KSB7XG4gICAgbGV0IHNldCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IHYuY29uc3RydWN0b3IoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB2W2ldO1xuICAgICAgICBpZiAoIXNldC5oYXMoeCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHgpO1xuICAgICAgICAgICAgc2V0LmFkZCh4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy51bmlxdWUgPSB1bmlxdWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3VudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiByYW5nZSh2LCBzdGFydCwgZW5kLCBzdGVwKSB7XG4gICAgc3RlcCA9IHN0ZXAgPT0gbnVsbCA/IDEgOiBzdGVwO1xuICAgIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiAoc3RhcnQgPCAwID8gdi5sZW5ndGggKyBzdGFydCA6IHN0YXJ0KTtcbiAgICBlbmQgPSBlbmQgPT0gbnVsbCA/IHYubGVuZ3RoIDogKGVuZCA8IDAgPyB2Lmxlbmd0aCArIGVuZCA6IGVuZCk7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBzdGVwKSB9KTtcbiAgICBsZXQgaiA9IDA7XG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB2W2ldO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB2W2ldO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBwZXJtdXRlKHYsIGluZGV4ZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBpbmRleGVzLmxlbmd0aCB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGluZGV4ZXNbaV0gPj0gMCkge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gdltpbmRleGVzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHZbdi5sZW5ndGggKyBpbmRleGVzW2ldXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wZXJtdXRlID0gcGVybXV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4aW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcGFkU3RhcnQodiwgbGVuZ3RoLCB2YWx1ZSkge1xuICAgIHdoaWxlICh2Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2LnVuc2hpZnQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMucGFkU3RhcnQgPSBwYWRTdGFydDtcbmZ1bmN0aW9uIHBhZEVuZCh2LCBsZW5ndGgsIHZhbHVlKSB7XG4gICAgd2hpbGUgKHYubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHYucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5wYWRFbmQgPSBwYWRFbmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgdmFsdWVfYXJyYXlfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXknKTtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3N0YXRpc3RpY3MnKTtcbmNvbnN0IG1hdGhfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL21hdGgnKTtcbmNvbnN0IG9wZXJhdGlvbnNfMSA9IHJlcXVpcmUoJy4vdXRpbHMvb3BlcmF0aW9ucycpO1xuY29uc3Qgb3BlcmF0aW9uc18yID0gcmVxdWlyZSgnLi92ZWN0b3Ivb3BlcmF0aW9ucycpO1xuY29uc3QgZG90X3Byb2R1Y3RfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL2RvdC1wcm9kdWN0Jyk7XG5jb25zdCBxdWFudGlsZXNfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3F1YW50aWxlcycpO1xuY29uc3QgaGlzdG9ncmFtXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9oaXN0b2dyYW0nKTtcbmNvbnN0IGN1bXVsYXRpdmVfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL2N1bXVsYXRpdmUnKTtcbmNvbnN0IG5vcm1hbGl6ZV8xID0gcmVxdWlyZSgnLi92ZWN0b3Ivbm9ybWFsaXplJyk7XG5jb25zdCBzdGF0c18xID0gcmVxdWlyZSgnLi92ZWN0b3Ivc3RhdHMnKTtcbmNvbnN0IHJhbmdlXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9yYW5nZScpO1xuY2xhc3MgVmVjdG9yIGV4dGVuZHMgdmFsdWVfYXJyYXlfMS5kZWZhdWx0IHtcbiAgICBtaW4oKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWluKHRoaXMpOyB9XG4gICAgbWF4KCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1heCh0aGlzKTsgfVxuICAgIGV4dGVudCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5leHRlbnQodGhpcyk7IH1cbiAgICBtZWFuKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1lYW4odGhpcyk7IH1cbiAgICB2YXJpYW5jZSgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS52YXJpYW5jZSh0aGlzKTsgfVxuICAgIHN0ZCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5zdGQodGhpcyk7IH1cbiAgICBtYWQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWFkKHRoaXMpOyB9XG4gICAgbW9kZSgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tb2RlKHRoaXMpOyB9XG4gICAgYXJnbWluKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLmFyZ21pbih0aGlzKTsgfVxuICAgIGFyZ21heCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5hcmdtYXgodGhpcyk7IH1cbiAgICBtZWRpYW4oKSB7IHJldHVybiBxdWFudGlsZXNfMS5tZWRpYW4odGhpcyk7IH1cbiAgICBxdWFudGlsZXMocSkgeyByZXR1cm4gcXVhbnRpbGVzXzEucXVhbnRpbGVzKHRoaXMsIHEpOyB9XG4gICAgaGlzdG9ncmFtKG9wdGlvbnMpIHsgcmV0dXJuIGhpc3RvZ3JhbV8xLmhpc3RvZ3JhbSh0aGlzLCBvcHRpb25zKTsgfVxuICAgIG5vcm1hbGl6ZVN0YXRzKCkgeyBub3JtYWxpemVfMS5ub3JtYWxpemVTdGF0cyh0aGlzKTsgcmV0dXJuIHRoaXM7IH1cbiAgICBub3JtYWxpemVQcm9iYSgpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplUHJvYmEodGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgbm9ybWFsaXplVmVjdG9yKCkgeyBub3JtYWxpemVfMS5ub3JtYWxpemVWZWN0b3IodGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgc3RhdHMoKSB7IHJldHVybiBzdGF0c18xLnN0YXRzKHRoaXMpOyB9XG4gICAgc3VtKCkgeyByZXR1cm4gbWF0aF8xLnN1bSh0aGlzKTsgfVxuICAgIHN1bU9mU3F1YXJlcygpIHsgcmV0dXJuIG1hdGhfMS5zdW1PZlNxdWFyZXModGhpcyk7IH1cbiAgICBtYWduaXR1ZGUoKSB7IHJldHVybiBtYXRoXzEubWFnbml0dWRlKHRoaXMpOyB9XG4gICAgcHJvZHVjdCgpIHsgcmV0dXJuIG1hdGhfMS5wcm9kdWN0KHRoaXMpOyB9XG4gICAgY3Vtc3VtKCkgeyByZXR1cm4gY3VtdWxhdGl2ZV8xLmN1bXN1bSh0aGlzKTsgfVxuICAgIGRpZmYoKSB7IHJldHVybiBjdW11bGF0aXZlXzEuZGlmZih0aGlzKTsgfVxuICAgIHNvcnQoKSB7IHJldHVybiBzdXBlci5zb3J0KChhLCBiKSA9PiBhIC0gYik7IH1cbiAgICBzb3J0RGVzYygpIHsgcmV0dXJuIHN1cGVyLnNvcnQoKGEsIGIpID0+IGIgLSBhKTsgfVxuICAgIHNvbWUoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gc3VwZXIuc29tZShjYWxsYmFjaykgOiBzdXBlci5zb21lKHggPT4gISF4KTtcbiAgICB9XG4gICAgZXZlcnkoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gc3VwZXIuZXZlcnkoY2FsbGJhY2spIDogc3VwZXIuZXZlcnkoeCA9PiAhIXgpO1xuICAgIH1cbiAgICBhZGQocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuYWRkKTtcbiAgICB9XG4gICAgYWRkU2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLmFkZCk7XG4gICAgfVxuICAgIHN1YnRyYWN0KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLnN1YnRyYWN0KTtcbiAgICB9XG4gICAgc3VidHJhY3RTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEuc3VidHJhY3QpO1xuICAgIH1cbiAgICBtdWx0aXBseShwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIG11bHRpcGx5U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLm11bHRpcGx5KTtcbiAgICB9XG4gICAgZGl2aWRlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmRpdmlkZSk7XG4gICAgfVxuICAgIGRpdmlkZVNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBwb3cocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEucG93KTtcbiAgICB9XG4gICAgcG93U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLnBvdyk7XG4gICAgfVxuICAgIGFuZCh2KSB7IHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHYsIGZhbHNlLCBvcGVyYXRpb25zXzEuYW5kKTsgfVxuICAgIG9yKHYpIHsgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgdiwgZmFsc2UsIG9wZXJhdGlvbnNfMS5vcik7IH1cbiAgICBsZXNzVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5sZXNzVGhhbik7XG4gICAgfVxuICAgIG1vcmVUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm1vcmVUaGFuKTtcbiAgICB9XG4gICAgbGVzc09yRXF1YWxUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmxlc3NPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIG1vcmVPckVxdWFsVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tb3JlT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBlcXVhbChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5lcXVhbCk7XG4gICAgfVxuICAgIG5vdEVxdWFsKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm5vdEVxdWFsKTtcbiAgICB9XG4gICAgZG90KHYpIHsgcmV0dXJuIGRvdF9wcm9kdWN0XzEuZG90UHJvZHVjdCh0aGlzLCB2KTsgfVxuICAgIHN0YXRpYyBhZGQodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5hZGQpO1xuICAgIH1cbiAgICBzdGF0aWMgc3VidHJhY3QodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5zdWJ0cmFjdCk7XG4gICAgfVxuICAgIHN0YXRpYyBtdWx0aXBseSh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm11bHRpcGx5KTtcbiAgICB9XG4gICAgc3RhdGljIGRpdmlkZSh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmRpdmlkZSk7XG4gICAgfVxuICAgIHN0YXRpYyBwb3codjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5wb3cpO1xuICAgIH1cbiAgICBzdGF0aWMgYW5kKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuYW5kKTtcbiAgICB9XG4gICAgc3RhdGljIG9yKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEub3IpO1xuICAgIH1cbiAgICBzdGF0aWMgbGVzc1RoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5sZXNzVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBtb3JlVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm1vcmVUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIGxlc3NPckVxdWFsVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmxlc3NPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBtb3JlT3JFcXVhbFRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tb3JlT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgZXF1YWwodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5lcXVhbCk7XG4gICAgfVxuICAgIHN0YXRpYyBub3RFcXVhbCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm5vdEVxdWFsKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLnJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGxpbnNwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXzEubGluc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLmxvZ3NwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIGJhc2UsIHRoaXMpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIF9jdW1zdW0odiwgb3V0KSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0W2ldID0geCArIChpID09IDAgPyAwIDogb3V0W2kgLSAxXSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBfZGlmZih2LCBvdXQpIHtcbiAgICBsZXQgcHJldiA9IGhlbHBlcnNfMS5nZXROdW1iZXJWYWx1ZSh2LCAwKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSBoZWxwZXJzXzEuZ2V0TnVtYmVyVmFsdWUodiwgaSk7XG4gICAgICAgIG91dFtpIC0gMV0gPSB4IC0gcHJldjtcbiAgICAgICAgcHJldiA9IHg7XG4gICAgfVxufVxuZnVuY3Rpb24gY3Vtc3VtKHYpIHtcbiAgICBsZXQgb3V0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBfY3Vtc3VtKHYsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuY3Vtc3VtID0gY3Vtc3VtO1xuZnVuY3Rpb24gZGlmZih2KSB7XG4gICAgbGV0IG91dCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggLSAxIH0pO1xuICAgIF9kaWZmKHYsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdW11bGF0aXZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gZG90UHJvZHVjdCh2MSwgdjIpIHtcbiAgICBsZXQgeSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgKHgxLCB4MikgPT4ge1xuICAgICAgICB5ICs9IHgxICogeDI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHk7XG59XG5leHBvcnRzLmRvdFByb2R1Y3QgPSBkb3RQcm9kdWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG90LXByb2R1Y3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIGhpc3RvZ3JhbSh2LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgbGV0IG1pbiA9IG9wdGlvbnMubWluO1xuICAgIGxldCBtYXggPSBvcHRpb25zLm1heDtcbiAgICBpZiAobWluID09IG51bGwgfHwgbWF4ID09IG51bGwpIHtcbiAgICAgICAgbGV0IGV4dCA9IHN0YXRpc3RpY3NfMS5leHRlbnQodik7XG4gICAgICAgIGlmIChtaW4gPT0gbnVsbClcbiAgICAgICAgICAgIG1pbiA9IGV4dFswXTtcbiAgICAgICAgaWYgKG1heCA9PSBudWxsKVxuICAgICAgICAgICAgbWF4ID0gZXh0WzFdO1xuICAgIH1cbiAgICBsZXQgYmlucyA9IG9wdGlvbnMuYmlucztcbiAgICBpZiAob3B0aW9ucy5iaW5XaWR0aCkge1xuICAgICAgICBiaW5zID0gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gb3B0aW9ucy5iaW5XaWR0aCk7XG4gICAgfVxuICAgIGlmIChiaW5zID09IG51bGwpIHtcbiAgICAgICAgYmlucyA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KHYubGVuZ3RoKSk7XG4gICAgfVxuICAgIGxldCBkeCA9IChtYXggLSBtaW4pIC8gYmlucztcbiAgICBsZXQgeCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogYmlucyB9KTtcbiAgICBsZXQgeSA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogYmlucyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkrKykge1xuICAgICAgICB4W2ldID0gbWluICsgaSAqIGR4O1xuICAgICAgICB5W2ldID0gMDtcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcodiwgdmkgPT4ge1xuICAgICAgICBpZiAodmkgPj0gbWluICYmIHZpIDwgbWF4KSB7XG4gICAgICAgICAgICB5W01hdGguZmxvb3IoKHZpIC0gbWluKSAvIGR4KV0rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2aSA9PT0gbWF4KSB7XG4gICAgICAgICAgICB5W3kubGVuZ3RoIC0gMV0rKztcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLnByb2JhYmlsaXR5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeVtpXSAvPSBjb3VudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCBkeDogZHggfTtcbn1cbmV4cG9ydHMuaGlzdG9ncmFtID0gaGlzdG9ncmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9ncmFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gc3VtKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtO1xufVxuZXhwb3J0cy5zdW0gPSBzdW07XG5mdW5jdGlvbiBzdW1PZlNxdWFyZXMoYXJyYXkpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcihhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSB4ICogeDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtO1xufVxuZXhwb3J0cy5zdW1PZlNxdWFyZXMgPSBzdW1PZlNxdWFyZXM7XG5mdW5jdGlvbiBtYWduaXR1ZGUoYXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcyhhcnJheSkpO1xufVxuZXhwb3J0cy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG5mdW5jdGlvbiBwcm9kdWN0KGFycmF5KSB7XG4gICAgbGV0IHByb2R1Y3QgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKGFycmF5LCB4ID0+IHtcbiAgICAgICAgcHJvZHVjdCAqPSB4O1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9kdWN0O1xufVxuZXhwb3J0cy5wcm9kdWN0ID0gcHJvZHVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL21hdGgnKTtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vc3RhdGlzdGljcycpO1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvYmEodikge1xuICAgIGxldCBzID0gbWF0aF8xLnN1bSh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldIC89IHM7XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVByb2JhID0gbm9ybWFsaXplUHJvYmE7XG5mdW5jdGlvbiBub3JtYWxpemVWZWN0b3Iodikge1xuICAgIGxldCBzID0gbWF0aF8xLm1hZ25pdHVkZSh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldIC89IHM7XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVZlY3RvciA9IG5vcm1hbGl6ZVZlY3RvcjtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0YXRzKHYpIHtcbiAgICBsZXQgbSA9IHN0YXRpc3RpY3NfMS5tZWFuKHYpO1xuICAgIGxldCBvID0gc3RhdGlzdGljc18xLnN0ZCh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldID0gKHggLSBtKSAvIG87XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVN0YXRzID0gbm9ybWFsaXplU3RhdHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBzY2FsYXJPcGVyYXRpb24odiwgcywgb3V0cHV0LCBvcGVyYXRpb24pIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICBvdXRwdXRbaV0gPSBvcGVyYXRpb24oeCwgcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzY2FsYXJPcGVyYXRpb24yKHMsIHYsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0cHV0W2ldID0gb3BlcmF0aW9uKHMsIHgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluYXJ5T3BlcmF0aW9uKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlclBhaXIodjEsIHYyLCAoeDEsIHgyLCBpKSA9PiB7XG4gICAgICAgIG91dHB1dFtpXSA9IG9wZXJhdGlvbih4MSwgeDIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdmVjdG9yT3BlcmF0aW9uKHYsIHBhcmFtLCBtb2RpZnlTZWxmLCBvcGVyYXRpb24pIHtcbiAgICBsZXQgb3V0cHV0ID0gbW9kaWZ5U2VsZiA/IHYgOiB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIH0pO1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNjYWxhck9wZXJhdGlvbih2LCBwYXJhbSwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJhbS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBiaW5hcnlPcGVyYXRpb24odiwgcGFyYW0sIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBwZXJmb3JtIHZlY3RvciBvcGVyYXRpb24gb24gb2JqZWN0IHdpdGggaW52YWxpZCB0eXBlOicgKyBwYXJhbSArICcsICcgKyB0eXBlb2YgcGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy52ZWN0b3JPcGVyYXRpb24gPSB2ZWN0b3JPcGVyYXRpb247XG5mdW5jdGlvbiB2ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdHlwZSwgb3BlcmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2MSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHYyID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uKHYxLCB2Mik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQgPSB0eXBlLmZyb20oeyBsZW5ndGg6IHYxLmxlbmd0aCB8fCB2Mi5sZW5ndGggfSk7XG4gICAgaWYgKHR5cGVvZiB2MSA9PT0gJ251bWJlcicgJiYgdjIubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2NhbGFyT3BlcmF0aW9uMih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodjEubGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHYyID09PSAnbnVtYmVyJykge1xuICAgICAgICBzY2FsYXJPcGVyYXRpb24odjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHYxLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHYyLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJpbmFyeU9wZXJhdGlvbih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBwZXJmb3JtIHZlY3RvciBvcGVyYXRpb24gb24gb2JqZWN0cyB3aXRoIGludmFsaWQgdHlwZTogJyArIHR5cGVvZiB2MSArICcsICcgKyB0eXBlb2YgdjIpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy52ZWN0b3JPcGVyYXRpb24yID0gdmVjdG9yT3BlcmF0aW9uMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvaGVscGVyc1wiKTtcbmZ1bmN0aW9uIHF1YW50aWxlKHYsIHApIHtcbiAgICBsZXQgaCA9ICh2Lmxlbmd0aCAtIDEpICogcCArIDE7XG4gICAgbGV0IGhfID0gTWF0aC5mbG9vcihoKTtcbiAgICBsZXQgcyA9IGggLSBoXztcbiAgICBsZXQgeCA9IHZbaF8gLSAxXTtcbiAgICByZXR1cm4gcyA/IHggKyBzICogKHZbaF9dIC0geCkgOiB4O1xufVxuZnVuY3Rpb24gZ2V0U29ydGVkTnVtYmVycyh2KSB7XG4gICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyh2LCB4ID0+IHsgdmFsdWVzLnB1c2goeCk7IH0pO1xuICAgIHJldHVybiB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xufVxuZnVuY3Rpb24gcXVhbnRpbGVzKHYsIHEpIHtcbiAgICBsZXQgc29ydGVkID0gZ2V0U29ydGVkTnVtYmVycyh2KTtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBxICsgMSB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBxOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gcXVhbnRpbGUoc29ydGVkLCBpIC8gcSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnF1YW50aWxlcyA9IHF1YW50aWxlcztcbmZ1bmN0aW9uIG1lZGlhbih2KSB7XG4gICAgaWYgKHYubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgbGV0IHNvcnRlZCA9IGdldFNvcnRlZE51bWJlcnModik7XG4gICAgcmV0dXJuIHF1YW50aWxlKHNvcnRlZCwgMC41KTtcbn1cbmV4cG9ydHMubWVkaWFuID0gbWVkaWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVhbnRpbGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXAsIHR5cGUpIHtcbiAgICBpZiAoc3RvcCA9PSBudWxsICYmIHN0ZXAgPT0gbnVsbCkge1xuICAgICAgICBzdG9wID0gc3RhcnQ7XG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMCA6IHN0YXJ0O1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAoc3RhcnQgPD0gc3RvcCA/IDEgOiAtMSkgOiBzdGVwO1xuICAgIGlmICgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXAgPCAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AnKTtcbiAgICBsZXQgdiA9IHR5cGUuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCkgfSk7XG4gICAgbGV0IHg7XG4gICAgbGV0IGkgPSAwO1xuICAgIGlmIChzdGFydCA8IHN0b3ApIHtcbiAgICAgICAgd2hpbGUgKCh4ID0gc3RhcnQgKyBpICogc3RlcCkgPCBzdG9wKSB7XG4gICAgICAgICAgICB2W2krK10gPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aGlsZSAoKHggPSBzdGFydCArIGkgKiBzdGVwKSA+IHN0b3ApIHtcbiAgICAgICAgICAgIHZbaSsrXSA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBsaW5zcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCB0eXBlKSB7XG4gICAgbnVtID0gbnVtID09IG51bGwgPyAxMDAgOiBudW07XG4gICAgbGV0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIChleGNsdWRlRW5kID8gbnVtIDogbnVtIC0gMSk7XG4gICAgbGV0IHYgPSB0eXBlLmZyb20oeyBsZW5ndGg6IG51bSB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBzdGFydCArIGkgKiBzdGVwO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMubGluc3BhY2UgPSBsaW5zcGFjZTtcbmZ1bmN0aW9uIGxvZ3NwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIGJhc2UsIHR5cGUpIHtcbiAgICBudW0gPSBudW0gPT0gbnVsbCA/IDEwMCA6IG51bTtcbiAgICBiYXNlID0gYmFzZSA9PSBudWxsID8gMTAgOiBiYXNlO1xuICAgIGxldCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyAoZXhjbHVkZUVuZCA/IG51bSA6IG51bSAtIDEpO1xuICAgIGxldCB2ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiBudW0gfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICB2W2ldID0gTWF0aC5wb3coYmFzZSwgc3RhcnQgKyBpICogc3RlcCk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5sb2dzcGFjZSA9IGxvZ3NwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBtaW4oYXJyYXkpIHtcbiAgICBsZXQgbWluO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCB8fCB4IDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbjtcbn1cbmV4cG9ydHMubWluID0gbWluO1xuZnVuY3Rpb24gYXJnbWluKGFycmF5KSB7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgaW5kZXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCAoeCwgaSkgPT4ge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbmRleDtcbn1cbmV4cG9ydHMuYXJnbWluID0gYXJnbWluO1xuZnVuY3Rpb24gbWF4KGFycmF5KSB7XG4gICAgbGV0IG1heDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgeCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXg7XG59XG5leHBvcnRzLm1heCA9IG1heDtcbmZ1bmN0aW9uIGFyZ21heChhcnJheSkge1xuICAgIGxldCBtYXg7XG4gICAgbGV0IGluZGV4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgKHgsIGkpID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXg7XG59XG5leHBvcnRzLmFyZ21heCA9IGFyZ21heDtcbmZ1bmN0aW9uIGV4dGVudChhcnJheSkge1xuICAgIGxldCBtaW47XG4gICAgbGV0IG1heDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgeCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbbWluLCBtYXhdO1xufVxuZXhwb3J0cy5leHRlbnQgPSBleHRlbnQ7XG5mdW5jdGlvbiBtZWFuKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgbGV0IG4gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSB4O1xuICAgICAgICBuKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPT09IDAgPyB1bmRlZmluZWQgOiBzdW0gLyBuO1xufVxuZXhwb3J0cy5tZWFuID0gbWVhbjtcbmZ1bmN0aW9uIHZhcmlhbmNlKGFycmF5KSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIGxldCBtZWFuID0gMDtcbiAgICBsZXQgbTIgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIG4rKztcbiAgICAgICAgbGV0IGRlbHRhID0geCAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyBuO1xuICAgICAgICBtMiArPSBkZWx0YSAqICh4IC0gbWVhbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPiAxID8gKG0yIC8gKG4gLSAxKSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnZhcmlhbmNlID0gdmFyaWFuY2U7XG5mdW5jdGlvbiBzdGQoYXJyYXkpIHtcbiAgICBsZXQgc3F1YXJlZCA9IHZhcmlhbmNlKGFycmF5KTtcbiAgICByZXR1cm4gc3F1YXJlZCA9PSBudWxsID8gc3F1YXJlZCA6IE1hdGguc3FydChzcXVhcmVkKTtcbn1cbmV4cG9ydHMuc3RkID0gc3RkO1xuZnVuY3Rpb24gbWFkKGFycmF5KSB7XG4gICAgbGV0IGF2ZyA9IG1lYW4oYXJyYXkpO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBuID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0gTWF0aC5hYnMoYXZnIC0geCk7XG4gICAgICAgIG4rKztcbiAgICB9KTtcbiAgICByZXR1cm4gbiA9PT0gMCA/IHVuZGVmaW5lZCA6IHN1bSAvIG47XG59XG5leHBvcnRzLm1hZCA9IG1hZDtcbmZ1bmN0aW9uIG1vZGUoYXJyYXkpIHtcbiAgICBsZXQgY291bnRzID0ge307XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHNbeF0pIHtcbiAgICAgICAgICAgIGNvdW50c1t4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb3VudHNbeF0rKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXhWYWx1ZTtcbiAgICBsZXQgbWF4Q291bnQgPSAwO1xuICAgIE9iamVjdC5rZXlzKGNvdW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoY291bnRzW2tleV0gPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgbWF4Q291bnQgPSBjb3VudHNba2V5XTtcbiAgICAgICAgICAgIG1heFZhbHVlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heFZhbHVlID8gTnVtYmVyKG1heFZhbHVlKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMubW9kZSA9IG1vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0aXN0aWNzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi9zdGF0aXN0aWNzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL21hdGgnKTtcbmNvbnN0IHF1YW50aWxlc18xID0gcmVxdWlyZSgnLi9xdWFudGlsZXMnKTtcbmZ1bmN0aW9uIHN0YXRzKHYpIHtcbiAgICBsZXQgaW52YWxpZHMgPSBjb3VudEludmFsaWQodik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoOiB2Lmxlbmd0aCxcbiAgICAgICAgaW52YWxpZENvdW50OiBpbnZhbGlkcy5jb3VudCxcbiAgICAgICAgaW52YWxpZENvdW50czogaW52YWxpZHMuY291bnRzLFxuICAgICAgICBtaW46IHN0YXRpc3RpY3NfMS5taW4odiksXG4gICAgICAgIG1heDogc3RhdGlzdGljc18xLm1heCh2KSxcbiAgICAgICAgbWVhbjogc3RhdGlzdGljc18xLm1lYW4odiksXG4gICAgICAgIG1lZGlhbjogcXVhbnRpbGVzXzEubWVkaWFuKHYpLFxuICAgICAgICBtb2RlOiBzdGF0aXN0aWNzXzEubW9kZSh2KSxcbiAgICAgICAgc3RkOiBzdGF0aXN0aWNzXzEuc3RkKHYpLFxuICAgICAgICB2YXJpYW5jZTogc3RhdGlzdGljc18xLnZhcmlhbmNlKHYpLFxuICAgICAgICBtYWQ6IHN0YXRpc3RpY3NfMS5tYWQodiksXG4gICAgICAgIGRlY2lsZXM6IHF1YW50aWxlc18xLnF1YW50aWxlcyh2LCAxMCksXG4gICAgICAgIHN1bTogbWF0aF8xLnN1bSh2KVxuICAgIH07XG59XG5leHBvcnRzLnN0YXRzID0gc3RhdHM7XG5mdW5jdGlvbiBjb3VudEludmFsaWQodikge1xuICAgIGxldCBjb3VudHMgPSB7XG4gICAgICAgIHVuZGVmaW5lZDogMCxcbiAgICAgICAgJ251bGwnOiAwLFxuICAgICAgICBOYU46IDAsXG4gICAgICAgIEluZmluaXR5OiAwLFxuICAgICAgICAnLUluZmluaXR5JzogMFxuICAgIH07XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvdW50c1t2W2ldXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb3VudHNbdltpXV0rKztcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgY291bnRzOiBjb3VudHMsIGNvdW50OiBjb3VudCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdHMuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgQWN0b3JUeXBlIH0gZnJvbSBcIi4vQWN0b3JcIjtcbmltcG9ydCB7IEFDVE9SX1JBRElVUywgREVGQVVMVF9IRUlHSFQsIERFRkFVTFRfV0lEVEggfSBmcm9tIFwiLi9jb25zdHNcIjtcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gXCIuL1NpbXVsYXRpb25cIjtcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwidHMtdmVjdG9yXCI7XG5cbmNvbnN0IGljb25zID0gbmV3IE1hcDxBY3RvclR5cGUsIEhUTUxJbWFnZUVsZW1lbnQ+KFtcbiAgICBbQWN0b3JUeXBlLnJvY2ssIGdldEltYWdlKCdyb2NrJyldLFxuICAgIFtBY3RvclR5cGUucGFwZXIsIGdldEltYWdlKCdwYXBlcicpXSxcbiAgICBbQWN0b3JUeXBlLnNjaXNzb3IsIGdldEltYWdlKCdzY2lzc29yJyldXG5dKTtcblxubGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBzaW11bGF0aW9uID0gbmV3IFNpbXVsYXRpb24oREVGQVVMVF9XSURUSCwgREVGQVVMVF9IRUlHSFQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIHNldFNpemUoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNpbXVsYXRpb24ucmVzZXQoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1vbmUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRBY3Rvcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10ZW4tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBWZWN0b3IucmFuZ2UoMTApLmZvckVhY2goYWRkQWN0b3IpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsb3ctd2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxsb3dXaW4gPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3ktb24tY29sbGlzaW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNpbXVsYXRpb24uZGVzdHJveU9uQ29sbGlzaW9uID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFNpemUpO1xuXG4gICAgc2ltdWxhdGlvbi5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBhZGRBY3RvcigpIHtcbiAgICBzaW11bGF0aW9uLmFkZEFjdG9yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpKTtcbn1cblxuZnVuY3Rpb24gc2V0U2l6ZSgpIHtcbiAgICBjb25zdCBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjA7XG4gICAgY29uc3QgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzAgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJykuY2xpZW50SGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgc2ltdWxhdGlvbi53aWR0aCA9IG5ld1dpZHRoO1xuICAgIHNpbXVsYXRpb24uaGVpZ2h0ID0gbmV3SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZShpY29uOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGAke2ljb259LnBuZ2A7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5cbmxldCBsYXN0VGltZXN0YW1wOiBudW1iZXIgPSBudWxsO1xuZnVuY3Rpb24gYW5pbWF0aW9uTG9vcCh0aW1lc3RhbXA6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobGFzdFRpbWVzdGFtcCAhPT0gbnVsbCkge1xuICAgICAgICBzaW11bGF0aW9uLnN0ZXAoKHRpbWVzdGFtcCAtIGxhc3RUaW1lc3RhbXApICogMC4wMDEpO1xuICAgIH1cbiAgICBsYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHNpbXVsYXRpb24uYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGljb25zLmdldChhY3Rvci50eXBlKSwgYWN0b3IucG9zWzBdIC0gQUNUT1JfUkFESVVTLCBhY3Rvci5wb3NbMV0gLSBBQ1RPUl9SQURJVVMsIEFDVE9SX1JBRElVUyAqIDIsIEFDVE9SX1JBRElVUyAqIDIpO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xufVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgc2ltdWxhdGlvbi5jaGVja01pc3NpbmdUeXBlcygpO1xuICAgIGNvbnN0IGljb24gPSBpY29ucy5nZXQoc2ltdWxhdGlvbi5nZXRDdXJyZW50V2lubmVyKCkpO1xuICAgIGlmICghaWNvbikgcmV0dXJuO1xuICAgIGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpY29uLnNyYyk7XG59LCAxMDAwKTtcblxuaW5pdCgpO1xucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
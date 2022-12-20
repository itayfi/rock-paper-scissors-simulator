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
            actor.v = actor.v.add(force.divide(totalWeight).multiply(dt * 100));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUVELFdBQVcsQ0FBQztJQUNSLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQy9CLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN0RCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFVCxJQUFJLEVBQUUsQ0FBQztBQUNQLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL0FjdG9yLnRzIiwid2VicGFjazovL3Jwcy1zaW0vLi9zcmMvU2ltdWxhdGlvbi50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3V0aWxzL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS5qcyIsIndlYnBhY2s6Ly9ycHMtc2ltLy4vbm9kZV9tb2R1bGVzL3RzLXZlY3Rvci9kaXN0L3ZhbHVlLWFycmF5L2Jhc2ljLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvY291bnRzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmFsdWUtYXJyYXkvaW5kZXhpbmcuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92YWx1ZS1hcnJheS9wYWRkaW5nLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL2N1bXVsYXRpdmUuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvZG90LXByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvaGlzdG9ncmFtLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL21hdGguanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivbm9ybWFsaXplLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL29wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3IvcXVhbnRpbGVzLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3JhbmdlLmpzIiwid2VicGFjazovL3Jwcy1zaW0vLi9ub2RlX21vZHVsZXMvdHMtdmVjdG9yL2Rpc3QvdmVjdG9yL3N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL25vZGVfbW9kdWxlcy90cy12ZWN0b3IvZGlzdC92ZWN0b3Ivc3RhdHMuanMiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jwcy1zaW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycHMtc2ltL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBzLXNpbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcnBzLXNpbS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVmVjdG9yIGZyb20gJ3RzLXZlY3Rvcic7XG5cbmV4cG9ydCBlbnVtIEFjdG9yVHlwZSB7XG4gICAgcm9jayxcbiAgICBwYXBlcixcbiAgICBzY2lzc29yXG59XG5cbmNvbnN0IHdpbk1hcCA9IG5ldyBNYXAoW1xuICAgIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnNjaXNzb3JdLFxuICAgIFtBY3RvclR5cGUucGFwZXIsIEFjdG9yVHlwZS5yb2NrXSxcbiAgICBbQWN0b3JUeXBlLnNjaXNzb3IsIEFjdG9yVHlwZS5wYXBlcl0sXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciB7XG4gICAgdHlwZTogQWN0b3JUeXBlO1xuICAgIHBvczogVmVjdG9yO1xuICAgIHY6IFZlY3RvcjtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IEFjdG9yVHlwZSwgcG9zOiBWZWN0b3IpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3MuY29weSgpO1xuICAgICAgICB0aGlzLnYgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIH1cblxuICAgIGNvbXBhcmUob3RoZXI6IEFjdG9yKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbk1hcC5nZXQodGhpcy50eXBlKSA9PT0gb3RoZXIudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCJ0cy12ZWN0b3JcIjtcbmltcG9ydCBBY3RvciwgeyBBY3RvclR5cGUgfSBmcm9tIFwiLi9BY3RvclwiO1xuaW1wb3J0IHsgQUNUT1JfQ09VTlQsIEFDVE9SX1JBRElVUywgTUFYX1YgfSBmcm9tIFwiLi9jb25zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgYWN0b3JzOiBBY3RvcltdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgYWxsb3dXaW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkZXN0cm95T25Db2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzID0gW107XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYWN0b3JzLnNwbGljZSgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBQ1RPUl9DT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9ycy5wdXNoKG5ldyBBY3RvcihcbiAgICAgICAgICAgICAgICBpICUgMyxcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoLCBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXAoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShkdCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9zZXJzVG9EZXN0cm95OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKChhY3RvciwgYWN0b3JJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcmNlID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0b3JzLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdG9yID09PSBvdGhlcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlY3RvclRvID0gVmVjdG9yLnN1YnRyYWN0KG90aGVyLnBvcywgYWN0b3IucG9zKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSAxIC8gdmVjdG9yVG8uZG90KHZlY3RvclRvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSB2ZWN0b3JUby5jb3B5KCkubm9ybWFsaXplVmVjdG9yKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmVjdG9yVG8ubWFnbml0dWRlKCkgPCBBQ1RPUl9SQURJVVMgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rvci5jb21wYXJlKG90aGVyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3lPbkNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvc2Vyc1RvRGVzdHJveS5wdXNoKGFjdG9ySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rvci50eXBlID0gb3RoZXIudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlID0gZm9yY2UuYWRkKGRpci5jb3B5KCkubXVsdGlwbHkoLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxXZWlnaHQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JjZSA9IGZvcmNlLmFkZChkaXIubXVsdGlwbHkod2VpZ2h0KS5tdWx0aXBseShhY3Rvci5jb21wYXJlKG90aGVyKSkpO1xuICAgICAgICAgICAgICAgIHRvdGFsV2VpZ2h0ICs9IHdlaWdodDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhY3Rvci52ID0gYWN0b3Iudi5hZGQoZm9yY2UuZGl2aWRlKHRvdGFsV2VpZ2h0KS5tdWx0aXBseShkdCAqIDEwMCkpO1xuICAgICAgICAgICAgaWYgKGFjdG9yLnYubWFnbml0dWRlKCkgPiBNQVhfVikge1xuICAgICAgICAgICAgICAgIGFjdG9yLnYgPSBhY3Rvci52Lm5vcm1hbGl6ZVZlY3RvcigpLm11bHRpcGx5KE1BWF9WKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3VuZGFyaWVzKGFjdG9yLCBkdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgYWN0b3JJbmRleCBvZiBsb3NlcnNUb0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0b3JzLnNwbGljZShhY3RvckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tCb3VuZGFyaWVzKGFjdG9yOiBBY3RvciwgZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBhY3Rvci5wb3MgPSBhY3Rvci5wb3MuYWRkKGFjdG9yLnYubXVsdGlwbHkoZHQpKTtcbiAgICAgICAgaWYgKGFjdG9yLnBvc1swXSA8IEFDVE9SX1JBRElVUyB8fCBhY3Rvci5wb3NbMF0gPiB0aGlzLndpZHRoIC0gQUNUT1JfUkFESVVTKSB7XG4gICAgICAgICAgICBhY3Rvci52WzBdID0gLWFjdG9yLnZbMF07XG4gICAgICAgICAgICBhY3Rvci5wb3NbMF0gPSBNYXRoLm1heChBQ1RPUl9SQURJVVMsIE1hdGgubWluKHRoaXMud2lkdGggLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1swXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rvci5wb3NbMV0gPCBBQ1RPUl9SQURJVVMgfHwgYWN0b3IucG9zWzFdID4gdGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMpIHtcbiAgICAgICAgICAgIGFjdG9yLnZbMV0gPSAtYWN0b3IudlsxXTtcbiAgICAgICAgICAgIGFjdG9yLnBvc1sxXSA9IE1hdGgubWF4KEFDVE9SX1JBRElVUywgTWF0aC5taW4odGhpcy5oZWlnaHQgLSBBQ1RPUl9SQURJVVMsIGFjdG9yLnBvc1sxXSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tNaXNzaW5nVHlwZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93V2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIFtBY3RvclR5cGUucm9jaywgQWN0b3JUeXBlLnBhcGVyLCBBY3RvclR5cGUuc2Npc3Nvcl0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RvcnMuc29tZSgoYWN0b3IpID0+IGFjdG9yLnR5cGUgPT09IHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hY3RvcnMubGVuZ3RoKV0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50V2lubmVyKCk6IEFjdG9yVHlwZSB7XG4gICAgICAgIGNvbnN0IGNvdW50cyA9IG5ldyBNYXA8QWN0b3JUeXBlLCBudW1iZXI+KCk7XG4gICAgICAgIHRoaXMuYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiBjb3VudHMuc2V0KGFjdG9yLnR5cGUsIChjb3VudHMuZ2V0KGFjdG9yLnR5cGUpIHx8IDApICsgMSkpO1xuICAgICAgICBsZXQgbWF4VHlwZTogQWN0b3JUeXBlID0gbnVsbDtcbiAgICAgICAgbGV0IG1heENvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbdHlwZSwgY291bnRdIG9mIEFycmF5LmZyb20oY291bnRzLmVudHJpZXMoKSkpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICBtYXhUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4VHlwZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQUNUT1JfUkFESVVTID0gMTA7XG5leHBvcnQgY29uc3QgTUFYX1YgPSA1MDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJRFRIID0gNTAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSEVJR0hUID0gNTAwO1xuZXhwb3J0IGNvbnN0IEFDVE9SX0NPVU5UID0gNTA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciB2ZWN0b3JfMSA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5leHBvcnRzLlZlY3RvciA9IHZlY3Rvcl8xLmRlZmF1bHQ7XG52YXIgdmFsdWVfYXJyYXlfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXknKTtcbmV4cG9ydHMuVmFsdWVBcnJheSA9IHZhbHVlX2FycmF5XzEuZGVmYXVsdDtcbmNvbnN0IHZlY3Rvcl8yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZlY3Rvcl8yLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGZvckVhY2hOb25NaXNzaW5nKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICFOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICB0aHJvd05vdE51bWVyRXJyb3IodmFsdWUsIGkpO1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB2YWx1ZSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOb25NaXNzaW5nID0gZm9yRWFjaE5vbk1pc3Npbmc7XG5mdW5jdGlvbiBmb3JFYWNoTnVtYmVyKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0TnVtYmVyVmFsdWUoYXJyYXksIGkpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHZhbHVlLCBpKTtcbiAgICB9XG59XG5leHBvcnRzLmZvckVhY2hOdW1iZXIgPSBmb3JFYWNoTnVtYmVyO1xuZnVuY3Rpb24gZm9yRWFjaE51bWJlclBhaXIodjEsIHYyLCBjYWxsYmFjaykge1xuICAgIGNoZWNrTGVuZ3RoKHYxLCB2Mik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2MS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeDEgPSBnZXROdW1iZXJWYWx1ZSh2MSwgaSk7XG4gICAgICAgIGxldCB4MiA9IGdldE51bWJlclZhbHVlKHYyLCBpKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB4MSwgeDIsIGkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaE51bWJlclBhaXIgPSBmb3JFYWNoTnVtYmVyUGFpcjtcbmZ1bmN0aW9uIGdldE51bWJlclZhbHVlKGFycmF5LCBpbmRleCkge1xuICAgIGxldCB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpXG4gICAgICAgIHRocm93Tm90TnVtZXJFcnJvcih2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0TnVtYmVyVmFsdWUgPSBnZXROdW1iZXJWYWx1ZTtcbmZ1bmN0aW9uIHRocm93Tm90TnVtZXJFcnJvcih2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlY3RvciBjb250YWlucyBub24tbnVtZXJpYyB2YWx1ZSAnICsgdmFsdWUgKyAnIGF0IGluZGV4ICcgKyBpbmRleCArICcgb2YgdHlwZSAnICsgdHlwZW9mIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNoZWNrTGVuZ3RoKHYxLCB2Mikge1xuICAgIGlmICh2MS5sZW5ndGggIT09IHYyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlY3RvciBzaXplIGRpZmZlcmVuY2UgaW4gdmVjdG9yIG9wZXJhdGlvbjonICsgdjEubGVuZ3RoICsgJywgJyArIHYyLmxlbmd0aCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuYWRkID0gKHgsIHkpID0+IHggKyB5O1xuZXhwb3J0cy5zdWJ0cmFjdCA9ICh4LCB5KSA9PiB4IC0geTtcbmV4cG9ydHMubXVsdGlwbHkgPSAoeCwgeSkgPT4geCAqIHk7XG5leHBvcnRzLmRpdmlkZSA9ICh4LCB5KSA9PiB4IC8geTtcbmV4cG9ydHMucG93ID0gKHgsIHkpID0+IE1hdGgucG93KHgsIHkpO1xuZXhwb3J0cy5hbmQgPSAoeCwgeSkgPT4geCAmJiB5O1xuZXhwb3J0cy5vciA9ICh4LCB5KSA9PiB4IHx8IHk7XG5leHBvcnRzLm1vcmVUaGFuID0gKHgsIHkpID0+IHggPiB5ID8gMSA6IDA7XG5leHBvcnRzLmxlc3NUaGFuID0gKHgsIHkpID0+IHggPCB5ID8gMSA6IDA7XG5leHBvcnRzLm1vcmVPckVxdWFsVGhhbiA9ICh4LCB5KSA9PiB4ID49IHkgPyAxIDogMDtcbmV4cG9ydHMubGVzc09yRXF1YWxUaGFuID0gKHgsIHkpID0+IHggPD0geSA/IDEgOiAwO1xuZXhwb3J0cy5lcXVhbCA9ICh4LCB5KSA9PiB4ID09PSB5ID8gMSA6IDA7XG5leHBvcnRzLm5vdEVxdWFsID0gKHgsIHkpID0+IHggIT09IHkgPyAxIDogMDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpbmRleGluZ18xID0gcmVxdWlyZSgnLi92YWx1ZS1hcnJheS9pbmRleGluZycpO1xuY29uc3QgY291bnRzXzEgPSByZXF1aXJlKCcuL3ZhbHVlLWFycmF5L2NvdW50cycpO1xuY29uc3QgYmFzaWNfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvYmFzaWMnKTtcbmNvbnN0IHBhZGRpbmdfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXkvcGFkZGluZycpO1xuY2xhc3MgVmFsdWVBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgICBnZXQgZmlyc3QoKSB7IHJldHVybiB0aGlzLmxlbmd0aCA+IDAgPyB0aGlzWzBdIDogdW5kZWZpbmVkOyB9XG4gICAgZ2V0IGxhc3QoKSB7IHJldHVybiB0aGlzLmxlbmd0aCA+IDAgPyB0aGlzW3RoaXMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7IH1cbiAgICBoZWFkKG4pIHsgcmV0dXJuIHRoaXMuc2xpY2UoMCwgbiB8fCAxMCk7IH1cbiAgICB0YWlsKG4pIHsgcmV0dXJuIHRoaXMuc2xpY2UoLShuIHx8IDEwKSk7IH1cbiAgICByYW5nZShzdGFydCwgZW5kLCBzdGVwKSB7IHJldHVybiBpbmRleGluZ18xLnJhbmdlKHRoaXMsIHN0YXJ0LCBlbmQsIHN0ZXApOyB9XG4gICAgcGVybXV0ZShpbmRleGVzKSB7IHJldHVybiBpbmRleGluZ18xLnBlcm11dGUodGhpcywgaW5kZXhlcyk7IH1cbiAgICBzaHVmZmxlKCkgeyByZXR1cm4gYmFzaWNfMS5zaHVmZmxlKHRoaXMpOyB9XG4gICAgdHJhbnNmb3JtKGNhbGxiYWNrKSB7IHJldHVybiBiYXNpY18xLnRyYW5zZm9ybSh0aGlzLCBjYWxsYmFjayk7IH1cbiAgICA7XG4gICAgZWFjaChjYWxsYmFjaykgeyByZXR1cm4gYmFzaWNfMS5lYWNoKHRoaXMsIGNhbGxiYWNrKTsgfVxuICAgIGZpbGxCeShmbikgeyByZXR1cm4gYmFzaWNfMS5maWxsQnkodGhpcywgZm4pOyB9XG4gICAgcGFkU3RhcnQobGVuZ3RoLCB2YWx1ZSkgeyByZXR1cm4gcGFkZGluZ18xLnBhZFN0YXJ0KHRoaXMsIGxlbmd0aCwgdmFsdWUpOyB9XG4gICAgcGFkRW5kKGxlbmd0aCwgdmFsdWUpIHsgcmV0dXJuIHBhZGRpbmdfMS5wYWRFbmQodGhpcywgbGVuZ3RoLCB2YWx1ZSk7IH1cbiAgICBlcXVhbHMoYSkgeyByZXR1cm4gYmFzaWNfMS5lcXVhbHModGhpcywgYSk7IH1cbiAgICBjb3B5KCkgeyByZXR1cm4gYmFzaWNfMS5jb3B5KHRoaXMpOyB9XG4gICAgdG9TZXQoKSB7IHJldHVybiBuZXcgU2V0KHRoaXMpOyB9XG4gICAgdW5pcXVlKCkgeyByZXR1cm4gY291bnRzXzEudW5pcXVlKHRoaXMpOyB9XG4gICAgY291bnRzKCkgeyByZXR1cm4gY291bnRzXzEuY291bnRzKHRoaXMpOyB9XG4gICAgY291bnQocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIGNvdW50c18xLmNvdW50KHRoaXMsIHBhcmFtKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWYWx1ZUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsdWUtYXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5lcXVhbHMgPSBlcXVhbHM7XG5mdW5jdGlvbiBjb3B5KHYpIHtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gdltpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuY29weSA9IGNvcHk7XG5mdW5jdGlvbiBzaHVmZmxlKHYpIHtcbiAgICBmb3IgKGxldCBpID0gdi5sZW5ndGg7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgICAgbGV0IHggPSB2W2kgLSAxXTtcbiAgICAgICAgdltpIC0gMV0gPSB2W2pdO1xuICAgICAgICB2W2pdID0geDtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gdHJhbnNmb3JtKHYsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBjYWxsYmFjay5jYWxsKG51bGwsIHZbaV0sIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZnVuY3Rpb24gZWFjaCh2LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIHZbaV0sIGksIHYpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMuZWFjaCA9IGVhY2g7XG5mdW5jdGlvbiBmaWxsQnkodiwgZm4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdltpXSA9IGZuLmNhbGwobnVsbCwgaSwgdik7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5maWxsQnkgPSBmaWxsQnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNpYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGNvdW50KHYsIHBhcmFtKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHBhcmFtLmNhbGwobnVsbCwgdltpXSwgaSwgdikpXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbSA9PT0gdltpXSB8fCAoTnVtYmVyLmlzTmFOKHBhcmFtKSAmJiBOdW1iZXIuaXNOYU4odltpXSkpKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbmZ1bmN0aW9uIGNvdW50cyh2KSB7XG4gICAgbGV0IGNvdW50cyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB2W2ldO1xuICAgICAgICBjb3VudHMuc2V0KHgsIChjb3VudHMuZ2V0KHgpIHx8IDApICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBjb3VudHM7XG59XG5leHBvcnRzLmNvdW50cyA9IGNvdW50cztcbmZ1bmN0aW9uIHVuaXF1ZSh2KSB7XG4gICAgbGV0IHNldCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IHYuY29uc3RydWN0b3IoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB2W2ldO1xuICAgICAgICBpZiAoIXNldC5oYXMoeCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHgpO1xuICAgICAgICAgICAgc2V0LmFkZCh4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy51bmlxdWUgPSB1bmlxdWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3VudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiByYW5nZSh2LCBzdGFydCwgZW5kLCBzdGVwKSB7XG4gICAgc3RlcCA9IHN0ZXAgPT0gbnVsbCA/IDEgOiBzdGVwO1xuICAgIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiAoc3RhcnQgPCAwID8gdi5sZW5ndGggKyBzdGFydCA6IHN0YXJ0KTtcbiAgICBlbmQgPSBlbmQgPT0gbnVsbCA/IHYubGVuZ3RoIDogKGVuZCA8IDAgPyB2Lmxlbmd0aCArIGVuZCA6IGVuZCk7XG4gICAgbGV0IHJlc3VsdCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBzdGVwKSB9KTtcbiAgICBsZXQgaiA9IDA7XG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB2W2ldO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB2W2ldO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBwZXJtdXRlKHYsIGluZGV4ZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBpbmRleGVzLmxlbmd0aCB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGluZGV4ZXNbaV0gPj0gMCkge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gdltpbmRleGVzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHZbdi5sZW5ndGggKyBpbmRleGVzW2ldXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wZXJtdXRlID0gcGVybXV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4aW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcGFkU3RhcnQodiwgbGVuZ3RoLCB2YWx1ZSkge1xuICAgIHdoaWxlICh2Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2LnVuc2hpZnQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMucGFkU3RhcnQgPSBwYWRTdGFydDtcbmZ1bmN0aW9uIHBhZEVuZCh2LCBsZW5ndGgsIHZhbHVlKSB7XG4gICAgd2hpbGUgKHYubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHYucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5wYWRFbmQgPSBwYWRFbmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgdmFsdWVfYXJyYXlfMSA9IHJlcXVpcmUoJy4vdmFsdWUtYXJyYXknKTtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3N0YXRpc3RpY3MnKTtcbmNvbnN0IG1hdGhfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL21hdGgnKTtcbmNvbnN0IG9wZXJhdGlvbnNfMSA9IHJlcXVpcmUoJy4vdXRpbHMvb3BlcmF0aW9ucycpO1xuY29uc3Qgb3BlcmF0aW9uc18yID0gcmVxdWlyZSgnLi92ZWN0b3Ivb3BlcmF0aW9ucycpO1xuY29uc3QgZG90X3Byb2R1Y3RfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL2RvdC1wcm9kdWN0Jyk7XG5jb25zdCBxdWFudGlsZXNfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL3F1YW50aWxlcycpO1xuY29uc3QgaGlzdG9ncmFtXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9oaXN0b2dyYW0nKTtcbmNvbnN0IGN1bXVsYXRpdmVfMSA9IHJlcXVpcmUoJy4vdmVjdG9yL2N1bXVsYXRpdmUnKTtcbmNvbnN0IG5vcm1hbGl6ZV8xID0gcmVxdWlyZSgnLi92ZWN0b3Ivbm9ybWFsaXplJyk7XG5jb25zdCBzdGF0c18xID0gcmVxdWlyZSgnLi92ZWN0b3Ivc3RhdHMnKTtcbmNvbnN0IHJhbmdlXzEgPSByZXF1aXJlKCcuL3ZlY3Rvci9yYW5nZScpO1xuY2xhc3MgVmVjdG9yIGV4dGVuZHMgdmFsdWVfYXJyYXlfMS5kZWZhdWx0IHtcbiAgICBtaW4oKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWluKHRoaXMpOyB9XG4gICAgbWF4KCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1heCh0aGlzKTsgfVxuICAgIGV4dGVudCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5leHRlbnQodGhpcyk7IH1cbiAgICBtZWFuKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLm1lYW4odGhpcyk7IH1cbiAgICB2YXJpYW5jZSgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS52YXJpYW5jZSh0aGlzKTsgfVxuICAgIHN0ZCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5zdGQodGhpcyk7IH1cbiAgICBtYWQoKSB7IHJldHVybiBzdGF0aXN0aWNzXzEubWFkKHRoaXMpOyB9XG4gICAgbW9kZSgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5tb2RlKHRoaXMpOyB9XG4gICAgYXJnbWluKCkgeyByZXR1cm4gc3RhdGlzdGljc18xLmFyZ21pbih0aGlzKTsgfVxuICAgIGFyZ21heCgpIHsgcmV0dXJuIHN0YXRpc3RpY3NfMS5hcmdtYXgodGhpcyk7IH1cbiAgICBtZWRpYW4oKSB7IHJldHVybiBxdWFudGlsZXNfMS5tZWRpYW4odGhpcyk7IH1cbiAgICBxdWFudGlsZXMocSkgeyByZXR1cm4gcXVhbnRpbGVzXzEucXVhbnRpbGVzKHRoaXMsIHEpOyB9XG4gICAgaGlzdG9ncmFtKG9wdGlvbnMpIHsgcmV0dXJuIGhpc3RvZ3JhbV8xLmhpc3RvZ3JhbSh0aGlzLCBvcHRpb25zKTsgfVxuICAgIG5vcm1hbGl6ZVN0YXRzKCkgeyBub3JtYWxpemVfMS5ub3JtYWxpemVTdGF0cyh0aGlzKTsgcmV0dXJuIHRoaXM7IH1cbiAgICBub3JtYWxpemVQcm9iYSgpIHsgbm9ybWFsaXplXzEubm9ybWFsaXplUHJvYmEodGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgbm9ybWFsaXplVmVjdG9yKCkgeyBub3JtYWxpemVfMS5ub3JtYWxpemVWZWN0b3IodGhpcyk7IHJldHVybiB0aGlzOyB9XG4gICAgc3RhdHMoKSB7IHJldHVybiBzdGF0c18xLnN0YXRzKHRoaXMpOyB9XG4gICAgc3VtKCkgeyByZXR1cm4gbWF0aF8xLnN1bSh0aGlzKTsgfVxuICAgIHN1bU9mU3F1YXJlcygpIHsgcmV0dXJuIG1hdGhfMS5zdW1PZlNxdWFyZXModGhpcyk7IH1cbiAgICBtYWduaXR1ZGUoKSB7IHJldHVybiBtYXRoXzEubWFnbml0dWRlKHRoaXMpOyB9XG4gICAgcHJvZHVjdCgpIHsgcmV0dXJuIG1hdGhfMS5wcm9kdWN0KHRoaXMpOyB9XG4gICAgY3Vtc3VtKCkgeyByZXR1cm4gY3VtdWxhdGl2ZV8xLmN1bXN1bSh0aGlzKTsgfVxuICAgIGRpZmYoKSB7IHJldHVybiBjdW11bGF0aXZlXzEuZGlmZih0aGlzKTsgfVxuICAgIHNvcnQoKSB7IHJldHVybiBzdXBlci5zb3J0KChhLCBiKSA9PiBhIC0gYik7IH1cbiAgICBzb3J0RGVzYygpIHsgcmV0dXJuIHN1cGVyLnNvcnQoKGEsIGIpID0+IGIgLSBhKTsgfVxuICAgIHNvbWUoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gc3VwZXIuc29tZShjYWxsYmFjaykgOiBzdXBlci5zb21lKHggPT4gISF4KTtcbiAgICB9XG4gICAgZXZlcnkoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gc3VwZXIuZXZlcnkoY2FsbGJhY2spIDogc3VwZXIuZXZlcnkoeCA9PiAhIXgpO1xuICAgIH1cbiAgICBhZGQocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEuYWRkKTtcbiAgICB9XG4gICAgYWRkU2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLmFkZCk7XG4gICAgfVxuICAgIHN1YnRyYWN0KHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLnN1YnRyYWN0KTtcbiAgICB9XG4gICAgc3VidHJhY3RTZWxmKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCB0cnVlLCBvcGVyYXRpb25zXzEuc3VidHJhY3QpO1xuICAgIH1cbiAgICBtdWx0aXBseShwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tdWx0aXBseSk7XG4gICAgfVxuICAgIG11bHRpcGx5U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLm11bHRpcGx5KTtcbiAgICB9XG4gICAgZGl2aWRlKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmRpdmlkZSk7XG4gICAgfVxuICAgIGRpdmlkZVNlbGYocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIHRydWUsIG9wZXJhdGlvbnNfMS5kaXZpZGUpO1xuICAgIH1cbiAgICBwb3cocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgcGFyYW0sIGZhbHNlLCBvcGVyYXRpb25zXzEucG93KTtcbiAgICB9XG4gICAgcG93U2VsZihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgdHJ1ZSwgb3BlcmF0aW9uc18xLnBvdyk7XG4gICAgfVxuICAgIGFuZCh2KSB7IHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHYsIGZhbHNlLCBvcGVyYXRpb25zXzEuYW5kKTsgfVxuICAgIG9yKHYpIHsgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24odGhpcywgdiwgZmFsc2UsIG9wZXJhdGlvbnNfMS5vcik7IH1cbiAgICBsZXNzVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5sZXNzVGhhbik7XG4gICAgfVxuICAgIG1vcmVUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm1vcmVUaGFuKTtcbiAgICB9XG4gICAgbGVzc09yRXF1YWxUaGFuKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLmxlc3NPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIG1vcmVPckVxdWFsVGhhbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5tb3JlT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBlcXVhbChwYXJhbSkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbih0aGlzLCBwYXJhbSwgZmFsc2UsIG9wZXJhdGlvbnNfMS5lcXVhbCk7XG4gICAgfVxuICAgIG5vdEVxdWFsKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uKHRoaXMsIHBhcmFtLCBmYWxzZSwgb3BlcmF0aW9uc18xLm5vdEVxdWFsKTtcbiAgICB9XG4gICAgZG90KHYpIHsgcmV0dXJuIGRvdF9wcm9kdWN0XzEuZG90UHJvZHVjdCh0aGlzLCB2KTsgfVxuICAgIHN0YXRpYyBhZGQodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5hZGQpO1xuICAgIH1cbiAgICBzdGF0aWMgc3VidHJhY3QodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5zdWJ0cmFjdCk7XG4gICAgfVxuICAgIHN0YXRpYyBtdWx0aXBseSh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm11bHRpcGx5KTtcbiAgICB9XG4gICAgc3RhdGljIGRpdmlkZSh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmRpdmlkZSk7XG4gICAgfVxuICAgIHN0YXRpYyBwb3codjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5wb3cpO1xuICAgIH1cbiAgICBzdGF0aWMgYW5kKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEuYW5kKTtcbiAgICB9XG4gICAgc3RhdGljIG9yKHYxLCB2Mikge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uc18yLnZlY3Rvck9wZXJhdGlvbjIodjEsIHYyLCB0aGlzLCBvcGVyYXRpb25zXzEub3IpO1xuICAgIH1cbiAgICBzdGF0aWMgbGVzc1RoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5sZXNzVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBtb3JlVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm1vcmVUaGFuKTtcbiAgICB9XG4gICAgc3RhdGljIGxlc3NPckVxdWFsVGhhbih2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLmxlc3NPckVxdWFsVGhhbik7XG4gICAgfVxuICAgIHN0YXRpYyBtb3JlT3JFcXVhbFRoYW4odjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5tb3JlT3JFcXVhbFRoYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgZXF1YWwodjEsIHYyKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRpb25zXzIudmVjdG9yT3BlcmF0aW9uMih2MSwgdjIsIHRoaXMsIG9wZXJhdGlvbnNfMS5lcXVhbCk7XG4gICAgfVxuICAgIHN0YXRpYyBub3RFcXVhbCh2MSwgdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnNfMi52ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdGhpcywgb3BlcmF0aW9uc18xLm5vdEVxdWFsKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLnJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGxpbnNwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlXzEubGluc3BhY2Uoc3RhcnQsIHN0b3AsIG51bSwgZXhjbHVkZUVuZCwgdGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2dzcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCBiYXNlKSB7XG4gICAgICAgIHJldHVybiByYW5nZV8xLmxvZ3NwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIGJhc2UsIHRoaXMpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIF9jdW1zdW0odiwgb3V0KSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0W2ldID0geCArIChpID09IDAgPyAwIDogb3V0W2kgLSAxXSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBfZGlmZih2LCBvdXQpIHtcbiAgICBsZXQgcHJldiA9IGhlbHBlcnNfMS5nZXROdW1iZXJWYWx1ZSh2LCAwKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSBoZWxwZXJzXzEuZ2V0TnVtYmVyVmFsdWUodiwgaSk7XG4gICAgICAgIG91dFtpIC0gMV0gPSB4IC0gcHJldjtcbiAgICAgICAgcHJldiA9IHg7XG4gICAgfVxufVxuZnVuY3Rpb24gY3Vtc3VtKHYpIHtcbiAgICBsZXQgb3V0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiB2Lmxlbmd0aCB9KTtcbiAgICBfY3Vtc3VtKHYsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuY3Vtc3VtID0gY3Vtc3VtO1xuZnVuY3Rpb24gZGlmZih2KSB7XG4gICAgbGV0IG91dCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogdi5sZW5ndGggLSAxIH0pO1xuICAgIF9kaWZmKHYsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuZGlmZiA9IGRpZmY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdW11bGF0aXZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gZG90UHJvZHVjdCh2MSwgdjIpIHtcbiAgICBsZXQgeSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXJQYWlyKHYxLCB2MiwgKHgxLCB4MikgPT4ge1xuICAgICAgICB5ICs9IHgxICogeDI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHk7XG59XG5leHBvcnRzLmRvdFByb2R1Y3QgPSBkb3RQcm9kdWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG90LXByb2R1Y3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBzdGF0aXN0aWNzXzEgPSByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoJy4uL3V0aWxzL2hlbHBlcnMnKTtcbmZ1bmN0aW9uIGhpc3RvZ3JhbSh2LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgbGV0IG1pbiA9IG9wdGlvbnMubWluO1xuICAgIGxldCBtYXggPSBvcHRpb25zLm1heDtcbiAgICBpZiAobWluID09IG51bGwgfHwgbWF4ID09IG51bGwpIHtcbiAgICAgICAgbGV0IGV4dCA9IHN0YXRpc3RpY3NfMS5leHRlbnQodik7XG4gICAgICAgIGlmIChtaW4gPT0gbnVsbClcbiAgICAgICAgICAgIG1pbiA9IGV4dFswXTtcbiAgICAgICAgaWYgKG1heCA9PSBudWxsKVxuICAgICAgICAgICAgbWF4ID0gZXh0WzFdO1xuICAgIH1cbiAgICBsZXQgYmlucyA9IG9wdGlvbnMuYmlucztcbiAgICBpZiAob3B0aW9ucy5iaW5XaWR0aCkge1xuICAgICAgICBiaW5zID0gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gb3B0aW9ucy5iaW5XaWR0aCk7XG4gICAgfVxuICAgIGlmIChiaW5zID09IG51bGwpIHtcbiAgICAgICAgYmlucyA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KHYubGVuZ3RoKSk7XG4gICAgfVxuICAgIGxldCBkeCA9IChtYXggLSBtaW4pIC8gYmlucztcbiAgICBsZXQgeCA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogYmlucyB9KTtcbiAgICBsZXQgeSA9IHYuY29uc3RydWN0b3IuZnJvbSh7IGxlbmd0aDogYmlucyB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkrKykge1xuICAgICAgICB4W2ldID0gbWluICsgaSAqIGR4O1xuICAgICAgICB5W2ldID0gMDtcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcodiwgdmkgPT4ge1xuICAgICAgICBpZiAodmkgPj0gbWluICYmIHZpIDwgbWF4KSB7XG4gICAgICAgICAgICB5W01hdGguZmxvb3IoKHZpIC0gbWluKSAvIGR4KV0rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2aSA9PT0gbWF4KSB7XG4gICAgICAgICAgICB5W3kubGVuZ3RoIC0gMV0rKztcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLnByb2JhYmlsaXR5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeVtpXSAvPSBjb3VudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCBkeDogZHggfTtcbn1cbmV4cG9ydHMuaGlzdG9ncmFtID0gaGlzdG9ncmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9ncmFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuZnVuY3Rpb24gc3VtKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0geDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtO1xufVxuZXhwb3J0cy5zdW0gPSBzdW07XG5mdW5jdGlvbiBzdW1PZlNxdWFyZXMoYXJyYXkpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcihhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSB4ICogeDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtO1xufVxuZXhwb3J0cy5zdW1PZlNxdWFyZXMgPSBzdW1PZlNxdWFyZXM7XG5mdW5jdGlvbiBtYWduaXR1ZGUoYXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcyhhcnJheSkpO1xufVxuZXhwb3J0cy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG5mdW5jdGlvbiBwcm9kdWN0KGFycmF5KSB7XG4gICAgbGV0IHByb2R1Y3QgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTnVtYmVyKGFycmF5LCB4ID0+IHtcbiAgICAgICAgcHJvZHVjdCAqPSB4O1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9kdWN0O1xufVxuZXhwb3J0cy5wcm9kdWN0ID0gcHJvZHVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL21hdGgnKTtcbmNvbnN0IHN0YXRpc3RpY3NfMSA9IHJlcXVpcmUoJy4vc3RhdGlzdGljcycpO1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvYmEodikge1xuICAgIGxldCBzID0gbWF0aF8xLnN1bSh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldIC89IHM7XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVByb2JhID0gbm9ybWFsaXplUHJvYmE7XG5mdW5jdGlvbiBub3JtYWxpemVWZWN0b3Iodikge1xuICAgIGxldCBzID0gbWF0aF8xLm1hZ25pdHVkZSh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldIC89IHM7XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVZlY3RvciA9IG5vcm1hbGl6ZVZlY3RvcjtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0YXRzKHYpIHtcbiAgICBsZXQgbSA9IHN0YXRpc3RpY3NfMS5tZWFuKHYpO1xuICAgIGxldCBvID0gc3RhdGlzdGljc18xLnN0ZCh2KTtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICB2W2ldID0gKHggLSBtKSAvIG87XG4gICAgfSk7XG59XG5leHBvcnRzLm5vcm1hbGl6ZVN0YXRzID0gbm9ybWFsaXplU3RhdHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBzY2FsYXJPcGVyYXRpb24odiwgcywgb3V0cHV0LCBvcGVyYXRpb24pIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlcih2LCAoeCwgaSkgPT4ge1xuICAgICAgICBvdXRwdXRbaV0gPSBvcGVyYXRpb24oeCwgcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzY2FsYXJPcGVyYXRpb24yKHMsIHYsIG91dHB1dCwgb3BlcmF0aW9uKSB7XG4gICAgaGVscGVyc18xLmZvckVhY2hOdW1iZXIodiwgKHgsIGkpID0+IHtcbiAgICAgICAgb3V0cHV0W2ldID0gb3BlcmF0aW9uKHMsIHgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluYXJ5T3BlcmF0aW9uKHYxLCB2Miwgb3V0cHV0LCBvcGVyYXRpb24pIHtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE51bWJlclBhaXIodjEsIHYyLCAoeDEsIHgyLCBpKSA9PiB7XG4gICAgICAgIG91dHB1dFtpXSA9IG9wZXJhdGlvbih4MSwgeDIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdmVjdG9yT3BlcmF0aW9uKHYsIHBhcmFtLCBtb2RpZnlTZWxmLCBvcGVyYXRpb24pIHtcbiAgICBsZXQgb3V0cHV0ID0gbW9kaWZ5U2VsZiA/IHYgOiB2LmNvbnN0cnVjdG9yLmZyb20oeyBsZW5ndGg6IHYubGVuZ3RoIH0pO1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNjYWxhck9wZXJhdGlvbih2LCBwYXJhbSwgb3V0cHV0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJhbS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBiaW5hcnlPcGVyYXRpb24odiwgcGFyYW0sIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBwZXJmb3JtIHZlY3RvciBvcGVyYXRpb24gb24gb2JqZWN0IHdpdGggaW52YWxpZCB0eXBlOicgKyBwYXJhbSArICcsICcgKyB0eXBlb2YgcGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy52ZWN0b3JPcGVyYXRpb24gPSB2ZWN0b3JPcGVyYXRpb247XG5mdW5jdGlvbiB2ZWN0b3JPcGVyYXRpb24yKHYxLCB2MiwgdHlwZSwgb3BlcmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2MSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHYyID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uKHYxLCB2Mik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQgPSB0eXBlLmZyb20oeyBsZW5ndGg6IHYxLmxlbmd0aCB8fCB2Mi5sZW5ndGggfSk7XG4gICAgaWYgKHR5cGVvZiB2MSA9PT0gJ251bWJlcicgJiYgdjIubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2NhbGFyT3BlcmF0aW9uMih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodjEubGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHYyID09PSAnbnVtYmVyJykge1xuICAgICAgICBzY2FsYXJPcGVyYXRpb24odjEsIHYyLCBvdXRwdXQsIG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHYxLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHYyLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJpbmFyeU9wZXJhdGlvbih2MSwgdjIsIG91dHB1dCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBwZXJmb3JtIHZlY3RvciBvcGVyYXRpb24gb24gb2JqZWN0cyB3aXRoIGludmFsaWQgdHlwZTogJyArIHR5cGVvZiB2MSArICcsICcgKyB0eXBlb2YgdjIpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy52ZWN0b3JPcGVyYXRpb24yID0gdmVjdG9yT3BlcmF0aW9uMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvaGVscGVyc1wiKTtcbmZ1bmN0aW9uIHF1YW50aWxlKHYsIHApIHtcbiAgICBsZXQgaCA9ICh2Lmxlbmd0aCAtIDEpICogcCArIDE7XG4gICAgbGV0IGhfID0gTWF0aC5mbG9vcihoKTtcbiAgICBsZXQgcyA9IGggLSBoXztcbiAgICBsZXQgeCA9IHZbaF8gLSAxXTtcbiAgICByZXR1cm4gcyA/IHggKyBzICogKHZbaF9dIC0geCkgOiB4O1xufVxuZnVuY3Rpb24gZ2V0U29ydGVkTnVtYmVycyh2KSB7XG4gICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyh2LCB4ID0+IHsgdmFsdWVzLnB1c2goeCk7IH0pO1xuICAgIHJldHVybiB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xufVxuZnVuY3Rpb24gcXVhbnRpbGVzKHYsIHEpIHtcbiAgICBsZXQgc29ydGVkID0gZ2V0U29ydGVkTnVtYmVycyh2KTtcbiAgICBsZXQgcmVzdWx0ID0gdi5jb25zdHJ1Y3Rvci5mcm9tKHsgbGVuZ3RoOiBxICsgMSB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBxOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gcXVhbnRpbGUoc29ydGVkLCBpIC8gcSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnF1YW50aWxlcyA9IHF1YW50aWxlcztcbmZ1bmN0aW9uIG1lZGlhbih2KSB7XG4gICAgaWYgKHYubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgbGV0IHNvcnRlZCA9IGdldFNvcnRlZE51bWJlcnModik7XG4gICAgcmV0dXJuIHF1YW50aWxlKHNvcnRlZCwgMC41KTtcbn1cbmV4cG9ydHMubWVkaWFuID0gbWVkaWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVhbnRpbGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXAsIHR5cGUpIHtcbiAgICBpZiAoc3RvcCA9PSBudWxsICYmIHN0ZXAgPT0gbnVsbCkge1xuICAgICAgICBzdG9wID0gc3RhcnQ7XG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMCA6IHN0YXJ0O1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAoc3RhcnQgPD0gc3RvcCA/IDEgOiAtMSkgOiBzdGVwO1xuICAgIGlmICgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXAgPCAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AnKTtcbiAgICBsZXQgdiA9IHR5cGUuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCkgfSk7XG4gICAgbGV0IHg7XG4gICAgbGV0IGkgPSAwO1xuICAgIGlmIChzdGFydCA8IHN0b3ApIHtcbiAgICAgICAgd2hpbGUgKCh4ID0gc3RhcnQgKyBpICogc3RlcCkgPCBzdG9wKSB7XG4gICAgICAgICAgICB2W2krK10gPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aGlsZSAoKHggPSBzdGFydCArIGkgKiBzdGVwKSA+IHN0b3ApIHtcbiAgICAgICAgICAgIHZbaSsrXSA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBsaW5zcGFjZShzdGFydCwgc3RvcCwgbnVtLCBleGNsdWRlRW5kLCB0eXBlKSB7XG4gICAgbnVtID0gbnVtID09IG51bGwgPyAxMDAgOiBudW07XG4gICAgbGV0IHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIChleGNsdWRlRW5kID8gbnVtIDogbnVtIC0gMSk7XG4gICAgbGV0IHYgPSB0eXBlLmZyb20oeyBsZW5ndGg6IG51bSB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIHZbaV0gPSBzdGFydCArIGkgKiBzdGVwO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbn1cbmV4cG9ydHMubGluc3BhY2UgPSBsaW5zcGFjZTtcbmZ1bmN0aW9uIGxvZ3NwYWNlKHN0YXJ0LCBzdG9wLCBudW0sIGV4Y2x1ZGVFbmQsIGJhc2UsIHR5cGUpIHtcbiAgICBudW0gPSBudW0gPT0gbnVsbCA/IDEwMCA6IG51bTtcbiAgICBiYXNlID0gYmFzZSA9PSBudWxsID8gMTAgOiBiYXNlO1xuICAgIGxldCBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyAoZXhjbHVkZUVuZCA/IG51bSA6IG51bSAtIDEpO1xuICAgIGxldCB2ID0gdHlwZS5mcm9tKHsgbGVuZ3RoOiBudW0gfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICB2W2ldID0gTWF0aC5wb3coYmFzZSwgc3RhcnQgKyBpICogc3RlcCk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZXhwb3J0cy5sb2dzcGFjZSA9IGxvZ3NwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKCcuLi91dGlscy9oZWxwZXJzJyk7XG5mdW5jdGlvbiBtaW4oYXJyYXkpIHtcbiAgICBsZXQgbWluO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCB8fCB4IDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbjtcbn1cbmV4cG9ydHMubWluID0gbWluO1xuZnVuY3Rpb24gYXJnbWluKGFycmF5KSB7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgaW5kZXg7XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCAoeCwgaSkgPT4ge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbmRleDtcbn1cbmV4cG9ydHMuYXJnbWluID0gYXJnbWluO1xuZnVuY3Rpb24gbWF4KGFycmF5KSB7XG4gICAgbGV0IG1heDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgeCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXg7XG59XG5leHBvcnRzLm1heCA9IG1heDtcbmZ1bmN0aW9uIGFyZ21heChhcnJheSkge1xuICAgIGxldCBtYXg7XG4gICAgbGV0IGluZGV4O1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgKHgsIGkpID0+IHtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkIHx8IHggPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHg7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXg7XG59XG5leHBvcnRzLmFyZ21heCA9IGFyZ21heDtcbmZ1bmN0aW9uIGV4dGVudChhcnJheSkge1xuICAgIGxldCBtaW47XG4gICAgbGV0IG1heDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgeCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQgfHwgeCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0geDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbbWluLCBtYXhdO1xufVxuZXhwb3J0cy5leHRlbnQgPSBleHRlbnQ7XG5mdW5jdGlvbiBtZWFuKGFycmF5KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgbGV0IG4gPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIHN1bSArPSB4O1xuICAgICAgICBuKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPT09IDAgPyB1bmRlZmluZWQgOiBzdW0gLyBuO1xufVxuZXhwb3J0cy5tZWFuID0gbWVhbjtcbmZ1bmN0aW9uIHZhcmlhbmNlKGFycmF5KSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIGxldCBtZWFuID0gMDtcbiAgICBsZXQgbTIgPSAwO1xuICAgIGhlbHBlcnNfMS5mb3JFYWNoTm9uTWlzc2luZyhhcnJheSwgeCA9PiB7XG4gICAgICAgIG4rKztcbiAgICAgICAgbGV0IGRlbHRhID0geCAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyBuO1xuICAgICAgICBtMiArPSBkZWx0YSAqICh4IC0gbWVhbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG4gPiAxID8gKG0yIC8gKG4gLSAxKSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnZhcmlhbmNlID0gdmFyaWFuY2U7XG5mdW5jdGlvbiBzdGQoYXJyYXkpIHtcbiAgICBsZXQgc3F1YXJlZCA9IHZhcmlhbmNlKGFycmF5KTtcbiAgICByZXR1cm4gc3F1YXJlZCA9PSBudWxsID8gc3F1YXJlZCA6IE1hdGguc3FydChzcXVhcmVkKTtcbn1cbmV4cG9ydHMuc3RkID0gc3RkO1xuZnVuY3Rpb24gbWFkKGFycmF5KSB7XG4gICAgbGV0IGF2ZyA9IG1lYW4oYXJyYXkpO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBuID0gMDtcbiAgICBoZWxwZXJzXzEuZm9yRWFjaE5vbk1pc3NpbmcoYXJyYXksIHggPT4ge1xuICAgICAgICBzdW0gKz0gTWF0aC5hYnMoYXZnIC0geCk7XG4gICAgICAgIG4rKztcbiAgICB9KTtcbiAgICByZXR1cm4gbiA9PT0gMCA/IHVuZGVmaW5lZCA6IHN1bSAvIG47XG59XG5leHBvcnRzLm1hZCA9IG1hZDtcbmZ1bmN0aW9uIG1vZGUoYXJyYXkpIHtcbiAgICBsZXQgY291bnRzID0ge307XG4gICAgaGVscGVyc18xLmZvckVhY2hOb25NaXNzaW5nKGFycmF5LCB4ID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHNbeF0pIHtcbiAgICAgICAgICAgIGNvdW50c1t4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb3VudHNbeF0rKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXhWYWx1ZTtcbiAgICBsZXQgbWF4Q291bnQgPSAwO1xuICAgIE9iamVjdC5rZXlzKGNvdW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoY291bnRzW2tleV0gPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgbWF4Q291bnQgPSBjb3VudHNba2V5XTtcbiAgICAgICAgICAgIG1heFZhbHVlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heFZhbHVlID8gTnVtYmVyKG1heFZhbHVlKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMubW9kZSA9IG1vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0aXN0aWNzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuY29uc3Qgc3RhdGlzdGljc18xID0gcmVxdWlyZSgnLi9zdGF0aXN0aWNzJyk7XG5jb25zdCBtYXRoXzEgPSByZXF1aXJlKCcuL21hdGgnKTtcbmNvbnN0IHF1YW50aWxlc18xID0gcmVxdWlyZSgnLi9xdWFudGlsZXMnKTtcbmZ1bmN0aW9uIHN0YXRzKHYpIHtcbiAgICBsZXQgaW52YWxpZHMgPSBjb3VudEludmFsaWQodik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoOiB2Lmxlbmd0aCxcbiAgICAgICAgaW52YWxpZENvdW50OiBpbnZhbGlkcy5jb3VudCxcbiAgICAgICAgaW52YWxpZENvdW50czogaW52YWxpZHMuY291bnRzLFxuICAgICAgICBtaW46IHN0YXRpc3RpY3NfMS5taW4odiksXG4gICAgICAgIG1heDogc3RhdGlzdGljc18xLm1heCh2KSxcbiAgICAgICAgbWVhbjogc3RhdGlzdGljc18xLm1lYW4odiksXG4gICAgICAgIG1lZGlhbjogcXVhbnRpbGVzXzEubWVkaWFuKHYpLFxuICAgICAgICBtb2RlOiBzdGF0aXN0aWNzXzEubW9kZSh2KSxcbiAgICAgICAgc3RkOiBzdGF0aXN0aWNzXzEuc3RkKHYpLFxuICAgICAgICB2YXJpYW5jZTogc3RhdGlzdGljc18xLnZhcmlhbmNlKHYpLFxuICAgICAgICBtYWQ6IHN0YXRpc3RpY3NfMS5tYWQodiksXG4gICAgICAgIGRlY2lsZXM6IHF1YW50aWxlc18xLnF1YW50aWxlcyh2LCAxMCksXG4gICAgICAgIHN1bTogbWF0aF8xLnN1bSh2KVxuICAgIH07XG59XG5leHBvcnRzLnN0YXRzID0gc3RhdHM7XG5mdW5jdGlvbiBjb3VudEludmFsaWQodikge1xuICAgIGxldCBjb3VudHMgPSB7XG4gICAgICAgIHVuZGVmaW5lZDogMCxcbiAgICAgICAgJ251bGwnOiAwLFxuICAgICAgICBOYU46IDAsXG4gICAgICAgIEluZmluaXR5OiAwLFxuICAgICAgICAnLUluZmluaXR5JzogMFxuICAgIH07XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvdW50c1t2W2ldXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb3VudHNbdltpXV0rKztcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgY291bnRzOiBjb3VudHMsIGNvdW50OiBjb3VudCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdHMuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgQWN0b3JUeXBlIH0gZnJvbSBcIi4vQWN0b3JcIjtcbmltcG9ydCB7IEFDVE9SX1JBRElVUywgREVGQVVMVF9IRUlHSFQsIERFRkFVTFRfV0lEVEggfSBmcm9tIFwiLi9jb25zdHNcIjtcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gXCIuL1NpbXVsYXRpb25cIjtcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBpY29ucyA9IG5ldyBNYXA8QWN0b3JUeXBlLCBIVE1MSW1hZ2VFbGVtZW50PihbXG4gICAgW0FjdG9yVHlwZS5yb2NrLCBnZXRJbWFnZSgncm9jaycpXSxcbiAgICBbQWN0b3JUeXBlLnBhcGVyLCBnZXRJbWFnZSgncGFwZXInKV0sXG4gICAgW0FjdG9yVHlwZS5zY2lzc29yLCBnZXRJbWFnZSgnc2Npc3NvcicpXVxuXSk7XG5cbmxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuY29uc3Qgc2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKERFRkFVTFRfV0lEVEgsIERFRkFVTFRfSEVJR0hUKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBzZXRTaXplKCk7XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKTtcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNpbXVsYXRpb24ucmVzZXQoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbG93LXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBzaW11bGF0aW9uLmFsbG93V2luID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95LW9uLWNvbGxpc2lvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBzaW11bGF0aW9uLmRlc3Ryb3lPbkNvbGxpc2lvbiA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRTaXplKTtcblxuICAgIHNpbXVsYXRpb24ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc2V0U2l6ZSgpIHtcbiAgICBjb25zdCBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjA7XG4gICAgY29uc3QgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzAgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJykuY2xpZW50SGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgc2ltdWxhdGlvbi53aWR0aCA9IG5ld1dpZHRoO1xuICAgIHNpbXVsYXRpb24uaGVpZ2h0ID0gbmV3SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZShpY29uOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGAke2ljb259LnBuZ2A7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5cbmxldCBsYXN0VGltZXN0YW1wOiBudW1iZXIgPSBudWxsO1xuZnVuY3Rpb24gYW5pbWF0aW9uTG9vcCh0aW1lc3RhbXA6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobGFzdFRpbWVzdGFtcCAhPT0gbnVsbCkge1xuICAgICAgICBzaW11bGF0aW9uLnN0ZXAoKHRpbWVzdGFtcCAtIGxhc3RUaW1lc3RhbXApICogMC4wMDEpO1xuICAgIH1cbiAgICBsYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHNpbXVsYXRpb24uYWN0b3JzLmZvckVhY2goKGFjdG9yKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGljb25zLmdldChhY3Rvci50eXBlKSwgYWN0b3IucG9zWzBdIC0gQUNUT1JfUkFESVVTLCBhY3Rvci5wb3NbMV0gLSBBQ1RPUl9SQURJVVMsIEFDVE9SX1JBRElVUyAqIDIsIEFDVE9SX1JBRElVUyAqIDIpO1xuICAgIH0pO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xufVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgc2ltdWxhdGlvbi5jaGVja01pc3NpbmdUeXBlcygpO1xuICAgIGNvbnN0IGljb24gPSBpY29ucy5nZXQoc2ltdWxhdGlvbi5nZXRDdXJyZW50V2lubmVyKCkpO1xuICAgIGlmICghaWNvbikgcmV0dXJuO1xuICAgIGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpY29uLnNyYyk7XG59LCAxMDAwKTtcblxuaW5pdCgpO1xucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
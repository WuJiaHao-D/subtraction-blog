import {
  useDebounceFn,
  useEventListener,
  useNow,
  useScriptTag,
  useStorage,
  useStyleTag,
  watchImmediate
} from "./chunk-UQ5YJL7A.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  resolveComponent,
  toDisplayString,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  withDirectives
} from "./chunk-S437VZ3X.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e3) {
            reject(e3);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e3) {
            reject(e3);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _2 = { label: 0, sent: function() {
        if (t3[0] & 1) throw t3[1];
        return t3[1];
      }, trys: [], ops: [] }, f, y2, t3, g2;
      return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
        return this;
      }), g2;
      function verb(n3) {
        return function(v2) {
          return step([n3, v2]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
          if (f = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
          if (y2 = 0, t3) op = [op[0] & 2, t3.value];
          switch (op[0]) {
            case 0:
            case 1:
              t3 = op;
              break;
            case 4:
              _2.label++;
              return { value: op[1], done: false };
            case 5:
              _2.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _2.ops.pop();
              _2.trys.pop();
              continue;
            default:
              if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _2 = 0;
                continue;
              }
              if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                _2.label = op[1];
                break;
              }
              if (op[0] === 6 && _2.label < t3[1]) {
                _2.label = t3[1];
                t3 = op;
                break;
              }
              if (t3 && _2.label < t3[2]) {
                _2.label = t3[2];
                _2.ops.push(op);
                break;
              }
              if (t3[2]) _2.ops.pop();
              _2.trys.pop();
              continue;
          }
          op = body.call(thisArg, _2);
        } catch (e3) {
          op = [6, e3];
          y2 = 0;
        } finally {
          f = t3 = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = (function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!this.recaptcha.enterprise) return [3, 2];
                return [4, this.recaptcha.enterprise.execute(this.recaptchaID, { action })];
              case 1:
                _a = _b.sent();
                return [3, 4];
              case 2:
                return [4, this.recaptcha.execute(this.recaptchaID, { action })];
              case 3:
                _a = _b.sent();
                _b.label = 4;
              case 4:
                return [2, _a];
            }
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    })();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t3) {
        for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
          s2 = arguments[i2];
          for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p))
            t3[p] = s2[p];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = (function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options.useRecaptchaNet || false, options.useEnterprise || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {}, options.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v2) {
              return v2(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v2) {
              return v2(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        scriptElement.setAttribute("async", "");
        scriptElement.setAttribute("defer", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        } else if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = __assign({ sitekey: siteKey }, parameters);
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    })();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// node_modules/@waline/api/dist/index.js
var e = { "Content-Type": `application/json` };
var t = (e3) => `${e3.replace(/\/?$/u, `/`)}api/`;
var n = (e3, t3 = ``) => {
  if (typeof e3 == `object` && e3.errno) throw TypeError(`${t3} failed with ${e3.errno}: ${e3.errmsg}`);
  return e3;
};
var r = ({ serverURL: e3, lang: r3, paths: i2, type: a2, signal: o3 }) => fetch(`${t(e3)}article?path=${encodeURIComponent(i2.join(`,`))}&type=${encodeURIComponent(a2.join(`,`))}&lang=${r3}`, { signal: o3 }).then((e4) => e4.json()).then((e4) => n(e4, `Get counter`).data);
var i = ({ serverURL: r3, lang: i2, path: a2, type: o3, action: s2 }) => fetch(`${t(r3)}article?lang=${i2}`, { method: `POST`, headers: e, body: JSON.stringify({ path: a2, type: o3, action: s2 }) }).then((e3) => e3.json()).then((e3) => n(e3, `Update counter`).data);
var a = ({ serverURL: e3, lang: r3, path: i2, page: a2, pageSize: o3, sortBy: s2, signal: c2, token: l3 }) => {
  let u2 = {};
  return l3 && (u2.Authorization = `Bearer ${l3}`), fetch(`${t(e3)}comment?path=${encodeURIComponent(i2)}&pageSize=${o3}&page=${a2}&lang=${r3}&sortBy=${s2}`, { signal: c2, headers: u2 }).then((e4) => e4.json()).then((e4) => n(e4, `Get comment data`).data);
};
var o = ({ serverURL: e3, lang: n3, token: r3, comment: i2 }) => {
  let a2 = { "Content-Type": `application/json` };
  return r3 && (a2.Authorization = `Bearer ${r3}`), fetch(`${t(e3)}comment?lang=${n3}`, { method: `POST`, headers: a2, body: JSON.stringify(i2) }).then((e4) => e4.json());
};
var s = ({ serverURL: e3, lang: r3, token: i2, objectId: a2 }) => fetch(`${t(e3)}comment/${a2}?lang=${r3}`, { method: `DELETE`, headers: { Authorization: `Bearer ${i2}` } }).then((e4) => e4.json()).then((e4) => n(e4, `Delete comment`));
var c = ({ serverURL: r3, lang: i2, token: a2, objectId: o3, comment: s2 }) => fetch(`${t(r3)}comment/${o3}?lang=${i2}`, { method: `PUT`, headers: { ...e, Authorization: `Bearer ${a2}` }, body: JSON.stringify(s2) }).then((e3) => e3.json()).then((e3) => n(e3, `Update comment`));
var u = () => {
  let e3 = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(e3);
};
var d = ({ lang: e3, serverURL: t3 }) => {
  let n3 = 1024, r3 = (window.innerWidth - n3) / 2, i2 = (window.innerHeight - 600) / 2;
  if (u()) return location.href = `${t3.replace(/\/$/u, ``)}/ui/login?lng=${encodeURIComponent(e3)}&redirect=${encodeURIComponent(location.href)}`, new Promise(() => {
  });
  let a2 = window.open(`${t3.replace(/\/$/u, ``)}/ui/login?lng=${encodeURIComponent(e3)}`, `_blank`, `width=${n3},height=600,left=${r3},top=${i2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
  return a2?.postMessage({ type: `TOKEN`, data: null }, `*`), new Promise((e4) => {
    let t4 = ({ data: n4 }) => {
      !n4 || typeof n4 != `object` || n4.type !== `userInfo` || n4.data.token && (a2?.close(), window.removeEventListener(`message`, t4), e4(n4.data));
    };
    window.addEventListener(`message`, t4);
  });
};

// node_modules/@waline/client/dist/component.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());

// node_modules/marked/lib/marked.esm.js
function M() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var T = M();
function N(l3) {
  T = l3;
}
var _ = { exec: () => null };
function E(l3) {
  let e3 = [];
  return (t3) => {
    let n3 = Math.max(0, Math.min(3, t3 - 1)), s2 = e3[n3];
    return s2 || (s2 = l3(n3), e3[n3] = s2), s2;
  };
}
function d2(l3, e3 = "") {
  let t3 = typeof l3 == "string" ? l3 : l3.source, n3 = { replace: (s2, r3) => {
    let i2 = typeof r3 == "string" ? r3 : r3.source;
    return i2 = i2.replace(m.caret, "$1"), t3 = t3.replace(s2, i2), n3;
  }, getRegex: () => new RegExp(t3, e3) };
  return n3;
}
var Te = ((l3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l3);
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: E((l3) => new RegExp(`^ {0,${l3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: E((l3) => new RegExp(`^ {0,${l3}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: E((l3) => new RegExp(`^ {0,${l3}}(?:\`\`\`|~~~)`)), headingBeginRegex: E((l3) => new RegExp(`^ {0,${l3}}#`)), htmlBeginRegex: E((l3) => new RegExp(`^ {0,${l3}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: E((l3) => new RegExp(`^ {0,${l3}}>`)) };
var Oe = /^(?:[ \t]*(?:\n|$))+/;
var we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var j = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ae = d2(oe).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Se = d2(oe).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var F = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var $e = /^[^\n]+/;
var U = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Le = d2(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", U).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var _e = d2(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, j).getRegex();
var H = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var K = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var ze = d2("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", K).replace("tag", H).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var le = d2(F).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex();
var Me = d2(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", le).getRegex();
var W = { blockquote: Me, code: we, def: Le, fences: ye, heading: Pe, hr: B, html: ze, lheading: ae, list: _e, newline: Oe, paragraph: le, table: _, text: $e };
var se = d2("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex();
var Ee = { ...W, lheading: Se, table: se, paragraph: d2(F).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex() };
var Ie = { ...W, html: d2(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", K).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: _, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: d2(F).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Ae = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ce = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ue = /^( {2,}|\\)\n(?!\s*$)/;
var Be = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var I = /[\p{P}\p{S}]/u;
var Z = /[\s\p{P}\p{S}]/u;
var X = /[^\s\p{P}\p{S}]/u;
var De = d2(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Z).getRegex();
var pe = /(?!~)[\p{P}\p{S}]/u;
var qe = /(?!~)[\s\p{P}\p{S}]/u;
var ve = /(?:[^\s\p{P}\p{S}]|~)/u;
var He = d2(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Ze = d2(ce, "u").replace(/punct/g, I).getRegex();
var Ge = d2(ce, "u").replace(/punct/g, pe).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ne = d2(he, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, I).getRegex();
var Qe = d2(he, "gu").replace(/notPunctSpace/g, ve).replace(/punctSpace/g, qe).replace(/punct/g, pe).getRegex();
var je = d2("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, I).getRegex();
var Fe = d2(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, I).getRegex();
var Ue = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var Ke = d2(Ue, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, I).getRegex();
var We = d2(/\\(punct)/, "gu").replace(/punct/g, I).getRegex();
var Xe = d2(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var Je = d2(K).replace("(?:-->|$)", "-->").getRegex();
var Ve = d2("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var v = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
var Ye = d2(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", v).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var ke = d2(/^!?\[(label)\]\[(ref)\]/).replace("label", v).replace("ref", U).getRegex();
var de = d2(/^!?\[(ref)\](?:\[\])?/).replace("ref", U).getRegex();
var et = d2("reflink|nolink(?!\\()", "g").replace("reflink", ke).replace("nolink", de).getRegex();
var ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var J = { _backpedal: _, anyPunctuation: We, autolink: Xe, blockSkip: He, br: ue, code: Ce, del: _, delLDelim: _, delRDelim: _, emStrongLDelim: Ze, emStrongRDelimAst: Ne, emStrongRDelimUnd: je, escape: Ae, link: Ye, nolink: de, punctuation: De, reflink: ke, reflinkSearch: et, tag: Ve, text: Be, url: _ };
var tt = { ...J, link: d2(/^!?\[(label)\]\((.*?)\)/).replace("label", v).getRegex(), reflink: d2(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v).getRegex() };
var Q = { ...J, emStrongRDelimAst: Qe, emStrongLDelim: Ge, delLDelim: Fe, delRDelim: Ke, url: d2(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: d2(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex() };
var nt = { ...Q, br: d2(ue).replace("{2,}", "*").getRegex(), text: d2(Q.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var D = { normal: W, gfm: Ee, pedantic: Ie };
var A = { normal: J, gfm: Q, breaks: nt, pedantic: tt };
var rt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l3) => rt[l3];
function O(l3, e3) {
  if (e3) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ge);
  return l3;
}
function V(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function Y(l3, e3) {
  let t3 = l3.replace(m.findPipe, (r3, i2, o3) => {
    let u2 = false, a2 = i2;
    for (; --a2 >= 0 && o3[a2] === "\\"; ) u2 = !u2;
    return u2 ? "|" : " |";
  }), n3 = t3.split(m.splitPipe), s2 = 0;
  if (n3[0].trim() || n3.shift(), n3.length > 0 && !n3.at(-1)?.trim() && n3.pop(), e3) if (n3.length > e3) n3.splice(e3);
  else for (; n3.length < e3; ) n3.push("");
  for (; s2 < n3.length; s2++) n3[s2] = n3[s2].trim().replace(m.slashPipe, "|");
  return n3;
}
function $(l3, e3, t3) {
  let n3 = l3.length;
  if (n3 === 0) return "";
  let s2 = 0;
  for (; s2 < n3; ) {
    let r3 = l3.charAt(n3 - s2 - 1);
    if (r3 === e3 && !t3) s2++;
    else if (r3 !== e3 && t3) s2++;
    else break;
  }
  return l3.slice(0, n3 - s2);
}
function ee(l3) {
  let e3 = l3.split(`
`), t3 = e3.length - 1;
  for (; t3 >= 0 && m.blankLine.test(e3[t3]); ) t3--;
  return e3.length - t3 <= 2 ? l3 : e3.slice(0, t3 + 1).join(`
`);
}
function fe(l3, e3) {
  if (l3.indexOf(e3[1]) === -1) return -1;
  let t3 = 0;
  for (let n3 = 0; n3 < l3.length; n3++) if (l3[n3] === "\\") n3++;
  else if (l3[n3] === e3[0]) t3++;
  else if (l3[n3] === e3[1] && (t3--, t3 < 0)) return n3;
  return t3 > 0 ? -2 : -1;
}
function me(l3, e3 = 0) {
  let t3 = e3, n3 = "";
  for (let s2 of l3) if (s2 === "	") {
    let r3 = 4 - t3 % 4;
    n3 += " ".repeat(r3), t3 += r3;
  } else n3 += s2, t3++;
  return n3;
}
function xe(l3, e3, t3, n3, s2) {
  let r3 = e3.href, i2 = e3.title || null, o3 = l3[1].replace(s2.other.outputLinkReplace, "$1");
  n3.state.inLink = true;
  let u2 = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t3, href: r3, title: i2, text: o3, tokens: n3.inlineTokens(o3) };
  return n3.state.inLink = false, u2;
}
function st(l3, e3, t3) {
  let n3 = l3.match(t3.other.indentCodeCompensation);
  if (n3 === null) return e3;
  let s2 = n3[1];
  return e3.split(`
`).map((r3) => {
    let i2 = r3.match(t3.other.beginningSpace);
    if (i2 === null) return r3;
    let [o3] = i2;
    return o3.length >= s2.length ? r3.slice(s2.length) : r3;
  }).join(`
`);
}
var w = class {
  options;
  rules;
  lexer;
  constructor(e3) {
    this.options = e3 || T;
  }
  space(e3) {
    let t3 = this.rules.block.newline.exec(e3);
    if (t3 && t3[0].length > 0) return { type: "space", raw: t3[0] };
  }
  code(e3) {
    let t3 = this.rules.block.code.exec(e3);
    if (t3) {
      let n3 = this.options.pedantic ? t3[0] : ee(t3[0]), s2 = n3.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n3, codeBlockStyle: "indented", text: s2 };
    }
  }
  fences(e3) {
    let t3 = this.rules.block.fences.exec(e3);
    if (t3) {
      let n3 = t3[0], s2 = st(n3, t3[3] || "", this.rules);
      return { type: "code", raw: n3, lang: t3[2] ? t3[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t3[2], text: s2 };
    }
  }
  heading(e3) {
    let t3 = this.rules.block.heading.exec(e3);
    if (t3) {
      let n3 = t3[2].trim();
      if (this.rules.other.endingHash.test(n3)) {
        let s2 = $(n3, "#");
        (this.options.pedantic || !s2 || this.rules.other.endingSpaceChar.test(s2)) && (n3 = s2.trim());
      }
      return { type: "heading", raw: $(t3[0], `
`), depth: t3[1].length, text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  hr(e3) {
    let t3 = this.rules.block.hr.exec(e3);
    if (t3) return { type: "hr", raw: $(t3[0], `
`) };
  }
  blockquote(e3) {
    let t3 = this.rules.block.blockquote.exec(e3);
    if (t3) {
      let n3 = $(t3[0], `
`).split(`
`), s2 = "", r3 = "", i2 = [];
      for (; n3.length > 0; ) {
        let o3 = false, u2 = [], a2;
        for (a2 = 0; a2 < n3.length; a2++) if (this.rules.other.blockquoteStart.test(n3[a2])) u2.push(n3[a2]), o3 = true;
        else if (!o3) u2.push(n3[a2]);
        else break;
        n3 = n3.slice(a2);
        let c2 = u2.join(`
`), p = c2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s2 = s2 ? `${s2}
${c2}` : c2, r3 = r3 ? `${r3}
${p}` : p;
        let k = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(p, i2, true), this.lexer.state.top = k, n3.length === 0) break;
        let h2 = i2.at(-1);
        if (h2?.type === "code") break;
        if (h2?.type === "blockquote") {
          let R2 = h2, f = R2.raw + `
` + n3.join(`
`), S = this.blockquote(f);
          i2[i2.length - 1] = S, s2 = s2.substring(0, s2.length - R2.raw.length) + S.raw, r3 = r3.substring(0, r3.length - R2.text.length) + S.text;
          break;
        } else if (h2?.type === "list") {
          let R2 = h2, f = R2.raw + `
` + n3.join(`
`), S = this.list(f);
          i2[i2.length - 1] = S, s2 = s2.substring(0, s2.length - h2.raw.length) + S.raw, r3 = r3.substring(0, r3.length - R2.raw.length) + S.raw, n3 = f.substring(i2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s2, tokens: i2, text: r3 };
    }
  }
  list(e3) {
    let t3 = this.rules.block.list.exec(e3);
    if (t3) {
      let n3 = t3[1].trim(), s2 = n3.length > 1, r3 = { type: "list", raw: "", ordered: s2, start: s2 ? +n3.slice(0, -1) : "", loose: false, items: [] };
      n3 = s2 ? `\\d{1,9}\\${n3.slice(-1)}` : `\\${n3}`, this.options.pedantic && (n3 = s2 ? n3 : "[*+-]");
      let i2 = this.rules.other.listItemRegex(n3), o3 = false;
      for (; e3; ) {
        let a2 = false, c2 = "", p = "";
        if (!(t3 = i2.exec(e3)) || this.rules.block.hr.test(e3)) break;
        c2 = t3[0], e3 = e3.substring(c2.length);
        let k = me(t3[2].split(`
`, 1)[0], t3[1].length), h2 = e3.split(`
`, 1)[0], R2 = !k.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, p = k.trimStart()) : R2 ? f = t3[1].length + 1 : (f = k.search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, p = k.slice(f), f += t3[1].length), R2 && this.rules.other.blankLine.test(h2) && (c2 += h2 + `
`, e3 = e3.substring(h2.length + 1), a2 = true), !a2) {
          let S = this.rules.other.nextBulletRegex(f), te = this.rules.other.hrRegex(f), ne = this.rules.other.fencesBeginRegex(f), re = this.rules.other.headingBeginRegex(f), be2 = this.rules.other.htmlBeginRegex(f), Re2 = this.rules.other.blockquoteBeginRegex(f);
          for (; e3; ) {
            let G2 = e3.split(`
`, 1)[0], C;
            if (h2 = G2, this.options.pedantic ? (h2 = h2.replace(this.rules.other.listReplaceNesting, "  "), C = h2) : C = h2.replace(this.rules.other.tabCharGlobal, "    "), ne.test(h2) || re.test(h2) || be2.test(h2) || Re2.test(h2) || S.test(h2) || te.test(h2)) break;
            if (C.search(this.rules.other.nonSpaceChar) >= f || !h2.trim()) p += `
` + C.slice(f);
            else {
              if (R2 || k.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(k) || re.test(k) || te.test(k)) break;
              p += `
` + h2;
            }
            R2 = !h2.trim(), c2 += G2 + `
`, e3 = e3.substring(G2.length + 1), k = C.slice(f);
          }
        }
        r3.loose || (o3 ? r3.loose = true : this.rules.other.doubleBlankLine.test(c2) && (o3 = true)), r3.items.push({ type: "list_item", raw: c2, task: !!this.options.gfm && this.rules.other.listIsTask.test(p), loose: false, text: p, tokens: [] }), r3.raw += c2;
      }
      let u2 = r3.items.at(-1);
      if (u2) u2.raw = u2.raw.trimEnd(), u2.text = u2.text.trimEnd();
      else return;
      r3.raw = r3.raw.trimEnd();
      for (let a2 of r3.items) {
        this.lexer.state.top = false, a2.tokens = this.lexer.blockTokens(a2.text, []);
        let c2 = a2.tokens[0];
        if (a2.task && (c2?.type === "text" || c2?.type === "paragraph")) {
          a2.text = a2.text.replace(this.rules.other.listReplaceTask, ""), c2.raw = c2.raw.replace(this.rules.other.listReplaceTask, ""), c2.text = c2.text.replace(this.rules.other.listReplaceTask, "");
          for (let k = this.lexer.inlineQueue.length - 1; k >= 0; k--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[k].src)) {
            this.lexer.inlineQueue[k].src = this.lexer.inlineQueue[k].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let p = this.rules.other.listTaskCheckbox.exec(a2.raw);
          if (p) {
            let k = { type: "checkbox", raw: p[0] + " ", checked: p[0] !== "[ ]" };
            a2.checked = k.checked, r3.loose ? a2.tokens[0] && ["paragraph", "text"].includes(a2.tokens[0].type) && "tokens" in a2.tokens[0] && a2.tokens[0].tokens ? (a2.tokens[0].raw = k.raw + a2.tokens[0].raw, a2.tokens[0].text = k.raw + a2.tokens[0].text, a2.tokens[0].tokens.unshift(k)) : a2.tokens.unshift({ type: "paragraph", raw: k.raw, text: k.raw, tokens: [k] }) : a2.tokens.unshift(k);
          }
        } else a2.task && (a2.task = false);
        if (!r3.loose) {
          let p = a2.tokens.filter((h2) => h2.type === "space"), k = p.length > 0 && p.some((h2) => this.rules.other.anyLine.test(h2.raw));
          r3.loose = k;
        }
      }
      if (r3.loose) for (let a2 of r3.items) {
        a2.loose = true;
        for (let c2 of a2.tokens) c2.type === "text" && (c2.type = "paragraph");
      }
      return r3;
    }
  }
  html(e3) {
    let t3 = this.rules.block.html.exec(e3);
    if (t3) {
      let n3 = ee(t3[0]);
      return { type: "html", block: true, raw: n3, pre: t3[1] === "pre" || t3[1] === "script" || t3[1] === "style", text: n3 };
    }
  }
  def(e3) {
    let t3 = this.rules.block.def.exec(e3);
    if (t3) {
      let n3 = t3[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s2 = t3[2] ? t3[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r3 = t3[3] ? t3[3].substring(1, t3[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t3[3];
      return { type: "def", tag: n3, raw: $(t3[0], `
`), href: s2, title: r3 };
    }
  }
  table(e3) {
    let t3 = this.rules.block.table.exec(e3);
    if (!t3 || !this.rules.other.tableDelimiter.test(t3[2])) return;
    let n3 = Y(t3[1]), s2 = t3[2].replace(this.rules.other.tableAlignChars, "").split("|"), r3 = t3[3]?.trim() ? t3[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i2 = { type: "table", raw: $(t3[0], `
`), header: [], align: [], rows: [] };
    if (n3.length === s2.length) {
      for (let o3 of s2) this.rules.other.tableAlignRight.test(o3) ? i2.align.push("right") : this.rules.other.tableAlignCenter.test(o3) ? i2.align.push("center") : this.rules.other.tableAlignLeft.test(o3) ? i2.align.push("left") : i2.align.push(null);
      for (let o3 = 0; o3 < n3.length; o3++) i2.header.push({ text: n3[o3], tokens: this.lexer.inline(n3[o3]), header: true, align: i2.align[o3] });
      for (let o3 of r3) i2.rows.push(Y(o3, i2.header.length).map((u2, a2) => ({ text: u2, tokens: this.lexer.inline(u2), header: false, align: i2.align[a2] })));
      return i2;
    }
  }
  lheading(e3) {
    let t3 = this.rules.block.lheading.exec(e3);
    if (t3) {
      let n3 = t3[1].trim();
      return { type: "heading", raw: $(t3[0], `
`), depth: t3[2].charAt(0) === "=" ? 1 : 2, text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  paragraph(e3) {
    let t3 = this.rules.block.paragraph.exec(e3);
    if (t3) {
      let n3 = t3[1].charAt(t3[1].length - 1) === `
` ? t3[1].slice(0, -1) : t3[1];
      return { type: "paragraph", raw: t3[0], text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  text(e3) {
    let t3 = this.rules.block.text.exec(e3);
    if (t3) return { type: "text", raw: t3[0], text: t3[0], tokens: this.lexer.inline(t3[0]) };
  }
  escape(e3) {
    let t3 = this.rules.inline.escape.exec(e3);
    if (t3) return { type: "escape", raw: t3[0], text: t3[1] };
  }
  tag(e3) {
    let t3 = this.rules.inline.tag.exec(e3);
    if (t3) return !this.lexer.state.inLink && this.rules.other.startATag.test(t3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t3[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t3[0] };
  }
  link(e3) {
    let t3 = this.rules.inline.link.exec(e3);
    if (t3) {
      let n3 = t3[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n3)) {
        if (!this.rules.other.endAngleBracket.test(n3)) return;
        let i2 = $(n3.slice(0, -1), "\\");
        if ((n3.length - i2.length) % 2 === 0) return;
      } else {
        let i2 = fe(t3[2], "()");
        if (i2 === -2) return;
        if (i2 > -1) {
          let u2 = (t3[0].indexOf("!") === 0 ? 5 : 4) + t3[1].length + i2;
          t3[2] = t3[2].substring(0, i2), t3[0] = t3[0].substring(0, u2).trim(), t3[3] = "";
        }
      }
      let s2 = t3[2], r3 = "";
      if (this.options.pedantic) {
        let i2 = this.rules.other.pedanticHrefTitle.exec(s2);
        i2 && (s2 = i2[1], r3 = i2[3]);
      } else r3 = t3[3] ? t3[3].slice(1, -1) : "";
      return s2 = s2.trim(), this.rules.other.startAngleBracket.test(s2) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n3) ? s2 = s2.slice(1) : s2 = s2.slice(1, -1)), xe(t3, { href: s2 && s2.replace(this.rules.inline.anyPunctuation, "$1"), title: r3 && r3.replace(this.rules.inline.anyPunctuation, "$1") }, t3[0], this.lexer, this.rules);
    }
  }
  reflink(e3, t3) {
    let n3;
    if ((n3 = this.rules.inline.reflink.exec(e3)) || (n3 = this.rules.inline.nolink.exec(e3))) {
      let s2 = (n3[2] || n3[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r3 = t3[s2.toLowerCase()];
      if (!r3) {
        let i2 = n3[0].charAt(0);
        return { type: "text", raw: i2, text: i2 };
      }
      return xe(n3, r3, n3[0], this.lexer, this.rules);
    }
  }
  emStrong(e3, t3, n3 = "") {
    let s2 = this.rules.inline.emStrongLDelim.exec(e3);
    if (!s2 || !s2[1] && !s2[2] && !s2[3] && !s2[4] || s2[4] && n3.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s2[1] || s2[3] || "") || !n3 || this.rules.inline.punctuation.exec(n3)) {
      let i2 = [...s2[0]].length - 1, o3, u2, a2 = i2, c2 = 0, p = s2[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t3 = t3.slice(-1 * e3.length + i2); (s2 = p.exec(t3)) !== null; ) {
        if (o3 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !o3) continue;
        if (u2 = [...o3].length, s2[3] || s2[4]) {
          a2 += u2;
          continue;
        } else if ((s2[5] || s2[6]) && i2 % 3 && !((i2 + u2) % 3)) {
          c2 += u2;
          continue;
        }
        if (a2 -= u2, a2 > 0) continue;
        u2 = Math.min(u2, u2 + a2 + c2);
        let k = [...s2[0]][0].length, h2 = e3.slice(0, i2 + s2.index + k + u2);
        if (Math.min(i2, u2) % 2) {
          let f = h2.slice(1, -1);
          return { type: "em", raw: h2, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let R2 = h2.slice(2, -2);
        return { type: "strong", raw: h2, text: R2, tokens: this.lexer.inlineTokens(R2) };
      }
    }
  }
  codespan(e3) {
    let t3 = this.rules.inline.code.exec(e3);
    if (t3) {
      let n3 = t3[2].replace(this.rules.other.newLineCharGlobal, " "), s2 = this.rules.other.nonSpaceChar.test(n3), r3 = this.rules.other.startingSpaceChar.test(n3) && this.rules.other.endingSpaceChar.test(n3);
      return s2 && r3 && (n3 = n3.substring(1, n3.length - 1)), { type: "codespan", raw: t3[0], text: n3 };
    }
  }
  br(e3) {
    let t3 = this.rules.inline.br.exec(e3);
    if (t3) return { type: "br", raw: t3[0] };
  }
  del(e3, t3, n3 = "") {
    let s2 = this.rules.inline.delLDelim.exec(e3);
    if (!s2) return;
    if (!(s2[1] || "") || !n3 || this.rules.inline.punctuation.exec(n3)) {
      let i2 = [...s2[0]].length - 1, o3, u2, a2 = i2, c2 = this.rules.inline.delRDelim;
      for (c2.lastIndex = 0, t3 = t3.slice(-1 * e3.length + i2); (s2 = c2.exec(t3)) !== null; ) {
        if (o3 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !o3 || (u2 = [...o3].length, u2 !== i2)) continue;
        if (s2[3] || s2[4]) {
          a2 += u2;
          continue;
        }
        if (a2 -= u2, a2 > 0) continue;
        u2 = Math.min(u2, u2 + a2);
        let p = [...s2[0]][0].length, k = e3.slice(0, i2 + s2.index + p + u2), h2 = k.slice(i2, -i2);
        return { type: "del", raw: k, text: h2, tokens: this.lexer.inlineTokens(h2) };
      }
    }
  }
  autolink(e3) {
    let t3 = this.rules.inline.autolink.exec(e3);
    if (t3) {
      let n3, s2;
      return t3[2] === "@" ? (n3 = t3[1], s2 = "mailto:" + n3) : (n3 = t3[1], s2 = n3), { type: "link", raw: t3[0], text: n3, href: s2, tokens: [{ type: "text", raw: n3, text: n3 }] };
    }
  }
  url(e3) {
    let t3;
    if (t3 = this.rules.inline.url.exec(e3)) {
      let n3, s2;
      if (t3[2] === "@") n3 = t3[0], s2 = "mailto:" + n3;
      else {
        let r3;
        do
          r3 = t3[0], t3[0] = this.rules.inline._backpedal.exec(t3[0])?.[0] ?? "";
        while (r3 !== t3[0]);
        n3 = t3[0], t3[1] === "www." ? s2 = "http://" + t3[0] : s2 = t3[0];
      }
      return { type: "link", raw: t3[0], text: n3, href: s2, tokens: [{ type: "text", raw: n3, text: n3 }] };
    }
  }
  inlineText(e3) {
    let t3 = this.rules.inline.text.exec(e3);
    if (t3) {
      let n3 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t3[0], text: t3[0], escaped: n3 };
    }
  }
};
var x = class l {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e3) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || T, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t3 = { other: m, block: D.normal, inline: A.normal };
    this.options.pedantic ? (t3.block = D.pedantic, t3.inline = A.pedantic) : this.options.gfm && (t3.block = D.gfm, this.options.breaks ? t3.inline = A.breaks : t3.inline = A.gfm), this.tokenizer.rules = t3;
  }
  static get rules() {
    return { block: D, inline: A };
  }
  static lex(e3, t3) {
    return new l(t3).lex(e3);
  }
  static lexInline(e3, t3) {
    return new l(t3).inlineTokens(e3);
  }
  lex(e3) {
    e3 = e3.replace(m.carriageReturn, `
`), this.blockTokens(e3, this.tokens);
    for (let t3 = 0; t3 < this.inlineQueue.length; t3++) {
      let n3 = this.inlineQueue[t3];
      this.inlineTokens(n3.src, n3.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e3, t3 = [], n3 = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e3 = e3.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
    let s2 = 1 / 0;
    for (; e3; ) {
      if (e3.length < s2) s2 = e3.length;
      else {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
      let r3;
      if (this.options.extensions?.block?.some((o3) => (r3 = o3.call({ lexer: this }, e3, t3)) ? (e3 = e3.substring(r3.raw.length), t3.push(r3), true) : false)) continue;
      if (r3 = this.tokenizer.space(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        r3.raw.length === 1 && o3 !== void 0 ? o3.raw += `
` : t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.code(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        o3?.type === "paragraph" || o3?.type === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.at(-1).src = o3.text) : t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.fences(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.heading(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.hr(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.blockquote(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.list(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.html(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.def(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        o3?.type === "paragraph" || o3?.type === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.raw, this.inlineQueue.at(-1).src = o3.text) : this.tokens.links[r3.tag] || (this.tokens.links[r3.tag] = { href: r3.href, title: r3.title }, t3.push(r3));
        continue;
      }
      if (r3 = this.tokenizer.table(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.lheading(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      let i2 = e3;
      if (this.options.extensions?.startBlock) {
        let o3 = 1 / 0, u2 = e3.slice(1), a2;
        this.options.extensions.startBlock.forEach((c2) => {
          a2 = c2.call({ lexer: this }, u2), typeof a2 == "number" && a2 >= 0 && (o3 = Math.min(o3, a2));
        }), o3 < 1 / 0 && o3 >= 0 && (i2 = e3.substring(0, o3 + 1));
      }
      if (this.state.top && (r3 = this.tokenizer.paragraph(i2))) {
        let o3 = t3.at(-1);
        n3 && o3?.type === "paragraph" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o3.text) : t3.push(r3), n3 = i2.length !== e3.length, e3 = e3.substring(r3.raw.length);
        continue;
      }
      if (r3 = this.tokenizer.text(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        o3?.type === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o3.text) : t3.push(r3);
        continue;
      }
      if (e3) {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t3;
  }
  inline(e3, t3 = []) {
    return this.inlineQueue.push({ src: e3, tokens: t3 }), t3;
  }
  inlineTokens(e3, t3 = []) {
    this.tokenizer.lexer = this;
    let n3 = e3, s2 = null;
    if (this.tokens.links) {
      let a2 = Object.keys(this.tokens.links);
      if (a2.length > 0) for (; (s2 = this.tokenizer.rules.inline.reflinkSearch.exec(n3)) !== null; ) a2.includes(s2[0].slice(s2[0].lastIndexOf("[") + 1, -1)) && (n3 = n3.slice(0, s2.index) + "[" + "a".repeat(s2[0].length - 2) + "]" + n3.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s2 = this.tokenizer.rules.inline.anyPunctuation.exec(n3)) !== null; ) n3 = n3.slice(0, s2.index) + "++" + n3.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let r3;
    for (; (s2 = this.tokenizer.rules.inline.blockSkip.exec(n3)) !== null; ) r3 = s2[2] ? s2[2].length : 0, n3 = n3.slice(0, s2.index + r3) + "[" + "a".repeat(s2[0].length - r3 - 2) + "]" + n3.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n3 = this.options.hooks?.emStrongMask?.call({ lexer: this }, n3) ?? n3;
    let i2 = false, o3 = "", u2 = 1 / 0;
    for (; e3; ) {
      if (e3.length < u2) u2 = e3.length;
      else {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
      i2 || (o3 = ""), i2 = false;
      let a2;
      if (this.options.extensions?.inline?.some((p) => (a2 = p.call({ lexer: this }, e3, t3)) ? (e3 = e3.substring(a2.raw.length), t3.push(a2), true) : false)) continue;
      if (a2 = this.tokenizer.escape(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.tag(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.link(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.reflink(e3, this.tokens.links)) {
        e3 = e3.substring(a2.raw.length);
        let p = t3.at(-1);
        a2.type === "text" && p?.type === "text" ? (p.raw += a2.raw, p.text += a2.text) : t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.emStrong(e3, n3, o3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.codespan(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.br(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.del(e3, n3, o3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (a2 = this.tokenizer.autolink(e3)) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      if (!this.state.inLink && (a2 = this.tokenizer.url(e3))) {
        e3 = e3.substring(a2.raw.length), t3.push(a2);
        continue;
      }
      let c2 = e3;
      if (this.options.extensions?.startInline) {
        let p = 1 / 0, k = e3.slice(1), h2;
        this.options.extensions.startInline.forEach((R2) => {
          h2 = R2.call({ lexer: this }, k), typeof h2 == "number" && h2 >= 0 && (p = Math.min(p, h2));
        }), p < 1 / 0 && p >= 0 && (c2 = e3.substring(0, p + 1));
      }
      if (a2 = this.tokenizer.inlineText(c2)) {
        e3 = e3.substring(a2.raw.length), a2.raw.slice(-1) !== "_" && (o3 = a2.raw.slice(-1)), i2 = true;
        let p = t3.at(-1);
        p?.type === "text" ? (p.raw += a2.raw, p.text += a2.text) : t3.push(a2);
        continue;
      }
      if (e3) {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
    }
    return t3;
  }
  infiniteLoopError(e3) {
    let t3 = "Infinite loop on byte: " + e3;
    if (this.options.silent) console.error(t3);
    else throw new Error(t3);
  }
};
var y = class {
  options;
  parser;
  constructor(e3) {
    this.options = e3 || T;
  }
  space(e3) {
    return "";
  }
  code({ text: e3, lang: t3, escaped: n3 }) {
    let s2 = (t3 || "").match(m.notSpaceStart)?.[0], r3 = e3.replace(m.endingNewline, "") + `
`;
    return s2 ? '<pre><code class="language-' + O(s2) + '">' + (n3 ? r3 : O(r3, true)) + `</code></pre>
` : "<pre><code>" + (n3 ? r3 : O(r3, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e3 }) {
    return `<blockquote>
${this.parser.parse(e3)}</blockquote>
`;
  }
  html({ text: e3 }) {
    return e3;
  }
  def(e3) {
    return "";
  }
  heading({ tokens: e3, depth: t3 }) {
    return `<h${t3}>${this.parser.parseInline(e3)}</h${t3}>
`;
  }
  hr(e3) {
    return `<hr>
`;
  }
  list(e3) {
    let t3 = e3.ordered, n3 = e3.start, s2 = "";
    for (let o3 = 0; o3 < e3.items.length; o3++) {
      let u2 = e3.items[o3];
      s2 += this.listitem(u2);
    }
    let r3 = t3 ? "ol" : "ul", i2 = t3 && n3 !== 1 ? ' start="' + n3 + '"' : "";
    return "<" + r3 + i2 + `>
` + s2 + "</" + r3 + `>
`;
  }
  listitem(e3) {
    return `<li>${this.parser.parse(e3.tokens)}</li>
`;
  }
  checkbox({ checked: e3 }) {
    return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e3 }) {
    return `<p>${this.parser.parseInline(e3)}</p>
`;
  }
  table(e3) {
    let t3 = "", n3 = "";
    for (let r3 = 0; r3 < e3.header.length; r3++) n3 += this.tablecell(e3.header[r3]);
    t3 += this.tablerow({ text: n3 });
    let s2 = "";
    for (let r3 = 0; r3 < e3.rows.length; r3++) {
      let i2 = e3.rows[r3];
      n3 = "";
      for (let o3 = 0; o3 < i2.length; o3++) n3 += this.tablecell(i2[o3]);
      s2 += this.tablerow({ text: n3 });
    }
    return s2 && (s2 = `<tbody>${s2}</tbody>`), `<table>
<thead>
` + t3 + `</thead>
` + s2 + `</table>
`;
  }
  tablerow({ text: e3 }) {
    return `<tr>
${e3}</tr>
`;
  }
  tablecell(e3) {
    let t3 = this.parser.parseInline(e3.tokens), n3 = e3.header ? "th" : "td";
    return (e3.align ? `<${n3} align="${e3.align}">` : `<${n3}>`) + t3 + `</${n3}>
`;
  }
  strong({ tokens: e3 }) {
    return `<strong>${this.parser.parseInline(e3)}</strong>`;
  }
  em({ tokens: e3 }) {
    return `<em>${this.parser.parseInline(e3)}</em>`;
  }
  codespan({ text: e3 }) {
    return `<code>${O(e3, true)}</code>`;
  }
  br(e3) {
    return "<br>";
  }
  del({ tokens: e3 }) {
    return `<del>${this.parser.parseInline(e3)}</del>`;
  }
  link({ href: e3, title: t3, tokens: n3 }) {
    let s2 = this.parser.parseInline(n3), r3 = V(e3);
    if (r3 === null) return s2;
    e3 = r3;
    let i2 = '<a href="' + e3 + '"';
    return t3 && (i2 += ' title="' + O(t3) + '"'), i2 += ">" + s2 + "</a>", i2;
  }
  image({ href: e3, title: t3, text: n3, tokens: s2 }) {
    s2 && (n3 = this.parser.parseInline(s2, this.parser.textRenderer));
    let r3 = V(e3);
    if (r3 === null) return O(n3);
    e3 = r3;
    let i2 = `<img src="${e3}" alt="${O(n3)}"`;
    return t3 && (i2 += ` title="${O(t3)}"`), i2 += ">", i2;
  }
  text(e3) {
    return "tokens" in e3 && e3.tokens ? this.parser.parseInline(e3.tokens) : "escaped" in e3 && e3.escaped ? e3.text : O(e3.text);
  }
};
var L = class {
  strong({ text: e3 }) {
    return e3;
  }
  em({ text: e3 }) {
    return e3;
  }
  codespan({ text: e3 }) {
    return e3;
  }
  del({ text: e3 }) {
    return e3;
  }
  html({ text: e3 }) {
    return e3;
  }
  text({ text: e3 }) {
    return e3;
  }
  link({ text: e3 }) {
    return "" + e3;
  }
  image({ text: e3 }) {
    return "" + e3;
  }
  br() {
    return "";
  }
  checkbox({ raw: e3 }) {
    return e3;
  }
};
var b = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e3) {
    this.options = e3 || T, this.options.renderer = this.options.renderer || new y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
  }
  static parse(e3, t3) {
    return new l2(t3).parse(e3);
  }
  static parseInline(e3, t3) {
    return new l2(t3).parseInline(e3);
  }
  parse(e3) {
    this.renderer.parser = this;
    let t3 = "";
    for (let n3 = 0; n3 < e3.length; n3++) {
      let s2 = e3[n3];
      if (this.options.extensions?.renderers?.[s2.type]) {
        let i2 = s2, o3 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
        if (o3 !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(i2.type)) {
          t3 += o3 || "";
          continue;
        }
      }
      let r3 = s2;
      switch (r3.type) {
        case "space": {
          t3 += this.renderer.space(r3);
          break;
        }
        case "hr": {
          t3 += this.renderer.hr(r3);
          break;
        }
        case "heading": {
          t3 += this.renderer.heading(r3);
          break;
        }
        case "code": {
          t3 += this.renderer.code(r3);
          break;
        }
        case "table": {
          t3 += this.renderer.table(r3);
          break;
        }
        case "blockquote": {
          t3 += this.renderer.blockquote(r3);
          break;
        }
        case "list": {
          t3 += this.renderer.list(r3);
          break;
        }
        case "checkbox": {
          t3 += this.renderer.checkbox(r3);
          break;
        }
        case "html": {
          t3 += this.renderer.html(r3);
          break;
        }
        case "def": {
          t3 += this.renderer.def(r3);
          break;
        }
        case "paragraph": {
          t3 += this.renderer.paragraph(r3);
          break;
        }
        case "text": {
          t3 += this.renderer.text(r3);
          break;
        }
        default: {
          let i2 = 'Token with "' + r3.type + '" type was not found.';
          if (this.options.silent) return console.error(i2), "";
          throw new Error(i2);
        }
      }
    }
    return t3;
  }
  parseInline(e3, t3 = this.renderer) {
    this.renderer.parser = this;
    let n3 = "";
    for (let s2 = 0; s2 < e3.length; s2++) {
      let r3 = e3[s2];
      if (this.options.extensions?.renderers?.[r3.type]) {
        let o3 = this.options.extensions.renderers[r3.type].call({ parser: this }, r3);
        if (o3 !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r3.type)) {
          n3 += o3 || "";
          continue;
        }
      }
      let i2 = r3;
      switch (i2.type) {
        case "escape": {
          n3 += t3.text(i2);
          break;
        }
        case "html": {
          n3 += t3.html(i2);
          break;
        }
        case "link": {
          n3 += t3.link(i2);
          break;
        }
        case "image": {
          n3 += t3.image(i2);
          break;
        }
        case "checkbox": {
          n3 += t3.checkbox(i2);
          break;
        }
        case "strong": {
          n3 += t3.strong(i2);
          break;
        }
        case "em": {
          n3 += t3.em(i2);
          break;
        }
        case "codespan": {
          n3 += t3.codespan(i2);
          break;
        }
        case "br": {
          n3 += t3.br(i2);
          break;
        }
        case "del": {
          n3 += t3.del(i2);
          break;
        }
        case "text": {
          n3 += t3.text(i2);
          break;
        }
        default: {
          let o3 = 'Token with "' + i2.type + '" type was not found.';
          if (this.options.silent) return console.error(o3), "";
          throw new Error(o3);
        }
      }
    }
    return n3;
  }
};
var P = class {
  options;
  block;
  constructor(e3) {
    this.options = e3 || T;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e3) {
    return e3;
  }
  postprocess(e3) {
    return e3;
  }
  processAllTokens(e3) {
    return e3;
  }
  emStrongMask(e3) {
    return e3;
  }
  provideLexer(e3 = this.block) {
    return e3 ? x.lex : x.lexInline;
  }
  provideParser(e3 = this.block) {
    return e3 ? b.parse : b.parseInline;
  }
};
var q = class {
  defaults = M();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = y;
  TextRenderer = L;
  Lexer = x;
  Tokenizer = w;
  Hooks = P;
  constructor(...e3) {
    this.use(...e3);
  }
  walkTokens(e3, t3) {
    let n3 = [];
    for (let s2 of e3) switch (n3 = n3.concat(t3.call(this, s2)), s2.type) {
      case "table": {
        let r3 = s2;
        for (let i2 of r3.header) n3 = n3.concat(this.walkTokens(i2.tokens, t3));
        for (let i2 of r3.rows) for (let o3 of i2) n3 = n3.concat(this.walkTokens(o3.tokens, t3));
        break;
      }
      case "list": {
        let r3 = s2;
        n3 = n3.concat(this.walkTokens(r3.items, t3));
        break;
      }
      default: {
        let r3 = s2;
        this.defaults.extensions?.childTokens?.[r3.type] ? this.defaults.extensions.childTokens[r3.type].forEach((i2) => {
          let o3 = r3[i2].flat(1 / 0);
          n3 = n3.concat(this.walkTokens(o3, t3));
        }) : r3.tokens && (n3 = n3.concat(this.walkTokens(r3.tokens, t3)));
      }
    }
    return n3;
  }
  use(...e3) {
    let t3 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e3.forEach((n3) => {
      let s2 = { ...n3 };
      if (s2.async = this.defaults.async || s2.async || false, n3.extensions && (n3.extensions.forEach((r3) => {
        if (!r3.name) throw new Error("extension name required");
        if ("renderer" in r3) {
          let i2 = t3.renderers[r3.name];
          i2 ? t3.renderers[r3.name] = function(...o3) {
            let u2 = r3.renderer.apply(this, o3);
            return u2 === false && (u2 = i2.apply(this, o3)), u2;
          } : t3.renderers[r3.name] = r3.renderer;
        }
        if ("tokenizer" in r3) {
          if (!r3.level || r3.level !== "block" && r3.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i2 = t3[r3.level];
          i2 ? i2.unshift(r3.tokenizer) : t3[r3.level] = [r3.tokenizer], r3.start && (r3.level === "block" ? t3.startBlock ? t3.startBlock.push(r3.start) : t3.startBlock = [r3.start] : r3.level === "inline" && (t3.startInline ? t3.startInline.push(r3.start) : t3.startInline = [r3.start]));
        }
        "childTokens" in r3 && r3.childTokens && (t3.childTokens[r3.name] = r3.childTokens);
      }), s2.extensions = t3), n3.renderer) {
        let r3 = this.defaults.renderer || new y(this.defaults);
        for (let i2 in n3.renderer) {
          if (!(i2 in r3)) throw new Error(`renderer '${i2}' does not exist`);
          if (["options", "parser"].includes(i2)) continue;
          let o3 = i2, u2 = n3.renderer[o3], a2 = r3[o3];
          r3[o3] = (...c2) => {
            let p = u2.apply(r3, c2);
            return p === false && (p = a2.apply(r3, c2)), p || "";
          };
        }
        s2.renderer = r3;
      }
      if (n3.tokenizer) {
        let r3 = this.defaults.tokenizer || new w(this.defaults);
        for (let i2 in n3.tokenizer) {
          if (!(i2 in r3)) throw new Error(`tokenizer '${i2}' does not exist`);
          if (["options", "rules", "lexer"].includes(i2)) continue;
          let o3 = i2, u2 = n3.tokenizer[o3], a2 = r3[o3];
          r3[o3] = (...c2) => {
            let p = u2.apply(r3, c2);
            return p === false && (p = a2.apply(r3, c2)), p;
          };
        }
        s2.tokenizer = r3;
      }
      if (n3.hooks) {
        let r3 = this.defaults.hooks || new P();
        for (let i2 in n3.hooks) {
          if (!(i2 in r3)) throw new Error(`hook '${i2}' does not exist`);
          if (["options", "block"].includes(i2)) continue;
          let o3 = i2, u2 = n3.hooks[o3], a2 = r3[o3];
          P.passThroughHooks.has(i2) ? r3[o3] = (c2) => {
            if (this.defaults.async && P.passThroughHooksRespectAsync.has(i2)) return (async () => {
              let k = await u2.call(r3, c2);
              return a2.call(r3, k);
            })();
            let p = u2.call(r3, c2);
            return a2.call(r3, p);
          } : r3[o3] = (...c2) => {
            if (this.defaults.async) return (async () => {
              let k = await u2.apply(r3, c2);
              return k === false && (k = await a2.apply(r3, c2)), k;
            })();
            let p = u2.apply(r3, c2);
            return p === false && (p = a2.apply(r3, c2)), p;
          };
        }
        s2.hooks = r3;
      }
      if (n3.walkTokens) {
        let r3 = this.defaults.walkTokens, i2 = n3.walkTokens;
        s2.walkTokens = function(o3) {
          let u2 = [];
          return u2.push(i2.call(this, o3)), r3 && (u2 = u2.concat(r3.call(this, o3))), u2;
        };
      }
      this.defaults = { ...this.defaults, ...s2 };
    }), this;
  }
  setOptions(e3) {
    return this.defaults = { ...this.defaults, ...e3 }, this;
  }
  lexer(e3, t3) {
    return x.lex(e3, t3 ?? this.defaults);
  }
  parser(e3, t3) {
    return b.parse(e3, t3 ?? this.defaults);
  }
  parseMarkdown(e3) {
    return (n3, s2) => {
      let r3 = { ...s2 }, i2 = { ...this.defaults, ...r3 }, o3 = this.onError(!!i2.silent, !!i2.async);
      if (this.defaults.async === true && r3.async === false) return o3(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n3 > "u" || n3 === null) return o3(new Error("marked(): input parameter is undefined or null"));
      if (typeof n3 != "string") return o3(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n3) + ", string expected"));
      if (i2.hooks && (i2.hooks.options = i2, i2.hooks.block = e3), i2.async) return (async () => {
        let u2 = i2.hooks ? await i2.hooks.preprocess(n3) : n3, c2 = await (i2.hooks ? await i2.hooks.provideLexer(e3) : e3 ? x.lex : x.lexInline)(u2, i2), p = i2.hooks ? await i2.hooks.processAllTokens(c2) : c2;
        i2.walkTokens && await Promise.all(this.walkTokens(p, i2.walkTokens));
        let h2 = await (i2.hooks ? await i2.hooks.provideParser(e3) : e3 ? b.parse : b.parseInline)(p, i2);
        return i2.hooks ? await i2.hooks.postprocess(h2) : h2;
      })().catch(o3);
      try {
        i2.hooks && (n3 = i2.hooks.preprocess(n3));
        let a2 = (i2.hooks ? i2.hooks.provideLexer(e3) : e3 ? x.lex : x.lexInline)(n3, i2);
        i2.hooks && (a2 = i2.hooks.processAllTokens(a2)), i2.walkTokens && this.walkTokens(a2, i2.walkTokens);
        let p = (i2.hooks ? i2.hooks.provideParser(e3) : e3 ? b.parse : b.parseInline)(a2, i2);
        return i2.hooks && (p = i2.hooks.postprocess(p)), p;
      } catch (u2) {
        return o3(u2);
      }
    };
  }
  onError(e3, t3) {
    return (n3) => {
      if (n3.message += `
Please report this to https://github.com/markedjs/marked.`, e3) {
        let s2 = "<p>An error occurred:</p><pre>" + O(n3.message + "", true) + "</pre>";
        return t3 ? Promise.resolve(s2) : s2;
      }
      if (t3) return Promise.reject(n3);
      throw n3;
    };
  }
};
var z = new q();
function g(l3, e3) {
  return z.parse(l3, e3);
}
g.options = g.setOptions = function(l3) {
  return z.setOptions(l3), g.defaults = z.defaults, N(g.defaults), g;
};
g.getDefaults = M;
g.defaults = T;
g.use = function(...l3) {
  return z.use(...l3), g.defaults = z.defaults, N(g.defaults), g;
};
g.walkTokens = function(l3, e3) {
  return z.walkTokens(l3, e3);
};
g.parseInline = z.parseInline;
g.Parser = b;
g.parser = b.parse;
g.Renderer = y;
g.TextRenderer = L;
g.Lexer = x;
g.lexer = x.lex;
g.Tokenizer = w;
g.Hooks = P;
g.parse = g;
var Ft = g.options;
var Ut = g.setOptions;
var Kt = g.use;
var Wt = g.walkTokens;
var Xt = g.parseInline;
var Vt = b.parse;
var Yt = x.lex;

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  if (typeof options.emptyLangClass !== "string") {
    options.emptyLangClass = "";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        const classAttr = classValue ? ` class="${classValue}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return (code) => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}

// node_modules/autosize/dist/autosize.esm.js
var e2 = /* @__PURE__ */ new Map();
function t2(t3) {
  var o3 = e2.get(t3);
  o3 && o3.destroy();
}
function o2(t3) {
  var o3 = e2.get(t3);
  o3 && o3.update();
}
var r2 = null;
"undefined" == typeof window ? ((r2 = function(e3) {
  return e3;
}).destroy = function(e3) {
  return e3;
}, r2.update = function(e3) {
  return e3;
}) : ((r2 = function(t3, o3) {
  return t3 && Array.prototype.forEach.call(t3.length ? t3 : [t3], function(t4) {
    return (function(t5) {
      if (t5 && t5.nodeName && "TEXTAREA" === t5.nodeName && !e2.has(t5)) {
        var o4, r3 = null, n3 = window.getComputedStyle(t5), i2 = (o4 = t5.value, function() {
          a2({ testForHeightReduction: "" === o4 || !t5.value.startsWith(o4), restoreTextAlign: null }), o4 = t5.value;
        }), l3 = (function(o5) {
          t5.removeEventListener("autosize:destroy", l3), t5.removeEventListener("autosize:update", s2), t5.removeEventListener("input", i2), window.removeEventListener("resize", s2), Object.keys(o5).forEach(function(e3) {
            return t5.style[e3] = o5[e3];
          }), e2.delete(t5);
        }).bind(t5, { height: t5.style.height, resize: t5.style.resize, textAlign: t5.style.textAlign, overflowY: t5.style.overflowY, overflowX: t5.style.overflowX, wordWrap: t5.style.wordWrap });
        t5.addEventListener("autosize:destroy", l3), t5.addEventListener("autosize:update", s2), t5.addEventListener("input", i2), window.addEventListener("resize", s2), t5.style.overflowX = "hidden", t5.style.wordWrap = "break-word", e2.set(t5, { destroy: l3, update: s2 }), s2();
      }
      function a2(e3) {
        var o5, i3, l4 = e3.restoreTextAlign, s3 = void 0 === l4 ? null : l4, d3 = e3.testForHeightReduction, u2 = void 0 === d3 || d3, c2 = n3.overflowY;
        if (0 !== t5.scrollHeight && ("vertical" === n3.resize ? t5.style.resize = "none" : "both" === n3.resize && (t5.style.resize = "horizontal"), u2 && (o5 = (function(e4) {
          for (var t6 = []; e4 && e4.parentNode && e4.parentNode instanceof Element; ) e4.parentNode.scrollTop && t6.push([e4.parentNode, e4.parentNode.scrollTop]), e4 = e4.parentNode;
          return function() {
            return t6.forEach(function(e5) {
              var t7 = e5[0], o6 = e5[1];
              t7.style.scrollBehavior = "auto", t7.scrollTop = o6, t7.style.scrollBehavior = null;
            });
          };
        })(t5), t5.style.height = ""), i3 = "content-box" === n3.boxSizing ? t5.scrollHeight - (parseFloat(n3.paddingTop) + parseFloat(n3.paddingBottom)) : t5.scrollHeight + parseFloat(n3.borderTopWidth) + parseFloat(n3.borderBottomWidth), "none" !== n3.maxHeight && i3 > parseFloat(n3.maxHeight) ? ("hidden" === n3.overflowY && (t5.style.overflow = "scroll"), i3 = parseFloat(n3.maxHeight)) : "hidden" !== n3.overflowY && (t5.style.overflow = "hidden"), t5.style.height = i3 + "px", s3 && (t5.style.textAlign = s3), o5 && o5(), r3 !== i3 && (t5.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r3 = i3), c2 !== n3.overflow && !s3)) {
          var v2 = n3.textAlign;
          "hidden" === n3.overflow && (t5.style.textAlign = "start" === v2 ? "end" : "start"), a2({ restoreTextAlign: v2, testForHeightReduction: true });
        }
      }
      function s2() {
        a2({ testForHeightReduction: true, restoreTextAlign: null });
      }
    })(t4);
  }), t3;
}).destroy = function(e3) {
  return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], t2), e3;
}, r2.update = function(e3) {
  return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], o2), e3;
});
var n2 = r2;
var autosize_esm_default = n2;

// node_modules/@waline/client/dist/component.js
var fe2 = () => useStorage(`WALINE_USER_META`, { nick: ``, mail: ``, link: `` });
var pe2 = () => useStorage(`WALINE_COMMENT_BOX_EDITOR`, ``);
var me2 = useStorage(`WALINE_LIKE`, []);
var R = () => me2;
var z2 = useStorage(`WALINE_REACTION`, {});
var he2 = () => z2;
var ge2 = {};
var _e2 = (e3) => {
  let t3 = ge2[e3] ??= (0, import_recaptcha_v3.load)(e3, { useRecaptchaNet: true, autoHideBadge: true });
  return { execute: (e4) => t3.then((t4) => t4.execute(e4)) };
};
var ve2 = (e3) => ({ execute: async (t3) => {
  let { load: n3 } = useScriptTag(`https://challenges.cloudflare.com/turnstile/v0/api.js`, void 0, { async: false });
  await n3();
  let { turnstile: r3 } = window;
  return new Promise((n4) => {
    r3?.ready(() => {
      r3.render(`.wl-captcha-container`, { sitekey: e3, action: t3, size: `compact`, callback: n4 });
    });
  });
} });
var ye2 = useStorage(`WALINE_USER`, {});
var be = () => ye2;
var xe2 = /* @__PURE__ */ new Set([`nick`, `mail`, `link`]);
var B2 = (e3) => e3.filter((e4) => xe2.has(e4));
var V2 = [`//unpkg.com/@waline/emojis@1.1.0/weibo`];
var Se2 = [`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`, `//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`, `//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`, `//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`];
var H2 = (e3) => new Promise((t3, n3) => {
  if (e3.size > 128 * 1e3) {
    n3(Error(`File too large! File size limit 128KB`));
    return;
  }
  let r3 = new FileReader();
  r3.readAsDataURL(e3), r3.addEventListener(`load`, () => {
    t3(r3.result);
  }), r3.addEventListener(`error`, n3);
});
var U2 = (e3) => e3 ? `<p class="wl-tex">TeX is not available in preview</p>` : `<span class="wl-tex">TeX is not available in preview</span>`;
var W2 = (e3) => {
  let t3 = (t4, n3 = {}) => fetch(`https://api.giphy.com/v1/gifs/${t4}?${new URLSearchParams({ lang: e3, limit: `20`, rating: `g`, api_key: `6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`, ...n3 }).toString()}`).then((e4) => e4.json()).then(({ data: e4 }) => e4.map((e5) => ({ title: e5.title, src: e5.images.downsized_medium.url })));
  return { search: (e4) => t3(`search`, { q: e4, offset: `0` }), default: () => t3(`trending`, {}), more: (e4, n3 = 0) => t3(`search`, { q: e4, offset: n3.toString() }) };
};
var G = RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF\u0400-\u04FF]+|\w+/u.source}|${/</u.source})|((?:${/(?:^|\s)\/\/(.+?)$/gmu.source})|(?:${/\/\*([\S\s]*?)\*\//gmu.source}))`, `gmiu`);
var Ce2 = [`23AC69`, `91C132`, `F19726`, `E8552D`, `1AAB8E`, `E1147F`, `2980C1`, `1BA1E6`, `9FA0A0`, `F19726`, `E30B20`, `E30B20`, `A3338B`];
var K2 = {};
var we2 = (e3) => {
  let t3 = 0;
  return e3.replace(G, (e4, n3, r3) => {
    if (r3) return `<span style="color: slategray">${r3}</span>`;
    if (n3 === `<`) return `&lt;`;
    let i2;
    K2[n3] ? i2 = K2[n3] : (i2 = Ce2[t3], K2[n3] = i2);
    let a2 = `<span style="color: #${i2}">${n3}</span>`;
    return t3 = ++t3 % Ce2.length, a2;
  });
};
var q2 = `nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies`.split(`.`);
var J2 = (e3) => Object.fromEntries(e3.map((e4, t3) => [q2[t3], e4]));
var Y2 = J2(`Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare`.split(`,`));
var X2 = J2(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments`.split(`,`));
var Z2 = J2(`Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!
 El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios`.split(`,`));
var Te2 = J2(`Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires`.split(`,`));
var Ee2 = J2(`Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!
 Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda`.split(`,`));
var De2 = J2(`Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!
 Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti`.split(`,`));
var Oe2 = J2(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する`.split(`,`));
var ke2 = J2(`닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!
현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독`.split(`,`));
var Ae2 = J2(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários`.split(`(`));
var je2 = J2(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев`.split(`(`));
var Me2 = J2(`Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn`.split(`,`));
var Ne2 = J2(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复`.split(`,`));
var Q2 = { zh: Ne2, "zh-cn": Ne2, "zh-tw": J2(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆`.split(`,`)), en: X2, "en-us": X2, fr: Te2, "fr-fr": Te2, id: Ee2, "id-id": Ee2, it: De2, "it-it": De2, jp: Oe2, "jp-jp": Oe2, ko: ke2, "ko-kr": ke2, "pt-br": Ae2, ru: je2, "ru-ru": je2, vi: Me2, "vi-vn": Me2, de: Y2, es: Z2, "es-mx": Z2 };
var Pe2 = (e3) => Q2[e3.toLowerCase()] ?? Q2[`en-us`];
var Fe2 = (e3) => Object.keys(Q2).includes(e3.toLowerCase()) ? e3 : `en-US`;
var Ie2 = { latest: `insertedAt_desc`, oldest: `insertedAt_asc`, hottest: `like_desc` };
var Le2 = Object.keys(Ie2);
var Re = /* @__PURE__ */ Symbol(`waline-config`);
var ze2 = (e3) => {
  try {
    return decodeURI(e3);
  } catch {
    return e3;
  }
};
var Be2 = (e3 = ``) => e3.replace(/\/$/u, ``);
var Ve2 = (e3) => /^(https?:)?\/\//u.test(e3);
var He2 = (e3) => {
  let t3 = Be2(e3);
  return Ve2(t3) ? t3 : `https://${t3}`;
};
var Ue2 = (e3) => Array.isArray(e3) ? e3 : typeof e3 == `number` && e3 > 0 ? [0, e3] : false;
var $2 = (e3, t3) => e3 == null || e3 === true ? t3 : e3 === false ? null : e3;
var We2 = ({ serverURL: e3, path: t3 = location.pathname, lang: n3 = typeof navigator > `u` ? `en-US` : navigator.language, locale: r3, meta: i2 = [`nick`, `mail`, `link`], requiredMeta: a2 = [], dark: o3 = false, pageSize: s2 = 10, wordLimit: c2, noCopyright: l3 = false, noRss: u2 = false, login: d3 = `enable`, recaptchaV3Key: f = ``, turnstileKey: p = ``, commentSorting: m2 = `latest`, emoji: h2 = V2, imageUploader: g2, highlighter: _2, texRenderer: v2, search: y2, reaction: b2, ...x2 }) => ({ serverURL: He2(e3), path: ze2(t3), lang: Fe2(n3), locale: { ...Pe2(Fe2(n3)), ...typeof r3 == `object` ? r3 : {} }, wordLimit: Ue2(c2), meta: B2(i2), requiredMeta: B2(a2), dark: o3, pageSize: s2, commentSorting: m2, login: d3, noCopyright: l3, noRss: u2, recaptchaV3Key: f, turnstileKey: p, ...x2, reaction: b2 === true ? Se2 : b2 || null, imageUploader: $2(g2, H2), highlighter: $2(_2, we2), texRenderer: $2(v2, U2), emoji: $2(h2, V2), search: $2(y2, W2(n3)) });
var Ge2 = (e3) => typeof e3 == `string`;
var Ke2 = `{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}`;
var qe2 = (e3) => Ge2(e3) ? e3 === `auto` ? `@media(prefers-color-scheme:dark){body${Ke2}}` : `${e3}${Ke2}` : e3 === true ? `:root${Ke2}` : ``;
var Je2 = (e3, t3) => {
  let n3 = e3.toString();
  for (; n3.length < t3; ) n3 = `0${n3}`;
  return n3;
};
var Ye2 = (e3) => {
  let t3 = Je2(e3.getDate(), 2), n3 = Je2(e3.getMonth() + 1, 2);
  return `${Je2(e3.getFullYear(), 2)}-${n3}-${t3}`;
};
var Xe2 = (e3, t3, n3) => {
  if (!e3) return ``;
  let r3 = Ge2(e3) ? new Date(e3.includes(` `) ? e3.replaceAll(`-`, `/`) : e3) : e3, i2 = t3.getTime() - r3.getTime(), a2 = Math.floor(i2 / (24 * 3600 * 1e3));
  if (a2 === 0) {
    let e4 = i2 % (24 * 3600 * 1e3), t4 = Math.floor(e4 / (3600 * 1e3));
    if (t4 === 0) {
      let t5 = e4 % (3600 * 1e3), r4 = Math.floor(t5 / (60 * 1e3));
      if (r4 === 0) {
        let e5 = t5 % (60 * 1e3);
        return `${Math.round(e5 / 1e3)} ${n3.seconds}`;
      }
      return `${r4} ${n3.minutes}`;
    }
    return `${t4} ${n3.hours}`;
  }
  return a2 < 0 ? n3.now : a2 < 8 ? `${a2} ${n3.days}` : Ye2(r3);
};
var Ze2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u;
var Qe2 = (e3) => Ze2.test(e3);
var $e2 = useStorage(`WALINE_EMOJI`, {});
var et2 = (e3) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e3);
var tt2 = (e3) => {
  let t3 = et2(e3);
  if (t3) {
    let t4 = $e2.value[e3];
    if (t4) return Promise.resolve(t4);
  }
  return fetch(`${e3}/info.json`).then((e4) => e4.json()).then((n3) => {
    let r3 = { folder: e3, ...n3 };
    return t3 && ($e2.value[e3] = r3), r3;
  });
};
var nt2 = (e3, t3 = ``, n3 = ``, r3 = ``) => `${t3 ? `${t3}/` : ``}${n3}${e3}${r3 ? `.${r3}` : ``}`;
var rt2 = (e3) => Promise.all(e3 ? e3.map((e4) => Ge2(e4) ? tt2(Be2(e4)) : Promise.resolve(e4)) : []).then((e4) => {
  let t3 = { tabs: [], map: {} };
  return e4.forEach((e5) => {
    let { name: n3, folder: r3, icon: i2, prefix: a2 = ``, type: o3, items: s2 } = e5;
    t3.tabs.push({ name: n3, icon: nt2(i2, r3, a2, o3), items: s2.map((e6) => {
      let n4 = `${a2}${e6}`;
      return t3.map[n4] = nt2(e6, r3, a2, o3), n4;
    }) });
  }), t3;
});
var it = (e3) => {
  let t3 = [...e3].find((e4) => e4.type.includes(`image`));
  return t3 ? t3.getAsFile() : null;
};
var at = /\$.*?\$/u;
var ot = /^\$(.*?)\$/u;
var st2 = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/u;
var ct = (e3) => [{ name: `blockMath`, level: `block`, tokenizer(t3) {
  let n3 = st2.exec(t3);
  if (n3 != null) return { type: `html`, raw: n3[0], text: e3(true, n3[1]) };
} }, { name: `inlineMath`, level: `inline`, start(e4) {
  let t3 = e4.search(at);
  return t3 === -1 ? e4.length : t3;
}, tokenizer(t3) {
  let n3 = ot.exec(t3);
  if (n3 != null) return { type: `html`, raw: n3[0], text: e3(false, n3[1]) };
} }];
var lt = (e3 = ``, t3 = {}) => e3.replaceAll(/:(.+?):/gu, (e4, n3) => t3[n3] ? `<img class="wl-emoji" src="${t3[n3]}" alt="${n3}">` : e4);
var ut = (e3, { emojiMap: t3, highlighter: n3, texRenderer: r3 }) => {
  let i2 = new q();
  if (i2.setOptions({ breaks: true }), n3 && i2.use(markedHighlight({ highlight: n3 })), r3) {
    let e4 = ct(r3);
    i2.use({ extensions: e4 });
  }
  return i2.parse(lt(e3, t3));
};
var dt = (e3) => e3.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var ft = (e3) => e3.match(/[\u4E00-\u9FD5]/gu);
var pt = (e3) => (dt(e3)?.reduce((e4, t3) => e4 + ([``, `,`, `.`].includes(t3.trim()) ? 0 : t3.trim().split(/\s+/u).length), 0) ?? 0) + (ft(e3)?.length ?? 0);
var mt = async () => {
  let { userAgentData: e3 } = navigator, t3 = navigator.userAgent;
  if (e3?.platform !== `Windows`) return t3;
  let { platformVersion: n3 } = await e3.getHighEntropyValues([`platformVersion`]);
  return n3 && Number.parseInt(n3.split(`.`)[0], 10) >= 13 && (t3 = t3.replace(`Windows NT 10.0`, `Windows NT 11.0`)), t3;
};
var ht = `3.15.2`;
var gt = ({ size: e3 }) => h(`svg`, { class: `wl-close-icon`, viewBox: `0 0 1024 1024`, width: e3, height: e3 }, [h(`path`, { d: `M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`, fill: `currentColor` }), h(`path`, { d: `m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`, fill: `#888` })]);
var _t = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`, fill: `red` }));
var vt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`, fill: `currentColor` }));
var yt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`, fill: `currentColor` }), h(`path`, { d: `M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`, fill: `currentColor` })]);
var bt = ({ active: e3 = false }) => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e3 ? `` : `M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`}`, fill: e3 ? `red` : `currentColor` })]);
var xt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`, fill: `currentColor` }), h(`path`, { d: `M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`, fill: `currentColor` })]);
var St = () => h(`svg`, { width: `16`, height: `16`, ariaHidden: `true` }, h(`path`, { d: `M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`, fill: `currentColor` }));
var Ct = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`, fill: `currentColor` }));
var wt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`, fill: `currentColor` }));
var Tt = () => h(`svg`, { class: `verified-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, h(`path`, { d: `m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`, fill: `#27ae60` }));
var Et = () => h(`svg`, { class: `administrator-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, [h(`path`, { d: `M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z`, fill: `#f59831` })]);
var Dt = ({ size: e3 = 100 }) => h(`svg`, { width: e3, height: e3, viewBox: `0 0 100 100`, preserveAspectRatio: `xMidYMid` }, h(`circle`, { cx: 50, cy: 50, fill: `none`, stroke: `currentColor`, strokeWidth: `4`, r: `40`, "stroke-dasharray": `85 30` }, h(`animateTransform`, { attributeName: `transform`, type: `rotate`, repeatCount: `indefinite`, dur: `1s`, values: `0 50 50;360 50 50`, keyTimes: `0;1` })));
var Ot = () => h(`svg`, { width: 24, height: 24, fill: `currentcolor`, viewBox: `0 0 24 24` }, [h(`path`, { style: `transform: translateY(0.5px)`, d: `M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z` }), h(`path`, { d: `M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z` })]);
var kt = () => h(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24` }, h(`g`, { transform: `translate(0 -1028.4)` }, h(`g`, {}, [h(`path`, { d: `m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z`, fill: `#d35400` }), h(`path`, { d: `m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z`, transform: `translate(0 1028.4)`, fill: `#e67e22` }), h(`path`, { d: `m5 1034.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#d35400` }), h(`path`, { d: `m5 1033.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#ecf0f1` })])));
var At = () => h(`svg`, { fill: `currentColor`, width: `24`, height: `24`, viewBox: `-3 0 19 19`, class: `cf-icon-svg` }, h(`path`, { d: `M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z` }));
var jt = { key: 0, class: `wl-reaction` };
var Mt = [`textContent`];
var Nt = { class: `wl-reaction-list` };
var Pt = [`onClick`];
var Ft2 = { class: `wl-reaction-img` };
var It = [`src`, `alt`];
var Lt = [`textContent`];
var Rt = [`textContent`];
var zt = defineComponent({ __name: `ArticleReaction`, setup(o3) {
  let s2 = he2(), c2 = inject(Re), l3 = ref(-1), d3 = ref([]), f = computed(() => c2.value.locale), m2 = computed(() => {
    let { reaction: e3 } = c2.value;
    return e3?.length ? e3 : null;
  }), h2 = computed(() => {
    let { path: e3 } = c2.value;
    return m2.value?.map((t3, n3) => ({ icon: t3, desc: f.value[`reaction${n3}`], active: s2.value[e3] === n3 })) ?? null;
  }), y2, b2 = async () => {
    let { serverURL: e3, lang: t3, path: n3 } = c2.value;
    if (!m2.value) return;
    let r3 = new AbortController();
    y2 = r3.abort.bind(r3);
    let [i2] = await r({ serverURL: e3, lang: t3, paths: [n3], type: m2.value.map((e4, t4) => `reaction${t4}`), signal: r3.signal });
    d3.value = m2.value.map((e4, t4) => i2[`reaction${t4}`]);
  }, C = async (e3) => {
    if (l3.value !== -1) return;
    let { serverURL: t3, lang: n3, path: r3 } = c2.value, i2 = s2.value[r3];
    l3.value = e3, i2 != null && (await i({ serverURL: t3, lang: n3, path: r3, type: `reaction${i2}`, action: `desc` }), d3.value[i2] = Math.max(d3.value[i2] - 1, 0)), i2 !== e3 && (await i({ serverURL: t3, lang: n3, path: r3, type: `reaction${e3}` }), d3.value[e3] = (d3.value[e3] || 0) + 1), i2 === e3 ? delete s2.value[r3] : s2.value[r3] = e3, l3.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [c2.value.serverURL, c2.value.path], () => b2());
  }), onUnmounted(() => {
    y2?.();
  }), (t3, o4) => h2.value ? (openBlock(), createElementBlock(`div`, jt, [createBaseVNode(`div`, { class: `wl-reaction-title`, textContent: toDisplayString(f.value.reactionTitle) }, null, 8, Mt), createBaseVNode(`ul`, Nt, [(openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, ({ active: e3, icon: t4, desc: r3 }, o5) => (openBlock(), createElementBlock(`li`, { key: o5, class: normalizeClass([`wl-reaction-item`, { active: e3 }]), onClick: (e4) => C(o5) }, [createBaseVNode(`div`, Ft2, [createBaseVNode(`img`, { src: t4, alt: r3 }, null, 8, It), l3.value === o5 ? (openBlock(), createBlock(unref(Dt), { key: 0, class: `wl-reaction-loading` })) : (openBlock(), createElementBlock(`div`, { key: 1, class: `wl-reaction-votes`, textContent: toDisplayString(d3.value[o5] || 0) }, null, 8, Lt))]), createBaseVNode(`div`, { class: `wl-reaction-text`, textContent: toDisplayString(r3) }, null, 8, Rt)], 10, Pt))), 128))])])) : createCommentVNode(`v-if`, true);
} });
var Bt = [`data-index`];
var Vt2 = [`src`, `title`, `onClick`];
var Ht = defineComponent({ __name: `ImageWall`, props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: [`insert`], setup(t3) {
  let o3 = null, s2 = useTemplateRef(`wall`), c2 = ref({}), l3 = ref([]), u2 = () => {
    let e3 = Math.floor((s2.value.getBoundingClientRect().width + t3.gap) / (t3.columnWidth + t3.gap));
    return e3 > 0 ? e3 : 1;
  }, d3 = (e3) => Array.from({ length: e3 }, () => []), p = async (e3) => {
    if (e3 >= t3.items.length) return;
    await nextTick();
    let n3 = [...s2.value?.children ?? []].reduce((e4, t4) => t4.getBoundingClientRect().height < e4.getBoundingClientRect().height ? t4 : e4);
    l3.value[Number(n3.dataset.index)].push(e3), await p(e3 + 1);
  }, _2 = async (e3 = false) => {
    if (l3.value.length === u2() && !e3) return;
    l3.value = d3(u2());
    let { scrollY: t4 } = window;
    await p(0), window.scrollTo({ top: t4 });
  }, y2 = (e3) => {
    c2.value[e3.target.src] = true;
  };
  return onMounted(() => {
    _2(true), o3 = new ResizeObserver(() => {
      _2();
    }), o3.observe(s2.value), watch(() => [t3.items], () => {
      c2.value = {}, _2(true);
    }), watch(() => [t3.columnWidth, t3.gap], () => {
      _2();
    });
  }), onBeforeUnmount(() => {
    o3.unobserve(s2.value);
  }), (o4, u3) => (openBlock(), createElementBlock(`div`, { ref_key: `wall`, ref: s2, class: `wl-gallery`, style: normalizeStyle({ gap: `${t3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(l3.value, (s3, l4) => (openBlock(), createElementBlock(`div`, { key: l4, class: `wl-gallery-column`, "data-index": l4, style: normalizeStyle({ gap: `${t3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s3, (s4) => (openBlock(), createElementBlock(Fragment, { key: s4 }, [c2.value[t3.items[s4].src] ? createCommentVNode(`v-if`, true) : (openBlock(), createBlock(unref(Dt), { key: 0, size: 36, style: { margin: `20px auto` } })), createBaseVNode(`img`, { class: `wl-gallery-item`, src: t3.items[s4].src, title: t3.items[s4].title, loading: `lazy`, onLoad: y2, onClick: (e3) => o4.$emit(`insert`, `![](${t3.items[s4].src})`) }, null, 40, Vt2)], 64))), 128))], 12, Bt))), 128))], 4));
} });
var Ut2 = { key: 0, class: `wl-login-info` };
var Wt2 = { class: `wl-avatar` };
var Gt = [`title`];
var Kt2 = [`title`];
var qt = [`src`];
var Jt = [`title`, `textContent`];
var Yt2 = { class: `wl-panel` };
var Xt2 = [`for`, `textContent`];
var Zt = [`id`, `onUpdate:modelValue`, `name`, `type`];
var Qt = [`placeholder`];
var $t = { class: `wl-preview` };
var en = [`innerHTML`];
var tn = { class: `wl-footer` };
var nn = { class: `wl-actions` };
var rn = { href: `https://guides.github.com/features/mastering-markdown/`, title: `Markdown Guide`, "aria-label": `Markdown is supported`, class: `wl-action`, target: `_blank`, rel: `noopener noreferrer` };
var an = [`title`];
var on = [`title`];
var sn = [`title`, `aria-label`];
var cn = [`title`];
var ln = { class: `wl-info` };
var un = { class: `wl-text-number` };
var dn = { key: 0 };
var fn = [`textContent`];
var pn = [`textContent`];
var mn = [`disabled`];
var hn = [`placeholder`];
var gn = { key: 1, class: `wl-loading` };
var _n = [`title`, `onClick`, `onMouseenter`];
var vn = [`src`, `alt`];
var yn = [`src`];
var bn = { key: 0, class: `wl-tabs` };
var xn = [`onClick`];
var Sn = [`src`, `alt`, `title`];
var Cn = [`title`];
var wn = defineComponent({ __name: `CommentBox`, props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: [`log`, `cancelEdit`, `cancelReply`, `submit`], setup(c2, { emit: l3 }) {
  let h2 = c2, _2 = l3, y2 = inject(Re), C = pe2(), M2 = fe2(), N2 = be(), P2 = ref({}), ne = useTemplateRef(`textarea`), ie2 = useTemplateRef(`image-uploader`), ae2 = useTemplateRef(`emoji-button`), oe2 = useTemplateRef(`emoji-popup`), ce2 = useTemplateRef(`gif-button`), ue3 = useTemplateRef(`gif-popup`), I2 = useTemplateRef(`gif-search`), L2 = ref({ tabs: [], map: {} }), me3 = ref(0), R2 = ref(false), z3 = ref(``), he3 = ref({}), ge3, ye3 = (e3, t3) => {
    clearTimeout(ge3), z3.value = t3;
    let n3 = e3.currentTarget, r3 = oe2.value;
    if (n3 && r3) {
      let e4 = n3.getBoundingClientRect(), t4 = r3.getBoundingClientRect();
      he3.value = { left: `${e4.left - t4.left + e4.width / 2}px`, top: `${e4.top - t4.top}px`, transform: `translate(-50%, -100%)` };
    }
  }, xe3 = () => {
    ge3 = setTimeout(() => {
      z3.value = ``;
    }, 50);
  }, B3 = ref(false), V3 = ref(false), Se3 = ref(``), H3 = ref(0), U3 = reactive({ loading: true, list: [] }), W3 = ref(0), G2 = ref(false), Ce3 = ref(``), K3 = ref(false), we3 = ref(false), q3 = computed(() => y2.value.locale), J3 = computed(() => !!N2.value.token), Y3 = computed(() => y2.value.imageUploader != null), X3 = (e3) => {
    let t3 = ne.value, n3 = t3.selectionStart, r3 = t3.selectionEnd || 0, { scrollTop: i2 } = t3;
    C.value = t3.value.slice(0, n3) + e3 + t3.value.slice(r3), t3.focus(), t3.selectionStart = n3 + e3.length, t3.selectionEnd = n3 + e3.length, t3.scrollTop = i2;
  }, Z3 = async (e3) => {
    let t3 = `![${y2.value.locale.uploading} ${e3.name}]()`;
    X3(t3), K3.value = true;
    try {
      let n3 = await y2.value.imageUploader(e3);
      C.value = C.value.replace(t3, `\r
![${e3.name}](${n3})`);
    } catch (e4) {
      alert(e4.message), C.value = C.value.replace(t3, ``);
    } finally {
      K3.value = false;
    }
  }, Te3 = (e3) => {
    if (e3.dataTransfer?.items) {
      let t3 = it(e3.dataTransfer.items);
      t3 && Y3.value && (Z3(t3), e3.preventDefault());
    }
  }, Ee3 = (e3) => {
    if (e3.clipboardData) {
      let t3 = it(e3.clipboardData.items);
      t3 && Y3.value && Z3(t3);
    }
  }, De3 = () => {
    let e3 = ie2.value;
    e3.files && Y3.value && Z3(e3.files[0]).then(() => {
      e3.value = ``;
    });
  }, Oe3 = async () => {
    let { serverURL: e3, lang: t3, login: n3, wordLimit: r3, requiredMeta: i2, recaptchaV3Key: a2, turnstileKey: o3 } = y2.value, s2 = { comment: Ce3.value, nick: M2.value.nick, mail: M2.value.mail, link: M2.value.link, url: y2.value.path, ua: await mt() };
    if (!h2.edit) if (N2.value.token) s2.nick = N2.value.display_name, s2.mail = N2.value.email, s2.link = N2.value.url;
    else {
      if (n3 === `force`) return;
      if (i2.includes(`nick`) && !s2.nick) {
        P2.value.nick.focus(), alert(q3.value.nickError);
        return;
      }
      if (i2.includes(`mail`) && !s2.mail || s2.mail && !Qe2(s2.mail)) {
        P2.value.mail.focus(), alert(q3.value.mailError);
        return;
      }
      s2.nick ||= q3.value.anonymous;
    }
    if (!s2.comment) {
      ne.value.focus();
      return;
    }
    if (!G2.value) {
      alert(q3.value.wordHint.replace(`$0`, r3[0].toString()).replace(`$1`, r3[1].toString()).replace(`$2`, H3.value.toString()));
      return;
    }
    s2.comment = lt(s2.comment, L2.value.map), h2.replyId && h2.rootId && (s2.pid = h2.replyId, s2.rid = h2.rootId, s2.at = h2.replyUser), K3.value = true;
    try {
      a2 && (s2.recaptchaV3 = await _e2(a2).execute(`social`)), o3 && (s2.turnstile = await ve2(o3).execute(`social`));
      let n4 = { serverURL: e3, lang: t3, token: N2.value.token, comment: s2 }, r4 = await (h2.edit ? c({ objectId: h2.edit.objectId, ...n4 }) : o(n4));
      if (K3.value = false, r4.errmsg) {
        alert(r4.errmsg);
        return;
      }
      _2(`submit`, r4.data), C.value = ``, Se3.value = ``, await nextTick(), h2.replyId && _2(`cancelReply`), h2.edit?.objectId && _2(`cancelEdit`);
    } catch (e4) {
      K3.value = false, alert(e4.message);
    }
  }, ke3 = ({ key: e3, ctrlKey: t3, metaKey: n3 }) => {
    K3.value || (t3 || n3) && e3 === `Enter` && Oe3();
  }, Ae3 = (e3) => {
    e3.preventDefault();
    let { lang: t3, serverURL: n3 } = y2.value;
    d({ serverURL: n3, lang: t3 }).then((e4) => {
      N2.value = e4, (e4.remember ? localStorage : sessionStorage).setItem(`WALINE_USER`, JSON.stringify(e4)), _2(`log`);
    });
  }, je3 = () => {
    N2.value = {}, localStorage.setItem(`WALINE_USER`, `null`), sessionStorage.setItem(`WALINE_USER`, `null`), _2(`log`);
  }, Me3 = (e3) => {
    e3.preventDefault();
    let { lang: t3, serverURL: n3 } = y2.value, r3 = 1200, i2 = (window.innerWidth - r3) / 2, a2 = (window.innerHeight - 720) / 2, o3 = new URLSearchParams({ lng: t3, token: N2.value.token });
    window.open(`${n3}/ui/profile?${o3.toString()}`, `_blank`, `width=${r3},height=720,left=${i2},top=${a2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)?.postMessage({ type: `TOKEN`, data: N2.value.token }, `*`);
  }, Ne3 = (e3) => {
    !ae2.value?.contains(e3.target) && !oe2.value?.contains(e3.target) && (R2.value = false), !ce2.value?.contains(e3.target) && !ue3.value?.contains(e3.target) && (B3.value = false);
  }, Q3 = async (e3) => {
    let { scrollTop: t3, clientHeight: n3, scrollHeight: r3 } = e3.target, i2 = (n3 + t3) / r3, a2 = y2.value.search, o3 = I2.value?.value ?? ``;
    i2 < 0.9 || U3.loading || we3.value || (U3.loading = true, (a2.more && U3.list.length > 0 ? await a2.more(o3, U3.list.length) : await a2.search(o3)).length > 0 ? U3.list = [...U3.list, ...a2.more && U3.list.length > 0 ? await a2.more(o3, U3.list.length) : await a2.search(o3)] : we3.value = true, U3.loading = false, setTimeout(() => {
      e3.target.scrollTop = t3;
    }, 50));
  }, Pe3 = useDebounceFn((e3) => {
    U3.list = [], we3.value = false, Q3(e3);
  }, 300);
  return useEventListener(`click`, Ne3), useEventListener(`message`, ({ data: e3 }) => {
    e3?.type === `profile` && (N2.value = { ...N2.value, ...e3.data }, [localStorage, sessionStorage].filter((e4) => e4.getItem(`WALINE_USER`)).forEach((e4) => {
      e4.setItem(`WALINE_USER`, JSON.stringify(N2));
    }));
  }), watchImmediate([y2, H3], ([e3, t3]) => {
    let { wordLimit: n3 } = e3;
    n3 ? t3 < n3[0] && n3[0] !== 0 ? ([W3.value] = n3, G2.value = false) : ([, W3.value] = n3, G2.value = t3 <= n3[1]) : (W3.value = 0, G2.value = true);
  }), watch(B3, async (e3) => {
    if (!e3) return;
    let t3 = y2.value.search;
    I2.value && (I2.value.value = ``), U3.loading = true, U3.list = await (t3.default?.() ?? t3.search(``)), U3.loading = false;
  }), onMounted(() => {
    h2.edit?.objectId && (C.value = h2.edit.orig), watchImmediate(() => C.value, (e3) => {
      let { highlighter: t3, texRenderer: n3 } = y2.value;
      Ce3.value = e3, Se3.value = ut(e3, { emojiMap: L2.value.map, highlighter: t3, texRenderer: n3 }), H3.value = pt(e3), e3 ? autosize_esm_default(ne.value) : autosize_esm_default.destroy(ne.value);
    }), watchImmediate(() => y2.value.emoji, async (e3) => {
      L2.value = await rt2(e3);
    });
  }), (t3, l4) => (openBlock(), createElementBlock(`div`, { key: unref(N2).token, class: `wl-comment` }, [unref(y2).login !== `disable` && J3.value && !c2.edit?.objectId ? (openBlock(), createElementBlock(`div`, Ut2, [createBaseVNode(`div`, Wt2, [createBaseVNode(`button`, { type: `submit`, class: `wl-logout-btn`, title: q3.value.logout, onClick: je3 }, [createVNode(unref(gt), { size: 14 })], 8, Gt), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: q3.value.profile, onClick: Me3 }, [createBaseVNode(`img`, { src: unref(N2).avatar, alt: `avatar` }, null, 8, qt)], 8, Kt2)]), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: q3.value.profile, onClick: Me3, textContent: toDisplayString(unref(N2).display_name) }, null, 8, Jt)])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, Yt2, [unref(y2).login !== `force` && unref(y2).meta.length && !J3.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: normalizeClass([`wl-header`, `item${unref(y2).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(y2).meta, (e3) => (openBlock(), createElementBlock(`div`, { key: e3, class: `wl-header-item` }, [createBaseVNode(`label`, { for: `wl-${e3}`, textContent: toDisplayString(q3.value[e3] + (unref(y2).requiredMeta.includes(e3) || !unref(y2).requiredMeta.length ? `` : `(${q3.value.optional})`)) }, null, 8, Xt2), withDirectives(createBaseVNode(`input`, { id: `wl-${e3}`, ref_for: true, ref: (t4) => {
    t4 && (P2.value[e3] = t4);
  }, "onUpdate:modelValue": (t4) => unref(M2)[e3] = t4, class: normalizeClass([`wl-input`, `wl-${e3}`]), name: e3, type: e3 === `mail` ? `email` : `text` }, null, 10, Zt), [[vModelDynamic, unref(M2)[e3]]])]))), 128))], 2)) : createCommentVNode(`v-if`, true), withDirectives(createBaseVNode(`textarea`, { id: `wl-edit`, ref: `textarea`, "onUpdate:modelValue": l4[0] ||= (e3) => isRef(C) ? C.value = e3 : null, class: `wl-editor`, placeholder: c2.replyUser ? `@${c2.replyUser}` : q3.value.placeholder, onKeydown: ke3, onDrop: Te3, onPaste: Ee3 }, null, 40, Qt), [[vModelText, unref(C)]]), withDirectives(createBaseVNode(`div`, $t, [l4[7] ||= createBaseVNode(`hr`, null, null, -1), createBaseVNode(`h4`, null, toDisplayString(q3.value.preview) + `:`, 1), createBaseVNode(`div`, { class: `wl-content`, innerHTML: Se3.value }, null, 8, en)], 512), [[vShow, V3.value]]), createBaseVNode(`div`, tn, [createBaseVNode(`div`, nn, [createBaseVNode(`a`, rn, [createVNode(unref(St))]), withDirectives(createBaseVNode(`button`, { ref: `emoji-button`, type: `button`, class: normalizeClass([`wl-action`, { active: R2.value }]), title: q3.value.emoji, onClick: l4[1] ||= (e3) => R2.value = !R2.value }, [createVNode(unref(vt))], 10, an), [[vShow, L2.value.tabs.length]]), unref(y2).search ? (openBlock(), createElementBlock(`button`, { key: 0, ref: `gif-button`, type: `button`, class: normalizeClass([`wl-action`, { active: B3.value }]), title: q3.value.gif, onClick: l4[2] ||= (e3) => B3.value = !B3.value }, [createVNode(unref(Ot))], 10, on)) : createCommentVNode(`v-if`, true), createBaseVNode(`input`, { id: `wl-image-upload`, ref: `image-uploader`, class: `upload`, "aria-hidden": `true`, type: `file`, accept: `.png,.jpg,.jpeg,.webp,.bmp,.gif`, onChange: De3 }, null, 544), Y3.value ? (openBlock(), createElementBlock(`label`, { key: 1, for: `wl-image-upload`, class: `wl-action`, title: q3.value.uploadImage, "aria-label": q3.value.uploadImage }, [createVNode(unref(yt))], 8, sn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-action`, { active: V3.value }]), title: q3.value.preview, onClick: l4[3] ||= (e3) => V3.value = !V3.value }, [createVNode(unref(xt))], 10, cn)]), createBaseVNode(`div`, ln, [l4[9] ||= createBaseVNode(`div`, { class: `wl-captcha-container` }, null, -1), createBaseVNode(`div`, un, [createTextVNode(toDisplayString(H3.value) + ` `, 1), unref(y2).wordLimit ? (openBlock(), createElementBlock(`span`, dn, [l4[8] ||= createTextVNode(`  /  `, -1), createBaseVNode(`span`, { class: normalizeClass({ illegal: !G2.value }), textContent: toDisplayString(W3.value) }, null, 10, fn)])) : createCommentVNode(`v-if`, true), createTextVNode(`  ` + toDisplayString(q3.value.word), 1)]), unref(y2).login !== `disable` && !J3.value ? (openBlock(), createElementBlock(`button`, { key: 0, type: `button`, class: `wl-btn`, onClick: Ae3, textContent: toDisplayString(q3.value.login) }, null, 8, pn)) : createCommentVNode(`v-if`, true), unref(y2).login !== `force` || J3.value ? (openBlock(), createElementBlock(`button`, { key: 1, type: `submit`, class: `primary wl-btn`, title: `Cmd|Ctrl + Enter`, disabled: K3.value, onClick: Oe3 }, [K3.value ? (openBlock(), createBlock(unref(Dt), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(q3.value.submit), 1)], 64))], 8, mn)) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, { ref: `gif-popup`, class: normalizeClass([`wl-gif-popup`, { display: B3.value }]) }, [createBaseVNode(`input`, { ref: `gif-search`, type: `text`, placeholder: q3.value.gifSearchPlaceholder, onInput: l4[4] ||= (...e3) => unref(Pe3) && unref(Pe3)(...e3) }, null, 40, hn), U3.list.length ? (openBlock(), createBlock(Ht, { key: 0, items: U3.list, "column-width": 200, gap: 6, onInsert: l4[5] ||= (e3) => X3(e3), onScroll: Q3 }, null, 8, [`items`])) : createCommentVNode(`v-if`, true), U3.loading ? (openBlock(), createElementBlock(`div`, gn, [createVNode(unref(Dt), { size: 30 })])) : createCommentVNode(`v-if`, true)], 2), createBaseVNode(`div`, { ref: `emoji-popup`, class: normalizeClass([`wl-emoji-popup`, { display: R2.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(L2.value.tabs, (t4, n3) => (openBlock(), createElementBlock(Fragment, { key: t4.name }, [n3 === me3.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: `wl-tab-wrapper`, onScroll: xe3 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(t4.items, (e3) => (openBlock(), createElementBlock(`button`, { key: e3, type: `button`, title: e3, onClick: (t5) => X3(`:${e3}:`), onMouseenter: (t5) => ye3(t5, e3), onMouseleave: xe3 }, [R2.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji`, src: L2.value.map[e3], alt: e3, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, vn)) : createCommentVNode(`v-if`, true)], 40, _n))), 128))], 32)) : createCommentVNode(`v-if`, true)], 64))), 128)), createBaseVNode(`div`, null, [z3.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji-preview`, src: L2.value.map[z3.value], alt: `preview`, loading: `lazy`, referrerPolicy: `no-referrer`, style: normalizeStyle(he3.value) }, null, 12, yn)) : createCommentVNode(`v-if`, true)]), L2.value.tabs.length > 1 ? (openBlock(), createElementBlock(`div`, bn, [(openBlock(true), createElementBlock(Fragment, null, renderList(L2.value.tabs, (e3, t4) => (openBlock(), createElementBlock(`button`, { key: e3.name, type: `button`, class: normalizeClass([`wl-tab`, { active: me3.value === t4 }]), onClick: (e4) => me3.value = t4 }, [createBaseVNode(`img`, { class: `wl-emoji`, src: e3.icon, alt: e3.name, title: e3.name, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, Sn)], 10, xn))), 128))])) : createCommentVNode(`v-if`, true)], 2)])]), c2.replyId || c2.edit?.objectId ? (openBlock(), createElementBlock(`button`, { key: 1, type: `button`, class: `wl-close`, title: q3.value.cancelReply, onClick: l4[6] ||= (e3) => c2.replyId ? _2(`cancelReply`) : _2(`cancelEdit`) }, [createVNode(unref(gt), { size: 24 })], 8, Cn)) : createCommentVNode(`v-if`, true)]));
} });
var Tn = [`id`];
var En = { class: `wl-user`, "aria-hidden": `true` };
var Dn = [`src`];
var On = { class: `wl-card` };
var kn = { class: `wl-head` };
var An = [`href`];
var jn = { key: 1, class: `wl-nick` };
var Mn = [`textContent`];
var Nn = [`textContent`];
var Pn = [`textContent`];
var Fn = [`textContent`];
var In = { class: `wl-comment-actions` };
var Ln = [`title`, `href`];
var Rn = [`title`];
var zn = [`title`];
var Bn = { class: `wl-meta`, "aria-hidden": `true` };
var Vn = [`data-value`, `textContent`];
var Hn = { key: 0, class: `wl-warning`, "aria-hidden": `true` };
var Un = { key: 1, class: `wl-content` };
var Wn = { key: 0, class: `wl-reply-to` };
var Gn = [`href`];
var Kn = [`innerHTML`];
var qn = { key: 2, class: `wl-admin-actions` };
var Jn = { class: `wl-comment-status` };
var Yn = [`disabled`, `onClick`, `textContent`];
var Xn = { key: 4, class: `wl-quote` };
var Zn = defineComponent({ __name: `CommentCard`, props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: [`log`, `submit`, `delete`, `like`, `sticky`, `edit`, `reply`, `status`], setup(c2, { emit: l3 }) {
  let d3 = l3, f = [`approved`, `waiting`, `spam`], m2 = inject(Re), h2 = R(), g2 = useNow(), _2 = be(), y2 = computed(() => m2.value.locale), b2 = computed(() => {
    let { link: e3 } = c2.comment;
    return e3 ? Ve2(e3) ? e3 : `https://${e3}` : ``;
  }), x2 = computed(() => h2.value.includes(c2.comment.objectId)), E2 = computed(() => Xe2(new Date(c2.comment.time), g2.value, y2.value)), D2 = computed(() => _2.value.type === `administrator`), O2 = computed(() => c2.comment.user_id && _2.value.objectId === c2.comment.user_id), k = computed(() => c2.comment.objectId === c2.reply?.objectId), A2 = computed(() => c2.comment.objectId === c2.edit?.objectId);
  return (t3, l4) => {
    let u2 = resolveComponent(`CommentCard`, true);
    return openBlock(), createElementBlock(`div`, { id: c2.comment.objectId.toString(), class: `wl-card-item` }, [createBaseVNode(`div`, En, [c2.comment.avatar ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-user-avatar`, src: c2.comment.avatar, alt: `` }, null, 8, Dn)) : createCommentVNode(`v-if`, true), c2.comment.type === `guest` ? (openBlock(), createBlock(unref(Tt), { key: 1 })) : createCommentVNode(`v-if`, true), c2.comment.type === `administrator` ? (openBlock(), createBlock(unref(Et), { key: 2 })) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, On, [createBaseVNode(`div`, kn, [b2.value ? (openBlock(), createElementBlock(`a`, { key: 0, class: `wl-nick`, href: b2.value, target: `_blank`, rel: `ugc nofollow noreferrer noopener` }, toDisplayString(c2.comment.nick), 9, An)) : (openBlock(), createElementBlock(`span`, jn, toDisplayString(c2.comment.nick), 1)), c2.comment.label ? (openBlock(), createElementBlock(`span`, { key: 2, class: `wl-badge`, textContent: toDisplayString(c2.comment.label) }, null, 8, Mn)) : createCommentVNode(`v-if`, true), c2.comment.sticky ? (openBlock(), createElementBlock(`span`, { key: 3, class: `wl-badge`, textContent: toDisplayString(y2.value.sticky) }, null, 8, Nn)) : createCommentVNode(`v-if`, true), typeof c2.comment.level == `number` ? (openBlock(), createElementBlock(`span`, { key: 4, class: normalizeClass(`wl-badge level${c2.comment.level}`), textContent: toDisplayString(y2.value[`level${c2.comment.level}`] || `Level ${c2.comment.level}`) }, null, 10, Pn)) : createCommentVNode(`v-if`, true), createBaseVNode(`span`, { class: `wl-time`, textContent: toDisplayString(E2.value) }, null, 8, Fn), createBaseVNode(`div`, In, [D2.value || O2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode(`button`, { type: `button`, class: `wl-edit`, onClick: l4[0] ||= (e3) => d3(`edit`, c2.comment) }, [createVNode(unref(wt))]), createBaseVNode(`button`, { type: `button`, class: `wl-delete`, onClick: l4[1] ||= (e3) => d3(`delete`, c2.comment) }, [createVNode(unref(_t))])], 64)) : createCommentVNode(`v-if`, true), O2.value && !unref(m2).noRss ? (openBlock(), createElementBlock(`a`, { key: 1, role: `button`, class: `wl-rss`, title: y2.value.subscribeToReplies, href: `${unref(m2).serverURL}/api/comment/rss?user_id=${c2.comment.user_id}`, target: `_blank`, rel: `noopener noreferrer` }, [createVNode(unref(At))], 8, Ln)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: `wl-like`, title: x2.value ? y2.value.cancelLike : y2.value.like, onClick: l4[2] ||= (e3) => d3(`like`, c2.comment) }, [createVNode(unref(bt), { active: x2.value }, null, 8, [`active`]), createTextVNode(` ` + toDisplayString(`like` in c2.comment ? c2.comment.like : ``), 1)], 8, Rn), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-reply`, { active: k.value }]), title: k.value ? y2.value.cancelReply : y2.value.reply, onClick: l4[3] ||= (e3) => d3(`reply`, k.value ? null : c2.comment) }, [createVNode(unref(Ct))], 10, zn)])]), createBaseVNode(`div`, Bn, [(openBlock(), createElementBlock(Fragment, null, renderList([`addr`, `browser`, `os`], (t4) => (openBlock(), createElementBlock(Fragment, null, [c2.comment[t4] ? (openBlock(), createElementBlock(`span`, { key: t4, class: normalizeClass(`wl-${t4}`), "data-value": c2.comment[t4], textContent: toDisplayString(c2.comment[t4]) }, null, 10, Vn)) : createCommentVNode(`v-if`, true)], 64))), 64))]), c2.comment.status === `waiting` && !D2.value ? (openBlock(), createElementBlock(`div`, Hn, toDisplayString(y2.value.commentUnderReview), 1)) : createCommentVNode(`v-if`, true), A2.value ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Un, [`reply_user` in c2.comment && c2.comment.reply_user ? (openBlock(), createElementBlock(`p`, Wn, [createBaseVNode(`a`, { href: `#` + c2.comment.pid }, `@` + toDisplayString(c2.comment.reply_user.nick), 9, Gn), l4[17] ||= createBaseVNode(`span`, null, `: `, -1)])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, { innerHTML: c2.comment.comment }, null, 8, Kn)])), D2.value && !A2.value ? (openBlock(), createElementBlock(`div`, qn, [createBaseVNode(`span`, Jn, [(openBlock(), createElementBlock(Fragment, null, renderList(f, (e3) => createBaseVNode(`button`, { key: e3, type: `submit`, class: normalizeClass(`wl-btn wl-${e3}`), disabled: c2.comment.status === e3, onClick: (t4) => d3(`status`, { status: e3, comment: c2.comment }), textContent: toDisplayString(y2.value[e3]) }, null, 10, Yn)), 64))]), D2.value && !(`rid` in c2.comment) ? (openBlock(), createElementBlock(`button`, { key: 0, type: `submit`, class: `wl-btn wl-sticky`, onClick: l4[4] ||= (e3) => d3(`sticky`, c2.comment) }, toDisplayString(c2.comment.sticky ? y2.value.unsticky : y2.value.sticky), 1)) : createCommentVNode(`v-if`, true)])) : createCommentVNode(`v-if`, true), k.value || A2.value ? (openBlock(), createElementBlock(`div`, { key: 3, class: normalizeClass({ "wl-reply-wrapper": k.value, "wl-edit-wrapper": A2.value }) }, [createVNode(wn, { edit: c2.edit, "reply-id": c2.reply?.objectId, "reply-user": c2.comment.nick, "root-id": c2.rootId, onLog: l4[5] ||= (e3) => d3(`log`), onCancelReply: l4[6] ||= (e3) => d3(`reply`, null), onCancelEdit: l4[7] ||= (e3) => d3(`edit`, null), onSubmit: l4[8] ||= (e3) => d3(`submit`, e3) }, null, 8, [`edit`, `reply-id`, `reply-user`, `root-id`])], 2)) : createCommentVNode(`v-if`, true), `children` in c2.comment ? (openBlock(), createElementBlock(`div`, Xn, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.comment.children, (e3) => (openBlock(), createBlock(u2, { key: e3.objectId, comment: e3, reply: c2.reply, edit: c2.edit, "root-id": c2.rootId, onLog: l4[9] ||= (e4) => d3(`log`), onDelete: l4[10] ||= (e4) => d3(`delete`, e4), onEdit: l4[11] ||= (e4) => d3(`edit`, e4), onLike: l4[12] ||= (e4) => d3(`like`, e4), onReply: l4[13] ||= (e4) => d3(`reply`, e4), onStatus: l4[14] ||= (e4) => d3(`status`, e4), onSticky: l4[15] ||= (e4) => d3(`sticky`, e4), onSubmit: l4[16] ||= (e4) => d3(`submit`, e4) }, null, 8, [`comment`, `reply`, `edit`, `root-id`]))), 128))])) : createCommentVNode(`v-if`, true)])], 8, Tn);
  };
} });
var Qn = { "data-waline": `` };
var $n = { class: `wl-meta-head` };
var er = { class: `wl-count` };
var tr = [`textContent`];
var nr = { class: `wl-sort` };
var rr = [`onClick`];
var ir = { class: `wl-cards` };
var ar = { key: 1, class: `wl-operation` };
var or = [`textContent`];
var sr = { key: 2, class: `wl-loading` };
var cr = [`textContent`];
var lr = { key: 4, class: `wl-operation` };
var ur = [`textContent`];
var dr = { key: 5, class: `wl-meta-foot` };
var fr = { key: 0, class: `wl-rss` };
var pr = [`href`, `alt`];
var mr = [`textContent`];
var hr = [`href`, `alt`];
var gr = [`textContent`];
var _r = { key: 1, class: `wl-power` };
var vr = defineComponent({ __name: `WalineComment`, props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, noRss: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: { type: [Object, Boolean] }, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(c2) {
  let l3 = c2, u2 = be(), d3 = R(), f = ref(`loading`), m2 = ref(0), h2 = ref(1), b2 = ref(0), C = computed(() => We2(l3)), E2 = ref(C.value.commentSorting), D2 = ref([]), O2 = ref(null), k = ref(null), A2 = computed(() => qe2(C.value.dark)), j2 = computed(() => C.value.locale);
  useStyleTag(A2, { id: `waline-darkmode` });
  let ee2 = null, te = (e3) => {
    let { serverURL: t3, path: n3, pageSize: r3 } = C.value, i2 = new AbortController();
    f.value = `loading`, ee2?.(), a({ serverURL: t3, lang: C.value.lang, path: n3, pageSize: r3, sortBy: Ie2[E2.value], page: e3, signal: i2.signal, token: u2.value.token }).then((t4) => {
      f.value = `success`, m2.value = t4.count, D2.value.push(...t4.data), h2.value = e3, b2.value = t4.totalPages;
    }).catch((e4) => {
      e4.name !== `AbortError` && (console.error(e4.message), f.value = `error`);
    }), ee2 = i2.abort.bind(i2);
  }, M2 = () => {
    te(h2.value + 1);
  }, N2 = () => {
    m2.value = 0, D2.value = [], te(1);
  }, P2 = (e3) => {
    E2.value !== e3 && (E2.value = e3, N2());
  }, re = (e3) => {
    O2.value = e3;
  }, ae2 = (e3) => {
    k.value = e3;
  }, se2 = (e3) => {
    if (k.value) k.value.comment = e3.comment, k.value.orig = e3.orig;
    else if (`rid` in e3) {
      let t3 = D2.value.find(({ objectId: t4 }) => t4 === e3.rid);
      if (!t3) return;
      Array.isArray(t3.children) || (t3.children = []), t3.children.push(e3);
    } else D2.value.unshift(e3), m2.value += 1;
  }, ce2 = async ({ comment: e3, status: t3 }) => {
    if (e3.status === t3) return;
    let { serverURL: n3, lang: r3 } = C.value;
    await c({ serverURL: n3, lang: r3, token: u2.value.token, objectId: e3.objectId, comment: { status: t3 } }), e3.status = t3;
  }, ue3 = async (e3) => {
    if (`rid` in e3) return;
    let { serverURL: t3, lang: n3 } = C.value;
    await c({ serverURL: t3, lang: n3, token: u2.value.token, objectId: e3.objectId, comment: { sticky: +!e3.sticky } }), e3.sticky = !e3.sticky;
  }, I2 = async ({ objectId: e3 }) => {
    if (!confirm(`Are you sure you want to delete this comment?`)) return;
    let { serverURL: t3, lang: n3 } = C.value;
    await s({ serverURL: t3, lang: n3, token: u2.value.token, objectId: e3 }), D2.value.some((t4, n4) => t4.objectId === e3 ? (D2.value = D2.value.filter((e4, t5) => t5 !== n4), true) : t4.children.some((r3, i2) => r3.objectId === e3 ? (D2.value[n4].children = t4.children.filter((e4, t5) => t5 !== i2), true) : false));
  }, L2 = async (e3) => {
    let { serverURL: t3, lang: n3 } = C.value, { objectId: r3 } = e3, i2 = d3.value.includes(r3);
    await c({ serverURL: t3, lang: n3, objectId: r3, token: u2.value.token, comment: { like: !i2 } }), i2 ? d3.value = d3.value.filter((e4) => e4 !== r3) : (d3.value = [...d3.value, r3], d3.value.length > 50 && (d3.value = d3.value.slice(-50))), e3.like = Math.max(0, (e3.like || 0) + (i2 ? -1 : 1));
  };
  return provide(Re, C), onMounted(async () => {
    watchImmediate(() => [l3.serverURL, l3.path], () => {
      N2();
    });
    let e3 = new URLSearchParams(location.search).get(`token`);
    if (!e3) return;
    let t3 = await fetch(`${C?.value.serverURL}/token`, { headers: { Authorization: `Bearer ${e3}` } }).then((e4) => e4.json()).catch((e4) => (console.error(e4), {}));
    !t3.errno && t3?.data?.objectId && (u2.value = { ...t3.data, token: e3 });
    let n3 = new URL(window.location.href);
    n3.searchParams.delete(`token`), history.replaceState(null, ``, n3.pathname + (n3.searchParams.toString() ? `?${n3.searchParams.toString()}` : ``) + n3.hash);
  }), onUnmounted(() => {
    ee2?.();
  }), (t3, c3) => (openBlock(), createElementBlock(`div`, Qn, [createVNode(zt), !O2.value && !k.value ? (openBlock(), createBlock(wn, { key: 0, onLog: N2, onSubmit: se2 })) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, $n, [createBaseVNode(`div`, er, [m2.value ? (openBlock(), createElementBlock(`span`, { key: 0, class: `wl-num`, textContent: toDisplayString(m2.value) }, null, 8, tr)) : createCommentVNode(`v-if`, true), createTextVNode(` ` + toDisplayString(j2.value.comment), 1)]), createBaseVNode(`ul`, nr, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Le2), (e3) => (openBlock(), createElementBlock(`li`, { key: e3, class: normalizeClass([e3 === E2.value ? `active` : ``]), onClick: (t4) => P2(e3) }, toDisplayString(j2.value[e3]), 11, rr))), 128))])]), createBaseVNode(`div`, ir, [(openBlock(true), createElementBlock(Fragment, null, renderList(D2.value, (e3) => (openBlock(), createBlock(Zn, { key: e3.objectId, "root-id": e3.objectId, comment: e3, reply: O2.value, edit: k.value, onLog: N2, onReply: re, onEdit: ae2, onSubmit: se2, onStatus: ce2, onDelete: I2, onSticky: ue3, onLike: L2 }, null, 8, [`root-id`, `comment`, `reply`, `edit`]))), 128))]), f.value === `error` ? (openBlock(), createElementBlock(`div`, ar, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: N2, textContent: toDisplayString(j2.value.refresh) }, null, 8, or)])) : f.value === `loading` ? (openBlock(), createElementBlock(`div`, sr, [createVNode(unref(Dt), { size: 30 })])) : D2.value.length ? h2.value < b2.value ? (openBlock(), createElementBlock(`div`, lr, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: M2, textContent: toDisplayString(j2.value.more) }, null, 8, ur)])) : createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, { key: 3, class: `wl-empty`, textContent: toDisplayString(j2.value.sofa) }, null, 8, cr)), D2.value.length || f.value !== `loading` ? (openBlock(), createElementBlock(`div`, dr, [C.value.noRss ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, fr, [createBaseVNode(`a`, { href: `${C.value.serverURL}/api/comment/rss?path=${encodeURIComponent(C.value.path)}`, target: `_blank`, rel: `noopener noreferrer`, alt: j2.value.subPostComment }, [createVNode(unref(kt)), createBaseVNode(`span`, { textContent: toDisplayString(j2.value.subPostComment) }, null, 8, mr)], 8, pr), createBaseVNode(`a`, { href: `${C.value.serverURL}/api/comment/rss`, target: `_blank`, rel: `noopener noreferrer`, alt: j2.value.subSiteComment }, [createVNode(unref(kt)), createBaseVNode(`span`, { textContent: toDisplayString(j2.value.subSiteComment) }, null, 8, gr)], 8, hr)])), C.value.noCopyright ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, _r, [c3[0] ||= createTextVNode(` Powered by `, -1), c3[1] ||= createBaseVNode(`a`, { href: `https://github.com/walinejs/waline`, target: `_blank`, rel: `noopener noreferrer` }, ` Waline `, -1), createTextVNode(` v` + toDisplayString(unref(ht)), 1)]))])) : createCommentVNode(`v-if`, true)]));
} });
export {
  vr as Waline,
  ht as version
};
//# sourceMappingURL=@waline_client_component.js.map

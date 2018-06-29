var pageComponent=webpackJsonppageComponent([21],{272:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=r(a),s=n(2),d=r(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var c=n(273),p=r(c),f=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);d.default.register(f,p.default),t.default=f},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.llFOd=void 0;var a,u=n(1),s=r(u),d=n(2),c=r(d);goog.loadModule(function(e){function t(e,t,r){var a=function(){s({code:"import { Either } from 'flowr';",mode:"javascript"},null,r),l("p"),u("An "),l("code"),u("Either"),o("code"),u(" is like a regular "),l("code"),u("if/else"),o("code"),u(" statement When the predicate is "),l("code"),u("true"),o("code"),u(", it will render the first child, otherwise it will render the second."),o("p"),l("div",null,null,"class","alert alert-inline alert-warning"),i("span",null,null,"class","icon-16-alert"),l("span",null,null,"class","alert-body"),l("b"),u("Either"),o("b"),u(" will only consider the first two children, everything else will be ignored. You can use a any other wrapping element or a `Fragment` to get around this limitation."),o("span"),o("div"),s({code:"<div>\n  <Either when={predicate}>\n    <span>A</span>\n    <span>B</span>\n  </Either>\n</div>\n\n// for predicate === true:\n<div>\n  <span>A</span>\n</div>\n\n// for predicate === false:\n<div>\n  <span>B</span>\n</div>",mode:"text/jsx"},null,r),l("article",null,null,"id","either-props"),l("h2"),u("Props"),o("h2"),l("table"),l("thead"),l("tr"),l("th"),u("Name"),o("th"),l("th",null,null,"style","text-align:left"),u("Type"),o("th"),l("th",null,null,"style","text-align:left"),u("Default"),o("th"),l("th",null,null,"style","text-align:left"),u("Description"),o("th"),o("tr"),o("thead"),l("tbody"),l("tr"),l("td"),l("strong"),u("when"),o("strong"),o("td"),l("td",null,null,"style","text-align:left"),u("bool"),o("td"),l("td",null,null,"style","text-align:left"),l("em"),u("true"),o("em"),o("td"),l("td",null,null,"style","text-align:left"),u("When this is "),l("code"),u("true"),o("code"),u(", render the first child element. If "),l("code"),u("false"),o("code"),u(", render the second."),o("td"),o("tr"),o("tbody"),o("table"),l("hr"),o("hr"),l("p"),u("See also "),l("a",null,null,"href","Maybe.html"),l("code"),u("Maybe"),o("code"),o("a"),o("p"),o("article"),l("input",null,null,"type","hidden","value",e.page.title),o("input"),l("input",null,null,"type","hidden","value",e.site.title),o("input")};d(n.$$assignDefaults({content:a},e),null,r)}goog.module("llFOd.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),l=r.elementOpen,o=r.elementClose,i=r.elementVoid,u=(r.elementOpenStart,r.elementOpenEnd,r.text),s=(r.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),d=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="llFOd.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var p=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);c.default.register(p,a),t.llFOd=p,t.templates=a,t.default=a}},[272]);
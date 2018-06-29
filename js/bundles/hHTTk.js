var pageComponent=webpackJsonppageComponent([20],{274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=r(i),s=n(2),p=r(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var d=n(275),c=r(d),f=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,c.default),t.default=f},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.hHTTk=void 0;var i,u=n(1),s=r(u),p=n(2),d=r(p);goog.loadModule(function(e){function t(e,t,r){var i=function(){s({code:"import { Flip } from 'flowr';",mode:"javascript"},null,r),l("p"),l("code"),u("Flip"),o("code"),u(" will flip the order of it's first two children when the predicate is true or none provided."),o("p"),l("div",null,null,"class","alert alert-inline alert-warning"),a("span",null,null,"class","icon-16-alert"),l("span",null,null,"class","alert-body"),l("b"),u("Flip"),o("b"),u(" only flips the first two children. See "),l("a",null,null,"href","Reverse.html"),l("b"),u("Reverse"),o("b"),o("a"),u(" or "),l("a",null,null,"href","Order.html"),l("b"),u("Order"),o("b"),o("a"),u(" if you want to reverse the order of all children or arrange them in a specific order."),o("span"),o("div"),s({code:"<div>\n  <Flip when={predicate}>\n    <span>A</span>\n    <span>B</span>\n    <span>C</span>\n  </Flip>\n</div>\n\n// for predicate === true:\n<div>\n  <span>B</span>\n  <span>A</span>\n  <span>C</span>\n</div>\n\n// for predicate === false:\n<div>\n  <span>A</span>\n  <span>B</span>\n  <span>C</span>\n</div>",mode:"text/jsx"},null,r),l("article",null,null,"id","flip-props"),l("h2"),u("Props"),o("h2"),l("table"),l("thead"),l("tr"),l("th"),u("Name"),o("th"),l("th",null,null,"style","text-align:left"),u("Type"),o("th"),l("th",null,null,"style","text-align:left"),u("Default"),o("th"),l("th",null,null,"style","text-align:left"),u("Description"),o("th"),o("tr"),o("thead"),l("tbody"),l("tr"),l("td"),l("strong"),u("when"),o("strong"),o("td"),l("td",null,null,"style","text-align:left"),u("bool"),o("td"),l("td",null,null,"style","text-align:left"),l("em"),u("true"),o("em"),o("td"),l("td",null,null,"style","text-align:left"),u("If "),l("code"),u("true"),o("code"),u(", do the flip. If "),l("code"),u("false"),o("code"),u(", do nothing."),o("td"),o("tr"),o("tbody"),o("table"),l("hr"),o("hr"),l("p"),u("See also "),l("a",null,null,"href","Reverse.html"),l("code"),u("Reverse"),o("code"),o("a"),u(", "),l("a",null,null,"href","Order.html"),l("code"),u("Order"),o("code"),o("a"),o("p"),o("article"),l("input",null,null,"type","hidden","value",e.page.title),o("input"),l("input",null,null,"type","hidden","value",e.site.title),o("input")};p(n.$$assignDefaults({content:i},e),null,r)}goog.module("hHTTk.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),l=r.elementOpen,o=r.elementClose,a=r.elementVoid,u=(r.elementOpenStart,r.elementOpenEnd,r.text),s=(r.attr,d.default.getTemplate("ElectricCode.incrementaldom","render")),p=d.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="hHTTk.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var c=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);d.default.register(c,i),t.hHTTk=c,t.templates=i,t.default=i}},[274]);
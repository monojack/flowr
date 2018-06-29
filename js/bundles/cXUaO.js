var pageComponent=webpackJsonppageComponent([13],{288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=r(i),s=n(2),p=r(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var c=n(289),d=r(c),f=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,d.default),t.default=f},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.cXUaO=void 0;var i,u=n(1),s=r(u),p=n(2),c=r(p);goog.loadModule(function(e){function t(e,t,r){var i=function(){u({code:"import { Reverse } from 'flowr';",mode:"javascript"},null,r),o("p"),o("code"),a("Reverse"),l("code"),a(" will reverse the order of all it's children when the predicate is true or none provided."),l("p"),u({code:"<div>\n  <Reverse when={predicate}>\n    <span>A</span>\n    <span>B</span>\n    <span>C</span>\n  </Reverse>\n</div>\n\n// for predicate === true\n<div>\n  <span>C</span>\n  <span>B</span>\n  <span>A</span>\n</div>\n\n// for predicate === false:\n<div>\n  <span>A</span>\n  <span>B</span>\n  <span>C</span>\n</div>",mode:"text/jsx"},null,r),o("article",null,null,"id","reverse-props"),o("h2"),a("Props"),l("h2"),o("table"),o("thead"),o("tr"),o("th"),a("Name"),l("th"),o("th",null,null,"style","text-align:left"),a("Type"),l("th"),o("th",null,null,"style","text-align:left"),a("Default"),l("th"),o("th",null,null,"style","text-align:left"),a("Description"),l("th"),l("tr"),l("thead"),o("tbody"),o("tr"),o("td"),o("strong"),a("when"),l("strong"),l("td"),o("td",null,null,"style","text-align:left"),a("bool"),l("td"),o("td",null,null,"style","text-align:left"),o("em"),a("true"),l("em"),l("td"),o("td",null,null,"style","text-align:left"),a("If "),o("code"),a("true"),l("code"),a(", reverse the order. If "),o("code"),a("false"),l("code"),a(", do nothing."),l("td"),l("tr"),l("tbody"),l("table"),o("hr"),l("hr"),o("p"),a("See also "),o("a",null,null,"href","Flip.html"),o("code"),a("Flip"),l("code"),l("a"),a(", "),o("a",null,null,"href","Order.html"),o("code"),a("Order"),l("code"),l("a"),l("p"),l("article"),o("input",null,null,"type","hidden","value",e.page.title),l("input"),o("input",null,null,"type","hidden","value",e.site.title),l("input")};s(n.$$assignDefaults({content:i},e),null,r)}goog.module("cXUaO.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),o=r.elementOpen,l=r.elementClose,a=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),u=(r.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),s=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="cXUaO.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var d=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(d,i),t.cXUaO=d,t.templates=i,t.default=i}},[288]);
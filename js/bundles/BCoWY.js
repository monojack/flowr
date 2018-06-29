var pageComponent=webpackJsonppageComponent([12],{290:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),s=n(2),p=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var d=n(291),c=o(d),f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,c.default),t.default=f},291:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.BCoWY=void 0;var i,u=n(1),s=o(u),p=n(2),d=o(p);goog.loadModule(function(e){function t(e,t,o){var i=function(){s({code:"import { Some } from 'flowr';",mode:"javascript"},null,o),r("p"),r("code"),u("Some"),l("code"),u(" will render only the children located at the specified indices."),l("p"),r("div",null,null,"class","alert alert-inline alert-warning"),a("span",null,null,"class","icon-16-alert"),r("span",null,null,"class","alert-body"),r("b"),u("Some"),l("b"),u(" will not change the children order. See "),r("a",null,null,"href","Order.html"),r("b"),u("Order"),l("b"),l("a"),u(" if you are looking to render specific children in a specific order."),l("span"),l("div"),s({code:"<div>\n  <Some at={[2, 0]}>\n    <span>A</span>\n    <span>B</span>\n    <span>C</span>\n  </Some>\n</div>\n\n// Will render:\n<div>\n  <span>A</span>\n  <span>C</span>\n</div>",mode:"text/jsx"},null,o),r("p"),u("If the "),r("code"),u("at"),l("code"),u(" prop is not provided, nothing will be rendered."),l("p"),s({code:"<div>\n  <Some>\n    <span>A</span>\n    <span>B</span>\n    <span>C</span>\n  </Some>\n</div>\n\n// Will render:\n<div></div",mode:"text/jsx"},null,o),r("article",null,null,"id","reverse-props"),r("h2"),u("Props"),l("h2"),r("table"),r("thead"),r("tr"),r("th"),u("Name"),l("th"),r("th",null,null,"style","text-align:left"),u("Type"),l("th"),r("th",null,null,"style","text-align:left"),u("Default"),l("th"),r("th",null,null,"style","text-align:left"),u("Description"),l("th"),l("tr"),l("thead"),r("tbody"),r("tr"),r("td"),r("strong"),u("at"),l("strong"),l("td"),r("td",null,null,"style","text-align:left"),u("[number]"),l("td"),r("td",null,null,"style","text-align:left"),r("em"),u("-"),l("em"),l("td"),r("td",null,null,"style","text-align:left"),u("An array of indices corresponding to the children we want to render."),l("td"),l("tr"),l("tbody"),l("table"),r("hr"),l("hr"),r("p"),u("See also "),r("a",null,null,"href","One.html"),r("code"),u("One"),l("code"),l("a"),l("p"),l("article"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};p(n.$$assignDefaults({content:i},e),null,o)}goog.module("BCoWY.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,a=o.elementVoid,u=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,d.default.getTemplate("ElectricCode.incrementaldom","render")),p=d.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="BCoWY.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var c=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);d.default.register(c,i),t.BCoWY=c,t.templates=i,t.default=i}},[290]);
var pageComponent=webpackJsonppageComponent([22],{270:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=o(a),s=n(2),c=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var p=n(271),f=o(p),d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);c.default.register(d,f.default),t.default=d},271:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.jXhAN=void 0;var a,u=n(1),s=o(u),c=n(2),p=o(c);goog.loadModule(function(e){function t(e,t,o){var a=function(){s({code:"import { Constant } from 'flowr';",mode:"javascript"},null,o),r("p"),r("code"),u("Constant"),l("code"),u(" will render it's children only once, with their initial state, effectively preventing any updates."),l("p"),s({code:"// ...\nstate = { count: 0 }\n\nincrement = () => {\n  this.setState(({count}) => ({\n    count: count + 1\n  }))\n}\n\nrender() {\n  return (\n    <div>\n      <Constant>\n        <span>{this.state.count}</span>\n      </Constant>\n    </div>\n  )\n}\n\n// Constant's children will never be updated\n// Will render:\n<div>\n  <span>0</span>\n</div>",mode:"text/jsx"},null,o),r("article",null,null,"id","constant-props"),r("h2"),u("Props"),l("h2"),r("table"),r("thead"),r("tr"),r("th"),u("Name"),l("th"),r("th",null,null,"style","text-align:left"),u("Type"),l("th"),r("th",null,null,"style","text-align:left"),u("Default"),l("th"),r("th",null,null,"style","text-align:left"),u("Description"),l("th"),l("tr"),l("thead"),i("tbody"),l("table"),r("hr"),l("hr"),l("article"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};c(n.$$assignDefaults({content:a},e),null,o)}goog.module("jXhAN.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,i=o.elementVoid,u=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="jXhAN.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);p.default.register(f,a),t.jXhAN=f,t.templates=a,t.default=a}},[270]);
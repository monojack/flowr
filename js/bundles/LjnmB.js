var pageComponent=webpackJsonppageComponent([19],{276:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),s=n(2),p=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var c=n(277),d=o(c),f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);p.default.register(f,d.default),t.default=f},277:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.LjnmB=void 0;var i,u=n(1),s=o(u),p=n(2),c=o(p);goog.loadModule(function(e){function t(e,t,o){var i=function(){s({code:"import { Just } from 'flowr';",mode:"javascript"},null,o),r("p"),r("code"),u("Just"),l("code"),u(" has no special behaviour, it just renders it's children without any changes. "),r("code"),u("Just"),l("code"),u(" is useful when you need to dynamically create a controlled render."),l("p"),s({code:"// ...\nrender() {\n  // If we have a predicate defined, we want to render the `span`\n  // only when that predicate is true. If not, just render it.\n\n  const Wrapper = this.props.predicate ? Maybe : Just\n\n  return (\n    <div>\n      <Wrapper when={this.props.predicate}> // Just will ignore the props\n        <span>Hello, world!</span>\n      </Wrapper>\n    </div>\n  )\n}",mode:"text/jsx"},null,o),r("p"),u("The above snippet is just for the sake of example. You would achieve the same outcome by using just a "),r("a",null,null,"href","Maybe.html"),r("code"),u("Maybe"),l("code"),l("a"),u(":"),l("p"),s({code:"// ...\n<div>\n  <Maybe when={predicate == null || predicate}>\n    <span>Hello, world!</span>\n  </Maybe>\n</div>",mode:"text/jsx"},null,o),r("article",null,null,"id","just-props"),r("h2"),u("Props"),l("h2"),r("table"),r("thead"),r("tr"),r("th"),u("Name"),l("th"),r("th",null,null,"style","text-align:left"),u("Type"),l("th"),r("th",null,null,"style","text-align:left"),u("Default"),l("th"),r("th",null,null,"style","text-align:left"),u("Description"),l("th"),l("tr"),l("thead"),a("tbody"),l("table"),r("hr"),l("hr"),r("p"),u("See also "),r("a",null,null,"href","Nothing.html"),r("code"),u("Nothing"),l("code"),l("a"),l("p"),l("article"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};p(n.$$assignDefaults({content:i},e),null,o)}goog.module("LjnmB.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,a=o.elementVoid,u=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),p=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="LjnmB.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(d,i),t.LjnmB=d,t.templates=i,t.default=i}},[276]);
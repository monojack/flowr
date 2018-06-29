var pageComponent=webpackJsonppageComponent([4],{302:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),s=n(2),d=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var c=n(303),p=o(c),f=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);d.default.register(f,p.default),t.default=f},303:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.JZvdu=void 0;var i,u=n(1),s=o(u),d=n(2),c=o(d);goog.loadModule(function(e){function t(e,t,o){var i=function(){u({code:"import { Throttle } from 'flowr';",mode:"javascript"},null,o),r("p"),r("br"),l("br"),r("br"),l("br"),r("code"),a("Throttle"),l("code"),a(" will render it's children "),r("strong"),a("at most"),l("strong"),a(" once in the specified time interval."),l("p"),u({code:"// ...\nstate = { count: 0 }\n\ncomponentDidMount() {\n  // start an interval that will increment state.count up to 9 and then stop.\n  this.interval = setInterval(() => {\n    if (this.state.count === 9) {\n      return clearInterval(this.interval)\n    }\n\n    this.setState(state => ({\n      count: state.count + 1\n    }))\n  }, 300)\n}\n\nrender() {\n  return (\n    <div>\n      <Throttle for={1000}>\n        <span>{this.state.count}</span>\n      </Throttle>\n    </div>\n  )\n}",mode:"text/jsx"},null,o),r("p"),a("In the above example "),r("code"),a("Throttle"),l("code"),a(" will render the first state and after that the most recent update once every second. If no update occurred since the last render, throttling will be paused so we don't waste renders and when a new update comes, it will render that and start sampling again."),l("p"),u({code:"<div>\n  <span> { /* 0---------3---------6---------9 */ } </span>\n</div>",mode:"text/jsx"},null,o),r("article",null,null,"id","throttle-props"),r("h2"),a("Props"),l("h2"),r("table"),r("thead"),r("tr"),r("th"),a("Name"),l("th"),r("th",null,null,"style","text-align:left"),a("Type"),l("th"),r("th",null,null,"style","text-align:left"),a("Default"),l("th"),r("th",null,null,"style","text-align:left"),a("Description"),l("th"),l("tr"),l("thead"),r("tbody"),r("tr"),r("td"),r("strong"),a("time"),l("strong"),l("td"),r("td",null,null,"style","text-align:left"),a("number"),l("td"),r("td",null,null,"style","text-align:left"),r("em"),a("-"),l("em"),l("td"),r("td",null,null,"style","text-align:left"),a("The amount of time in ms that we need to throttle the render"),l("td"),l("tr"),l("tbody"),l("table"),r("hr"),l("hr"),r("p"),a("See also "),r("a",null,null,"href","Debounce.html"),r("code"),a("Debounce"),l("code"),l("a"),l("p"),l("article"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};s(n.$$assignDefaults({content:i},e),null,o)}goog.module("JZvdu.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,a=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),s=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="JZvdu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var p=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);c.default.register(p,i),t.JZvdu=p,t.templates=i,t.default=i}},[302]);
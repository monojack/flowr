var pageComponent=webpackJsonppageComponent([10],{262:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=l(1),a=n(i),s=l(2),u=n(s);l(4),l(5),l(6),l(7),l(8),l(9),l(10),l(11),l(12),l(13),l(14),l(15);var c=l(263),h=n(c),f=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(a.default);u.default.register(f,h.default),t.default=f},263:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.oCYnt=void 0;var i,a=l(1),s=n(a),u=l(2),c=n(u);goog.loadModule(function(e){function t(e,t,n){var i=function(){o("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&d(t),r("h6"),o("article",null,null,"id","Installation"),o("h2"),d("Installation"),r("h2"),o("p"),d("To add "),o("code"),d("flowr"),r("code"),d(" to your application dependencies you just need to run:"),r("p"),a({code:"npm install flowr -S",mode:"shell"},null,n),o("p"),d("This will download "),o("code"),d("flowr"),r("code"),d(" into your "),o("code"),d("node_modules"),r("code"),d(" folder and then you can import any "),o("code"),d("flowr"),r("code"),d(" component into your modules."),r("p"),a({code:"import { Maybe, Either, Await } from 'flowr';\n// ...",mode:"javascript"},null,n),o("p"),o("code"),d("Flowr"),r("code"),d(" is "),o("em"),d("tree-shaking"),r("em"),d(" friendly. As long as you are using ES6 modules, your bundle will contain only the required "),o("code"),d("flowr"),r("code"),d(" components. Read more about "),o("a",null,null,"href","https://webpack.js.org/guides/tree-shaking/"),d("tree shaking"),r("a"),r("p"),o("p"),d("There are two categories of Components available: "),o("a",null,null,"href","#conditionals"),o("strong"),d("Conditionals"),r("strong"),r("a"),d(" and "),o("a",null,null,"href","#schedulers"),o("strong"),d("Schedulers"),r("strong"),r("a"),r("p"),r("article"),o("article",null,null,"id","conditionals"),o("h4"),d("Conditionals"),r("h4"),o("table"),o("thead"),o("tr"),o("th"),d("Name"),r("th"),o("th",null,null,"style","text-align:left"),d("Props"),r("th"),o("th",null,null,"style","text-align:left"),d("Description"),r("th"),r("tr"),r("thead"),o("tbody"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Maybe.html"),o("code"),d("Maybe"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("when"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders it's children only if "),o("code"),d("when"),r("code"),d(" is "),o("code"),d("true"),r("code"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Either.html"),o("code"),d("Either"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("when"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("If "),o("code"),d("when"),r("code"),d(" is "),o("code"),d("true"),r("code"),d(" it renders the first child, otherwise it renders the second"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Flip.html"),o("code"),d("Flip"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("when"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Flips the order of the "),o("strong"),d("first two"),r("strong"),d(" children"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Reverse.html"),o("code"),d("Reverse"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("when"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Reverses the order of "),o("strong"),d("all"),r("strong"),d(" its children"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Order.html"),o("code"),d("Order"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("sort"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Re-orders the children in the order provided through "),o("code"),d("sort"),r("code"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/One.html"),o("code"),d("One"),r("code"),r("a"),r("td");o("td",null,null,"style","text-align:left"),o("code"),d("at"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders "),o("strong"),d("only"),r("strong"),d(" the child at the specified index"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Some.html"),o("code"),d("Some"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("at"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders "),o("strong"),d("only"),r("strong"),d(" the children at the specified indices if they exist"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Constant.html"),o("code"),d("Constant"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("*"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Will render "),o("strong"),d("only once"),r("strong"),d(", never updating the state of it's children (shouldComponentUpdate -> false)"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Pure.html"),o("code"),d("Pure"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("*"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Will re-render "),o("strong"),d("only"),r("strong"),d(" when the passed props have changed (PureComponent)"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Just.html"),o("code"),d("Just"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("*"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Just renders it's children, nothing special, good for dynamic rendering"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","conditionals/Nothing.html"),o("code"),d("Nothing"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("*"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders nothing"),r("td"),r("tr"),r("tbody"),r("table"),r("article"),o("article",null,null,"id","schedulers"),o("h4"),d("Schedulers"),r("h4"),o("table"),o("thead"),o("tr"),o("th"),d("Name"),r("th"),o("th",null,null,"style","text-align:left"),d("Props"),r("th"),o("th",null,null,"style","text-align:left"),d("Description"),r("th"),r("tr"),r("thead"),o("tbody"),o("tr"),o("td"),o("a",null,null,"href","schedulers/Await.html"),o("code"),d("Await"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("for"),r("code"),d(", "),o("code"),d("tap"),r("code"),d(", "),o("code"),d("onPromise"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders it's children "),o("strong"),d("when and only"),r("strong"),d(" if the provided promise resolves. When used with a render prop, it will always apply the promise result "),o("em"),d("(err, res)"),r("em"),d(" to the callback. It also accepts a function that returns a Promise"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","schedulers/Stream.html"),o("code"),d("Stream"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("*"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Render-prop component that enables working with "),o("strong"),d("props streams"),r("strong"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","schedulers/Debounce.html"),o("code"),d("Debounce"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("time"),r("code"),d(", "),o("code"),d("immediate");r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders it's children "),o("strong"),d("only"),r("strong"),d(" after a certain amount of time has passed since the previous render."),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","schedulers/Delay.html"),o("code"),d("Delay"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("time"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders it's children "),o("strong"),d("only"),r("strong"),d(" after a certain amount of time has passed"),r("td"),r("tr"),o("tr"),o("td"),o("a",null,null,"href","schedulers/Throttle.html"),o("code"),d("Throttle"),r("code"),r("a"),r("td"),o("td",null,null,"style","text-align:left"),o("code"),d("time"),r("code"),r("td"),o("td",null,null,"style","text-align:left"),d("Renders it's children "),o("strong"),d("at most"),r("strong"),d(" once in the specified time interval."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),o("input",null,null,"type","hidden","value",e.page.title),r("input"),o("input",null,null,"type","hidden","value",e.site.title),r("input")};s(l.$$assignDefaults({content:i},e),null,n)}goog.module("oCYnt.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),o=n.elementOpen,r=n.elementClose,d=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),a=(n.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),s=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="oCYnt.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var h=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(s.default);c.default.register(h,i),t.oCYnt=h,t.templates=i,t.default=i}},[262]);
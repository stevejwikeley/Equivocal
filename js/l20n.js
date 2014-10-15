!function(a,b){function c(a,b){c.modules[a]=b}function d(a){for(var b=a.split("/"),c=[],d=0;d<b.length;d++)"."==b[d]||(".."==b[d]?c.pop():c.push(b[d]));return c.join("/")}function e(a,b){return a?a.trim().replace(/\/*$/,"/")+b.trim():b.trim()}function f(a){return a?a.split("/").slice(0,-1).join("/"):null}function g(a,h){if(h=d(e(f(a),h)),h in c.exports)return c.exports[h];if(!(h in c.modules))throw new Error("Module not defined: "+h);var i=c.modules[h];if("function"==typeof i){var j={},k=i(g.bind(null,h),j,{id:h,uri:""});i=k!==b?k:j}return c.exports[h]=i}c.modules={},c.exports={};var h=g.bind(null,null);c("l20n/html",function(b){"use strict";function c(a,b){return document.readyState===a?b():void document.addEventListener("readystatechange",function(){document.readyState===a&&b()})}function d(a){u&&(a.addEventListener("error",console.error.bind(console)),a.addEventListener("warning",console.warn.bind(console))),a.localizeNode=function(a){for(var b=m(a),c=B.extend(b.ids),d=0;d<b.nodes.length;d++)o(b.nodes[d],b.ids[d],c.entities[b.ids[d]])},a.once=function(a){if(C)a();else{var b=function b(){document.removeEventListener("DocumentLocalized",b),a()};document.addEventListener("DocumentLocalized",b)}},document.l10n=a}function e(){var a=document.head,b=a.querySelector('script[type="application/l10n-data+json"]');b&&A.updateData(JSON.parse(b.textContent));var c=a.querySelector('link[rel="localization"]');if(c)return f(c.href),l();var d=a.querySelectorAll('script[type="application/l20n"]');if(d.length){for(var e=0;e<d.length;e++)d[e].hasAttribute("src")?A.linkResource(d[e].src):A.addResource(d[e].textContent);return A.requestLocales(),l()}console.error("L20n: No resources found. (Put them above l20n.js.)")}function f(a){w.load(a,function(b,c){var d=g(c,a);i(d)})}function g(a,b){var c=JSON.parse(a);return c.resources=c.resources.map(j.bind(this,b)),c}function h(a){document.documentElement.lang=a,document.documentElement.dir=-1===y.indexOf(a)?"ltr":"rtl"}function i(a){A.registerLocales(a.default_locale,a.locales),A.registerLocaleNegotiator(function(a,c,d){var e=b("./intl").Intl,f=e.prioritizeLocales(a,c,d);return h(f[0]),f});var c=/{{\s*locale\s*}}/;return a.resources.forEach(function(a){A.linkResource(c.test(a)?a.replace.bind(a,c):a)}),A.requestLocales(navigator.language||navigator.browserLanguage),a}function j(a,b){if(x.test(b))return b;var c=a.split("/").slice(0,-1).concat(b.split("/")).filter(function(a){return"."!==a});return c.join("/")}function k(){var a=document.createEvent("Event");a.initEvent("DocumentLocalized",!1,!1),document.dispatchEvent(a)}function l(){var a=m(document);B=A.localize(a.ids,function(b){a||(a=m(document));for(var c=0;c<a.nodes.length;c++)o(a.nodes[c],a.ids[c],b.entities[a.ids[c]]);"locales"in b.reason&&b.reason.locales.length&&h(b.reason.locales[0]),a=null,C||(C=!0,k())})}function m(a){var b=a.querySelectorAll("[data-l10n-id]"),c=[];a.hasAttribute&&a.hasAttribute("data-l10n-id")&&(b=Array.prototype.slice.call(b),b.push(a));for(var d=0;d<b.length;d++)c.push(b[d].getAttribute("data-l10n-id"));return{ids:c,nodes:b}}function n(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}).replace(/^-/,"")}function o(a,b,c){if(c){if(c.value)if(-1===c.value.indexOf("<")&&-1===c.value.indexOf("&"))a.textContent=c.value;else{var d=document.createElement("template");d.innerHTML=c.value,p(a,d.content)}Object.keys(c.attributes).forEach(function(b){var d=n(b);r({name:d},a)&&a.setAttribute(d,c.attributes[b])})}}function p(a,b){for(var c,d=document.createDocumentFragment();c=b.childNodes[0];)if(b.removeChild(c),c.nodeType!==Node.TEXT_NODE){var e=s(a,c);if(e)p(e,c),d.appendChild(e);else if(q(c)){for(var f,g=0;f=c.attributes[g];g++)r(f,c)||c.removeAttribute(f.name);d.appendChild(c)}else{var h=new Text(c.textContent);d.appendChild(h)}}else d.appendChild(c);if(a.textContent="",a.appendChild(d),b.attributes)for(var f,g=0;f=b.attributes[g];g++)r(f,a)&&a.setAttribute(f.name,f.value)}function q(a){return-1!==z.elements.indexOf(a.tagName.toLowerCase())}function r(a,b){var c=a.name.toLowerCase(),d=b.tagName.toLowerCase();if(-1!==z.attributes.global.indexOf(c))return!0;if(!z.attributes[d])return!1;if(-1!==z.attributes[d].indexOf(c))return!0;if("input"===d&&"value"===c){var e=b.type.toLowerCase();if("submit"===e||"button"===e||"reset"===e)return!0}return!1}function s(a,b){for(var c,d=t(b),e=0,f=0;c=a.children[f];f++)if(c.nodeType===Node.ELEMENT_NODE&&c.tagName===b.tagName){if(e===d)return c;e++}return null}function t(a){for(var b,c=0;b=a.previousElementSibling;)b.tagName===a.tagName&&c++;return c}var u=!1,v=b("../l20n"),w=b("./platform/io"),x=/^\/|:/,y=["ar","fa","he","ps","ur"],z={elements:["a","em","strong","small","s","cite","q","dfn","abbr","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","span","br","wbr"],attributes:{global:["title","aria-label"],a:["download"],area:["download","alt"],input:["alt","placeholder"],menuitem:["label"],menu:["label"],optgroup:["label"],option:["label"],track:["label"],img:["alt"],textarea:["placeholder"],th:["abbr"]}},A=v.getContext(document.location.host);d(A);var B,C=!1;return"complete"===document.readyState?a.setTimeout(e):c("interactive",e),v}),c("l20n",function(a,b){"use strict";var c=a("./l20n/context").Context,d=a("./l20n/parser").Parser,e=a("./l20n/compiler").Compiler;b.Context=c,b.Parser=d,b.Compiler=e,b.getContext=function(a){return new c(a)}}),c("l20n/context",function(a,c){"use strict";function d(a,c){function e(a,e,j){function k(a,d){return a?e(a):(d!==b&&(h.source=d),h.ast=c.parse(h.source),void l())}function l(){function b(a){return a?e(a):(k--,void(0===k&&m()))}var g=h.ast.body.filter(function(a,b){return"ImportStatement"===a.type?(i.push(b),!0):!1});g.forEach(function(a){var b=f(a.uri.content),e=new d(b,c);h.resources.push(e)});var k=h.resources.length;return 0===k?e():void h.resources.forEach(function(c){c.build(a+1,b,j)})}function m(){for(var a=h.resources.length-1;a>=0;a--){var b=i[a]||0;Array.prototype.splice.apply(h.ast.body,[b,1].concat(h.resources[a].ast.body))}e()}return a>=7?e(new g("Too many nested imports.")):h.source?setTimeout(function(){k()}):void n.load(h.id,k,j)}function f(a){if(null===h.id||j.test(a))return a;var b=h.id.split("/").slice(0,-1).concat(a.split("/")).filter(function(a){return"."!==a});return b.join("/")}var h=this;this.id=a,this.resources=[],this.source=null,this.ast={type:"L20n",body:[]},this.build=e;var i=[],j=/^\/|:/}function e(a,c,d,e){function f(a){function b(a){a&&(k++,e.emit(a instanceof g?"error":"warning",a)),i--,0===i&&(k===j.resources.length&&e.emit("error",new g("Locale has no valid resources")),c())}function c(){j.ast.body=j.resources.reduce(function(a,b){return a.concat(b.ast.body)},j.ast.body),f()}function f(){j.entries=d.compile(j.ast),j.isReady=!0,a&&a()}if(!a)var h=!0;var i=j.resources.length;if(0===i)throw new g("Locale has no resources");var k=0;j.resources.forEach(function(a){a.build(0,b,h)})}function h(a){return this.entries.hasOwnProperty(a)?this.entries[a]:b}function i(a){return this.resources.some(function(b){return b.id===a})}this.id=a,this.resources=[],this.entries=null,this.ast={type:"L20n",body:[]},this.isReady=!1,this.build=f,this.getEntry=h,this.hasResource=i;var j=this}function f(c){function f(a,c){Object.keys(c).forEach(function(d){c[d]===b?delete a[d]:"object"!=typeof c[d]?a[d]=c[d]:("object"!=typeof a[d]&&(a[d]={}),f(a[d],c[d]))})}function n(a){if(!a||"object"!=typeof a)throw new g("Context data must be a non-null object");f(L,a)}function o(a,b){if(!S)throw new g("Context not ready");return u.call(Y,0,a,b).value}function p(a,b){if(!S)throw new g("Context not ready");return u.call(Y,0,a,b)}function q(a,b){if(!b)throw new g("No callback passed");return s.call(Y,a,b)}function r(a){S&&setTimeout(a),G("ready",a)}function s(a,b,c){var d={extend:function(c){for(var d=0;d<c.length;d++)-1===a.indexOf(c[d])&&a.push(c[d]);if(S){var e=t.call(this,c);return X.bindGet({id:b,callback:s.bind(this,a,b),globals:Object.keys(e.globalsUsed)},!0),e}}.bind(this),stop:function(){X.unbindGet(b)}.bind(this)};if(!S)return X.bindGet({id:b,callback:s.bind(this,a,b),globals:[]}),d;var e=t.call(this,a),f={entities:e.entities,reason:c||{locales:P.slice()},stop:function(){X.unbindGet(b)}};return X.bindGet({id:b,callback:s.bind(this,a,b),globals:Object.keys(e.globalsUsed)}),b(f),d}function t(a){for(var b,c={entities:{},globalsUsed:{}},d=0;b=a[d];d++){c.entities[b]=p.call(this,b);for(var e in c.entities[b].globals)c.entities[b].globals.hasOwnProperty(e)&&(c.globalsUsed[e]=!0)}return c}function u(a,c,d,e){var f=P[a];if(!f)return J(new h("Unable to get translation",c,P)),{value:e?e.source:c,attributes:{},globals:{},locale:e?e.loc:null};var g=C(f);g.isReady||g.build(null);var j=g.getEntry(c);if(j===b)return I(new i("Not found",c,P,g)),u.call(this,a+1,c,d,e);var k;try{k=j.get(v.call(this,d))}catch(m){if(m instanceof l.RuntimeError){if(J(new i(m.message,c,P,g)),m instanceof l.ValueError){var n=e||{source:m.source,loc:g.id};return u.call(this,a+1,c,d,n)}return u.call(this,a+1,c,d,e)}throw J(m)}return k.locale=g.id,k}function v(a){if(!a)return L;var b={};return f(b,L),f(b,a),b}function w(a){if(T)throw new g("Context is frozen");R.push(["text",a])}function x(a,b){var c=new d(null,V);c.source=a,b.resources.push(c)}function y(a){if(T)throw new g("Context is frozen");R.push(["function"==typeof a?"template":"uri",a])}function z(a,b){if(!b.hasResource(a)){var c=new d(a,V);b.resources.push(c)}}function A(a,c){if(T)throw new g("Context is frozen");a!==b&&(M=a,N=[],c||(c=[]),c.push(a),c.forEach(function(a){if("string"!=typeof a)throw new g("Language codes must be strings");-1===N.indexOf(a)&&N.push(a)}))}function B(a){if(T)throw new g("Context is frozen");K=a}function C(a){if(Q[a])return Q[a];var b=new e(a,V,W,U);Q[a]=b;for(var c=0;c<R.length;c++){var d=R[c];"text"===d[0]?x(d[1],b):"uri"===d[0]?z(d[1],b):z(d[1](b.id),b)}return b}function D(){if(T&&!S)throw new g("Context not ready");if(0===R.length)return void I(new g("Context has no resources; not freezing"));if(T=!0,O=Array.prototype.slice.call(arguments),O.length&&O.forEach(function(a){if("string"!=typeof a)throw new g("Language codes must be strings")}),!K){var b=a("./intl").Intl;K=b.prioritizeLocales}var c=K(N,O,M,E);c&&E(c)}function E(a){var b=C(a[0]);b.isReady?F(a):b.build(F.bind(null,a))}function F(a){P=a,S=!0,X.all(P.slice()),U.emit("ready")}function G(a,b){U.addEventListener(a,b)}function H(a,b){U.removeEventListener(a,b)}function I(a){return U.emit("warning",a),a}function J(a){return U.emit("error",a),a}this.id=c,this.registerLocales=A,this.registerLocaleNegotiator=B,this.requestLocales=D,this.addResource=w,this.linkResource=y,this.updateData=n,this.getSync=o,this.getEntitySync=p,this.localize=q,this.ready=r,this.addEventListener=G,this.removeEventListener=H,Object.defineProperty(this,"supportedLocales",{get:function(){return P.slice()},enumerable:!0});var K,L={},M="i-default",N=[M],O=[],P=[],Q={},R=[],S=!1,T=!1,U=new j,V=new k,W=new l,X=new m,Y=this;V.addEventListener("error",J),W.addEventListener("error",I),W.setGlobals(X.globals)}function g(a){this.name="ContextError",this.message=a}function h(a,b,c){g.call(this,a),this.name="RuntimeError",this.entity=b,this.supportedLocales=c.slice(),this.message=b+": "+a+"; tried "+c.join(", ")}function i(a,b,c,d){h.call(this,a,b,c),this.name="TranslationError",this.locale=d.id,this.message="["+this.locale+"] "+b+": "+a}var j=a("./events").EventEmitter,k=a("./parser").Parser,l=a("./compiler").Compiler,m=a("./retranslation").RetranslationManager;a("./platform/globals");var n=a("./platform/io");f.Error=g,f.RuntimeError=h,f.TranslationError=i,g.prototype=Object.create(Error.prototype),g.prototype.constructor=g,h.prototype=Object.create(g.prototype),h.prototype.constructor=h,i.prototype=Object.create(h.prototype),i.prototype.constructor=i,c.Context=f}),c("l20n/events",function(a,b){"use strict";function c(){this._listeners={}}c.prototype.emit=function(){var a=Array.prototype.slice.call(arguments),b=a.shift();if(!this._listeners[b])return!1;for(var c=this._listeners[b].slice(),d=0;d<c.length;d++)c[d].apply(this,a);return!0},c.prototype.addEventListener=function(a,b){return this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push(b),this},c.prototype.removeEventListener=function(a,b){var c=this._listeners[a],d=c.indexOf(b);return-1===d?this:(c.splice(d,1),this)},b.EventEmitter=c}),c("l20n/parser",function(a,c){"use strict";function d(a){function c(){X+=2;var a=X,b=W.indexOf("*/",a);if(-1===b)throw U("Comment without closing tag");return X=b+2,{type:"Comment",content:W.slice(a,b)}}function d(){for(var a,b,c,d=[];;){if(a=h("Attribute"),a.local="_"===a.key.name.charAt(0),d.push(a),b=n(),c=W.charAt(X),">"===c)break;if(!b)throw U('Expected ">"')}return d}function g(a){var b=q();if(o(),":"!==W.charAt(X))throw U('Expected ":"');return++X,o(),{type:a,key:b,value:m()}}function h(a){var b=q(),c=[];if("["===W.charAt(X)&&(++X,o(),c=T(A,"]")),o(),":"!==W.charAt(X))throw U('Expected ":"');return++X,o(),{type:a,key:b,value:m(),index:c}}function i(){++X,o();for(var a,b,c,d=[],e=!1;;){if(a=!1,"*"===W.charAt(X)){if(++X,e)throw U("Default item redefinition forbidden");a=!0,e=!0}if(b=g("HashItem"),b.default=a,d.push(b),o(),c=","===W.charAt(X),c&&(++X,o()),"}"===W.charAt(X)){++X;break}if(!c)throw U('Expected "}"')}return{type:"Hash",content:d}}function j(){var a,b=W.charAt(++X);if("u"===b){for(var c="",d=0;4>d;d++){if(b=W[++X],a=b.charCodeAt(0),!(a>96&&103>a||a>64&&71>a||a>47&&58>a))throw U("Illegal unicode escape sequence");c+=b}return String.fromCharCode(parseInt(c,16))}return b}function k(a,b){var c,d=null,e="",f=0;X+=b-1;var g=X+1;a:for(;;)switch(c=W.charAt(++X)){case"\\":e+=j();break;case"{":if("{"===W.charAt(X+1)){if(null===d&&(d=[]),f>_-1)throw U("Too many placeables, maximum allowed is "+_);if(e&&d.push({type:"String",content:e}),X+=2,o(),d.push(A()),o(),"}"!==W.charAt(X)||"}"!==W.charAt(X+1))throw U('Expected "}}"');X+=1,f++,e="";break}default:if(1===b){if(c===a){X++;break a}}else if(c===a[0]&&W.charAt(X+1)===c&&W.charAt(X+2)===c){X+=3;break a}if(e+=c,X+1>=Y)throw U("Unclosed string literal")}return null===d?{type:"String",content:e}:(e.length&&d.push({type:"String",content:e}),{type:"ComplexString",content:d,source:W.slice(g,X-b)})}function l(a,b){var c,d,e,f=W.indexOf(a,X+b);if(-1===f)throw U("Unclosed string literal");return e=W.slice(X+b,f),c=e.indexOf("{{"),-1!==c?k(a,b):(d=e.indexOf("\\"),-1!==d?k(a,b):(X=f+b,{type:"String",content:e}))}function m(a,c){if(c===b&&(c=W.charAt(X)),"'"===c||'"'===c)return c===W.charAt(X+1)&&c===W.charAt(X+2)?l(c+c+c,3):l(c,1);if("{"===c)return i();if(!a)throw U("Unknown value type");return null}function n(){for(var a=X,b=W.charCodeAt(a);32===b||10===b||9===b||13===b;)b=W.charCodeAt(++X);return X!==a}function o(){for(var a=W.charCodeAt(X);32===a||10===a||9===a||13===a;)a=W.charCodeAt(++X)}function p(){return++X,{type:"VariableExpression",id:q()}}function q(){var a=X,b=a,c=W,d=c.charCodeAt(b);if((97>d||d>122)&&(65>d||d>90)&&95!==d)throw U("Identifier has to start with [a-zA-Z_]");for(d=c.charCodeAt(++a);d>=97&&122>=d||d>=65&&90>=d||d>=48&&57>=d||95===d;)d=c.charCodeAt(++a);return X=a,{type:"Identifier",name:c.slice(b,a)}}function r(){if(X+=6,"("!==W.charAt(X))throw U('Expected "("');++X,o();var a=l(W.charAt(X),1);if(o(),")"!==W.charAt(X))throw U('Expected ")"');return++X,{type:"ImportStatement",uri:a}}function s(a){if("_"===a.name.charAt(0))throw U('Macro ID cannot start with "_"');++X;var b=T(p,")");if(n(),"{"!==W.charAt(X))throw U('Expected "{"');++X,o();var c=A();if(o(),"}"!==W.charAt(X))throw U('Expected "}"');if(++X,o(),62!==W.charCodeAt(X))throw U('Expected ">"');return++X,{type:"Macro",id:a,args:b,expression:c}}function t(a,b){if(!n())throw U("Expected white space");var c=W.charAt(X),e=m(!0,c),f=null;if(null===e){if(">"===c)throw U('Expected ">"');f=d()}else{var g=n();if(">"!==W.charAt(X)){if(!g)throw U('Expected ">"');f=d()}}return++X,{type:"Entity",id:a,value:e,index:b,attrs:f,local:95===a.name.charCodeAt(0)}}function u(){var a=W.charCodeAt(X);if(60===a){++X;var b=q();return a=W.charCodeAt(X),40===a?s(b):91===a?(++X,t(b,T(A,"]"))):t(b,null)}if(47===W.charCodeAt(X)&&42===W.charCodeAt(X+1))return c();if("import"===W.slice(X,X+6))return r();throw U("Invalid entry")}function v(){var a=[];for(o();Y>X;){try{a.push(u())}catch(b){if(!(b instanceof e))throw b;Z.emit("error",b),a.push(V())}Y>X&&o()}return{type:"L20n",body:a}}function w(){var a=[];for(o();Y>X;)a.push(u()),Y>X&&o();return{type:"L20n",body:a}}function x(a){return W=a,X=0,Y=W.length,$()}function y(a,b){if(!Z)throw new Error("Emitter not available");return Z.addEventListener(a,b)}function z(a,b){if(!Z)throw new Error("Emitter not available");return Z.removeEventListener(a,b)}function A(){return D()}function B(a,b,c,d){for(var e,f,g=d();;){if(e="",o(),f=W.charAt(X),-1===a[0].indexOf(f))break;if(e+=f,++X,a.length>1)if(f=W.charAt(X),a[1]===f)++X,e+=f;else if(a[2])return--X,g;o(),g={type:b,operator:{type:c,token:e},left:g,right:d()}}return g}function C(a,b,c,d){var e=W.charCodeAt(X);return-1===a.indexOf(e)?d():(++X,o(),{type:b,operator:{type:c,token:String.fromCharCode(e)},argument:C(a,b,c,d)})}function D(){var a=E();if(o(),63!==W.charCodeAt(X))return a;++X,o();var b=A();if(o(),58!==W.charCodeAt(X))throw U('Expected ":"');return++X,o(),{type:"ConditionalExpression",test:a,consequent:b,alternate:A()}}function E(){return B([["|"],"|",!0],"LogicalExpression","LogicalOperator",F)}function F(){return B([["&"],"&",!0],"LogicalExpression","Logicalperator",G)}function G(){return B([["=","!"],"=",!0],"BinaryExpression","BinaryOperator",H)}function H(){return B([["<",">"],"=",!1],"BinaryExpression","BinaryOperator",I)}function I(){return B([["+","-"]],"BinaryExpression","BinaryOperator",J)}function J(){return B([["%"]],"BinaryExpression","BinaryOperator",K)}function K(){return B([["*"]],"BinaryExpression","BinaryOperator",L)}function L(){return B([["/"]],"BinaryExpression","BinaryOperator",M)}function M(){return C([43,45,33],"UnaryExpression","UnaryOperator",Q)}function N(a){return o(),{type:"CallExpression",callee:a,arguments:T(A,")")}}function O(a,b){if("ParenthesisExpression"!==a.type&&"Identifier"!==a.type&&"ThisExpression"!==a.type)throw U("AttributeExpression must have Identifier, This or Parenthesis as left node");var c;if(b){if(o(),c=A(),o(),"]"!==W.charAt(X))throw U('Expected "]"');return++X,{type:"AttributeExpression",expression:a,attribute:c,computed:!0}}return c=q(),{type:"AttributeExpression",expression:a,attribute:c,computed:!1}}function P(a,b){var c;if(b){if(o(),c=A(),o(),"]"!==W.charAt(X))throw U('Expected "]"');return++X,{type:"PropertyExpression",expression:a,property:c,computed:!0}}return c=q(),{type:"PropertyExpression",expression:a,property:c,computed:!1}}function Q(){for(var a,b=R();;)if(a=W.charCodeAt(X),46===a||91===a)++X,b=P(b,91===a);else if(58===a&&58===W.charCodeAt(X+1))X+=2,91===W.charCodeAt(X)?(++X,b=O(b,!0)):b=O(b,!1);else{if(40!==a)break;++X,b=N(b)}return b}function R(){if(40===W.charCodeAt(X)){++X,o();var a={type:"ParenthesisExpression",expression:A()};if(o(),41!==W.charCodeAt(X))throw U('Expected ")"');return++X,a}return S()}function S(){for(var a=X,b=W.charCodeAt(a);b>47&&58>b;)b=W.charCodeAt(++a);if(a>X){var c=X;return X=a,{type:"Number",value:parseInt(W.slice(c,a),10)}}switch(b){case 39:case 34:case 123:case 91:return m();case 36:return p();case 64:return++X,{type:"GlobalsExpression",id:q()};case 126:return++X,{type:"ThisExpression"};default:return q()}}function T(a,b){var c;if(o(),W.charAt(X)===b)return++X,[];for(var d=[];;){if(d.push(a()),o(),c=W.charAt(X),","!==c){if(c===b){++X;break}throw U('Expected "," or "'+b+'"')}++X,o()}return d}function U(a,c){c===b&&(c=X);var d=W.lastIndexOf("<",c-1),f=W.lastIndexOf(">",c-1);d=f>d?f+1:d;var g=W.slice(d,c+10),h=a+" at pos "+c+': "'+g+'"';return new e(h,c,g)}function V(){var a,b=W.indexOf("<",X);return-1===b?(a={type:"JunkEntry",content:W.slice(X)},X=Y,a):(a={type:"JunkEntry",content:W.slice(X,b)},X=b,a)}this.parse=x,this.addEventListener=y,this.removeEventListener=z;var W,X,Y,Z,$,_=100;a?$=w:(Z=new f,$=v)}function e(a,b,c){this.name="ParserError",this.message=a,this.pos=b,this.context=c}var f=a("./events").EventEmitter;d.Error=e,e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,c.Parser=d}),c("l20n/compiler",function(a,c){function d(){function a(a,b){b||(b={});for(var c,d=0;c=a.body[d];d++){var e=Q[c.type];if(e)try{b[c.id.name]=new e(c,b)}catch(f){j(f)}}return b}function c(a){return O=a,!0}function d(a,b){return N.addEventListener(a,b)}function e(a,b){return N.removeEventListener(a,b)}function l(a,b,c,d){var e=new a(b,c,d);return N.emit("error",e),e}function m(a,b){this.id=a.id.name,this.env=b,this.local=a.local||!1,this.index=null,this.attributes=null,this.publicAttributes=null;var c;if(a.index)for(this.index=[],c=0;c<a.index.length;c++)this.index.push(z(a.index[c],this));if(a.attrs)for(this.attributes={},this.publicAttributes=[],c=0;c<a.attrs.length;c++){var d=a.attrs[c];this.attributes[d.key.name]=new n(d,this),d.local||this.publicAttributes.push(d.key.name)}this.value=a.value&&"String"===a.value.type?a.value.content:q(a.value,this,this.index)}function n(a,b){if(this.key=a.key.name,this.local=a.local||!1,this.index=null,a.index){this.index=[];for(var c=0;c<a.index.length;c++)this.index.push(z(a.index[c],this))}this.value=a.value&&"String"===a.value.type?a.value.content:q(a.value,b,this.index),this.entity=b}function o(a,b){this.id=a.id.name,this.env=b,this.local=a.local||!1,this.expression=q(a.expression,this),this.args=a.args}function p(a,b,c){if(!a)return null;if(!R[a.type])throw l("CompilationError","Unknown expression type"+a.type);return c&&(c=c.slice()),R[a.type](a,b,c)}function q(a,b,c){if(!a)return null;var d;return function(e,f,g){return d||(d=p(a,b,c)),d(e,f,g)}}function r(a,c,d){if("string"==typeof a||"boolean"==typeof a||"number"==typeof a||!a)return a;if(a.value!==b)return r(a.value,c,d);if("function"==typeof a){var e=a(c,d);return c=e[0],e=e[1],r(e,c,d)}if(a.expression)throw new g("Uncalled macro: "+a.id);throw new g("Cannot resolve ctxdata or global of type "+typeof a)}function s(a){var b=a.name;return function(a){if(!a.__env__.hasOwnProperty(b))throw new g("Reference to an unknown entry: "+b);return a={__this__:a.__env__[b],__env__:a.__env__},[a,a.__this__]}}function t(){return function(a){return[a,a.__this__]}}function u(a){var b=a.id.name;return function(a,c){if(a.hasOwnProperty(b))return a[b];if(!c||!c.hasOwnProperty(b))throw new g("Reference to an unknown variable: "+b);return[a,c[b]]}}function v(a){var b=a.id.name;return function(a){if(!O)throw new g("No globals set (tried @"+b+")");if(!O.hasOwnProperty(b))throw new g("Reference to an unknown global: "+b);var c;try{c=O[b].get()}catch(d){throw new g("Cannot evaluate global "+b)}return P.globals[b]=!0,[a,c]}}function w(a){return function(b){return[b,a.value]}}function x(a){return function(c,d,e){if(e!==b)throw new g("Cannot get property of a string: "+e);return[c,a.content]}}function y(a,c){for(var d=[],e=0;e<a.content.length;e++)d.push(p(a.content[e],c));return function(){var e=!1;return function(f,i,k){if(k!==b)throw new g("Cannot get property of a string: "+k);if(e)throw new g("Cyclic reference detected");e=!0;var l=[];try{for(var m=0;m<d.length;m++){var n=r(d[m],f,i);if("string"!=typeof n&&"number"!=typeof n)throw new g("Placeables must be strings or numbers");if(n.length>M)throw new g("Placeable has too many characters, maximum allowed is "+M);l.push(n)}}catch(o){throw j(o),new h(o.message,c,a.source)}finally{e=!1}return[f,l.join("")]}}()}function z(a,b){var c=p(a,b);return function(){var a=!1;return function(d,e){if(a)throw new g("Cyclic reference detected");a=!0;var f;try{f=r(c,d,e)}catch(h){if(h instanceof i)throw h;throw j(h),l(i,h.message,b)}finally{a=!1}return[d,f]}}()}function A(a,c,d){for(var e,f={},g=d?d.shift():b,h=0;h<a.content.length;h++){var j=a.content[h];f[j.key.name]=p(j.value,c,d),j.default&&(e=j.key.name)}return function(a,d,h){for(var j=[h,g,e],k=[],m=0;m<j.length;m++){var n=r(j[m],a,d);if(n!==b){if("string"!=typeof n)throw l(i,"Index must be a string",c);if(k.push(n),f.hasOwnProperty(n))return[a,f[n]]}}var o;throw o=k.length?'Hash key lookup failed (tried "'+k.join('", "')+'").':"Hash key lookup failed.",l(i,o,c)}}function B(a,b){if("-"===a)return function(a){if("number"!=typeof a)throw new g("The unary - operator takes a number");return-a};if("+"===a)return function(a){if("number"!=typeof a)throw new g("The unary + operator takes a number");return+a};if("!"===a)return function(a){if("boolean"!=typeof a)throw new g("The ! operator takes a boolean");return!a};throw l(f,"Unknown token: "+a,b)}function C(a,b){if("=="===a)return function(a,b){if(!("number"==typeof a&&"number"==typeof b||"string"==typeof a&&"string"==typeof b))throw new g("The == operator takes two numbers or two strings");return a===b};if("!="===a)return function(a,b){if(!("number"==typeof a&&"number"==typeof b||"string"==typeof a&&"string"==typeof b))throw new g("The != operator takes two numbers or two strings");return a!==b};if("<"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The < operator takes two numbers");return b>a};if("<="===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The <= operator takes two numbers");return b>=a};if(">"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The > operator takes two numbers");return a>b};if(">="===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The >= operator takes two numbers");return a>=b};if("+"===a)return function(a,b){if(!("number"==typeof a&&"number"==typeof b||"string"==typeof a&&"string"==typeof b))throw new g("The + operator takes two numbers or two strings");return a+b};if("-"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The - operator takes two numbers");return a-b};if("*"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The * operator takes two numbers");return a*b};if("/"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The / operator takes two numbers");if(0===b)throw new g("Division by zero not allowed.");return a/b};if("%"===a)return function(a,b){if("number"!=typeof a||"number"!=typeof b)throw new g("The % operator takes two numbers");if(0===b)throw new g("Modulo zero not allowed.");return a%b};throw l(f,"Unknown token: "+a,b)}function D(a,b){if("&&"===a)return function(a,b){if("boolean"!=typeof a||"boolean"!=typeof b)throw new g("The && operator takes two booleans");return a&&b};if("||"===a)return function(a,b){if("boolean"!=typeof a||"boolean"!=typeof b)throw new g("The || operator takes two booleans");return a||b};throw l(f,"Unknown token: "+a,b)}function E(a,b){var c=B(a.operator.token,b),d=p(a.argument,b);return function(a,b){return[a,c(r(d,a,b))]}}function F(a,b){var c=p(a.left,b),d=C(a.operator.token,b),e=p(a.right,b);return function(a,b){return[a,d(r(c,a,b),r(e,a,b))]}}function G(a,b){var c=p(a.left,b),d=D(a.operator.token,b),e=p(a.right,b);return function(a,b){return[a,d(r(c,a,b),r(e,a,b))]}}function H(a,b){var c=p(a.test,b),d=p(a.consequent,b),e=p(a.alternate,b);return function(a,b){var f=r(c,a,b);if("boolean"!=typeof f)throw new g("Conditional expressions must test a boolean");return f===!0?d(a,b):e(a,b)}}function I(a,b){for(var c=p(a.callee,b),d=[],e=0;e<a.arguments.length;e++)d.push(p(a.arguments[e],b));return function(a,b){for(var e=[],f=0;f<d.length;f++)e.push(d[f](a,b));var h=c(a,b);if(a=h[0],h=h[1],!h.expression)throw new g("Expected a macro, got a non-callable.");return h._call(e,b)}}function J(a,c){var d=p(a.expression,c),e=a.computed?p(a.property,c):a.property.name;return function(a,c){var f=r(e,a,c);if("string"!=typeof f)throw new g("Property name must evaluate to a string: "+f);var h=d(a,c);if(a=h[0],h=h[1],h&&h.value!==b){if("function"!=typeof h.value)throw new g("Cannot get property of a "+typeof h.value+": "+f);return h.value(a,c,f)}if("function"==typeof h)return h(a,c,f);if(h&&h.expression)throw new g("Cannot get property of a macro: "+f);if("object"==typeof h){if(null===h)throw new g("Cannot get property of a null: "+f);if(Array.isArray(h))throw new g("Cannot get property of an array: "+f);if(!h.hasOwnProperty(f))throw new g(f+" is not defined on the object.");return[a,h[f]]}throw new g("Cannot get property of a "+typeof h+": "+f)}}function K(a,b){var c=p(a.expression,b),d=a.computed?p(a.attribute,b):a.attribute.name;return function(a,b){var e=r(d,a,b),f=c(a,b);if(a=f[0],f=f[1],!f.attributes)throw new g("Cannot get attribute of a non-entity: "+e);if(!f.attributes.hasOwnProperty(e))throw new g(f.id+" has no attribute "+e);return[a,f.attributes[e]]}}function L(a,b){return p(a.expression,b)}this.compile=a,this.setGlobals=c,this.addEventListener=d,this.removeEventListener=e;var M=2500,N=new k,O=null,P={globals:{}},Q={Entity:m,Macro:o};m.prototype.getString=function(a){try{var b={__this__:this,__env__:this.env};return r(this.value,b,a)}catch(c){throw j(c),c instanceof h&&N.emit("error",c),c}},m.prototype.get=function(a){P.globals={};var b={value:this.getString(a),attributes:{}};if(this.publicAttributes){b.attributes={};for(var c,d=0;c=this.publicAttributes[d];d++)b.attributes[c]=this.attributes[c].getString(a)}return b.globals=P.globals,b},n.prototype.getString=function(a){try{var b={__this__:this.entity,__env__:this.entity.env};return r(this.value,b,a)}catch(c){throw j(c),c instanceof h&&N.emit("error",c),c}},o.prototype._call=function(a,b){var c={__this__:this,__env__:this.env};if(this.args.length!==a.length)throw new g(this.id+"() takes exactly "+this.args.length+" argument(s) ("+a.length+" given)");for(var d=0;d<this.args.length;d++)c[this.args[d].id.name]=a[d];var e=this.expression(c,b);return c=e[0],e=e[1],[c,r(e,c,b)]};var R={Identifier:s,ThisExpression:t,VariableExpression:u,GlobalsExpression:v,Number:w,String:x,Hash:A,HashItem:p,ComplexString:y,UnaryExpression:E,BinaryExpression:F,LogicalExpression:G,ConditionalExpression:H,CallExpression:I,PropertyExpression:J,AttributeExpression:K,ParenthesisExpression:L}}function e(a){this.name="CompilerError",this.message=a}function f(a,b){e.call(this,a),this.name="CompilationError",this.entry=b.id}function g(a){e.call(this,a),this.name="RuntimeError"}function h(a,b,c){g.call(this,a),this.name="ValueError",this.entry=b.id,this.source=c}function i(a,b){g.call(this,a),this.name="IndexError",this.entry=b.id}function j(a){if(!(a instanceof e))throw a}var k=a("./events").EventEmitter;d.Error=e,d.CompilationError=f,d.RuntimeError=g,d.ValueError=h,d.IndexError=i,e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,f.prototype=Object.create(e.prototype),f.prototype.constructor=f,g.prototype=Object.create(e.prototype),g.prototype.constructor=g,h.prototype=Object.create(g.prototype),h.prototype.constructor=h,i.prototype=Object.create(g.prototype),i.prototype.constructor=i,c.Compiler=d}),c("l20n/retranslation",function(a,b){"use strict";function c(){function a(a){var b=new a;this.globals[b.id]=b,b.activate&&(g[b.id]=0,b.addEventListener("change",function(a){for(var c=0;c<f.length;c++)f[c]&&-1!==f[c].globals.indexOf(a)&&f[c].callback({global:b.id})}))}function b(a,b){var c,d;for(c=0;c<h.length;c++)if(h[c].id===a.id){d=!0;break}d?b&&(h[c]=a):h.push(a);var e;for(c=0;c<f.length;c++)if(f[c]&&f[c].id===a.id){e=f[c];break}var i;if(e)if(b)e.callback=a.callback,i=a.globals.filter(function(a){return this.globals[a].activate&&-1===e.globals.indexOf(a)},this),i.forEach(function(a){g[a]++,this.globals[a].activate()},this),e.globals=e.globals.concat(i);else if(0===a.globals.length)delete f[c];else{i=a.globals.filter(function(a){return this.globals[a].activate&&-1===e.globals.indexOf(a)},this),i.forEach(function(a){g[a]++,this.globals[a].activate()},this);var j=e.globals.filter(function(b){return this.globals[b].activate&&-1===a.globals.indexOf(b)
},this);j.forEach(function(a){g[a]--,0===g[a]&&this.globals[a].deactivate()},this),e.globals=a.globals}else 0!==a.globals.length&&(f.push(a),a.globals.forEach(function(a){this.globals[a].activate&&(g[a]++,this.globals[a].activate())},this))}function d(a){for(var b,c=-1,d=0;d<f.length;d++)if(f[d]&&f[d].id===a){b=f[d],c=d;break}if(b)for(b.globals.forEach(function(a){this.globals[a].activate&&(g[a]--,0===g[a]&&this.globals[a].deactivate())},this),f.splice(c,1),d=0;d<h.length;d++)if(h[d].id===a){h.splice(d,1);break}}function e(a){for(var b=0;b<h.length;b++)h[b].callback({locales:a})}var f=[],g={},h=[];this.bindGet=b,this.unbindGet=d,this.all=e,this.globals={},c._constructors.forEach(function(b){a.call(this,b)},this)}c._constructors=[],c.registerGlobal=function(a){c._constructors.push(a)},c.deregisterGlobal=function(a){var b=c._constructors.indexOf(a);-1!==b&&c._constructors.splice(b,1)},b.RetranslationManager=c}),c("l20n/platform/globals",function(b,c){"use strict";function d(){this.id=null,this._emitter=new h,this.value=null,this.isActive=!1}function e(){function b(){return{width:{px:document.body.clientWidth}}}function c(){e.value=b(),e._emitter.emit("change",e.id)}d.call(this),this.id="screen",this._get=b,this.activate=function(){this.isActive||(a.addEventListener("resize",c),this.isActive=!0)},this.deactivate=function(){a.removeEventListener("resize",c),this.value=null,this.isActive=!1};var e=this}function f(){function a(){return/^MacIntel/.test(navigator.platform)?"mac":/^Linux/.test(navigator.platform)?"linux":/^Win/.test(navigator.platform)?"win":"unknown"}d.call(this),this.id="os",this.get=a}function g(){function a(){var a=new Date;return a.getHours()}function b(){var a=new Date;a.getHours()!==c.value&&(c.value=a.getHours(),c._emitter.emit("change",c.id))}d.call(this),this.id="hour",this._get=a,this.activate=function(){if(!this.isActive){var a=new Date;f=setTimeout(function(){b(),f=setInterval(b,e)},e-a.getTime()%e),this.isActive=!0}},this.deactivate=function(){clearInterval(f),this.value=null,this.isActive=!1};var c=this,e=36e5,f=null}var h=b("../events").EventEmitter,i=b("../retranslation").RetranslationManager;d.prototype._get=function(){throw new Error("Not implemented")},d.prototype.get=function(){return this.value&&this.isActive||(this.value=this._get()),this.value},d.prototype.addEventListener=function(a,b){if("change"!==a)throw"Unknown event type";this._emitter.addEventListener(a,b)},e.prototype=Object.create(d.prototype),e.prototype.constructor=e,f.prototype=Object.create(d.prototype),f.prototype.constructor=f,g.prototype=Object.create(d.prototype),g.prototype.constructor=g,i.registerGlobal(e),i.registerGlobal(f),i.registerGlobal(g),c.Global=d}),c("l20n/platform/io",function(a,b){"use strict";function c(a){this.name="IOError",this.message=a}b.load=function(a,b,d){var e=new XMLHttpRequest;e.overrideMimeType&&e.overrideMimeType("text/plain"),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status||0===e.status)b(null,e.responseText);else{var d=new c("Not found: "+a);b(d)}},e.open("GET",a,!d),e.send("")},c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,b.Error=c}),c("l20n/intl",function(a,c){"use strict";function d(a){if(!o.test(a))return!1;if(a.startsWith("x-"))return!0;var b=a.indexOf("-x-");return-1!==b&&(a=a.substring(0,b)),!p.test(a)&&!q.test(a)}function e(a){if(a=a.toLowerCase(),l&&l.hasOwnProperty(a))return l[a];for(var b=a.split("-"),c=0;c<b.length;){var d=b[c];if(1===d.length&&(c>0||"x"===d))break;4===d.length?d=d[0].toUpperCase()+d.substring(1):0!==c&&2===d.length&&(d=d.toUpperCase()),m.hasOwnProperty(d)?d=m[d]:n.hasOwnProperty(d)&&(d=n[d].preferred,1===c&&n[d].prefix===b[0]&&(b.shift(),c--)),b[c]=d,c++}for(var e=b.slice(0,c).join("-"),f=[];c<b.length&&"x"!==b[c];){var g=c;for(c++;c<b.length&&b[c].length>1;)c++;var h=sybtags.slice(g,c).join("-");f.push(h)}f.sort();var i="";c<b.length&&(i=b.slice(c).join("-"));var j=e;return f.length>0&&(j+="-"+f.join("-")),i.length>0&&(j.length>0?j+="-"+i:j=i),j}function f(a){if(a===b)return[];var c=[];"string"==typeof a&&(a=[a]);for(var f=a,g=f.length,h=0;g>h;){var i=h in f;if(i){var j=f[h];"string"!=typeof j&&"object"!=typeof j&&ThrowError(JSMSG_INVALID_LOCALES_ELEMENT);var k=j;d(k)||ThrowError(JSMSG_INVALID_LANGUAGE_TAG,k),k=e(k),-1===c.indexOf(k)&&c.push(k)}h++}return c}function g(a,c){for(var d=c;;){if(-1!==a.indexOf(d))return d;var e=d.lastIndexOf("-");if(-1===e)return b;e>=2&&"-"===d[e-2]&&(e-=2),d=d.substring(0,e)}}function h(a,c){for(var d=c.length,e=[],f=0;d>f;){var h=c[f],i=h.replace(k,""),j=g(a,i);j!==b&&e.push(j),f++}return e.slice(0)}function i(a,b,c){a=f(a),b=f(b);var d=h(a,b);return c?(c=e(c),-1===d.indexOf(c)&&d.push(c),d):d}String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(a,b){return b=b||0,this.indexOf(a,b)===b}});var j="-u(-[a-z0-9]{2,8})+",k=(new RegExp(j),new RegExp(j,"g")),l={},m={},n={},o=function(){var a="[a-zA-Z]",b="[0-9]",c="(?:"+a+"|"+b+")",d="(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)",e="(?:en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)",f="(?:"+e+"|"+d+")",g="(?:x(?:-[a-z0-9]{1,8})+)",h="(?:"+b+"|[A-WY-Za-wy-z])",i="(?:"+h+"(?:-"+c+"{2,8})+)",j="(?:"+c+"{5,8}|(?:"+b+c+"{3}))",k="(?:"+a+"{2}|"+b+"{3})",l="(?:"+a+"{4})",m="(?:"+a+"{3}(?:-"+a+"{3}){0,2})",n="(?:"+a+"{2,3}(?:-"+m+")?|"+a+"{4}|"+a+"{5,8})",o=n+"(?:-"+l+")?(?:-"+k+")?(?:-"+j+")*(?:-"+i+")*(?:-"+g+")?",p="^(?:"+o+"|"+g+"|"+f+")$";return new RegExp(p,"i")}(),p=function(){var a="[a-zA-Z]",b="[0-9]",c="(?:"+a+"|"+b+")",d="(?:"+c+"{5,8}|(?:"+b+c+"{3}))",e="(?:"+c+"{2,8}-)+("+d+")-(?:"+c+"{2,8}-)*\\1(?!"+c+")";return new RegExp(e)}(),q=function(){var a="[a-zA-Z]",b="[0-9]",c="(?:"+a+"|"+b+")",d="(?:"+b+"|[A-WY-Za-wy-z])",e="-("+d+")-(?:"+c+"+-)*\\1(?!"+c+")";return new RegExp(e)}();c.Intl={prioritizeLocales:i}}),a.L20n=h("l20n"),h("l20n/html")}(window);
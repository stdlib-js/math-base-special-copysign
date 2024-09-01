// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,u=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,u,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function U(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,s,l,p,u,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-u.length)<0?u:u=g?u+m(d):m(d)+u)),f+=n.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var I,O=Object.prototype,T=O.toString,V=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,H=O.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};var W,C=I,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),P=Object.prototype.toString,R=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,N="function"==typeof Z?Z.toStringTag:"";W=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return P.call(r);t=r[N],a=N,e=null!=(i=r)&&R.call(i,a);try{r[N]=void 0}catch(e){return P.call(r)}return n=P.call(r),e?r[N]=t:delete r[N],n}:function(r){return P.call(r)};var X,z=W,M="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=X,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,Y="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,NaN]),t=e,r=(K&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var rr,er=D,tr="function"==typeof Uint8Array,nr="function"==typeof Uint8Array?Uint8Array:null,ir="function"==typeof Uint8Array?Uint8Array:void 0;rr=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,256,257]),t=e,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,cr="function"==typeof Uint16Array,fr="function"==typeof Uint16Array?Uint16Array:null,sr="function"==typeof Uint16Array?Uint16Array:void 0;ar=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:ar,uint8:or};(lr=new pr.uint16(1))[0]=4660;var ur,yr,gr=52===new pr.uint8(lr.buffer)[0];!0===gr?(ur=1,yr=0):(ur=0,yr=1);var dr={HIGH:ur,LOW:yr},hr=new er(1),wr=new J(hr.buffer),br=dr.HIGH,vr=dr.LOW;function mr(r,e,t,n){return hr[0]=r,e[n]=wr[br],e[n+t]=wr[vr],e}function Ar(r){return mr(r,[0,0],1,0)}C(Ar,"assign",{configurable:!1,enumerable:!1,writable:!1,value:mr});var _r,Ur,Er=!0===gr?1:0,Sr=new er(1),xr=new J(Sr.buffer);!0===gr?(_r=1,Ur=0):(_r=0,Ur=1);var kr={HIGH:_r,LOW:Ur},jr=new er(1),Fr=new J(jr.buffer),Ir=kr.HIGH,Or=kr.LOW,Tr=[0,0];return function(r,e){var t,n,i,a;return Ar.assign(r,Tr,1,0),t=Tr[0],t&=2147483647,n=function(r){return Sr[0]=r,xr[Er]}(e),i=t|=n&=2147483648,a=Tr[1],Fr[Ir]=i,Fr[Or]=a,jr[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).copysign=e();
//# sourceMappingURL=browser.js.map

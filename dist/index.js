"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=o(function(h,t){
var v=require('@stdlib/constants-float64-high-word-sign-mask/dist'),n=require('@stdlib/constants-float64-high-word-abs-mask/dist'),q=require('@stdlib/number-float64-base-to-words/dist'),S=require('@stdlib/number-float64-base-get-high-word/dist'),c=require('@stdlib/number-float64-base-from-words/dist'),s=[0,0];function g(i,r){var e,a;return q.assign(i,s,1,0),e=s[0],e&=n,a=S(r),a&=v,e|=a,c(e,s[1])}t.exports=g
});var W=u();module.exports=W;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

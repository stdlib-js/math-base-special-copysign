// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@esm/index.mjs";var r=s,d=t,m=e,o=[0,0];var n=function(s,t){var e,n;return r(o,s),e=o[0],e&=2147483647,n=d(t),m(e|=n&=2147483648,o[1])};export{n as default};
//# sourceMappingURL=index.mjs.map

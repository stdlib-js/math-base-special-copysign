// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@esm/index.mjs";var r=[0,0];function d(d,m){var o,n;return s(r,d),o=r[0],o&=2147483647,n=t(m),e(o|=n&=2147483648,r[1])}export{d as default};
//# sourceMappingURL=index.mjs.map

<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# copysign

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-copysign
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var copysign = require( '@stdlib/math-base-special-copysign' );
```

#### copysign( x, y )

Returns a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```javascript
var z = copysign( -3.14, 10.0 );
// returns 3.14

z = copysign( 3.14, -1.0 );
// returns -3.14

z = copysign( 1.0, -0.0 );
// returns -1.0

z = copysign( -3.14, -0.0 );
// returns -3.14

z = copysign( -0.0, 1.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE754][ieee754] standard, a `NaN` has a biased exponent equal to `2047`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`; otherwise, behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var copysign = require( '@stdlib/math-base-special-copysign' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );
var y = uniform( 100, -5.0, 5.0, opts );

// Generate random double-precision floating-point numbers `x` and `y` and copy the sign of `y` to `x`...
logEachMap( 'x: %0.4f, y: %0.4f => %0.4f', x, y, copysign );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/copysign.h"
```

#### stdlib_base_copysign( x, y )

Returns a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```c
double v = stdlib_base_copysign( -3.14, 10.0 );
// returns 3.14

v = stdlib_base_copysign( 3.14, -1.0 );
// returns -3.14
```

The function accepts the following arguments:

-   **x**: `[in] double` number from which to derive a magnitude.
-   **y**: `[in] double` number from which to derive a sign.

```c
double stdlib_base_copysign( const double x, const double y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/copysign.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_copysign( x[ i ], -3.0 );
        printf( "copysign(%lf, %lf) = %lf\n", x[ i ], -3.0, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/flipsign`][@stdlib/math/base/special/flipsign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of x and the sign of x\*y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-copysign.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-copysign

[test-image]: https://github.com/stdlib-js/math-base-special-copysign/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-copysign/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-copysign/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-copysign?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-copysign.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-copysign/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-copysign/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-copysign/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-copysign/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-copysign/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-copysign/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-copysign/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-copysign/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-copysign/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/flipsign]: https://github.com/stdlib-js/math-base-special-flipsign

<!-- </related-links> -->

</section>

<!-- /.links -->

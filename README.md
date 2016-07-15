# windows-874 [![Build status](https://travis-ci.org/mathiasbynens/windows-874.svg?branch=master)](https://travis-ci.org/mathiasbynens/windows-874) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/windows-874/badge.svg)](https://coveralls.io/r/mathiasbynens/windows-874) [![Dependency status](https://gemnasium.com/mathiasbynens/windows-874.svg)](https://gemnasium.com/mathiasbynens/windows-874)

_windows-874_ is a robust JavaScript implementation of [the windows-874 character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#windows-874).

This encoding is known under the following names: dos-874, iso-8859-11, iso8859-11, iso885911, tis-620, and windows-874.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install windows-874
```

In a browser:

```html
<script src="windows-874.js"></script>
```

In [Node.js](https://nodejs.org/), [io.js](https://iojs.org/), [Narwhal](http://narwhaljs.org/), and [RingoJS](http://ringojs.org/):

```js
var windows874 = require('windows-874');
```

In [Rhino](https://www.mozilla.org/rhino/):

```js
load('windows874.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'windows-874': 'path/to/windows-874'
    }
  },
  ['windows-874'],
  function(windows874) {
    console.log(windows874);
  }
);
```

## API

### `windows874.version`

A string representing the semantic version number.

### `windows874.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `windows874.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to windows-874. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per windows-874.

```js
const encodedData = windows874.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
const encodedData = windows874.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in windows-874,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `windows874.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to windows-874.

```js
const text = windows874.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = windows874.decode(encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the windows-874 encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

For decoding a buffer (e.g. from `fs.readFile`) use `buffer.toString('binary')` to get the byte string which `decode` takes.

## Support

_windows-874_ is designed to work in at least Node.js v0.10.0, io.js v1.0.0, Narwhal 0.3.2, RingoJS 0.8-0.11, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, Edge, and Internet Explorer.

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_windows-874_ is available under the [MIT](https://mths.be/mit) license.

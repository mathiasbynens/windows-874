# windows-874 [![Build status](https://github.com/mathiasbynens/windows-874/workflows/run-checks/badge.svg)](https://github.com/mathiasbynens/windows-874/actions?query=workflow%3Arun-checks) [![windows-874 on npm](https://img.shields.io/npm/v/windows-874)](https://www.npmjs.com/package/windows-874)

_windows-874_ is a robust JavaScript implementation of [the windows-874 character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#windows-874).

This encoding is known under the following names: dos-874, iso-8859-11, iso8859-11, iso885911, tis-620, and windows-874.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install windows-874
```

In a browser or in [Node.js](https://nodejs.org/):

```js
import {encode, decode, labels} from 'windows-874';
// or…
import * as windows874 from 'windows-874';
```

## API

### `windows874.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `windows874.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to windows-874. The return value is an environment-agnostic `Uint16Array` of which each element represents an octet as per windows-874.

```js
const encodedData = windows874.encode(text);
```

The optional `options` object and its `mode` property can be used to set the error mode. The two available error modes are `'fatal'` (the default) or `'replacement'`. (Note: This differs from [the spec](https://encoding.spec.whatwg.org/#error-mode), which recognizes “fatal” and HTML” modes for encoders. The reason behind this difference is that the spec algorithm is aimed at producing HTML, whereas this library encodes into an environment-agnostic `Uint16Array` of bytes.)

```js
const encodedData = windows874.encode(text, {
  mode: 'replacement'
});
// If `text` contains a symbol that cannot be represented in windows-874,
// instead of throwing an error, it becomes 0xFFFD.
```

### `windows874.decode(input, options)`

This function decodes `input` according to windows-874. The `input` parameter can either be a `Uint16Array` of which each element represents an octet as per windows-874, or a ‘byte string’ (i.e. a string of which each item represents an octet as per windows-874).

```js
const text = windows874.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = windows874.decode(encodedData, {
  mode: 'fatal'
});
// If `encodedData` contains an invalid byte for the windows-874 encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_windows-874_ is available under the [MIT](https://mths.be/mit) license.

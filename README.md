# fast-sound

A collection of emscripten-compiled libraries: opus and speexdsp.
It's a low-level library, exposing the native
[Emscripten](https://github.com/kripken/emscripten) interface.
You should be familiar with it.


### Motivation:

* Use both encoder/decoder/resampler in a single bundle
* Compile latest libraries with latest emscripten
* Integrate libraries into existing building systems, such as Webpack or Browserify
* Enable WebAssembly support by default with a fallback to ASM.js
* Usage of the same assets in different projects for better caching
* Provide an ability to load either production or development build
* Ability to fork the library and use it as a dependency from a git repo

### Install

```
npm install --save fast-sound
```

or

```
yarn add fast-sound
```

### Usage

The library exposes the same interface as Emscripten
[MODULARIZE](https://github.com/kripken/emscripten/blob/incoming/src/settings.js#L790) does.

Use

```js
// require production build
const FastSound = requrie('fast-sound')

FastSound({}).then(function(lib) {
  const errReference = lib._malloc( 4 );
  const decoder = lib._opus_decoder_create( decoderSampleRate, numberOfChannels, errReference );
  lib._free( errReference );
});
```

The library loads asynchroniously either WASM binary file or ASM.js fallback.
By default, it will look at the same folder as the original script. You can pass
`locateFile` function to correctly resolve paths:

```js
function locateFile(file) {
  return "/assemblies/" + file;
}

FastSound({locateFile: locateFile}).then(function(lib) {
   // ...
});
```

All options passed to `FastSound` goes to Emscripten without a change.
The only difference is `method` option, which can be `wasm` either `asm.js`.
It forces the selected method:

```js
// Loads ASM.js despite the WebAssembly browser support
FastSound({method: 'asm.js'}).then(function(lib) {
   // ...
});
```

For development build require the library as further:

```js
// require development build
const FastSound = requrie('fast-sound/unminified')
```

### Current build

There is both production and development builds:

* Compiled with emscripten 1.39.18-fastcomp (released 13th of Jun 2020)
* encoder/decoder from [`opus`](https://opus-codec.org/) [v1.3.1](https://github.com/xiph/opus/releases/tag/v1.3.1) (released 13th of Apr 2019)
* a resampler from [`speexdsp`](https://speex.org/) [v1.2.0](https://github.com/xiph/speexdsp/releases/tag/SpeexDSP-1.2.0) (released 29th of May 2019)

### Credits

* Based on https://github.com/chris-rudmin/opus-recorder

# fast-sound

A collection of emscripten-compiled libraries: opus and speexdsp


### Motivation:

* Use both encoder/decoder/resampler in a single bundle
* Compile latest libraries with latest emscripten
* Integrate libraries into existing building systems, such as Webpack or Browserify
* Enable WebAssembly support by default with a fallback to ASM.js
* Usage of the same assets in different projects for better caching
* Provide an ability to load either production or development build
* Ability to fork the library and use it as a depepndency from a git repo

### Install

```
npm install --save fast-sound
```

or

```
yarn add fast-sound
```

### Usage

Use

```
// require production build
const FastSound = requrie('fast-sound')
```

or

```
// require development build
const FastSound = requrie('fast-sound/unminified')
```

### Current build

There is both production and development builds:

* Compiled with emscripten 1.38.13-64bit (released 11th of Oct 2018)
* encoder/decoder from (https://opus-codec.org/)[`opus`] v1.3 (released 18th of Oct 2018)
* a resampler from (https://speex.org/)[`speexdsp`] (git 6b539e0, 15th of Sep 2018)

### Credits

* Based on https://github.com/chris-rudmin/opus-recorder

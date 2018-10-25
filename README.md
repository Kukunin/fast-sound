# fast-sound

A collection of emscripten-compiled libraries: opus and speexdsp


### Motivation:

* Use both encoder/decoder/resampler in a single bundle
* Compile latest libraries with latest emscripten
* Integrate libraries into existing building systems, such as Webpack or Browserify
* Enable WebAssembly support by default with a fallback to ASM.js

### Current build

There is a whole bundle of opus encoder/decoder and resampler using speexdsp lib
available, compiled with emscripten 1.38.13-64bit.

### Credits

* Based on https://github.com/chris-rudmin/opus-recorder

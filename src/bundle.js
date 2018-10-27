const WASM = require('../unminified/fast-sound.js');
const Loader = require('./loader.js');

module.exports = Loader(WASM, 'fast-sound.asm.js');

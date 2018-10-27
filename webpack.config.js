module.exports = {
  output: {
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    libraryTarget: 'umd'
  },
  externals: {
    fs: true
  },
  node: {
    process: false,
    Buffer: false,
    setImmediate: false
  },
};

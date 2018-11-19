module.exports = function(wasmObject, asmjsFilename) {
  return function(options) {
    options = options || {};

    if("object" === typeof WebAssembly && options['method'] !== 'asm.js') {
      return wasmObject(options);
    } else {
      const readAsync = function(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
            return;
          }
          onerror();
        };
        xhr.onerror = onerror;
        xhr.send(null);
      };

      if('locateFile' in options) {
        asmjsFilename = options['locateFile'](asmjsFilename);
      }

      return new Promise(function(resolve, reject) {
        readAsync(asmjsFilename, function(script) {
          const exports = {};
          var module = eval(script);
          module(options).then(function(lib) {
            // to avoid infinite resolving loop
            lib.then = undefined;
            resolve(lib);
          });
        });
      });
    }
  };
};

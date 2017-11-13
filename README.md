## node-browser-builtins

Provides the Browserify builtins through a single package dependency.

Exports a single resolver method.

```js
const resolveBuiltin = require('node-browser-builtins');
resolveBuiltin('fs'); // -> "@empty"
resolveBuiltin('zlib'); // -> "/<..>/node-browser-builtins/node_modules/browserify-zlib/lib/index.js"
resolveBuiltin('asdf'); // throws code "MODULE_NOT_FOUND" error
```

Resolution is done lazily so there is no resolve boot cost for requiring this dependency.
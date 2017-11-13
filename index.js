const builtinSources = {
  assert: { name: 'assert/', resolved: undefined },
  buffer: { name: 'buffer/', resolved: undefined },
  child_process: { name: '@empty', resolved: undefined },
  cluster: { name: '@empty', resolved: undefined },
  console: { name: 'console-browserify', resolved: undefined },
  constants: { name: 'constants-browserify', resolved: undefined },
  crypto: { name: 'crypto-browserify', resolved: undefined },
  dgram: { name: '@empty', resolved: undefined },
  dns: { name: '@empty', resolved: undefined },
  domain: { name: 'domain-browser', resolved: undefined },
  events: { name: 'events/', resolved: undefined },
  fs: { name: '@empty', resolved: undefined },
  http: { name: 'stream-http', resolved: undefined },
  https: { name: 'https-browserify', resolved: undefined },
  module: { name: '@empty', resolved: undefined },
  net: { name: '@empty', resolved: undefined },
  os: { name: 'os-browserify/browser.js', resolved: undefined },
  path: { name: 'path-browserify', resolved: undefined },
  process: { name: 'process/browser.js', resolved: undefined },
  punycode: { name: 'punycode/', resolved: undefined },
  querystring: { name: 'querystring-es3/', resolved: undefined },
  readline: { name: '@empty', resolved: undefined },
  repl: { name: '@empty', resolved: undefined },
  stream: { name: 'stream-browserify', resolved: undefined },
  _stream_duplex: { name: 'readable-stream/duplex.js', resolved: undefined },
  _stream_passthrough: { name: 'readable-stream/passthrough.js', resolved: undefined },
  _stream_readable: { name: 'readable-stream/readable.js', resolved: undefined },
  _stream_transform: { name: 'readable-stream/transform.js', resolved: undefined },
  _stream_writable: { name: 'readable-stream/writable.js', resolved: undefined },
  string_decoder: { name: 'string_decoder', resolved: undefined },
  sys: { name: 'util/util.js', resolved: undefined },
  timers: { name: 'timers-browserify', resolved: undefined },
  tls: { name: '@empty', resolved: undefined },
  tty: { name: 'tty-browserify', resolved: undefined },
  url: { name: 'url/', resolved: undefined },
  util: { name: 'util/util.js', resolved: undefined },
  vm: { name: 'vm-browserify', resolved: undefined },
  zlib: { name: 'browserify-zlib', resolved: undefined }
};

exports.resolveBuiltin = function (builtinName) {
  const builtinSource = builtinSources[resolved];
  if (builtinSource.resolved === undefined)
    builtinSource.resolved = require.resolve(builtinSource.name);
  return builtinSource.resolved;
};
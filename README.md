# modulepaths

A browserify transform to output the current module path in a comment at the top of the module definition. Useful for debugging without sourcemaps.

# install

With [npm](https://npmjs.org) do:

```
npm install modulepaths
```

then use `-t modulepaths` with the browserify command or use `.transform('modulepaths')` from
the browserify api.

# example

Here is what some bundled code will look like (this is in the middle of the bundle somewhere). Notice the `// ===== FILE:` comments (the paths are relative to where you run the browserify command):

```
// more bundle code above

},{"./some/path/b":3}],2:[function(require,module,exports){
// ===== FILE: ./d.js =====
module.exports = function() {
    console.log("stuff");
};

},{}],3:[function(require,module,exports){
// ===== FILE: ./some/path/b.js =====
var d = require('../../d');

module.exports = function() {
    d();
};

// more bundle code below
```

# license

MIT

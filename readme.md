WebGL context minimal shim for node.

Useful to make [stackgl](https://github.com/stackgl) components not fail in node.

```js
var Shader = require('gl-shader');
var gl = require('nogl')();
var glslify = require('glslify-sync');
var createProcessor = require('nogl-shader-output');

var shader = Shader(gl, glslify('./vertex.glsl'), glslify('./fragment.glsl'));

var draw = createProcessor(shader);

draw({
	size: [10, 20]
});
```

API is compatible with [webgl-context](https://www.npmjs.com/package/webgl-context).

If you need real webgl, use [headless-js](https://github.com/stackgl/headless-gl).

For practical use-case look [nogl-shader-output](https://npmjs.org/package/nogl-shader-output).

Heavily inspired by [emscripten headlessCanvas](https://github.com/kripken/emscripten/blob/master/src/headlessCanvas.js).
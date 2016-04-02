var Shader = require('gl-shader');
var Framebuffer = require('gl-fbo');
var createContext = require('./');

var gl = createContext();

var shader = Shader(gl, `
	void main () {

	}
`, `
	void main () {

	}
`);

var framebuffer = Framebuffer(gl, [100, 100]);
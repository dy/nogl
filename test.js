var assert = require('assert');
var test = require('tst');
var createContext = require('./');
var Shader = require('gl-shader');
var Framebuffer = require('gl-fbo');
var Buffer = require('gl-buffer');
var VAO = require('gl-vao');
var Texture = require("gl-texture2d")
var drawTriangle = require("a-big-triangle")
var baboon = require("baboon-image")

var gl = createContext();

test('gl-shader', function () {
	var shader = Shader(gl, `
		void main () {

		}
	`, `
		void main () {

		}
	`);

	assert(shader.fragShader != null);
	assert(shader.vertShader != null);
});


test('gl-fbo', function () {
	var framebuffer = Framebuffer(gl, [100, 100]);
	assert(framebuffer);
});

test('gl-buffer', function () {
	var buffer = Buffer(gl, [-1, 0, 0, -1, 1, 1]);
	assert(buffer);
});

test('gl-vao', function () {
	var vao = VAO(gl, {
		"buffer": Buffer(gl, [-1, 0, 0, -1, 1, 1]),
		"type": gl.FLOAT,
		"size": 2
	}, [0.8, 1, 0.5]);

	//FIXME
	// vao.bind()
	// gl.drawArrays(gl.TRIANGLES, 0, 3)
	// vao.unbind()

	assert(vao);
});

test('gl-texture2d', function () {
	var texture = Texture(gl, baboon)
	var shader = Shader(gl, "\
		attribute vec2 position;\
		varying vec2 texCoord;\
		void main() {\
			gl_Position = vec4(position, 0, 1);\
			texCoord = vec2(0.0,1.0)+vec2(0.5,-0.5) * (position + 1.0);\
		}", "\
		precision highp float;\
		uniform sampler2D texture;\
		varying vec2 texCoord;\
		void main() {\
			gl_FragColor = texture2D(texture, texCoord);\
		}");

	//FIXME
	// shader.attributes.position.location = 0
	shader.bind()
	shader.uniforms.texture = texture.bind()

	// drawTriangle(gl)
});
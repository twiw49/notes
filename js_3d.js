var backgroundColour = color(255, 255, 255);
var nodeColour = color(40, 168, 107);
var edgeColour = color(34, 68, 204);
var nodeSize = 8;

var Cuboid = function(config) {
	this.nodes = [[config.x, config.y, config.z],
		[config.x, config.y, config.z+config.d],
		[config.x, config.y+config.h, config.z],
		[config.x, config.y+config.h, config.z+config.d],
		[config.x+config.w, config.y, config.z],
		[config.x+config.w, config.y, config.z+config.d],
		[config.x+config.w, config.y+config.h, config.z],
		[config.x+config.w, config.y+config.h, config.z+config.d]];
	this.edges = [[0, 1], [1, 3], [3, 2], [2, 0],
                 [4, 5], [5, 7], [7, 6], [6, 4],
                 [0, 4], [1, 5], [2, 6], [3, 7]];
};

Cuboid.prototype.rotateZ3D = function(theta) {
	var sinTheta = sin(theta);
	var cosTheta = cos(theta);

	for (var n =0; n<this.nodes.length; n++) {
		var node = this.nodes[n];
		var x = node[0];
		var y = node[1];
		node[0] = x*cosTheta - y*sinTheta;
		node[1] = y*cosTheta + x*sinTheta;
	}
};

Cuboid.prototype.rotateY3D = function(theta) {
	var sinTheta = sin(theta);
	var cosTheta = cos(theta);

	for (var n =0; n<this.nodes.length; n++) {
		var node = this.nodes[n];
		var x = node[0];
		var z = node[2];
		node[0] = x*cosTheta - z*sinTheta;
		node[2] = z*cosTheta + x*sinTheta;
	}
};

Cuboid.prototype.rotateX3D = function(theta) {
	var sinTheta = sin(theta);
	var cosTheta = cos(theta);

	for (var n =0; n<this.nodes.length; n++) {
		var node = this.nodes[n];
		var y = node[1];
		var z = node[2];
		node[1] = y*cosTheta - z*sinTheta;
		node[2] = z*cosTheta + y*sinTheta;
	}
};

Cuboid.prototype.draw = function() {
	var nodes, edges;
	stroke(edgeColour);

	nodes = this.nodes;
	edges = this.edges;

	for (var e=0; e<edges.length; e++) {
		var n0 = edges[e][0];
		var n1 = edges[e][1];
		var node0 = nodes[n0];
		var node1 = nodes[n1];
		line(node0[0], node0[1], node1[0], node1[1]);
	}

	fill(nodeColour);
	noStroke();
	for (var n=0; n<nodes.length; n++) {
		var node = nodes[n];
		ellipse(node[0], node[1], nodeSize, nodeSize);
	}
};

var shape1 = new Cuboid({
	x: -120,
	y: -20,
	z: -20,
	w: 240,
	h: 40,
	d: 40
});

var shape2 = new Cuboid({
	x:  -120,
	y: -50,
	z: -30,
	w: -20,
	h: 100,
	d: 60
});

var shape3 = new Cuboid({
	x: 120,
	y: -50,
	z: -30,
	w: 20,
	h: 100,
	d: 60
});

var shapes = [shape1, shape2, shape3];

draw = function() {
    background(backgroundColour);
    for (var n=0; n<3; n++) {
        shapes[n].draw();
    }
};

mouseDragged = function() {
    var dx = mouseX - pmouseX;
    var dy = mouseY - pmouseY;
    
    for (var n=0; n<3; n++) {
        shapes[n].rotateY3D(dx);
        shapes[n].rotateX3D(dy);
    }
};

translate(200,200);
////////// scene changes

var curentScene;

mouseClicked = function() {
	if (currentScene === 1) {
		drawScene2();
	} else if (currentScene === 2) {
		drawScene3();
	} else if (currentScene === 3) {
		drawScene1();
	}
};

var drawScene1 = function() {
	currentScene = 1;
	...
};

var drawScene2 = function() {
	currentScene = 1;
	...
};

var drawScene3 = function() {
	currentScene = 1;
	...
};

/////////////

var currentScene;

var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("The Story of Winston", 10, height/2);
};

var drawScene2 = function() {
    currentScene = 2;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Lil Winston is born!", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
};

var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston grows up!", 10, 100);
    image(getImage("creatures/Winston"), width/2, height/2);
};

var drawScene4 = function() {
    currentScene = 4;
    
    background(194, 255, 222);
    
    var x = cos(millis()*1); 
    var y = cos(millis()+98);
    
    // face
    image(getImage("creatures/Winston"),x+177, x+101,50, 50);
    
    // body
    strokeWeight(2);
    line(202, 213, x+203, x+150);
    line(x+220, x*20+266, 202, 213);
    line(x+188, x*2+266, 202, 213);
    line(x+167, x*20+150, 204, 169);
    line(y+164,y*20+148,204, 168);
    
    // drum set
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(162, 176, 54, 15);
    line(161, 264, 161, 184);
    line(134, 275, 162, 255);
    line(185, 275,162, 257);
    fill(0, 0, 0);
    ellipse(226, 268, 65, 65);
    fill(255, 255, 255);
    ellipse(226, 268, 60, 60);
};

mouseClicked = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    } else if (currentScene === 4) {
        drawScene1();
    }
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
};

drawScene1();


////////// INTERACTIVE SCENES

var currentScene;

var drawButton = function() {
    fill(81, 166, 31);
    rect(340, 10, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("NEXT", 344, 29);
};

var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("The Story of Winston", 10, height/2);
};

var drawScene2 = function() {
    currentScene = 2;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Lil Winston is born!", 10, 100);
    image(getImage("creatures/BabyWinston"), width/2, height/2);
};

var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston grows up!", 10, 100);
    image(getImage("creatures/Winston"), width/2, height/2);
};

var drawScene4 = function() {
    currentScene = 4;
    background(194, 255, 222);
    
    var x = cos(millis()*1); 
    var y = cos(millis()+98);
    
    // face
    image(getImage("creatures/Winston"),x+177, x+101,50, 50);
    
    // body
    strokeWeight(2);
    line(202, 213, x+203, x+150);
    line(x+220, x*20+266, 202, 213);
    line(x+188, x*2+266, 202, 213);
    line(x+167, x*20+150, 204, 169);
    line(y+164,y*20+148,204, 168);
    
    // drum set
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(162, 176, 54, 15);
    line(161, 264, 161, 184);
    line(134, 275, 162, 255);
    line(185, 275,162, 257);
    fill(0, 0, 0);
    ellipse(226, 268, 65, 65);
    fill(255, 255, 255);
    ellipse(226, 268, 60, 60);
};

var drawScene5 = function() {
    currentScene = 5;
    
    // Based on https://www.khanacademy.org/cs/drums/6586586242744320
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston has babies!", 10, 47);
    textSize(17);
    text("Drag to make more babies", 10, 78);
    
    image(getImage("creatures/Winston"), 21, 183);
    fill(71, 71, 71);
    rect(32, 185, 108, 15);
    rect(46, 126, 82, 60);
    
    image(getImage("creatures/BabyWinston"), 195, 250);
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
    drawButton();
};

mouseClicked = function() {
    if (mouseX >= 340 && mouseY <= 45) {
        if (currentScene === 1) {
            drawScene2();
        } else if (currentScene === 2) {
            drawScene3();
        } else if (currentScene === 3) {
            drawScene4();
        }  else if (currentScene === 4) {
            drawScene5();
        } else if (currentScene === 5) {
            drawScene1();
        }
        drawButton();
    } else {
        if (currentScene === 5) {
            image(getImage("creatures/BabyWinston"), mouseX-20, mouseY-20);
        }
    }
};

drawScene1();
drawButton();

///////// BUTTON

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var btn1 = new Button({
    x: 100,
    y: 100,
    label: "Please click!",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    }
});
btn1.draw();

var btn2 = new Button({
    x: 100,
    y: 213,
    label: "No! Click ME!",
    onClick: function() {
        text("Yay, you picked me!", this.x, this.y+this.height);
    }
});
btn2.draw();

mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
};

///////////////

angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;

var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function() {
    //draw sun rays
    for(var i=0; i<12; i++) {
        pushMatrix();
        translate(200,200);
        rotate(i*30);
        drawSunRay();
        popMatrix();
    }
    
    //draw center of sun
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width/2, height/2, sunDiameter, sunDiameter);
};

//draw background
background(backgroundColor);

//draw sun
pushMatrix();
translate(100,1);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(267,316);
drawCloud();
popMatrix();


//////////// 3D

var backgroundColour = color(255, 255, 255);
var nodeColour = color(40, 168, 107);
var edgeColour = color(34, 68, 204);
var nodeSize = 8;

var node0 = [-100, -100, -100];
var node1 = [-100, -100,  100];
var node2 = [-100,  100, -100];
var node3 = [-100,  100,  100];
var node4 = [ 100, -100, -100];
var node5 = [ 100, -100,  100];
var node6 = [ 100,  100, -100];
var node7 = [ 100,  100,  100];
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

var edge0  = [0, 1];
var edge1  = [1, 3];
var edge2  = [3, 2];
var edge3  = [2, 0];
var edge4  = [4, 5];
var edge5  = [5, 7];
var edge6  = [7, 6];
var edge7  = [6, 4];
var edge8  = [0, 4];
var edge9  = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];
var edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

// Rotate shape around the z-axis
var rotateZ3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cosTheta - y * sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
};

var rotateY3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var z = node[2];
        node[0] = x * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + x * sinTheta;
    }
};

var rotateX3D = function(theta) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var y = node[1];
        var z = node[2];
        node[1] = y * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + y * sinTheta;
    }
};
rotateZ3D(30);
rotateY3D(30);
rotateX3D(30);

var draw= function() {
    background(backgroundColour);
    
    // Draw edges
    stroke(edgeColour);
    for (var e=0; e<edges.length; e++) {
        var n0 = edges[e][0];
        var n1 = edges[e][1];
        var node0 = nodes[n0];
        var node1 = nodes[n1];
        line(node0[0], node0[1], node1[0], node1[1]);
    }

    // Draw nodes
    fill(nodeColour);
    noStroke();
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        ellipse(node[0], node[1], nodeSize, nodeSize);
    }

};

mouseDragged = function() {
    rotateY3D(mouseX - pmouseX);
    rotateX3D(mouseY - pmouseY);
};

translate(200, 200);

/////////// multiple 

var backgroundColour = color(255, 255, 255);
var nodeColour = color(40, 168, 107);
var edgeColour = color(34, 68, 204);
var nodeSize = 8;

var createCuboid = function(x, y, z, w, h, d) {
    var nodes = [[x,   y,   z  ],
                 [x,   y,   z+d],
                 [x,   y+h, z  ],
                 [x,   y+h, z+d],
                 [x+w, y,   z  ],
                 [x+w, y,   z+d],
                 [x+w, y+h, z  ],
                 [x+w, y+h, z+d]];
    var edges = [[0, 1], [1, 3], [3, 2], [2, 0],
                 [4, 5], [5, 7], [7, 6], [6, 4],
                 [0, 4], [1, 5], [2, 6], [3, 7]];
    return { 'nodes': nodes, 'edges': edges };
};
    
var shape1 = createCuboid(-120, -20, -20, 240, 40, 40);
var shape2 = createCuboid(-120, -50, -30, -20, 100, 60);
var shape3 = createCuboid( 120, -50, -30,  20, 100, 60);
var shapes = [shape1, shape2, shape3];

// Rotate shape around the z-axis
var rotateZ3D = function(theta, nodes) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cosTheta - y * sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
};

var rotateY3D = function(theta, nodes) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var z = node[2];
        node[0] = x * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + x * sinTheta;
    }
};

var rotateX3D = function(theta, nodes) {
    var sinTheta = sin(theta);
    var cosTheta = cos(theta);
    
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var y = node[1];
        var z = node[2];
        node[1] = y * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + y * sinTheta;
    }
};

//rotateZ3D(30);
//rotateY3D(30);
//rotateX3D(30);

var draw= function() {
    background(backgroundColour);
    var nodes, edges;
    
    // Draw edges
    stroke(edgeColour);
    
    for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
        nodes = shapes[shapeNum].nodes;
        edges = shapes[shapeNum].edges;

        for (var e = 0; e < edges.length; e++) {
            var n0 = edges[e][0];
            var n1 = edges[e][1];
            var node0 = nodes[n0];
            var node1 = nodes[n1];
            line(node0[0], node0[1], node1[0], node1[1]);
        }   
    }

    // Draw nodes
    fill(nodeColour);
    noStroke();
    for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
        nodes = shapes[shapeNum].nodes;

        for (var n = 0; n < nodes.length; n++) {
            var node = nodes[n];
            ellipse(node[0], node[1], nodeSize, nodeSize);
        }
    }

};

mouseDragged = function() {
    var dx = mouseX - pmouseX;
    var dy = mouseY - pmouseY;
    
    for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
        var nodes = shapes[shapeNum].nodes;
        rotateY3D(dx, nodes);
        rotateX3D(dy, nodes);
    }
};

translate(200, 200);

/////////////////////

var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
};

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);
    
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};


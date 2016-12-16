/// Random walks

var Walker = function() {
	this.x = width/2;
	this.y = height/2;
};

Walker.prototype.display = function() {
	stroke(0,0,0);
	point(this.x, this.y);
};

/*
Walker.prototype.walk = function() {
	var choice = floor(random(4));
	if (choice === 0) {
		this.x++;
	} else if (choice === 1) {
		this.x--;
	} else if (choice === 2) {
		this.y++;
	} else {
		this.y--;
	}
};
*/

/*
Walker.prototype.walk = function() {
	var stepx = floor(random(3)) - 1;
	var stepy = floor(random(3)) - 1;
	this.x += stepx;
	this.y += stepy;
};
*/

/*
Walker.prototype.walk = function() {
	var stepx = random(-1,1);
	var stepy = random(-1,1);
	this.x += stepx;
	this.y += stepy;
};
*/

Walker.prototype.walk = function() {
    var r = random(1);
     
    // It will be most likely to move to the right
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
};

var w = new Walker();

draw = function() {
	w.walk();
	w.display();
};

//////////// normal distribution

var generator = new Random(1);
var num = generator.nextGaussian();
var standardDeviation = 60;
var mean = 200;
var x = standardDeviation*num + mean;

/// linear probability
// bigger, more often
var monteCarlo = function() {
	while (true) {
		var r1 = random(1);
		var probability = r1;
		var r2 = random(2);
		if (r2 < probability) {
			return r1;
		}
	}
};

for (var i =0; i<10; i++) {
	var num = monteCarlo();
	println(num);
	var radius = num*30;
	ellipse(num*380, 50, radius, radius);
}

//smaller, more often
var monteCarlo = function() {
	while (true) {
		var r1 = random(1);
		var probability = r1;
		var r2 = random(2);
		if (r2 > probability) {
			return r1;
		}
	}
};

for (var i =0; i<10; i++) {
	var num = monteCarlo();
	println(num);
	var radius = num*30;
	ellipse(num*380, 50, radius, radius);
}

/// distributions
var x1;
var xx1 = {};

var x2;
var xx2 = {};
var generator = new Random(1);

var x3;
var xx3 = {};
var monteCarlo = function() {
	while (true) {
		var r1 = random(1);
		var r2 = random(2);
		if (r2 > r1) {
			return r1;
		}
	}
};

var x4;
var xx4 = {};
var monteCarlo_b = function() {
	while (true) {
		var r1 = random(1);
		var r2 = random(2);
		if (r2 < r1) {
			return r1;
		}
	}
};

draw = function() {
    x1 = floor(random(400));
    if (x1 in xx1) {
        xx1[x1]++;
    } else {
        xx1[x1] = 1;
    }
    point(x1,100-xx1[x1]);
    
    
    var num = generator.nextGaussian();
    var standardDeviation = 60;
    var mean = 200;
    x2 = floor(standardDeviation*num + mean);
    if (x2 in xx2) {
        xx2[x2]++;
    } else {
        xx2[x2] = 1;
    }
    point(x2, 200-xx2[x2]);
    
    
    x3 = floor(monteCarlo()*400);
    if (x3 in xx3) {
        xx3[x3]++;
    } else {
        xx3[x3] = 1;
    }
    point(x3, 300-xx3[x3]);
    
    
    x4 = floor(monteCarlo_b()*400);
    if (x4 in xx4) {
        xx4[x4]++;
    } else {
        xx4[x4] = 1;
    }
    point(x4, 400-xx4[x4]);
};


/////////////
// Adapted from Dan Shiffman, natureofcode.com

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = 0;
    this.ty = 1000;
};

Walker.prototype.display = function() {
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
 
    // Move forward through “time.”
    this.tx += 0.01;
    this.ty += 0.01;
};

var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};

////////////

for (var x = 0; x < 100; x++) {
  for (var y = 0; y < 100; y++) {
    // A random brightness!
    var bright = random(255);
    stroke(bright, bright, bright);
    point(x, y);
  }
}

// 1D
var xoff = 0.0;
for (var x = 0; x < 100; x++) {
    for (var y = 0; y < 100; y++) {
        var bright = map(noise(xoff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
    }
    xoff += 0.01;
}

// 2D
var xoff = 0.0;
for (var x = 0; x < 100; x++) {
    var yoff = 0.0;
    for (var y = 0; y < 100; y++) {
        var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
        yoff += 0.01;
    }
    xoff += 0.01;
}

// 3D
var zOff = 0;
draw = function() {
	var xOff = 0.0;
	for (var x = 0; x < 100; x++) {
		var yOff = 0.0;
		for (var y = 0; y < 100; y++) {
			var bright = map(noise(xOff, yOff, zOff), 0, 1, 0, 255);
			stroke(bright, bright, bright);
			point(x, y);
			yOff += 0.01;
		}
		xOff += 0.01;
	}
	zOff += 0.08;
};


////////// vector
var position = new PVector(100, 100);
var velocity = new PVector(2, 5);

var draw = function() {
	background(255, 255, 255);
	position.add(velocity);
	if ((position.x > width) || (position.x < 0)) {
		velocity.mult(-1,1);
	}
    	if ((position.y > height) || (position.y < 0)) {
    		velocity.mult(1,-1);
    	}
    	noStroke();
    	fill(179, 179, 179);
    	ellipse(position.x, position.y, 16, 16);
};

////

var Walker = function() {
    this.position = new PVector(width/2, height/2);
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.position.x, this.position.y);
};

Walker.prototype.walk = function() {
    this.step = new PVector(random(-5,5), random(-5,5));
    this.position.add(this.step);
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};

///
v1.add(x,y);
v1.add(v2);
var w = PVector.add(v1,v2);

v1.sub(x,y);
v1.sub(v2);
var w = PVector.sub(v1,v2);

v1.mult(scalar);
v1.mult(v2);
var w = PVector.mult(v1,v2);
var w = PVector.mult(v1,n);

v1.div(scalar);
v1.div(v2);
var w = PVector.div(v1,v2);
var w = PVector.div(v1,n);

v1.mag();
v1.normalize();
v1.limit(max_magnitude);

var v1 = new PVector(10, 20);
angleMode = 'degrees';
println(v1.heading());
angleMode = 'radians';
println(v1.heading());

v1.dist(v2);
var d = PVector.dist(v1,v2);

angleMode = 'degees';
angleMode = 'radians';
var ang = PVector.angleBetween(v1, v2);

var dot = v1.dot(v2); //내적  v1.dot(v2) = v1.mag()*v2.mag()*costheta
var d = PVector.dot(v1,v2);

var v3 = v1.cross(v2); //외적 
var c = PVector.cross(v1,v2);

// 내적
var v1 = new PVector(10, 20);
line(0, 0, v1.x, v1.y);
var v2 = new PVector(250, 160); 
line(0, 0, v2.x, v2.y);

var d = v1.dot(v2);

angleMode = 'radians';

var ang = PVector.angleBetween(v1,v2);
println(ang);

var costheta = Math.cos(ang);
println(costheta);

var dotsame = v1.mag()*v2.mag()*costheta;
println(dotsame);

//
mouseMoved = function() {
    background(255, 255, 255);
    // Two PVectors, one for the mouse location and one for the center of the window
    var mouse  = new PVector(mouseX, mouseY);
    var center = new PVector(width/2, height/2);
    // PVector subtraction!
    mouse.sub(center);
    
    mouse.mult(0.5);
    
    var m = mouse.mag();
    fill(0, 0, 0);
    rect(0, 0, m, 10);
    
    // Draw a line to represent the vector - 
    // Simplify drawing it by first translating to center
    // and drawing the line from there
    pushMatrix();
    translate(width/2, height/2);
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    popMatrix();
};

//////
var  v = new PVector(50, 75);

var drawSaber = function() {
    background(0, 0, 0);
    // glow
    strokeWeight(8);
    stroke(107, 206, 219, 150);
    line(0, 400, v.x, 400-v.y);
    // blade
    stroke(255, 255, 255);
    strokeWeight(4);
    line(0, 400, v.x, 400-v.y);
};

keyPressed = function() {
  if (keyCode === UP) {
    v.mult(2);
  } else if (keyCode === DOWN) {
    v.div(2);
  }
  drawSaber();
};

drawSaber();

////
var Mover = function() {
  this.position = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(-0.001, 0.01);
};

Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.velocity.limit(10);
  this.position.add(this.velocity);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 48, 48);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

////
var Mover = function() {
  this.position = new PVector(width/2, height/2);
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(-0.001, 0.01);
};

Mover.prototype.update = function() {
  this.acceleration = PVector.random2D();
  this.acceleration.mult(random(2));
  this.velocity.add(this.acceleration);
  this.velocity.limit(10);
  this.position.add(this.velocity);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 48, 48);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var mover = new Mover();

var draw = function() {
  background(255, 255, 255);
  
  mover.update();
  mover.checkEdges();
  mover.display(); 
};
var mover = new Mover();

var draw = function() {
  background(255, 255, 255);
  
  mover.update();
  mover.checkEdges();
  mover.display(); 
};

///////
// Adapted from Dan Shiffman, natureofcode.com

var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Mover.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.6);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
};

Mover.prototype.checkEdges = function() {

    if (this.position.x > width) {
        this.position.x = 0;
    } else if (this.position.x < 0) {
        this.position.x = width;
    }
    
    if (this.position.y > height) {
        this.position.y = 0;
    } else if (this.position.y < 0) {
        this.position.y = height;
    }
};

var mover = new Mover();

var draw = function() {
    background(255, 255, 255);
    
    mover.update();
    mover.checkEdges();
    mover.display(); 
};

////

var Mover = function() {
  this.position = new PVector(random(width), random(height));
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(0, 0);
};

Mover.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 10, 10);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var movers = [];

for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(); 
}

draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].display(); 
    }
};



////
var Mover = function() {
    // Set mass equal to 1 for simplicity
    this.mass = 1;
    this.position = new PVector(30, 30);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

// Simulates Newton's second law
// Receive a force, divide by mass, add to acceleration
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    // Simulates Motion 101 from the vectors tutorial
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // Now we make sure to clear acceleration each time
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255, 127);
    // Scale the size according to the mass, as a simple visualization of mass
    ellipse(this.position.x, this.position.y, this.mass*30, this.mass*30);
};

// Even though we've said we shouldn't check velocity directly, 
// there are some exceptions. Here we change it as a quick and easy
// way to bounce our mover off the edges.
Mover.prototype.checkEdges = function() {
    if (this.position.x > width) {
        this.position.x = width;
        this.velocity.x *= -1;
    } else if (this.position.x < 0) {
        this.velocity.x *= -1;
        this.position.x = 0;
    }
    if (this.position.y > height) {
        this.velocity.y *= -1;
        this.position.y = height;
    }
};

var m = new Mover(); 

var draw = function() {
    background(50, 50, 50);
    
    var wind = new PVector(0.01, 0);
    var gravity = new PVector(0, 0.1);
    m.applyForce(wind);
    m.applyForce(gravity);
    
    m.update();
    m.display();
    m.checkEdges();
};

/////

var Ball = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.color = color(random(255), random(255), random(255), 127);
};

Ball.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};

Ball.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Ball.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Ball.prototype.calculateWallForce = function() {
    var force_x = 0;
    var force_y = 0;
    
    if (this.position.x > width) {
        force_x = -1;
    } else if (this.position.x < 0) {
        force_x = 1;
    }

    if (this.position.y > height) {
        force_y = -1;
    } else if (this.position.y < 0) {
        force_y =1;
    }
    return new PVector(force_x, force_y);
};

var balls = [];

for (var i = 0; i < 20; i++) {
    balls[i] = new Ball(random(0.1, 5), 0, 0);
}

var wind = new PVector(0.01, 0);
var gravity = new PVector(0, 0.1);

draw = function() {
    background(255, 255, 255);

    for (var i = 0; i < balls.length; i++) {
        balls[i].applyForce(wind);
        balls[i].applyForce(gravity);
        balls[i].applyForce(balls[i].calculateWallForce());
        balls[i].update();
        balls[i].display();
    }
};
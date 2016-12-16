var hero = aHero();
var newSaga = function() {
	var foil = aFoil();
	var saga = function() {
		var deed = aDeed();
		log(hero + deed + foil);
	};
	saga();
	saga();
};
newSaga();
newSaga();

//////////////

var sagas = [];
var hero = aHero();
var newSaga() = function() {
	var foil = aFoil();
	sagas.push(function() {
		var deed = aDeed();
		log(hero+deed+foil);
	});
};
newSaga();
sagas[0]();
sagas[0]();
newSaga();
sagas[0]();
sagas[1]();
sagas[0]();



///////////////////////////////////
//////////////////////////////////

var gold = {a:1};
log(gold.a); // 1
log(gold.z); // undefined

var blue = extend({}, gold);
blue.b = 2;
log(blue.a); // 1
log(blue.b); // 2
log(blue.z); // undefiend

var rose = Object.create(gold);
rose.b = 2;
log(rose.a); // 1
log(rose.b); // 2
log(rose.z); undefiend

gold.z = 3;
log(blue.z); // undefiend
log(rose.z); // 3

///////////////////////////////////
//////////////////////////////////

var amy = {loc:1};
amy.loc++;
var ben = {loc:9}
ben.loc++;

/////////////

var move = function(car) {
	car.loc++;
}

var amy = {loc:1};
move(amy);
var ben = {loc:9};
move(ben);

////////////////

var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = move;
	return obj;
}

var move = function() {
	this.loc++;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

////////////////////

var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    }
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

///////////////////////

var Car = function(loc) {
	var obj = {loc:loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

///////////////////////////

var Car = function(loc) {
	var obj = {loc:loc};
	obj.move = move;
	obj.on = on;
	obj.off = off;
	return obj;
};

var move = function() {
	this.loc++;
};

var on = function() {
	...
};

var off = function() {
	...
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

///////////////////////

var Car = function(loc) {
	var obj = {loc:loc};
	extend(obj, methods);
	return obj;
};

var methods = {
	move : function() {
	this.loc++;
	},
 	on : function() {
	...
	},
	off : function() {
	...
	}
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

///////////////////////

var Car = function(loc) {
	var obj = {loc:loc};
	extend(obj, Car.methods);
	return obj;
};

Car.methods = {
	move : function() {
	this.loc++;
	},
 	on : function() {
	...
	},
	off : function() {
	...
	}
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

///////////////////////

var Car = function(loc) {
	var obj = Object.create(Car.methods);
	obj.loc = loc;
	return obj;
};

Car.methods = {
	move : function(){
		this.loc++;
	}
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

//////////////////////
var Car = function(loc) {
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj
};

Car.prototype.move = fuction() {
	this.loc++;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

//////////////////////
var Car = function(loc) {
	// this = Object.create(Car.prototype);
	this.loc = loc;
	// return this;
};

Car.prototype.move = fuction() {
	this.loc++;
};

var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();

//////////////////////

var Van = function(loc) {
	var obj = {loc:loc};
	obj.move = function() {
		obj.loc++;
	};
	obj.grab = function() {
		...
	};
	return obj;
};

var Cop = function(loc) {
	var obj = {loc:loc};
	obj.move = function() {
		obj.loc++;
	};
	obj.call = function() {
		...
	};
	return obj;
};

var amy = Van(1);
amy.move();
var ben = Van(9);
ben.move();
var cal = Cop(2);
cal.move();
cal.call();

//////////////////////

var Car = function(loc){
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++
	};
	return obj;
};

var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function() {
		...
	};
	return obj;
};

var Cop = function(loc) {
	var obj = Car(loc);
	obj.call = function() {
		...
	};
	return obj;
};

var amy = Van(1);
amy.move();
var ben = Van(9);
ben.move();
var cal = Cop(2);
cal.move();
cal.call();

/////////////////////////

var Car = function(loc_c) {
	this.loc = loc_c;
};

Car.prototype.move = function() {
	this.loc++;
};

var Van = function(loc_v) {
	Car.call(this, loc_v);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {
	...
};

var zed = new Car(3);
zed.move();
var amy = new Van(9);
amy.move();
amy.grab();
var xs = [{},{},{},{}];

var uni_distri = function() {
    var uni_x = floor(random(400));
    if (uni_x in xs[0]) {
        xs[0][uni_x]++;
    } else {
        xs[0][uni_x] = 1;
    }
    point(uni_x,100-xs[0][uni_x]);
};

var generator = new Random(1);
var standardDeviation = 60;
var mean = 200;
var normal_distri = function() {
    var num = generator.nextGaussian();
    var normal_x = floor(standardDeviation*num + mean);
    if (normal_x in xs[1]) {
        xs[1][normal_x]++;
    } else {
        xs[1][normal_x] = 1;
    }
    point(normal_x, 200-xs[1][normal_x]);
};

var monteCarlo_s = function() {
	while (true) {
		var r1 = random(1);
		var probability = r1;
		var r2 = random(2);
		if (r2 > probability) {
			return r1;
		}
	}
};
var smaller_distri = function() {
    var smaller_x = floor(monteCarlo_s()*400);
    if (smaller_x in xs[2]) {
        xs[2][smaller_x]++;
    } else {
        xs[2][smaller_x] = 1;
    }
    point(smaller_x, 300-xs[2][smaller_x]);
};

var monteCarlo_b = function() {
	while (true) {
		var r1 = random(1);
		var probability = r1;
		var r2 = random(2);
		if (r2 < probability) {
			return r1;
		}
	}
};
var bigger_distri = function() {
    var bigger_x = floor(monteCarlo_b()*400);
    if (bigger_x in xs[3]) {
        xs[3][bigger_x]++;
    } else {
        xs[3][bigger_x] = 1;
    }
    point(bigger_x, 400-xs[3][bigger_x]);
};


draw = function() {
    uni_distri();
    normal_distri();
    smaller_distri();
    bigger_distri();
};

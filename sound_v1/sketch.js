/*
    sound sampler v1!
*/

var guitarSound;
var drumSound;

function preload() {
	guitarSound = loadSound('guitar.wav');
	drumSound = loadSound('drums.wav');
}

function setup() {
	createCanvas(640, 360);	
}

function draw() {
	background(220);

	if (guitarSound.isPlaying()) {
		background('yellow');
	}

	var currentTime =  guitarSound.currentTime();
	var duration = guitarSound.duration();
	var timeElapsed = map(currentTime, 0, duration, 0, width);

	fill('gold');
	noStroke();
	rect(0, height - 100, timeElapsed, 100);

	// change volume
	var vol = map(mouseY, 0, height, 1, 0);
	guitarSound.setVolume(vol);

	fill('salmon');
	rect(0, mouseY, width, height);

	// pan left and right
	var pan = map(mouseX, 0, width, -1, 1, true);
	guitarSound.pan(pan);

	stroke('pink');
	strokeWeight(10);
	line(mouseX, 0, mouseX, height);
}

function mousePressed() {
	if (guitarSound.isPlaying()) {
		guitarSound.pause();
	} else {
		guitarSound.play();
	}
}
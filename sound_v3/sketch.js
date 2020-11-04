/*
    custom functions with mouse to play sounds
*/

var guitarSound;
var drumsSound;
var daySound;
var technoSound;
var rnbSound;

function preload() {
	guitarSound = loadSound('guitar.wav');
	drumsSound = loadSound('drums.wav');
	daySound = loadSound('niceday.wav');
	technoSound = loadSound('techno.mp3');
    rnbSound = loadSound('R&B.wav');
}

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);

	button(100, 100, 100, guitarSound);
	button(300, 100, 100, drumsSound);
	button(500, 100, 100, daySound);

	
	rectButton(100, 300, 100, 50, technoSound);
	rectButton(400, 300, 100, 50, rnbSound);
}

function rectButton(x, y, w, h, sound) {
	// detect mouse inside rect //
	if (mouseX > x && mouseX < x + w &&
		mouseY > y && mouseY < y + h) {
		fill('lightseagreen');

	    if (mouseIsPressed && !sound.isPlaying()) {
	    	sound.play();
	    }
	} else {
		fill('gold');
	}
	rect(x, y, w, h);
}

function button(x, y, s, sound) {
	var d = dist(x, y, mouseX, mouseY);
	// distance //
	if (d < s / 2) {
		// inside the button //
	fill('lightseagreen');

	if (mouseIsPressed && !sound.isPlaying()) {
		sound.play();
	}
	} else {
		// outside the button //
		fill('gold');
	}
	ellipse(x, y, s);
}
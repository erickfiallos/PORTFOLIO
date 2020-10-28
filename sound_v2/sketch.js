/*
    sound sampler v2!
*/

var guitarSound;
var drumsSound;
var daySound;

function preload() {
	guitarSound = loadSound('guitar.wav');
	drumsSound = loadSound('drums.wav');
	daySound = loadSound('niceday.wav');
}

function setup() {
	createCanvas(640, 360);
	drumsSound.playMode('restart');
	guitarSound.playMode('restart');
	daySound.playMode('restart');
}

function draw() {
	background(220);

	if (drumsSound.isPlaying()) {
		background('gold');
	}

	if (guitarSound.isPlaying()) {
		background('salmon');
	}

	if (daySound.isPlaying()) {
		background('lightseagreen');
	}

}

function keyPressed() {
	if (keyCode == 69) {  // E key
        drumsSound.play();
	}

	if (keyCode == 82) {  // R key
		drumsSound.pause();
	}

	if (keyCode == 65) {  // A key
		guitarSound.play();
	}

	if (keyCode == 81) {  // Q key
		guitarSound.pause();
	}

	if (keyCode == 68) {  // D key
		daySound.play();
	}

	if (keyCode == 70) {  // F key
		daySound.pause();
	}
}
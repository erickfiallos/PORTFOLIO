/*
  Final project
*/

var electronicSound;

function preload() {
    electronicSound = loadSound('relax.wav');
}

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('orange'); // sky

    // mountains
    for (let x = -95; x < width; x += random(100, 200)) {

        let r = random(30, 95); //red
        let g = random(35, 90); //green
        let b = random(20, 40); //blue
        fill(r, g, b);
        noStroke();
        let y = random(50, 200);
    	triangle(x, height, x + 200, y, x + 400, height);
    }

    //buildings
    for (let x = 0; x < width; x += random(50, 70)) {
    	fill('black');
    	let w = random(50, 95);
    	let h = random(40, 250);
    	rect(x, height - 15, w, h);
    }

    //snow
    for(let x = 100; x < width; x += random(5, 10)) {
        fill('white');
        let h = random(10, 500);
        ellipse(x, height - h, 7, 7);
    }
}

function keyPressed() {
    if (keyCode == 69) {  // E key
        electronicSound.play();
    }

    if (keyCode == 82) {  // R key
        electronicSound.pause();
    }
}
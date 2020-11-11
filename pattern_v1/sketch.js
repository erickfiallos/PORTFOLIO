/*
  pattern v1
  javascript loops
*/

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('royalblue');

    //stars
    for(let x = 100; x < width; x += random(10, 20)) {
    	fill('white');
        let h = random(150, 310);
        ellipse(x, height - h, 10, 10);
    }

    // mountains
    for (let x = -95; x < width; x += random(100, 200)) {

        let a = random(30, 65);
        let b = random(45, 90);
        let c = random(20, 50);
        let d = random(50, 70);
        fill(a, b, c, d);
        noStroke();
        let y = random(50, 200);
    	triangle(x, height, x + 200, y, x + 400, height);
    }

    //buildings
    for (let x = 0; x < width; x += random(20, 55)) {
    	fill('slategray');
    	let w = random(40, 80);
    	let h = random(30, 170);
    	rect(x, height - 15, w, h);
    }
}
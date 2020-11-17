/*
   geerative pattern
*/

function setup() {
	createCanvas(600, 400);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('black');

	let w = random(5, 80);
	let h = w;
	let horizon = random(height/2, height - w);

	for (let x = 0; x <= width; x += w) { // colums
		for (let y = 0; y <= height; y += h) {  // rows

             
            let r, g, b;
            if (y < horizon) {
            	// more green
            	r = random(55, 100);
            	g = random(255);
            	b = map(y, 0, height, 40, 255);
            } else {
            	// more blue
            	r = random(160, 225);
            	g = random(80);
            	b = random(200, 255);
            }

            fill(r, g, b, 127);
            noStroke();

			ellipse(
				x + random(-20, 20), 
				y + random(-10, 10), 
				w + random(50), 
				h + random(50)
			);
		}
	}
}
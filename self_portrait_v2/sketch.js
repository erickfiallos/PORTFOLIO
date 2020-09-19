/*
    second version of my self portrait
    By Erick Fiallos
*/

// global scope
var x = 345;
var y = 125;

var eyeSize = 100;
var irisSize = 45;
var pupilSize = 20;
var earSize = 100;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('black');

   // ears
    stroke(0)
    fill("peru");
   	circle(x - 170, y + 50, earSize); //left
	circle(x + 180, y + 50, earSize); //right

    // face
    fill("burlywood");
	rect(x - 195, y - 78, 400, 260, 30);


    // eyes
    fill(255);
	circle(x - 65, y, eyeSize); //left eye
	circle(x + 65, y, eyeSize); //right eye

	fill("sienna");
	circle(x - 65, y, irisSize); //left iris
	circle(x + 65, y, irisSize); //right iris

	fill(0);
	circle(x - 65, y, pupilSize); //left pupil
	circle(x + 65, y, pupilSize); //right pupil

    // mouth
    fill("peachpuff");
	rect(x - 55, y + 105, 120, 50, 25);
    
    // nose
    fill("peru");
	triangle(x - 15, y + 28, x + 15, y + 28, x + 1, y + 90);

	// glasses
	fill("lightcyan")
	line(x - 195, y + 7, x - 112, y + 15); //left
	line(x + 112, y + 15, x + 205, y + 7); //right
	line(x + 18, y + 20, x - 18, y + 20); //center
	noStroke();
	arc(x - 65, y + 35, eyeSize, eyeSize, 0, PI + QUARTER_PI, CHORD); //left
	arc(x + 65, y + 35, eyeSize, eyeSize, 0, PI + QUARTER_PI, CHORD); //right

}
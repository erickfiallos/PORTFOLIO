/*
    second version of my self portrait
    By Erick Fiallos
*/

// global scope
var x;
var y = 125;

var eyeSize = 100;
var irisSize = 45;
var pupilSize = 20;
var earSize = 100;

function setup() {
	createCanvas(640, 360);
	x = width / 2;
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
	var irisPosition = map(mouseY, 0, height, irisSize - 4, irisSize + 4);
	var irisPosition = map(mouseX, 0, width, irisSize - 4, irisSize + 4);
	circle(irisPosition + 215, irisPosition + 87, irisSize); //left iris
	circle(irisPosition + 345, irisPosition + 87, irisSize); //right iris

	fill(0);
	var pupilPosition = map(mouseY, 0, height, pupilSize - 3.5, pupilSize + 3.5);
	var pupilPosition = map(mouseX, 0, width, pupilSize - 3.5, pupilSize + 3.5);
	circle(pupilPosition + 239, pupilPosition + 110, pupilSize); //left pupil
	circle(pupilPosition + 369, pupilPosition + 110, pupilSize); //right pupil

    // mouth
    fill("peachpuff");
    var mouthHeight = map(mouseY, 0, height, 50, 80)
	rect(x - 55, y + 105, 120, mouthHeight, 25);
    
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
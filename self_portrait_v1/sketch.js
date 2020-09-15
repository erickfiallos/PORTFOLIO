/*
    First version of my self portrait
    By Erick Fiallos
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('turquoise');

   // ears
    stroke(0)
    fill("peru");
   	circle(175, 175, 100); //left
	circle(525, 175, 100); //right

    // face
    fill("burlywood");
	rect(150, 47, 400, 260, 30);


    // eyes
    fill(255);
	circle(280, 125, 100); //left eye
	circle(410, 125, 100); //right eye
	fill("sienna");
	circle(280, 125, 45); //left iris
	circle(410, 125, 45); //right iris
	fill(0);
	circle(280, 125, 20); //left pupil
	circle(410, 125, 20); //right pupil

    // mouth
    fill("peachpuff");
	rect(290, 230, 120, 50, 25);
    
    // nose
    fill("peru");
	triangle(330, 153, 360, 153, 346, 215);

	// glasses
	fill("lightcyan")
	line(150, 132, 233, 140); //left
	line(457, 140, 550, 132); //right
	line(363, 145, 327, 145); //center
	noStroke();
	arc(280, 160, 100, 100, 0, PI + QUARTER_PI, CHORD); //left
	arc(410, 160, 100, 100, 0, PI + QUARTER_PI, CHORD); //right

}
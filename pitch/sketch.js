/*
  final project pitch
  title
  description
  theme
  interaction
  graphics
*/

var currentSlide = 1;
var totalSlides = 4;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;

var quitoImage;

function preload() {
    quitoImage = loadImage('Quito.jpg');
}

function setup() {
	createCanvas(960, 640) ;
}

function draw() {
	background(51);

	// slides
	if (currentSlide == 1) {
		// title
		textSize(60);
		fill('yellow')
		textAlign(CENTER, CENTER);
		// title
		text('Generative Landscape of', width/2, height/2 - 50);
		textSize(60);
		text('My Favorite place in Earth', width/2, height/2 + 50);
	} else if (currentSlide == 2) {
		// description
		textAlign(LEFT);
		fill(255);
		textSize(30);
		text('My project is a genrative landscape about my favorite place using p5 and randomness, it will be a representation of the image below', 50 , 100, width - 100);
	
	    image(quitoImage, 160, 190, quitoImage.width / 2, quitoImage.height / 2);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(35);
		text('User will make new patterns by clicking on the canvas, creating new views of the place while playing with colors and shapes', 50, 100, width - 100);
	
	}else if (currentSlide == 4) {
		// describe the graphic
		textAlign(CENTER);
		fill(255);
		textSize(35);
		text('The graphcis iclude circles, squares and triangles', 50, 100, width - 50);
        
        circle(width/2, height/2, 100);
        triangle(30, 75, 58, 20, 86, 75);
        square(width - 130, height - 180, 100);

    }

    // draw buttons
    if (currentSlide < totalSlides) {
        button(nextBtnX, nextBtnY, "Next");

    }

    if (currentSlide > 1) {
        button(backBtnX, backBtnY, "Back");

    }

}
// displaying buttons
function button(x, y, displayText) {

	// draw buttons
    stroke('lightblue');
    fill('yellow');
    if (mouseX > x && mouseX < x + btnW &&
    	mouseY > y && mouseY < y + btnH) {
    	fill(51);

        if (mouseIsPressed) {
        	stroke(51);
        }
    }

	strokeWeight(4);
	rect(x, y, btnW, btnH, 15);

    noStroke();
    fill('lightblue');
    textSize(25);
    textAlign(CENTER,CENTER);
	text(displayText, x, y, btnW, btnH);
}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
    	mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
    	mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
        	currentSlide--;
		}
	}
}
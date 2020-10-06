/*
    meme v1
    by erick fiallos
    text + images
*/
var title = 'When you are in college but you remember how easy high school was';
var description = 'it used to be a beautiful place';

var thanosImage;

function preload() {
    thanosImage = loadImage('meme image.jpg');
}

function setup() {
	var canvas = createCanvas (640, 360);
	canvas.drawingContext.miterLimit = 1;
}

function draw() {
	background (220);

	/* images*/
	image(thanosImage, 0, 0, thanosImage.width / 1.5, thanosImage.height / 1.5);
    


    /* text */
    textSize(17);
    fill('white');
    stroke(20);
    strokeWeight(10);
    textFont('century gothic');
    textAlign(CENTER, BOTTOM);
	text(title, width / 2, height / 2 - 130);

    var titleWidth = textWidth(title);

    textSize(25);
    fill('orange');
    stroke(10);
    textAlign(CENTER);
    text(description, width / 2 - titleWidth / 2, height / 2 + 130, titleWidth);

}
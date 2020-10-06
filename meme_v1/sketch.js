/*
    meme v1
    by erick fiallos
    text + images
*/
var title = 'MMP 210';
var description = 'Draws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters. A default font will be used unless a font is set with the textFont() function and a default size will be used unless a font is set with textSize().';

function setup() {
	var canvas = createCanvas (640, 360);
	canvas.drawingContext.miterLimit = 1;
}

function draw() {
	background (220);

    textSize(100);
    fill('plum');
    stroke(255);
    strokeWeight(10);
    textFont('century gothic');
    textAlign(CENTER, BOTTOM);
	text(title, width / 2, height / 2);

    var titleWidth = textWidth(title);

    textSize(14);
    noStroke();
    textAlign(LEFT);
    text(description, width / 2 - titleWidth / 2, height / 2 + 40, titleWidth);

}
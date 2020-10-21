/*
    meme v2
    condtional logic
*/

var thanosImage; 
var thanosImage2;
var s = 1;
var scaleSpeed = 0.01;
var imageShear = 0;

function preload() {
    thanosImage = loadImage("meme image.jpg");
    thanosImage2 = loadImage("meme image 2.jpg");
}

function setup() {
    createCanvas(640, 360);
    textAlign(CENTER, CENTER);
    textFont('century gothic');
}

function draw() {
    background(0);

    if (mouseIsPressed) {
        image(thanosImage2, 0, 0, thanosImage2.width / 1.5, thanosImage2.height / 1.5);
        shearX(imageShear);
        imageShear += 0.01;
        scale(s);
        s += scaleSpeed;
        if (s > 2 || s < 0.75)  {
            scaleSpeed *= -1;
        }
        fill('white');
        text("It used to be a beautiful place", width / 2, height / 2);
        textSize(25);
    } else {
        image(thanosImage, 0, 0, thanosImage.width / 1.5, thanosImage.height / 1.5);
        fill('violet');
        stroke(0.75);
        text("When you are in college but you remember how easy high school was", width / 2, height / 2);
        textSize(18);
    }


}
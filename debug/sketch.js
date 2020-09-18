/*
    debug exercise
*/

var faceSize = "100" * 3;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('lightblue');

    // face
    noStroke();
    fill("255");
    ellipse(350, 320, faceSize); 

    // right eye
    fill(0);
    ellipse (450, 250, 100);

    // left eye
    fill(0);
    ellipse(320, 250, 100);

    // mouth
    ellipse(350, 300 + 100, 100, 50);

    // bubble
    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    // text
    fill("black");
    textSize(28);
    textFont("monospace");
    text('Nice work!', 65, 110);
}
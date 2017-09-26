function setup() {
createCanvas(windowWidth, windowHeight);
background(255,255,0);
frameRate(6);
}
function draw() {
if (mouseIsPressed) {
var size = random(10, 100);
ellipse(mouseX, mouseY, size, size);
}
}

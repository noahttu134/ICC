function setup() {
createCanvas(windowWidth, windowHeight);
background(255,255,0);
frameRate(30);
}
function draw() {
if (mouseIsPressed) {
  
var size = random(10, 100);
  noStroke();
ellipse(mouseX, mouseY, size, size);
}
}

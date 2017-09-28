var cx = [];
var cy = [];
var N, i;
function setup() {
createCanvas(windowWidth, windowHeight);
background(0);

N = 20;
for (i=0; i<N; i++) {
cx[i] = random(0, width);
cy[i] = random(0, height);
}
}

function draw() {


  for (i=0; i<N; i++) {
      cx[i]=cx[i]+random(-20, 20);
      cy[i]=cy[i]+random(-10, 10);

      noFill();
      smooth();
      strokeWeight(0.1);
      stroke(0,0,255);
      ellipse(cx[i], cy[i], 50, 50);
}
}

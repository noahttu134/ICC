var cx = [];
var cy = [];
var N, i;
function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(10);

N = 1000;
for (i=0; i<N; i++) {
cx[i] = random(0, width);
cy[i] = random(0, height);
}
}

function draw() {
  
background(125);
noStroke();
fill(255);

for (i=0; i<N; i++) {
cx[i] = cx[i] + random(0, mouseX/100);
cy[i] = cy[i] + random(0, 10);
var snowSz=random(5,10);
ellipse(cx[i], cy[i], snowSz, snowSz);
if (cx[i]>windowWidth){cx[i]=0;}
if (cy[i]>windowHeight){cy[i]=0;}
}

}

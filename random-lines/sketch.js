function setup() {
  createCanvas(300, 300);
  strokeWeight(5);
  background(50);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(random(width), random(height), random(width), random(height));
}
